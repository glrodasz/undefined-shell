import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  redirect: z.boolean().optional(),
  tags: z.union([z.string(), z.array(z.string())]).optional(),
});

// Spanish posts collection
const postsEs = defineCollection({
  type: "content",
  schema: postSchema,
});

// English posts collection (for future use)
const postsEn = defineCollection({
  type: "content", 
  schema: postSchema,
});

export const collections = { 
  "posts/en": postsEn, // English posts
  "posts/es": postsEs, // Spanish posts
};
