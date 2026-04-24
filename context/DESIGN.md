# Kim Brothers — Design System & Direction Notes

**Client:** Kim Brothers Ent. (Malaysia) · CEO Lam Kim Sim (Chris)
**Project:** Website redesign
**Locked direction (as of this doc):** Dark theme · Electric blue accent · Cursor-reactive dot grid hero
**Prepared for:** Build handoff (Next.js 16 · TypeScript · Tailwind v4)

---

## 1. Voice & tagline

- Hero tagline is fixed: **"Focus on growing, not doing."** — pulled from the business card, never rewritten.
- Copy voice: confident, direct, slightly technical. No corporate-speak, no hype words ("cutting-edge", "world-class", "synergy", "unlock"). Short sentences. Matches the editorial restraint of the business card.
- Recurring type device: letter-spaced all-caps micro-labels — `S E R V I C E S`, `H O W I T W O R K S`, `S T A R T H E R E`. Used for eyebrows, section dividers, nav micro-copy.

---

## 2. Color system

### Light mode (cream surface)
| Token | Value | Use |
|---|---|---|
| `--cream` | `#F2EEE3` | Page background (matches card front) |
| `--cream-soft` | `#F7F4EC` | Secondary surface (cards, inputs) |
| `--cream-2` | `#EAE4D4` | Tag/chip background |
| `--ink` | `#1A1816` | Primary text, buttons, bold surfaces |
| `--ink-2` | `#2A2622` | Body text |
| `--ink-mute` | `#6B635A` | Secondary / supportive copy |
| `--ink-faint` | `#A89F90` | Numerals, micro-meta |
| `--line` | `rgba(26,24,22,0.12)` | Hairline dividers |
| `--line-strong` | `rgba(26,24,22,0.22)` | Input borders, stronger rules |

### Dark mode (charcoal surface) — **locked**
| Token | Value | Use |
|---|---|---|
| `--cream` | `#141210` | Page background |
| `--cream-soft` | `#1A1815` | Secondary surface |
| `--cream-2` | `#1C1A17` | Tag/chip |
| `--ink` | `#EEE8D9` | Primary text |
| `--ink-2` | `#D9D2C0` | Body |
| `--ink-mute` | `#938A7B` | Secondary |
| `--ink-faint` | `#5F574C` | Micro-meta |

### Accent — **electric blue locked**
| Mode | Value |
|---|---|
| Light `--accent` | `oklch(0.58 0.18 248)` |
| Dark `--accent` | `oklch(0.72 0.17 248)` |
| Soft `--accent-soft` | `oklch(L C 248 / 0.14–0.18)` — used for pulse halos, chip fills |
| Ink `--accent-ink` | `oklch(0.28 0.12 248)` light · `oklch(0.80 0.14 248)` dark — used for micro-label accents |

Teal variant stays in the tokens (`[data-accent="teal"]`) but is not the production choice.

### Grain
A subtle SVG turbulence overlay is rendered on `body::before` at `opacity: 0.5` (light) / `0.35` (dark, `mix-blend-mode: screen`). Zero runtime cost. Can be disabled via Tweaks.

---

## 3. Typography

Three families, all loaded self-hosted via `next/font` in production:

| Role | Family | Weights | Use |
|---|---|---|---|
| **Display** | Instrument Serif | 400 / 400 italic | H1, H2, hero title, case study names, result numerals |
| **Sans body** | Geist | 300 / 400 / 500 / 600 | All running text, buttons, nav |
| **Mono** | JetBrains Mono | 400 / 500 | Micro-labels, chips, tags, terminal, stat units |

**Scale** (desktop):
- Hero title: `clamp(56px, 10vw, 148px)` · tracking `-0.025em`
- Page H1: `clamp(56px, 9vw, 120px)` · tracking `-0.02em`
- Section H2: `clamp(40px, 6vw, 76px)` · tracking `-0.02em`
- Display H3 (cards): `30–36px`
- Body: `16–18px` · line-height `1.55–1.65`
- Micro-label: `11px` · `letter-spacing: 0.32em` · uppercase · mono

