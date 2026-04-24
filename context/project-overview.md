# Kim Brothers Ent. — Website Redesign Project Overview

**Client:** Kim Brothers Ent. (Malaysia-based)
**CEO:** Lam Kim Sim (Chris)
**Current site:** https://www.kim-brothers.com/
**Contact:** contact@kim-brothers.com · +6016 460 9428
**Prepared for:** Claude Design (handoff brief)
**Date:** April 2026

---

## 1. Goal

Redesign the Kim Brothers Ent. website from scratch. The current site is narrowly positioned as "AI Chatbot Malaysia | WhatsApp AI Assistant," which undersells what the company actually does. The content scope will remain roughly the same, but the design, structure, and positioning need a complete rebuild.

The new site should:

- Feel **techy and distinctive** (heavy on tasteful animation) without hurting load speed
- Position Kim Brothers as a **multi-line tech operation** (automation, web, scraping, SaaS) with marketing as a supporting service
- Be **optimized for organic Google search** from day one
- Mirror the **brand aesthetic of the business card** (cream + charcoal, letter-spaced editorial typography, "Focus on growing, not doing." tagline)

---

## 2. Positioning

### What Kim Brothers actually does

1. **Automation & AI agents** — WhatsApp sales bots (Sofie is the flagship, built for the Unifi reseller line), workflow automation (respond.io → CRM → Make.com pipelines), custom agent builds for SMEs
2. **Web development** — production-grade Next.js sites for client businesses (Thrive Chiropractic is a recent case study)
3. **Data scraping & pipelines** — custom crawlers, bulk data processing, bill/report generation (WifiBizz / BizzFlow is internal proof)
4. **SaaS products** — SmartChiro (chiropractic patient management), J&T Payroll (courier franchise payroll), BizzFlow (fibre ops) — these demonstrate capability, not necessarily for sale to site visitors
5. **Digital marketing (supporting)** — Meta & Google Ads, creative production, lead attribution — proven on their own Unifi reseller business

### Primary pitch

Lead with **automation, web, and scraping**. Marketing is a supporting line — visible, but not the headline. The story is "we build the systems that let Malaysian SMEs stop doing operational busywork."

### Tagline

**"Focus on growing, not doing."** (directly from the business card — keep it)

### Audience

Malaysian SMEs — specifically owner-operators and lean teams who have a business problem that tech can solve but don't have an in-house dev team.

---

## 3. Design direction

### Core aesthetic

Pulled directly from the business card:

- **Background:** cream / off-white (card front is cream)
- **Primary text:** deep charcoal / near-black
- **Accent:** electric blue OR muted teal — **client still deciding**
  - Electric blue reads techy and bright
  - Muted teal reads calm and premium
  - (Designer may mock both in context and let client pick — or proceed with one and test)
- **Typography signature:** letter-spaced, all-caps micro-labels (e.g. `S T A R T   H E R E`, `F O C U S   O N   G R O W I N G`). The card uses this treatment on the tagline and it should become a recurring design device — used for section dividers, category labels, and accent text throughout the site.
- **Feel:** quiet editorial surface with tech moving underneath. Think: clean magazine page that happens to have things animating. Restraint is the strength — don't lose it.

### Animation strategy

The site should feel alive and techy without sacrificing performance. Animation budget is real but disciplined:

- **Hero signature animation** — one distinctive piece (direction selected from mockups — see §4 below). Candidates were:
  - **A. Animated terminal** typing out the tagline and service commands
  - **B. Cursor-reactive particle grid** (subtle dot field that warps around the cursor)
  - **C. Live pipeline diagram** (message → AI → reply flowing in real time)
  - Final direction to be confirmed by client; current recommendation is **B as hero + C as a lower "how it works" section** — gives you the distinctive signature and the on-message storytelling without forcing one concept to do both jobs.
- **Scroll-triggered text reveals** (CSS `@keyframes` + Intersection Observer — no library)
- **Subtle grain/noise texture** on the cream background (static SVG or CSS, zero runtime cost)
- **Magnetic hover** on CTAs, smooth anchor scrolling, cursor-aware accents on key interactive elements
- **Page transitions** via React 19.2's native `<ViewTransition>` component (built into Next.js 16) — zero JS cost
- **No heavy animation libraries** by default (no Framer Motion, no GSAP, no Three.js) unless a specific section earns the weight. Everything else: raw CSS + minimal vanilla JS.

