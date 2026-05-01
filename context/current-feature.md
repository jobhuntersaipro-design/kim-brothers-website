# Current Feature — Status Board

Live status of the build. This file tracks what's active, what's done, and what's next. Update it when you start a feature, when you finish one, and when decisions change.

For the full spec of any feature, see `context/features/[feature-name].md`.

---

## Active feature

_None — ready to pick up the next one._

First feature to pick up: `home-phase-3-sections.md`.

---

## Finished features (reverse chronological)

### home-phase-2-hero — shipped 2026-04-30
Built the cursor-reactive dot grid canvas hero plus the content layer (h1 with italic accent on *growing*, supporting paragraph, WhatsApp + work CTAs). Eyebrow micro-label dropped before merge — the h1 carries enough weight on its own.
Commit: `8a24e93`
Notes:
- Single rAF loop, two-pass render (base ink-faint dots, then accent-coloured cursor dots) keeps `fillStyle` writes to two per frame instead of one per dot.
- Pointer is tracked at `window` level (not on the canvas) so the canvas wrapper stays `pointer-events-none` and never blocks the WhatsApp CTA layered above it.
- Theme palette is re-read via a `MutationObserver` on `data-theme` so the dot/accent colours flip with the theme toggle without remount.
- `(hover: none)` and `prefers-reduced-motion: reduce` share the static-fallback branch — paint once, no rAF, no listeners.
- Section reserves `min-h-[min(900px,90svh)]` up-front to keep CLS at zero when the client canvas mounts.
- Decided to defer all extra reveal/magnetic-CTA animation until after Phase 3 so we land the sections first and motion gets layered in once.

### home-phase-1-shell — shipped 2026-04-24
Scaffolded Next.js 16 + React 19.2 + Tailwind v4 and shipped the app shell: nav, footer, theme toggle (persisted, respects `prefers-color-scheme`, no FOUC), grain overlay, self-hosted fonts, DESIGN.md §2 tokens, and the core primitives (Container, Section, MicroLabel, Button).
Commit: `f48a329`
Notes:
- `reactCompiler` moved to the top-level `next.config.ts` in Next 16 (out of `experimental`); needs `babel-plugin-react-compiler` as a devDep.
- `next lint` was removed in Next 16; the `lint` script uses `eslint .` with the flat export of `eslint-config-next`.
- Theme toggle is state-free — the inline `<ThemeScript>` sets `data-theme` on `<html>` before hydration; CSS selectors drive which icon shows. This avoids the `react-hooks/set-state-in-effect` rule and any SSR/CSR mismatch.
- Base element styles (`body`, `a`, etc.) must live inside `@layer base` — otherwise unlayered rules beat Tailwind's utility classes and every `text-*` hover silently dies. If a future component looks like its `text-ink` isn't applying, check you didn't add an unlayered base rule.
- Button `primary` and `accent` variants are pinned to theme-stable tokens (`--ink-stable`, `--cream-stable`, `--accent-stable`) so CTAs don't invert with the theme. `ghost` deliberately flips.
- Footer is pinned to `--ink-stable` / `--cream-stable`. Per DESIGN.md §5 it's an "ink surface" — it stays dark in both themes rather than inverting.
- Tagline removed from the footer brand block; `em-accent` on `--accent-ink` is unreadable on an ink surface.
- `/services`, `/work`, `/about`, `/blog`, `/contact` nav links lead to non-existent pages (expected 404s) until their feature phases land.

---

## Up next (in order)

Build the 14 features in this order. Each links to its spec file in `context/features/`.

1. **[home-phase-3-sections](./features/home-phase-3-sections.md)** — services grid, pipeline, selected work, CTA band
2. **[services](./features/services.md)** — full services page
3. **[work-index](./features/work-index.md)** — case study index with thumbnails
4. **[case-study-phase-1-template](./features/case-study-phase-1-template.md)** — template + Sofie
5. **[case-study-phase-2-remaining](./features/case-study-phase-2-remaining.md)** — BizzFlow → Ads
6. **[about](./features/about.md)** — about page
7. **[contact](./features/contact.md)** — contact form + Resend
8. **[blog-phase-1-infra](./features/blog-phase-1-infra.md)** — MDX pipeline + first post
9. **[blog-phase-2-posts](./features/blog-phase-2-posts.md)** — posts 2 and 3
10. **[404](./features/404.md)** — custom error page
11. **[seo-polish](./features/seo-polish.md)** — metadata, JSON-LD, sitemap, OG images across all pages
12. **[launch](./features/launch.md)** — performance audit, reduced-motion, DNS cutover, GSC

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
