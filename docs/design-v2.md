# Design v2 — assets compartilhados

Assets estáticos consumidos pelas telas P1–P5 ficam em `static/assets/v2/`:

- `tokens.css`: tokens, tipografia e cores; carrega Oswald e DM Sans de `fonts/`.
- `base.css`: estilos estruturais/componentes base.
- `fonts/`: Oswald e DM Sans WOFF2 (latin/latin-ext) e licenças OFL.
- `js/contato.js`: prepara links e QR do WhatsApp; `js/qrcode-generator.js` é a implementação do QR (MIT).
- `js/vendor/`: GSAP e ScrollTrigger, com versão/licença em `VENDOR.md`.
- `mapa/`: `mapa-b.js`, `mapa-b.css` e SVG OSM com pins, ponto azul e rota de 846 m.

## Consumo

Dentro de `<head>`, carregar tokens antes dos estilos base/componentes. Preload apenas das duas fontes acima da dobra:

```html
<link rel="preload" href="/assets/v2/fonts/oswald-latin.woff2?v=20261001" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/v2/fonts/dm-sans-latin.woff2?v=20261001" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/v2/tokens.css?v=20261001">
<link rel="stylesheet" href="/assets/v2/base.css?v=20261001">
<link rel="stylesheet" href="/assets/v2/mapa/mapa-b.css?v=20261001">
```

Carregar scripts como módulos deferidos (módulos já são deferidos): QR generator antes do contato. GSAP/ScrollTrigger são opcionais e só entram nas telas que usam movimento; carregar GSAP antes de ScrollTrigger.

```html
<script type="module" src="/assets/v2/js/contato.js?v=20261001"></script>
<script type="module" src="/assets/v2/mapa/mapa-b.js?v=20261001"></script>
```

`mapa-b.js` usa por padrão `/assets/v2/mapa/map.svg?v=20261001`; `montarMapaB(elemento)` monta mapa, e a página pode passar `svgUrl` para substituição controlada.

## WhatsApp

`js/contato.js` contém única constante `WHATSAPP_NUMERO`, placeholder `55XXXXXXXXXXX`. Nenhum outro arquivo v2 deve definir o número. Tech-lead substitui antes do deploy, após confirmação do número.

## Cache

Nginx serve CSS, SVG e WOFF2 com `Cache-Control: public, immutable`. Toda URL referenciada inclui `?v=20261001`, incluindo fontes, módulos e SVG. Em qualquer alteração futura de asset, atualizar versão em todas as referências/cache-busting URLs e neste documento antes de publicar.

## Orçamento D2

Meta por página mobile: Lighthouse Performance ≥ 90, LCP ≤ 2,5 s, CLS ≤ 0,1, TBT ≤ 200 ms; JavaScript total ≤ 90 KB gzip; no máximo duas famílias de fontes WOFF2, `font-display: swap`; imagens AVIF/WebP com dimensões; LCP em texto ou imagem otimizada, nunca canvas/vídeo. GSAP/ScrollTrigger são incluídos apenas quando efeito exigir; medir o total na página consumidora.