### Performance targets

These are non-negotiable — they're both UX and SEO ranking factors:

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 1.5s |
| CLS (Cumulative Layout Shift) | < 0.05 |
| INP (Interaction to Next Paint) | < 200ms |
| JS bundle (gzipped, homepage) | < 80KB |
| Lighthouse score (mobile) | ≥ 95 |

All animations must be GPU-composited (transform / opacity only) — no layout-triggering properties.

---

## 4. Hero animation direction

Three concepts were mocked up during planning. Final choice to be locked before build:

- **A — Terminal.** Strongest "developer-native" signal. Risk: feels like every dev agency. If chosen, the rest of the site stays editorial so the terminal is the only techy flourish.
- **B — Cursor-reactive grid.** Most distinctive. Premium/product-y (Linear, Vercel, Stripe all use variants). ~60 lines of raw canvas, zero library cost. Degrades to static on touch devices.
- **C — Pipeline diagram.** Most on-message for the automation-led positioning. Visually demonstrates what Kim Brothers sells. Risk: locks the hero to one flow — would need rotating variants to cover the full service range.

**Recommended:** B as the hero background (distinctive signature), C as a second-scroll "how it works" section with multiple pipelines rotating through service lines (WhatsApp → AI → lead, scraper → dashboard → report, brief → site → live, etc.). Best of both.

---

## 5. Site structure

### Pages

