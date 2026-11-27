# Integração audiovisual local

## Escopo e contrato
O portal não executa Remotion, Kokoro, FFmpeg ou MotionMaxxing no build. A máquina de produção rende fora do site. Nenhum motor externo foi modificado nesta etapa. Direção: composição focal, movimento significativo, narração e legendas em português, sem cabeçalho permanente ou contador decorativo. Entrega MP4 H.264/yuv420p + AAC, 1080×1920, 30 fps, até 180 s e 40 MiB; poster WebP até 500 KiB; WebVTT até 128 KiB. O limite é uma política inicial de hospedagem, não uma garantia de plano da Vercel.

## Fluxo de aprovação
1. Produzir e revisar conteúdo, fontes científicas, direitos de imagens, voz e trilha. Revisar coerência entre narração, cenas, legendas e transcrição. Conferir cortes, ausência de telas pretas e inteligibilidade. Não registrar revisão não realizada.
2. Exportar arquivos no fluxo local existente. Preparar JSON com slug, title, description, transcript, references (lista de referências textuais), reviewedBy, reviewedAt (AAAA-MM-DD), rights, source (origem do render) e status approved somente após revisão real.
3. No checkout da branch de homologação, com Node >=20 e ffprobe instalado: `npm run video:import -- metadados.json video.mp4 capa.webp legenda.vtt`. O importador verifica resolução, fps, codecs e duração pelo ffprobe; verifica presença, tamanho, hashes e cabeçalho WebVTT. Não sobrescreve episódios nem publica remotamente. A validação técnica não comprova validade clínica, direitos, sincronismo ou qualidade visual.
4. Rodar `npm run check`, conferir diff e reprodução no preview; revisar legendas, transcrição, acessibilidade e direitos. O catálogo é `src/videos.json`. Arquivos ficam em `assets/videos/`; os hashes vinculam a aprovação aos arquivos exatos. Não usar arquivos fictícios no catálogo. Não publicar material sem autorização.
5. Produção depende da aprovação e do fluxo GitHub/Vercel já existente. O site não inicia render, não chama serviços pagos nem carrega vídeos na Home.

## Estado atual
Catálogo vazio por decisão: não há render aprovado disponível nesta sessão. A biblioteca exibe estado de preparação e recomenda o laboratório; fica fora do sitemap até receber um episódio. O adaptador para o motor local depende de inspeção desse motor quando a máquina estiver acessível. A revisão editorial é humana; o importador não a substitui.
