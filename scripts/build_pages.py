#!/usr/bin/env python3
"""One-off generator for the Hatzinikolaou Winery static pages.
Run from the repo root: python3 scripts/build_pages.py
Not a build step the site depends on at runtime — plain HTML files are
committed directly. This script just avoids hand-duplicating the shared
header/nav/footer across every page.
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

NAV = [
    ("index.html", "Home"),
    ("philosophy.html", "Our Philosophy"),
    ("history.html", "History"),
    ("geography.html", "Geography"),
    ("ecology.html", "Biology &amp; Ecology"),
    ("wines.html", "Wines"),
    ("eshop.html", "Eshop"),
    ("contact.html", "Contact"),
]

PHOTO_ICON = '''<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10.5" r="1.7"/><path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.1 0L4 19"/></svg>'''


def photo_placeholder(label):
    return f'''<div class="photo-placeholder">{PHOTO_ICON}<div>{label}</div></div>'''


def shell(active_href, title, description, body, extra_head=""):
    current_attr = ' aria-current="page"'
    nav_links = "\n".join(
        f'        <li><a href="{href}"{current_attr if href == active_href else ""}>{label}</a></li>'
        for href, label in NAV
    )
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%234a2545'/%3E%3Ctext x='32' y='44' font-family='Georgia,serif' font-size='34' fill='%23faf6f0' text-anchor='middle'%3EH%3C/text%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/site.css">
{extra_head}</head>
<body>
  <a class="skip-link ui" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="site-header__bar">
      <a class="site-header__brand" href="index.html">
        <picture>
          <source srcset="assets/logo.webp" type="image/webp">
          <img src="assets/logo.png" alt="Hatzinikolaou Winery" height="42">
        </picture>
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
{body}
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
  <script src="assets/site.js"></script>
</body>
</html>
"""


def write(path, content):
    with open(os.path.join(ROOT, path), "w", encoding="utf-8") as f:
        f.write(content)
    print("wrote", path)


# ---------------------------------------------------------------- HOME

sections = [
    ("philosophy.html", "Our Philosophy", "Minimum intervention, wild fermentation, and grapes we never water."),
    ("history.html", "History", "How our grandfather Tony saved the Black Lady grape from extinction."),
    ("geography.html", "Geography", "Horafa: a windswept hillside vineyard on Mount Dikaios."),
    ("ecology.html", "Biology &amp; Ecology", "Four grape varieties, zero waste, and a vineyard shared with hares, peacocks, and our horse Kanello."),
    ("wines.html", "Wines", "Platanaki Pink, Platanaki Red, Black Lady, and Asfendiano."),
    ("eshop.html", "Eshop", "Order directly from us &mdash; we currently ship across the EU."),
    ("contact.html", "Contact", "Find us on the road between Kos Town and Zipari."),
]

section_index_html = "\n".join(
    f'''      <a class="section-index__item" href="{href}">
        <span class="section-index__num ui">0{i}</span>
        <span class="section-index__body">
          <h2>{label}</h2>
          <p>{teaser}</p>
        </span>
      </a>'''
    for i, (href, label, teaser) in enumerate(sections, start=1)
)

home_body = f'''    <div class="home-hero">
      <h1 class="sr-only">Hatzinikolaou Winery</h1>
      <picture>
        <source srcset="assets/logo.webp" type="image/webp">
        <img class="brand-logo" src="assets/logo.png" alt="Hatzinikolaou Winery">
      </picture>
      <p class="place ui">Kos, Greece</p>
      <p class="lede">Natural wines, minimum intervention, and a grape once thought extinct.</p>
    </div>
    <nav class="section-index" aria-label="Site sections">
{section_index_html}
    </nav>'''

write("index.html", shell("index.html", "Hatzinikolaou Winery", "A family winery on Kos, Greece, making natural wines with minimum intervention.", home_body))

# ---------------------------------------------------------------- PHILOSOPHY

philosophy_body = f'''    <div class="page-hero">
      <h1>Our Philosophy</h1>
    </div>
    <div class="container prose">
      <p>Hatzinikolaou Winery makes natural wines with minimum intervention, using our own unwatered grapes. What does that mean in practice?</p>
      <ul>
        <li>The grape varieties have been especially selected for the local terroir.</li>
        <li>We do not water the grapes, and we avoid using fertilisers, pesticides, and the like.</li>
        <li>During vinification, the minimum amount of sulphides is used &mdash; and in many cases, none at all.</li>
        <li>We do not use enzymes, artificial yeast, colouring, sugar, water, or anything else. The only thing that goes into our vats is crushed grapes.</li>
        <li>We allow spontaneous fermentation with the wild, indigenous yeast from our own vineyard. No other additives are involved in the process.</li>
        <li>Once ready, our wine is covered with extra virgin olive oil from our own olive grove, for protection.</li>
        <li>It matures in oak barrels for six to twenty-four months.</li>
        <li>Most of the wines we produce &mdash; except the ros&eacute; &mdash; are unfiltered. This means they can look murky, but they have a stronger, fuller taste for it.</li>
        <li>We use natural ageing corks that last up to twenty years.</li>
        <li>Everything is done by hand, and we monitor every step of the process ourselves.</li>
        <li>We have the capacity to produce around 40,000 bottles a year &mdash; but we rarely make more than 5,000.</li>
      </ul>
      <p class="pull-note">Every bottle we produce is alive and has its own story. It has been hand-picked, caressed and nurtured in a family environment. We even play music to our wines, to keep them happy.</p>
      {photo_placeholder("Photo of the vineyard and production &mdash; coming soon")}
    </div>'''

