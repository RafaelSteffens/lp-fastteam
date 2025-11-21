import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Badge } from '@/app/_components/ui/badge';
import AnimatedSection from '@/app/_components/AnimatedSection';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Zap,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato - FastTeam | Fale Conosco',
  description: 'Entre em contato com o FastTeam. Suporte técnico, vendas, dúvidas gerais. Chat ao vivo, email e telefone disponíveis.',
  keywords: 'contato FastTeam, suporte, atendimento, vendas, dúvidas, helpdesk',
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Chat ao Vivo',
      description: 'Converse com nossa equipe em tempo real',
      detail: 'Disponível 24/7',
      action: 'Iniciar Chat',
      available: true,
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Envie suas dúvidas por email',
      detail: 'Resposta em até 2h',
      action: 'Enviar Email',
      available: true,
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Ligue para falar com um especialista',
      detail: '(11) 9999-9999',
      action: 'Ligar Agora',
      available: true,
    },
  ];

  const offices = [
    {
      city: 'São Paulo',
      address: 'Av. Paulista, 1000 - Bela Vista',
      phone: '(11) 9999-9999',
      email: 'sp@fastteam.com.br',
    },
    {
      city: 'Rio de Janeiro',
      address: 'Av. Rio Branco, 200 - Centro',
      phone: '(21) 8888-8888',
      email: 'rj@fastteam.com.br',
    },
    {
      city: 'Belo Horizonte',
      address: 'Av. Afonso Pena, 300 - Centro',
      phone: '(31) 7777-7777',
      email: 'bh@fastteam.com.br',
    },
  ];

  const faqs = [
    {
      question: 'Como funciona o teste gratuito?',
      answer: 'Oferecemos 14 dias completos para testar todas as funcionalidades sem compromisso.',
    },
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento.',
    },
    {
      question: 'Oferecem suporte em português?',
      answer: 'Sim, nossa equipe fala português e oferece suporte completo em português do Brasil.',
    },
    {
      question: 'Como funciona a migração de dados?',
      answer: 'Oferecemos migração gratuita de dados de outros sistemas. Nossa equipe cuida de tudo.',
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
                <MessageSquare className="h-4 w-4" />
                <span>Fale Conosco</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Estamos aqui para{' '}
                <span className="text-gradient">ajudar você</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Nossa equipe está pronta para tirar suas dúvidas e ajudar seu negócio a crescer.
                Entre em contato por chat, email ou telefone.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-8">
                    <method.icon className="h-16 w-16 text-(--fastteam-primary) mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {method.description}
                    </p>
                    <Badge variant="outline" className="mb-4">
                      {method.detail}
                    </Badge>
                    <Button
                      className={method.available ? 'bg-gradient-primary' : ''}
                      disabled={!method.available}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--fastteam-primary) focus:border-transparent"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--fastteam-primary) focus:border-transparent"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--fastteam-primary) focus:border-transparent"
                        placeholder="Nome da empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Assunto *
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--fastteam-primary) focus:border-transparent">
                        <option>Selecione um assunto</option>
                        <option>Suporte técnico</option>
                        <option>Vendas</option>
                        <option>Dúvidas gerais</option>
                        <option>Parcerias</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--fastteam-primary) focus:border-transparent"
                        placeholder="Digite sua mensagem..."
                      />
                    </div>
                    <Button className="w-full bg-gradient-primary" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Offices */}
            <AnimatedSection delay={200}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Nossos Escritórios</h2>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <Card key={office.city}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">
                          {office.city}
                        </h3>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 mt-1 shrink-0" />
                            <span className="text-sm">{office.address}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 shrink-0" />
                            <span className="text-sm">{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 shrink-0" />
                            <span className="text-sm">{office.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Respostas para as dúvidas mais comuns
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 50}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
                Pronto para começar?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Teste gratuitamente por 14 dias e veja como podemos transformar seu negócio.
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
