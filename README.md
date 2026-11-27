# EuvouserDoutor Premium V3

Novo portal editorial estático, responsivo e orientado à pesquisa orgânica. Projeto independente do site existente em `www.euvouserdoutor.com`.

## Principais decisões

- Azul-escuro como identidade principal; azul e violeta como acentos, sem bibliotecas pesadas de efeitos.
- Páginas Premium independentes e acervo React recuperado: Home, áreas, biblioteca, notícias, materiais, flashcards, questões, laboratório e vídeos.
- Metadados únicos, canonical absoluto, Open Graph, Twitter cards, Organization/WebSite, Article e BreadcrumbList em JSON-LD conforme o conteúdo.
- Sitemap XML e RSS automatizados; `robots.txt` preparado para Google/Bing/OAI-SearchBot/PerplexityBot.
- Sem analytics, cookies de rastreamento, fontes externas, autenticação ou scripts de terceiros por padrão.
- Site hospedado em **projeto Vercel separado**. Nada altera automaticamente o domínio original.
- Artigo sobre Barrett é **divulgação educativa inicial** e não recebe selo falso de revisão clínica.

## Testar localmente

Requer Node.js 20+.

```bash
npm run check
```

São executados a geração estática e os testes de: conteúdo rastreável, H1, titles/descriptions/canonicals únicos, JSON-LD, links internos, preview noindex, sitemap/RSS e tamanho dos assets.

Para abrir no navegador, execute `python3 scripts/dev_server.py` e acesse `http://127.0.0.1:8765`. O servidor de desenvolvimento resolve URLs limpas localmente.

## Homologação e publicação

Repositório existente: `JeefQueiroz/euvouserdoutor-premium`. Projeto Vercel existente: `euvouserdoutor-premium-v3`, equipe `euvouserdoutorrs-projects`. Domínio original: `www.euvouserdoutor.com` (não alterar sem aprovação).

A recuperação e as melhorias estão em PRs empilhados: #1 (`restore/legacy-features-and-content` → main) e #2 (`feat/premium-motion-system` → recuperação). Testar a versão combinada pelo preview do PR #2. O script legado `deploy-mac.sh` foi descontinuado porque copiava apenas parte dos arquivos e fazia push direto à main. Usar PRs e verificações normais; não criar projetos, forçar push, integrar main ou transferir domínio sem autorização explícita.

`npm run check` gera também o inventário editorial em `audit-reports/editorial-review.json`. Consulte `docs/EDITORIAL-REVIEW.md` para aprovação por conteúdo. A indexação pública falha no build se houver revisão pendente ou desatualizada.

## Política de indexação: etapa crítica

O projeto tem dois estados:

### Homologação (padrão)

O modo seguro é padrão: `noindex,nofollow`, robots.txt com `Disallow: /` e domínio canônico de homologação em ambas as arquiteturas. A indexação exige simultaneamente `VERCEL_ENV=production` (fornecida pela Vercel), `PUBLIC_INDEXING=true` e `SITE_URL=https://www.euvouserdoutor.com`. Previews nunca indexam, mesmo com variáveis copiadas da produção.

### Lançamento público (somente após assumir o domínio canônico)

No projeto Premium V3, **em Production somente**, configurar as variáveis de ambiente:

```text
SITE_URL=https://www.euvouserdoutor.com
PUBLIC_INDEXING=true
```

Então efetuar **deploy de Production** após apontar/validar o domínio no projeto novo. O build passará a criar canonicals, sitemap e robôs da versão indexável. Não publicar os dois sites com o mesmo conteúdo em domínios distintos de forma indexável.

Validar antes de liberar: sitemap, inspeção de URLs no Google Search Console, status HTTP de cada página, JSON-LD, funcionamento mobile, política editorial, revisão clínica e configuração do domínio. A indexação efetiva é decisão dos mecanismos de busca, não promessa do deploy.

### Search Console e mecanismos de IA

1. Validar o domínio no Google Search Console, enviar `https://www.euvouserdoutor.com/sitemap.xml` e consultar o relatório de páginas.
2. Importar a propriedade no Bing Webmaster Tools e habilitar IndexNow quando houver conteúdo novo e uma chave válida.
3. Permitir OAI-SearchBot e PerplexityBot no `robots.txt`, confirmar que regras WAF/CDN não bloqueiam solicitações válidas.
4. Medir resultados por impressões, cliques, consultas sem marca, indexação e visitas qualificadas; repetir após 30/60/90 dias.
5. Para recursos de pesquisa com IA (ChatGPT, AI Mode, Gemini, Perplexity), oferecer informação original, verificável, acessível e bem citada; metadados não garantem citação.

## Arquivos importantes

```text
src/content.mjs          Conteúdos e referências
build.mjs                Geração estática, metadados e SEO
assets/site.css          Estilos responsivos e acessibilidade
assets/site.js           Menu e busca sem framework
assets/og-cover.png      Imagem social (1200 x 630)
vercel.json              Deploy estático, cleanUrls, headers
scripts/dev_server.py    Servidor local de desenvolvimento
scripts/visual_check.py  QA visual (requer Playwright e Chromium)
tests/site.test.mjs      Testes automáticos
ESTRATEGIA-SEO.md        Auditoria e execução de 90 dias
```

## Limitações

- O acervo foi recuperado a partir de um snapshot Git. Revisão científica, fontes e direitos de mídia não são garantidos pela recuperação técnica.
- O serviço conectado nesta conversa não tinha permissão de criar/inspecionar o projeto na conta Euvouserdoutor, apesar do projeto ter sido criado corretamente no CLI do Mac.
- O repositório `JeefQueiroz/euvouserdoutor-premium` foi confirmado na API GitHub; possui a licença inicial. O script faz push preservando o histórico. Seu GitHub está atualmente configurado como público; avalie a visibilidade no próprio GitHub conforme sua preferência.
- Métricas de Core Web Vitals e posições nos buscadores só podem ser afirmadas após deploy e coleta real.
