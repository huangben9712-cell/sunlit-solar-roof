from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
source = ROOT / 'public/images/projects/hangzhou-xianghu-arcadia-villa/sunlit-bipv-solar-roof-aerial-view-hangzhou-xianghu.webp'
target = ROOT / 'public/images/og-default.webp'

canvas_size = (1200, 630)
image = Image.open(source).convert('RGB')
background = ImageOps.fit(image, canvas_size, method=Image.Resampling.LANCZOS, centering=(0.5, 0.52))
overlay = Image.new('RGBA', canvas_size, (8, 34, 24, 0))
draw = ImageDraw.Draw(overlay)
draw.rectangle((0, 0, 1200, 630), fill=(10, 38, 28, 112))
draw.rectangle((0, 0, 14, 630), fill=(212, 160, 86, 255))

try:
    bold = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 60)
    regular = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 28)
    small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 20)
except OSError:
    bold = regular = small = ImageFont.load_default()

draw.text((70, 145), 'SUNLIT SOLAR ROOF', font=small, fill=(245, 239, 221, 255))
draw.text((70, 190), 'Complete Solar Roof\nPackages, Factory Direct', font=bold, fill=(255, 255, 255, 255), spacing=8)
draw.text((70, 370), 'BIPV glass tiles, metal sheets, components and project support.', font=regular, fill=(230, 240, 234, 255))

result = Image.alpha_composite(background.convert('RGBA'), overlay).convert('RGB')
target.parent.mkdir(parents=True, exist_ok=True)
result.save(target, format='WEBP', quality=88, method=6)
print(target)
print(f'{result.width}x{result.height}')
