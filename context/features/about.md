# About Page

Founder-led short page about Kim Brothers Ent. and Chris. Important for local SEO and for clients wanting to know who they're talking to.

## Prerequisites

Build `home-phase-1-shell.md` first (uses standard layout and primitives).

## Scope

- `/about` route
- Page hero: micro-label (`A B O U T`), display h1 (e.g. "Built by one guy in Putra Heights."), supporting paragraph
- Body: 4 paragraphs (founder story, what Kim Brothers stands for, approach, why Malaysian SMEs)
- Side meta block: founder name, location, established year, current stack reference, contact — formatted as a small data-list on the right (desktop) or below the main content (mobile)
- `LocalBusiness` JSON-LD with address: Putra Heights, Selangor, Malaysia — critical for local SEO
- Contact CTA at the bottom (WhatsApp)
- `generateMetadata` with unique title/description

## Acceptance criteria

- [ ] Page renders with hero + 4 body paragraphs + side meta block
- [ ] All copy is plain English, Grade 6-8, no corporate fluff
- [ ] Founder voice — writes like a person, not a company
- [ ] `LocalBusiness` JSON-LD validates in Google's Rich Results Test (address, phone, URL all present)
- [ ] NAP (Name, Address, Phone) matches canonical values in `content-guidelines.md` exactly
- [ ] Phone format: `+6016 460 9428`
- [ ] Contact CTA opens WhatsApp
- [ ] Mobile: side meta stacks below content; no horizontal scroll
- [ ] Both themes render correctly
- [ ] Lighthouse mobile ≥ 95

## Implementation notes

- Page is a Server Component — no interactive elements beyond the standard nav/footer
- Copy should be drafted by Chris or with Chris's direct input; don't write it solo
- Side meta block is a small `<dl>` — use semantic markup, not a div soup
- `LocalBusiness` schema needs: `@type: "ProfessionalService"` or `"LocalBusiness"`, `name`, `address` (structured `PostalAddress`), `telephone`, `email`, `url`, `founder`, `priceRange` (optional)

## Files to create

- `app/(marketing)/about/page.tsx`
- `components/about/hero.tsx` (small, page-specific)
- `components/about/side-meta.tsx`
- Extend `lib/schema.ts` with `localBusinessSchema()` builder

## Out of scope for this phase

- Photo of Chris or the studio — stays logo-only per `DESIGN.md` asset pack (and pending Chris decision)
- Team page (no team yet)
- Company timeline / history section — not needed in v1

## Done when

`/about` renders with real founder-voice copy, LocalBusiness schema validates, NAP is consistent, mobile + both themes hold, Lighthouse ≥ 95.
