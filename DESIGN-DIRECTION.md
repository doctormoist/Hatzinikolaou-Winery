# Design Direction

This file records the chosen visual direction for the website — the output
of the `art-direction` skill (`.claude/skills/art-direction/SKILL.md`). Keep
it in sync with what's actually built: when the direction changes, update
this file in the same pass, not after.

This is a record of *decisions and rationale*, not a moodboard dump. Every
section should be answerable in plain language, grounded in confirmed facts
from `SITE-CONTENT-NOTES.md` — never invented history, imagery, or symbolism.

Status: **built.** Live across every page. See §10 for how this was decided
and built.

---

## 1. Chosen direction

- **Name:** The Long Table (purple/green)
- **Core concept:** The site as an invitation into the winery's actual,
  confirmed everyday reality — free tastings, drop-ins welcome, hosting six
  or forty people around a table, a horse named Kanello wandering past, wine
  sealed under the family's own olive oil — built on the real brand colors
  (purple from the logo, green from the vine/olive world) instead of the
  neutral terracotta palette first pitched for this direction.
- **Emotional feeling:** Unhurried, sun-warmed, personal — like being waved
  over by someone who already knows you're coming.
- **Why it fits this business:** `PRODUCT.md` states the tone should be
  "rustic/traditional… warm and casual, not formal or upscale," and the
  site's actual job is converting a tourist into an in-person visit, not
  impressing with restraint. This direction is the most literal translation
  of that brief, built entirely from confirmed everyday facts (free
  tastings, drop-ins, the horse, the olive oil) rather than aspiration.
