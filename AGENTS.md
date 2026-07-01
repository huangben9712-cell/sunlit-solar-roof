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

## CRITICAL RULES

- **This is an Astro project. Do NOT introduce React, Vue, Svelte, or any other UI framework.**
- **Do NOT change the framework type. All pages use `.astro` files.**
- **Run `git pull` before starting any work.**
- **Run `git add -A && git commit -m "message" && git push` after completing work.**

## Development

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server
pnpm build            # Production build to dist/
pnpm preview          # Preview production build locally
```

## Project Structure

```
src/
├── components/       # Navigation, Footer (.astro)
├── data/             # TypeScript data files (products, projects, FAQs, etc.)
├── layouts/          # Layout.astro (base template)
├── pages/            # All route pages (.astro)
│   ├── projects/[slug].astro   # Dynamic project detail pages
│   └── resources/[slug].astro  # Dynamic resource detail pages
└── styles/           # global.css (Tailwind)
public/               # Static assets (favicon, etc.)
```

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
