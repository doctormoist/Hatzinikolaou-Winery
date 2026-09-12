import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import path from "path";

const SRC = new URL(".", import.meta.url).pathname;
const OUT = path.join(SRC, "..", "public", "img");
mkdirSync(OUT, { recursive: true });

// every image gets the same widths so any page can reference any size
const WIDTHS = [2000, 1600, 1200, 1000, 700];

const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const name = path.basename(file, path.extname(file));
  const input = path.join(SRC, file);
  for (const w of WIDTHS) {
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
