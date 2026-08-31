// src/content/config.ts
import { defineCollection, z } from "astro:content";

// Kategorie są domknięte enumem celowo: blog zasila publisher (D:\publisher),
// który generuje wpisy automatycznie. Enum wywala build przy wymyślonej
// kategorii, zanim cokolwiek trafi na produkcję.
export const BLOG_CATEGORIES = [
  "Poradniki",
  "Materiały i fronty",
  "Blaty i wykończenia",
  "Aranżacje i trendy",
  "Ergonomia i funkcjonalność",
  "Koszty i wycena",
  "Realizacje",
] as const;

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    author: z.string().default("Art Kuchnie Toruń"),
    category: z.enum(BLOG_CATEGORIES),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
