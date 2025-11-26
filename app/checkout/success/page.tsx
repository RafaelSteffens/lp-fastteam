import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import AnimatedSection from '@/app/_components/AnimatedSection';
import { CheckCircle, ArrowRight } from 'lucide-react';

import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Checkout Concluído - Pagamento Confirmado',
  description: 'Seu pagamento foi processado com sucesso! Obrigado por escolher o FastTeam.',
  noIndex: true, // Don't index success pages
});

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-linear-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-12 pb-12">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Pagamento Confirmado!
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Obrigado por escolher o FastTeam! Você receberá um email com os detalhes da sua assinatura.
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90"
                  asChild
                >
                  <Link href="/dashboard">
                    Acessar Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <div>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/">Voltar para Home</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
