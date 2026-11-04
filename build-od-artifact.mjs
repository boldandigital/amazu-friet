/**
 * Builds a single self-contained index.html for the Open Design design artifact.
 *
 * Source : Next.js static export  ->  /Users/lars/.cache/opencode/amazu/web/out
 * Target : /Users/lars/.cache/opencode/amazu/od/index.html
 *
 * Everything is inlined (CSS, woff2 fonts, images) so the artifact renders
 * identically no matter how Open Design serves it. The hero video keeps its
 * <video> element but loses the mp4 source, so it falls back to the poster
 * frame (keeps the exact layout without a 2 MB payload).
 */
import fs from "node:fs";
import path from "node:path";

const OUT = "/Users/lars/.cache/opencode/amazu/web/out";
const DEST = "/Users/lars/.cache/opencode/amazu/od/index.html";

const MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".woff2": "font/woff2",
};

const dataUri = (rel) => {
  const file = path.join(OUT, rel.replace(/^\//, ""));
  const buf = fs.readFileSync(file);
  const ext = path.extname(file).toLowerCase();
  return `data:${MIME[ext] || "application/octet-stream"};base64,${buf.toString("base64")}`;
};

let html = fs.readFileSync(path.join(OUT, "index.html"), "utf8");

// ---- 1. CSS -> <style> -------------------------------------------------
const cssDir = path.join(OUT, "_next/static/css");
const cssFiles = fs.existsSync(cssDir) ? fs.readdirSync(cssDir).filter((f) => f.endsWith(".css")) : [];
let css = cssFiles.map((f) => fs.readFileSync(path.join(cssDir, f), "utf8")).join("\n");

// fonts inside the CSS -> data URIs
css = css.replace(/url\(\s*["']?\/?(_next\/static\/media\/[^"')]+)["']?\s*\)/g, (_m, rel) => {
  return `url("${dataUri("/" + rel)}")`;
});

html = html.replace(
  /<link[^>]+rel="stylesheet"[^>]*>/g,
  `<style>${css}</style>`
);

// ---- 2. drop preload + script tags ------------------------------------
html = html.replace(/<link[^>]+rel="preload"[^>]*>/g, "");
html = html.replace(/<script[^>]*><\/script>/g, "");
html = html.replace(/<script[^>]*src="[^"]*"[^>]*><\/script>/g, "");

// ---- 3. images -> data URIs -------------------------------------------
html = html.replace(/(src|poster)="\/((?:images|brand)\/[^"]+)"/g, (_m, attr, rel) => {
  return `${attr}="${dataUri("/" + rel)}"`;
});

// ---- 4. video: drop the mp4 source, keep the poster frame --------------
html = html.replace(/src="\/video\/[^"]+"/g, "");
html = html.replace(/\sautoPlay=""/g, " ").replace(/\sloop=""/g, " ");

// ---- 5. tidy ----------------------------------------------------------
html = html.replace(/<meta name="next-size-adjust" content=""\/>/g, "");
html = html.replace(/<!--[^>]*-->/g, "");

fs.mkdirSync(path.dirname(DEST), { recursive: true });
fs.writeFileSync(DEST, html);

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
console.log(`written ${DEST}  ${kb(Buffer.byteLength(html))}`);
console.log(`  css files inlined : ${cssFiles.join(", ")}`);
console.log(`  remaining refs    : ${(html.match(/(?:src|href|srcset|poster)="\/(?!_next\/static\/media)[^"]{0,60}/g) || []).join(" | ") || "none"}`);
