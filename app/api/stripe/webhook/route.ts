import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';


// Inicializar cliente Stripe com a chave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;


export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = (await headers()).get('stripe-signature');

  
    if (!signature) {
      console.error('Missing stripe-signature header');
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }
  
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: `Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}` },
        { status: 400 }
      );
    }

    console.log('Webhook received:', event.type);
    console.log('Event data:', JSON.stringify(event.data.object, null, 2));


    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutCompleted(session);
        break;
      }

      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handlePaymentSucceeded(session);
        break;
      }

      case 'checkout.session.async_payment_failed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handlePaymentFailed(session);
        break;
      }

      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionCreated(subscription);
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdated(subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaid(invoice);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentFailed(invoice);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function findOrCreateCustomer(email: string, stripeCustomerId?: string, name?: string) {

  let customer = await prisma.customer.findUnique({
    where: { email },
  });

  if (!customer) {
    customer = await prisma.customer.create({
      data: {
        email,
        name,
        stripeCustomerId,
      },
    });
    console.log('Customer created:', customer.id);
  } else if (stripeCustomerId && !customer.stripeCustomerId) {
    console.log('Customer exists but missing stripeCustomerId. Updating...');
    customer = await prisma.customer.update({
      where: { id: customer.id },
      data: { stripeCustomerId },
    });
    console.log('Customer updated with stripeCustomerId:', customer.id);
  } else {
    console.log('Customer found:', customer.id);
  }

  return customer;
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log('Checkout completed:', session.id);
  console.log('Customer:', session.customer);
  console.log('Customer email:', session.customer_details?.email);
  console.log('Amount total:', session.amount_total);
  console.log('Payment status:', session.payment_status);
  console.log('Metadata:', session.metadata);


  if (!session.customer_details?.email) {
    console.error('No customer email in session');
    return;
  }

  try {

    const customer = await findOrCreateCustomer(
      session.customer_details.email,
      session.customer as string | undefined,
      session.customer_details.name || undefined
    );

    console.log('Customer resolved:', customer.id);

 
    const order = await prisma.order.create({
      data: {
        stripeSessionId: session.id,
        customerId: customer.id,
        planId: session.metadata?.planId || 'unknown',
        planName: session.metadata?.planName || 'Unknown Plan',
        amount: session.amount_total || 0,
        currency: session.currency || 'brl',
        status: 'completed',
        paymentStatus: session.payment_status,
        metadata: session.metadata as any,
      },
    });

    console.log('Order created:', order.id);


  } catch (error) {
    console.error(' Error handling checkout completed:', error);
    if (error instanceof Error) {
        console.error('Stack:', error.stack);
    }
  }
}


async function handlePaymentSucceeded(session: Stripe.Checkout.Session) {
  console.log('Payment succeeded:', session.id);
  console.log('Customer email:', session.customer_details?.email);

  try {

    const order = await prisma.order.update({
      where: { stripeSessionId: session.id },
      data: { 
        status: 'paid',
        paymentStatus: 'paid',
      },
    });

    console.log('Order updated to paid:', order.id);

  } catch (error) {
    console.error('Error handling payment succeeded:', error);
  }
}

async function handlePaymentFailed(session: Stripe.Checkout.Session) {
  console.log('Payment failed:', session.id);
  console.log('Customer email:', session.customer_details?.email);

  try {
    const order = await prisma.order.update({
      where: { stripeSessionId: session.id },
      data: { 
        status: 'failed',
        paymentStatus: 'unpaid',
      },
    });

    console.log('Order updated to failed:', order.id);

  } catch (error) {
    console.error('Error handling payment failed:', error);
  }
}


async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  console.log('Subscription created:', subscription.id);
  console.log('Customer:', subscription.customer);
  console.log('Status:', subscription.status);
  console.log('Current period end:', (subscription as any).current_period_end ? new Date((subscription as any).current_period_end * 1000) : 'N/A');

  try {
    const customer = await prisma.customer.findUnique({
      where: { stripeCustomerId: subscription.customer as string },
    });

    if (!customer) {
      console.error('Customer not found for subscription');
      return;
    }

    const dbSubscription = await prisma.subscription.create({
      data: {
        stripeSubscriptionId: subscription.id,
        customerId: customer.id,
        status: subscription.status,
        currentPeriodStart: (subscription as any).current_period_start ? new Date((subscription as any).current_period_start * 1000) : new Date(),
        currentPeriodEnd: (subscription as any).current_period_end ? new Date((subscription as any).current_period_end * 1000) : new Date(),
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
        trialStart: subscription.trial_start ? new Date(subscription.trial_start * 1000) : null,
        trialEnd: subscription.trial_end ? new Date(subscription.trial_end * 1000) : null,
        metadata: subscription.metadata as any,
      },
    });

    console.log('Subscription created in DB:', dbSubscription.id);
  } catch (error) {
    console.error('Error handling subscription created:', error);
  }
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log('Subscription updated:', subscription.id);
  console.log('New status:', subscription.status);
  console.log('Current period end:', (subscription as any).current_period_end ? new Date((subscription as any).current_period_end * 1000) : 'N/A');

  try {
    const dbSubscription = await prisma.subscription.update({
      where: { stripeSubscriptionId: subscription.id },
      data: {
        status: subscription.status,
        currentPeriodStart: (subscription as any).current_period_start ? new Date((subscription as any).current_period_start * 1000) : new Date(),
        currentPeriodEnd: (subscription as any).current_period_end ? new Date((subscription as any).current_period_end * 1000) : new Date(),
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
        canceledAt: subscription.canceled_at ? new Date(subscription.canceled_at * 1000) : null,
      },
    });

    console.log('Subscription updated in DB:', dbSubscription.id);
  } catch (error) {
    console.error('Error handling subscription updated:', error);
  }
}


