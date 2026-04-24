# Case Study — Phase 1: Template + Sofie

Build the shared case study page template and prove it with the first real case study (Sofie). This is isolated because getting the pattern right once saves six rebuilds later.

## Prerequisites

Build `work-index.md` first. Uses `lib/cases.ts` data model established there.

## Scope

- `/work/[slug]` dynamic route
- Case study page layout per `DESIGN.md` §8, adjusted for the no-numbers rule:
  1. Header: micro-label (category), serif h1 (project name), one-line summary
  2. Hero visual: screenshot or diagram (large, featured)
  3. **Metrics strip** — qualitative signals only, NO numbers (e.g. "Live customer," "Paying users," "Daily runs," "Production-grade" — see `content-guidelines.md` for bad vs good examples)
  4. Problem — 2–3 short paragraphs, in the client's voice where possible
  5. Approach — 2–3 paragraphs, plain language
  6. Outcome — qualitative description
  7. Tech stack — simple list with icons/logos
  8. Additional visuals — 2–4 supporting screenshots or diagrams
  9. Related work — 2 other case studies to click through to
  10. CTA — "Want something similar built? Talk to us."
- Template picks up content from `content/case-studies/[slug].ts` files (typed case study data)
- First real case study: **Sofie** (content briefs in `kim-brothers-project-overview.md` §13)
- `generateMetadata` per slug, `generateStaticParams` for all 7 slugs
- `Article` + `BreadcrumbList` JSON-LD per page
- Auto-generated OG image per case study via `app/work/[slug]/opengraph-image.tsx`

## Acceptance criteria

- [ ] `/work/sofie` renders end-to-end with real content
- [ ] Metrics strip uses qualitative signals only — NO numeric metrics anywhere on the page
- [ ] All 7 slugs pre-render statically (check `.next` output)
- [ ] Metadata unique per slug
- [ ] `Article` + `BreadcrumbList` JSON-LD validates in Google's Rich Results Test
- [ ] OG image auto-generates with project title and Kim Brothers mark
- [ ] Related work section links to 2 real case studies (not the current one)
- [ ] Final CTA renders and works (WhatsApp)
- [ ] Copy reads in plain English (Grade 6-8), no corporate fluff, no banned words
- [ ] Content file structure is reusable — adding a new case study is "create a file, done"
- [ ] Both themes render correctly
- [ ] Lighthouse mobile ≥ 95 on `/work/sofie`

## Implementation notes

- Case study content type in `lib/types.ts`: `{ slug, title, category, oneLineSummary, heroVisual, metricsStrip: string[] (qualitative only!), problem, approach, outcome, techStack, visuals, relatedSlugs }`
- Problem/approach/outcome can be markdown strings — render via a small MDX or markdown component
- Or: use plain TSX in the content files for full control (no MDX needed for case studies)
- Enforce "no numbers" at the type level if possible — or add a lint rule / comment banner in the file template
- OG image template: cream background, charcoal Kim Brothers mark top-left, Instrument Serif title, JetBrains mono category label — spec in `DESIGN.md` §10
- Hero visual and supporting visuals use `next/image` with proper `sizes`

## Files to create

- `app/(marketing)/work/[slug]/page.tsx` — the template
- `app/(marketing)/work/[slug]/opengraph-image.tsx` — OG image generator
- `components/case-study/header.tsx`
- `components/case-study/metrics-strip.tsx` — takes `signals: string[]`, enforces no-numbers via code comment + prop naming
- `components/case-study/content-section.tsx` — shared "problem / approach / outcome" block
- `components/case-study/tech-stack.tsx`
- `components/case-study/related.tsx`
- `content/case-studies/sofie.ts` — first real case study
- `lib/case-study-loader.ts` — loads content by slug, typed
- Extend `lib/schema.ts` with `articleSchema()` builder

## Out of scope for this phase

- Remaining 6 case studies — `case-study-phase-2-remaining.md`
- Actual screenshots / assets for Sofie — use placeholders if Chris hasn't provided them yet; flag in the PR
- Comment / discussion section — not in v1

## Done when

`/work/sofie` renders with real content, template is generic enough to drop in the other 6 cases by creating content files only, no numbers anywhere, JSON-LD validates, OG image generates, Lighthouse ≥ 95.
