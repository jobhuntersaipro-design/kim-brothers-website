# Services Page

Full breakdown of the 4 core service lines plus marketing as a supporting fifth row.

## Prerequisites

Build `home-phase-3-sections.md` first (reuses `ServiceCard` component and `services.ts` data).

## Scope

- `/services` route
- Page hero: micro-label (`S E R V I C E S`), display h1, one-paragraph summary
- Five service rows stacked vertically:
  1. Automation & AI agents
  2. Web development
  3. Scraping & data pipelines
  4. SaaS products
  5. Digital marketing (marketing as supporting — visually distinct, smaller treatment)
- Each row: mono category label, serif h2, problem framing (1-2 paragraphs), approach (1-2 paragraphs), "typical deliverables" tag list, 1-2 related case study links
- Bottom CTA band (reused from home)
- `generateMetadata` with unique title/description
- `Service` JSON-LD per row
- `BreadcrumbList` JSON-LD

## Acceptance criteria

- [ ] Page hero renders with micro-label + h1 + intro
- [ ] All 5 service rows render with full copy in plain language (Grade 6-8 reading level)
- [ ] Marketing row is visually de-emphasised vs. the 4 primary rows
- [ ] Each row links to at least 2 related case studies that demonstrate the service
- [ ] Metadata unique; `Service` schema emitted for each service; `BreadcrumbList` emitted
- [ ] No "solutions," "cutting-edge," or other banned words (see `content-guidelines.md`)
- [ ] Mobile: rows stack cleanly, no horizontal scroll
- [ ] Scroll reveals fire on each row
- [ ] Both themes render correctly
- [ ] Lighthouse mobile ≥ 95

## Implementation notes

- Content for each row lives in `lib/services.ts` — keep copy close to the data so it's easy to edit
- "Typical deliverables" is a tag list — reuse the tag/chip component styling from `DESIGN.md` §2 (`--cream-2` background)
- Related case study links should be permanent (stable case study slugs) not hardcoded strings scattered through components
- Page is a Server Component — no client JS needed unless scroll reveal hook requires it (it does; scope the `"use client"` to the smallest boundary)

## Files to create

- `app/(marketing)/services/page.tsx`
- `components/service-row.tsx` — full-width service row (different from `ServiceCard`)
- Extend `lib/services.ts` with full copy (problem, approach, deliverables, related case slugs)
- Extend `lib/schema.ts` with `serviceSchema()` builder

## Out of scope for this phase

- Pricing page or pricing details on service rows (all services are scope-dependent; CTA is "Talk to us")
- Separate per-service pages (`/services/automation`, etc.) — single-page breakdown is enough for v1

## Done when

`/services` renders all 5 rows with real copy, related case study links work, JSON-LD validates in Google's Rich Results Test, Lighthouse mobile ≥ 95, reads naturally in plain English.
