import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Check,
  Zap,
  Users,
  Building2,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Preços - FastTeam | Planos que Cabem no Seu Bolso',
  description: 'Conheça os planos do FastTeam: Starter, Professional e Enterprise. Teste grátis por 14 dias sem cartão de crédito.',
  keywords: 'preços CRM, planos ERP, custo automação, pricing, trial gratuito',
};

// Mapeamento de ícones
const iconMap = {
  Zap,
  Users,
  Building2,
};

type IconName = keyof typeof iconMap;

interface PricingPlan {
  id: string;
  name: string;
  icon: IconName;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export default async function PricingPage() {
  // Buscar planos do banco de dados
  let plans: PricingPlan[] = [];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/pricing`, {
      cache: 'no-store', // Sempre buscar dados frescos
    });

    if (response.ok) {
      plans = await response.json();
    }
  } catch (error) {
    console.error('Error fetching pricing plans:', error);
    // Fallback para dados estáticos em caso de erro
    plans = [
      {
        id: '1',
        name: 'Starter',
        icon: 'Zap',
        price: 'R$ 97',
        period: '/mês',
        description: 'Perfeito para começar a transformar sua operação',
        features: [
          'Até 3 usuários',
          'CRM completo',
          'Automações básicas',
          '1.000 contatos',
          'Suporte por email',
          'Integrações essenciais',
          'Relatórios básicos',
          'Armazenamento 5GB',
        ],
        cta: 'Começar Teste Grátis',
        popular: false,
      },
      {
        id: '2',
        name: 'Professional',
        icon: 'Users',
        price: 'R$ 297',
        period: '/mês',
        description: 'Ideal para equipes em crescimento',
        features: [
          'Até 15 usuários',
          'CRM + ERP completo',
          'Automações avançadas',
          '10.000 contatos',
          'Suporte prioritário',
          'Todas as integrações',
          'Relatórios avançados',
          'Armazenamento 50GB',
          'API access',
          'Campos customizados',
          'Email marketing',
          'Dashboards personalizados',
        ],
        cta: 'Começar Teste Grátis',
        popular: true,
      },
      {
        id: '3',
        name: 'Enterprise',
        icon: 'Building2',
        price: 'Customizado',
        period: '',
        description: 'Solução completa para grandes operações',
        features: [
          'Usuários ilimitados',
          'Tudo do Professional',
          'Automações ilimitadas',
          'Contatos ilimitados',
          'Gerente de sucesso dedicado',
          'Suporte 24/7',
          'Onboarding personalizado',
          'Armazenamento ilimitado',
          'SLA garantido',
          'Treinamentos exclusivos',
          'White label',
          'Infraestrutura dedicada',
        ],
        cta: 'Falar com Especialista',
        popular: false,
      },
    ];
  }

  const faqs = [
    {
      question: 'Como funciona o teste gratuito?',
      answer:
        'Você tem 14 dias para testar todas as funcionalidades do plano escolhido, sem precisar informar cartão de crédito. Após o período, escolha se deseja continuar.',
    },
    {
      question: 'Posso trocar de plano depois?',
      answer:
        'Sim! Você pode fazer upgrade ou downgrade a qualquer momento. Ajustamos o valor proporcionalmente ao período restante.',
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer:
        'Aceitamos todas as principais bandeiras de cartão de crédito, PIX e boleto bancário. Para planos anuais, oferecemos desconto de 20%.',
    },
    {
      question: 'Há taxa de cancelamento?',
      answer:
        'Não! Você pode cancelar a qualquer momento sem qualquer taxa adicional. Seus dados ficam disponíveis por 30 dias após o cancelamento.',
    },
    {
      question: 'Vocês oferecem treinamento?',
      answer:
        'Sim! Todos os planos incluem acesso a nossa base de conhecimento e vídeos tutoriais. Planos Professional e Enterprise têm onboarding guiado.',
    },
    {
      question: 'É seguro?',
      answer:
        'Absolutamente! Utilizamos criptografia de ponta, conformidade com LGPD, backups diários e infraestrutura em nuvem de alta disponibilidade.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-linear-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-(--fastteam-primary-dark) px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                <span>Preços Transparentes</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Planos que crescem com{' '}
                <span className="text-gradient">seu negócio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Escolha o plano ideal para sua empresa. Teste grátis por 14
                dias, sem cartão de crédito.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 100}>
                <Card
                  className={`relative h-full flex flex-col ${plan.popular
                      ? 'border-2 border-(--fastteam-primary) shadow-xl scale-105'
                      : 'border-2 hover:border-(--fastteam-primary)/20'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Mais Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const IconComponent = iconMap[plan.icon];
                        return <IconComponent className="h-8 w-8 text-white" />;
                      })()}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                    <p className="text-gray-600 text-sm mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-500">{plan.period}</span>
                      )}
                    </div>
                    <Button
                      className={
                        plan.popular
                          ? 'bg-gradient-primary hover:opacity-90 w-full'
                          : 'w-full'
                      }
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <Link href="/cadastro">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-(--fastteam-primary) shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Precisa de mais usuários ou recursos específicos?
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contato">Fale com nosso time de vendas</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600">
                Tire suas dúvidas sobre nossos planos
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 50}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <HelpCircle className="h-6 w-6 text-(--fastteam-primary) shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
              <Button
                variant="outline"
                size="lg"
                className="border-(--fastteam-primary) text-(--fastteam-primary)"
                asChild
              >
                <Link href="/contato">Entre em contato</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-linear-to-br from-(--fastteam-primary) to-(--fastteam-primary-dark) text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comece seu teste gratuito hoje
              </h2>
              <p className="text-xl mb-8 opacity-90">
                14 dias de acesso completo. Sem cartão de crédito. Cancele
                quando quiser.
              </p>
              <Button
                size="lg"
                className="bg-white text-(--fastteam-primary) hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="/cadastro">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
