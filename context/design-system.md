# Design System

**This file is a pointer. `DESIGN.md` at the repo root is the canonical design spec.**

See `DESIGN.md` for:

- Voice & tagline (§1)
- Colour tokens, light + dark (§2) — electric blue accent locked
- Typography (§3) — Instrument Serif / Geist / JetBrains Mono
- Spacing & layout (§4) — 2px radius, 1320px container
- Components (§5) — buttons, cards, pipeline, nav, footer
- Hero specification (§6) — locked as cursor-reactive dot grid (B), with pipeline (C) as a separate home section
- Motion system (§7)
- Page inventory (§8)
- Accessibility (§9)
- SEO markup hooks (§10)
- Decisions logged (§12)
- Asset pack (§13)

## Overrides applied after `DESIGN.md` was produced

These decisions were locked *after* `DESIGN.md` was written and override the doc where they conflict:

1. **Both themes ship with a user toggle in the nav.** `DESIGN.md` §12 lists dark as the "marketing default" — that is no longer true. Neither is default; first visit respects `prefers-color-scheme`, user choice persists after.
2. **7 case studies in v1, not 5.** The locked list is: Sofie, BizzFlow, EasyStaff, Thrive Chiropractic, Tisha's PO Extractor, Unifi Scraping, Ads. `DESIGN.md` §8 and §15 reference 5; extend to 7. SmartChiro is dropped from v1.
3. **Blog is in v1.** `DESIGN.md` §11 lists it as out of scope / v1.1. Extend the page inventory to include `/blog` and `/blog/[slug]`.
4. **404 page is in v1.** `DESIGN.md` §8 notes it as "to add." Build it in v1.
5. **No published numbers in case studies.** The "metrics strip" in `DESIGN.md` §8 layout is kept, but filled with qualitative signals only — never numeric metrics. See `content-guidelines.md` for the full rule and examples.
6. **Phone format:** `+6016 460 9428` (business-card format), not `+60 16 460 9428`.

When these overrides are folded into `DESIGN.md` in a future revision, this file can be deleted.
