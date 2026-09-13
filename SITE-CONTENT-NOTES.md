# Hatzinikolaou Winery — content notes (working source of truth)

Status as of 2026-09-13: **real multi-page build in progress.** The owner
sent the actual site copy (`KOSWINES.docx`) and technical specs for the 4
wines (`ANutritional information.docx`, `BLNutritional information.docx`,
`PNutritional information.docx`, `RNutritional information.docx`) and asked
for a basic version of the real site now, content-complete but without
photos — photos come later. Keep this file updated as new info arrives.

**Standing rule: do not push anything without the owner's go-ahead** (this
build was explicitly requested, so it proceeds — but future unrelated
changes still need a green light).

## Site structure (owner's instruction)

"Every heading is a different page." Pages, in order, from `KOSWINES.docx`:

1. Our Philosophy
2. History
3. Geography
4. Biology & Ecology
5. Taste Profile / Pairing (built as the "Wines" page)
6. Eshop
7. Communication (built as the "Contact" page)

Plus a Home landing page (not an explicit heading, but needed as an entry
point) linking to all 7. Plus 4 standalone nutrition/technical-spec pages,
one per wine, reachable only via direct link/QR code from the bottle labels
— not part of main navigation.

## Confirmed facts — from KOSWINES.docx

**Philosophy:** Natural wines, minimum intervention, unwatered grapes, no
fertilizers/pesticides, minimal-to-no sulphides, no enzymes/artificial
yeast/coloring/sugar/water added — only crushed grapes go into the vats.
Spontaneous fermentation with wild indigenous yeast. Wine covered with the
winery's own extra-virgin olive oil for protection once ready. Matures in
oak barrels 6–24 months. All wines except the rosé are unfiltered
(deliberately murky, fuller taste). Natural ageing corks lasting up to 20
years. Everything done by hand, monitored personally. Capacity ~40,000
bottles/year but they rarely make more than 5,000. They play music to the
wine.

**History:** Grandfather Tony (Antonis Hatzinikolaou) discovered the Black
Lady (Mavrothilyko) grape — considered extinct — in nearby Nisyros "at the
end of the last century." He decided to revive it and dreamed of a winery
to promote it. The winery opened August 2013. He died in a tractor accident
in April 2013 while planting Black Lady, before seeing the winery open. The
family continued his work. The grape is now safe from extinction: at least
5 other wineries use it across 4 islands; the family has 6,000+ plants,
other vineyards have ~2,000 more combined. They've promoted/helped others
cultivate the grape for over 25 years.
- Note: this supersedes the earlier open question about a specific
  "2007 or 2009" rediscovery year — no exact year is given, just "end of
  the last century" plus the 2013 winery opening/Tony's death. Don't invent
  a specific year beyond what's stated here.

**Geography:** Vineyard at "Horafa" (Greek for "big field"), a hillside on
the northern slope of Mount Dikaios. Winery is 1km downhill on the main
road between Kos Town and Zipari. Horafa is 7 hectares, about half
currently planted. Soil mostly chalky with some clay/limestone. Windy
(helps the plants), sometimes humid from Aegean sea winds. Significant
winter rainfall; mild summer temperatures suit Black Lady and Syrah
especially.

**Biology & Ecology:** Four grape varieties currently grown, all black:
Merlot, Syrah (Shiraz), Cabernet Sauvignon, and Mavrothilyko (Black Lady).
Plan to add ~1,200 roots of Assyrtiko (Greek white variety). All grapes
unwatered; yield ~400kg per 0.1 hectare (less than half the regional
average). Vineyard hosts wild herbs (sage, oregano, capers) and animals
(hares, peacocks, tortoises, snakes, a pet horse named Kanello, chickens).
Zero-waste approach: production leftovers go to a local distillery for
ouzo; leaves etc. become compost/animal fodder. Main electricity from solar
panels on the winery roof; windmills planned.

**Wines (Taste Profile / Pairing):**

| Wine | Blend (per KOSWINES.docx) | Notes |
|---|---|---|
| Platanaki Pink | 50% Cabernet Sauvignon, 50% Syrah | Dry rosé, unwatered + unfiltered so stronger than typical rosé, 13% ABV. Serve chilled. Pairs with chicken, pasta, salads, seafood. |
| Platanaki Red | At least 60% Black Lady, plus Merlot and a little Syrah | Dry red, well-balanced. Pairs with red meat, versatile. Serve at 14°C. Owner calls it "a great VFM wine." |
| Black Lady | 100% Black Lady grape | Dry red, complex, rich aftertaste. Pairs with heavier meat, game, cold cuts, or on its own. Serve at 14°C. |
| Asfendiano | Sweet dessert wine, 100% grapes, no added sugar/sweetener | Sweetness from boiling part of the must ("psimma"). Tastes like caramel. Enjoy chilled, warm, or boiled (e.g. in Christmas Gluhwein); used as a cocktail base; pairs with dark chocolate/sweets. |

**Eshop:** Order by contacting `hatzinikolaouwinery@gmail.com` directly to
arrange transport and payment. Ships within the EU only, for now. (No
cart/QR-payment flow built yet — this is the current process.)

