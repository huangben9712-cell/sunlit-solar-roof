export async function GET() {
  const site = 'https://www.sunlitsolarroof.com';
  const pages = [
    '', '/about/', '/contact/', '/supply-scope/',
    '/lumina-slate/', '/storm-guard/',
    '/projects/', '/articles/', '/resources/',
    '/resources/knowledge-base/', '/resources/downloads/',
    '/privacy-policy/', '/thank-you/',
  ];

  // Dynamic: projects
  const { projects } = await import('../data/projects');
  projects.forEach((p: any) => pages.push('/projects/' + p.slug + '/'));

  // Dynamic: articles
  const { blogPosts } = await import('../data/blog');
  blogPosts.forEach((b: any) => pages.push('/articles/' + b.slug + '/'));

  // Dynamic: resources
  const { resources } = await import('../data/resources');
  resources.forEach((r: any) => pages.push('/resources/' + r.slug + '/'));

  const urls = pages.map(p => (
    `  <url><loc>${site}${p.replace(/\/+$/, '/')}</loc></url>`
  )).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
