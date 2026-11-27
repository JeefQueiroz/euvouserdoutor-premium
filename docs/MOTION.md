# Sistema de movimento EVD

## Base e escopo
Referência: MotionMaxxing, commit 8c8ec0f2a6f6c9a0da15cd24f7b1298ab298368c, https://github.com/Tejashmakwana/motionmaxxing . A implementação web é original, usa CSS e adapta o princípio de desacelerar entradas e acelerar saídas; não copia o runtime ou bibliotecas vendorizadas.

O portal editorial deve continuar legível sem animação, JavaScript adicional ou WebGL. Movimento comunica estado, não substitui conteúdo. Uma animação decorativa breve por hero; sem scroll hijacking, contadores inventados ou reprodução automática de mídia.

## Tokens
A fonte normativa é assets/motion.css. 140ms: feedback; 220ms: controles e cards; 280ms: menu; 550ms: hero decorativo. Curvas web são aproximações próprias, não ajustes medidos do corpus original. Saídas aceleradas e transição equilibrada ficam disponíveis para etapas futuras, sem impor animações onde não são necessárias.

## Integração
build.mjs aplica a folha comum ao HTML Premium; scripts/merge-legacy.mjs aplica a mesma folha às rotas recuperadas, preservando portal-bridge.css. Nenhuma dependência ou script de navegador novo. O legado conserva suas interações atuais; a unificação visual completa será incremental.

## Aceitação
npm run check; smoke Chromium desktop/mobile, cenário prefers-reduced-motion, nenhuma rota perdida; depois medir Lighthouse e Web Vitals antes da promoção. Verificar Safari/iOS e leitores de tela em revisão manual. Não alterar domínio ou habilitar indexação.

## Próximas etapas
1. Consolidar PR de recuperação.
2. Auditar identidade e unificar header/footer e tokens de cor entre as duas arquiteturas.
3. Revisar hero científico com fallback estático e imagens editoriais próprias.
4. Flashcards e diagramas acessíveis; produção audiovisual offline, isolada do build.
