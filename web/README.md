# Amazú Friet — website

Next.js 15 (App Router) + React 19 + TypeScript, CSS custom properties, no
Tailwind. Static export (`output: 'export'`), so one build produces both the
Vercel deployment and the Open Design preview.

The site copy is Brazilian Portuguese. Product names, prices and the brand
line are the real thing, transcribed from the WhatsApp cardápio.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into ./out
npm run start   # serve the export
```

## Environment

Both are optional. Without them the order buttons fall back to on-page
anchors, so the build never points at a link that does not exist yet.

| Variable | Default | Used by |
|---|---|---|
| `NEXT_PUBLIC_ORDER_URL` | `#order` | "Pedir no WhatsApp" button |
| `NEXT_PUBLIC_MENU_URL` | `#cardapio` | "Ver o cardápio" button |

Set them in `.env.local` (git-ignored) or in the Vercel project settings once
the real WhatsApp number and menu link are confirmed.

## Structure

```
app/layout.tsx        fonts (next/font/google), metadata, html shell
app/page.tsx          every section, in order
app/globals.css       design tokens + all component styles
lib/content.ts        all copy and product data in one place
public/brand/         seal, lockup, cart icon
public/images/        product photography, hero stills
public/video/         hero loop
scripts/              Open Design preview tooling
preview.html          generated Open Design preview entry (git-ignored)
```

## Sections

| Anchor | Section |
|---|---|
| `#manifesto` | Manifest statement, "Friet não é acompanhamento. É prato." |
| `#cardapio` | The range, four products with real prices |
| `#raiz` | Raízes da Floresta, with the hero loop |
| `#terra` | Da terra à mesa, three steps |
| `#ingredientes` | O que vai dentro |
| `#order` | Closing order block |

## Brand

The type and colour follow the registered Open Design brand system
`amaz-friet-design-system-f715c9` (Bodoni Moda over Jost, plum canvas, gold
foreground). The full system lives in
`../opendesign/design-systems/amazu/`.

The hero recreates the Figma composition node for node: same frame geometry,
same wordmark position, same Explore button, same two product crops. Two
things were deliberately changed from the Figma file, because the Figma file
was a rough mock rather than the brand:

1. Type and colour come from the brand system, not from the mock's Afacad and
   pure black.
2. The Explore button fill is opaque. In the mock it was translucent and the
   paper boat read through it.

## Open Design

This folder is the Open Design project. The app shows the React source tree
(`app/`, `lib/`, `public/`) in Code mode, so sections can be changed or
removed inside Open Design.

Open Design has no dev server, so the preview renders the built output.
`preview.html` is a generated, fully self-contained copy of the export (CSS,
webfonts and images inlined) and it is the project entry file.

The Open Design project terminal opens in this folder. Run one of these there:

```bash
npm run build:preview   # build once, then refresh the preview
npm run watch:preview   # rebuild on every source change
```

`build:preview` runs `next build` and then `scripts/build-od-artifact.mjs`,
which inlines the CSS, the webfonts and the images into a single
`preview.html`. The preview is served with `no-store`, so reloading it in
Open Design shows the new build straight away.

## Notes

- Prices are the real menu prices: R$ 29,90, R$ 32,90 and R$ 12,00. Queijo
  Marajó has no published price, so it says so.
- No scroll-reveal animation. The page has to read without scrolling, in
  print, and in the Open Design renderer.
- No em-dashes and no exclamation marks in body copy. That is a brand rule.
