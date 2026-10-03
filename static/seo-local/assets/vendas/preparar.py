"""Baixa fotografias Pexels identificadas e prepara versões WebP responsivas."""
from io import BytesIO
from pathlib import Path
from urllib.request import Request, urlopen
from PIL import Image, ImageOps

DEST = Path(__file__).parent
PHOTOS = {
    "barbearia": 6007503,
    "salao": 5568409,
    "cliente": 15434266,
}
for name, photo_id in PHOTOS.items():
    url = f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg?w=1800"
    with urlopen(Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=30) as response:
        image = Image.open(BytesIO(response.read())).convert("RGB")
    for width in (800, 1600):
        crop = ImageOps.fit(image, (width, int(width * .72)), method=Image.Resampling.LANCZOS)
        crop.save(DEST / f"{name}-{width}.webp", "WEBP", quality=79, method=6)
        print(f"{name}-{width}: {crop.size}")
