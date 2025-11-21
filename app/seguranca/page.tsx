import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Badge } from '@/app/_components/ui/badge';
import AnimatedSection from '@/app/_components/AnimatedSection';
import {
  Shield,
  Lock,
  Eye,
  CheckCircle,
  Server,
  Users,
  FileText,
  AlertTriangle,
  Zap,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Segurança - FastTeam | Proteção de Dados e Conformidade',
  description: 'Conheça nossas medidas de segurança: criptografia de ponta, conformidade LGPD, backup automático e proteção avançada contra ameaças.',
  keywords: 'segurança dados, LGPD, criptografia, backup, conformidade, proteção dados',
};

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Criptografia de Ponta',
      description: 'Todos os dados são criptografados em trânsito e em repouso usando AES-256',
      details: ['TLS 1.3 para transmissão', 'AES-256 para armazenamento', 'Chaves de criptografia rotativas'],
    },
    {
      icon: Server,
      title: 'Infraestrutura Segura',
      description: 'Servidores em data centers certificados com redundância e monitoramento 24/7',
      details: ['AWS com certificação SOC 2', 'Redundância geográfica', 'Monitoramento contínuo'],
    },
    {
      icon: Eye,
      title: 'Controle de Acesso',
      description: 'Sistema granular de permissões e autenticação multifator obrigatória',
      details: ['RBAC (Role-Based Access Control)', '2FA obrigatório', 'Logs de auditoria completos'],
    },
    {
      icon: FileText,
      title: 'Conformidade LGPD',
      description: 'Total conformidade com a Lei Geral de Proteção de Dados do Brasil',
      details: ['Política de privacidade clara', 'Consentimento explícito', 'Direito ao esquecimento'],
    },
    {
      icon: Shield,
      title: 'Proteção contra Ameaças',
      description: 'Firewall avançado, detecção de intrusões e resposta automática a incidentes',
      details: ['WAF (Web Application Firewall)', 'IDS/IPS ativo', 'Resposta automática a ameaças'],
    },
    {
      icon: Server,
      title: 'Backup Automático',
      description: 'Backups diários com retenção de 30 dias e recuperação point-in-time',
      details: ['Backup diário automático', 'Retenção de 30 dias', 'Recuperação instantânea'],
    },
  ];

  const certifications = [
    { name: 'SOC 2 Type II', description: 'Certificação de segurança e conformidade' },
    { name: 'ISO 27001', description: 'Padrão internacional de gestão de segurança' },
    { name: 'LGPD Compliance', description: 'Conforme Lei Geral de Proteção de Dados' },
    { name: 'GDPR Ready', description: 'Preparado para Regulamento Geral de Proteção de Dados' },
  ];

  const securityStats = [
    { number: '99.9%', label: 'Uptime Garantido' },
    { number: '256-bit', label: 'Criptografia AES' },
    { number: '24/7', label: 'Monitoramento' },
    { number: '30 dias', label: 'Retenção de Backup' },
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
                <span>Segurança Total</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Seus dados estão{' '}
                <span className="text-gradient">100% seguros</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Implementamos as mais avançadas medidas de segurança para proteger suas informações.
                Criptografia de ponta, conformidade LGPD e monitoramento contínuo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {securityStats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-(--fastteam-primary) mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Medidas de Segurança Implementadas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tecnologia de ponta para proteger seus dados em todos os momentos
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 50}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <feature.icon className="h-12 w-12 text-(--fastteam-primary) mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
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

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Certificações e Conformidade
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Atendemos aos mais rigorosos padrões de segurança e conformidade
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 50}>
                <Card className="text-center hover:shadow-lg transition-shadow border-(--fastteam-primary)/20">
                  <CardContent className="pt-8">
                    <Shield className="h-16 w-16 text-(--fastteam-primary) mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Processo de Segurança Transparente
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Acreditamos que transparência é fundamental para a confiança.
                  Por isso, mantemos nossos clientes informados sobre todas as
                  medidas de segurança implementadas e qualquer incidente que
                  possa afetar seus dados.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Monitoramento Contínuo</h3>
                      <p className="text-gray-600 text-sm">
                        Equipe dedicada monitorando sistemas 24/7
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Resposta Rápida</h3>
                      <p className="text-gray-600 text-sm">
                        Protocolos de resposta a incidentes em menos de 15 minutos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Transparência Total</h3>
                      <p className="text-gray-600 text-sm">
                        Relatórios mensais de segurança e incidentes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-linear-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <div className="text-center">
                  <AlertTriangle className="h-24 w-24 text-(--fastteam-primary) mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Status de Segurança
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sistema Online</span>
                      <Badge className="bg-green-500">99.9% Uptime</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Último Backup</span>
                      <Badge variant="outline">2h atrás</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ameaças Bloqueadas</span>
                      <Badge className="bg-blue-500">1.2M hoje</Badge>
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
                Segurança que você pode confiar
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Junte-se a milhares de empresas que confiam seus dados mais importantes ao FastTeam.
              </p>
              <Button
                size="lg"
                className="bg-white text-(--fastteam-primary) hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="/precos">
                  Começar com Segurança
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
