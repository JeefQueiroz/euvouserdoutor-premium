# Auditoria pré-lançamento

- CI: testes de geração, paridade, navegação e armazenamento local indisponível.
- Lighthouse 13.6.0 em Chromium/Chrome de CI, mobile simulado, Home, notícias, flashcards. Relatórios JSON e resumo em artefatos. LCP e TBT em milissegundos, CLS sem unidade. Pontuações iniciais servem de baseline; SEO de preview sofre penalização esperada por noindex. Não interpretar resultado local como INP ou Core Web Vitals de campo.
- npm audit registra relatório de dependências incluindo ferramentas de desenvolvimento; revisão manual de severidade e alcance ainda obrigatória. Sem atualização automática de dependências.
- Cabeçalhos de segurança: impedir frames de terceiros e objetos ativos, limitar base URI à mesma origem. CSP parcial, não uma política completa de scripts; verificar cabeçalhos HTTP no preview Vercel, que não são aplicados pelo servidor Python de teste.
- Acessibilidade: foco retornado ao menu após Escape; consentimento e estudo funcionam em memória se localStorage estiver bloqueado. Revisão manual de contraste, leitores de tela e Safari/iOS continua pendente.
- Não publicar, mesclar main, ativar indexação ou transferir domínio com pendências de revisão editorial, dependências, direitos de mídia e métricas. Confirmar plano de rollback e projeto Vercel existente.
