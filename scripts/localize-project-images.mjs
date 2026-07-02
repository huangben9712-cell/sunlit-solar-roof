import fs from 'node:fs/promises';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const projectsFile = path.join(root, 'src/data/projects.ts');
const outputRoot = path.join(root, 'public/images/projects');

function download(url, targetPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, targetPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed ${response.statusCode}: ${url}`));
        return;
      }
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        await fs.mkdir(path.dirname(targetPath), { recursive: true });
        await fs.writeFile(targetPath, Buffer.concat(chunks));
        resolve();
      });
    }).on('error', reject);
  });
}

function slugFromBlock(block) {
  const match = block.match(/slug:\s*"([^"]+)"/);
  return match ? match[1] : 'unknown-project';
}

const content = await fs.readFile(projectsFile, 'utf8');
const blocks = content.split(/\n\s*\{\n\s*id:/g).map((block, index) => index === 0 ? block : '{\n    id:' + block);
let updated = content;
let downloaded = 0;
let skipped = 0;

for (const block of blocks) {
  const slug = slugFromBlock(block);
  const urls = [...block.matchAll(/https:\/\/www\.sunlitsolarroof\.com\/wp-content\/uploads\/[^"\]]+/g)].map((m) => m[0]);
  for (const url of urls) {
    const fileName = decodeURIComponent(url.split('/').pop() || 'image.webp');
    const localRelative = `/images/projects/${slug}/${fileName}`;
    const localAbsolute = path.join(outputRoot, slug, fileName);
    try {
      await download(url, localAbsolute);
      updated = updated.split(url).join(localRelative);
      downloaded += 1;
      console.log(`Downloaded ${url} -> ${localRelative}`);
    } catch (error) {
      skipped += 1;
      console.warn(`Skipped ${url}: ${error.message}`);
    }
  }
}

await fs.writeFile(projectsFile, updated);
console.log(`Done. Downloaded: ${downloaded}. Skipped: ${skipped}.`);
console.log('Review src/data/projects.ts and public/images/projects/, then commit the changes.');
