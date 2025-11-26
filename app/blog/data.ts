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
  LucideIcon,
} from 'lucide-react';

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  image?: string;
  icon?: LucideIcon;
  content: string;
}

export const featuredPost: BlogPost = {
  title: '10 Automações que Todo Negócio Deveria Ter em 2025',
  excerpt:
    'Descubra como automatizar processos repetitivos pode liberar até 20 horas por semana da sua equipe e aumentar a produtividade em 300%.',
  category: 'Automação',
  readTime: '8 min',
  date: '2025-01-15',
  slug: '10-automacoes-que-todo-negocio-deveria-ter-em-2025',
  image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  content: `
    <p>A automação de processos não é mais um luxo, mas uma necessidade para empresas que desejam escalar em 2025. Com a tecnologia certa, é possível eliminar tarefas manuais, reduzir erros e focar no que realmente importa: estratégia e crescimento.</p>
    
    <h2>1. Automação de E-mail Marketing</h2>
    <p>Configure sequências de e-mails automáticas para nutrir leads, dar boas-vindas a novos clientes e recuperar carrinhos abandonados. Ferramentas modernas permitem personalização em escala, garantindo que a mensagem certa chegue à pessoa certa no momento ideal.</p>

    <h2>2. Gestão de CRM e Pipeline de Vendas</h2>
    <p>Mantenha seu CRM atualizado automaticamente. Integre seu formulário de contato ao CRM para que novos leads sejam cadastrados instantaneamente e atribuídos aos vendedores, agilizando o primeiro contato e aumentando as taxas de conversão.</p>

    <h2>3. Emissão de Notas Fiscais e Boletos</h2>
    <p>Integre seu sistema de vendas ao software financeiro para emitir notas fiscais e boletos assim que uma venda for concretizada. Isso reduz a carga administrativa e acelera o fluxo de caixa.</p>

    <h2>4. Agendamento de Reuniões</h2>
    <p>Utilize ferramentas de agendamento online que se sincronizam com sua agenda. Envie links para clientes escolherem o melhor horário, eliminando a troca interminável de e-mails para marcar uma reunião.</p>

    <h2>5. Relatórios Automatizados</h2>
    <p>Crie dashboards que se atualizam em tempo real. Tenha acesso a métricas de vendas, marketing e financeiro sem precisar consolidar planilhas manualmente no final do mês.</p>
  `,
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Como Implementar um CRM do Zero em 7 Dias',
    excerpt:
      'Guia completo para estruturar seu CRM e começar a organizar vendas com processos claros e replicáveis.',
    category: 'CRM',
    readTime: '6 min',
    date: '2025-01-12',
    slug: 'como-implementar-um-crm-do-zero-em-7-dias',
    icon: Users,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    content: `
      <p>Implementar um CRM pode parecer uma tarefa assustadora, mas com um planejamento adequado, é possível ter um sistema funcional em apenas uma semana. O segredo está em começar simples e evoluir conforme a necessidade.</p>

      <h2>Dia 1-2: Mapeamento de Processos</h2>
      <p>Antes de configurar a ferramenta, desenhe seu processo de vendas atual. Identifique as etapas do funil, desde a prospecção até o fechamento. Defina o que constitui uma "oportunidade" e quais são os critérios para avançar de fase.</p>

      <h2>Dia 3-4: Configuração e Importação de Dados</h2>
      <p>Escolha a ferramenta de CRM e configure as etapas do funil definidas anteriormente. Importe sua base de contatos existente, garantindo que os dados estejam limpos e organizados. Configure campos personalizados se necessário.</p>

      <h2>Dia 5-7: Treinamento e Go-Live</h2>
      <p>Treine sua equipe no uso da ferramenta. Mostre como registrar atividades, atualizar status e agendar tarefas. Comece a usar o CRM oficialmente e faça ajustes finos conforme o feedback da equipe nos primeiros dias.</p>
    `,
  },
  {
    title: 'ERP vs CRM: Qual a Diferença e Por Que Você Precisa de Ambos',
    excerpt:
      'Entenda as diferenças fundamentais e como a integração entre ERP e CRM transforma resultados.',
    category: 'Gestão',
    readTime: '5 min',
    date: '2025-01-10',
    slug: 'erp-vs-crm-qual-a-diferenca-e-por-que-voce-precisa-de-ambos',
    icon: BarChart3,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    content: `
      <p>Muitos gestores confundem ERP e CRM, ou acham que um substitui o outro. Na verdade, são sistemas complementares que, quando integrados, oferecem uma visão 360º do negócio.</p>

      <h2>O Papel do CRM (Customer Relationship Management)</h2>
      <p>O CRM foca no cliente e nas vendas. Ele gerencia o relacionamento, desde a captação do lead até o pós-venda. É a ferramenta da equipe comercial e de marketing para impulsionar receitas.</p>

      <h2>O Papel do ERP (Enterprise Resource Planning)</h2>
      <p>O ERP cuida da gestão interna: financeiro, estoque, contabilidade, RH e produção. Ele garante que a empresa opere de forma eficiente e organizada, controlando custos e recursos.</p>

      <h2>A Força da Integração</h2>
      <p>Quando integrados, o pedido fechado no CRM gera automaticamente uma ordem de venda no ERP, que baixa o estoque e emite a nota fiscal. Isso elimina redigitação, erros e agiliza a entrega ao cliente.</p>
    `,
  },
  {
    title: 'Aumente Suas Vendas em 50% com Funil de Vendas Otimizado',
    excerpt:
      'Estratégias práticas para estruturar seu funil de vendas e converter mais leads em clientes.',
    category: 'Vendas',
    readTime: '7 min',
    date: '2025-01-08',
    slug: 'aumente-suas-vendas-em-50-com-funil-de-vendas-otimizado',
    icon: TrendingUp,
    image: 'https://images.pexels.com/photos/7681092/pexels-photo-7681092.jpeg',
    content: `
      <p>Um funil de vendas bem estruturado é a espinha dorsal de uma operação comercial de sucesso. Otimizar cada etapa pode trazer ganhos exponenciais no resultado final.</p>

      <h2>Topo de Funil: Atração Qualificada</h2>
      <p>Não adianta atrair qualquer visitante. Foque em atrair o perfil de cliente ideal (ICP). Use marketing de conteúdo e anúncios segmentados para trazer leads que realmente têm potencial de compra.</p>

      <h2>Meio de Funil: Nutrição e Engajamento</h2>
      <p>Muitos leads não estão prontos para comprar imediatamente. Mantenha o relacionamento com conteúdo relevante, estudos de caso e demonstrações de valor. Mostre que você entende a dor deles e tem a solução.</p>

      <h2>Fundo de Funil: Conversão Assertiva</h2>
      <p>Facilite o fechamento. Tenha processos claros de negociação, propostas comerciais objetivas e use gatilhos mentais éticos para ajudar o cliente a tomar a decisão de compra.</p>
    `,
  },
  {
    title: 'Gestão de Equipe Remota: 12 Ferramentas Essenciais',
    excerpt:
      'Descubra as melhores práticas e ferramentas para gerenciar times remotos com alta performance.',
    category: 'Gestão',
    readTime: '6 min',
    date: '2025-01-05',
    slug: 'gestao-de-equipe-remota-12-ferramentas-essenciais',
    icon: Users,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    content: `
      <p>Gerenciar equipes remotas exige um conjunto diferente de habilidades e ferramentas. A comunicação assíncrona e a confiança são a base, mas a tecnologia é o facilitador.</p>

      <h2>Comunicação e Colaboração</h2>
      <p>Ferramentas como Slack ou Microsoft Teams são vitais para a comunicação diária. Para videoconferências, Zoom ou Google Meet. O importante é definir canais claros para cada tipo de assunto.</p>

      <h2>Gestão de Projetos e Tarefas</h2>
      <p>Trello, Asana ou ClickUp ajudam a manter todos na mesma página sobre o que precisa ser feito, prazos e responsabilidades. A transparência no andamento das tarefas reduz a necessidade de microgerenciamento.</p>

      <h2>Cultura e Engajamento</h2>
      <p>Não esqueça do lado humano. Use ferramentas para facilitar momentos de descontração e feedback, como Donut (para pareamentos aleatórios) ou plataformas de reconhecimento entre pares.</p>
    `,
  },
  {
    title: 'Workflows Inteligentes: Como Criar Processos que Escalam',
    excerpt:
      'Aprenda a desenhar workflows que crescem com seu negócio sem adicionar complexidade.',
    category: 'Automação',
    readTime: '9 min',
    date: '2025-01-03',
    slug: 'workflows-inteligentes-como-criar-processos-que-escalam',
    icon: Workflow,
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
    content: `
      <p>Escalar um negócio sem escalar o caos exige processos bem definidos. Workflows inteligentes são sequências de tarefas automatizadas ou padronizadas que garantem consistência e qualidade.</p>

      <h2>Padronização é o Primeiro Passo</h2>
      <p>Antes de automatizar, padronize. Documente como as tarefas devem ser executadas. Crie checklists e manuais operacionais (SOPs). Só é possível escalar o que é replicável.</p>

      <h2>Identifique Gargalos</h2>
      <p>Analise seus processos atuais e encontre onde o trabalho trava. É na aprovação de propostas? Na passagem de bastão entre marketing e vendas? Foque em resolver esses gargalos com workflows automatizados.</p>

      <h2>Melhoria Contínua</h2>
      <p>Workflows não são estáticos. Monitore os resultados, colete feedback da equipe e faça ajustes constantes. O processo que funciona para 10 clientes pode não funcionar para 100.</p>
    `,
  },
  {
    title: 'Métricas que Realmente Importam para o Crescimento',
    excerpt:
      'As 7 métricas fundamentais que todo gestor precisa acompanhar para tomar decisões estratégicas.',
    category: 'Analytics',
    readTime: '5 min',
    date: '2025-01-01',
    slug: 'metricas-que-realmente-importam-para-o-crescimento',
    icon: Target,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    content: `
      <p>Em um mar de dados, é fácil se perder em métricas de vaidade. Para crescer de forma sustentável, foque nos indicadores que realmente mostram a saúde do negócio.</p>

      <h2>CAC (Custo de Aquisição de Cliente) e LTV (Lifetime Value)</h2>
      <p>Essas são as métricas rainhas. Quanto custa trazer um cliente e quanto ele deixa de receita ao longo do tempo. A relação LTV/CAC deve ser saudável (idealmente acima de 3) para garantir lucratividade.</p>

      <h2>Churn Rate (Taxa de Cancelamento)</h2>
      <p>Reter clientes é tão importante quanto adquirir novos. Monitore o churn de perto e entenda os motivos de saída. Reduzir o churn tem um impacto direto e poderoso na receita recorrente.</p>

      <h2>MRR (Receita Recorrente Mensal)</h2>
      <p>Para negócios de assinatura, o MRR é o pulso da empresa. Acompanhe o crescimento do MRR, o MRR de expansão (upsell) e o MRR perdido (churn) para ter uma visão clara do crescimento.</p>
    `,
  },
  {
    title: 'IA no Atendimento ao Cliente: O Que Funciona de Verdade',
    excerpt:
      'Como usar inteligência artificial para melhorar atendimento sem perder o toque humano.',
    category: 'Tecnologia',
    readTime: '8 min',
    date: '2024-12-28',
    slug: 'ia-no-atendimento-ao-cliente-o-que-funciona-de-verdade',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    content: `
      <p>A Inteligência Artificial revolucionou o atendimento ao cliente, mas o segredo está no equilíbrio entre automação e humanização.</p>

      <h2>Chatbots Inteligentes para Triagem</h2>
      <p>Use IA para responder perguntas frequentes e fazer a triagem inicial. Isso libera os atendentes humanos para resolverem problemas complexos que exigem empatia e julgamento.</p>

      <h2>Análise de Sentimento</h2>
      <p>Ferramentas de IA podem analisar o tom de voz e o texto do cliente em tempo real, alertando supervisores sobre interações críticas e sugerindo as melhores respostas para acalmar a situação.</p>

      <h2>Personalização em Escala</h2>
      <p>A IA pode usar o histórico do cliente para recomendar produtos ou soluções personalizadas durante o atendimento, criando uma experiência mais relevante e aumentando a satisfação.</p>
    `,
  },
  {
    title: 'Reduzindo CAC: 9 Estratégias Comprovadas',
    excerpt:
      'Táticas práticas para diminuir seu Custo de Aquisição de Cliente e aumentar o ROI.',
    category: 'Vendas',
    readTime: '7 min',
    date: '2024-12-26',
    slug: 'reduzindo-cac-9-estrategias-comprovadas',
    icon: TrendingUp,
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg',
    content: `
      <p>Reduzir o Custo de Aquisição de Cliente (CAC) é uma das maneiras mais eficazes de aumentar a margem de lucro. Aqui estão estratégias para otimizar seus investimentos.</p>

      <h2>Otimização de Taxa de Conversão (CRO)</h2>
      <p>Melhore suas landing pages e site para converter mais visitantes em leads. Testes A/B, melhoria na velocidade do site e CTAs claros podem fazer uma grande diferença sem aumentar o investimento em mídia.</p>

      <h2>Marketing de Conteúdo e SEO</h2>
      <p>Invista em tráfego orgânico. Conteúdo de qualidade atrai leads qualificados a um custo marginal próximo de zero no longo prazo, diminuindo a dependência de anúncios pagos.</p>

      <h2>Programas de Indicação (Referral)</h2>
      <p>Incentive seus clientes atuais a indicarem novos clientes. O boca a boca é um dos canais de aquisição mais baratos e com maior taxa de conversão e retenção.</p>
    `,
  },
  {
    title: 'Onboarding de Clientes: Do Caos à Excelência',
    excerpt:
      'Transforme seu processo de onboarding em uma experiência memorável que reduz churn.',
    category: 'CRM',
    readTime: '6 min',
    date: '2024-12-23',
    slug: 'onboarding-de-clientes-do-caos-a-excelencia',
    icon: Users,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    content: `
      <p>O onboarding é o momento crítico onde o cliente decide se vai ficar ou sair. Uma primeira impressão ruim é difícil de reverter.</p>

      <h2>Defina o "Primeiro Valor"</h2>
      <p>O objetivo do onboarding deve ser levar o cliente ao "Aha! Moment" o mais rápido possível. Identifique qual é a primeira entrega de valor real do seu produto e foque nisso.</p>

      <h2>Processo Estruturado e Transparente</h2>
      <p>Mostre ao cliente quais são as etapas do onboarding e o que se espera dele. Use checklists compartilhados e mantenha uma comunicação proativa sobre o progresso.</p>

      <h2>Acompanhamento Pós-Onboarding</h2>
      <p>O onboarding não acaba quando a conta é configurada. Acompanhe o uso nas primeiras semanas para garantir que o cliente está adotando a ferramenta e obtendo os resultados esperados.</p>
    `,
  },
];

export function getAllPosts() {
  return [featuredPost, ...blogPosts];
}

export function getPostBySlug(slug: string) {
  if (featuredPost.slug === slug) {
    return featuredPost;
  }
  return blogPosts.find((post) => post.slug === slug);
}
