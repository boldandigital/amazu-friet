# Amazú Friet

The house site and design system for **Amazú Friet**, the sweet-potato friet
house in Belém, Pará. Belgian double-fry technique, Brazilian sweet potato,
Amazonian ingredients.

```
web/                 Next.js 15 site (the deployable app)
opendesign/
  design-systems/    the brand system: DESIGN.md, SKILL.md, tokens, assets
  designs/           the Open Design artefact
assets (root)        the original photography and brand files
```

## The site

`web/` is a Next.js 15 App Router app in TypeScript with CSS custom
properties. It builds to a static export, so the same build serves Vercel and
the Open Design preview.

```bash
cd web
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into ./out
```

The copy is Brazilian Portuguese. Product names, prices and the brand line are
the real thing, transcribed from the WhatsApp cardápio.

Two environment variables are optional. Without them the order buttons fall
back to on-page anchors, so the build never points at a link that does not
exist yet:

| Variable | Default |
|---|---|
| `NEXT_PUBLIC_ORDER_URL` | `#order` |
| `NEXT_PUBLIC_MENU_URL` | `#cardapio` |

Full details in [`web/README.md`](web/README.md).

## The brand system

`opendesign/design-systems/amazu/` carries the canonical identity: plum
canvas, gold foreground, Bodoni Moda over Jost, one permanent appearance. The
same system is registered in Open Design as `amaz-friet-design-system-f715c9`.

## Open Design

`web/` is the Open Design project. Code mode shows the React source, and the
preview renders `web/preview.html`, a generated self-contained copy of the
build. Regenerate it after every build:

```bash
cd web && npm run build && node ../build-od-artifact.mjs
```

## Copyright

Brand, photography and copy belong to Amazú Friet.