**Italic rule:** the one word of emphasis in a display title is **italic + `--accent-ink`**. E.g. *growing*, *pipeline*, *growing*, *still running*. One per headline, never more.

---

## 4. Spacing & layout

- Container: `max-width: 1320px` · padding `clamp(20px, 4vw, 48px)`
- Section padding: `clamp(64px, 10vh, 128px)` vertical
- Grid: 12-column with `clamp(16px, 2vw, 24px)` gap
- Corner radius: **2px only** (near-square) — preserves the editorial/print feel. Avoid pill shapes.
- Rules: hairline `1px solid var(--line)` — used for section tops, card dividers, form underlines

---

## 5. Components

### Buttons
Primary = filled ink. Ghost = transparent, stroked, fills on hover. Accent = solid blue (used for priority CTAs like WhatsApp). All buttons use mono, 12px, tracking `0.22em`, uppercase. Arrow glyph nudges 3px right on hover.

### Service cards (home)
Ink-wipe hover: a `::before` panel slides up from the bottom, all text inverts to cream, accent color lights the icon. 500ms ease.

### Pipeline
Five nodes in a row, connected by a hairline and a traveling accent pulse. Tabs auto-rotate every 9s (stopped on click). Mobile collapses to 2-up grid, connectors hide.

### Nav
Sticky top. Three columns: brand mark + wordmark · centered nav links · WhatsApp CTA with pulsing green dot. 82% cream with `backdrop-filter: blur(12px)`.

### Footer
Ink surface. Four columns on desktop (brand block + sitemap + services + contact). Tagline repeats inside the brand block as a quiet confirmation.

---

## 6. Hero — locked direction

**Direction B: cursor-reactive dot grid.**

- 26px grid of small filled circles, rendered to `<canvas>` at DPR-aware resolution
- Within a 160px radius of the cursor, dots (a) grow from 1.4px → 4.0px, (b) shift color to accent, (c) displace outward by up to 14px along the cursor-ray
- Subtle ambient sine drift (`amplitude < 1px`) so the grid breathes without interaction
- Touch devices (`(hover: none)` media query): grid renders static, no displacement
- Single `requestAnimationFrame` loop. ~60 LOC. Zero dependencies.

**Performance:** canvas re-paints every frame but the grid density is bounded; no layout thrash. No WebGL, no Three.js, no Framer Motion.

---

## 7. Motion system

| Moment | Trigger | Spec |
|---|---|---|
| Page enter | Route change | 0.5s translateY(12px → 0) + fade, cubic-bezier(0.2, 0.7, 0.2, 1) |
| Scroll reveal | IntersectionObserver (threshold 0.1, rootMargin `-60px`) | 0.8s fade + 14px rise |
| Pipeline pulse | RAF loop | 5.2s linear sweep across nodes |
| Pipeline auto-rotate | setInterval | 9s cycle, stops when user clicks |
| Service card hover | `:hover` | 0.5s ink-wipe from bottom |
| Button hover | `:hover` | `translateY(-1px)` + arrow `translateX(3px)` |
| WhatsApp dot | Infinite | 2s scale + opacity pulse |
| Nav link active | State | 4px accent dot beneath |

All transitions use `transform` or `opacity` only. Layout-triggering properties are banned.

---

## 8. Page inventory

