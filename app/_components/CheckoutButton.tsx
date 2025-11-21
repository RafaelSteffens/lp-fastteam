'use client';

import { useState } from 'react';
import { Button } from '@/app/_components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface CheckoutButtonProps {
  planId: string;
  planName: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  variant?: 'default' | 'outline';
  className?: string;
}

export function CheckoutButton({
  planId,
  planName,
  price,
  period,
  features,
  cta,
  variant = 'outline',
  className = '',
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
  
    if (price === 'Customizado' || price.toLowerCase().includes('customizado')) {
      window.location.href = '/contato';
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          planName,
          price,
          period,
          features,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Erro ao processar checkout. Por favor, tente novamente.');
      setIsLoading(false);
    }
  };


  if (price === 'Customizado' || price.toLowerCase().includes('customizado')) {
    return (
      <Button
        className={className}
        variant={variant}
        asChild
      >
        <Link href="/contato">
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    );
  }

  return (
    <Button
      className={className}
      variant={variant}
      onClick={handleCheckout}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processando...
        </>
      ) : (
        <>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}
