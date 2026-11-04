# Fonts

| File | Family | Weights | Source |
|---|---|---|---|
| `bodoni-moda-latin.woff2` | Bodoni Moda | 400–600 (variable) | Google Fonts, self-hosted by `next/font` |
| `jost-latin.woff2` | Jost | 400–600 (variable) | Google Fonts, self-hosted by `next/font` |

Both files are the latin subset (Latin-1 plus the punctuation the house
actually uses), pulled from the Next.js build so the design system and the
site are byte-identical.

The full subset set (latin-ext, vietnamese, cyrillic) ships inside the
Next.js build at `web/out/_next/static/media/` and is loaded automatically by
the site.

Licence: both families are open source under the SIL Open Font License 1.1.
