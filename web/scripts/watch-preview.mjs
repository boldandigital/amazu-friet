/**
 * Rebuilds preview.html whenever the React source changes.
 *
 * Open Design cannot run a build on its own, but it has a project terminal
 * that opens in the app folder. Run this there and every edit to app/ or lib/
 * refreshes the Open Design preview.
 *
 *   npm run watch:preview
 */
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const WEB = path.resolve(HERE, "..");
const WATCH_DIRS = ["app", "lib"].map((d) => path.join(WEB, d));

const NPM = process.env.npm_execpath
  ? [process.execPath, process.env.npm_execpath]
  : ["npm"];

let timer = null;
let running = false;
let queued = false;

function build() {
  if (running) {
    queued = true;
    return;
  }
  running = true;
  console.log("[watch] building...");
  const child = spawn(NPM[0], [...NPM.slice(1), "run", "build:preview"], {
    cwd: WEB,
    stdio: "inherit",
    env: { ...process.env, PATH: `${path.dirname(process.execPath)}:${process.env.PATH || ""}` },
  });
  child.on("close", (code) => {
    running = false;
    console.log(`[watch] build finished (exit ${code})`);
    if (queued) {
      queued = false;
      build();
    }
  });
}

function schedule() {
  clearTimeout(timer);
  timer = setTimeout(build, 400);
}

for (const dir of WATCH_DIRS) {
  if (!fs.existsSync(dir)) continue;
  fs.watch(dir, { recursive: true }, (_event, filename) => {
    if (!filename) return;
    schedule();
  });
}

console.log(`[watch] watching ${WATCH_DIRS.join(", ")}`);
console.log("[watch] edit anything and the Open Design preview refreshes");
build();
