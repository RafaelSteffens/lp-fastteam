import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Zap,
  Users,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  MessageSquare,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Star,
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description:
        'Automatize processos repetitivos e libere sua equipe para focar no que realmente importa.',
    },
    {
      icon: Users,
      title: 'Gestão de Equipe',
      description:
        'Organize, monitore e potencialize o desempenho do seu time em tempo real.',
    },
    {
      icon: MessageSquare,
      title: 'CRM Completo',
      description:
        'Gerencie relacionamentos com clientes de forma inteligente e eficiente.',
    },
    {
      icon: BarChart3,
      title: 'ERP Integrado',
      description:
        'Controle financeiro, estoque e operações em uma única plataforma.',
    },
    {
      icon: Workflow,
      title: 'Fluxos Personalizados',
      description:
        'Crie workflows sob medida para as necessidades específicas do seu negócio.',
    },
    {
      icon: TrendingUp,
      title: 'Análises em Tempo Real',
      description:
        'Dashboards intuitivos com métricas que impulsionam decisões estratégicas.',
    },
  ];

  const benefits = [
    'Reduza o tempo de atendimento em até 70%',
    'Aumente a produtividade da equipe em 3x',
    'Automatize mais de 80% das tarefas manuais',
    'Integração com principais ferramentas do mercado',
    'Suporte especializado 24/7',
    'Dados seguros com criptografia de ponta',
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CEO, TechStart',
      content:
        'FastTeam revolucionou nossa operação. Conseguimos reduzir o tempo de resposta ao cliente em 65% no primeiro mês.',
      rating: 5,
    },
    {
      name: 'Ana Rodrigues',
      role: 'Diretora de Operações, VendaMais',
      content:
        'A automação de processos nos permitiu escalar 3x mais rápido. Ferramenta indispensável!',
      rating: 5,
    },
    {
      name: 'Pedro Santos',
      role: 'Gerente Comercial, InovaCorp',
      content:
        'O CRM integrado com ERP mudou completamente nossa forma de trabalhar. Recomendo demais!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-[var(--fastteam-primary-dark)] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                <span>Transforme sua operação hoje</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Velocidade e Eficiência para{' '}
                <span className="text-gradient">Seu Negócio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                FastTeam é a plataforma completa de CRM, ERP e automação que
                acelera suas operações, otimiza o atendimento e impulsiona
                resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-lg px-8"
                  asChild
                >
                  <Link href="/cadastro">
                    Começar Grátis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="/demo">Ver Demonstração</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Sem cartão de crédito. Comece em 2 minutos.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tudo que você precisa em{' '}
                <span className="text-gradient">uma plataforma</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ferramentas poderosas que trabalham juntas para transformar sua
                operação.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-[var(--fastteam-primary)]/20">
                  <CardContent className="pt-6">
                    <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-100 text-[var(--fastteam-primary-dark)] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shield className="h-4 w-4" />
                  <span>Resultados Comprovados</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Por que empresas escolhem o{' '}
                  <span className="text-gradient">FastTeam</span>?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Mais de 5.000 empresas já transformaram suas operações e
                  alcançaram resultados extraordinários com nossa plataforma.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <AnimatedSection key={benefit} delay={index * 100}>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="h-6 w-6 text-[var(--fastteam-primary)] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">
                      70%
                    </div>
                    <p className="text-gray-600">Redução no tempo de atendimento</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">3x</div>
                    <p className="text-gray-600">Aumento de produtividade</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">
                      5.000+
                    </div>
                    <p className="text-gray-600">Empresas confiam</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">
                      99.9%
                    </div>
                    <p className="text-gray-600">Uptime garantido</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O que nossos clientes dizem
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Histórias reais de empresas que transformaram seus resultados.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-[var(--fastteam-primary)] text-[var(--fastteam-primary)]"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--fastteam-primary)] to-[var(--fastteam-primary-dark)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para acelerar sua operação?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Junte-se a milhares de empresas que já transformaram suas
                operações com o FastTeam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[var(--fastteam-primary)] hover:bg-gray-100 text-lg px-8"
                  asChild
                >
                  <Link href="/cadastro">
                    Começar Grátis Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8"
                  asChild
                >
                  <Link href="/contato">Falar com Especialista</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
