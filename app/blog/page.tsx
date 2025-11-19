import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Zap,
  Clock,
  ArrowRight,
  TrendingUp,
  Users,
  Workflow,
  BarChart3,
  Target,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - FastTeam | Dicas de Gestão, CRM e Automação',
  description: 'Aprenda estratégias de crescimento, gestão de equipe, automação de processos e otimização de vendas com o blog do FastTeam.',
  keywords: 'blog CRM, gestão empresarial, automação, produtividade, vendas, marketing',
};

export default function BlogPage() {
  const featuredPost = {
    title: '10 Automações que Todo Negócio Deveria Ter em 2025',
    excerpt:
      'Descubra como automatizar processos repetitivos pode liberar até 20 horas por semana da sua equipe e aumentar a produtividade em 300%.',
    category: 'Automação',
    readTime: '8 min',
    date: '15 Jan 2025',
    slug: 'automacoes-essenciais-2025',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  };

  const blogPosts = [
    {
      title: 'Como Implementar um CRM do Zero em 7 Dias',
      excerpt:
        'Guia completo para estruturar seu CRM e começar a organizar vendas com processos claros e replicáveis.',
      category: 'CRM',
      readTime: '6 min',
      date: '12 Jan 2025',
      slug: 'implementar-crm-7-dias',
      icon: Users,
    },
    {
      title: 'ERP vs CRM: Qual a Diferença e Por Que Você Precisa de Ambos',
      excerpt:
        'Entenda as diferenças fundamentais e como a integração entre ERP e CRM transforma resultados.',
      category: 'Gestão',
      readTime: '5 min',
      date: '10 Jan 2025',
      slug: 'erp-vs-crm-diferencas',
      icon: BarChart3,
    },
    {
      title: 'Aumente Suas Vendas em 50% com Funil de Vendas Otimizado',
      excerpt:
        'Estratégias práticas para estruturar seu funil de vendas e converter mais leads em clientes.',
      category: 'Vendas',
      readTime: '7 min',
      date: '8 Jan 2025',
      slug: 'funil-vendas-otimizado',
      icon: TrendingUp,
    },
    {
      title: 'Gestão de Equipe Remota: 12 Ferramentas Essenciais',
      excerpt:
        'Descubra as melhores práticas e ferramentas para gerenciar times remotos com alta performance.',
      category: 'Gestão',
      readTime: '6 min',
      date: '5 Jan 2025',
      slug: 'gestao-equipe-remota',
      icon: Users,
    },
    {
      title: 'Workflows Inteligentes: Como Criar Processos que Escalam',
      excerpt:
        'Aprenda a desenhar workflows que crescem com seu negócio sem adicionar complexidade.',
      category: 'Automação',
      readTime: '9 min',
      date: '3 Jan 2025',
      slug: 'workflows-inteligentes',
      icon: Workflow,
    },
    {
      title: 'Métricas que Realmente Importam para o Crescimento',
      excerpt:
        'As 7 métricas fundamentais que todo gestor precisa acompanhar para tomar decisões estratégicas.',
      category: 'Analytics',
      readTime: '5 min',
      date: '1 Jan 2025',
      slug: 'metricas-crescimento',
      icon: Target,
    },
    {
      title: 'IA no Atendimento ao Cliente: O Que Funciona de Verdade',
      excerpt:
        'Como usar inteligência artificial para melhorar atendimento sem perder o toque humano.',
      category: 'Tecnologia',
      readTime: '8 min',
      date: '28 Dez 2024',
      slug: 'ia-atendimento-cliente',
      icon: Sparkles,
    },
    {
      title: 'Reduzindo CAC: 9 Estratégias Comprovadas',
      excerpt:
        'Táticas práticas para diminuir seu Custo de Aquisição de Cliente e aumentar o ROI.',
      category: 'Vendas',
      readTime: '7 min',
      date: '26 Dez 2024',
      slug: 'reduzir-cac-estrategias',
      icon: TrendingUp,
    },
    {
      title: 'Onboarding de Clientes: Do Caos à Excelência',
      excerpt:
        'Transforme seu processo de onboarding em uma experiência memorável que reduz churn.',
      category: 'CRM',
      readTime: '6 min',
      date: '23 Dez 2024',
      slug: 'onboarding-clientes-excelencia',
      icon: Users,
    },
  ];

  const categories = [
    'Todos',
    'Automação',
    'CRM',
    'Vendas',
    'Gestão',
    'Analytics',
    'Tecnologia',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-[var(--fastteam-primary-dark)] px-4 py-2 rounded-full text-sm font-medium mb-6">
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
                      <Link href={`/blog/${featuredPost.slug}`}>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'Todos' ? 'default' : 'outline'}
                  className={
                    category === 'Todos' ? 'bg-gradient-primary' : ''
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 50}>
                <Card className="h-full hover:shadow-lg transition-all hover:border-[var(--fastteam-primary)]/20 group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <post.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="mb-3 w-fit">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--fastteam-primary)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[var(--fastteam-primary)] font-medium hover:underline flex items-center space-x-1"
                      >
                        <span>Ler</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Carregar Mais Artigos
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--fastteam-primary)] to-[var(--fastteam-primary-dark)] text-white">
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
                  className="bg-white text-[var(--fastteam-primary)] hover:bg-gray-100"
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
