# Hatzinikolaou Winery — Project Instructions

These are permanent, standing instructions for any work on this website. They
apply to every session, every page, and every change — not just the initial
build. Read `SITE-CONTENT-NOTES.md` for the current business content, status,
and open questions before making content decisions; read this file for how to
design, build, and verify the site itself.

## 1. Design quality bar

This is a real, professional website for a real family business, not a demo
or a placeholder. Design and code to that standard on every change:

- **Never produce generic AI-looking web design.** If a layout, section, or
  component would look at home in any startup landing page template
  regardless of the business behind it, it is wrong for this site. Every
  design decision should be traceable to this winery specifically — its
  place (Kos), its people, its wines, its actual brand palette and logo —
  not to "what web design generators tend to output."
- **Prioritize intentional visual hierarchy, typography, spacing,
  composition, imagery, and branding** over defaulting to a component
  library's look. Every page needs a deliberate focal point and reading
  order, not a stack of evenly-weighted sections.
- **Avoid overused AI-design patterns**, specifically:
  - Excessive rounded cards / everything-is-a-card layouts
  - Purple-to-blue gradients (or any generic SaaS gradient) used as a crutch
  - Excessive glassmorphism / frosted blur panels
  - Meaningless decorative blobs or abstract shapes with no relation to the
    brand
  - Excessive pill-shaped buttons/badges used everywhere by default
  - Generic icon-in-a-circle feature grids ("3 icons, 3 headlines, 3
    one-liners") used as a default section pattern
  - Unnecessary drop shadows applied uniformly instead of purposefully
  - Repetitive, interchangeable sections that could belong to any business
- **Treat mobile design as a first-class design**, not a squeeze of the
  desktop layout. Design mobile compositions deliberately — hierarchy,
  spacing, and imagery choices can and should differ from desktop, not just
  reflow into a single column.

## 2. Required testing on every substantial change

- **Test at these viewport widths, minimum:** 375px, 768px, 1024px, 1440px.
  Actually resize/re-render at each width — do not infer responsiveness from
  the CSS alone.
- **Check every interactive element**: navigation (including mobile menu if
  present), buttons, links, forms and form validation, all CTAs, `tel:`
  links, `mailto:` links, and external links (correct target, correct URL,
  no dead links).
- **Check the browser console** for JS errors/warnings and check the network
  panel for failed requests (404s, blocked mixed content, CORS failures)
  on every page tested.
- **Check accessibility**: semantic HTML (correct landmark/element choices,
  not div-soup), a logical heading hierarchy (one `h1`, no skipped levels),
  meaningful `alt` text on informative images (empty `alt` on decorative
  ones), full keyboard navigation (tab order, nothing keyboard-inaccessible),
  visible focus states, sufficient color contrast, and touch targets sized
  for mobile (roughly 44×44px minimum).
- **Check SEO**: unique/descriptive `<title>`, meta description, canonical
  URL, `robots.txt`, `sitemap.xml`, favicon, Open Graph tags, and structured
  data (schema.org) where it genuinely applies (e.g. LocalBusiness/Winery
  markup) — not stuffed in for its own sake.
- **Check performance**: images sized/compressed/served in modern formats,
  no unnecessary JavaScript or render-blocking resources, no unnecessary
  layout shift (CLS), no unnecessary network requests (unused fonts,
  duplicate assets, dead code).

## 3. Standards of honesty about verification

- **Never claim something works unless it was actually tested.** "This
  should work" is not a substitute for opening it and checking.
- **Never claim the site is responsive without testing multiple viewport
  sizes** (see §2) and looking at the actual rendered result at each one.
- **After any substantial change, actually open the rendered website in a
  browser or headless browser and inspect it** — visually and via the
  console/network panel — rather than judging correctness from reading the
  source code alone.
- **When a visual or functional problem is found during testing, fix it.**
  Do not just report a defect and move on if it's within scope to correct
  it in the same pass.
- **Before considering the website (or any page of it) finished, run a
  complete QA pass**: visual, functional, responsive, accessibility, SEO,
  and performance — not a partial check of whichever category is
  convenient. Use the `agency-qa` skill (`.claude/skills/agency-qa/`) for
  this — it codifies the full checklist and reporting format.

## 4. Where to look first

- `SITE-CONTENT-NOTES.md` — confirmed business facts, pending/open
  questions, and current build status. Do not invent facts (hours, prices,
  wine details, awards, etc.) that aren't confirmed there — flag them as
  open questions instead.
- The full build (multi-page, bilingual EL/EN/DE, wine catalog, etc.) is
  currently on hold pending the owner's story, photos, and final content —
  check current repo state and recent commit history before assuming what
  stage the project is at.
