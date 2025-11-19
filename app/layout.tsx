import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'FastTeam - Transforme Sua Operação com Automação Inteligente',
  description: 'FastTeam é a solução completa de CRM, ERP e automação para empresas que buscam velocidade e eficiência. Gerencie seu time, clientes e operações em uma única plataforma.',
  keywords: 'CRM, ERP, automação, gestão de equipe, atendimento rápido, operações ágeis, software empresarial, gestão comercial',
  authors: [{ name: 'FastTeam' }],
  creator: 'FastTeam',
  publisher: 'FastTeam',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://fastteam.com',
    title: 'FastTeam - Transforme Sua Operação com Automação Inteligente',
    description: 'FastTeam é a solução completa de CRM, ERP e automação para empresas que buscam velocidade e eficiência.',
    siteName: 'FastTeam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FastTeam - Transforme Sua Operação com Automação Inteligente',
    description: 'FastTeam é a solução completa de CRM, ERP e automação para empresas que buscam velocidade e eficiência.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
