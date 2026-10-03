from pathlib import Path
from subprocess import run
import re

root = Path(__file__).resolve().parents[4]
rel = 'static/seo-local/solicitar/index.html'
original = run(['git', 'show', f'HEAD:{rel}'], cwd=root, capture_output=True, text=True, check=True).stdout
current = (root / rel).read_text(encoding='utf-8')
for pattern in (r'<(?:input|select|textarea|button|form|pre)\b[^>]*\bid="([^"]+)',
                r'<(?:input|select|textarea)\b[^>]*\bname="([^"]+)'):
    assert sorted(re.findall(pattern, original)) == sorted(re.findall(pattern, current)), pattern
marker = '  <script type="module">'
assert marker in original and marker in current
assert original[original.index(marker):] == current[current.index(marker):], 'JS alterado'
assert '—' not in current[:current.index(marker)]
print('IDs, nomes, scripts preservados; sem travessão visível')
