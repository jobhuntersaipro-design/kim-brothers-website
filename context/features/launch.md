# Launch

Performance audit, accessibility guard-rails, DNS cutover, and post-launch verification. The last feature — everything else has shipped.

## Prerequisites

Build `seo-polish.md` first. Everything else must be in place.

## Scope

- **Performance audit:**
  - Lighthouse on every page type (desktop + mobile)
  - Core Web Vitals check (LCP, CLS, INP) on a real device + throttled Chrome DevTools
  - Bundle analyzer (`npm run analyze`) — identify any unexpectedly large dependencies
  - Confirm all images optimized, all fonts self-hosted
  - Network waterfall check — no render-blocking third-party requests
- **Accessibility pass:**
  - Keyboard navigate every page end-to-end
  - Screen reader test (VoiceOver or NVDA) on home, services, one case study, contact
  - Colour contrast check both themes
  - Focus states visible everywhere
  - Skip-to-content link working
- **Motion guards:**
  - Add `@media (prefers-reduced-motion: reduce)` to:
    - Hero canvas (drops to static grid)
    - Pipeline auto-rotation (stops)
    - Pipeline accent pulse (stops)
    - All scroll reveals (render immediately, no fade)
    - WhatsApp dot pulse (static)
  - Test each with `prefers-reduced-motion` toggled in DevTools
- **DNS cutover:**
  - Add custom domain `kim-brothers.com` to Vercel project
  - Update DNS at registrar (A record or Vercel nameservers)
  - Wait for propagation, test SSL
  - Old site: leave up at a subdomain (e.g. `old.kim-brothers.com`) for 30 days just in case
  - 301 redirects from any deep links that existed on the old site to new equivalents
- **Post-launch setup:**
  - Google Search Console verified (DNS TXT record)
  - Sitemap submitted to GSC
  - Google Business Profile claimed or updated for Kim Brothers Ent., Putra Heights
  - Vercel Analytics enabled and verified collecting
  - Monitor GSC for 7 days for crawl errors, indexing issues
- **Smoke tests:**
  - Contact form submits successfully on production → email arrives
  - WhatsApp link opens correctly on mobile
  - All 7 case studies load
  - All 3 blog posts load
  - Theme toggle works on production build
  - 404 triggers on bad URLs

## Acceptance criteria

- [ ] Lighthouse mobile ≥ 95 on: home, services, work index, 1 case study, about, contact, blog index, 1 blog post, 404
- [ ] Lighthouse desktop ≥ 98 on the same pages
- [ ] LCP ≤ 1.5s on home, measured on real 4G-throttled mobile
- [ ] CLS ≤ 0.05 everywhere
- [ ] INP ≤ 200ms on home and contact (the only interactive pages)
- [ ] All `prefers-reduced-motion` guards working (manually verified in DevTools)
- [ ] Keyboard navigation works on every page
- [ ] Screen reader reads every page coherently
- [ ] DNS cut over; `kim-brothers.com` serves new site; SSL valid
- [ ] GSC verified and sitemap submitted
- [ ] Google Business Profile live
- [ ] Contact form confirmed working on production
- [ ] Vercel Analytics confirmed collecting
- [ ] Old site archived at `old.kim-brothers.com` (or backup saved)
- [ ] 301 redirects in place for any known old URLs that users might still hit

## Implementation notes

- Use Vercel's preview deployment to test before cutover — don't cut DNS until the preview is 100% solid
- Backup the old WordPress/Webflow/whatever site before DNS change, just in case something needs to be retrieved
- GSC verification: use DNS TXT record method (works regardless of hosting)
- Set up a weekly calendar reminder to check GSC for the first month — catches indexing issues early
- Vercel Analytics is privacy-friendly; if Chris wants Google Analytics too, it's a separate call (adds weight — document the trade-off)

## Files to create / modify

- Add `@media (prefers-reduced-motion: reduce)` blocks throughout CSS and JS
- Add skip-to-content link if not already in place
- `vercel.json` — any 301 redirects from old URLs

## Out of scope for this phase

- Performance optimization beyond meeting the targets — if everything is green, don't chase diminishing returns
- Paid ads / marketing launch — separate workstream
- Writing more blog posts — ongoing content work, not a launch task

## Done when

All pages hit performance and accessibility targets, motion guards confirmed, DNS live on production, GSC verified, GBP live, contact form working on production, 7-day post-launch GSC check done with no critical issues.
