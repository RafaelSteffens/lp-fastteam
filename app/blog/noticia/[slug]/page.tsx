import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/app/_components/ui/button';
import { Badge } from '@/app/_components/ui/badge';
import AnimatedSection from '@/app/_components/AnimatedSection';
import { getPostBySlug, getAllPosts } from '../../data';
import './style.css';
import ShareButtons from '../../_components/ShareButtons';
import {
  ArrowLeft,
  Clock,
  Calendar,
} from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

import { constructMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return constructMetadata({
    title: `${post.title} - Blog FastTeam`,
    description: post.excerpt,
    image: post.image,
  });
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-gray-500 hover:text-fastteam-primary mb-8 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para o Blog
              </Link>

              <Badge className="mb-6 bg-gradient-primary text-white border-none">
                {post.category}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime} de leitura
                </div>
              </div>

              {post.image && (
                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={200}>
              <article
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <ShareButtons title={post.title} slug={post.slug} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-fastteam-primary to-fastteam-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">
              Gostou do conteúdo?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Inscreva-se na nossa newsletter e receba dicas exclusivas de gestão e
              automação diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="px-6 py-3 rounded-lg text-gray-900 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                size="lg"
                className="bg-white text-fastteam-primary hover:bg-gray-100 w-full sm:w-auto font-bold"
              >
                Quero Receber
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
