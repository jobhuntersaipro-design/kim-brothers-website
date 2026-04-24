# Current Feature — Status Board

Live status of the build. This file tracks what's active, what's done, and what's next. Update it when you start a feature, when you finish one, and when decisions change.

For the full spec of any feature, see `context/features/[feature-name].md`.

---

## Active feature: home-phase-1-shell

**Status:** In Progress (started 2026-04-24)
**Spec:** [./features/home-phase-1-shell.md](./features/home-phase-1-shell.md)
**Branch:** `feat/home-phase-1-shell`

### Goals

- Root layout (`app/layout.tsx`) with font loading and theme setup
- `(marketing)` route group with its own layout for nav + footer
- Nav component — sticky top, three columns, backdrop-blur, WhatsApp CTA
- Footer component — four-column desktop with brand block and tagline repeat
- Theme toggle — light/dark switch, persists via `localStorage`, respects `prefers-color-scheme` on first visit
- Inline theme script in `<head>` to prevent flash-of-wrong-theme
- Grain overlay via `body::before` (SVG turbulence, blended per theme)
- Self-hosted fonts via `next/font`: Instrument Serif, Geist, JetBrains Mono
- Global CSS tokens from `DESIGN.md` §2 ported into `styles/tokens.css`
- Design system primitives: `Button`, `Container`, `Section`, `MicroLabel`

### Acceptance criteria

- [ ] Light and dark themes both render correctly; no hardcoded colours
- [ ] Theme toggle works and persists across reloads
- [ ] First visit respects `prefers-color-scheme`
- [ ] No flash of wrong theme on load
- [ ] Nav is keyboard-reachable; WhatsApp CTA opens `wa.me/60164609428` in a new tab
- [ ] Footer renders on all routes (lives in `(marketing)` layout)
- [ ] Grain overlay visible on both themes
- [ ] All three fonts self-hosted, no CDN requests
- [ ] Lighthouse score on a blank page ≥ 98

### Notes

- Theme toggle stores `theme` in `localStorage`; inline script reads it (or `matchMedia` fallback) and sets `data-theme` on `<html>` before hydration
- Tokens defined once in `tokens.css` — never hardcode oklch/hex in components
- Grain SVG inlined as a data URI on `body::before` — no separate asset fetch
- Nav backdrop-blur needs a solid colour fallback
- WhatsApp dot uses `green` colour and a 2s pulse animation (spec in `DESIGN.md` §7)
- Out of scope: home page content (Phases 2 and 3), contact form, blog content

**Done when:** Any page renders with working nav + footer + theme toggle + grain, in both themes, with no FOUC, and Lighthouse is green on a scaffolded blank page.

---

## Finished features (reverse chronological)

_None yet. Entries below will be added as features ship. Format per entry:_

```
### [feature-name] — shipped YYYY-MM-DD
One-line summary of what landed.
PR / commit: [link or SHA]
Notes: [anything future sessions should know — gotchas, deviations from spec, tech-debt logged]
```

---

## Up next (in order)

Build the 14 features in this order. Each links to its spec file in `context/features/`.

1. **[home-phase-1-shell](./features/home-phase-1-shell.md)** — nav, footer, theme toggle, grain, fonts, tokens, primitives
2. **[home-phase-2-hero](./features/home-phase-2-hero.md)** — cursor-reactive dot grid + tagline + CTA
3. **[home-phase-3-sections](./features/home-phase-3-sections.md)** — services grid, pipeline, selected work, CTA band
4. **[services](./features/services.md)** — full services page
5. **[work-index](./features/work-index.md)** — case study index with thumbnails
6. **[case-study-phase-1-template](./features/case-study-phase-1-template.md)** — template + Sofie
7. **[case-study-phase-2-remaining](./features/case-study-phase-2-remaining.md)** — BizzFlow → Ads
8. **[about](./features/about.md)** — about page
9. **[contact](./features/contact.md)** — contact form + Resend
10. **[blog-phase-1-infra](./features/blog-phase-1-infra.md)** — MDX pipeline + first post
11. **[blog-phase-2-posts](./features/blog-phase-2-posts.md)** — posts 2 and 3
12. **[404](./features/404.md)** — custom error page
13. **[seo-polish](./features/seo-polish.md)** — metadata, JSON-LD, sitemap, OG images across all pages
14. **[launch](./features/launch.md)** — performance audit, reduced-motion, DNS cutover, GSC

---

## Locked decisions (reference)

- **Hero direction:** B+C combo — dot grid canvas hero + pipeline section below
- **Accent colour:** Electric blue (`oklch(0.58 0.18 248)` light / `oklch(0.72 0.17 248)` dark)
- **Theme:** Light + dark both ship with user toggle in nav; first visit = system preference
- **Blog in v1:** Yes
- **404 in v1:** Yes
- **Case studies in v1:** 7, fixed order: Sofie → BizzFlow → EasyStaff → Thrive Chiropractic → Tisha's PO Extractor → Unifi Scraping → Ads
- **No published numbers** in case studies — qualitative only
- **Phone format:** `+6016 460 9428`
- **Primary CTA:** WhatsApp direct (`wa.me/60164609428`)
- **Grain overlay:** On

---

## How to use this file

**When starting a feature:**
- Move it from "Up next" to "Active feature"
- Note the date
- Read the feature spec file plus CLAUDE.md, DESIGN.md, and any context files it references

**When finishing a feature:**
- Move it from "Active feature" to "Finished features" with a one-line summary, date, and any notes
- If it revealed a problem with a future spec, update that spec file

**When adding a new feature mid-build:**
- Create a new file in `context/features/` using the same structure as existing ones
- Add it to "Up next" at the right position

**When changing a locked decision:**
- Update "Locked decisions" here
- Update `CLAUDE.md` if the change affects constraints
- Update `DESIGN.md` if the change affects the design spec
- Note the change in the relevant feature file if it's already been built

---

## Notes for future Claude sessions

- Read `CLAUDE.md` first, then `DESIGN.md`, then this file, then the active feature spec.
- `DESIGN.md` is the canonical design spec. If it conflicts with `context/design-system.md`, DESIGN.md wins.
- Both themes ship. Don't build light-only or dark-only. Test every component in both.
- All 7 case studies are in v1. Don't suggest dropping any to ship faster.
- Never publish numbers in case studies — even if tempting, even if Chris shares impressive metrics.
