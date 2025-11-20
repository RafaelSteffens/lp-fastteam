import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import {
  MessageSquare,
  HelpCircle,
  Book,
  Users,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Zap,
  ArrowRight,
  Search,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Suporte - FastTeam | Ajuda e Atendimento',
  description: 'Centro de suporte do FastTeam. Base de conhecimento, chat ao vivo, tutoriais e atendimento especializado para ajudar você.',
  keywords: 'suporte FastTeam, ajuda, atendimento, chat, tutoriais, FAQ',
};

export default function SupportPage() {
  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Chat ao Vivo',
      description: 'Converse com nossa equipe em tempo real',
      availability: 'Disponível 24/7',
      responseTime: 'Resposta imediata',
      action: 'Iniciar Chat',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Envie suas dúvidas detalhadas por email',
      availability: 'Segunda a Sexta',
      responseTime: 'Até 2 horas',
      action: 'Enviar Email',
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Fale diretamente com um especialista',
      availability: 'Segunda a Sexta, 9h-18h',
      responseTime: 'Imediato',
      action: 'Ligar Agora',
    },
  ];

  const faqCategories = [
    {
      title: 'Primeiros Passos',
      questions: [
        'Como criar minha conta?',
        'Como configurar meu primeiro projeto?',
        'Como importar meus dados existentes?',
        'Como convidar minha equipe?',
      ],
    },
    {
      title: 'CRM e Vendas',
      questions: [
        'Como criar um novo contato?',
        'Como gerenciar meu funil de vendas?',
        'Como configurar automações de vendas?',
        'Como gerar relatórios de vendas?',
      ],
    },
    {
      title: 'ERP e Operações',
      questions: [
        'Como cadastrar produtos?',
        'Como gerenciar estoque?',
        'Como emitir notas fiscais?',
        'Como configurar fornecedores?',
      ],
    },
    {
      title: 'Integrações',
      questions: [
        'Como integrar com meu e-commerce?',
        'Como conectar com ferramentas de marketing?',
        'Como usar a API?',
        'Quais integrações estão disponíveis?',
      ],
    },
  ];

  const popularArticles = [
    {
      title: 'Como configurar notificações por email',
      category: 'Configurações',
      readTime: '3 min',
      views: '2.3k',
    },
    {
      title: 'Guia completo: Importação de contatos',
      category: 'CRM',
      readTime: '8 min',
      views: '1.8k',
    },
    {
      title: 'Automações essenciais para vendas',
      category: 'Vendas',
      readTime: '12 min',
      views: '3.1k',
    },
    {
      title: 'Configurando permissões de usuário',
      category: 'Administração',
      readTime: '5 min',
      views: '1.5k',
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
                <HelpCircle className="h-4 w-4" />
                <span>Centro de Suporte</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Como podemos{' '}
                <span className="text-gradient">ajudar você?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Encontre respostas rápidas, converse com nossa equipe ou
                explore nossa base de conhecimento completa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar na base de conhecimento..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--fastteam-primary) focus:border-transparent"
                  />
                </div>
                <Button className="bg-gradient-primary" size="lg">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Iniciar Chat
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Canais de Atendimento
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Escolha a forma mais conveniente para falar conosco
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <AnimatedSection key={channel.title} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-8">
                    <channel.icon className="h-16 w-16 text-(--fastteam-primary) mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {channel.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <Badge variant="outline" className="text-xs">
                        {channel.availability}
                      </Badge>
                      <p className="text-sm text-gray-500">
                        {channel.responseTime}
                      </p>
                    </div>
                    <Button
                      className={index === 0 ? 'bg-gradient-primary' : ''}
                      variant={index === 0 ? 'default' : 'outline'}
                      size="lg"
                    >
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Respostas para as dúvidas mais comuns dos nossos usuários
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {faqCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 50}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.questions.map((question) => (
                        <li key={question}>
                          <Link
                            href="#"
                            className="flex items-center space-x-2 text-gray-700 hover:text-(--fastteam-primary) transition-colors"
                          >
                            <HelpCircle className="h-4 w-4 shrink-0" />
                            <span className="text-sm">{question}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Artigos Populares
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Os conteúdos mais acessados da nossa base de conhecimento
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <AnimatedSection key={article.title} delay={index * 50}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 hover:text-(--fastteam-primary) cursor-pointer">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Users className="h-3 w-3" />
                        <span>{article.views} visualizações</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Service Resources */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Recursos de Autoatendimento
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Explore nossa base de conhecimento completa e resolva
                  suas dúvidas de forma independente.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Book className="h-6 w-6 text-(--fastteam-primary)" />
                    <div>
                      <h3 className="font-semibold">Base de Conhecimento</h3>
                      <p className="text-gray-600 text-sm">
                        Mais de 500 artigos organizados por categoria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-(--fastteam-primary)" />
                    <div>
                      <h3 className="font-semibold">Tutoriais em Vídeo</h3>
                      <p className="text-gray-600 text-sm">
                        Vídeos passo a passo para todas as funcionalidades
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-(--fastteam-primary)" />
                    <div>
                      <h3 className="font-semibold">Comunidade</h3>
                      <p className="text-gray-600 text-sm">
                        Tire dúvidas com outros usuários da plataforma
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-gradient-primary mr-4" asChild>
                    <Link href="/documentacao">
                      Ver Documentação
                      <Book className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/comunidade">
                      Acessar Comunidade
                      <Users className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-linear-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <div className="text-center">
                  <HelpCircle className="h-24 w-24 text-(--fastteam-primary) mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Suporte Premium
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Para empresas com necessidades especiais, oferecemos
                    suporte premium com gerente de conta dedicado.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-(--fastteam-primary)">2h</div>
                      <div className="text-sm text-gray-600">Tempo de resposta</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-(--fastteam-primary)">24/7</div>
                      <div className="text-sm text-gray-600">Disponibilidade</div>
                    </div>
                  </div>
                  <Button className="mt-6 bg-(--fastteam-primary) hover:bg-(--fastteam-primary-dark)">
                    Saiba Mais
                  </Button>
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
                Ainda precisa de ajuda?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Nossa equipe está pronta para ajudar você a aproveitar ao máximo o FastTeam.
              </p>
              <Button
                size="lg"
                className="bg-white text-(--fastteam-primary) hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="/contato">
                  Falar com Suporte
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
