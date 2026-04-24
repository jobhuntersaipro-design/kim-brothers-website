# Home — Phase 1: Shell

Nav, footer, app shell, theme toggle, and the grain overlay. This is the foundation every other page sits on.

## Prerequisites

None. This is the first feature after scaffolding.

## Scope

- Root layout (`app/layout.tsx`) — html shell, font loading, theme setup
- `(marketing)` route group with its own layout for nav + footer
- Nav component — sticky top, three columns (brand + links + WhatsApp CTA), `backdrop-filter: blur(12px)`, 82% theme-bg
- Footer component — four-column desktop, brand block with tagline repeat
- Theme toggle — nav button, switches light/dark, persists choice, respects `prefers-color-scheme` on first visit
- Inline theme script in `<head>` to prevent flash-of-wrong-theme on load
- Grain overlay via `body::before` (SVG turbulence, `opacity: 0.5` light / `0.35` dark with `mix-blend-mode: screen`)
- Fonts loaded via `next/font`: Instrument Serif, Geist, JetBrains Mono
- Global CSS tokens from `DESIGN.md` §2 ported into `styles/tokens.css`

## Acceptance criteria

- [ ] Light and dark themes both render correctly; no hardcoded colours anywhere
- [ ] Theme toggle works; choice persists across reloads via `localStorage`
- [ ] First visit respects `prefers-color-scheme` — doesn't force a default
- [ ] No flash of wrong theme on load (inline script runs before paint)
- [ ] Nav is keyboard-reachable; WhatsApp CTA opens `wa.me/60164609428` in a new tab
- [ ] Footer renders on all routes (lives in `(marketing)` layout)
- [ ] Grain overlay visible on both themes, subtle enough not to impede readability
- [ ] All three fonts self-hosted, no CDN requests
- [ ] Lighthouse score on a blank page ≥ 98

## Implementation notes

- Theme toggle pattern: store `theme` in `localStorage`; inline script in `<head>` reads it (or `matchMedia` fallback) and sets `data-theme` on `<html>` before hydration
- Tokens must be defined once in `tokens.css` and referenced via CSS custom properties — never hardcode oklch/hex in components
- Grain SVG can be inlined as a data URI on `body::before` — no separate asset fetch
- Nav backdrop-blur needs a solid colour fallback for browsers without `backdrop-filter` support
- WhatsApp dot uses the `green` colour and a 2s pulse animation (spec in `DESIGN.md` §7)

## Files to create

- `app/layout.tsx` — root layout with inline theme script and font imports
- `app/(marketing)/layout.tsx` — nav + footer wrapper
- `components/nav.tsx` — nav component (client, for theme toggle)
- `components/footer.tsx` — footer component (server)
- `components/theme-toggle.tsx` — toggle button
- `components/ui/button.tsx`, `components/ui/container.tsx`, `components/ui/section.tsx`, `components/ui/micro-label.tsx` — design system primitives
- `styles/tokens.css` — all CSS custom properties (both themes)
- `styles/globals.css` — imports tokens, sets grain, base element styles
- `lib/fonts.ts` — `next/font` declarations

## Out of scope for this phase

- Home page content (hero, services, pipeline, etc.) — that's Phases 2 and 3
- Contact form (nav links to `/contact` which won't exist yet — 404 is fine until the page lands)
- Blog nav item (included in the nav structure but links to placeholder until blog phase)

## Done when

Any page in the app renders with working nav + footer + theme toggle + grain, in both themes, with no FOUC, and Lighthouse is green on a scaffolded blank page.