write("philosophy.html", shell("philosophy.html", "Our Philosophy — Hatzinikolaou Winery", "Natural wines with minimum intervention: how Hatzinikolaou Winery makes wine, from unwatered grapes to natural corks.", philosophy_body))

# ---------------------------------------------------------------- HISTORY

history_body = f'''    <div class="page-hero">
      <h1>History</h1>
    </div>
    <div class="container prose">
      <p>Our story begins at the end of the last century, when our grandfather Tony (Antonis Hatzinikolaou) discovered a rare variety of grape in nearby Nisyros. It was the now-famous Black Lady (Mavrothilyko), which had been considered extinct. He decided to revive it, and dreamed of building a winery to promote the grape.</p>
      <p>The winery opened in August 2013 &mdash; but Tony never saw his dream come true. He died in an accident with his tractor in April of that year, while planting Black Lady vines. We kept his dream alive, and made sure to protect the grape he loved so much.</p>
      <p>The Black Lady grape is now safe from extinction. There are at least five more wineries that use it today, across four different islands. We have over 6,000 plants of our own, and the other vineyards have another two thousand between them. We have spent over 25 years constantly promoting the grape, and helping others discover and cultivate it.</p>
      {photo_placeholder("Photo of Anthony &ldquo;Tony&rdquo; Hatzinikolaou and family &mdash; coming soon")}
    </div>'''

write("history.html", shell("history.html", "History — Hatzinikolaou Winery", "How our grandfather Tony Hatzinikolaou discovered and revived the Black Lady grape, once considered extinct.", history_body))

# ---------------------------------------------------------------- GEOGRAPHY

geography_body = f'''    <div class="page-hero">
      <h1>Geography</h1>
    </div>
    <div class="container prose">
      <p>Our vineyard is located at &ldquo;Horafa&rdquo; (which simply means &ldquo;big field&rdquo; in Greek), a hillside on the northern slope of Mount Dikaios. Our winery itself is 1km downhill on the main road, between Kos Town and Zipari.</p>
      <p>Horafa is 7 hectares in total, though only about half of that is currently planted. The land is mostly chalky, with a mixture of clay and limestone in some parts. It is very windy, which helps the plants, and can also be humid, with winds bringing in moisture from the Aegean Sea.</p>
      <p>There is quite a lot of rainfall in the winter, and summer temperatures remain mild &mdash; conditions that particularly suit our varieties, especially the Black Lady and the Syrah.</p>
      {photo_placeholder("Photo of the Horafa vineyard &mdash; coming soon")}
    </div>'''

write("geography.html", shell("geography.html", "Geography — Hatzinikolaou Winery", "Horafa: our hillside vineyard on the northern slope of Mount Dikaios, Kos.", geography_body))

# ---------------------------------------------------------------- ECOLOGY

ecology_body = f'''    <div class="page-hero">
      <h1>Biology &amp; Ecology</h1>
    </div>
    <div class="container prose">
      <p>We currently grow four varieties of grape, all of them black: Merlot, Syrah (also known as Shiraz), Cabernet Sauvignon, and our own local grape, Mavrothilyko (Black Lady). We plan to add around 1,200 roots of Assyrtiko, a Greek white variety, in the near future.</p>
      <p>All of our grapes are unwatered. Our yield is around 400 kilos per 0.1 hectare &mdash; less than half of what is average for the region.</p>
      <p>Our vineyard is also home to various wild herbs, such as sage, oregano and capers, and to animals including hares, peacocks, tortoises, snakes, and our pet horse, Kanello. We also keep some chickens.</p>
      <p>We try to produce zero waste. Leftovers from production are given to a local distillery and turned into ouzo, while the leaves and other plant matter become compost or fodder for our animals. Our main source of electricity is the solar panels on top of our winery, and we plan to add some windmills as well.</p>
      {photo_placeholder("Photo of the vineyard&rsquo;s wildlife and solar panels &mdash; coming soon")}
    </div>'''

