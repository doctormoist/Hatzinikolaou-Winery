// Produces a dist/ that opens straight from the filesystem (file://), with no
// server: browsers refuse ES modules over file://, and a crossorigin stylesheet
// link fails there too, so the built CSS/JS get inlined into each page.
import { readFileSync, writeFileSync, readdirSync } from "fs";
import path from "path";

const DIST = path.join(import.meta.dirname, "..", "dist");
const assets = path.join(DIST, "assets");

const files = readdirSync(assets);
const css = files.filter((f) => f.endsWith(".css")).map((f) => readFileSync(path.join(assets, f), "utf8")).join("\n");
const js = files.filter((f) => f.endsWith(".js")).map((f) => readFileSync(path.join(assets, f), "utf8")).join("\n");

for (const file of readdirSync(DIST).filter((f) => f.endsWith(".html"))) {
  const p = path.join(DIST, file);
  let html = readFileSync(p, "utf8");

  html = html
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<link rel="stylesheet" crossorigin href="\.\/assets\/[^"]+\.css"\s*\/?>/g, `<style>${css}</style>`)
    .replace(/<script type="module" crossorigin src="\.\/assets\/[^"]+\.js"><\/script>/g, `<script>${js}</script>`);

  writeFileSync(p, html);
  console.log("inlined", file);
}
