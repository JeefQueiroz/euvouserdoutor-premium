# Recuperação de funcionalidades — Premium V3

- Branch de integração: `restore/legacy-features-and-content`.
- Fonte histórica (snapshot fixado): `JeefQueiroz/Euvouserdoutor@4bccdd21b2ee101091957100ced139e69d7d7c83`.
- Restaurar o acervo de notícias, matérias, mentoria e flashcards como páginas React pré-renderizadas, sem substituir a home Premium.
- Mídias otimizadas (<1 MB) foram copiadas ao próprio repositório Premium, via acesso autorizado ao repositório original privado. A build **não** faz solicitações ao repositório privado. Não usar o branch principal em tempo real.
- A home Premium continua estática, com JS próprio mínimo; dependências React são carregadas somente nas URLs legadas.
- Em homologação, as URLs legadas recebem `noindex,nofollow`; não fazer cutover de domínio ou liberar indexação sem validação.
- Seis imagens antigas acima de 1 MB (incluindo algumas com equivalente WebP já copiado) não foram copiadas; revisar referências residuais antes do merge. O pacote original de mídia ainda inclui algumas imagens grandes. Uma segunda etapa deve otimizar seus formatos e reduzir peso das páginas legadas.
- Integração não presume que o conteúdo antigo teve revisão clínica atual; preservar crédito, fontes e datas originais.

## Comandos

`npm install && npm run check` — build completo, downloads de mídias e testes.
`SKIP_LEGACY=true npm run check` — diagnóstico offline do shell Premium; **não** prova a paridade do portal completo.

## Validação pós-PR

Conferir URLs `/noticias`, `/materiais`, `/mentoria`, `/flashcards` e pelo menos três URLs históricas de notícias. Verificar no desktop/mobile, menus, carregamento do JS e links. Validar indexação em preview e status de deploy antes do merge.