1. **Home** — hero · services grid (4 + marketing strip) · pipeline · selected work (3 cards) · results strip · CTA band
2. **Services** — full breakdown of 4 lines + marketing as a fifth row, with tags and typical deliverables
3. **Work** — 5 case study index cards with live thumbnail demos (chat, browser, dashboard, scheduling, payroll)
4. **Case study** (1 per slug: `sofie`, `thrive`, `bizzflow`, `smartchiro`, `jt`) — header · visual · metrics strip · problem / approach / outcome · stack
5. **About** — founder-led, side meta (founder, based, stack, reach, est.) + 4 paragraphs
6. **Contact** — form (name, email, WhatsApp, what you're building, budget pills) + WhatsApp + email + studio cards
7. **404** *(to add — not in v1 yet)*

---

## 9. Accessibility

- Min contrast 4.5:1 on body copy in both themes (charcoal on cream passes cleanly; dark mode uses `#EEE8D9` on `#141210` which passes)
- All interactive elements are `<button>` or `<a>` — no divs as buttons
- Focus ring: inherit browser default in v1; can be restyled with `accent` outline pre-launch
- Motion: canvas drift is subtle but adding `@media (prefers-reduced-motion: reduce)` guard to the hero loop and autorotate before launch is a **known TODO**

---

## 10. SEO hooks (build)

These aren't design concerns but they constrain markup:

- One `<h1>` per page
- Semantic landmarks: `<nav>`, `<main>`, `<footer>`, `<article>` for case studies
- `generateMetadata` per route (unique title/description/OG)
- `ImageResponse` OG template: cream background, charcoal KB mark top-left, Instrument Serif title, JetBrains micro-label
- JSON-LD: `Organization` (home), `LocalBusiness` (about + contact, address: Putra Heights, Selangor), `Service` (each service row), `Article` (each case study), `BreadcrumbList` (inner pages)

---

## 11. Out of scope (v1)

- Blog / MDX pipeline (recommend landing in v1.1 — biggest SEO lever per brief §7)
- Bahasa Malaysia translation layer
- Client login / portal
- Live chat widget (WhatsApp deep link is the chat CTA)

---

## 12. Decisions logged

| Decision | Value |
|---|---|
| Hero direction | **B** — cursor-reactive dot grid |
| Accent colour | **Electric blue** (`oklch(0.58 0.18 248)` light / `oklch(0.72 0.17 248)` dark) |
| Default mode | **Dark** (site supports both; dark is the marketing default) |
| Grain overlay | **On** |
| Primary CTA | WhatsApp direct link (`wa.me/60164609428`) |
| Tagline | "Focus on growing, not doing." |

---

## 13. Asset pack

Shipping with this handoff:

- `assets/logo-black.png` — primary mark for light surfaces (2400×2400, transparent)
- `assets/logo-cream.png` — primary mark for dark surfaces (2400×2400, transparent)
- `uploads/Kim Brothers Logo.svg` — vector source (for favicon + OG generation)
- Business card PDFs (front + back) — reference only, not shipped in site

Favicon set (to generate in build): 16 / 32 / 48 / 180 (apple-touch) / 512 (android) · ICO + PNG.

---

## 14. File structure (prototype → build mapping)

Current prototype (single-file HTML, React via Babel):

```
Kim Brothers.html     ← entry, routing, nav, footer, Tweaks panel
styles.css            ← all tokens + components (maps 1:1 to Tailwind v4 @theme)
hero.jsx              ← HeroCanvas (grid) + HeroTerminal (alternate)
pipeline.jsx          ← Pipeline component + PIPELINES data
data.jsx              ← SERVICES, CASES, thumbnail demo components
pages.jsx             ← HomePage, ServicesPage, WorkPage, CasePage, AboutPage, ContactPage
tweaks-panel.jsx      ← design-time only; dropped from production build
assets/               ← logos
```

Build structure (Next.js 16, App Router):

```
app/
  (marketing)/
    layout.tsx        ← nav + footer
    page.tsx          ← home
    services/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    about/page.tsx
    contact/page.tsx
  api/contact/route.ts ← Resend handler
  sitemap.ts
  robots.ts
components/
  hero-canvas.tsx     (port of hero.jsx)
  pipeline.tsx
  service-card.tsx
  case-card.tsx
  nav.tsx
  footer.tsx
lib/
  cases.ts            (ported from data.jsx)
  services.ts
styles/
  tokens.css          (ported from styles.css :root blocks)
```

---

## 15. Open for Chris

- [ ] Final case study shortlist for launch — the five in the prototype (Sofie, Thrive, BizzFlow, SmartChiro, J&T) or a subset?
- [ ] Blog in v1 vs v1.1?
- [ ] Any photography for the About page, or stay logo-only?
- [ ] Google Business Profile — claim before launch or during?
- [ ] Confirm phone display format (`+60 16 460 9428` currently)
