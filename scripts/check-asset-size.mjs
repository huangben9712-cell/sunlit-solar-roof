#!/usr/bin/env node
/**
 * Fail the build when a deployed asset exceeds the host limit.
 *
 * Cloudflare Pages rejects any file larger than 25 MiB at upload time. Because
 * that check runs after a successful build, an oversized video only surfaces as
 * a failed deployment — which is exactly how the first Pages deploy failed.
 *
 * Run: node scripts/check-asset-size.mjs
 */

import { readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, sep } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const HARD_LIMIT = 25 * 1024 * 1024; // Cloudflare Pages per-file limit
const WARN_LIMIT = 10 * 1024 * 1024; // anything this big deserves a second look

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

let files;
try {
  files = walk(dist);
} catch {
  files = [];
}

if (files.length === 0) {
  console.error('FAIL: dist/ is empty or missing. Run `pnpm build` first.');
  process.exit(1);
}

const sized = files
  .map((path) => ({ path: relative(dist, path).split(sep).join('/'), bytes: statSync(path).size }))
  .sort((a, b) => b.bytes - a.bytes);

const blocked = sized.filter((file) => file.bytes > HARD_LIMIT);
const heavy = sized.filter((file) => file.bytes > WARN_LIMIT && file.bytes <= HARD_LIMIT);
const totalBytes = sized.reduce((sum, file) => sum + file.bytes, 0);

const mib = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MiB`;

console.log(`dist/: ${sized.length} files, ${mib(totalBytes)} total`);
for (const file of heavy) console.log(`  WARN  ${mib(file.bytes)}  ${file.path}`);

if (blocked.length > 0) {
  console.error(`\nFAIL: ${blocked.length} file(s) exceed the 25 MiB Cloudflare Pages limit:`);
  for (const file of blocked) console.error(`  ${mib(file.bytes)}  ${file.path}`);
  console.error('\nCompress them (ffmpeg) or move them to object storage before deploying.');
  process.exit(1);
}

if (totalBytes > 500 * 1024 * 1024) {
  console.warn(`\nWARN: dist/ is ${mib(totalBytes)}; every deployment uploads all of it.`);
}

console.log('\nOK: every asset fits inside the Pages per-file limit.');
