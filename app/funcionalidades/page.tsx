import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Zap,
  Users,
  MessageSquare,
  BarChart3,
  Workflow,
  TrendingUp,
  Clock,
  Shield,
  Globe,
  Smartphone,
  Database,
  Mail,
  Calendar,
  FileText,
  Settings,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Funcionalidades - FastTeam | CRM, ERP e Automação Completa',
  description: 'Descubra todas as funcionalidades do FastTeam: CRM avançado, ERP integrado, automação inteligente, gestão de equipe e muito mais.',
  keywords: 'funcionalidades CRM, recursos ERP, automação empresarial, gestão de equipe, dashboards, relatórios',
};

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: MessageSquare,
      title: 'CRM Completo',
      description:
        'Gerencie todo o ciclo de relacionamento com clientes em uma única plataforma.',
      features: [
        'Pipeline de vendas visual',
        'Histórico completo de interações',
        'Automação de follow-ups',
        'Segmentação inteligente',
        'Relatórios de conversão',
      ],
    },
    {
      icon: BarChart3,
      title: 'ERP Integrado',
      description:
        'Controle financeiro, estoque e operações com visão 360° do negócio.',
      features: [
        'Gestão financeira completa',
        'Controle de estoque em tempo real',
        'Emissão de notas fiscais',
        'Gestão de fornecedores',
        'Relatórios gerenciais',
      ],
    },
    {
      icon: Workflow,
      title: 'Automação Inteligente',
      description:
        'Automatize processos repetitivos e ganhe horas de produtividade.',
      features: [
        'Fluxos de trabalho personalizados',
        'Gatilhos automáticos',
        'Integração com ferramentas externas',
        'Tarefas recorrentes',
        'Notificações inteligentes',
      ],
    },
    {
      icon: Users,
      title: 'Gestão de Equipe',
      description:
        'Organize, monitore e otimize o desempenho do seu time.',
      features: [
        'Dashboard de performance',
        'Distribuição de leads',
        'Metas e comissões',
        'Controle de permissões',
        'Relatórios de produtividade',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Analytics Avançado',
      description:
        'Tome decisões baseadas em dados com análises em tempo real.',
      features: [
        'Dashboards personalizáveis',
        'Métricas em tempo real',
        'Análise preditiva',
        'Funil de vendas detalhado',
        'Exportação de relatórios',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description:
        'Acesse sua operação de qualquer lugar com apps nativos.',
      features: [
        'Apps iOS e Android',
        'Sincronização em tempo real',
        'Trabalho offline',
        'Notificações push',
        'Interface otimizada',
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Chatbot inteligente e equipe de suporte sempre disponível',
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Criptografia de ponta e conformidade com LGPD',
    },
    {
      icon: Globe,
      title: 'Multi-idiomas',
      description: 'Suporte para múltiplos idiomas e moedas',
    },
    {
      icon: Database,
      title: 'Backup Automático',
      description: 'Seus dados sempre seguros com backup diário',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Campanhas personalizadas direto da plataforma',
    },
    {
      icon: Calendar,
      title: 'Agendamento',
      description: 'Calendário integrado com lembretes automáticos',
    },
    {
      icon: FileText,
      title: 'Documentos',
      description: 'Gestão centralizada de contratos e documentos',
    },
    {
      icon: Settings,
      title: 'API Aberta',
      description: 'Integre com qualquer ferramenta via API REST',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-[var(--fastteam-primary-dark)] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                <span>Recursos Poderosos</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Tudo que você precisa para{' '}
                <span className="text-gradient">crescer rápido</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Uma plataforma completa com ferramentas integradas para
                transformar sua operação do início ao fim.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-[var(--fastteam-primary)]" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 aspect-square flex items-center justify-center">
                      <feature.icon className="h-32 w-32 text-[var(--fastteam-primary)]" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                E muito mais recursos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Funcionalidades adicionais que fazem toda a diferença no dia a
                dia.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 50}>
                <Card className="h-full hover:shadow-lg transition-all hover:border-[var(--fastteam-primary)]/20">
                  <CardContent className="pt-6">
                    <feature.icon className="h-10 w-10 text-[var(--fastteam-primary)] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
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
                Comece a usar todas essas funcionalidades hoje
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Teste gratuitamente por 14 dias. Sem cartão de crédito.
              </p>
              <Button
                size="lg"
                className="bg-white text-[var(--fastteam-primary)] hover:bg-gray-100 text-lg px-8"
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
