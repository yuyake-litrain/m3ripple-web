import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    desc: z.string(),
  }),
});

export const collections = {
  docs: docsCollection,
};
