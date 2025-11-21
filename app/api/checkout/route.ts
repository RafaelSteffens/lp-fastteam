import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/app/_actions/create-checkout-session';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, planName, price, period, features } = body;

    if (!planId || !planName || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await createCheckoutSession({
      planId,
      planName,
      price,
      period: period || '/mês',
      features: features || [],
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      sessionId: result.sessionId,
      url: result.url,
    });

  } catch (error) {
    console.error('Error in checkout API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
