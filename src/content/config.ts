import { defineCollection, z } from "astro:content";

const post = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200).optional(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    category: z.string().min(1),
    series: z.string().min(1).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  posts: post,
};
