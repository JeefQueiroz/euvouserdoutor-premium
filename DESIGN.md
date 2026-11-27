# EuvouserDoutor — design e produto

## Direção editorial
Portal híbrido: notícia, divulgação científica e educação para quem estuda Medicina ou se prepara para ingressar. A página inicial é a porta de entrada leve; artigos, notícias e ferramentas se conectam por navegação persistente. O objetivo não é substituir o acervo por uma landing page.

## Identidade
O azul-profundo (#0a1b33) carrega credibilidade e mantém continuidade com o portal original. Azul de ação (#386ef2), violeta de ênfase (#8d6ef6), teal informativo (#20bac0), branco (#ffffff), fundo claro (#f5f7fb), texto (#17253b) e texto secundário (#66738a). Vermelho apenas em avisos reais. **Fonte normativa de tokens:** o bloco `:root` de `assets/site.css`. Este documento espelha o CSS, que é o único ponto de edição das variáveis de cor.

Tipografia: sistema sem download externo; título 42–86px com espaçamento compacto, corpo 16–18px e texto útil legível. Layout central 1180px, margens mobile 16–18px, cards de 15–20px de raio, sombra só quando cria separação útil.

## Marca e assinatura
Logotipo original otimizado (14 KB WebP) dentro de placa azul, em vez do símbolo + genérico. Elemento editorial característico: seção “Explore o portal completo”, que reúne de maneira legível notícias, materiais, flashcards e mentoria. Evitar números decorativos e menus excessivamente amplos.

## UX e limites
- Navegação: Home, seis destinos editoriais e busca no desktop, menu expansível no mobile, estado da página atual e foco visível.
- Busca global: consulta índice estático no mesmo domínio (sem backend ou rastreamento); filtra por tipo; protege contra injeção usando somente `textContent`.
- Conteúdo YMYL: fontes, autoria, datas e aviso informativo; nenhuma alegação de revisão médica sem prova.
- Acervo React legado permanece nas rotas antigas, com Home no cabeçalho compartilhado.
- Performance: a home não importa React, fontes remotas ou bibliotecas de ícones. A busca carrega script extra apenas na página de pesquisa.
- Acessibilidade: pt-BR, links semânticos, alvos de toque >= 44px, controle por teclado e `prefers-reduced-motion`.
- Prévia: noindex até revisão das rotas e do domínio canônico. Não há corte automático do domínio público.

## Movimento
A camada compartilhada `assets/motion.css` define durações e curvas sem dependências adicionais, carregada também no legado. A animação destaca estado e hierarquia; conteúdo principal é visível desde o primeiro frame. Respeitar movimento reduzido e dispositivos sem hover. Diretrizes e critérios: `docs/MOTION.md`.

## Navegação unificada
`src/navigation.mjs` define os destinos públicos usados pelo Premium e pelo React. O cabeçalho legado usa links HTML reais e a busca global `/busca` em vez de um índice local de seis sugestões. `assets/legacy-shell.css` aproxima cabeçalho e rodapé da identidade Premium sem alterar o tema dos artigos. A faixa duplicada foi removida a pedido do responsável pelo portal. Home é o primeiro link, antes de Notícias; menu recolhível até 900 px. Links institucionais e preferências de cookies permanecem disponíveis.

## Assinatura científica da Home
O hero usa uma ilustração vetorial original da dupla hélice do DNA em azul, violeta e teal, apresentada explicitamente como esquema, não como modelo molecular de precisão. Uma única composição focal; sem etiquetas decorativas, contadores ou fundos animados contínuos. Imagem estática com dimensões intrínsecas e movimento breve opcional. Não modificar logotipo, navegação ou textos médicos nesta fase.

## Apresentação editorial
Os quatro artigos Premium usam capas SVG próprias, relacionadas ao tema e sem dependências remotas. A ilustração no artigo é explicitamente esquemática, não é evidência clínica. O acervo legado usa metadados canônicos para links, deduplica por destino, inclui todas as rotas de notícia e deriva os filtros das categorias disponíveis. Não usar imagens de terceiros como se fossem evidência; a revisão de licenças e de correspondência das fotos históricas continua pendente.

## Flashcards interativos
Ferramenta pública com 12 cartas introdutórias de métodos de estudo, fisiologia e epidemiologia. Sessões por tema, revelação explícita, avaliação de lembrança, intervalos simples e progresso local versionado. Sem login, dados de saúde, rastreamento ou backend. Conteúdo didático introdutório; ampliar o acervo com revisão editorial. O progresso não constitui medição de domínio. A política de privacidade deverá documentar o armazenamento local antes da publicação definitiva.

## Questões comentadas
Rota `/questoes` integrada ao acervo, busca e biblioteca. Nove questões originais de três temas; feedback por alternativa, resultado da sessão e revisão exclusiva dos erros. Não há cronômetro, conta, envio de respostas ou histórico permanente. A política de privacidade descreve o armazenamento local dos flashcards e o caráter temporário das questões. Conteúdo inicial para revisão didática, sujeito a revisão editorial antes de indexação pública.

## Laboratório científico
Rota `/laboratorio`: dois mecanismos introdutórios (circulação e trocas alveolares), com esquemas SVG próprios e explicação textual equivalente. Reutiliza o layout, selects nativos e controles de estudo. Azul e vermelho indicam oxigenação ou direção de difusão conforme a legenda, nunca uma representação de cor real do sangue. Realce de uma etapa por ação, animação única de fluxo e preferência de movimento reduzido respeitada. Sem autoplay, WebGL, dados pessoais ou pretensão de precisão anatômica; revisão didática antes da indexação.

## Biblioteca audiovisual
`/videos` usa player nativo, capa vertical, legendas pt-BR e transcrição. Sem autoplay, dependências ou vídeo na Home; estado vazio explícito e não indexado. Publicação somente de arquivos reais ligados a metadados de aprovação e hashes. Contrato local: `docs/VIDEO.md`. O motor de renderização externo permanece independente.

## Desempenho do legado
Corpos das notícias são importados sob demanda no navegador; o SSR conserva o componente síncrono para gerar HTML completo. Nas páginas de estudo e listagem, o módulo de artigos não integra o grafo estático. Falha no download mantém o texto pré-renderizado e oferece recarregamento. A navegação para notícias individuais usa carregamento de página real. O CI verifica o manifesto Vite, orçamento de 350 kB do chunk de entrada e requisições em Chromium; não equivale a métricas de Core Web Vitals em campo. Todas as rotas legadas oferecem link de salto ao conteúdo.
