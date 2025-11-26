import { Metadata } from 'next';

export const siteConfig = {
  name: 'FastTeam',
  description: 'FastTeam é a solução de CRM, ERP e automação para empresas que buscam eficiência. Gerencie seu time, clientes e operações em uma única plataforma.',
  url: 'https://lp-fastteam.vercel.app',
  ogImage: 'https://fastteam.com.br/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/fastteam',
    github: 'https://github.com/fastteam',
  },
  keywords: [
    'CRM',
    'ERP',
    'automação',
    'gestão',
    'produtividade',
    'vendas',
    'SaaS',
  ],
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/icon.png',
  noIndex = false,
  keywords = siteConfig.keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords,
    openGraph: {
      title: {
        default: title,
        template: `%s | ${siteConfig.name}`,
      },
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: {
        default: title,
        template: `%s | ${siteConfig.name}`,
      },
      description,
      images: [image],
      creator: '@fastteam',
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
