import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Badge } from '@/app/_components/ui/badge';
import AnimatedSection from '@/app/_components/AnimatedSection';
import {
  Book,
  Code,
  Zap,
  ArrowRight,
  ExternalLink,
  FileText,
  Video,
  MessageSquare,
  Search,
  Download,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentação - FastTeam | Guias, APIs e Tutoriais',
  description: 'Documentação completa do FastTeam: guias de uso, APIs, tutoriais, exemplos de código e suporte para desenvolvedores.',
  keywords: 'documentação FastTeam, APIs, tutoriais, guias, desenvolvedores, integração',
};

export default function DocumentationPage() {
  const docSections = [
    {
      title: 'Primeiros Passos',
      description: 'Comece a usar o FastTeam rapidamente',
      icon: Zap,
      articles: [
        'Configuração inicial',
        'Primeiro projeto',
        'Importação de dados',
        'Configurações básicas',
      ],
    },
    {
      title: 'CRM e Vendas',
      description: 'Gerencie seu funil de vendas',
      icon: Users,
      articles: [
        'Pipeline de vendas',
        'Gestão de leads',
        'Oportunidades',
        'Relatórios de vendas',
      ],
    },
    {
      title: 'ERP e Operações',
      description: 'Controle financeiro e estoque',
      icon: FileText,
      articles: [
        'Gestão financeira',
        'Controle de estoque',
        'Emissões fiscais',
        'Relatórios gerenciais',
      ],
    },
    {
      title: 'Automação',
      description: 'Crie fluxos automatizados',
      icon: Code,
      articles: [
        'Workflows básicos',
        'Gatilhos avançados',
        'Integrações',
        'API de automação',
      ],
    },
  ];

  const apiResources = [
    {
      title: 'Referência da API',
      description: 'Documentação completa dos endpoints',
      type: 'API',
      icon: Code,
    },
    {
      title: 'Guias de Integração',
      description: 'Como integrar com outras ferramentas',
      type: 'Guia',
      icon: ExternalLink,
    },
    {
      title: 'SDKs e Bibliotecas',
      description: 'Bibliotecas oficiais para desenvolvedores',
      type: 'SDK',
      icon: Download,
    },
    {
      title: 'Webhooks',
      description: 'Configure notificações em tempo real',
      type: 'API',
      icon: Zap,
    },
  ];

  const learningResources = [
    {
      title: 'Vídeos Tutoriais',
      description: 'Aprenda visualmente com nossos vídeos',
      icon: Video,
      count: '50+ vídeos',
    },
    {
      title: 'Artigos da Base',
      description: 'Artigos detalhados sobre funcionalidades',
      icon: FileText,
      count: '200+ artigos',
    },
    {
      title: 'Comunidade',
      description: 'Tire dúvidas com outros usuários',
      icon: MessageSquare,
      count: '5000+ membros',
    },
    {
      title: 'Suporte Técnico',
      description: 'Fale diretamente com nossa equipe',
      icon: Users,
      count: '24/7 disponível',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-(--fastteam-primary-dark) px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Book className="h-4 w-4" />
                <span>Centro de Documentação</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Tudo que você precisa{' '}
                <span className="text-gradient">saber</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Documentação completa, tutoriais interativos e suporte para
                tirar suas dúvidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar na documentação..."
                    className="pl-10 pr-4 py-3 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--fastteam-primary) focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Documentation Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <AnimatedSection key={section.title} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-8">
                    <section.icon className="h-12 w-12 text-(--fastteam-primary) mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {section.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {section.articles.map((article) => (
                        <li key={article} className="flex items-center space-x-2">
                          <ArrowRight className="h-4 w-4 text-(--fastteam-primary)" />
                          <span className="text-gray-700 hover:text-(--fastteam-primary) cursor-pointer">
                            {article}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      Ver Todos os Artigos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Aprenda com a Comunidade
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Recursos gratuitos para acelerar seu aprendizado
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningResources.map((resource, index) => (
              <AnimatedSection key={resource.title} delay={index * 50}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <resource.icon className="h-12 w-12 text-(--fastteam-primary) mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {resource.description}
                    </p>
                    <Badge className="bg-gradient-primary">
                      {resource.count}
                    </Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Não encontrou o que procura?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Nossa equipe de suporte está pronta para ajudar. Temos
                  especialistas em todas as áreas do produto.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-(--fastteam-primary)" />
                    <span>Chat ao vivo 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-(--fastteam-primary)" />
                    <span>Comunidade ativa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Book className="h-5 w-5 text-(--fastteam-primary)" />
                    <span>Base de conhecimento</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-gradient-primary mr-4">
                    Falar com Suporte
                    <MessageSquare className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contato">
                      Outros Canais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-linear-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <div className="text-center">
                  <Book className="h-24 w-24 text-(--fastteam-primary) mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Base de Conhecimento
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Explore nossa biblioteca completa de artigos, tutoriais e
                    guias passo a passo.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-(--fastteam-primary)">500+</div>
                      <div className="text-sm text-gray-600">Artigos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-(--fastteam-primary)">50+</div>
                      <div className="text-sm text-gray-600">Vídeos</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comece sua jornada hoje
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Teste gratuitamente e explore todas as funcionalidades.
              </p>
              <Button
                size="lg"
                className="bg-white text-(--fastteam-primary) hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="/precos">
                  Testar Gratuitamente
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
