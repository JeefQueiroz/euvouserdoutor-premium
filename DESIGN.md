# EuvouserDoutor — design e produto

## Direção editorial
Portal híbrido: notícia, divulgação científica e educação para quem estuda Medicina ou se prepara para ingressar. A página inicial é a porta de entrada leve; artigos, notícias e ferramentas se conectam por navegação persistente. O objetivo não é substituir o acervo por uma landing page.

## Identidade
O azul-profundo (#0a1b33) carrega credibilidade e mantém continuidade com o portal original. Azul de ação (#386ef2), violeta de ênfase (#8d6ef6), teal informativo (#20bac0), branco (#ffffff), fundo claro (#f5f7fb), texto (#17253b) e texto secundário (#66738a). Vermelho apenas em avisos reais. **Fonte normativa de tokens:** o bloco `:root` de `assets/site.css`. Este documento espelha o CSS, que é o único ponto de edição das variáveis de cor.

Tipografia: sistema sem download externo; título 42–86px com espaçamento compacto, corpo 16–18px e texto útil legível. Layout central 1180px, margens mobile 16–18px, cards de 15–20px de raio, sombra só quando cria separação útil.

## Marca e assinatura
Logotipo original otimizado (14 KB WebP) dentro de placa azul, em vez do símbolo + genérico. Elemento editorial característico: seção “Explore o portal completo”, que reúne de maneira legível notícias, materiais, flashcards e mentoria. Evitar números decorativos e menus excessivamente amplos.

## UX e limites
- Navegação: até 6 destinos no desktop + busca, menu expansível no mobile, estado da página atual e foco visível.
- Busca global: consulta índice estático no mesmo domínio (sem backend ou rastreamento); filtra por tipo; protege contra injeção usando somente `textContent`.
- Conteúdo YMYL: fontes, autoria, datas e aviso informativo; nenhuma alegação de revisão médica sem prova.
- Acervo React legado permanece nas rotas antigas, com faixa discreta para retornar ao portal Premium.
- Performance: a home não importa React, fontes remotas ou bibliotecas de ícones. A busca carrega script extra apenas na página de pesquisa.
- Acessibilidade: pt-BR, links semânticos, alvos de toque >= 44px, controle por teclado e `prefers-reduced-motion`.
- Prévia: noindex até revisão das rotas e do domínio canônico. Não há corte automático do domínio público.

## Movimento
A camada compartilhada `assets/motion.css` define durações e curvas sem dependências adicionais, carregada também no legado. A animação destaca estado e hierarquia; conteúdo principal é visível desde o primeiro frame. Respeitar movimento reduzido e dispositivos sem hover. Diretrizes e critérios: `docs/MOTION.md`.

## Navegação unificada
`src/navigation.mjs` define os destinos públicos usados pelo Premium e pelo React. O cabeçalho legado usa links HTML reais e a busca global `/busca` em vez de um índice local de seis sugestões. `assets/legacy-shell.css` aproxima cabeçalho e rodapé da identidade Premium sem alterar o tema dos artigos. A faixa de retorno continua nesta etapa para compatibilidade e poderá ser removida após validação. Links institucionais e preferências de cookies permanecem disponíveis.

## Assinatura científica da Home
O hero usa uma ilustração vetorial original da dupla hélice do DNA em azul, violeta e teal, apresentada explicitamente como esquema, não como modelo molecular de precisão. Uma única composição focal; sem etiquetas decorativas, contadores ou fundos animados contínuos. Imagem estática com dimensões intrínsecas e movimento breve opcional. Não modificar logotipo, navegação ou textos médicos nesta fase.

## Apresentação editorial
Os quatro artigos Premium usam capas SVG próprias, relacionadas ao tema e sem dependências remotas. A ilustração no artigo é explicitamente esquemática, não é evidência clínica. O acervo legado usa metadados canônicos para links, deduplica por destino, inclui todas as rotas de notícia e deriva os filtros das categorias disponíveis. Não usar imagens de terceiros como se fossem evidência; a revisão de licenças e de correspondência das fotos históricas continua pendente.
