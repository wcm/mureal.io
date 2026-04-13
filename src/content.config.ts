import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '*.md', base: './descriptions' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    subtitle: z.string(),
    category: z.enum(['Design Tools', 'Apps']),
    order: z.number(),
    type: z.enum(['details_page', 'external_link']),
    externalUrl: z.string().url().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    logo: z.string().optional(),
    tags: z.array(
      z.object({
        style: z.enum(['ios', 'figma', 'user', 'likes']),
        text: z.string()
      })
    ),
    banners: z.array(
      z.object({
        type: z.enum(['image', 'youtube']),
        url: z.string().url(),
        alt: z.string().optional()
      })
    )
  })
});

export const collections = { products };
