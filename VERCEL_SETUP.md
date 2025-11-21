# Configuração do Vercel para FastTeam

## Variáveis de Ambiente

Configure as seguintes variáveis de ambiente no painel do Vercel:

### DATABASE_URL
String de conexão do PostgreSQL. Você pode usar:
- **Vercel Postgres** (recomendado)
- **Neon** (https://neon.tech)
- **Supabase** (https://supabase.com)
- Qualquer outro PostgreSQL

Exemplo:
```
DATABASE_URL="postgresql://usuario:senha@host:5432/database?schema=public"
```

### NEXT_PUBLIC_BASE_URL (opcional)
URL base da aplicação. Deixe vazio para usar o padrão.

```
NEXT_PUBLIC_BASE_URL="https://seu-dominio.vercel.app"
```

## Passos para Deploy

1. **Conecte seu repositório** ao Vercel

2. **Configure as variáveis de ambiente** no painel do Vercel:
   - Settings → Environment Variables
   - Adicione `DATABASE_URL` com sua string de conexão PostgreSQL

3. **Deploy automático** - O Vercel fará o build automaticamente

4. **Executar migrations** (primeira vez):
   ```bash
   # Localmente, com DATABASE_URL apontando para produção
   npx prisma migrate deploy
   npx prisma db seed
   ```

   Ou use o Vercel CLI:
   ```bash
   vercel env pull .env.production
   npx prisma migrate deploy
   npx prisma db seed
   ```

## Troubleshooting

### Erro: "Prisma Client not generated"
✅ **Resolvido** - Adicionamos `postinstall` script que gera automaticamente

### Erro: "Can't reach database server"
- Verifique se `DATABASE_URL` está configurada corretamente
- Certifique-se que o banco permite conexões externas
- Para Vercel Postgres, use a connection string fornecida

### Migrations não aplicadas
Execute manualmente:
```bash
npx prisma migrate deploy
```

## Recomendações

- Use **Vercel Postgres** para integração fácil
- Configure **Preview Deployments** com banco de desenvolvimento separado
- Use **Production** database apenas para branch main
