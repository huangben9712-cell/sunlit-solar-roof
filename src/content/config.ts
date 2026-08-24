import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    priority: z.enum(['P0', 'P1', 'P2']),
    legacyUrl: z.string().url(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
      altStatus: z.enum(['wordpress-inherited', 'editorial-fallback-needs-review']),
      wordpressSourceUrl: z.string().url(),
      wordpressSourceAlt: z.string(),
    }).optional(),
  }),
});

export const collections = { articles };
