from pathlib import Path
from subprocess import run
from PIL import Image, ImageOps

base = Path(__file__).parent
for slug, photo in [('campinas-feira', '37347201'), ('cafe-proprietaria', '4473415')]:
    source = base / f'{slug}.jpeg'
    run(['curl', '-fLsS', '-A', 'Mozilla/5.0', '-o', str(source),
         f'https://images.pexels.com/photos/{photo}/pexels-photo-{photo}.jpeg'], check=True)
    image = Image.open(source).convert('RGB')
    source.unlink()
    for width in (1600, 800):
        frame = ImageOps.fit(image, (width, round(width * 0.7)), method=Image.Resampling.LANCZOS)
        frame.save(base / f'{slug}-{width}.webp', 'WEBP', quality=78, method=6)
        print(f'{slug}-{width}.webp: {frame.size}')
