import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_components/ui/accordion';
import AnimatedSection from '@/app/_components/AnimatedSection';
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
  Rocket,
  Settings,
  Headphones,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'FastTeam - Velocidade e Eficiência',
  description: 'A plataforma completa de CRM, ERP e automação que acelera suas operações.',
});

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description:
        'Elimine tarefas manuais e repetitivas com nossa automação inteligente. Configure gatilhos e ações que funcionam 24/7, garantindo que nenhum lead seja perdido e que seus processos de negócio fluam com velocidade máxima.',
    },
    {
      icon: Users,
      title: 'Gestão de Equipe',
      description:
        'Tenha visibilidade total sobre a produtividade do seu time. Atribua tarefas, monitore prazos e facilite a colaboração em tempo real, criando uma cultura de eficiência e alta performance em toda a organização.',
    },
    {
      icon: MessageSquare,
      title: 'CRM Completo',
      description:
        'Centralize todas as interações com seus clientes. Do primeiro contato ao pós-venda, mantenha um histórico detalhado e utilize dados para personalizar o atendimento e aumentar suas taxas de conversão.',
    },
    {
      icon: BarChart3,
      title: 'ERP Integrado',
      description:
        'Conecte vendas, financeiro e estoque em uma única plataforma. Elimine silos de dados e tenha uma visão holística da saúde financeira do seu negócio, facilitando a tomada de decisões estratégicas.',
    },
    {
      icon: Workflow,
      title: 'Fluxos Personalizados',
      description:
        'Cada negócio é único. Crie workflows que se adaptam perfeitamente aos seus processos específicos, sem a necessidade de código complexo. Flexibilidade total para escalar sua operação.',
    },
    {
      icon: TrendingUp,
      title: 'Análises em Tempo Real',
      description:
        'Transforme dados em insights acionáveis. Acompanhe KPIs vitais em dashboards intuitivos e tome decisões baseadas em fatos para impulsionar o crescimento sustentável da sua empresa.',
    },
  ];

  const benefits = [
    'Reduza o tempo de atendimento em até 70% com respostas automáticas',
    'Aumente a produtividade da equipe em 3x eliminando retrabalho',
    'Automatize mais de 80% das tarefas manuais administrativas',
    'Integração nativa com as principais ferramentas do mercado',
    'Suporte técnico especializado disponível 24/7 para sua paz de espírito',
    'Segurança de nível bancário com criptografia de ponta a ponta',
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CEO, TechStart',
      content:
        'FastTeam revolucionou nossa operação. Conseguimos reduzir o tempo de resposta ao cliente em 65% no primeiro mês. A velocidade que ganhamos foi crucial para nossa expansão.',
      rating: 5,
    },
    {
      name: 'Ana Rodrigues',
      role: 'Diretora de Operações, VendaMais',
      content:
        'A automação de processos nos permitiu escalar 3x mais rápido sem aumentar a equipe na mesma proporção. É uma ferramenta indispensável para qualquer negócio que busca eficiência.',
      rating: 5,
    },
    {
      name: 'Pedro Santos',
      role: 'Gerente Comercial, InovaCorp',
      content:
        'O CRM integrado com ERP mudou completamente nossa forma de trabalhar. Agora temos controle total sobre o funil de vendas e o financeiro em um só lugar. Recomendo demais!',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'Quanto tempo leva para implementar o FastTeam?',
      answer:
        'A implementação do FastTeam é projetada para ser rápida e eficiente. A maioria dos nossos clientes consegue configurar suas contas, importar dados e começar a operar em menos de uma semana. Oferecemos um processo de onboarding guiado e suporte dedicado para garantir que você extraia valor da plataforma desde o primeiro dia.',
    },
    {
      question: 'O FastTeam se integra com outras ferramentas?',
      answer:
        'Sim! O FastTeam possui integrações nativas com as ferramentas mais populares do mercado, como Slack, Google Workspace, Mailchimp, e muitas outras. Além disso, nossa API aberta permite conectar praticamente qualquer software ao seu ecossistema, garantindo que seus dados fluam livremente entre suas aplicações.',
    },
    {
      question: 'Como funciona o suporte técnico?',
      answer:
        'Nosso suporte é um dos nossos maiores diferenciais. Oferecemos atendimento 24/7 via chat e e-mail para todos os planos. Clientes do plano Enterprise também contam com um gerente de conta dedicado e suporte telefônico prioritário. Estamos sempre prontos para ajudar você a resolver qualquer desafio com velocidade.',
    },
    {
      question: 'Meus dados estarão seguros?',
      answer:
        'A segurança do seu negócio é nossa prioridade número um. Utilizamos criptografia de ponta a ponta (AES-256), backups automáticos diários e hospedagem em servidores de classe mundial. Estamos em conformidade com a LGPD e realizamos auditorias de segurança regulares para garantir a proteção total das suas informações.',
    },
    {
      question: 'Posso personalizar os fluxos de trabalho?',
      answer:
        'Absolutamente. O FastTeam foi construído com a flexibilidade em mente. Nosso construtor de workflows visual permite que você desenhe processos que espelham exatamente como sua empresa opera. Você pode criar automações simples ou complexas, definir regras de negócios e adaptar a plataforma à medida que sua empresa cresce.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-50 via-white to-green-50 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-(--fastteam-primary-dark) px-4 py-2 rounded-full text-sm font-medium mb-6">
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
                resultados reais. Descubra como a tecnologia pode trabalhar a seu favor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-lg px-8"
                  asChild
                >
                  <Link href="/precos">
                    Começar Grátis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="/precos">Ver Demonstração</Link>
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
                operação e garantir a eficiência que seu negócio merece.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-(--fastteam-primary)/20">
                  <CardContent className="pt-6">
                    <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
                <div className="inline-flex items-center space-x-2 bg-green-100 text-(--fastteam-primary-dark) px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shield className="h-4 w-4" />
                  <span>Resultados Comprovados</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Por que empresas escolhem o{' '}
                  <span className="text-gradient">FastTeam</span>?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Mais de 5.000 empresas já transformaram suas operações e
                  alcançaram resultados extraordinários com nossa plataforma.
                  Focamos em entregar valor real através de velocidade e eficiência.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <AnimatedSection key={benefit} delay={index * 100}>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="h-6 w-6 text-(--fastteam-primary) shrink-0 mt-0.5" />
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

      {/* How it Works Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como o FastTeam <span className="text-gradient">Funciona</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Implementação simples e rápida para você começar a ver resultados imediatamente.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-(--fastteam-primary)" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Configure sua Conta</h3>
                <p className="text-gray-600">
                  Crie sua conta em minutos e configure os parâmetros iniciais do seu negócio. Nossa interface intuitiva guia você em cada passo.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-(--fastteam-primary)" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Integre suas Ferramentas</h3>
                <p className="text-gray-600">
                  Conecte o FastTeam às ferramentas que você já usa. Centralize seus dados e elimine a necessidade de alternar entre múltiplas abas.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-(--fastteam-primary)" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Acelere seus Resultados</h3>
                <p className="text-gray-600">
                  Ative as automações e comece a monitorar seus KPIs em tempo real. Veja sua eficiência aumentar e seu negócio crescer com velocidade.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
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
                          className="h-5 w-5 fill-(--fastteam-primary) text-(--fastteam-primary)"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {testimonial.content}
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

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tire suas dúvidas sobre como o FastTeam pode ajudar seu negócio.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={200}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border border-gray-100 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-200 data-[state=open]:border-(--fastteam-primary) data-[state=open]:ring-1 data-[state=open]:ring-(--fastteam-primary)/20"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-(--fastteam-primary) data-[state=open]:text-(--fastteam-primary)">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-linear-to-br from-(--fastteam-primary) to-(--fastteam-primary-dark) text-white">
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
                  className="bg-white text-(--fastteam-primary) hover:bg-gray-100 text-lg px-8"
                  asChild
                >
                  <Link href="/precos">
                    Começar Grátis Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-(--fastteam-primary) hover:bg-white/10 text-lg px-8"
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
