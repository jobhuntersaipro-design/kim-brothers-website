# Kim Brothers Ent. — Company Website

The public-facing marketing site for Kim Brothers Ent., a Malaysia-based tech + marketing operation. Built with Next.js 16, TypeScript, Tailwind v4, deployed on Vercel.

Positioning: automation, web, scraping, and SaaS — with marketing as a supporting service. Tagline: "Focus on growing, not doing."

## Context Files

Read the following to get the full context of the project:

- @DESIGN.md (canonical design spec — tokens, typography, motion, components)
- @context/project-overview.md
- @context/coding-standards.md
- @context/design-system.md (supplements DESIGN.md — if they conflict, DESIGN.md wins)
- @context/seo-standards.md
- @context/content-guidelines.md
- @context/current-feature.md

## Commands

- **Dev server**: `npm run dev` (runs on http://localhost:3000, Turbopack by default in Next.js 16)
- **Build**: `npm run build`
- **Production server**: `npm run start`
- **Lint**: `npm run lint`
- **Type check**: `npm run typecheck`
- **Format**: `npm run format`
- **Test**: `npm run test` (single run)
- **Test watch**: `npm run test:watch`
- **Bundle analyzer**: `npm run analyze` (experimental Turbopack bundle analyzer)

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack, React 19.2, React Compiler enabled)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Content**: MDX for blog posts, static TS files for case studies
- **Forms**: Resend for email delivery, optional Neon log
- **Analytics**: Vercel Analytics + Google Search Console
- **Hosting**: Vercel
- **Domain**: kim-brothers.com

## Neon Database (if used)

The site is mostly static. Neon is only used if the contact form logs submissions.

When using the Neon MCP tools:

- **Project:** `kim-brothers-web`
- **Default Branch:** `development`
- **Database:** `neondb`

**IMPORTANT:** Always use the development branch for all database operations. Never run queries against the production branch unless explicitly instructed to do so.

## Design constraints (non-negotiable)

These are hard rules. Violating them breaks the brand or tanks SEO. `DESIGN.md` has the full spec; this section is the shortlist.

- **Cream + ink base, both themes.** Light mode is cream (`#F2EEE3`) with ink text. Dark mode is charcoal (`#141210`) with cream text. Both modes ship, with a **theme toggle in the nav**. No single "marketing default" — respect `prefers-color-scheme` on first visit, persist user choice after.
- **Accent: electric blue** (`oklch(0.58 0.18 248)` light / `oklch(0.72 0.17 248)` dark). Locked. Teal tokens exist but are not in production.
- **Letter-spaced all-caps mono micro-labels** are a signature element. Use them for section dividers, category labels, and accent text. Example: `S T A R T   H E R E`, `F O C U S   O N   G R O W I N G`.
- **Three type families:** Instrument Serif (display), Geist (sans body), JetBrains Mono (micro-labels). All self-hosted via `next/font`.
- **2px corner radius only.** No pills. Preserves the editorial/print feel.
- **Italic emphasis rule:** one italic word per display title, coloured with `--accent-ink`. Example: "Focus on *growing*, not doing." Never more than one per headline.
- **Hero is B+C combo.** Cursor-reactive dot grid canvas as the hero signature, pipeline as a separate section below it on the home page. Both live on `/`.
- **Performance budget:** LCP < 1.5s, CLS < 0.05, INP < 200ms, JS bundle < 80KB gzipped on the homepage, Lighthouse ≥ 95 on mobile. Every PR must not regress these.
- **No heavy animation libraries.** No Framer Motion, no GSAP, no Three.js. Hero uses raw canvas (~60 LOC). Page transitions use React 19.2 `<ViewTransition>`. Everything else is CSS + vanilla JS.
- **Animations must be GPU-composited only** — transform and opacity. No animating width, height, top, left, margin, or anything that triggers layout.
- **Every page must be server-rendered or statically pre-rendered.** Never ship a client-rendered content page — it kills SEO. The current production site suffers exactly this problem, which is why it's being replaced.
- **Theme toggle is client-side** but the initial theme is set via inline script in `<head>` to avoid flash-of-wrong-theme.

## SEO requirements (every content page)

- Unique `title` and `description` via `generateMetadata`
- `Organization`, `LocalBusiness`, `Service`, `BreadcrumbList`, or `Article` JSON-LD as appropriate
- OG image via `ImageResponse` (auto-generated per page)
- One `<h1>` per page, proper heading hierarchy
- `next/image` for every image with correct `sizes` attribute
- Internal links between related services, case studies, and blog posts

See `@context/seo-standards.md` for the full checklist.

## Content rules

- **Plain language.** Target audience is Malaysian SME owners, many not fluent in English. Aim for Grade 6–8 reading level. Short sentences. Everyday words.
- **No corporate fluff.** No "cutting-edge," "world-class," "synergy," "bespoke," "solutions."
- **No published numbers in case studies.** Case studies are fully qualitative. No customer counts, revenue figures, response-time improvements, or lead volumes — even if the number is impressive, even if it's tempting. This is a hard rule, not a default. If a case study layout (like the "metrics strip" in `DESIGN.md` §8) calls for metrics, fill it with qualitative signals instead: "live customer," "daily runs," "production-grade," "paying users."
- **Case study order is fixed** (7 projects, must not be reordered without approval): Sofie → BizzFlow → EasyStaff → Thrive Chiropractic → Tisha's PO Extractor → Unifi Scraping → Ads.
- **Phone format:** `+6016 460 9428` — display and link format. Matches the business card. WhatsApp deep link uses `wa.me/60164609428` (no spaces, no plus).

See `@context/content-guidelines.md` for full voice and style notes.

## Git conventions

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `perf:`, `style:`, `test:`
- Branch names: `feat/<short-description>`, `fix/<short-description>`
- PRs must pass lint, typecheck, and test before merge
- Production deploys from `main`, preview deploys from every branch (Vercel default)

**IMPORTANT:** Do not add Claude to any commit messages.

## Things to not do

- Don't add tracking scripts beyond Vercel Analytics and GSC without approval
- Don't add third-party fonts via CDN — self-host via `next/font`
- Don't install a UI library to solve one component problem — hand-roll it to stay on-brand
- Don't use `useState` for anything that could be a server component
- Don't add `"use client"` without reading the component to check if it's actually needed
- Don't publish case study numbers (see content rules above)
- Don't change the locked project order on `/work`
