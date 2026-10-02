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

`js/contato.js` contém a única constante `WHATSAPP_NUMERO`, hoje com o número provisório da NiceByte (decisão do usuário, 2026-10-01). Nenhum outro arquivo v2 define o número: HTML e outros scripts leem do módulo, e links sem JS caem em `/seo-local/#contato`. Quando o chip definitivo chegar, a troca é só nesse arquivo, com o `?v=` atualizado em todas as páginas.

Sem e-mail no lançamento: nada de `mailto:` ou `contato@` em página, JSON-LD ou rodapé até o usuário liberar o canal.

## Cache

Nginx serve CSS, SVG e WOFF2 com `Cache-Control: public, immutable`. Toda URL referenciada leva `?v=`, incluindo fontes, módulos e SVG: `20261001` para os assets compartilhados e `20261001-copy` para o CSS e o JS da /seo-local/ com o copy final. Em qualquer alteração de asset, troque a versão em todas as referências antes de publicar. Versão que nunca foi ao ar pode ser reaproveitada.

## Release e deploy (nicebyte.ia.br)

O que vai ao ar sai da branch `release/seo-local-v2`, na worktree `.worktrees/v2-release`, e nunca do checkout principal. Cada tela aprovada entra por `merge --no-ff` da sua branch, com o QA citado na mensagem.

1. `docker tag luma/portfolio:latest luma/portfolio:rollback-<AAAAMMDD-HHMM>`
2. `docker build -q -t luma/portfolio:<nome>-<AAAAMMDD-HHMM> .`, na worktree da release. O Dockerfile, que é gitignored e foi copiado do checkout principal, roda `pnpm install` e `scripts/prerender.mjs` dentro da imagem. Em seguida, `docker tag <essa imagem> luma/portfolio:latest`.
3. `docker compose -f C:\Users\olive\Documents\Luma-APP\infra\proxy\docker-compose.yml --profile portfolio up -d portfolio`. Só esse serviço.
4. Smoke no ar: 200 em /seo-local/, /seo-local/solicitar/, /privacidade/, /laudos/, /demo/estetica/ e /healthz, mais um texto novo de cada página alterada; regressão do formulário (e-mail opcional e copiar resumo); Lighthouse mobile 3x contra a URL pública.
5. Rollback: `docker tag luma/portfolio:rollback-<...> luma/portfolio:latest` e repetir o passo 3.

O histórico de deploys e rollbacks fica na TASK 291 do LLM-Brain. As evidências ficam em `C:\pessoal\qa\nicebyte\`.

## Orçamento D2

Meta por página mobile: Lighthouse Performance ≥ 90, LCP ≤ 2,5 s, CLS ≤ 0,1, TBT ≤ 200 ms; JavaScript total ≤ 90 KB gzip; no máximo duas famílias de fontes WOFF2, `font-display: swap`; imagens AVIF/WebP com dimensões; LCP em texto ou imagem otimizada, nunca canvas/vídeo. GSAP/ScrollTrigger são incluídos apenas quando efeito exigir; medir o total na página consumidora.
