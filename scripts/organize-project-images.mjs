import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const projectsFile = path.join(root, 'src/data/projects.ts');
const imageRoot = path.join(root, 'public/images/projects');

const content = await fs.readFile(projectsFile, 'utf8');
const blockRegex = /(\{\s*id:\s*\d+,[\s\S]*?\n\s*\})(?=,\n\s*\{|\n\];)/g;
let updated = content;
let moved = 0;
let changedRefs = 0;
let missing = 0;

for (const match of content.matchAll(blockRegex)) {
  const block = match[1];
  const slugMatch = block.match(/slug:\s*"([^"]+)"/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  const imageMatches = [...block.matchAll(/"(\/images\/projects\/([^"]+?)\/([^"]+?\.(?:webp|png|jpg|jpeg|svg)))"/g)];

  for (const imageMatch of imageMatches) {
    const oldRef = imageMatch[1];
    const currentFolder = imageMatch[2];
    const fileName = imageMatch[3];
    if (currentFolder === slug) continue;

    const sourcePath = path.join(root, 'public', oldRef);
    const targetRef = `/images/projects/${slug}/${fileName}`;
    const targetPath = path.join(imageRoot, slug, fileName);

    try {
      await fs.mkdir(path.dirname(targetPath), { recursive: true });
      await fs.rename(sourcePath, targetPath);
      moved += 1;
    } catch (error) {
      try {
        await fs.access(targetPath);
      } catch {
        missing += 1;
        console.warn(`Missing image file: ${oldRef}`);
      }
    }

    updated = updated.split(oldRef).join(targetRef);
    changedRefs += 1;
  }
}

await fs.writeFile(projectsFile, updated);
console.log(`Project image organization done.`);
console.log(`Moved files: ${moved}`);
console.log(`Updated references: ${changedRefs}`);
console.log(`Missing files: ${missing}`);
console.log('Review public/images/projects/ and src/data/projects.ts, then commit the changes.');
