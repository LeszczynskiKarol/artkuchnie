// Wspólna logika bloga — używana przez listing, kategorie i stronę wpisu.
import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

const PL_MAP: Record<string, string> = {
  ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z",
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .split("")
    .map((c) => PL_MAP[c] ?? c)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Szkice widać na dev, nigdy na produkcji.
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection("blog", ({ data }) =>
    import.meta.env.PROD ? data.draft !== true : true,
  );
  return all.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
}

export function countByCategory(posts: Post[]): Record<string, number> {
  return posts.reduce<Record<string, number>>((acc, p) => {
    acc[p.data.category] = (acc[p.data.category] || 0) + 1;
    return acc;
  }, {});
}

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

export const isoDate = (date: Date) => date.toISOString().split("T")[0];

// ~200 słów/min — wystarczająco dokładne dla etykiety "x min czytania".
export const readingTime = (body: string) =>
  Math.max(1, Math.ceil(body.trim().split(/\s+/).length / 200));

export const SITE = "https://www.artkuchnie.pl";
