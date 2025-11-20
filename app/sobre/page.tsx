import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Zap,
  Users,
  Target,
  Award,
  Heart,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nós - FastTeam | Nossa História e Missão',
  description: 'Conheça a história do FastTeam, nossa missão de transformar operações empresariais e os valores que nos guiam. Mais de 1000 empresas confiam em nossa solução.',
  keywords: 'sobre FastTeam, história empresa, missão valores, transformação digital, CRM ERP',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar operações empresariais através de tecnologia inteligente, tornando empresas mais eficientes e produtivas.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Transparência, inovação e compromisso com o sucesso dos nossos clientes são os pilares que nos guiam.',
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos a excelência em tudo que fazemos, desde o desenvolvimento até o atendimento ao cliente.',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Empresas Atendidas' },
    { number: '50k+', label: 'Usuários Ativos' },
    { number: '99.9%', label: 'Uptime Garantido' },
    { number: '24/7', label: 'Suporte Disponível' },
  ];

  const team = [
    {
      name: 'João Silva',
      role: 'CEO & Fundador',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      bio: 'Empresário com 15 anos de experiência em transformação digital.',
    },
    {
      name: 'Maria Santos',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      bio: 'Especialista em arquitetura de software e automação de processos.',
    },
    {
      name: 'Pedro Costa',
      role: 'Head de Produto',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      bio: 'Focado em criar experiências excepcionais para nossos usuários.',
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
                <Zap className="h-4 w-4" />
                <span>Sobre o FastTeam</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transformando empresas com{' '}
                <span className="text-gradient">tecnologia inteligente</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Desde 2020, ajudamos mais de 1000 empresas a otimizarem suas operações,
                aumentarem a produtividade e crescerem de forma sustentável.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Nossa História
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  O FastTeam nasceu da necessidade de simplificar a gestão empresarial.
                  Após anos trabalhando com empresas de diversos setores, percebemos que
                  a maioria enfrentava os mesmos desafios: processos manuais, falta de
                  integração entre sistemas e dificuldade em acompanhar métricas importantes.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Em 2020, reunimos uma equipe de especialistas em tecnologia e gestão
                  para criar uma solução completa que resolvesse esses problemas de uma
                  vez por todas. O resultado foi o FastTeam: uma plataforma integrada
                  de CRM, ERP e automação que se adapta ao tamanho e às necessidades
                  do seu negócio.
                </p>
                <div className="flex items-center space-x-2 text-(--fastteam-primary)">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Mais de 1000 empresas transformadas</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-linear-to-br from-green-100 to-green-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <Zap className="h-32 w-32 text-(--fastteam-primary)" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Os princípios que nos guiam em tudo que fazemos
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <value.icon className="h-16 w-16 text-(--fastteam-primary) mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa Equipe
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Profissionais apaixonados por tecnologia e resultados
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div
                      className="w-24 h-24 bg-cover bg-center rounded-full mx-auto mb-4"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-(--fastteam-primary) font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Junte-se às milhares de empresas que confiam no FastTeam
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Comece sua transformação digital hoje mesmo.
              </p>
              <Button
                size="lg"
                className="bg-white text-(--fastteam-primary) hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="/precos">
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
