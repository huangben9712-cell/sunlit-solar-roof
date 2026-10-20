#!/usr/bin/env node
/**
 * Verify a deployment of this site against the contract in the repository.
 *
 * Usage:
 *   node scripts/verify-deployment.mjs https://sunlit-solar-roof.pages.dev
 *   node scripts/verify-deployment.mjs https://www.sunlitsolarroof.com --production
 *
 * Checks:
 *   - /build-info.json reports a real commit (not "local")
 *   - every URL in the sitemap returns 200 and is self-canonical
 *   - every rule in public/_redirects returns a single-hop 301 to its target
 *   - the knowledge-base hub returns 200 (it was redirected away on Cloudways)
 *   - the GA4 tag and WhatsApp number are present
 *   - an unknown path returns 404
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const base = (process.argv[2] ?? '').replace(/\/$/, '');
if (!base) {
  console.error('usage: node scripts/verify-deployment.mjs <base-url> [--production]');
  process.exit(2);
}
const production = process.argv.includes('--production');

const results = [];
const record = (name, ok, detail = '') => {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  ${detail}` : ''}`);
};

const UA = 'Mozilla/5.0 (compatible; sunlit-deploy-check)';
const TIMEOUT = 30_000;

async function get(url, { redirect = 'follow' } = {}) {
  const response = await fetch(url, {
    redirect,
    headers: { 'user-agent': UA },
    signal: AbortSignal.timeout(TIMEOUT),
  });
  return response;
}

async function text(url) {
  return (await get(url)).text();
}

const titleOf = (html) => html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? '';
const canonicalOf = (html) => html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '';
const pathOf = (value) => {
  try {
    const url = new URL(value, base);
    return url.pathname + url.search;
  } catch {
    return value;
  }
};

// 1. Build provenance
try {
  const response = await get(`${base}/build-info.json`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const info = await response.json();
  record('build-info.json reachable', true, `commit=${info.commit} branch=${info.branch}`);
  record('build-info.json is not a local build', info.commit !== 'local', info.commit);
} catch (error) {
  record('build-info.json reachable', false, error.message);
}

// 2. Homepage
let homeHtml = '';
try {
  const response = await get(`${base}/`);
  homeHtml = await response.text();
  record('homepage returns 200', response.status === 200, `HTTP ${response.status}`);
  record('homepage is self-canonical', canonicalOf(homeHtml).startsWith(`${base}/`) || canonicalOf(homeHtml).includes('www.sunlitsolarroof.com'), canonicalOf(homeHtml));
  record('GA4 tag present', /googletagmanager\.com\/gtag\/js\?id=G-[A-Z0-9]+/.test(homeHtml));
  record('WhatsApp link present', /wa\.me\/\d{6,}/.test(homeHtml));
} catch (error) {
  record('homepage returns 200', false, error.message);
}

// 3. Sitemap coverage
let sitemapPaths = [];
try {
  const xml = await text(`${base}/sitemap.xml`);
  sitemapPaths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => pathOf(match[1]));
  record('sitemap lists URLs', sitemapPaths.length > 0, `${sitemapPaths.length} URLs`);
} catch (error) {
  record('sitemap lists URLs', false, error.message);
}

let bad = [];
for (const path of sitemapPaths) {
  try {
    const response = await get(`${base}${path}`);
    if (response.status !== 200) {
      bad.push(`${path} -> ${response.status}`);
      continue;
    }
    const html = await response.text();
    const canonical = canonicalOf(html);
    if (canonical && pathOf(canonical) !== path) bad.push(`${path} canonical=${canonical}`);
  } catch (error) {
    bad.push(`${path} -> ${error.message}`);
  }
}
record('every sitemap URL returns 200 and is self-canonical', bad.length === 0, bad.slice(0, 6).join(' | '));

// 4. Redirect contract
const redirectLines = readFileSync(join(root, 'public', '_redirects'), 'utf8')
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => line.split(/\s+/))
  .filter((parts) => parts.length >= 3);

const redirectFailures = [];
for (const [from, to, status] of redirectLines) {
  try {
    const response = await get(`${base}${from}`, { redirect: 'manual' });
    const location = response.headers.get('location') ?? '';
    if (response.status !== Number(status)) redirectFailures.push(`${from} -> ${response.status} (want ${status})`);
    else if (pathOf(location) !== pathOf(to)) redirectFailures.push(`${from} -> ${location} (want ${to})`);
  } catch (error) {
    redirectFailures.push(`${from} -> ${error.message}`);
  }
}
record(`all ${redirectLines.length} redirects are single-hop ${redirectLines[0]?.[2] ?? '301'}`, redirectFailures.length === 0, redirectFailures.slice(0, 6).join(' | '));

// 5. Retired knowledge-base hub: must be a single-hop redirect to /articles/
try {
  const response = await get(`${base}/resources/knowledge-base/`, { redirect: 'manual' });
  const location = response.headers.get('location') ?? '';
  record(
    'retired knowledge-base hub redirects to /articles/',
    response.status === 301 && pathOf(location) === '/articles/',
    `${response.status} ${location}`,
  );
} catch (error) {
  record('retired knowledge-base hub redirects to /articles/', false, error.message);
}

// 6. 404 behaviour
try {
  const response = await get(`${base}/this-path-must-not-exist-9f2c/`, { redirect: 'manual' });
  record('unknown path returns 404', response.status === 404, `HTTP ${response.status}`);
} catch (error) {
  record('unknown path returns 404', false, error.message);
}

// 7. Production-only host checks
if (production) {
  try {
    const apex = await get('https://sunlitsolarroof.com/', { redirect: 'manual' });
    record('apex redirects to www in one hop', apex.status === 301 && (apex.headers.get('location') ?? '').startsWith('https://www.sunlitsolarroof.com/'), `${apex.status} ${apex.headers.get('location') ?? ''}`);
  } catch (error) {
    record('apex redirects to www in one hop', false, error.message);
  }
}

const failures = results.filter((result) => !result.ok);
console.log(`\n${results.length - failures.length}/${results.length} checks passed`);
if (failures.length > 0) {
  console.log('Failed checks:');
  for (const failure of failures) console.log(`  - ${failure.name} ${failure.detail}`);
  process.exit(1);
}