1. **Home** (`/`)
   - Hero: signature animation + tagline + primary CTA
   - Services grid (4 cards: automation / web / scraping / SaaS, with marketing as a supporting strip below)
   - "How it works" section (rotating pipeline concept from §4)
   - Featured work / case studies (3–4 highlights)
   - Results strip or social proof (client count, response times, whatever's genuine)
   - Final CTA

2. **Services** (`/services`)
   - Full breakdown of the 4 core lines + marketing
   - Each line gets its own section with: problem framing → approach → example deliverable → CTA
   - Pricing NOT shown (all services are scope-dependent — CTA is "let's talk")

3. **Work / Case studies** (`/work`)
   - Index page listing all projects
   - Individual pages (`/work/[slug]`) for each
   - **Project order (fixed, left-to-right or top-to-bottom on the index):**
     1. **Sofie** — WhatsApp AI sales agent for the Unifi reseller line
     2. **BizzFlow** — fibre ops automation (crawler + PDF bill generator)
     3. **EasyStaff** — J&T Express dispatcher payroll management SaaS
     4. **Thrive Chiropractic** — Next.js client website + Google Search Console setup
     5. **Tisha's PO Extractor** — purchase order data extraction tool
     6. **Unifi web scraping** — custom crawler for Unifi data
     7. **Ads** — Meta & Google Ads campaigns (Unifi reseller, client campaigns)
   - Each case study: problem → approach → outcome → tech stack → visuals

4. **About** (`/about`)
   - Short, founder-led — Chris (CEO), what Kim Brothers stands for
   - Based in Putra Heights, Selangor (important for local SEO)

5. **Blog / Insights** (`/blog`) *(if client approves — recommended)*
   - MDX-based long-form content targeting Malaysian SME long-tail queries
   - Individual post pages with table of contents, reading time, related posts
   - **This is the single biggest lever for organic Google traffic** — see §7

6. **Contact** (`/contact`)
   - WhatsApp as primary CTA (direct link to +6016 460 9428)
   - Email secondary (contact@kim-brothers.com)
   - Contact form with: name, email, WhatsApp, what you're building, budget range
   - Form submissions → email via Resend + optional DB log in Neon

### Global elements

- **Nav:** logo left, menu items center or right (Services · Work · About · Blog · Contact), WhatsApp CTA button on the right
- **Footer:** two-column minimum. Left: logo + tagline + short about. Right: nav mirror + contact + social. Bottom strip: © year · legal links.
- **404 page:** on-brand, with a useful "start here" nav block rather than a dead end

---

## 6. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16** (App Router, Turbopack default) | Chris's standard stack; best-in-class SEO via static pre-rendering; React Compiler now stable (auto-memoization) |
| Language | **TypeScript** | Standard |
| Styling | **Tailwind CSS v4** | Chris's standard; fastest to build with |
| UI primitives | **shadcn/ui** (sparingly) | Only where genuinely needed; most components hand-rolled to stay on-brand |
| Fonts | System font stack or one clean sans (Inter / Geist / Satoshi) | Self-hosted via `next/font` to avoid third-party CSS |
| Content | **MDX** for blog posts, static data files for case studies | No CMS needed for v1 |
| Forms | **Resend** (email delivery) + optional Neon log | Zero-maintenance |
| Analytics | **Vercel Analytics** + **Google Search Console** | GSC is critical for SEO work |
| Hosting | **Vercel** | Chris's standard; perfect Next.js integration |
| Domain | `kim-brothers.com` (already owned) | |

### Next.js 16-specific features to use

- **Static pre-rendering** on all content pages — solves the current site's biggest SEO problem (current site is client-rendered, crawlers see a JS shell)
- **`use cache` directive** on case study and blog pages (rarely change, cache aggressively)
- **React 19.2 `<ViewTransition>`** for native page transitions
- **`generateMetadata`** per page for unique SEO metadata
- **Native `sitemap.ts` and `robots.ts`** — auto-generated, kept in sync with routes
- **`ImageResponse`** for auto-generated OG images per page

---

## 7. SEO plan (critical — client wants organic traffic)

This is a primary objective, not an afterthought. The current site suffers because it's client-rendered (a web fetch of the homepage returns almost no crawlable content). Everything below is designed to fix that and build ranking authority from day one.

### On-page technical SEO

- **Server-rendered / static HTML** on every content page — crawlers get full content without executing JS
- **Per-page metadata via `generateMetadata`** — unique `title`, `description`, canonical URL, OpenGraph, Twitter card
- **Auto-generated OG images** via `ImageResponse` — branded, per-page
- **`sitemap.ts` and `robots.ts`** — Next.js native, regenerated on every build
- **Semantic HTML** — proper heading hierarchy (one H1 per page, H2s for sections, etc.), `<article>`, `<nav>`, `<main>` landmarks
- **Image optimization** via `next/image` — AVIF/WebP, lazy loading, correct `sizes` attribute to prevent CLS
- **Core Web Vitals discipline** — see performance targets in §3

### Structured data (JSON-LD)

Inject the following schemas where relevant — this is what drives rich snippets in Google:

- `Organization` on homepage (name, logo, URL, contact, social profiles, founder)
- `LocalBusiness` on about/contact (address in Putra Heights, Selangor, Malaysia — important for local pack rankings)
- `Service` on each service offering (name, description, provider)
- `BreadcrumbList` on all inner pages
- `FAQPage` on service pages and blog posts where Q&A sections exist
- `Article` + `BlogPosting` on blog posts (author, datePublished, dateModified, image)

### Content / keyword strategy (for the blog)

The blog is the single biggest lever. Short service pages alone won't outrank established competitors. Long-form content targeting specific Malaysian SME queries will.

**Example target queries** (long-tail, low-competition, high-intent):

- "WhatsApp chatbot for Malaysian SMEs"
- "how to automate Unifi reseller leads"
- "J&T franchise payroll software Malaysia"
- "Meta Ads for Malaysian small business"
- "Make.com automation examples Malaysia"
- "Next.js web developer Malaysia"
- Etc.

**Recommended cadence:** 1–2 posts per month, each 1,500–2,500 words, with original insight (not AI-generated fluff). Each post should internally link to relevant service pages and case studies.

### Local SEO

- Set up **Google Business Profile** for Kim Brothers Ent. (Putra Heights, Selangor)
- Link GBP ↔ website
- `LocalBusiness` JSON-LD on about/contact pages
- NAP consistency (Name, Address, Phone) — exactly the same format everywhere

### Internal linking

- Service pages → relevant case studies → back to services
- Blog posts → both service and case study pages
- Case studies → service pages they demonstrate
- Footer carries a nav mirror so every page links to every top-level section

### Setup checklist (post-launch)

- [ ] Google Search Console verified (DNS TXT record)
- [ ] Sitemap submitted to GSC
- [ ] Google Business Profile claimed and optimized
- [ ] Vercel Analytics live
- [ ] Meta Pixel / Google Tag installed (if running ads)
- [ ] Resend domain verified for contact form delivery

---

## 8. Content inventory

Content from the existing site can be preserved and rewritten (not verbatim — reposition around the new "automation, web, scraping" lead). New content needed:

- Homepage hero copy (tagline is fixed, the rest needs writing)
- Service descriptions (4 primary + marketing) — each ~100–200 words on homepage, longer on dedicated service pages
- Case study writeups — in this fixed order: **Sofie** (WhatsApp AI agent), **BizzFlow** (fibre ops automation), **EasyStaff** (J&T payroll SaaS), **Thrive Chiropractic** (client site), **Tisha's PO Extractor** (data extraction tool), **Unifi web scraping** (custom crawler), **Ads** (Meta & Google campaigns)
- About page (~200–300 words, founder-led voice)
- First 2–3 blog posts for launch (so the blog isn't empty on day one)
- Footer copy, 404 copy, form success/error messages

Copy direction: confident, direct, slightly technical. No corporate-speak, no hype words ("cutting-edge," "world-class," "synergy"). Match the restraint of the business card.

**Language simplicity (important):** The target audience is Malaysian SME owners, many of whom don't read English fluently. Use plain, simple words throughout the site. Short sentences. Prefer everyday words over "sophisticated" ones. Examples:

- "We build tools that do the boring work for you" — not "We engineer solutions that automate operational inefficiencies"
- "Get more customers" — not "Drive incremental customer acquisition"
- "We build websites, chatbots, and tools" — not "We deliver bespoke digital solutions"
- "Talk to us" — not "Schedule a consultation"

Aim for a reading level around Grade 6–8 (Flesch reading ease 60+). Technical terms are fine when they're necessary (e.g. "WhatsApp chatbot," "payroll software") but avoid them when a plain word works. This applies to marketing copy, service descriptions, case study writeups, blog posts, and UI labels — everywhere.

---

## 9. Scope & phasing

### Phase 1 — v1 launch (target: first 4–6 weeks)

- Full design system (tokens, typography scale, color, spacing)
- Home, Services, Work (index + 3 case studies), About, Contact, 404
- Full SEO foundation (metadata, JSON-LD, sitemap, robots)
- Vercel deploy + DNS cutover from current site
- Google Search Console setup + sitemap submission

### Phase 2 — content & growth (weeks 6+)

- Blog launch with first 3 posts
- Remaining case studies
- Google Business Profile
- Ongoing content cadence (1–2 posts/month)
- Iterate based on GSC and Vercel Analytics data

### Out of scope for v1

- Multi-language (English only for v1; Bahasa Malaysia later if data supports it)
- Client login / portal
- E-commerce
- Live chat widget (WhatsApp deep link is the chat CTA)

---

## 10. Open decisions for client

Lock these before build starts:

- [ ] **Hero animation direction** (A / B / C / B+C combo)
- [ ] **Accent colour** (electric blue vs muted teal)
- [ ] **Blog in v1?** (recommended yes — biggest SEO lever)
- [ ] **Primary homepage CTA** — WhatsApp direct, contact form, or book-a-call link?

---

## 11. Deliverables from Claude Design

1. Design system in Figma (or equivalent): tokens, typography scale, color system, spacing, component library
2. High-fidelity mockups of: Home, Services, Work index, one case study, About, Contact, 404 — in both light and dark mode if dark mode is in scope
3. Mobile responsive versions of all above
4. Motion direction doc (specs for the hero animation, page transitions, hover states)
5. Copy direction notes (tone examples, length guidelines)
6. Asset pack: logo variations, favicon set, OG image template

---

## 12. Reference material

- **Business card:** cream background, charcoal text, letter-spaced tagline. "Focus on growing, not doing." is the key phrase. "S T A R T H E R E" on the back.
- **Current site:** https://www.kim-brothers.com/ (positioning only — do not preserve the design)
- **Stack reference:** everything Kim Brothers builds uses Next.js + Prisma + Neon + Tailwind + Vercel, so the public site should feel like it comes from the same engineering culture.
