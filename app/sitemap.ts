import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { getAllPosts } from './blog/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts();

  const blogRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/noticia/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const routes = [
    '',
    '/precos',
    '/contato',
    '/sobre',
    '/funcionalidades',
    '/documentacao',
    '/privacidade',
    '/seguranca',
    '/suporte',
    '/blog',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...blogRoutes];
}
