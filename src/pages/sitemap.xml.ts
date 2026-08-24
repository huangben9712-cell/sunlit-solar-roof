import { getCollection } from 'astro:content';

export async function GET() {
  const site = 'https://www.sunlitsolarroof.com';
  const pages = [
    '', '/about/', '/contact/', '/system-overview/',
    '/lumina-slate/', '/storm-guard/',
    '/projects/', '/articles/', '/resources/',
    '/resources/knowledge-base/', '/resources/downloads/',
    '/solar-roof-vs-solar-panels/', '/privacy-policy/',
  ];

  const { projects } = await import('../data/projects');
  projects.forEach((project: { slug: string }) => pages.push(`/projects/${project.slug}/`));

  const articles = await getCollection('articles');
  articles.forEach((article) => pages.push(`/articles/${article.slug}/`));

  const { resources } = await import('../data/resources');
  resources.forEach((resource: { slug: string }) => pages.push(`/resources/${resource.slug}/`));

  const urls = [...new Set(pages)].map((path) => (
    `  <url><loc>${site}${path.replace(/\/+$/, '/')}</loc></url>`
  )).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
