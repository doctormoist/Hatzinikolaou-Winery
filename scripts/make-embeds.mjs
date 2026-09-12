// Downscaled media for the single-file build; kept small since each byte is
// base64-inflated into the HTML.
import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import path from "path";

const SRC = path.join(import.meta.dirname, "..", ".imgsrc");
const OUT = path.join(import.meta.dirname, "..", ".build", "embed");
mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const name = path.basename(file, path.extname(file));
  await sharp(path.join(SRC, file))
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 52 })
    .toFile(path.join(OUT, `${name}.webp`));
}
console.log("embed images written to", OUT);
console.log("note: .build/embed/hero.webm is produced by the ffmpeg step in the README");
