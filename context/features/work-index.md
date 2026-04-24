# Work Index Page

The case study index at `/work`. Lists all 7 projects with thumbnail demos.

## Prerequisites

Build `home-phase-3-sections.md` first (reuses `WorkCard` patterns). Thumbnail demo components will be stubbed here and filled in case study phases.

## Scope

- `/work` route
- Page hero: micro-label (`W O R K`), display h1, one-paragraph summary
- Index grid — 7 case study cards in fixed order:
  1. Sofie
  2. BizzFlow
  3. EasyStaff
  4. Thrive Chiropractic
  5. Tisha's PO Extractor
  6. Unifi Scraping
  7. Ads
- Each card: category micro-label, serif title, one-line description, live thumbnail demo (mini interactive preview), click → `/work/[slug]`
- Thumbnail demo components (one per case study, small interactive teasers):
  - Sofie: mini WhatsApp chat
  - BizzFlow: animated bill preview
  - EasyStaff: mini dashboard chart
  - Thrive: browser frame with hero screenshot
  - Tisha's PO: upload interface hint
  - Unifi Scraping: Telegram message preview
  - Ads: ad creative thumbnail
- Thumbnails are lightweight — pure CSS/SVG where possible, no heavy dependencies
- `generateMetadata` + `CollectionPage` + `BreadcrumbList` JSON-LD

## Acceptance criteria

- [ ] All 7 cards render in locked order (see `content-guidelines.md`)
- [ ] Each card has a thumbnail demo that feels alive but is not distracting
- [ ] Card click navigates to `/work/[slug]` (pages may 404 until built — fine for now)
- [ ] Grid is responsive: 3-up desktop, 2-up tablet, 1-up mobile
- [ ] Scroll reveals fire on cards as they enter viewport
- [ ] Metadata unique; schema validates
- [ ] Both themes render correctly
- [ ] Lighthouse mobile ≥ 95
- [ ] No published numbers anywhere on cards or thumbnails

## Implementation notes

- Case study data lives in `lib/cases.ts` — typed array with slug, title, category, description, featured flag
- Thumbnail demos: each is its own small component in `components/thumbnails/`, imported by `WorkCard` based on slug
- Keep thumbnails below 10KB gzipped each — these are not full demos, just teasers
- Don't autoplay animations in thumbnails — trigger on hover or stay static, otherwise the page becomes a circus
- If a thumbnail needs real screenshots later, use `next/image` with fixed dimensions

## Files to create

- `app/(marketing)/work/page.tsx`
- `components/work-grid.tsx`
- `components/thumbnails/sofie.tsx`
- `components/thumbnails/bizzflow.tsx`
- `components/thumbnails/easystaff.tsx`
- `components/thumbnails/thrive.tsx`
- `components/thumbnails/tishas-po.tsx`
- `components/thumbnails/unifi-scraping.tsx`
- `components/thumbnails/ads.tsx`
- Extend `lib/cases.ts` with full data for all 7

## Out of scope for this phase

- Individual case study pages (`/work/[slug]`) — separate features
- Filtering / sorting on the index — not needed for 7 cards
- Pagination — not needed

## Done when

`/work` renders all 7 cards in fixed order, thumbnails work, navigation to individual case studies works (even if target pages are stubs), responsive breakpoints hold, metadata + schema emit correctly.
