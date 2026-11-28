# Revisão editorial e bloqueio de indexação

O inventário deriva das páginas geradas, não de uma lista manual. Inclui os artigos Premium, todas as notícias históricas recuperadas e cinco páginas educacionais. Links externos são candidatos à conferência, não evidência de verificação. A biblioteca audiovisual possui seu próprio contrato em VIDEO.md.

## Procedimento

1. Executar `npm run check` na branch candidata. Abrir o artefato `audit-reports/editorial-review.json` no CI. O relatório não é copiado para dist nem publicado como página.
2. Para cada rota, verificar conteúdo e contexto, consultar fontes primárias, conferir datas, autoria, limites dos estudos, alegações clínicas, imagens e licenças. Corrigir alegações não sustentadas e imagens sem direitos claros. Para materiais de estudo, verificar precisão e acessibilidade. A validação automática não substitui a avaliação científica.
3. Apenas depois da revisão real, registrar em `src/editorial-approvals.json` a chave com a rota exata e os campos: status (approved), sha256 (copiado do inventário), reviewedBy (responsável autorizado), reviewedAt (AAAA-MM-DD), sourcesReviewed (true), mediaReviewed (true), note (evidência e observações da revisão). Não registrar aprovação fictícia. O arquivo inicial está vazio intencionalmente.
4. O SHA-256 combina o HTML de main e, nas três ferramentas interativas, os arquivos de dados, lógica e componentes relevantes. Alterações nas respostas e explicações ainda não exibidas invalidam a aprovação. Alterações nessa região, inclusive de layout, invalidam a aprovação anterior. Metadados fora de main não fazem parte desse hash e devem ser revisados separadamente. Mudanças de estilos externos ou arquivos de imagem com o mesmo caminho também exigem reavaliação manual; o hash não é prova de integridade de todas as dependências.
5. Homologação permanece acessível e noindex, mesmo com pendências. O build indexável é bloqueado se alguma rota estiver pendente, desatualizada ou se o legado tiver sido ignorado. O gate valida registros e cobertura; não comprova a qualidade da revisão em si.

## Publicação controlada

- Validar CI do PR #2 completo, revisar visualmente o preview e confirmar conteúdo e direitos.
- Confirmar aprovação explícita antes de integrar o PR #1 e, após a integração, verificar/readequar a base do PR #2 e repetir CI. Não fazer merge automático ou direto em main.
- Preservar deployment anterior e domínio original. Antes de qualquer troca, confirmar URL de rollback, ambiente, indexação, redirecionamentos, cabeçalhos HTTP e rotas reais. Não ativar indexação sem aprovação editorial integral e autorização do responsável.

## Triagem inicial
O inventário inclui título, prioridade heurística e marcadores de alegações clínicas, ausência de links externos na renderização inicial, conteúdo interativo e mídia substituída. Marcadores servem para organizar revisão humana; a ausência de um marcador não significa que a página está correta. Não foram registradas aprovações clínicas.
