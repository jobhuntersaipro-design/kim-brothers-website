# SEO Polish

Cross-cutting SEO pass after all pages exist. Locks in the technical SEO foundation that the site's organic ranking depends on.

## Prerequisites

All pages must exist: `home-phase-3-sections.md`, `services.md`, `work-index.md`, `case-study-phase-2-remaining.md`, `about.md`, `contact.md`, `blog-phase-2-posts.md`, `404.md`.

## Scope

- **Per-page `generateMetadata`** — audit every page for unique `title`, `description`, canonical, OpenGraph, Twitter card; fix anything missing or duplicate
- **JSON-LD builders** consolidated in `lib/schema.ts`:
  - `organizationSchema()` — home
  - `localBusinessSchema()` — about, contact
  - `serviceSchema()` — each service row on services page
  - `articleSchema()` — each case study and blog post
  - `breadcrumbSchema()` — all inner pages
  - `webSiteSchema()` — home (with `SearchAction` if site search exists — it doesn't, skip)
  - `blogSchema()` — blog index
  - `blogPostingSchema()` — each blog post
  - `faqPageSchema()` — any page with a Q&A block (services page if applicable)
- **`app/sitemap.ts`** — auto-generates from all routes including dynamic `[slug]` routes for case studies and blog posts
- **`app/robots.ts`** — allows all, points to sitemap, disallows `/api/*`
- **OG image templates** — consolidated into 2-3 shared templates (home/services, case studies, blog posts), auto-generated via `ImageResponse`
- **Per-page audit:**
  - One `<h1>` per page
  - Proper heading hierarchy (no skipping levels)
  - All images use `next/image` with `sizes` and `alt`
  - Internal linking sensible — every page links to 2+ related pages
  - Canonical URL set correctly (avoid trailing slash inconsistency)
  - No `noindex` where there shouldn't be (other than 404, drafts, etc.)

## Acceptance criteria

- [ ] Every route has unique `title` and `description`
- [ ] Every applicable page has JSON-LD injected; all validate in Google's Rich Results Test
- [ ] `sitemap.xml` builds correctly; includes all 7 case studies, all blog posts, all static pages
- [ ] `robots.txt` is correct and points to sitemap
- [ ] OG images render correctly for all page types (check 5+ pages across types)
- [ ] Every page has exactly one `<h1>`
- [ ] No `<img>` tags anywhere (all `next/image`)
- [ ] Every image has `alt` text (meaningful or empty for decorative)
- [ ] Canonical URLs consistent (either all trailing slash or all no trailing slash — pick one in `next.config.ts`)
- [ ] Lighthouse SEO score ≥ 95 on every page type

## Implementation notes

- Consolidate schema builders so no route writes JSON-LD inline — easier to audit
- Use TypeScript to catch missing required schema fields at compile time
- For OG images, use the `@vercel/og` / `ImageResponse` API with self-hosted fonts (read fonts from `public/fonts/` at runtime) — CDN fonts won't work in edge runtime
- Sitemap should exclude `/api/*`, any drafts, and `not-found`
- Canonical URLs: Next.js 16 doesn't enforce trailing slash behaviour — set `trailingSlash: false` in `next.config.ts` and stick with it
- Add basic SEO linting: a test that fails if any route doesn't export `generateMetadata`

## Files to create / modify

- `lib/schema.ts` — expand with all builders
- `app/sitemap.ts`
- `app/robots.ts`
- OG image generators for each route type (home, services, case studies, blog posts, default)
- Per-page `page.tsx` files — audit and fix metadata
- `next.config.ts` — set `trailingSlash`, any other SEO-relevant config
- Optional: `tests/seo.test.ts` — linting test

## Out of scope for this phase

- Google Search Console setup — post-launch, handled in `launch.md`
- Google Business Profile — post-launch
- Backlink building — ongoing, not a launch task
- Multilingual hreflang — no Bahasa Malaysia in v1

## Done when

Every page has unique metadata + validated JSON-LD, sitemap includes everything, robots is correct, OG images render for all page types, Lighthouse SEO ≥ 95 everywhere, no accessibility/SEO regressions.
