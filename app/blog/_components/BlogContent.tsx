'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Badge } from '@/app/_components/ui/badge';
import AnimatedSection from '@/app/_components/AnimatedSection';
import { blogPosts } from '../data';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    'Todos',
    'Automação',
    'CRM',
    'Vendas',
    'Gestão',
    'Analytics',
    'Tecnologia',
  ];

  const filteredPosts =
    selectedCategory === 'Todos'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? 'default' : 'outline'}
              className={
                category === selectedCategory ? 'bg-gradient-primary' : ''
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <AnimatedSection key={post.title} delay={index * 50}>
            <Card className="h-full hover:shadow-lg transition-all hover:border-fastteam-primary/20 group">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {post.icon && <post.icon className="h-6 w-6 text-white" />}
                </div>
                <Badge variant="outline" className="mb-3 w-fit">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-bold mb-3 group-hover:text-fastteam-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <Link
                    href={`/blog/noticia/${post.slug}`}
                    className="text-fastteam-primary font-medium hover:underline flex items-center space-x-1"
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
  );
}
