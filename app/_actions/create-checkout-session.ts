'use server';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

interface CreateCheckoutSessionParams {
  planId: string;
  planName: string;
  price: string;
  period: string;
  features: string[];
}

export async function createCheckoutSession(params: CreateCheckoutSessionParams) {
  try {
    const { planId, planName, price, period, features } = params;

    // Extrair valor numérico do preço (ex: "R$ 97" -> 9700 centavos)
    const priceValue = parseFloat(price.replace(/[^\d,]/g, '').replace(',', '.'));
    const priceInCents = Math.round(priceValue * 100);

    // Determinar intervalo de recorrência
    const interval = period.includes('mês') ? 'month' : period.includes('ano') ? 'year' : 'month';

    // Criar sessão de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: `FastTeam - Plano ${planName}`,
              description: features.slice(0, 5).join(', '),
              metadata: {
                planId,
              },
            },
            unit_amount: priceInCents,
            recurring: priceInCents > 0 ? {
              interval,
            } : undefined,
          },
          quantity: 1,
        },
      ],
      mode: priceInCents > 0 ? 'subscription' : 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/precos?canceled=true`,
      metadata: {
        planId,
        planName,
      },
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    });

    return {
      success: true,
      sessionId: session.id,
      url: session.url,
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create checkout session',
    };
  }
}
