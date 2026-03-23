import { defineCollection, z } from 'astro:content';

const week1 = defineCollection({
  type: 'content',
  schema: z.object({}).passthrough(),
});

export const collections = {
  'week-1': week1,
};
