// Dane realizacji - warstwa kategorii + filtrowania galerii /realizacje/.
//
// JEDNO zrodlo URL-i galerii to teraz src/data/portfolio.ts (standardowy schemat
// { src, alt?, category? }, gotowy pod globalne portfolio). Ponizsza tablica
// `realizations` jest z niego WYPROWADZANA (nie duplikuj URL-i tutaj) - zachowuje
// dokladnie ten sam ksztalt { id, imageUrl, categoryId } i kolejnosc, ktorego
// uzywa strona /realizacje/ (filtry kategorii, paginacja, lightbox).

import { portfolio } from "./portfolio";

export interface RealizationCategory {
  id: number;
  name: string;
  slug: string;
  order: number;
}

export interface Realization {
  id: number;
  imageUrl: string;
  categoryId: number;
}

export const realizationCategories: RealizationCategory[] = [
  { id: 1, name: "Płyta laminowana", slug: "plyta-laminowana", order: 1 },
  { id: 2, name: "Akryl", slug: "akryl", order: 2 },
  {
    id: 3,
    name: "Akryl, lakier + płyta",
    slug: "akryl-lakier-plyta",
    order: 3,
  },
  { id: 4, name: "Blaty HPL", slug: "blaty-hpl", order: 4 },
  { id: 5, name: "MDF lakierowany", slug: "mdf-lakierowany", order: 5 },
  { id: 6, name: "Z fornirem", slug: "z-fornirem", order: 6 },
];

// Nazwa kategorii (z portfolio.ts) -> id kategorii (metadane wyzej).
const categoryNameToId = new Map(
  realizationCategories.map((c) => [c.name, c.id])
);

// Wyprowadzenie z JEDNEGO zrodla (portfolio). id = pozycja w tablicy (1..N),
// tak jak w oryginalnej, wpisanej na sztywno liscie.
export const realizations: Realization[] = portfolio.map((img, i) => ({
  id: i + 1,
  imageUrl: img.src,
  categoryId: categoryNameToId.get(img.category ?? "") ?? 0,
}));

// Funkcje pomocnicze
export function getRealizationsByCategory(
  categoryId: number | null
): Realization[] {
  if (categoryId === null) {
    return realizations;
  }
  return realizations.filter((r) => r.categoryId === categoryId);
}

export function getCategoryById(id: number): RealizationCategory | undefined {
  return realizationCategories.find((c) => c.id === id);
}

export function getCategoryBySlug(
  slug: string
): RealizationCategory | undefined {
  return realizationCategories.find((c) => c.slug === slug);
}
