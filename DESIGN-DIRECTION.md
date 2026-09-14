# Design Direction

This file records the chosen visual direction for the website — the output
of the `art-direction` skill (`.claude/skills/art-direction/SKILL.md`). Keep
it in sync with what's actually built: when the direction changes, update
this file in the same pass, not after.

This is a record of *decisions and rationale*, not a moodboard dump. Every
section should be answerable in plain language, grounded in confirmed facts
from `SITE-CONTENT-NOTES.md` — never invented history, imagery, or symbolism.

Status: **built.** Live across every page. See §10 for how this was decided
and built. This supersedes the previous "The Long Table" direction (still
described in the §10 log for history) — the owner asked for a complete
visual redesign, not a polish, explicitly rejecting the cream/paper ground
that direction had made the resting surface of the site.

---

## 1. Chosen direction

- **Name:** Dusk at Horafa (purple-dominant / green-secondary)
- **Core concept:** Purple is the wine itself — deep, plum, velvet, the
  color of the logo and of wine at dusk — and it now runs through the
  entire site as the dominant environment, not just headlines and buttons.
  Green is the land: it surfaces only where the content is actually about
  the vineyard (the "we play music to our wines" moment, Geography's large
  hillside view, Ecology's wildlife section), never as decoration for its
  own sake. Cream/paper is gone as a page ground; a warm off-white now
  exists only as a small, contained "reading panel" inside `.frame`
  captions and nowhere else.
- **Emotional feeling:** Editorial, cinematic, tactile — an evening wine
  journal rather than a bright daytime brochure. Full-bleed dark
  environments, oversized italic type, and photography treated as
  architecture (frames that bleed to the edge, overlap, and vary in scale)
  instead of content dropped into boxes.
- **Why it fits this business:** The owner's brief was explicit: purple
  must dominate, green must stay secondary and tied to land/vineyard
  content specifically, and the whole site should stop reading like an
  AI-generated template (repetitive image/text rows, generic rectangular
  photo boxes, flat cream backgrounds). This direction answers all three
  by making purple the architecture (not a rare accent) and by giving each
  major section its own composition instead of one repeating pattern.
- **Superseded direction:** *The Long Table* (purple/green on a warm
  cream/paper ground, alternating image/text rows) — built earlier this
  project and genuinely on-brand, but the owner asked for a full rework:
  purple needed to dominate rather than share the page evenly with a cream
  ground, and the alternating-row pattern used on Wines/Home/History
  needed to be broken up rather than repeated page to page.

## 2. Visual motifs

| Motif | What it is | Where it comes from | How it appears on the site | Status |
|---|---|---|---|---|
| Vine-row lines | Thin converging lines suggesting rows of vines in perspective | The real planted rows at Horafa (7 hectares, about half planted) | Low-opacity backdrop on the home hero, quote moment, and every purple page-hero | Built |
| Topographic contour lines | Wavy horizontal contour-map lines | Horafa's real elevation (~300m) on the northern slope of Mount Dikaios | Geography's full-viewport hillside moment | Built |
| Hand-tied twine divider | A short twine/string line with a small knot | Real bottle labeling process | Under the home wordmark | Built |
| Vine cane | A single meandering vine-cane line with two leaf sprigs | An actual grapevine cane | History, beside the "end of the last century" entry | Built |
| Kanello mark | A small line-drawn horse silhouette | The family's real pet horse, who lives at the vineyard | Once, beside the wildlife paragraph on Ecology | Built |
| Olive branch line | A simple line-drawn olive branch/leaf mark | The winery's own olive oil, used to seal the wine once ready | Philosophy's closing note, home's closing invitation | Built |
| Film grain | An extremely subtle noise texture (SVG feTurbulence, ~5% opacity, overlay blend) | The tactile, unfiltered, hand-crafted character of the wine itself — not a digital-flat surface | Every full-bleed environment section (`.grain`) and every `.frame` | Built |
| Regional roof-tile edge | A repeating barrel-tile silhouette (via CSS radial-gradient) | Regional Kos architecture | Bottom edge of the home page's closing invitation | Built |
| Black Lady cluster mark | A small engraved-style grape-cluster mark, drawn to Mavrothilyko's real cluster shape | The family's signature grape | — | Not yet built; still a candidate for the Wines page |

## 3. Typography

Unchanged from the previous direction — this redesign is about color,
composition, backgrounds, and motion, not typeface. Instrument Serif
(display, italic) + Karla (body) stay, per the existing approved decision
(§10 log). What's new here is how much more typography is asked to do
compositionally:

- **Oversized editorial statements:** Page `<h1>`s now run as large as
  `clamp(3rem, 9vw, 6.5rem)` and sit at the bottom of a full-width
  environment moment (`.page-hero`) rather than centered in a small box.
- **Small uppercase labels (`.label-meta`, `.eyebrow`):** Gold-light,
  letter-spaced, used as "field tag" style section numbers (`01 — A quiet
  practice`) tying every page into the same numbered sequence used in the
  home page's index.
- **Contrast of scale:** Giant italic headlines against small caption/meta
  text is now the default rhythm of every hero and feature moment, rather
  than a single mid-size heading + paragraph.

## 4. Color

- **Palette** (all hex values are the winery's real, already-established
  brand colors, or direct darker tints of them — nothing invented):
  - Purple `#4a2545` (`--purple`) — from the real logo
  - Purple Deep `#341a30` (`--purple-deep`)
  - Purple Bright `#6b3563` (`--purple-bright`)
  - Purple 950 `#1b0e18` (`--purple-950`) — **new**, a darker tint of the
    same purple, used for large environments where the mid-tone alone
    read flat/muddy at full-bleed scale, and as the site's default page
    background
  - Green `#4c6b3f` (`--green`) — vine/olive world
  - Green Deep `#34492b` (`--green-deep`)
  - Green Bright `#6a8f57` (`--green-bright`)
  - Green 950 `#1b2616` (`--green-950`) — **new**, same rationale as
    Purple 950, and needed so gold-light text on a green environment
    (the quote moment) holds AA contrast
  - Gold `#b98b3e` / Gold Light `#d9b876` — accent only: small labels,
    dividers, hover states — never a background fill
  - Paper `#f6f2f4` (`--paper`) — **replaces the old warm cream
    `#f8f1e4`.** Deliberately desaturated and tinted from the purple
    family rather than warm beige, and used *only* inside `.panel`, a
    small contained reading surface — never as a page or section ground
  - Mist `#f4eef2` (`--mist`) / Mist Dim / Mist Faint — the site's default
    text colors on the dark purple ground (a soft warm-white, not pure
    `#fff`, so text stays tied to the brand hue)
- **Primary / secondary / accent roles:** Purple is the site's
  architecture — the default background of `body`, every header/footer,
  every page-hero, and both home-page feature moments. Green is reserved
  for vineyard/land content specifically (the quote moment, Geography's
  hero, part of Ecology) — never used "to balance the palette." Gold stays
  a rare accent. Paper never appears as a background larger than a small
  caption strip.
- **Explicit rule:** No cream/ivory/beige/tan anywhere in the visual
  identity. If a light neutral is structurally necessary (a caption
  needs to sit on a genuinely light surface), it is `--paper`, contained,
  and small — never the resting ground of a page.

## 5. Imagery

- **Photography direction:** Real, unstaged documentary photography once
  supplied by the owner — hands, the table, the horse, the tasting
  courtyard, the vineyard rows — cropped generously and imperfectly, full
  frame, edge-to-edge where the layout calls for it. See `PRODUCT.md`/
  `CLAUDE.md`: no stock or AI-generated imagery may substitute for it.
- **Status of real photography:** None supplied yet (confirmed absence,
  see `SITE-CONTENT-NOTES.md`). Every image slot is now a `.frame` — a
  deep-toned gradient plate with a small corner caption naming exactly
  what will go there, styled like a blank plate in a printed layout
  rather than an empty-state UI icon (dashed box + centered icon, the
  previous convention). The same markup holds a real `<img>` later with
  no structural change.
- **Frame variants:** `.frame--portrait` (3:4), `.frame--tall` (3:4),
  `.frame--square` (1:1), `.frame--wide` (21:9), `.frame--full` (edge to
  edge, 100vw), `.frame--fill` (stretches to fill an absolutely
  positioned parent, used behind full-bleed section backgrounds) — chosen
  per composition rather than one aspect ratio reused everywhere.
- **Placeholder icon per frame:** Each `.frame__mark` now shows a small
  line icon matching what its caption actually describes (grape cluster,
  oak barrel, horse, hills, waves, wine bottle, shipping box, map pin,
  a generic person/pair-of-people silhouette for the two portrait slots)
  instead of one generic "photo" icon reused everywhere. Explicitly does
  *not* extend to generating photorealistic stand-ins: the owner asked for
  AI-generated placeholder photos and it was declined for two reasons —
  the site-wide no-stock/no-AI-photography rule above, and, specifically
  for the History page's Tony/family slots, that fabricating a likeness of
  a real, named, deceased person is not something an "override" should
  reach for even with sign-off. Icons stay schematic on purpose.
- **Treatment (once real photos exist):** Warm, sunlit color grade,
  natural light, imperfect framing — the opposite of studio-lit product
  photography.

## 6. Background & texture system

- **What backgrounds are made of now:** The deep purple environment
  (`--purple-950` and gradients toward `--purple`/`--purple-deep`) is the
  default surface of the entire site — `body`, header, footer, every
  page-hero. Green environments exist only where the content is
  vineyard/land-specific. A subtle film-grain layer (`.grain`) sits over
  every large environment section so flat digital gradients never read as
  bare CSS. Vine-row and topographic-contour linework appear as
  low-opacity full-bleed backdrops behind hero content.
- **Gradient direction matters:** Full-bleed frames use
  `linear-gradient(to bottom right, ...)` (a true corner-to-corner
  gradient) rather than a fixed angle — a fixed angle like `155deg`
  reads fine on a portrait frame but goes almost invisibly dark across a
  very wide, short section (the visible area ends up entirely past the
  bright stop). "Environment" mood gradients (page-hero, quote-moment,
  invite-close) use `to bottom`, since they're meant to read as a vertical
  light-to-dark environment regardless of section width.
- **Explicit rule for what is *not* used:** No generic circles, squiggly
  lines, floating dots, glassmorphism, or repeated decorative SVG patterns
  filling empty space. No cream/ivory palette. Every line-based motif in
  §2 replaces that filler with something specific to this property.

## 7. Layout archetypes

| Archetype | Used on | Why this composition here |
|---|---|---|
| Full-viewport cinematic hero | Home | Logo and lede overlap directly on a full-height purple environment with vine-row linework and an atmospheric glow — not logo+text+boxed-photo+button. The hero photo (once supplied) will fill this same environment layer, edge to edge |
| Asymmetric bleeding split | Home ("Come as you are") | Photo frame and text each take a full half-height column, no padding trapping the photo in a small box |
| Full-bleed quote moment | Home (after the hero) | One real family quote set oversized on a green (vineyard) environment |
| Two feature moments + a quiet manifest | Home (site index, after the quote moment) | Replaces the earlier alternating-row index entirely: History and Wines each get a full-bleed cinematic moment (`.feature-moment`, purple); the other five pages collapse into one quiet numbered text list (`.manifest`) rather than repeating either treatment seven times |
| Editorial manifesto | Philosophy | Large italic lead statement, sticky portrait frames beside long-form practice lists, deliberate negative space — quiet by design, on the purple ground rather than cream |
| Archive | History | Alternating asymmetric entries with small dated labels and a centered pull-quote, styled like opening a family archive rather than a timeline component |
| Large visual moment | Geography | A full-viewport green environment with topographic contour linework, an oversized "Horafa" headline, and a fact bar beneath — the single largest, most distinct visual moment on the site |
| Organic / layered | Biology & Ecology | A small square frame overlaps a large wide frame (botanical detail over landscape), plus a quiet two-column zero-waste/solar note |
| Dramatic product feature | Wines | Each wine gets a different composition (portrait media left, then right, then a full-bleed signature moment for Black Lady, then a square frame for Asfendiano) instead of a repeating three-column ecommerce grid |
| Sense of place | Contact | A full-viewport photo environment carries the address/phone/email as an overlaid list, followed by a wide map frame — not a boxed "Contact Us" form |

## 8. Motion

- **Motion philosophy:** Cinematic and restrained — slow, precise reveals,
  never bouncy or mechanical. Nothing should read as a corporate SaaS
  scroll-reveal library.
- **What animates:**
  - `.reveal` — the original fade/rise-in, kept for text blocks.
  - `.reveal-mask` — a slower curtain clip-path reveal + gentle scale
    settle (1.04 → 1), used on every `.frame`/photography moment.
  - `.parallax` — a single shared, rAF-throttled scroll listener (see
    `site.js`) drifts full-bleed background frames a few percent slower
    than the surrounding content (`data-speed` per element). Transform-
    only, GPU-friendly, one listener for the whole page.
  - A single count-up on the home page's real stats (founding year,
    hectares, vines), unchanged from before.
