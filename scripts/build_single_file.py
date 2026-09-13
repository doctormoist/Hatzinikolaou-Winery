#!/usr/bin/env python3
"""Builds a single self-contained HTML file with the whole site inlined
(CSS, JS, logo, and every page as a hash-switched section) so it can be
opened directly via file:// with no server. Reuses the exact same page
content as build_pages.py so the two never drift.

Run from the repo root: python3 scripts/build_single_file.py
Output: hatzinikolaou-winery-all-in-one.html
"""
import base64
import os
import re

import build_pages as bp

ROOT = bp.ROOT

with open(os.path.join(ROOT, "assets", "site.css"), encoding="utf-8") as f:
    CSS = f.read()

with open(os.path.join(ROOT, "assets", "logo.png"), "rb") as f:
    LOGO_B64 = base64.b64encode(f.read()).decode()

LOGO_DATA_URI = f"data:image/png;base64,{LOGO_B64}"

# Extra CSS just for the single-file section-switching behavior.
EXTRA_CSS = """
.page { display: none; }
.page.is-active { display: block; }
"""


def slug(filename):
    return filename[:-5]  # strip ".html"


# Build the ordered list of (id, nav_label_or_None, title, description, body)
pages = []

home_title, home_desc = "Hatzinikolaou Winery", "A family winery on Kos, Greece, making natural wines with minimum intervention."
pages.append(("index", "Home", home_title, home_desc, bp.home_body))

content_pages = [
    ("philosophy", "Our Philosophy", bp.philosophy_body,
     "Our Philosophy — Hatzinikolaou Winery",
     "Natural wines with minimum intervention: how Hatzinikolaou Winery makes wine, from unwatered grapes to natural corks."),
    ("history", "History", bp.history_body,
     "History — Hatzinikolaou Winery",
     "How our grandfather Tony Hatzinikolaou discovered and revived the Black Lady grape, once considered extinct."),
    ("geography", "Geography", bp.geography_body,
     "Geography — Hatzinikolaou Winery",
     "Horafa: our hillside vineyard on the northern slope of Mount Dikaios, Kos."),
    ("ecology", "Biology &amp; Ecology", bp.ecology_body,
     "Biology & Ecology — Hatzinikolaou Winery",
     "Our grape varieties, unwatered yields, vineyard wildlife, and zero-waste, solar-powered approach."),
    ("wines", "Wines", bp.wines_body,
     "Wines — Hatzinikolaou Winery",
     "Platanaki Pink, Platanaki Red, Black Lady, and Asfendiano — the wines of Hatzinikolaou Winery, Kos."),
    ("eshop", "Eshop", bp.eshop_body,
     "Eshop — Hatzinikolaou Winery",
     "Order Hatzinikolaou Winery wines directly by email. Shipping within the EU."),
    ("contact", "Contact", bp.contact_body,
     "Contact — Hatzinikolaou Winery",
     "Visit or contact Hatzinikolaou Winery on Kos: address, phone, and email."),
]
for pid, label, body, title, desc in content_pages:
    pages.append((pid, label, title, desc, body))

for fname, (n_title, n_desc, n_body) in bp.NUTRITION_PAGES:
    pages.append((slug(fname), None, n_title, n_desc, n_body))

NAV_IDS = {"index", "philosophy", "history", "geography", "ecology", "wines", "eshop", "contact"}


def rewrite_links(html):
    """Point internal .html links at #hash sections instead of files, and
    swap the logo <picture> markup for a plain inlined <img>."""
    html = re.sub(r'href="([a-z0-9-]+)\.html"', r'href="#\1"', html)
    html = re.sub(
        r'<picture>\s*<source srcset="assets/logo\.webp"[^>]*>\s*'
        r'<img([^>]*?)src="assets/logo\.png"([^>]*)>\s*</picture>',
        lambda m: f'<img{m.group(1)}src="{LOGO_DATA_URI}"{m.group(2)}>',
        html,
    )
    return html


nav_links = "\n".join(
    f'        <li><a href="#{pid}" data-page="{pid}">{label}</a></li>'
    for pid, label, *_ in pages if label
)

sections_html = []
for pid, label, title, desc, body in pages:
    body = rewrite_links(body)
    sections_html.append(f'  <section class="page{" is-active" if pid == "index" else ""}" id="page-{pid}" data-title="{title}" data-description="{desc}">\n{body}\n  </section>')

logo_img_nav = f'<img src="{LOGO_DATA_URI}" alt="Hatzinikolaou Winery" width="114" height="42">'

HTML = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{home_title}</title>
  <meta name="description" content="{home_desc}">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%234a2545'/%3E%3Ctext x='32' y='44' font-family='Georgia,serif' font-size='34' fill='%23faf6f0' text-anchor='middle'%3EH%3C/text%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
  <style>
{CSS}
{EXTRA_CSS}
  </style>
</head>
<body>
  <a class="skip-link ui" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="site-header__bar">
      <a class="site-header__brand" href="#index" data-page="index">
        {logo_img_nav}
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav class="site-nav" id="site-nav" aria-label="Primary">
        <ul style="list-style:none;margin:0;padding:0;display:contents">
{nav_links}
        </ul>
      </nav>
    </div>
  </header>
  <main id="main">
{chr(10).join(sections_html)}
  </main>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div>
        <div class="site-footer__brand">Hatzinikolaou Winery</div>
        <div>6th Km Eparxiakis Kos, Kos 85300, Greece</div>
      </div>
      <div>
        <div><a href="tel:+302242068921">+30 22420 68921</a></div>
        <div><a href="mailto:hatzinikolaouwinery@gmail.com">hatzinikolaouwinery@gmail.com</a></div>
      </div>
      <div class="site-footer__legal">Platanaki O.E.<br>&copy; Hatzinikolaou Winery</div>
    </div>
  </footer>
  <script>
    (function () {{
      var toggle = document.querySelector('.nav-toggle');
      var header = document.querySelector('.site-header');
      if (toggle && header) {{
        toggle.addEventListener('click', function () {{
          var open = header.classList.toggle('nav-open');
          toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        }});
      }}

      var pages = Array.prototype.slice.call(document.querySelectorAll('.page'));
      var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-page]'));

      function showPage(id) {{
        var found = false;
        pages.forEach(function (el) {{
          var match = el.id === 'page-' + id;
          el.classList.toggle('is-active', match);
          if (match) found = true;
        }});
        if (!found) {{
          var home = document.getElementById('page-index');
          if (home) home.classList.add('is-active');
          id = 'index';
        }}
        navLinks.forEach(function (a) {{
          if (a.tagName === 'A' && a.closest('.site-nav')) {{
            if (a.getAttribute('data-page') === id) {{
              a.setAttribute('aria-current', 'page');
            }} else {{
              a.removeAttribute('aria-current');
            }}
          }}
        }});
        var section = document.getElementById('page-' + id);
        var docTitle = section ? section.getAttribute('data-title') : null;
        if (docTitle) document.title = docTitle;
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        window.scrollTo(0, 0);
      }}

      function currentId() {{
        return (location.hash || '#index').slice(1);
      }}

      window.addEventListener('hashchange', function () {{
        showPage(currentId());
      }});

      showPage(currentId());
    }})();
  </script>
</body>
</html>
"""

out_path = os.path.join(ROOT, "hatzinikolaou-winery-all-in-one.html")
with open(out_path, "w", encoding="utf-8") as f:
    f.write(HTML)
print("wrote", out_path, "(", len(HTML), "bytes )")
