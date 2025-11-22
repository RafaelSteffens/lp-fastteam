import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Badge } from '@/app/_components/ui/badge';
import AnimatedSection from '@/app/_components/AnimatedSection';
import BlogContent from './_components/BlogContent';
import { featuredPost } from './data';
import {
  Zap,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - FastTeam | Dicas de Gestão, CRM e Automação',
  description: 'Aprenda estratégias de crescimento, gestão de equipe, automação de processos e otimização de vendas com o blog do FastTeam.',
  keywords: 'blog CRM, gestão empresarial, automação, produtividade, vendas, marketing',
};

export default function BlogPage() {

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-linear-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-(--fastteam-primary-dark) px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                <span>Blog FastTeam</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Aprenda a{' '}
                <span className="text-gradient">crescer mais rápido</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Estratégias, dicas e insights para transformar sua operação e
                impulsionar resultados.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div
                  className="h-64 lg:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit bg-gradient-primary">
                    Destaque
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <Button className="bg-gradient-primary" asChild>
                      <Link href={`/blog/noticia/${featuredPost.slug}`}>
                        Ler Artigo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <BlogContent />
      </section>

      <section className="py-16 lg:py-24 bg-linear-to-br from-(--fastteam-primary) to-(--fastteam-primary-dark) text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Receba conteúdos exclusivos por email
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Estratégias, dicas e novidades direto na sua caixa de entrada.
                Sem spam, prometemos!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button
                  size="lg"
                  className="bg-white text-(--fastteam-primary) hover:bg-gray-100"
                >
                  Inscrever
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