- **Reduced-motion behavior (hard requirement, unchanged):** Content must
  render fully visible by default in CSS; JavaScript may only add a
  transient pre-animation state once it has successfully set up, and the
  parallax listener is skipped entirely under `prefers-reduced-motion:
  reduce`. This was a real bug found and fixed earlier in this project —
  do not reintroduce it.

## 9. Responsive behavior

| Breakpoint | What changes |
|---|---|
| 375px | The cinematic hero drops to ~92svh with its corner caption hidden; every alternating/asymmetric composition (feature moments, archive entries, wine features, organic layered frames) stacks to a single column with photo above text; the manifest list keeps its numbered rows but wraps the description below the name instead of pushing it right |
| 768px | Two-column archetypes (manifesto, archive, organic layered) still stack in most cases (breakpoint at 860px) but full-bleed moments (hero, geo-moment, visit) keep their environment height |
| 1024px | Full asymmetric/alternating layouts apply; feature moments and the wine signature moment reach their full side-anchored composition |
| 1440px | Full composition as designed; full-bleed environments get their complete gradient range rather than stretching content wider |

## 10. Design rationale / decision log

| Date | Decision | Reasoning |
|---|---|---|
| 2026-09-13 | Proposed three directions (Horafa Survey, The Long Table, The Black Lady) per art-direction skill §7 | Replace the flat color-blocked sections, repeated squiggle SVGs, and floating circles the owner flagged as generic |
| 2026-09-13 | Owner chose The Long Table, with purple and green as the main colors instead of the originally-pitched terracotta palette | Purple/green are the real, confirmed brand colors (logo + vine/olive world); owner's explicit request |
| 2026-09-13 | Kept existing typography (Bodoni Moda / Cormorant Garamond) rather than switching to the Piazzolla/Karla pairing from the original pitch | Already real working infrastructure with a genuine brand tie (Black Lady label); the owner's feedback was about backgrounds/decoration, not type |
| 2026-09-13 | Owner asked to explore fonts with more character; pitched 4 options and swapped display/body to Instrument Serif / Karla site-wide | Bodoni Moda read too polished/upscale against the "not upscale" brand tone; Instrument Serif has real personality without going decorative |
| 2026-09-13 | Owner flagged that the font swap alone hadn't actually changed the site's structure — the old flat purple/green bands and circle-and-squiggle vine SVGs were still live. Rebuilt every page under The Long Table direction | Owner was right — documenting a direction is not the same as building it |
| 2026-09-13 | `impeccable detect` flagged Instrument Serif itself as an increasingly overused face in AI-generated design | Not acted on unilaterally since the font was a separate, already-approved decision — flagged to the owner instead |
| 2026-09-13 | Reviewer flagged the home page's 7-page index was still a repeating photo-tile card grid; rebuilt as alternating asymmetric rows (`.walk`) | The card grid violated CLAUDE.md's rule against repetitive/interchangeable sections |
| 2026-09-14 | Owner requested a complete visual redesign, not a polish: purple must dominate, green stays secondary and tied to land content, cream/paper must not be the visual identity, every major section must have a distinct composition, photography must be treated architecturally (full-bleed, varied crops, overlapping frames) instead of boxed, and motion should read as cinematic (parallax, mask reveals) not decorative. Superseded The Long Table with **Dusk at Horafa**: rebuilt every page (this file, §1–9) | This was a deliberate, explicit reversal of the previous direction, not a bug fix — logged rather than silently overwritten. Real photography still doesn't exist, so the redesign focused on what's actually buildable now: color, composition, background/texture, and motion — every image slot stays a labeled placeholder frame, ready for real photography, per `CLAUDE.md`'s rule against stock/AI imagery |
