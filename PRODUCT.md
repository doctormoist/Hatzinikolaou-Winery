# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: a tourist on or planning a trip to Kos, browsing on their phone,
deciding whether to visit the winery in person for a tasting/tour. Secondary:
an online wine buyer (a past visitor, or an EU-based shopper) who wants to
browse the catalog and order/ship bottles without visiting — a real but
secondary journey, not the site's leading job.

## Product Purpose

Convince someone visiting or planning to visit Kos to come taste/tour at the
winery in person. Success is measured by driving in-person visits and
tastings first; online wine sales is a real, wanted capability but secondary
and not yet built.

## Positioning

A small, genuinely family-run winery on Kos (not an industrial operation),
built around a distinctive indigenous grape (Black Lady / Mavrothiliko),
Natural Wine Certified, and a strong local reputation (4.9 average from 79
Google reviews) earned through a personal, informal, drop-in visit
experience — the opposite of a polished, corporate winery-tour operation.

## Operating Context

- Seasonal: open in-season 8am–8pm, every day. Effectively closed in winter;
  winter hours are intentionally not published separately.
- Visits: tastings are free; drop-ins are welcome but visitors are encouraged
  to message ahead to confirm availability. Comfortably hosts ~6 people at a
  time but has hosted 40+. Tours given in Greek, English, German, and
  Romanian. Parking available, wheelchair accessible, pets allowed. A
  grape-picking experience runs in Aug/Sept (subject to availability).
- Sales today: contact-to-order only. The owner wants an eventual
  online-order flow (a cart with QR-code payment) — not yet built.
- Shipping: within the EU only; no shipping outside the EU.
- Current site state: a single "coming soon" holding page is live. The real
  multi-page build is intentionally on hold pending the owner's story copy
  and real photography — see `SITE-CONTENT-NOTES.md`.

## Capabilities and Constraints

- Never state a business fact (hours, prices, wine details, awards,
  testimonials) that isn't confirmed in `SITE-CONTENT-NOTES.md`. Treat
  anything not confirmed there as an open question to flag, not a gap to
  fill in.
- Wines currently sold: Black Lady (dry red, €29), Asfendiano (sweet, €24),
  Platanaki Red (dry red, €14), Platanaki Pink (dry rosé, €14). Several
  wine-catalog details are explicitly unconfirmed (exact Merlot name,
  whether "Red Sweet" = "Asfendiano Sweet Red", the Black Lady grape's
  rediscovery year, grape variety/ABV/bottle size per wine, label photos) —
  do not guess any of these.
- Registered business name: PLATANAKI O.E.; VAT 800511975; landline
  +30 2242 068921 (which number counts as "primary" contact is still
  unresolved).
- Domain: koswines.com is the current target; an earlier mention of
  hatzinikolaouwinery.gr needs reconciling before full launch.
- The full site will eventually be trilingual: Greek / English / German (a
  large German tourist base visits Kos). Old German site text exists, but
  the owner wants new About/story copy written rather than reused.
- Real photography (vineyard, winery building, family, tasting area,
  Petronela's crochet work that reviewers specifically mention) is pending
  from the owner by email. No stock photography or AI-generated imagery may
  substitute for it.
- The site markets, and will eventually sell, alcohol to EU customers: it
  needs an age-verification / legal-drinking-age confirmation step,
  especially before any online-ordering feature ships (confirmed this
  session; not yet implemented).
- Standing rule from this project's working sessions: no build step or push
  happens without the owner's explicit go-ahead each time.

## Brand Commitments

- The owner supplied the real logo (a purple cursive wordmark plus
  "HATZINIKOLAOU WINERY"), already embedded in the current page. This is the
  authoritative brand mark — never redraw, recreate, or replace it with an
  approximation.
- Primary colors: purple and green, anchored to the logo's actual purple,
  with a gold accent introduced to match the real "Black Lady" bottle's
  dark-glass/gold-label look (the owner confirmed this after seeing a photo
  of the actual bottle).
- Style is rustic/traditional (wood, stone, handwritten-style touches) —
  explicitly not modern/minimal. Tone is warm and casual, not formal or
  upscale.
- Member of "Kos Locally Grown"; Natural Wine Certified (certification logo
  pending from the owner). These are real, confirmed marks of quality to
  surface, not decorative badges.

## Evidence on Hand

- `SITE-CONTENT-NOTES.md` — the living source of truth for confirmed
  business facts and explicitly open questions.
- The real logo file (embedded inline in the current page).
- A real photo of the actual "Black Lady" bottle, used to style the current
  bottle illustration — this is not yet a general product-photo library.
- Google reviews: 4.9 average from 79 reviews (owner-confirmed figure;
  re-verify against the live listing before publishing, since ratings
  drift).
- No story/About copy, no vineyard/winery/family photography, and no wine
  label photos exist in the repo yet. These are real absences — do not fill
  them with invented or stock content.

## Product Principles

1. Never state a business fact that isn't confirmed in
   `SITE-CONTENT-NOTES.md` — flag gaps instead of inventing them.
2. Design and copy should earn the in-person visit first; online sales is a
   real but secondary, future capability.
3. The site's actual competitive advantage is its warmth and specificity —
   the real family, the real place, real photos, real reviews. Genericizing
   any of that away is the core failure mode for this project.
4. Real assets only. No stock photography and no AI-generated imagery
   standing in for the real winery, family, or bottles.
5. Nothing ships — no build step, no push — without the owner's explicit
   go-ahead at each step.

## Accessibility & Inclusion

- A trilingual audience (Greek/English/German visitors) is a core
  requirement of the full build, not an afterthought.
- The venue is wheelchair accessible — the site should state this plainly
  rather than omit it.
- An age-verification / legal-drinking-age gate is required given the site
  markets, and will eventually sell, alcohol to EU customers (confirmed this
  session; not yet implemented).
