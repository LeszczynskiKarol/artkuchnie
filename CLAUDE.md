# artkuchnie.pl — instrukcje dla AI piszącego treści

Strona firmowa **Art Kuchnie Toruń** — kuchnie na wymiar (projekt, produkcja,
montaż). Część grupy Meble System. Astro 4, statyczny build, deploy na S3 +
CloudFront (`./deploy.sh`).

## Gdzie piszemy

- Kolekcja bloga: `src/content/blog/` (Astro content collection, `type: "content"`).
- Nazwa pliku = slug: małe litery, bez polskich znaków, myślniki, `.md`.
- Publiczny URL wpisu: `https://www.artkuchnie.pl/blog/<slug>/`.
- Routing: `src/pages/blog/index.astro` (lista), `src/pages/blog/[slug].astro`
  (wpis), `src/pages/blog/kategoria/[kategoria].astro` (kategoria).
  Stron **nie trzeba** dopisywać — generują się z kolekcji.

## Frontmatter (schemat: `src/content/config.ts`)

```yaml
---
title: "Tytuł artykułu"
description: "Meta description, 140-160 znaków, z frazą kluczową"
publishDate: 2026-08-31          # data, nie string w cudzysłowie
updateDate: 2026-08-31           # opcjonalne
author: "Art Kuchnie Toruń"
category: "Poradniki"            # DOKŁADNIE jedna z listy niżej
tags: ["kuchnie na wymiar", "Toruń"]
image: "/blog/<slug>.jpg"        # opcjonalne, plik w public/blog/
imageAlt: "Opis zdjęcia"
featured: false                  # true wyróżnia wpis na górze listy
draft: false
---
```

**Kategorie (enum — inna wartość wywala build):**
`Poradniki`, `Materiały i fronty`, `Blaty i wykończenia`, `Aranżacje i trendy`,
`Ergonomia i funkcjonalność`, `Koszty i wycena`, `Realizacje`.

## Czego oczekujemy od tekstu

- Po polsku, konkretnie, bez korporacyjnej waty i rozbiegów typu „w dzisiejszych
  czasach". Piszemy jak stolarz, który tłumaczy klientowi, a nie jak broszura.
- Perspektywa wykonawcy: ceny w złotówkach, realia rynku kujawsko-pomorskiego,
  konkretne materiały (płyta laminowana, MDF lakierowany, akryl, fornir, HPL) —
  to są nasze usługi i mamy o nich mówić z pierwszej ręki.
- Lokalność ma sens tam, gdzie faktycznie coś wnosi (Toruń, Bydgoszcz,
  Włocławek, Grudziądz). Nie upychamy „Toruń" w co drugim zdaniu.
- Nagłówki H2/H3, listy, tabele porównawcze przy cenach i materiałach.
- Bez wymyślonych danych. Ceny i normy — z researchu, z podaniem okresu
  („stan na sierpień 2026").

## Linkowanie wewnętrzne

2-3 linki na artykuł, naturalnie w zdaniu. Dostępne cele:

- `/kuchnie/plyta-laminowana/`, `/kuchnie/mdf-lakierowany/`,
  `/kuchnie/akrylowe/`, `/kuchnie/akryl-lakier-plyta/`, `/kuchnie/fornir/`,
  `/kuchnie/blaty-hpl/`
- `/realizacje/`, `/kontakt/`
- inne wpisy bloga: `/blog/<slug>/`

Strona wpisu sama dokleja CTA na kontakt i sekcję powiązanych artykułów —
**nie kończ tekstu akapitem reklamowym ani wezwaniem do kontaktu**, bo się
zdubluje z szablonem.

## Czego nie robić

- Nie dotykaj `src/data/portfolio.ts` ani `src/data/realizations.ts` —
  to dane galerii, nie treść blogowa.
- Nie uruchamiaj `./deploy.sh` — deploy odpala publisher po sprawdzeniu buildu.
- Sprawdzarka cytowań (cytado.com) **nie pasuje** do tematyki tej strony —
  nie wstawiaj tam linku.
