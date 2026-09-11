import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import path from "path";

const SRC = new URL(".", import.meta.url).pathname;
const OUT = path.join(SRC, "..", "public", "img");
mkdirSync(OUT, { recursive: true });

// [name, widths, quality]
const SIZES = {
  hero: [2000, 1200, 800],
  full: [1600, 1000, 700],
  thumb: [640, 400],
};

function sizeClassFor(name) {
  if (["hero_cliff_beach", "pool_infinity_mauritius", "pool_infinity_gambia"].includes(name)) return "hero";
  return "full";
}

const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const name = path.basename(file, path.extname(file));
  const input = path.join(SRC, file);
  const widths = SIZES[sizeClassFor(name)];
  for (const w of widths) {
    const img = sharp(input).resize({ width: w, withoutEnlargement: true });
    await img.clone().webp({ quality: 72 }).toFile(path.join(OUT, `${name}-${w}.webp`));
    await img.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(OUT, `${name}-${w}.jpg`));
  }
  // thumb for gallery grid / cards
  const t = sharp(input).resize({ width: 700, height: 500, fit: "cover" });
  await t.clone().webp({ quality: 70 }).toFile(path.join(OUT, `${name}-thumb.webp`));
  await t.clone().jpeg({ quality: 75, mozjpeg: true }).toFile(path.join(OUT, `${name}-thumb.jpg`));
  console.log("done", name);
}
