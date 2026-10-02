import argparse
import json
import re
import subprocess
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
FIXTURE = REPO / "scripts/demo/casa-serena.json"
TARGET = REPO / "static/demo/estetica/index.html"


def required_replace(text: str, pattern: str, replacement: str, label: str, *, count: int = 1) -> str:
    updated, matches = re.subn(pattern, replacement, text, count=count, flags=re.S)
    if matches != count:
        raise RuntimeError(f"{label}: esperado {count} ocorrência(s), encontrado {matches}")
    return updated


def main() -> None:
    parser = argparse.ArgumentParser(description="Gera e moldura a demo fictícia Casa Serena.")
    parser.add_argument("--build-lp", required=True, type=Path)
    args = parser.parse_args()
    build_lp = args.build_lp.resolve(strict=True)
    fixture = json.loads(FIXTURE.read_text(encoding="utf-8"))
    if fixture.get("nome") != "Casa Serena" or not fixture.get("descricao") or len(fixture.get("servicos", [])) != 3:
        raise RuntimeError("Fixture Casa Serena inválido ou incompleto")

    generated_dir = REPO / ".qa-local/t_f8b94aed/generated"
    result = subprocess.run([
        "python", str(build_lp), "--nicho", "estetica", "--entrada", str(FIXTURE), "--saida", str(generated_dir)
    ], check=True, capture_output=True, text=True)
    generated_path = Path(result.stdout.strip().splitlines()[-1]).resolve()
    html = generated_path.read_text(encoding="utf-8")
    previous = subprocess.run(["git", "show", "cb6fd9c:static/demo/estetica/index.html"], cwd=REPO, check=True, capture_output=True, text=True).stdout
    old_head_match = re.search(r"<head>(.*?)</head>", previous, re.S | re.I)
    new_head_match = re.search(r"<head>(.*?)</head>", html, re.S | re.I)
    if old_head_match is None or new_head_match is None:
        raise RuntimeError("Head antigo ou gerado ausente")
    old_head = old_head_match.group(1)
    head = new_head_match.group(1)

    def old_tag(pattern: str, label: str) -> str:
        match = re.search(pattern, old_head, re.S | re.I)
        if match is None:
            raise RuntimeError(f"Meta antigo ausente: {label}")
        return match.group(0)

    preserved = [
        old_tag(r"<title>.*?</title>", "title"),
        old_tag(r'<meta name="description"[^>]*>', "description"),
        old_tag(r'<link rel="canonical"[^>]*>', "canonical"),
        *re.findall(r'<meta (?:property="og:[^"]+"|name="twitter:[^"]+")[^>]*>', old_head, re.I),
        old_tag(r'<link rel="icon"[^>]*>', "favicon"),
    ]
    if not any('property="og:type"' in tag for tag in preserved) or not any('name="twitter:card"' in tag for tag in preserved):
        raise RuntimeError("Open Graph ou Twitter incompleto no head antigo")
    org_graph_match = re.search(r'<script type="application/ld\+json">.*?</script>', old_head, re.S | re.I)
    if org_graph_match is None:
        raise RuntimeError("JSON-LD NiceByte ausente no head antigo")
    org_json_match = re.search(r">(.*?)</script>", org_graph_match.group(0), re.S)
    if org_json_match is None:
        raise RuntimeError("JSON-LD NiceByte malformado")
    org_graph = json.loads(org_json_match.group(1))
    if {item.get("@type") for item in org_graph.get("@graph", [])} != {"Organization", "WebPage"}:
        raise RuntimeError("JSON-LD NiceByte deve conter Organization e WebPage")
    head = required_replace(head, r'<script type="application/ld\+json">.*?</script>', "", "JSON-LD do negócio fictício")
    head = required_replace(head, r"<title>.*?</title>", "", "title gerado")
    head = required_replace(head, r'<meta name="description"[^>]*>', "", "description gerada")
    head = required_replace(head, r'<link rel="icon"[^>]*>', "", "favicon gerado")
    head = head.rstrip() + "\n" + "\n".join(preserved) + "\n" + org_graph_match.group(0)
    if '"HealthAndBeautyBusiness"' in head or "HealthAndBeautyBusiness" in head:
        raise RuntimeError("JSON-LD fictício permaneceu no head")

    html, replaced_head = re.subn(
        r"<head>.*?</head>", lambda _: "<head>" + head + "</head>", html, count=1, flags=re.S | re.I
    )
    if replaced_head != 1:
        raise RuntimeError("Não foi possível montar head final")
    final_head_match = re.search(r"<head>(.*?)</head>", html, re.S | re.I)
    if final_head_match is None:
        raise RuntimeError("Head final ausente")
    final_head = final_head_match.group(1)
    required_head = [
        (r"<title>.*?</title>", "title"),
        (r'<meta name="description"[^>]*>', "description"),
        (r'<link rel="canonical"[^>]*>', "canonical"),
        (r'<meta property="og:[^"]+"[^>]*>', "Open Graph"),
        (r'<meta name="twitter:[^"]+"[^>]*>', "Twitter"),
        (r'<link rel="icon"[^>]*>', "favicon"),
        (r'<script type="application/ld\+json">.*?</script>', "JSON-LD NiceByte"),
    ]
    for pattern, label in required_head:
        if re.search(pattern, final_head, re.S | re.I) is None:
            raise RuntimeError(f"Head final sem {label}")
    final_json_match = re.search(r'<script type="application/ld\+json">(.*?)</script>', final_head, re.S | re.I)
    if final_json_match is None or json.loads(final_json_match.group(1)) != org_graph:
        raise RuntimeError("JSON-LD final não corresponde ao Organization + WebPage NiceByte")
    if "HealthAndBeautyBusiness" in final_head:
        raise RuntimeError("JSON-LD de negócio fictício permaneceu no head")

    band = '''  <aside class="demo-note" aria-label="Aviso de demonstração">
    <span>Demonstração de página para celular criada pela NiceByte</span>
    <a href="/seo-local/">Conhecer SEO Local</a>
    <span>Nenhum trabalho de SEO garante posição no Google.</span>
  </aside>'''
    html = required_replace(html, r"<body>", "<body>\n" + band, "body")
    html = required_replace(html, r'<div class="demo-note">.*?</div>', "", "faixa gerada redundante")
    html = required_replace(html, r"</head>", '''  <link rel="stylesheet" href="/assets/v2/tokens.css?v=20261001">
  <link rel="stylesheet" href="/assets/v2/base.css?v=20261001">
  <style>
    .demo-note { position: sticky; top: 0; z-index: 1300; padding: 8px 14px; display: flex; justify-content: center; flex-wrap: wrap; gap: 4px 24px; background: var(--ink); color: var(--white); text-align: center; font-size: .875rem; line-height: 1.4; }
    .demo-note a { color: var(--lime); }
    .demo-note + .container { padding-top: 0; }
    .demo-note ~ .container footer { display: flex; flex-wrap: wrap; gap: 8px 18px; align-items: center; }
    .demo-note ~ .container footer p { margin: 0; }
    .demo-note ~ .container footer a { color: inherit; }
    @media (max-width: 560px) {
      .demo-note { padding-inline: 8px; font-size: .75rem; gap: 4px 10px; }
      .procedures-section { padding: 32px 16px 38px; }
      .section-head { margin-bottom: 16px; }
      .section-title { font-size: clamp(20px, 6.4vw, 26px); line-height: 1.1; overflow-wrap: anywhere; }
      .procedures-grid { gap: 14px; }
      .btn-concierge { width: calc(100% - 24px); margin-inline: auto; }
    }
  </style>
</head>''', "head close")
    html = required_replace(html, r'<div class="brand-mark">.*?</div>\s*</div>', '<div class="brand-mark"><div class="brand-title-wrap"><div class="brand-title">Casa Serena</div><div class="brand-sub">Estética · Exemplo ilustrativo</div></div></div>', "wordmark")
    html = required_replace(html, r'\s*<a href="[^"]*"[^>]*class="btn-procedure-consult">Ligar para Casa Serena</a>', "", "CTA telefônico do template")
    if not fixture.get("foto_hero"):
        html = required_replace(html, r'\s*<div class="hero-visual">.*?</div>\s*</div>', "", "coluna hero sem foto")
    html = html.replace("Abrir rota no Google Maps", "Consultar região de atendimento")
    html = required_replace(html, r"<footer>.*?</footer>", '''<footer>
      <p>Página demonstrativa criada pela NiceByte</p>
      <p>Atendimento online a partir de São Paulo</p>
      <a href="/seo-local/">Conhecer SEO Local</a>
      <a href="/privacidade/">Privacidade</a>
    </footer>''', "footer")
    html, replaced_contacts = re.subn(
        r'href="(?:https?://(?:www\.)?google\.com/maps[^\"]*|https?://wa\.me/[^\"]*|tel:[^\"]*)"',
        'href="/seo-local/#contato" data-contato-demo data-contato-texto="Vim pela demo (ref SITE-DEMO)"', html, flags=re.I)
    if replaced_contacts < 3:
        raise RuntimeError(f"Esperados pelo menos 3 links de contato, encontrados {replaced_contacts}")
    html = required_replace(html, r"</body>", '  <script type="module" src="/assets/v2/js/contato.js?v=20261001"></script>\n</body>', "script contato")
    forbidden = [r"wa\.me", r"tel:", r"google\.com/maps", r"0000-0000", r"\{\{", r"mailto:", r"contato@", r"HealthAndBeautyBusiness"]
    for pattern in forbidden:
        if re.search(pattern, html, re.I):
            raise RuntimeError(f"Conteúdo proibido permaneceu: {pattern}")
    if "Vim pela demo (ref SITE-DEMO)" not in html or "Demonstração de página para celular criada pela NiceByte" not in html:
        raise RuntimeError("Copy de demo/contato ausente")
    html = "\n".join(line.rstrip() for line in html.splitlines()) + "\n"
    if html == generated_path.read_text(encoding="utf-8"):
        raise RuntimeError("Moldura não alterou o HTML gerado")
    TARGET.write_text(html, encoding="utf-8", newline="\n")
    print(f"OK: {TARGET} ({len(html)} caracteres); contatos roteados={replaced_contacts}")


if __name__ == "__main__":
    main()
