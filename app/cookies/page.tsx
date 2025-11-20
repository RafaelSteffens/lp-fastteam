import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Cookie,
  Settings,
  Shield,
  Eye,
  BarChart3,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  X,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Cookies - FastTeam | Como Usamos Cookies',
  description: 'Política de cookies do FastTeam. Saiba como utilizamos cookies e tecnologias similares para melhorar sua experiência.',
  keywords: 'cookies, política cookies, rastreamento, privacidade, dados navegação',
};

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: Settings,
      title: 'Cookies Essenciais',
      description: 'Necessários para o funcionamento básico do site',
      purpose: 'Autenticação, segurança, navegação',
      duration: 'Sessão ou persistente',
      required: true,
      examples: ['Sessão de login', 'CSRF tokens', 'Preferências de idioma'],
    },
    {
      icon: BarChart3,
      title: 'Cookies Analíticos',
      description: 'Ajudam a entender como os usuários interagem com o site',
      purpose: 'Análise de uso, performance, melhorias',
      duration: '2 anos',
      required: false,
      examples: ['Google Analytics', 'Páginas visitadas', 'Tempo na página'],
    },
    {
      icon: MessageSquare,
      title: 'Cookies de Marketing',
      description: 'Usados para personalizar anúncios e campanhas',
      purpose: 'Publicidade direcionada, remarketing',
      duration: '1 ano',
      required: false,
      examples: ['Facebook Pixel', 'Google Ads', 'Campanhas personalizadas'],
    },
    {
      icon: Shield,
      title: 'Cookies de Segurança',
      description: 'Protegem contra fraudes e ameaças',
      purpose: 'Detecção de fraudes, proteção DDoS',
      duration: 'Sessão',
      required: true,
      examples: ['Verificação de bot', 'Rate limiting', 'Detecção de anomalias'],
    },
  ];

  const cookieSettings = [
    {
      name: 'Cookies Essenciais',
      description: 'Sempre ativos - necessários para o funcionamento',
      status: 'Sempre ativo',
      canDisable: false,
    },
    {
      name: 'Cookies Analíticos',
      description: 'Ajuda-nos a melhorar o site',
      status: 'Ativo',
      canDisable: true,
    },
    {
      name: 'Cookies de Marketing',
      description: 'Para anúncios personalizados',
      status: 'Ativo',
      canDisable: true,
    },
    {
      name: 'Cookies de Segurança',
      description: 'Proteção contra ameaças',
      status: 'Sempre ativo',
      canDisable: false,
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
                <Cookie className="h-4 w-4" />
                <span>Política de Cookies</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Como usamos{' '}
                <span className="text-gradient">cookies</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência,
                personalizar conteúdo e analisar o uso da nossa plataforma.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  O que são Cookies?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Cookies são pequenos arquivos de texto armazenados no seu navegador
                  quando você visita um site. Eles ajudam o site a lembrar suas
                  preferências e melhorar sua experiência de navegação.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span>Lembrar suas configurações e preferências</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span>Manter você logado na plataforma</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span>Analisar como o site é usado para melhorias</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span>Mostrar anúncios relevantes (opcional)</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-linear-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <div className="text-center">
                  <Cookie className="h-24 w-24 text-(--fastteam-primary) mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Tipos de Cookies
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Utilizamos diferentes tipos de cookies, cada um com uma finalidade específica.
                    Você pode controlar quais tipos aceitar.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-(--fastteam-primary)">4</div>
                      <div className="text-sm text-gray-600">Tipos de Cookies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-(--fastteam-primary)">100%</div>
                      <div className="text-sm text-gray-600">Transparente</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tipos de Cookies Utilizados
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Cada tipo de cookie tem uma função específica na nossa plataforma
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <AnimatedSection key={type.title} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <type.icon className="h-10 w-10 text-(--fastteam-primary)" />
                      {type.required && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          Obrigatório
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {type.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Finalidade:</span> {type.purpose}
                      </div>
                      <div>
                        <span className="font-medium">Duração:</span> {type.duration}
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Exemplos:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.examples.map((example) => (
                          <li key={example} className="flex items-center space-x-2">
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Settings */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gerencie suas Preferências
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Você tem controle sobre quais tipos de cookies aceitar
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Configurações de Cookies</h3>
                <div className="space-y-6">
                  {cookieSettings.map((setting) => (
                    <div key={setting.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{setting.name}</h4>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`text-sm px-2 py-1 rounded ${
                          setting.status === 'Sempre ativo'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {setting.status}
                        </span>
                        {setting.canDisable ? (
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4 mr-1" />
                            Alterar
                          </Button>
                        ) : (
                          <span className="text-xs text-gray-500">Não pode desabilitar</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-primary">
                      Salvar Preferências
                    </Button>
                    <Button variant="outline">
                      Aceitar Todos
                    </Button>
                    <Button variant="outline">
                      Rejeitar Todos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Third Party Cookies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Cookies de Terceiros
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Alguns cookies são definidos por serviços de terceiros que integramos
                  em nossa plataforma. Estes incluem ferramentas de análise e marketing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-(--fastteam-primary) mt-1" />
                    <div>
                      <h3 className="font-semibold">Google Analytics</h3>
                      <p className="text-gray-600 text-sm">
                        Análise de uso e comportamento dos usuários
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-(--fastteam-primary) mt-1" />
                    <div>
                      <h3 className="font-semibold">Chat Online</h3>
                      <p className="text-gray-600 text-sm">
                        Suporte ao cliente e atendimento
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-(--fastteam-primary) mt-1" />
                    <div>
                      <h3 className="font-semibold">Ferramentas de Marketing</h3>
                      <p className="text-gray-600 text-sm">
                        Otimização de campanhas e anúncios
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-linear-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <div className="text-center">
                  <Shield className="h-24 w-24 text-(--fastteam-primary) mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Privacidade em Primeiro Lugar
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Respeitamos sua privacidade e damos controle total sobre
                    suas preferências de cookies.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-(--fastteam-primary)">LGPD</div>
                      <div className="text-sm text-gray-600">Conforme</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-(--fastteam-primary)">100%</div>
                      <div className="text-sm text-gray-600">Transparente</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Dúvidas sobre Cookies?</h2>
              <p className="text-gray-600 mb-6">
                Se você tiver qualquer dúvida sobre nossa política de cookies ou
                quiser alterar suas preferências, entre em contato conosco.
              </p>
              <Button className="bg-gradient-primary" asChild>
                <Link href="/contato">
                  Falar com Privacidade
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Configurado e protegido
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Suas preferências de cookies foram salvas. Agora você pode navegar tranquilamente.
              </p>
              <Button
                size="lg"
                className="bg-white text-(--fastteam-primary) hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="/">
                  Voltar ao Início
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
