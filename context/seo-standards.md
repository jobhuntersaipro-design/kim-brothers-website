# SEO Standards

SEO is a primary objective, not an afterthought. The current production site is client-rendered and almost invisible to crawlers — fixing this is a core reason for the rebuild. Every decision on the new site should protect and grow organic search visibility.

## Non-negotiables

1. **Every content page is server-rendered or statically pre-rendered.** Crawlers must see full HTML, not a JS shell.
2. **Unique metadata per page** via `generateMetadata`.
3. **JSON-LD structured data** on every applicable page.
4. **One `<h1>` per page.** Proper heading hierarchy below it.
5. **`next/image`** for every image, with correct `sizes` and meaningful `alt`.
6. **Core Web Vitals must stay green.** LCP < 1.5s, CLS < 0.05, INP < 200ms.

## Per-page checklist

Every new page or case study needs all of the following before merge:

- [ ] `generateMetadata` returning unique `title`, `description`, `openGraph`, `twitter`
- [ ] Canonical URL set
- [ ] One `<h1>` that matches the page's target query
- [ ] Proper heading order (h1 → h2 → h3, never skipping)
- [ ] JSON-LD schema injected (see below for which)
- [ ] OG image via `ImageResponse` or static `/opengraph-image.tsx`
- [ ] All images use `next/image` with `alt` and `sizes`
- [ ] Internal links to at least 2 related pages
- [ ] Page appears in `sitemap.ts`

## JSON-LD schemas by page type

| Page | Schema |
|---|---|
| Home | `Organization` + `WebSite` (with `SearchAction`) |
| About / Contact | `LocalBusiness` (address in Putra Heights) |
| Services | `Service` per offering |
| Case study index | `BreadcrumbList` + `CollectionPage` |
| Individual case study | `Article` or `CreativeWork` + `BreadcrumbList` |
| Blog index | `Blog` + `BreadcrumbList` |
| Blog post | `BlogPosting` + `Article` + `BreadcrumbList`; add `FAQPage` if Q&A present |

All builders live in `lib/schema.ts`. Import and use — don't write schemas inline.

## Title and description rules

- **Title format:** `{Page topic} — Kim Brothers Ent.` (50–60 characters)
- **Description:** plain-language, 140–160 characters, includes the target query naturally
- **Don't keyword-stuff.** One target query per page. Write for humans first.

## Sitemap and robots

- `app/sitemap.ts` auto-generates the sitemap from route data
- `app/robots.ts` allows all crawlers, points to the sitemap
- Both are regenerated on every build — no manual maintenance

## Internal linking

- Every service page links to at least 2 relevant case studies
- Every case study links back to the service it demonstrates
- Every blog post links to 1–2 related services or case studies
- Footer includes a nav mirror — every page has a path to every top-level section

## Local SEO

- Google Business Profile claimed for Kim Brothers Ent., Putra Heights, Selangor
- `LocalBusiness` schema on About and Contact pages
- NAP (Name, Address, Phone) must be identical in every instance — website, GBP, social profiles

## Blog / content strategy

The blog is the single biggest lever for organic growth. Without it, service pages alone won't outrank established competitors.

**Cadence:** 1–2 posts per month, 1,500–2,500 words each, plain language.

**Target query types:**

- "WhatsApp chatbot for Malaysian SMEs"
- "J&T franchise payroll software Malaysia"
- "how to automate Unifi reseller leads"
- "Meta Ads for Malaysian small business"
- "Next.js developer Malaysia"

Long-tail, low-competition, high-intent queries where Kim Brothers can realistically rank on page 1.

**Every post must:**

- Have a unique H1 matching the target query
- Include an image within the first viewport (for the OG and LCP)
- Link to at least 2 internal pages
- End with a clear CTA (contact or related case study)

## Post-launch setup

- [ ] Google Search Console verified (DNS TXT record)
- [ ] Sitemap submitted to GSC
- [ ] Google Business Profile claimed
- [ ] Vercel Analytics live
- [ ] Monthly GSC review added to calendar — watch for indexing issues, top queries, CTR outliers

## Anti-patterns — never do these

- Don't `noindex` a content page without a reason documented in a comment
- Don't duplicate content between service pages and case studies — link, don't copy
- Don't use JS-only navigation patterns that break crawlers
- Don't add analytics or tag managers that block render
- Don't ship a page without metadata — the build should fail if `generateMetadata` is missing
