// Builds one self-contained .html holding every page, with all CSS, JS, images
// and video embedded as data URIs.
//
// Why: opening the multi-file build on a phone usually goes through a
// content:// URI, where relative paths like img/foo.jpg cannot resolve, so the
// page renders with no media. A single file has nothing left to resolve.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import path from "path";

const ROOT = path.join(import.meta.dirname, "..");
const EMBED = path.join(ROOT, ".build", "embed");
const OUT = path.join(ROOT, "dist", "infinity-villas-single-file.html");

if (!existsSync(EMBED)) {
  console.error("Missing .build/embed — see the build:single script in package.json.");
  process.exit(1);
}

const dataUri = (file, mime) =>
  `data:${mime};base64,${readFileSync(path.join(EMBED, file)).toString("base64")}`;

const images = Object.fromEntries(
  readdirSync(EMBED)
    .filter((f) => f.endsWith(".webp"))
    .map((f) => [path.basename(f, ".webp"), dataUri(f, "image/webp")])
);
const video = dataUri("hero.webm", "video/webm");

const PAGES = [
  ["index.html", "home"],
  ["gallery.html", "gallery"],
  ["faq.html", "faq"],
  ["contact.html", "contact"],
  ["wedding-planning.html", "wedding-planning"],
  ["reservation.html", "reservation"],
];

const grab = (html, re) => (html.match(re) || [])[1] || "";

const first = readFileSync(path.join(ROOT, PAGES[0][0]), "utf8");
const head = grab(first, /<head>([\s\S]*?)<\/head>/).replace(/<link rel="icon"[\s\S]*?\/>/, "");
const headerHero = grab(first, /(<header class="site-header on-hero">[\s\S]*?<\/header>)/);
const headerSolid = grab(
  readFileSync(path.join(ROOT, "gallery.html"), "utf8"),
  /(<header class="site-header solid">[\s\S]*?<\/header>)/
);
const menu = grab(first, /(<div class="menu-overlay">[\s\S]*?<\/div>\s*\n)/);
const footer = grab(first, /(<footer class="site-footer">[\s\S]*?<\/footer>)/);

const sections = PAGES.map(([file, id]) => {
  const html = readFileSync(path.join(ROOT, file), "utf8");
  const body = grab(html, /<!--PAGE-START-->([\s\S]*?)<!--PAGE-END-->/);
  return `<div class="page" data-page="${id}"${id === "home" ? "" : ' hidden'}>\n${body}\n</div>`;
}).join("\n\n");

const css = readFileSync(path.join(ROOT, "src", "style.css"), "utf8");
const js = readFileSync(path.join(ROOT, "src", "main.js"), "utf8").replace('import "./style.css";', "");

// hash routing between the embedded pages, replacing real navigation
const router = `
(function () {
  var pages = document.querySelectorAll('.page');
  var heroHeader = document.querySelector('.site-header.on-hero');
  var solidHeader = document.querySelector('.site-header.solid');

  function show(id) {
    var found = false;
    pages.forEach(function (p) {
      var match = p.dataset.page === id;
      p.hidden = !match;
      if (match) found = true;
    });
    if (!found) return show('home');
    var isHome = id === 'home';
    heroHeader.hidden = !isHome;
    solidHeader.hidden = isHome;
    document.body.classList.toggle('inner-page', !isHome);
    window.scrollTo(0, 0);
    document.querySelectorAll('.menu-overlay a').forEach(function (a) {
      a.classList.toggle('active', a.dataset.target === id);
    });
  }

  function idFor(href) {
    if (!href) return null;
    if (href === 'index.html' || href === './index.html') return 'home';
    var m = href.match(/^\\.?\\/?([a-z-]+)\\.html/);
    return m ? m[1] : null;
  }

  document.querySelectorAll('a[href$=".html"], a[href*=".html?"]').forEach(function (a) {
    var id = idFor(a.getAttribute('href'));
    if (!id) return;
    a.dataset.target = id;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      location.hash = id;
      show(id);
      document.querySelector('.menu-overlay').classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('hashchange', function () { show(location.hash.slice(1) || 'home'); });
  show(location.hash.slice(1) || 'home');
})();
`;

let html = `<!doctype html>
<html lang="en">
<head>${head}
<style>${css}
.page[hidden] { display: none !important; }
.site-header[hidden] { display: none !important; }
body.inner-page { padding-top: 0; }
</style>
</head>
<body>
${headerHero}
${headerSolid}
${menu}

${sections}

${footer}
<script>${js}
${router}</script>
</body>
</html>
`;

// swap every media reference for its embedded copy
html = html.replace(/(?:\.\/)?img\/([a-z_0-9]+)-\d+\.(?:jpg|webp)/g, (m, name) => images[name] || m);
html = html.replace(/(?:\.\/)?video\/hero\.(?:webm|mp4)/g, video);
// the mp4 <source> now duplicates the webm one; drop it
html = html.replace(/<source src="data:video\/webm[^"]*" type="video\/mp4" \/>/g, "");

writeFileSync(OUT, html);
console.log("wrote", OUT, (html.length / 1e6).toFixed(1) + " MB");
