import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import AnimatedSection from '@/app/_components/AnimatedSection';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Política de Privacidade - Proteção de Dados',
  description: 'Política de privacidade do FastTeam. Como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.',
});

export default function PrivacyPage() {
  const privacySections = [
    {
      title: '1. Informações que Coletamos',
      content: [
        'Dados pessoais fornecidos voluntariamente (nome, email, telefone)',
        'Informações de uso da plataforma (logs de acesso, funcionalidades utilizadas)',
        'Dados técnicos (IP, navegador, dispositivo)',
        'Cookies e tecnologias similares para melhorar a experiência',
      ],
    },
    {
      title: '2. Como Usamos suas Informações',
      content: [
        'Fornecer e melhorar nossos serviços',
        'Personalizar sua experiência na plataforma',
        'Enviar comunicações importantes sobre sua conta',
        'Garantir segurança e prevenir fraudes',
        'Cumprir obrigações legais e regulatórias',
      ],
    },
    {
      title: '3. Compartilhamento de Dados',
      content: [
        'Não vendemos seus dados pessoais a terceiros',
        'Compartilhamos apenas quando necessário para prestação do serviço',
        'Dados podem ser compartilhados com provedores de infraestrutura',
        'Cumprimos ordens judiciais quando legalmente obrigados',
      ],
    },
    {
      title: '4. Seus Direitos (LGPD)',
      content: [
        'Confirmação da existência de tratamento de dados',
        'Acesso aos seus dados pessoais',
        'Correção de dados incompletos ou inexatos',
        'Anonimização, bloqueio ou eliminação de dados',
        'Portabilidade dos dados para outro fornecedor',
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'privacidade@fastteam.com.br',
      description: 'Para questões sobre privacidade',
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 9999-9999',
      description: 'Atendimento de segunda a sexta',
    },
    {
      icon: FileText,
      title: 'Encarregado de Dados',
      value: 'DPO FastTeam',
      description: 'Responsável pela proteção de dados',
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
                <Shield className="h-4 w-4" />
                <span>Política de Privacidade</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Seus dados estão{' '}
                <span className="text-gradient">protegidos</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprometimento total com a transparência e proteção dos seus dados pessoais,
                em conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              Última atualização: 15 de janeiro de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 mb-8">
                  Esta Política de Privacidade descreve como o FastTeam coleta, usa, armazena e protege
                  suas informações pessoais quando você utiliza nossa plataforma. Estamos comprometidos
                  com a transparência e o respeito aos seus direitos de privacidade.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              {privacySections.map((section, index) => (
                <AnimatedSection key={section.title} delay={index * 100}>
                  <div>
                    <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.content.map((item) => (
                        <li key={item} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={500}>
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">5. Segurança dos Dados</h3>
                <p className="text-gray-700 mb-4">
                  Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais
                  contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Lock className="h-4 w-4 text-(--fastteam-primary)" />
                    <span>Criptografia de dados em trânsito e em repouso</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-(--fastteam-primary)" />
                    <span>Controles de acesso rigorosos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-(--fastteam-primary)" />
                    <span>Auditorias de segurança regulares</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">6. Retenção de Dados</h3>
                <p className="text-gray-700 mb-4">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades
                  descritas nesta política, ou conforme exigido por lei.
                </p>
                <ul className="space-y-2">
                  <li>• Dados da conta: mantidos enquanto a conta estiver ativa</li>
                  <li>• Logs de acesso: 1 ano para fins de segurança</li>
                  <li>• Dados fiscais: 5 anos conforme legislação</li>
                  <li>• Dados anonimizados: indefinidamente para análise</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md-text-4xl font-bold mb-4">
                Entre em Contato
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((contact, index) => (
              <AnimatedSection key={contact.title} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <contact.icon className="h-12 w-12 text-(--fastteam-primary) mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {contact.title}
                    </h3>
                    <p className="font-medium text-(--fastteam-primary) mb-2">
                      {contact.value}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {contact.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Changes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Alterações nesta Política</h2>
              <p className="text-gray-600 mb-6">
                Podemos atualizar esta política periodicamente. Quando fizermos alterações significativas,
                notificaremos você por email ou através de aviso destacado em nossa plataforma.
              </p>
              <p className="text-sm text-gray-500">
                Esta política foi atualizada pela última vez em 15 de janeiro de 2025.
              </p>
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
                Dúvidas sobre privacidade?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Nossa equipe está pronta para esclarecer qualquer dúvida sobre o tratamento dos seus dados.
              </p>
              <Button
                size="lg"
                className="bg-white text-(--fastteam-primary) hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="/contato">
                  Falar com Privacidade
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
