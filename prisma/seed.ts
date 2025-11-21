import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Limpar dados existentes
    await prisma.pricingPlan.deleteMany();

    // Criar planos de preços
    const plans = [
        {
            name: 'Starter',
            icon: 'Zap',
            price: 'R$ 97',
            period: '/mês',
            description: 'Perfeito para começar a transformar sua operação',
            features: [
                'Até 3 usuários',
                'CRM completo',
                'Automações básicas',
                '1.000 contatos',
                'Suporte por email',
                'Integrações essenciais',
                'Relatórios básicos',
                'Armazenamento 5GB',
            ],
            cta: 'Começar Teste Grátis',
            popular: false,
            active: true,
            order: 1,
        },
        {
            name: 'Professional',
            icon: 'Users',
            price: 'R$ 297',
            period: '/mês',
            description: 'Ideal para equipes em crescimento',
            features: [
                'Até 15 usuários',
                'CRM + ERP completo',
                'Automações avançadas',
                '10.000 contatos',
                'Suporte prioritário',
                'Todas as integrações',
                'Relatórios avançados',
                'Armazenamento 50GB',
                'API access',
                'Campos customizados',
                'Email marketing',
                'Dashboards personalizados',
            ],
            cta: 'Começar Teste Grátis',
            popular: true,
            active: true,
            order: 2,
        },
        {
            name: 'Enterprise',
            icon: 'Building2',
            price: 'Customizado',
            period: '',
            description: 'Solução completa para grandes operações',
            features: [
                'Usuários ilimitados',
                'Tudo do Professional',
                'Automações ilimitadas',
                'Contatos ilimitados',
                'Gerente de sucesso dedicado',
                'Suporte 24/7',
                'Onboarding personalizado',
                'Armazenamento ilimitado',
                'SLA garantido',
                'Treinamentos exclusivos',
                'White label',
                'Infraestrutura dedicada',
            ],
            cta: 'Falar com Especialista',
            popular: false,
            active: true,
            order: 3,
        },
    ];

    for (const plan of plans) {
        await prisma.pricingPlan.create({
            data: plan,
        });
    }

    console.log('Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