- **Directions considered but not chosen:**
  - *Horafa Survey* (cartographic/technical, built from the real 7-hectare
    Horafa plot's elevation, soil, and LOT/harvest data) — too technical
    and cold as a whole-site direction for a primary audience deciding
    whether to visit in person; its motifs (real contour lines, LOT stamps,
    field-note layout) remain a strong candidate for the Geography/Ecology
    pages and the four nutrition/technical pages specifically, where the
    content genuinely is data. Not yet approved — flag before using.
  - *The Black Lady* (near-black/gold, built from the Tony/Black Lady
    rescue story) — too formal and reverent as a whole-site direction given
    the "warm, casual, not upscale" brand commitment. Its treatment remains
    a candidate for the History page alone, as a deliberate one-page tonal
    shift. Not yet approved — flag before using.

## 2. Visual motifs

| Motif | What it is | Where it comes from | How it appears on the site | Status |
|---|---|---|---|---|
| Olive branch line | A simple line-drawn olive branch/leaf mark | The winery's own olive oil, used to seal the wine once ready | Philosophy page (near the olive-oil detail) and the closing home-page invitation | Built |
| Vine-row lines | Thin converging lines suggesting rows of vines in perspective | The real planted rows at Horafa (7 hectares, about half planted) | Low-opacity full-bleed backdrop on every page-hero and the home-page quote moment | Built |
| Hand-tied twine divider | A short twine/string line with a small knot | Real bottle labeling process | Small divider under the wordmark and above every page-hero headline, replacing the old squiggle | Built |
| Vine cane | A single meandering vine-cane line with two leaf sprigs | An actual grapevine cane | Used once, at the top of the History page's framed section | Built |
| Kanello mark | A small line-drawn horse silhouette | The family's real pet horse, who lives at the vineyard | Once, beside the wildlife paragraph on the Ecology page | Built |
| Regional roof-tile edge | A repeating barrel-tile silhouette (via CSS radial-gradient), not a straight or wavy edge | Regional Kos architecture | Bottom edge of the home page's closing invitation | Built |
| Oak barrel stave grain | A woodgrain texture with visible stave seams | Real oak-barrel ageing (6–36 months depending on the wine) | — | Not yet built |
| Black Lady cluster mark | A small engraved-style grape-cluster mark, drawn to Mavrothilyko's real cluster shape | The family's signature grape | — | Not yet built; considered for the Wines page |

## 3. Typography

- **Display/heading face:** Instrument Serif (italic used for most
  headline treatments, matching the italic convention already established
  site-wide)
- **Body face:** Karla
- **Pairing rationale:** Bodoni Moda read polished but safe — closer to a
  fashion label than a family that waves you in for a free tasting — and
  was flagged as an open tension against the "not upscale" brand
  commitment (see prior log entry below). Instrument Serif's slightly
  irregular italic has real character without tipping into costume the way
  a decorative script would, and sits closer to "warm and casual." Karla is
  a humanist sans that reads friendly and legible at body-text sizes,
  reinforcing the same shift away from formal/editorial. Explored as one of
  four options in a dedicated type pitch (Yeseva One/Vollkorn, Instrument
  Serif/Karla, IM Fell English/Source Serif 4, Bricolage Grotesque/Karla)
  before this pick.
- **Multiple fonts across the site:** Considered and confirmed against how
  real premium wineries actually do this — a tight system of 2–3 font
  *roles* (display, body, occasional accent) used consistently everywhere,
  not a different typeface identity per page. Site-wide, that's just
  Instrument Serif + Karla. The one controlled exception under discussion
  is reserving IM Fell English *only* for the History page as a deliberate
  one-page tonal shift for the Tony/Black Lady story — not yet approved,
  flag before using.
- **Scale/hierarchy approach:** Oversized italic display headlines for
  section openers (kept from current build); one real family quote (about
  hosting drop-ins, or Kanello) set oversized across a full-bleed moment as
  a typographic centerpiece — new for this direction, see §7.
- **Where typography becomes a visual element:** The oversized quote
  moment above; LOT numbers and harvest-date figures set in a mono/technical
  face as small, real "field tag" labels near the wine-specific sections
  (borrowed narrowly from the Horafa Survey direction, not the whole
  palette).

## 4. Color

- **Palette** (all hex values are the winery's real, already-established
  brand colors — none invented for this direction):
  - Purple `#4a2545` (`--purple`) — from the real logo
  - Purple Deep `#341a30` (`--purple-deep`)
  - Green `#4c6b3f` (`--green`) — vine/olive world
  - Green Deep `#34492b` (`--green-deep`)
  - Gold `#b98b3e` (`--gold`) — confirmed accent, matches the real Black
    Lady bottle's dark-glass/gold-label look
  - Cream/paper `#f8f1e4` / `#fffdf9` (`--cream` / `--paper`) — warm
    limewash-inspired ground, already established
  - Ink `#2a2126` (`--ink`)
  - Barrel Oak `#6b4a32` — **material tone, not a primary color** — used
    only for the oak-stave texture motif, where a literal wood color is
    part of the honesty of the material
- **Primary / secondary / accent roles:** Purple and green are the two main
  colors, used for headlines, section moments, and the two "family" motif
  colors (olive/vine = green, brand mark = purple). Gold stays a rare
  accent (labels, dividers, the one Black Lady cluster mark) — never a
  background fill. Cream/paper is the resting ground for most content;
  oak brown appears only where wood texture is the actual subject.
- **Where each color is used and why:** Full-bleed purple or green moments
  are reserved for the two or three most important story beats per page
  (the legacy statement, a closing invitation) — not applied as a default
  section background the way the previous "band" system did. Most of the
  page rests on the warm cream ground so the purple/green moments keep
  their impact instead of becoming wallpaper.

## 5. Imagery

- **Photography direction:** Real, unstaged documentary photography once
  supplied by the owner — hands, the table, the horse, the tasting
  courtyard — cropped generously and imperfectly, never posed "lifestyle
  stock." See `PRODUCT.md`/`CLAUDE.md`: no stock or AI-generated imagery
  may substitute for it.
- **Status of real photography:** None supplied yet (confirmed absence,
  see `SITE-CONTENT-NOTES.md`). All image slots ship as clearly labeled
  placeholders ("Photo of the Horafa vineyard hillside — coming soon"),
  never generic "photo coming soon."
- **Placeholder convention until real photos arrive:** Keep the existing
  labeled-placeholder pattern (icon + specific caption naming exactly what
  will go there), styled to this direction's warm palette rather than the
  previous neutral dashed-box treatment.
- **Treatment (once real photos exist):** Warm, sunlit color grade, natural
  light, imperfect framing — the opposite of studio-lit product photography.

## 6. Background & texture system

- **What backgrounds are made of on this site:** Mostly the warm cream/paper
  ground; oak-grain texture reserved for wine-specific sections; vine-row
  linework as a subtle background layer under the hero and Geography
  content; purple/green full-bleed moments used sparingly, as composed
  editorial sections (photo or quote-led), not as a repeating default
  section wrapper.
- **Explicit rule for what is *not* used:** No generic circles, squiggly
  lines, floating dots, or repeated decorative SVG patterns filling empty
  space — this is the exact pattern being replaced (see art-direction skill
  §1). Every line-based motif above (vine rows, olive branch, twine, roof
  edge, horse mark) replaces that filler with something specific to this
  property.

## 7. Layout archetypes

| Archetype | Used on | Why this composition here |
|---|---|---|
| Asymmetric split hero | Home | Photo/placeholder on one side, a short "come as you are" invitation with real visiting facts (free tastings, hosts 6–40, message ahead) on the other — not a centered hero |
| Full-bleed quote moment | Home (once, after the hero) | One real family quote set oversized, doing the emotional work a "legacy band" tried to do generically before |
| Long table list | Wines | The four wines as one continuous list with generous space, echoing an actual table setting, instead of a repeating card grid |
| Quiet negative-space section | Philosophy | Deliberate breathing room between practice statements — no background color needed to feel intentional |
| Framed editorial section | History | A visually distinct, quieter frame than the rest of the site, signaling "this is the one story that gets special treatment" (see the open Black Lady option in §1) |
| Horizontal storytelling | Geography, Biology & Ecology | Real facts (elevation, soil, yield, wildlife) presented alongside the vine-row/contour linework rather than in a generic paragraph-under-heading stack |

## 8. Motion

- **Motion philosophy:** Ambient and gentle — ties to the "unhurried" feeling
  in §1. Nothing mechanical, nothing that reads as a corporate SaaS
  scroll-reveal.
- **What animates, and what deliberately doesn't:** A slow, one-time warm
  light/fade-in on hero photography; a single count-up moment for real
  stats (founding year, hectares, vines) is acceptable if kept subtle;
  nothing else needs to move.
- **Reduced-motion behavior (hard requirement):** Content must render fully
  visible by default in CSS; JavaScript may only add a transient
  pre-animation state once it has successfully set up, never hide content
  by default. This was a real bug found and fixed earlier in this project
  (a phone opening the site with scroll-animation JS blocked showed
  permanently blank sections) — do not reintroduce that failure mode in
  the rebuild.

## 9. Responsive behavior

| Breakpoint | What changes |
|---|---|
| 375px | Hero split stacks photo-then-invitation; vine-row background linework simplifies to a single thin line or drops entirely; the wine "table" list stays single-column with generous space rather than compressing into tight cards |
| 768px | Hero split remains but narrows; oak-texture sections keep full width |
| 1024px | Full asymmetric hero split; horizontal storytelling sections (Geography/Ecology) move from stacked to side-by-side fact/line-art layout |
| 1440px | Full composition as designed; purple/green full-bleed moments get more breathing room rather than stretching content wider |

## 10. Design rationale / decision log

| Date | Decision | Reasoning |
|---|---|---|
| 2026-09-13 | Proposed three directions (Horafa Survey, The Long Table, The Black Lady) per art-direction skill §7 | Replace the flat color-blocked sections, repeated squiggle SVGs, and floating circles the owner flagged as generic |
| 2026-09-13 | Owner chose The Long Table, with purple and green as the main colors instead of the originally-pitched terracotta palette | Purple/green are the real, confirmed brand colors (logo + vine/olive world); owner's explicit request |
| 2026-09-13 | Kept existing typography (Bodoni Moda / Cormorant Garamond) rather than switching to the Piazzolla/Karla pairing from the original pitch | Already real working infrastructure with a genuine brand tie (Black Lady label); the owner's feedback was about backgrounds/decoration, not type |
| 2026-09-13 | Owner asked to explore fonts with more character; pitched 4 options and swapped display/body to Instrument Serif / Karla site-wide | Bodoni Moda read too polished/upscale against the "not upscale" brand tone; Instrument Serif has real personality without going decorative |
| 2026-09-13 | Owner flagged that the font swap alone hadn't actually changed the site's structure — the old flat purple/green bands and circle-and-squiggle vine SVGs were still live. Rebuilt every page: removed `.band`/`VINE_TALL`/`VINE_DIVIDER` entirely; replaced with the motifs in §2 and the layout archetypes in §7 (asymmetric hero split, an oversized quote moment with an inline stat strip, a framed History section, fact strips on Geography/Ecology, and the Wines page as a continuous table list instead of a card grid) | Owner was right — documenting a direction is not the same as building it; the actual complaint (generic decoration) hadn't been addressed yet |
| 2026-09-13 | `impeccable detect` flagged Instrument Serif itself as an increasingly overused face in AI-generated design (alongside Fraunces, Inter, etc.) | Not acted on unilaterally since the font was a separate, already-approved decision — flagged to the owner instead |
