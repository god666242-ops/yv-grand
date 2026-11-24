"""Resize + compress hotel photos into responsive WebP files.
Reads  images-original/<file>   writes  public/images/<name>-<width>.webp  and image-manifest.json
Run:  python3 scripts/optimize-images.py   (needs: pip install pillow)
Add a new photo = drop it in images-original/, add a line to MAP, re-run."""
from PIL import Image, ImageOps
import json, os

SRC, OUT = "images-original", "public/images"
WIDTHS = [480, 960, 1600]
P = "WhatsApp Image 2026-11-23 at "
MAP = {  # new name : original file
    "room-1": P + "22.36.09 (1).jpeg",
    "room-2": P + "22.36.10 (1).jpeg",
    "room-3": P + "22.36.09 (2).jpeg",
    "room-4": P + "22.36.11 (2).jpeg",
    "room-5": P + "22.36.11.jpeg",
    "room-6": P + "22.36.12.jpeg",
    "room-tv": P + "22.36.11 (1).jpeg",
    "bath": P + "22.36.10.jpeg",
    "reception": P + "22.36.08.jpeg",
    "corridor": P + "22.36.09.jpeg",
}

manifest = {}
for name, f in MAP.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, f))).convert("RGB")
    widths = [w for w in WIDTHS if w <= im.width]
    if im.width < max(WIDTHS) and im.width not in widths:
        widths.append(im.width)  # small source: also keep its native size
    manifest[name] = sorted(widths)
    for w in widths:
        r = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS) if w != im.width else im
        r.save(f"{OUT}/{name}-{w}.webp", "WEBP", quality=78, method=6)
json.dump(manifest, open("image-manifest.json", "w"), indent=1)
print("done")
