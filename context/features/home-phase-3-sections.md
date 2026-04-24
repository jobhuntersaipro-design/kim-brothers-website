# Home — Phase 3: Sections

Everything below the hero: services grid, pipeline, selected work, CTA band. Content-heavy but mechanically simpler than the hero.

## Prerequisites

Build `home-phase-2-hero.md` first. Some case study data will be placeholder until `case-study-phase-1-template.md` ships — that's fine for this phase.

## Scope

Four stacked sections on `/`:

1. **Services grid** — 4 primary service cards (Automation, Web, Scraping, SaaS) + marketing as a full-width supporting strip below. Each card has: mono category label, serif title, body copy, ink-wipe hover (spec in `DESIGN.md` §5).
2. **Pipeline section** — the "C" in B+C. Five nodes connected by hairline + traveling accent pulse (5.2s sweep). Auto-rotates through pipeline variants every 9s, stops on click. Mobile collapses to 2-up grid, connectors hide. Multiple pipelines: WhatsApp → AI → lead; scraper → dashboard → report; brief → site → live. Full spec in `DESIGN.md` §5 + §7.
3. **Selected work** — 3 featured case study cards pulled from the full 7 (pick: Sofie, EasyStaff, Tisha's PO — strongest visual diversity). Each card has thumbnail demo, title, one-line description, category tag. Click → case study page.
4. **CTA band** — full-width section with "Ready to focus on growing?" h2 + WhatsApp CTA + secondary link to `/services`.

Section dividers: letter-spaced mono micro-labels (`S E R V I C E S`, `H O W   I T   W O R K S`, `S E L E C T E D   W O R K`).

## Acceptance criteria

- [ ] Services grid renders 4 cards + marketing strip; ink-wipe hover works (500ms ease)
- [ ] Pipeline auto-rotates through variants; clicking a tab stops rotation and switches view
- [ ] Pipeline accent pulse animates along the connector hairline (transform-only, GPU)
- [ ] Mobile: pipeline collapses cleanly to 2-up grid, no horizontal scroll
- [ ] Selected work shows 3 cards with placeholder thumbnails (real ones come with case-study phases)
- [ ] CTA band renders with working WhatsApp link
- [ ] Scroll reveals fire on each section (IntersectionObserver, 0.8s fade + 14px rise per `DESIGN.md` §7)
- [ ] LCP stays ≤ 1.5s — scroll content must not compete with hero for the LCP element
- [ ] All section dividers use the mono micro-label pattern
- [ ] All animations GPU-composited; no layout thrash
- [ ] Respects `prefers-reduced-motion: reduce` — no auto-rotation, no pulse

## Implementation notes

- Services data lives in `lib/services.ts` — simple TS array, typed
- Pipeline data lives in `lib/pipelines.ts` — array of variants, each with 5 nodes + label
- Pipeline auto-rotate: `setInterval` in a `useEffect`, cleared on click; store active index in `useState`
- Pipeline pulse: single animated element per connector segment, `transform: translateX()` on a keyframe
- Selected work cards: use the case study `lib/cases.ts` data (even if case study pages aren't built yet — just link to `/work/[slug]` knowing it'll 404 until the pages ship)
- Scroll reveals: one shared `useIntersectionObserver` hook, applied via data attribute or className
- Each section is its own component: `ServicesGrid`, `PipelineSection`, `SelectedWork`, `CtaBand`

## Files to create

- `components/services-grid.tsx`
- `components/service-card.tsx`
- `components/pipeline-section.tsx`
- `components/pipeline.tsx`
- `components/selected-work.tsx`
- `components/work-card.tsx`
- `components/cta-band.tsx`
- `components/hooks/use-intersection-observer.ts`
- `lib/services.ts`
- `lib/pipelines.ts`
- Extend `lib/cases.ts` if needed for thumbnail stubs

## Out of scope for this phase

- Full `/services` page — separate feature (`services.md`)
- Full case study pages — separate features
- Real case study thumbnails — placeholders OK for now, swap in during case study phases

## Done when

`/` renders end-to-end with hero + all 4 sections + footer, reveals fire on scroll, pipeline auto-rotates, ink-wipe hovers work, mobile layout holds, LCP stays ≤ 1.5s, Lighthouse mobile ≥ 95.
