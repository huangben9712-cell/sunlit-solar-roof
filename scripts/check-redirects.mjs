#!/usr/bin/env node
/**
 * Guard the redirect contract.
 *
 * The site is served by two different hosts during the Cloudflare migration:
 *   - Cloudways / Apache  -> public/.htaccess
 *   - Cloudflare Pages    -> public/_redirects
 *
 * astro.config.mjs `redirects` is the declared source of truth. This script
 * fails when public/_redirects drifts from it, so a URL can never silently
 * fall back to a meta-refresh stub (which is a 200, not a 301) or a 404.
 *
 * Run: node scripts/check-redirects.mjs
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const VALID_STATUS = new Set([301, 302, 303, 307, 308]);
const MAX_STATIC_RULES = 2000;

function readConfigRedirects() {
  const source = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
  const block = source.slice(source.indexOf('redirects:'));
  const map = new Map();
  const re = /'(?<from>\/[^']*)':\s*'(?<to>\/[^']*)'/g;
  let match;
  while ((match = re.exec(block)) !== null) {
    map.set(match.groups.from, match.groups.to);
  }
  return map;
}

function readCloudflareRules() {
  const lines = readFileSync(join(root, 'public', '_redirects'), 'utf8').split(/\r?\n/);
  const rules = [];
  const problems = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const parts = trimmed.split(/\s+/);
    if (parts.length < 3) {
      problems.push(`line ${index + 1}: expected "<from> <to> <status>", got "${trimmed}"`);
      return;
    }
    const [from, to, statusText] = parts;
    const status = Number(statusText);

    if (!from.startsWith('/')) problems.push(`line ${index + 1}: "${from}" must start with "/"`);
    if (!VALID_STATUS.has(status)) problems.push(`line ${index + 1}: unsupported status "${statusText}"`);
    if (to.includes('#')) problems.push(`line ${index + 1}: destination fragments are not supported by every host`);

    rules.push({ from, to, status, line: index + 1 });
  });

  return { rules, problems };
}

function readApacheLiterals() {
  // public/.htaccess was retired when the Cloudways origin was cancelled.
  // Keep the comparison working if an Apache host is ever added back.
  let source;
  try {
    source = readFileSync(join(root, 'public', '.htaccess'), 'utf8');
  } catch {
    return [];
  }
  const paths = [];
  const re = /^\s*RewriteRule\s+\^([a-z0-9\-/._]+)\/\?\$\s/gim;
  let match;
  while ((match = re.exec(source)) !== null) {
    paths.push(`/${match[1]}/`);
  }
  return paths;
}

const configRedirects = readConfigRedirects();
const { rules, problems } = readCloudflareRules();
const apachePaths = readApacheLiterals();
const cloudflareFrom = new Set(rules.map((rule) => rule.from));

const missing = [...configRedirects.keys()].filter((from) => !cloudflareFrom.has(from));
const missingApache = apachePaths.filter((path) => !cloudflareFrom.has(path) && !cloudflareFrom.has(path.replace(/\/$/, '')));

if (rules.length > MAX_STATIC_RULES) {
  problems.push(`_redirects has ${rules.length} rules; Cloudflare Pages allows at most ${MAX_STATIC_RULES}`);
}

const report = {
  astroConfigRedirects: configRedirects.size,
  cloudflareRules: rules.length,
  apacheLiteralRules: apachePaths.length,
  invalid: problems,
  missingFromCloudflare: missing,
  missingFromApacheCoverage: missingApache,
};

console.log(JSON.stringify(report, null, 2));

if (problems.length > 0) {
  console.error(`\nFAIL: public/_redirects is malformed (${problems.length} problem(s)).`);
  process.exit(1);
}

if (missing.length > 0) {
  console.error(`\nFAIL: ${missing.length} astro.config redirect(s) missing from public/_redirects.`);
  console.error('Add them so production gets a real 301 instead of a 200 meta-refresh stub.');
  process.exit(1);
}

if (missingApache.length > 0) {
  console.warn(`\nWARN: ${missingApache.length} Apache rule(s) have no Cloudflare equivalent: ${missingApache.join(', ')}`);
}

console.log('\nOK: public/_redirects covers every astro.config redirect.');
