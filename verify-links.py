from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlparse
from urllib.request import urlopen
from html.parser import HTMLParser
import os

ROOT = Path(__file__).parent / "static"
PAGES = ["/", "/seo-local/", "/seo-local/solicitar/", "/demo/estetica/", "/laudos/", "/privacidade/"]
PORT = 8765
class QuietHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs): super().__init__(*args, directory=str(ROOT), **kwargs)
    def log_message(self, format, *args): pass
class Links(HTMLParser):
    def __init__(self): super().__init__(); self.hrefs=[]
    def handle_starttag(self, tag, attrs):
        if tag == "a":
            href = dict(attrs).get("href")
            if href: self.hrefs.append(href)
server = ThreadingHTTPServer(("127.0.0.1", PORT), QuietHandler)
Thread(target=server.serve_forever, daemon=True).start()
errors=[]; total=0
try:
    for path in PAGES:
        with urlopen(f"http://127.0.0.1:{PORT}{path}") as response:
            body=response.read().decode("utf-8", "replace")
            assert response.status == 200, f"{path}: page status {response.status}"
        parser=Links(); parser.feed(body)
        for href in parser.hrefs:
            url=urljoin(f"http://127.0.0.1:{PORT}{path}", href)
            parsed=urlparse(url)
            if parsed.netloc != f"127.0.0.1:{PORT}" or parsed.path == "": continue
            total += 1
            try:
                with urlopen(url) as response:
                    if response.status != 200: errors.append(f"{path} -> {href}: {response.status}")
            except (HTTPError, URLError, OSError) as exc: errors.append(f"{path} -> {href}: {exc}")
finally: server.shutdown(); server.server_close()
print(f"Pages: {len(PAGES)} served 200; internal links checked: {total}")
if errors:
    print("Broken internal links:"); print("\n".join(errors)); raise SystemExit(1)
print("All internal links returned 200.")
