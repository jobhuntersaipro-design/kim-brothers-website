# Home — Phase 2: Hero

The cursor-reactive dot grid canvas, tagline, and primary CTA. Highest-risk feature of the project — LCP target is under 1.5s and the canvas must be performant.

## Prerequisites

Build `home-phase-1-shell.md` first.

## Scope

- `HeroCanvas` component — full spec in `DESIGN.md` §6
- 26px grid of filled circles rendered to `<canvas>` at DPR-aware resolution
- Within 160px radius of cursor: dots grow 1.4px → 4.0px, shift to accent colour, displace outward up to 14px along cursor-ray
- Ambient sine drift (amplitude < 1px) so grid breathes without interaction
- Touch devices (`(hover: none)`) render static grid, no displacement
- Single `requestAnimationFrame` loop, ~60 LOC, zero dependencies
- Hero content layer on top of canvas: eyebrow micro-label (`S T A R T   H E R E`), display h1 with italic emphasis on *growing*, supporting paragraph, primary WhatsApp CTA button
- Display h1 uses `clamp(56px, 10vw, 148px)` per `DESIGN.md` §3 scale
- Respects `prefers-reduced-motion: reduce` — drops to static grid

## Acceptance criteria

- [ ] LCP on home page ≤ 1.5s on 4G-throttled mobile (Lighthouse or WebPageTest)
- [ ] Canvas does not trigger layout on any frame (Performance tab: no "Layout" events in the animation loop)
- [ ] Grid density scales with DPR — crisp on retina, no blur
- [ ] Cursor effect feels natural — displacement follows cursor smoothly, no jitter
- [ ] Static fallback on touch devices
- [ ] Static fallback on `prefers-reduced-motion: reduce`
- [ ] H1 reads "Focus on *growing*, not doing." with italic + `--accent-ink` on "growing"
- [ ] WhatsApp CTA opens `wa.me/60164609428` in new tab
- [ ] CLS on home ≤ 0.05 (canvas takes a reserved space, doesn't shift content on mount)

## Implementation notes

- Use `ResizeObserver` to repaint on container size changes — not the whole grid recomputation, just viewport dims
- Pre-calculate dot positions in a flat `Float32Array` (x, y, ox, oy per dot) — don't recreate arrays each frame
- Distance check can use squared distance (`dx*dx + dy*dy < 160*160`) to skip sqrt in the hot path
- Throttle mousemove only if profiling shows it matters — at 60fps it's usually fine
- Canvas must have `width` and `height` attributes (not just CSS) set to DPR-scaled values; CSS controls display size
- Reserve the canvas space with a fixed aspect ratio or explicit `min-height` so mounting doesn't cause CLS
- Component is client-only — mark `"use client"` at the top

## Files to create

- `components/hero-canvas.tsx` — the canvas component
- `components/hero.tsx` — hero section wrapper with text + CTA on top of canvas
- `app/(marketing)/page.tsx` — home page shell that renders `<Hero />` first (other sections stubbed)

## Out of scope for this phase

- Services grid, pipeline, selected work sections — Phase 3
- Animating the h1 entrance (can be added in Phase 3 as a scroll-reveal if needed)
- Any interaction beyond cursor tracking (no click handlers on the canvas)

## Done when

Home page loads, hero canvas renders, cursor interaction works smoothly on desktop, static fallback works on mobile and reduced-motion, LCP budget is met on 4G throttled mobile, and no layout events in the frame loop.