async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('Subscription deleted:', subscription.id);
  console.log('Customer:', subscription.customer);

  try {
    const dbSubscription = await prisma.subscription.update({
      where: { stripeSubscriptionId: subscription.id },
      data: { 
        status: 'canceled',
        canceledAt: new Date(),
      },
    });

    console.log('Subscription canceled in DB:', dbSubscription.id);


    await deactivateUserAccess(subscription.customer as string);
  } catch (error) {
    console.error('Error handling subscription deleted:', error);
  }
}


async function handleInvoicePaid(invoice: Stripe.Invoice) {
  console.log('Invoice paid:', invoice.id);
  console.log('Customer:', invoice.customer);
  console.log('Amount paid:', invoice.amount_paid);
  console.log('Subscription:', typeof (invoice as any).subscription === 'string' ? (invoice as any).subscription : (invoice as any).subscription?.id);

  try {
    const customer = await prisma.customer.findUnique({
      where: { stripeCustomerId: invoice.customer as string },
    });

    if (!customer) {
      console.error('Customer not found for invoice');
      return;
    }

    let subscriptionId: string | null = null;
    if ((invoice as any).subscription) {
      const stripeSubId = typeof (invoice as any).subscription === 'string' 
        ? (invoice as any).subscription 
        : (invoice as any).subscription.id;
      const subscription = await prisma.subscription.findUnique({
        where: { stripeSubscriptionId: stripeSubId },
      });
      subscriptionId = subscription?.id || null;
    }


    const payment = await prisma.payment.create({
      data: {
        stripeInvoiceId: invoice.id,
        customerId: customer.id,
        subscriptionId,
        amount: invoice.amount_due,
        amountPaid: invoice.amount_paid,
        currency: invoice.currency,
        status: 'paid',
        paidAt: invoice.status_transitions?.paid_at 
          ? new Date(invoice.status_transitions.paid_at * 1000) 
          : new Date(),
        metadata: invoice.metadata as any,
      },
    });

    console.log('Payment created in DB:', payment.id);
  } catch (error) {
    console.error('Error handling invoice paid:', error);
  }
}


async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  console.log('Invoice payment failed:', invoice.id);
  console.log('Customer:', invoice.customer);
  console.log('Amount due:', invoice.amount_due);

  try {
    const customer = await prisma.customer.findUnique({
      where: { stripeCustomerId: invoice.customer as string },
    });

    if (!customer) {
      console.error('Customer not found for failed invoice');
      return;
    }

  
    let subscriptionId: string | null = null;
    if ((invoice as any).subscription) {
      const stripeSubId = typeof (invoice as any).subscription === 'string' 
        ? (invoice as any).subscription 
        : (invoice as any).subscription.id;
      const subscription = await prisma.subscription.findUnique({
        where: { stripeSubscriptionId: stripeSubId },
      });
      subscriptionId = subscription?.id || null;
    }

    const payment = await prisma.payment.create({
      data: {
        stripeInvoiceId: invoice.id,
        customerId: customer.id,
        subscriptionId,
        amount: invoice.amount_due,
        amountPaid: 0,
        currency: invoice.currency,
        status: 'open',
        dueDate: invoice.due_date ? new Date(invoice.due_date * 1000) : null,
        metadata: invoice.metadata as any,
      },
    });

    console.log('Failed payment recorded in DB:', payment.id);

  } catch (error) {
    console.error('Error handling invoice payment failed:', error);
  }
}