write("ecology.html", shell("ecology.html", "Biology & Ecology — Hatzinikolaou Winery", "Our grape varieties, unwatered yields, vineyard wildlife, and zero-waste, solar-powered approach.", ecology_body))

# ---------------------------------------------------------------- WINES

def wine_block(name, price, blend, abv, desc, nutrition_href):
    return f'''      <article class="wine">
        <div class="wine__head">
          <h2>{name}</h2>
          <span class="wine__price ui">&euro;{price}</span>
        </div>
        <p class="wine__meta">{blend} &middot; {abv}% ABV</p>
        <div class="wine__body">
          <p>{desc}</p>
          <a class="wine__nutrition-link" href="{nutrition_href}">Technical &amp; nutritional information &rarr;</a>
        </div>
      </article>'''

wines_html = "\n".join([
    wine_block(
        "Platanaki Pink", "14",
        "50% Cabernet Sauvignon, 50% Syrah", "13",
        "A dry ros&eacute; wine, quite strong for the style &mdash; partly because the grapes are unwatered, and partly because it is unfiltered. Best served chilled. Pairs well with chicken, pasta, salads, or even seafood.",
        "nutrition-platanaki-pink.html",
    ),
    wine_block(
        "Platanaki Red", "14",
        "At least 60% Black Lady, with Merlot and a little Syrah", "13",
        "A well-balanced dry red. Goes great with red meat, but can be enjoyed with a variety of dishes, or on its own. Serve at 14&deg;C. A great value-for-money wine we highly recommend.",
        "nutrition-platanaki-red.html",
    ),
    wine_block(
        "Black Lady", "29",
        "100% Black Lady grape", "13",
        "A complex dry red with a rich aftertaste &mdash; a taste of history, made entirely from our own unique grape. Enjoy it on its own, or with heavier meat dishes, game, or cold cuts. Serve at 14&deg;C.",
        "nutrition-black-lady.html",
    ),
    wine_block(
        "Asfendiano", "24",
        "Sweet dessert wine, no added sugar", "13",
        "Made from 100% grapes, with no added sugar or sweetener &mdash; its sweetness comes from boiling part of the must, which we call &ldquo;psimma.&rdquo; It tastes like caramel, and can be enjoyed chilled, warm, or even boiled as part of a Christmas Gl&uuml;hwein. It also works as a cocktail base, or paired with dark chocolate.",
        "nutrition-asfendiano.html",
    ),
])

wines_body = f'''    <div class="page-hero">
      <h1>Wines</h1>
      <p>All our wines are particularly strong, and in some cases overwhelming.</p>
    </div>
    <div class="container">
{wines_html}
    </div>'''

write("wines.html", shell("wines.html", "Wines — Hatzinikolaou Winery", "Platanaki Pink, Platanaki Red, Black Lady, and Asfendiano — the wines of Hatzinikolaou Winery, Kos.", wines_body))

# ---------------------------------------------------------------- ESHOP

eshop_body = '''    <div class="page-hero">
      <h1>Eshop</h1>
    </div>
    <div class="container prose" style="text-align:center">
      <p>If you would like to order any of our wines, please contact us directly and we can arrange transport and payment.</p>
      <p>For now, we only ship within the EU.</p>
      <p><a class="btn" href="mailto:hatzinikolaouwinery@gmail.com">Email us to order</a></p>
      <p class="footnote">Online ordering is something we're working on for the future &mdash; for now, every order is arranged personally by email.</p>
    </div>'''

write("eshop.html", shell("eshop.html", "Eshop — Hatzinikolaou Winery", "Order Hatzinikolaou Winery wines directly by email. Shipping within the EU.", eshop_body))

# ---------------------------------------------------------------- CONTACT

contact_body = f'''    <div class="page-hero">
      <h1>Contact</h1>
    </div>
    <div class="container prose">
      <div class="notice ui">Visiting in person? We're open every day in season, 8am&ndash;8pm. Drop by, or send us a message first to make sure someone's around.</div>
      <table class="spec-table" style="margin-bottom:2em">
        <tr><th class="ui">Address</th><td>6th Km Eparxiakis Kos, Kos 85300, Greece</td></tr>
        <tr><th class="ui">Phone</th><td><a href="tel:+302242068921">+30 22420 68921</a></td></tr>
        <tr><th class="ui">Email</th><td><a href="mailto:hatzinikolaouwinery@gmail.com">hatzinikolaouwinery@gmail.com</a></td></tr>
      </table>
      {photo_placeholder("Map &mdash; coming soon")}
    </div>'''

write("contact.html", shell("contact.html", "Contact — Hatzinikolaou Winery", "Visit or contact Hatzinikolaou Winery on Kos: address, phone, and email.", contact_body))

