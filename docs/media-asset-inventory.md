# Media Asset Inventory

> All raw factory, installation, shipping, and testing media organized for website use.
> Total: 17 images (webp) + 50 videos (mp4)

---

## Directory Structure

```
public/
├── images/
│   ├── components/          # Product component white-background photos (see component-image-inventory.md)
│   ├── projects/            # 26 project folders with installation photos
│   │
│   ├── factory/             # 7 factory images
│   │   ├── 仓库出货区 (1-3).webp    ← Warehouse / shipping area
│   │   ├── 实验室 (1-3).webp        ← Quality testing lab
│   │   └── 样品区.webp              ← Product sample display
│   │
│   ├── shipping/            # 7 shipping & logistics images
│   │   └── *.webp                   ← Packed products, containers, pallets
│   │
│   └── installation/
│       └── storm-guard/     # 4 SG installation step-by-step photos
│           └── *.webp
│
└── videos/
    ├── factory/             # 6 production videos
    │   ├── 光伏瓦生产 (1-3).mp4     ← PV tile manufacturing process
    │   └── 生产车间 (1-3).mp4       ← Factory workshop tours
    │
    ├── installation/
    │   ├── lumina-slate/    # 3 professional LS install guide videos
    │   │   ├── 01_Roof_base.mp4            ← Roof base layer prep
    │   │   ├── 02_Installing_Tiles.mp4     ← Tile installation process
    │   │   └── 03_Solar_Tiles_Wiring.mp4   ← Electrical wiring
    │   ├── storm-guard/     # 7 SG demo videos + 4 images
    │   │   ├── P135 安装 (1-4).mp4        ← Active tile installation
    │   │   ├── P135 安装 (1-2).mp4         ← Additional install clips
    │   │   └── 完工效果.mp4                ← Finished roof result
    │   └── on-site/         # 29 WhatsApp clips from real projects
    │       └── VID-*.mp4                  ← Short vertical phone videos
    │
    ├── projects/
    │   └── lumina-slate-nanshan-lake/
    │       └── 南京南山湖航拍.mp4          ← Aerial drone footage
    │
    ├── shipping/
    │   └── 17b0796d...mp4, 6ea7ddd...mp4 ← Container loading clips
    │
    └── testing/
        ├── Lumina slate 抗冲击.mp4         ← LS impact resistance test
        └── Storm Guard 抗冲击.mp4          ← SG impact resistance test

```

---

## Processing Pipeline (Planned)

### Videos → Web-Ready
1. **Lumina Slate install guides** (3 files, ~683 MB total): Compress to ~50 MB with ffmpeg:
   ```
   ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 64k output.mp4
   ```
2. **WhatsApp clips (29 files)**: Already small (~2-10 MB), convert to webm for web:
   ```
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 -an output.webm
   ```
3. **All other videos**: Apply moderate compression (crf 28 h264).

### Images → Web-Ready
- Already converted to webp (85% quality, 1920px max) ✅

### Video Thumbnails
- Extract frame at 3 seconds for each video as poster image:
  ```
  ffmpeg -i input.mp4 -ss 00:00:03 -vframes 1 poster.webp
  ```

---

## Content Mapping to Website Pages

| Media Folder | Use On |
|-------------|--------|
| `images/factory/` | About page / Our Factory section |
| `images/shipping/` | Trust-building section on About page |
| `videos/factory/` | About page (embedded video gallery) |
| `videos/installation/lumina-slate/` | Lumina Slate product page |
| `videos/installation/storm-guard/` | Storm Guard product page |
| `videos/installation/on-site/` | Projects pages (social proof reel) |
| `videos/projects/` | Project detail pages |
| `videos/shipping/` | Trust-building section |
| `videos/testing/` | Product pages (quality proof) |
