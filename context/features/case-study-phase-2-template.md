# Case Study — Phase 2: Remaining 6

Fill out the remaining 6 case studies on the template built in Phase 1. Pure content work — no new components.

## Prerequisites

Build `case-study-phase-1-template.md` first. If the template isn't reusable without changes, go back and fix that before continuing.

## Scope

Create one content file per remaining case study, in this order:

1. BizzFlow — `content/case-studies/bizzflow.ts`
2. EasyStaff — `content/case-studies/easystaff.ts`
3. Thrive Chiropractic — `content/case-studies/thrive.ts`
4. Tisha's PO Extractor — `content/case-studies/tishas-po.ts`
5. Unifi Scraping — `content/case-studies/unifi-scraping.ts`
6. Ads — `content/case-studies/ads.ts`

Each file includes: slug, title, category, one-line summary, hero visual path, qualitative metrics strip, problem, approach, outcome, tech stack, supporting visuals, related slugs.

Content briefs for each are in `kim-brothers-project-overview.md` §13 — use them as starting drafts and rewrite in the site's voice (plain language, no numbers, no banned words).

## Acceptance criteria

Per case study:

- [ ] Content file created, follows the type shape from Phase 1
- [ ] Page renders at `/work/[slug]`
- [ ] Reads in plain English, Grade 6-8 reading level
- [ ] No numbers anywhere on the page (metrics strip has qualitative signals only)
- [ ] No banned words (see `content-guidelines.md`)
- [ ] Related work links to 2 other case studies that make sense to the reader
- [ ] Hero visual and supporting visuals use `next/image` with meaningful alt text
- [ ] OG image generates correctly
- [ ] Metadata unique per slug
- [ ] JSON-LD validates
- [ ] Lighthouse mobile ≥ 95

Global:

- [ ] All 7 case studies now live and linked from `/work`
- [ ] `generateStaticParams` correctly pre-renders all 7 slugs at build
- [ ] Related work links form a sensible graph (no orphans, no cycles)

## Implementation notes

- Use repo visuals when available; placeholders with a clear "asset TBD" flag otherwise
- Tisha's PO Extractor: live site at tishas-po.vercel.app — can screenshot the upload interface for the hero visual
- Thrive: live site at thrivechiropractic.com.my — browser-frame screenshot works for hero
- Ads: use 1-2 actual ad creatives as visuals (with client's approval, since they may include branding from Unifi)
- Unifi Scraping: hardest one visually — consider a Telegram-message-style mockup or a diagram showing the flow
- Keep "approach" paragraphs technical but still plain-language — name stacks (Node.js, Next.js, Prisma) without jargon
- Don't copy briefs verbatim — rewrite in the site voice

## Files to create

Per case study: `content/case-studies/[slug].ts`.

No new component files expected. If you find yourself creating a new component, the template is probably wrong — go fix Phase 1 first.

## Out of scope for this phase

- Any design changes to the case study template (belongs in Phase 1)
- Adding a case study not in the locked 7
- Reordering the case studies

## Done when

All 7 case study pages render with real content, all `/work/[slug]` URLs work, build pre-renders all 7 statically, OG images generate, no numbers anywhere, all copy passes the banned-words check.
