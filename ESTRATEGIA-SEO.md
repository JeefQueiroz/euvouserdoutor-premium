# EuvouserDoutor — pesquisa de SEO, IA e arquitetura editorial (novembro de 2026)

## Diagnóstico comparativo

**Original (`www.euvouserdoutor.com`):** o portal se apresenta como editorial de medicina, ciência, educação e tecnologia, com notícias em destaque e sessões de materiais/mentoria. Sua apresentação visual é rica, mas isso exige medir peso de JavaScript, imagens, conteúdo renderizado e experiência em dispositivos móveis. Os materiais do repositório `JeefQueiroz/Euvouserdoutor` mostram Vite/React com build SSR/prerender; portanto não é correto declarar que não exista SEO ou pré-renderização.

**Premium V3 anterior:** o preview `euvouserdoutor-premium-v3-preview.vercel.app` foi inspecionado com `noindex,nofollow`. Isso é apropriado para homologação, mas impede busca orgânica se mantido no lançamento público.

**Projeto novo:** HTML estático independente por rota, metadados e JSON-LD específicos, sitemap e RSS gerados, e bloqueio de indexação enquanto o domínio canônico permanecer no projeto antigo. Os 15 documentos HTML são produzidos na build.

## Benchmarks por função, sem copiar conteúdos ou visual

| Portal | O que faz bem | Aprendizado para EuvouserDoutor |
|---|---|---|
| Kenhub | Conteúdos de anatomia por tópico e recursos para aprendizagem | Taxonomia e bibliotecas temáticas em vez de páginas dispersas |
| Sanar | Conteúdos de formação e prática médica | Relacionar artigos de ciência às necessidades de estudantes |
| Tua Saúde | Páginas de dúvidas de saúde em linguagem acessível | Organizar perguntas reais, mas com limites e revisão profissional em temas clínicos |
| Medway | Trilhas de ensino e conteúdos ligados à formação médica | Criar navegação por etapa da jornada, evitando direcionar vestibulando a conteúdo avançado |

**Diferencial proposto:** o ponto de vista brasileiro de um estudante de Medicina da UFMG, com respeito às dificuldades de acesso, materiais gratuitos, ciência explicada com rigor e educação médica acessível. Não inventar diplomas, revisores, participação institucional ou resultados de aprovação.

## SEO e buscas por IA — o que é fundamentado

### Google / Gemini / AI Overviews

O Google recomenda conteúdo útil e original, autoria verificável, experiência confiável e rastreabilidade. Para resultados de IA do Google, não há esquema secreto ou SEO separado; a página deve ser indexada e elegível a aparecer com um snippet. Dados estruturados ajudam a entender a página mas não garantem resultados ricos. Em saúde (*YMYL*) a confiança é especialmente importante.

### ChatGPT Search

A OpenAI distingue `OAI-SearchBot` (busca) de `GPTBot` (treinamento). O rastreamento para a busca pode ser permitido sem optar pelo treinamento. A equipe de infraestrutura deve conferir eventuais bloqueios de segurança, WAF ou IPs publicados oficialmente.

### Perplexity

Permitir `PerplexityBot` e fornecer URLs HTML públicas e relevantes. A qualidade das citações depende de fontes acessíveis e conteúdo original; não há como garantir inclusão em uma resposta específica.

### Bing / Copilot

Adicionar a propriedade ao Bing Webmaster Tools. IndexNow pode sinalizar alterações de URLs a buscadores participantes, mas não garante indexação. Configurá-lo apenas com chave legítima no domínio.

### Evitar práticas de baixo retorno

- Repetição artificial de palavras-chave ou páginas curtas quase iguais.
- Datas alteradas sem atualização real do texto.
- FAQPage markup genérico em páginas sem qualificação relevante: a apresentação de FAQ rich results é restrita pelo Google.
- `llms.txt` como estratégia central de visibilidade: não substitui indexação nem evidências.
- Duplicar o mesmo conteúdo em domínio original e URL da Vercel sem política canônica coerente.

## Conteúdo: quatro hubs duradouros

- `/saude`: guias educativos e conteúdos clínicos com fontes e política de revisão.
- `/medicina`: educação médica, imagem, clínica e métodos de aprendizagem.
- `/vestibular`: ENEM, ingresso em Medicina, planejamento, questões e permanência estudantil.
- `/ciencia`: interpretação de pesquisas, tecnologia médica, neurociência e IA.

Um novo artigo deve responder uma pergunta, explicar contexto, citar fontes e registrar limitações. Publicar qualidade antes de quantidade. Após revisão clínica formal, incorporar dados do revisor com autorização real.

## Critérios objetivos de qualidade antes da divulgação

1. Home e artigos carregam HTML completo sem depender de JS para texto principal.
2. `title`, descrição, canonical e H1 únicos; links internos válidos; respostas 404 verdadeiras.
3. `robots.txt`, sitemap, RSS, schema.org e imagem social com URLs oficiais do domínio canônico.
4. Fontes institucionais ou científicas acessíveis e ausência de afirmações enganosas.
5. LCP <= 2,5 s, INP <= 200 ms e CLS <= 0,1 no percentil 75 de dados reais, mobile e desktop.
6. Políticas de privacidade, editoria e avisos de saúde corretos para as funcionalidades efetivamente ativadas.
7. Teste do domínio, TLS, redirects, Search Console e ausência de erro soft-404.

## Plano de 90 dias

**Etapa 1 — publicação técnica (dias 1-10):** vincular repositório novo, validar Preview, confirmar host canônico, mapear domínio sem interromper original até rollback disponível, ativar indexação somente na versão correta, enviar sitemap e verificar 5–10 URLs via Search Console e Bing.

**Etapa 2 — editoria e relevância (dias 11-30):** revisar quatro artigos iniciais, publicar temas originais em áreas prioritárias, contextualizar mudanças em saúde e não republicar automaticamente notícias sem validação de fontes e direitos autorais.

**Etapa 3 — confiança e distribuição (dias 31-60):** construir páginas autorais e critérios de revisão, monitorar páginas descobertas/indexadas e integrar perfis oficiais apontando para o domínio canônico; parceria institucional apenas quando houver autorização.

**Etapa 4 — otimização baseada em dados (dias 61-90):** comparar impressões, cliques, CTR, consultas orgânicas sem marca, indicadores Web Vitals e comportamento nas trilhas. Revisar onde o conteúdo não responde às dúvidas reais.

## Fontes primárias

- Google, conteúdo útil: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google, IA na pesquisa: https://developers.google.com/search/docs/appearance/ai-features
- Google, dados de artigo: https://developers.google.com/search/docs/appearance/structured-data/article
- Google, dados de organização: https://developers.google.com/search/docs/appearance/structured-data/organization
- Google, canonical: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- OpenAI, crawlers: https://developers.openai.com/api/docs/bots
- Bing, IndexNow: https://www.bing.com/webmasters/help/?topicid=62f2860b
- Google, métricas Web Vitals: https://web.dev/articles/vitals
- Kenhub, biblioteca: https://www.kenhub.com/pt/articles
- NIDDK, Barrett: https://www.niddk.nih.gov/health-information/digestive-diseases/barretts-esophagus
- AGA, Barrett 2025: https://gastro.org/clinical-guidance/surveillance-of-barretts-esophagus/
- PubMed, estratégias de estudo: https://pubmed.ncbi.nlm.nih.gov/37615780/
