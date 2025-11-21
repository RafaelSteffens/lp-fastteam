import Link from 'next/link';
import { Zap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">FastTeam</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforme sua operação com velocidade, automação e inteligência.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-(--fastteam-primary) transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-(--fastteam-primary) transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-(--fastteam-primary) transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-(--fastteam-primary) transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/funcionalidades"
                  className="hover:text-(--fastteam-primary) transition-colors"
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link
                  href="/precos"
                  className="hover:text-(--fastteam-primary) transition-colors"
                >
                  Preços
                </Link>
              </li>
              <li>
                <Link
                  href="/seguranca"
                  className="hover:text-(--fastteam-primary) transition-colors"
                >
                  Segurança
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-(--fastteam-primary) transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-(--fastteam-primary) transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-(--fastteam-primary) transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/documentacao"
                  className="hover:text-(--fastteam-primary) transition-colors"
                >
                  Documentação
                </Link>
              </li>
              <li>
                <Link
                  href="/suporte"
                  className="hover:text-(--fastteam-primary) transition-colors"
                >
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} FastTeam. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacidade"
              className="text-gray-400 hover:text-(--fastteam-primary) text-sm transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/privacidade"
              className="text-gray-400 hover:text-(--fastteam-primary) text-sm transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