**Communication / Contact:**
- Address: 6ο Χλμ Επαρχιακής Κω (6th Km Eparxiakis Kos road), Kos 85300,
  Greece
- Phone: +30 22420 68921 (this resolves the earlier "which number is
  primary" ambiguity — use this landline as primary)
- Email: **hatzinikolaouwinery@gmail.com** (resolves the earlier "need the
  actual Gmail address" gap)
- A map embed was requested (`[MAP]` placeholder in the source doc) — no
  coordinates given yet, use the address above for a map embed/link.

## Confirmed facts — from the 4 nutrition/technical-spec docs

These are **technical/production specs**, not full lab nutrition-facts
panels (calories, sugars, etc.) — the owner is still waiting on lab
results for that. Build the 4 pages with what follows, clearly marked as
provisional pending lab results.

| Field | Asfendiano (LOT A2201) | Black Lady (LOT B1801) | Platanaki Red (LOT P2101) | Platanaki Pink (LOT R2401) |
|---|---|---|---|---|
| Composition | 60% Merlot, 30% Syrah, 10% Black Lady | 100% Mavrothyliko (Black Lady) | 60% Mavrothyliko (Black Lady), 20% Syrah, 20% Merlot | 50% Syrah, 50% Cabernet Sauvignon |
| Certifications | Certified Natural Wine | PGI Dodecanese, Certified Natural Wine | PGI Kos, PGI Dodecanese, Certified Natural Wine | PGI Kos, Certified Natural Wine |
| Vines | 17-year-old vines on limestone, ~300m elevation, unwatered, minimum intervention (all four wines — same vineyard) | same | same | same |
| Yield | 400kg/1000m² | 300kg/1000m² | 500kg/1000m² | 400kg/1000m² |
| Harvest period | Mid-Aug (10th–20th) for Syrah; early Sept (1st–5th) for Cabernet Sauvignon | End of August (25th–30th) | Aug 1st–10th (Merlot), mid-Aug 10th–20th (Syrah), Aug 25th–30th (Black Lady) | Mid-Aug 10th–20th (Syrah), early Sept 1st–5th (Cabernet Sauvignon) |
| Vinification | Boiled must; no added sugar; no sulphides | — | — | — |
| Maturation/Ageing | 6 months stainless steel, 6 months in bottle (natural corks). Traditionally drunk at Christmas or chilled in summer. | 6–12 months stainless steel, 24–36 months oak barrels, 1+ year in bottle. Hits market ~5 years after harvest, peaks ~age 10. | 3–6 months stainless steel, 6–18 months oak, 1+ year in bottle. Hits market ~3 years after harvest, peaks ~age 7. | 6 months stainless steel, 6 months in bottle. Only filtered wine, not meant to age — drink within 2–3 years of bottling. |
| Ageing potential | Up to 5 years max | Up to 20 years | Up to 10 years | Up to 5 years max |
| Alcohol | 13% | 13% | 13% | 13% |

Shared footnote (all 4): different LOT numbers = different bottling
batches. Harvest year is on the front label. LOT's first two digits =
bottling year (usually 1–2 years after harvest); last two digits = batch
number, usually no taste difference (different batches can come from the
same barrel).

- This resolves the earlier "ABV unconfirmed" question — **all four wines
  are 13% ABV.**
- This effectively resolves the earlier "Xaehua Ruby Merlot" / standalone
  Merlot bottle question — there is no separate single-varietal Merlot
  bottle; Merlot only appears as a blending component (in Asfendiano and
  Platanaki Red). That foreign listing was almost certainly a
  mistranscription of one of these four wines.
- This also resolves "Red Sweet" vs "Asfendiano Sweet Red" — Asfendiano is
  the (only) sweet wine; treat any "Red Sweet" reference as referring to it.
- Bottle sizes still not specified anywhere — don't assume 750ml without
  confirmation (though it's the likely standard).

## Still open / unconfirmed

- Full lab-verified nutrition-facts panels for all 4 wines (calories,
  sugars, sulfite mg/L, etc.) — pending lab results per the owner; the 4
  QR-linked pages should say so plainly rather than presenting the
  technical specs above as complete nutrition information.
- Bottle size (assume 750ml is likely but unconfirmed).
- Real photography — still not supplied (vineyard, winery, family, tasting
  area, Petronela's crochet work, bottle labels). Pages should ship with
  clearly marked placeholders, not stock or AI-generated images.
- EL/EN/DE translations — this build is English-only for now, per the
  owner's "basic info for now" framing. Greek/German versions are a
  follow-up phase (see `PRODUCT.md`).
- Hours, visit/tasting policy, associations (Kos Locally Grown, Natural
  Wine Certified), and Google reviews (4.9/79) — still as previously
  confirmed; not covered by the new docs, so nothing changes there. These
  aren't part of the 7 pages built from `KOSWINES.docx` (no explicit
  "Visit" or "Hours" heading was given) — flagged in the build report as a
  possible gap to ask about.
- Domain: koswines.com still the working target.

## Superseded from earlier notes

The previous version of this file listed wine prices from an earlier info
sheet (Black Lady €29, Asfendiano €24, Platanaki Red €14, Platanaki Pink
€14) — not contradicted by the new docs, so still treated as current.
