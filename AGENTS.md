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
- **Run `git switch develop && git pull --ff-only` before starting any work.**
- **Push to `develop` only — never directly to `main` (see Branch Strategy).**
- **Run `pnpm build` and make it pass before committing.**
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

## Branch Strategy (READ BEFORE PUSHING)

| Branch | Role | Who writes to it |
|--------|------|------------------|
| `main` | **Production.** This is what the live site is built from. | Nobody directly. Only receives merges from `develop`. Protected on GitHub. |
| `develop` | **Default branch and daily development.** All work lands here first. | Everyone, including AI assistants. |
| `feature/*` | Optional, for large or risky changes. Merge back into `develop` via PR. | Anyone |

Rules:

1. **Never commit directly to `main`.** Branch protection rejects direct pushes; production changes only arrive through a merge from `develop`.
2. **Work on `develop`.** Start with `git switch develop && git pull --ff-only`.
3. **The build must pass before pushing:** `pnpm install --frozen-lockfile && pnpm build`. CI runs the same command on every push and PR; a red build does not get merged into `main`.
4. **Promoting to production:** open a PR `develop` → `main` and merge it with a **merge commit**. Do not squash or rebase: both rewrite the commit SHAs, which leaves `develop` diverged from `main` and forces a reset afterwards (this already produced a split history once).
5. **Never force-push or delete `main` or `develop`.** If history must be rewritten, ask the owner first.
6. This repo is shared among Manus, ChatGPT, opencode, DeepSeek Harness and human developers, so commit messages must say *what changed and why*, in English, following the existing `feat:` / `fix:` / `refactor:` / `docs:` / `seo:` / `deploy:` prefixes.

## Build-Time Configuration (do not break production)

The site is **fully static**. These variables are baked in at build time and are read from `.env` or the hosting environment:

| Variable | Effect if missing |
|---|---|
| `PUBLIC_GA_MEASUREMENT_ID` | No GA4 tag is emitted; analytics silently stops reporting. |
| `PUBLIC_WHATSAPP_NUMBER` | WhatsApp call-to-action links lose their destination. |

A build that succeeds locally can still be wrong in production if the hosting environment does not define them. See `.env.example` for the expected names. Never commit real values.

## Deployment Target

**Current:** Cloudflare Pages (Git integration, production branch `main`) — static `dist/` output plus `public/_redirects` and `public/_headers`. Every push to `main` deploys; every PR gets a preview URL.

The apex `sunlitsolarroof.com` still redirects through the legacy Cloudways origin until its DNS record is moved — see `docs/deployment/cloudflare-cutover-2026-10-22.md`. `public/.htaccess` is kept only for that host and can be deleted once the apex is moved.

Run `pnpm check:redirects` after touching any redirect; CI fails if `public/_redirects` stops covering `astro.config.mjs`. Full cutover checklist: `docs/cloudflare-pages-migration.md`.

### Prove what is actually live

Every build embeds the commit it came from. After any deployment:

```bash
curl -s https://www.sunlitsolarroof.com/build-info.json
```

It must report the commit you intended to ship. A `"commit": "local"` means the build was produced outside CI without `PUBLIC_BUILD_COMMIT`, which makes the deployment untraceable — treat that as a failed deploy and rebuild from a pushed commit. The same value is in every page's `<meta name="build-commit">`.

## Documentation

Full docs: https://docs.astro.build
