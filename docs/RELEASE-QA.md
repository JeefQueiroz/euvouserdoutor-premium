# Auditoria pré-lançamento

- CI: testes de geração, paridade, navegação e armazenamento local indisponível.
- Lighthouse 13.6.0 em Chromium/Chrome de CI, mobile simulado, Home, notícias, flashcards. Relatórios JSON e resumo em artefatos. LCP e TBT em milissegundos, CLS sem unidade. Pontuações iniciais servem de baseline; SEO de preview sofre penalização esperada por noindex. Não interpretar resultado local como INP ou Core Web Vitals de campo.
- npm audit registra relatório de dependências incluindo ferramentas de desenvolvimento; revisão manual de severidade e alcance ainda obrigatória. Sem atualização automática de dependências.
- Cabeçalhos de segurança: impedir frames de terceiros e objetos ativos, limitar base URI à mesma origem. CSP parcial, não uma política completa de scripts; verificar cabeçalhos HTTP no preview Vercel, que não são aplicados pelo servidor Python de teste.
- Acessibilidade: foco retornado ao menu após Escape; consentimento e estudo funcionam em memória se localStorage estiver bloqueado. Revisão manual de contraste, leitores de tela e Safari/iOS continua pendente.
- Não publicar, mesclar main, ativar indexação ou transferir domínio com pendências de revisão editorial, dependências, direitos de mídia e métricas. Confirmar plano de rollback e projeto Vercel existente.

## Baseline e correções
Run 46069783285: Home 90/95, Notícias 75/96, Flashcards 85/98 (performance/acessibilidade); LCP 1599/6380/4275 ms, CLS zero nas três. npm audit: 1 moderada e 1 alta (Vite). Atualização direcionada de Vite 5 para 6.4.6 e plugin React 4.7.0; verificar novo audit e compatibilidade do build, sem presumir correção total. Notícias e flashcards agora hidratam HTML pré-renderizado; consentimento inicial uniforme no servidor/cliente, leitura posterior da preferência; animação inicial do contêiner de flashcards removida. Teste de navegador registra erros recuperáveis de hidratação. Novo relatório registra detalhes diagnósticos das auditorias. A meta de desempenho permanece pendente de medição.

## Resultado medido após otimizações
Run 46079533611: 38/38 testes, npm audit sem vulnerabilidades reportadas, Lighthouse mobile Home 99/95/100, Notícias 96/96/96, Flashcards 100/98/96 (performance/acessibilidade/boas práticas). LCP 1501/2253/1502 ms, CLS 0/0/0,00103. SEO 69 em preview não indexável. Ajustes adicionais: charset no início do head, nomes acessíveis do logo alinhados à legenda visível, links de artigos sem sobrescrever texto, hierarquia de títulos e contraste de botão/filtro e marcadores. A eficácia desses ajustes depende da nova execução; o relatório agora inclui seletores dos elementos que falham. Leitura visual do logo, revisão editorial e testes em navegadores reais continuam pendentes.

## Controle editorial e publicação
Inventário gerado em cada build e armazenado como artefato de CI, com gate de indexação por aprovação vinculada ao conteúdo. Não há aprovações presumidas. Ver `docs/EDITORIAL-REVIEW.md`. O antigo deploy-mac.sh não é mais um caminho de publicação; PRs empilhados e aprovação explícita são obrigatórios no fluxo documentado.

## Validação editorial e ampliação de cobertura
Run 46080080664: 43/43 testes, inventário de 80 rotas (0 aprovadas, 80 pendentes), npm audit zero vulnerabilidades reportadas. Lighthouse mobile Home 91/95, Notícias 96/100, Flashcards 100/100 (performance/acessibilidade). Os três problemas residuais da Home foram atribuídos às cores de texto #66738a e #5c70ad em fundos claros. Ajuste conservador para #5e6b82 e #52649e, com teste de contraste mínimo 4,5:1. Lighthouse ampliado para questões, laboratório e vídeos, com metas explicitadas por rota. O resultado das novas rotas e correções depende da execução do CI; métricas não equivalem a Core Web Vitals de campo.
