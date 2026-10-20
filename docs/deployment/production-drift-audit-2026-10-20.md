# Production drift audit — 2026-10-20

**Question this answers:** "which branch is Cloudways building from?"

**Answer:** none. Production is not built from a branch. It was assembled by uploading
built files over SFTP, and at least one change was made on top of a build that never
existed in git. There is no branch that reproduces production, and there cannot be one
until the deployment method changes.

## Method

1. Crawled all 54 URLs in the live `https://www.sunlitsolarroof.com/sitemap.xml`.
2. Built `develop` locally and compared status code, `<title>`, meta description and
   canonical for every URL.
3. Extracted the rendered article text from the live DOM and compared it to the local
   build character by character.
4. Searched every ref and every commit in both local clones for the content that only
   exists in production.

## Findings

| # | Finding | Evidence |
|---|---|---|
| 1 | A published article existed only on production | `/articles/solar-roof-distributor-pilot-project/` returns 200. The slug appears in no branch, commit or working tree of this repository. Live article count 16, repo 15. |
| 2 | The knowledge-base hub page is redirected on production only | `GET /resources/knowledge-base/` returns `301 → /articles/` with an Apache-generated `text/html; charset=iso-8859-1` body. No such rule exists in `astro.config.mjs`, `public/.htaccess` or `public/_redirects`, and no historical commit ever contained it. |
| 3 | Two listing pages differ in metadata | `/articles/` and `/resources/` return titles and descriptions that differ from a build of `develop`. |

Everything else matched: 54/54 URLs returned 200, every canonical was self-referential,
the apex 301 to `www` was a single hop, GA4 (`G-2N9NXEM4L1`) and the WhatsApp number were
correct.

## Why this happened

`docs/deployment/production-release-2026-08-24.md` records how releases were actually
made: temporary application-level **SFTP credentials**, uploading a built `dist/`
(and in one case a single `public_html/contact/index.html`), then deleting the
credentials. That is a file-copy process, not a build from a commit.

The last production change is dated **Sun, 06 Sep 2026 01:54:18 GMT** (`last-modified`
on the homepage), which is after the newest commit on any branch (2026-08-24). The
pilot article is dated 2026-09-05. The work that produced it was done in a working tree,
uploaded, and never committed.

The knowledge-base redirect belongs to the same session: retiring the hub in favour of
`/articles/` was a content decision that reached the server but never reached git.

## Actions taken

1. **Article restored to git** — `src/content/articles/solar-roof-distributor-pilot-project.md`
   plus its cover image. Rendered text verified character-identical (5114 chars) to
   production; the image was downloaded byte-identical.
2. **September redesign recovered into git** — see
   `docs/deployment/september-redesign-recovery-2026-10-20.md`. The hub was not a stray
   server rule after all: the September session merged the knowledge-base page into
   `/articles/`, rewrote `/resources/`, reworked the `/system-overview/` layout and added
   the table and analytics helpers. All of it is now in the repository and verified
   text-identical to production on 54/54 URLs.
3. **Build provenance added** — `/build-info.json` and `<meta name="build-commit">` now
   carry the commit every build came from, so "what is live?" is answerable in one
   request instead of an afternoon of forensics.
4. **Redirect parity enforced** — `public/_redirects` regenerated from `astro.config.mjs`
   and `scripts/check-redirects.mjs` fails CI on drift.

## Remaining risk

Until production is deployed from a commit, the same drift can happen again. Two things
close it:

- Move the production origin to Cloudflare Pages building from `main`
  (see `docs/cloudflare-pages-migration.md`). This removes SFTP and the hand-edited
  `.htaccess` from the path entirely.
- If Cloudways must stay for a while, deploy by uploading a full `dist/` produced by CI,
  never by editing individual files on the server, and verify `/build-info.json`
  afterwards.

## Resolved

The open question about the knowledge-base hub is settled: the September session retired
it deliberately. Its content now lives at `/articles/`, the navigation points there, and
`/resources/knowledge-base/` is a real 301 in `astro.config.mjs`, `public/_redirects` and
`public/.htaccess`.
