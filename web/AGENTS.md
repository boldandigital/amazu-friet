# Amazú Friet — instructions for agents working in this folder

This folder is a **Next.js 15 static-export app**. It is not a static HTML mockup.

## What to edit

| File | Contains |
|---|---|
| `app/page.tsx` | sections, markup, layout |
| `app/globals.css` | design tokens, colours, type, spacing |
| `app/layout.tsx` | fonts, metadata, `lang` |
| `lib/content.ts` | every string and all product data (single source of truth) |
| `public/**` | images, fonts, video |

## Hard rules

1. **Never create a new `.html` file in this project.** No standalone prototype, no landing page, no "artifact", no extra draft. The only HTML file here is the generated `preview.html`, which is a build output and must not be edited by hand.
2. **Do not run `npm`, `npm run build`, `git`, or any shell pipeline.** A background watcher (`scripts/watch-preview.mjs`, run by launchd) runs `next build` and regenerates `preview.html` automatically after every edit you make. Just write the files.
3. **Keep all copy in Brazilian Portuguese.** Brand rules from the design system: no em-dashes, no exclamation marks, no invented health or sourcing claims, no fabricated social proof, real prices and weights only.
4. **Colours and type come from the design system** in `opendesign/design-systems/amazu/` — Bodoni Moda + Jost, plum `#411a3b` canvas, gold `#e2b872` accent, `#efc985` text, radius 2px, 4px grid. Do not introduce new tokens or a light theme.
5. One primary CTA per view. Flat gold only, no gradients, glow or glitter.

## After you edit

State which files you changed and what the change was. The preview reloads from disk.
