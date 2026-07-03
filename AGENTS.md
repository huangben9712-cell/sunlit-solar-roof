# Sunlit Solar Roof Website

## Project Identity (READ FIRST)

| Aspect | Value |
|--------|-------|
| Framework | **Astro 4** (Static Site Generator) |
| Styling | Tailwind CSS 3 + PostCSS |
| Language | TypeScript |
| Package Manager | **pnpm** |
| Runtime | Node.js >= 22.12.0 |
| Build Output | Static HTML/CSS/JS in `dist/` |
| **Working Directory** | **`D:\sunlit`** |

## CRITICAL RULES

- **This is an Astro project. Do NOT introduce React, Vue, Svelte, or any other UI framework.**
- **Do NOT change the framework type. All pages use `.astro` files.**
- **Run `git pull` before starting any work.**
- **Run `git add -A && git commit -m "message" && git push` after completing work.**
- **All AI assistants work from `D:\sunlit` — this is the single source of truth.**

## Development

```bash
cd D:\sunlit
pnpm install          # Install dependencies
pnpm dev              # Start dev server → http://localhost:4321
pnpm build            # Production build to dist/
pnpm preview          # Preview production build locally
```

## Project Structure

```
D:\sunlit\
├── public/
│   ├── images/
│   │   ├── projects/       ← Real project photos (.webp, .jpg)
│   │   └── products/       ← Product shots, hero images
│   ├── videos/             ← Factory tour, QC, shipping clips (.mp4)
│   └── favicon.*
├── src/
│   ├── components/         # Navigation, Footer (.astro)
│   ├── data/               # TypeScript data (products, projects, FAQs, blog)
│   ├── layouts/            # Layout.astro (base template)
│   ├── pages/              # All route pages (.astro)
│   └── styles/             # global.css (Tailwind)
├── tailwind.config.mjs     # Design tokens (colors, fonts)
├── astro.config.mjs
└── package.json
```

## Media Guidelines

- **Images**: Place in `public/images/projects/` or `public/images/products/`. Reference as `/images/projects/filename.webp`.
- **Videos**: Place in `public/videos/`. Reference as `/videos/filename.mp4`. Use `<video autoplay loop muted playsinline>` for background videos.
- **Supported formats**: `.webp` (preferred), `.jpg`, `.png`, `.mp4`, `.webm`.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `text-charcoal` | `#17232b` | Body text |
| `text-slate` | `#68757d` | Secondary text |
| `text-deep-green` / `bg-deep-green` | `#0f4d3a` | Brand color |
| `text-amber` / `bg-amber` | `#D4A056` | Accent, CTAs |
| `bg-soft-green` | `#edf6f1` | Hero / splash backgrounds |
| `bg-light-gray` | `#f8faf8` | Section backgrounds |
| `border-border` | `#e5e8e6` | Card / UI borders |
| `font-heading` | Plus Jakarta Sans | All headings |
| `font-sans` | Inter | Body text |

Component classes: `sunlit-card`, `sunlit-btn-primary`, `sunlit-btn-secondary`, `sunlit-overline`, `sunlit-section-title`, `dark-green-gradient`.

## Collaboration Workflow

1. `git pull` to get latest code
2. Make changes following existing patterns
3. `git add -A && git commit -m "descriptive message"`
4. `git push` to share with other collaborators
5. This repo is shared among: Manus, ChatGPT, opencode, and human developers

## Deployment Target

Cloudway hosting (B2B lead generation website for solar roof products).

## Documentation

Full docs: https://docs.astro.build
