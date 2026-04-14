import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/products' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    subtitle: z.string(),
    category: z.enum(['Design Tools', 'Apps']),
    order: z.number(),
    type: z.enum(['details_page', 'external_link']),
    tryNowUrl: z.string().url(),
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
        url: z.string().refine((value) => value.startsWith('/') || /^https?:\/\//.test(value), {
          message: 'Banner URL must be an absolute URL or root-relative path (starts with /).'
        }),
        alt: z.string().optional()
      })
    )
  })
});

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/legal' }),
  schema: z.object({
    slug: z.enum(['terms', 'privacy']),
    title: z.string(),
    effectiveDate: z.string()
  })
});

export const collections = { products, legal };
