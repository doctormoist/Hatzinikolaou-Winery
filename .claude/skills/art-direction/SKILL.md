---
name: art-direction
description: Establish and enforce a coherent, brand-specific visual direction before building or redesigning any website surface. Use before writing production UI for a new site or section, and as a review pass afterward. Prevents generic AI-looking decoration (circles, blobs, squiggles, gradient blobs) and generic section composition ("colored background → centered heading → paragraph → cards") by deriving every visual choice from the actual business, place, and history.
---

# Art Direction

This project's earlier design passes leaned on generic decoration — flat
color-blocked sections, repeated squiggle-line SVGs, scattered circles —
to make pages feel less plain. That is exactly the kind of filler this
skill exists to rule out. Nothing goes into a layout without a traceable
reason to exist on *this* brand's page, not "a page like this generally
needs some decoration here."

Follow this end to end for a new surface or a substantial redesign; use
§11 alone as a standalone review pass on already-built pages. This
complements `CLAUDE.md` §1 (design quality bar) and does not replace the
`agency-qa` skill's functional/accessibility/SEO audit — run both.

## 1. Never use generic decoration

Avoid using generic:

- circles
- blobs
- squiggly lines
- random waves
- floating dots
- arbitrary geometric shapes
- generic gradient blobs
- repeated SVG patterns
- decorative elements whose only purpose is filling empty space

These are allowed **only** when they have a clear, explainable relationship
to the brand — not "it looks nice" or "the section felt empty."

## 2. Design from the subject

The visual language must come from the actual business, location,
materials, history, audience, and personality — not from a generic
"premium website" aesthetic.

For a winery, possible visual sources include:

- vineyards
- grapevines
- grapes
- wine labels
- cork
- wine stains
- limestone/stone
- wood
- soil
- Mediterranean landscapes
- vineyard topography
- maps
- botanical illustrations
- engraving
- archival documents
- regional architecture
- sunlight and shadows
- glass/bottle reflections
- agricultural textures

Do not blindly use these. Select motifs that actually fit the brand, and
ground the choice in confirmed facts from `SITE-CONTENT-NOTES.md` — never
invent history, imagery, or symbolism that isn't real. If a motif needs a
fact you don't have (e.g. a specific soil type, a specific architectural
detail), flag it as an open question rather than guessing.

## 3. Backgrounds are compositions

A background should be treated as part of the art direction, not as a CSS
afterthought.

Consider combinations of:

- full-bleed photography
- carefully art-directed imagery
- photographic crops
- texture
- grain
- botanical/illustrative artwork
- topographic lines
- maps
- architectural elements
- masks
- transparency
- layered imagery
- atmospheric lighting
- typography
- editorial framing
- subtle gradients where appropriate

Every layer must have a reason for existing. If you can delete a layer and
nothing about the brand's story or legibility gets worse, delete it.

## 4. Create visual depth

Do not create depth simply by putting everything inside cards with
shadows.

Use:

- foreground/background relationships
- overlapping elements
- image cropping
- scale contrast
- typography behind/in front of imagery
- masking
- negative space
- transparency
- texture
- lighting
- asymmetric positioning
- edge-to-edge compositions

## 5. Typography is part of the art

Typography should sometimes become a major visual element, not just a
container for words.

Consider:

- oversized headings
- editorial typography
- cropped typography
- vertical type
- offset type
- large numbers
- labels
- pull quotes
- typographic framing
- unusual but intentional hierarchy

Do not default to a normal centered heading + paragraph + button as the
only pattern in the toolkit.

## 6. Vary section compositions

Do not build every section using the same "colored background → centered
heading → paragraph → cards" formula. Different sections should have
different compositions while still belonging to the same visual system
(shared palette, type, motifs — not shared layout).

Possible archetypes:

- immersive full-screen hero
- editorial split composition
- asymmetric image/text layout
- image overlapping another section
- typography-led section
- full-bleed photograph
- architectural grid
- framed editorial section
- horizontal storytelling composition
- oversized visual with minimal copy
- deliberately quiet negative-space section

## 7. Three directions before building

For a new site (or a substantial redesign of an existing one), first
propose **three genuinely different visual directions** before writing any
production code. Present them to the user for a decision — do not pick one
yourself and proceed.

For each direction provide:

- Name
- Core concept
- Emotional feeling
- Color system
- Typography direction
- Photography direction
- Background/texture system
- Graphic motifs
- Layout philosophy
- Section composition ideas
- Motion philosophy
- Why it fits the business

The three directions must actually be different — different core concepts
and different visual systems — not three palettes on the same layout.

## 8. Motif library

Before implementation, create a small library of 5–10 possible visual
motifs derived from the subject (see §2).

For every motif explain:

- what it is
- where it comes from
- how it could appear on the website
- why it belongs to the brand

## 9. Responsive art direction

Do not simply shrink the desktop design for mobile. Plan how:

- imagery crops
- typography scales
- overlaps change
- compositions stack
- decorative elements simplify
- negative space changes

...on mobile, as a deliberate composition in its own right (see `CLAUDE.md`
§1 on mobile design).

## 10. Quality bar

The final result should look like it was art-directed by a strong human
designer or creative agency. It should **not** look like:

- a generic SaaS template
- an AI-generated landing page
- a collection of UI components
- a Tailwind component showcase
- random CSS decoration
- a template with different colors

The question for every major visual decision is:

> "Why does this belong to THIS brand?"

If there is no strong answer, remove it.

## 11. Visual review

After implementation, inspect the website visually at:

- 375px
- 768px
- 1024px
- 1440px

Look specifically for:

- generic compositions
- repetitive sections
- empty areas filled with meaningless decoration
- weak hierarchy
- poor image treatment
- visual monotony
- AI-generated/template appearance

Then improve the weakest areas. This review can be run standalone against
an already-built page, without repeating §7–8.

## Output

- Document the chosen direction in `DESIGN-DIRECTION.md` (template at the
  project root) before or alongside implementation, and keep it in sync
  when the direction changes.
- Never fabricate photography, history, or brand facts to fill out a
  motif or direction — flag gaps as open questions per `CLAUDE.md` §4 and
  `SITE-CONTENT-NOTES.md`.
- This skill governs visual direction; run `agency-qa` separately before
  considering any surface finished.
