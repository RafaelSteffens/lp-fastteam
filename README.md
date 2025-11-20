# FastTeam Landing Page

Uma landing page moderna construída com Next.js, TypeScript e Tailwind CSS para apresentar o FastTeam.

## Tecnologias Utilizadas

- **Next.js 16** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e não estilizados
- **Lucide React** - Ícones SVG

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** ou **yarn** (gerenciadores de pacotes)

Você pode verificar as versões instaladas executando:
```bash
node --version
npm --version
```

## Instalação e Configuração

### 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd FastTeam_LandingPage
```

### 2. Instalar Dependências

Após clonar o repositório, instale todas as dependências necessárias:

```bash
npm install
```

Este comando instalará todas as dependências listadas no `package.json`, incluindo:
- Dependências de produção (Next.js, React, Tailwind CSS, etc.)
- Dependências de desenvolvimento (TypeScript, ESLint, PostCSS, etc.)

### 3. Configurar Variáveis de Ambiente (Opcional)

Se o projeto utilizar Supabase ou outras integrações, crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis necessárias:


## Como Rodar o Projeto Localmente

### Desenvolvimento

Para rodar o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000`. A aplicação suporta hot-reload, então qualquer alteração nos arquivos será refletida automaticamente no navegador.

### Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

### Executar em Produção

Após o build, você pode executar a aplicação em modo produção:

```bash
npm start
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build para produção
- `npm start` - Executa a aplicação em produção
- `npm run lint` - Executa o linter (ESLint)
- `npm run typecheck` - Verifica tipos TypeScript

## Estrutura do Projeto

```
FastTeam_LandingPage/
├── app/                    # Páginas Next.js (App Router)
│   ├── globals.css        # Estilos globais e Tailwind
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── blog/              # Página do blog
│   ├── funcionalidades/   # Página de funcionalidades
│   └── precos/            # Página de preços
├── components/            # Componentes React
│   ├── ui/                # Componentes UI (Radix UI)
│   ├── Header.tsx         # Cabeçalho
│   ├── Footer.tsx         # Rodapé
│   └── AnimatedSection.tsx # Seção animada
├── lib/                   # Utilitários
│   └── utils.ts           # Funções utilitárias
├── tailwind.config.ts     # Configuração do Tailwind CSS
├── postcss.config.js      # Configuração do PostCSS
├── next.config.js         # Configuração do Next.js
├── package.json           # Dependências e scripts
└── tsconfig.json          # Configuração do TypeScript
```

## Desenvolvimento

### Adicionando Novos Componentes

Os componentes estão localizados na pasta `components/`. Para componentes UI reutilizáveis, use a pasta `components/ui/`.

### Estilização

O projeto utiliza Tailwind CSS v4. As classes são aplicadas diretamente nos componentes JSX/TSX. Variáveis CSS customizadas estão definidas em `app/globals.css`.

### Tipagem

Todo o código é escrito em TypeScript. Certifique-se de definir tipos apropriados para props e estados.

## Suporte

Se encontrar problemas durante a instalação ou execução, verifique:

1. Versão do Node.js (deve ser 18+)
2. Todas as dependências foram instaladas corretamente
3. Porta 3000 não está sendo usada por outro processo
4. Arquivos de configuração estão corretos

## Licença

Este projeto é privado e propriedade da FastTeam.