# ---------------------------------------------------------------- NUTRITION PAGES

def spec_row(label, value):
    if not value:
        return ""
    return f'<tr><th class="ui">{label}</th><td>{value}</td></tr>'


def nutrition_page(slug, name, lot, composition, certifications, vines, yield_, harvest, vinification, maturation, ageing_potential, alcohol):
    rows = "\n        ".join(filter(None, [
        spec_row("Composition", composition),
        spec_row("Certifications", certifications),
        spec_row("Vines", vines),
        spec_row("Yield", yield_),
        spec_row("Harvest period", harvest),
        spec_row("Vinification method", vinification),
        spec_row("Maturation &amp; ageing", maturation),
        spec_row("Ageing potential", ageing_potential),
        spec_row("Alcohol", alcohol),
    ]))
    body = f'''    <div class="page-hero">
      <h1>{name}</h1>
      <p class="ui">LOT {lot}</p>
    </div>
    <div class="container">
      <div class="notice ui">This page currently shows our production and technical specifications. Full lab-verified nutritional information (calories, sugars, sulfites, etc.) is pending lab results and will be added here once available.</div>
      <table class="spec-table">
        {rows}
      </table>
      <p class="footnote">Different LOT numbers denote different bottling batches. The year of harvest is written on the front label. The first two digits of the LOT number denote the year of bottling (usually one to two years after harvest); the last two digits denote the batch number, and usually make no difference to taste &mdash; different batches can come from the same barrel.</p>
    </div>'''
    return shell(None, f"{name} — Nutritional & Technical Information", f"Production and technical specifications for {name}, Hatzinikolaou Winery. Full nutritional information pending lab results.", body)


write("nutrition-asfendiano.html", nutrition_page(
    "asfendiano", "Asfendiano", "A2201",
    "60% Merlot, 30% Syrah, 10% Black Lady",
    "Certified Natural Wine",
    "17-year-old vines on limestone, ~300m elevation. Unwatered grapes, minimum intervention.",
    "400kg / 1,000m&sup2;",
    "Mid-August (10th&ndash;20th) for Syrah; early September (1st&ndash;5th) for Cabernet Sauvignon.",
    "Boiled must. No added sugar. No sulphides.",
    "6 months in stainless steel tanks, then 6 months in bottle with natural ageing corks. Traditionally drunk at Christmas, or chilled in summer.",
    "Up to 5 years maximum",
    "13%",
))

write("nutrition-black-lady.html", nutrition_page(
    "black-lady", "Black Lady", "B1801",
    "100% Mavrothyliko (Black Lady)",
    "PGI Dodecanese, Certified Natural Wine",
    "17-year-old vines on limestone, ~300m elevation. Unwatered grapes, minimum intervention.",
    "300kg / 1,000m&sup2;",
    "End of August (25th&ndash;30th).",
    "",
    "6&ndash;12 months in stainless steel tanks, 24&ndash;36 months in oak barrels, then at least another year in bottle with natural ageing corks. Hits the market around 5 years after harvest, and reaches its peak around age 10.",
    "Up to 20 years",
    "13%",
))

write("nutrition-platanaki-red.html", nutrition_page(
    "platanaki-red", "Platanaki Red", "P2101",
    "60% Mavrothyliko (Black Lady), 20% Syrah, 20% Merlot",
    "PGI Kos, PGI Dodecanese, Certified Natural Wine",
    "17-year-old vines on limestone, ~300m elevation. Unwatered grapes, minimum intervention.",
    "500kg / 1,000m&sup2;",
    "1st&ndash;10th August for Merlot; mid-August (10th&ndash;20th) for Syrah; end of August (25th&ndash;30th) for Black Lady.",
    "",
    "3&ndash;6 months in stainless steel tanks, 6&ndash;18 months in oak barrels, then at least another year in bottle with natural ageing corks. Hits the market around 3 years after harvest, and reaches its peak around age 7.",
    "Up to 10 years",
    "13%",
))

write("nutrition-platanaki-pink.html", nutrition_page(
    "platanaki-pink", "Platanaki Pink", "R2401",
    "50% Syrah, 50% Cabernet Sauvignon",
    "PGI Kos, Certified Natural Wine",
    "17-year-old vines on limestone, ~300m elevation. Unwatered grapes, minimum intervention.",
    "400kg / 1,000m&sup2;",
    "Mid-August (10th&ndash;20th) for Syrah; early September (1st&ndash;5th) for Cabernet Sauvignon.",
    "",
    "6 months in stainless steel tanks, then 6 months in bottle with natural ageing corks. Our only filtered wine, and not meant to be aged &mdash; we recommend drinking it within 2&ndash;3 years of bottling.",
    "Up to 5 years maximum",
    "13%",
))

print("done")
