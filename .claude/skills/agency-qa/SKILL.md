---
name: agency-qa
description: Run a complete final QA audit of this website (visual, functional, responsive, accessibility, SEO, performance, and AI-slop design review) using the browser/testing capabilities available in this environment. Use before considering the website, or any substantially-changed page, finished — not for small one-off tweaks.
---

# Agency QA

A full, honest audit of the rendered website — not a read of the source code.
Follow this end to end; do not skip steps because the code "looks right."
This exists to enforce `CLAUDE.md` §2–3 (required testing, honesty about
verification) at the end of a work session, not to replace testing changes
as you make them.

## 0. Setup

1. Confirm what pages currently exist (don't assume — check the repo).
2. Start the site if it isn't already running:
   - Static HTML: serve it locally (e.g. `python3 -m http.server <port>`
     from the project root) rather than opening the file directly via
     `file://`, so relative paths, fetches, and console/network behavior
     match production.
   - If a dev server / build step exists instead, use that.
3. Use a headless browser (Playwright or equivalent already available in
   this environment) to load pages — do not judge anything from source
   alone.

## 1. Inspect every page

For each page in the site:

- Load it and take a full-page screenshot.
- Actually look at the screenshot. Compare it against the brand direction
  and content in `SITE-CONTENT-NOTES.md` / `CLAUDE.md` — does it look
  intentional and specific to this business, or generic/templated?
- Note any AI-slop patterns per `CLAUDE.md` §1: rounded-card overuse,
  purple/blue gradients, glassmorphism, decorative blobs, pill-everything,
  generic icon-grid sections, indiscriminate shadows, repetitive
  interchangeable sections.

## 2. Test interactions

On every page:

- Exercise navigation (including any mobile menu / hamburger).
- Click every button and CTA; confirm each does the right thing.
- Check every link resolves (internal routes, external links open the
  correct URL).
- Check every `tel:` and `mailto:` link has the correct, correctly-formatted
  value.
- If there's a form, submit valid and invalid input and confirm validation
  and feedback behave correctly.

## 3. Test responsive layout

Resize the actual rendered viewport (not just resize the browser chrome —
re-render) to at least:

- 375px (mobile)
- 768px (tablet)
- 1024px (small laptop)
- 1440px (desktop)

At each width:

- Screenshot and inspect it.
- Confirm the mobile layout is a deliberate composition (per `CLAUDE.md`
  §1), not just a squeezed desktop layout — check spacing, hierarchy, image
  cropping/sizing, and touch target sizes specifically at 375px.
- Check for any horizontal scroll, overlap, clipped text, or broken
  wrapping at each width.

## 4. Check console and network

On every page, at least once:

- Read the browser console for errors and warnings.
- Read the network log for failed requests (4xx/5xx), blocked mixed
  content, or CORS failures.
- Report and fix anything found — a clean console/network log is required,
  not optional.

## 5. Accessibility check

- Semantic HTML: correct landmarks (`header`, `nav`, `main`, `footer`
  etc. where appropriate), no div-soup standing in for real elements.
- Heading hierarchy: exactly one `h1` per page, no skipped levels.
- `alt` text: meaningful on informative images, empty (`alt=""`) on
  decorative ones — never missing.
- Keyboard navigation: tab through the whole page; confirm every
  interactive element is reachable and operable, in a sane order.
- Focus states: visibly distinct focus indicator on every focusable
  element.
- Color contrast: check text-vs-background contrast, especially any
  colored buttons/badges and text over images.
- Touch targets: interactive elements sized appropriately (~44×44px
  minimum) at the 375px viewport.

## 6. SEO check

Per page:

- Unique, descriptive `<title>` and meta description.
- Canonical URL set.
- `robots.txt` and `sitemap.xml` present and correct at the site root.
- Favicon present.
- Open Graph tags (title, description, image, url) present.
- Structured data (schema.org) present where it genuinely applies (e.g.
  LocalBusiness/Winery for this site) — not added indiscriminately.

## 7. Performance check

- Images: appropriately sized, compressed, modern formats (WebP/AVIF with
  fallback) where used.
- JavaScript: no unnecessary scripts/libraries for what the page actually
  does.
- Layout shift: nothing visibly jumps as the page loads (images/fonts
  without reserved space, late-injected content, etc.).
- Network requests: no unused fonts, duplicate assets, or dead requests.

## 8. Fix and re-test

- Fix anything found above that is safely within scope to fix now (per
  `CLAUDE.md` §3 — don't just report and move on).
- After fixing, re-test the specific thing you changed (and anything it
  could plausibly affect) — don't assume the fix worked without re-checking
  it in the browser.

## 9. Final report

Report findings grouped into exactly these four sections:

- **Critical** — breaks the site or a core task (broken layout, broken
  link/CTA, console errors, content that's flatly wrong).
- **Important** — meaningfully hurts quality, credibility, accessibility,
  or SEO but doesn't break anything outright.
- **Polish** — small refinements worth doing but low-stakes.
- **Tested** — a plain list of what was actually verified and passed (pages
  loaded, viewport widths checked, interactions exercised, console/network
  clean, accessibility/SEO/performance checks run) — this is the evidence
  that the audit was real, not assumed.

Every item in Critical/Important/Polish that was fixed during this pass
should say so explicitly (don't leave the reader unsure whether a listed
issue is still outstanding). Anything not fixed should say why (out of
scope, needs a decision from the owner, blocked on missing content/assets,
etc.).
