# Blog — Phase 1: Infrastructure + First Post

MDX pipeline, `/blog` index, post template, and the first real post. Biggest SEO lever on the site — get the foundation right.

## Prerequisites

Build `home-phase-1-shell.md` first. Needs decision on MDX vs. Contentlayer — **recommendation: native Next.js 16 MDX support, no Contentlayer (it's unmaintained)**.

## Scope

- `/blog` index route
- `/blog/[slug]` dynamic route for individual posts
- Native MDX setup in Next.js 16 (no Contentlayer)
- MDX components wired up: headings, paragraphs, lists, code blocks, blockquotes, inline code, images (`next/image` wrapper)
- Post metadata via exported `metadata` object in each MDX file (title, description, date, tags, excerpt)
- Post listing on `/blog` — title, date, excerpt, tags, click → individual post
- Reverse chronological order
- Individual post template: header with title + date + reading time, optional cover image, body, footer with "Read next" links, CTA to `/contact`
- Reading time calculated from word count at build
- Table of contents auto-generated from h2s (sticky on desktop, collapsible on mobile)
- First real post — topic TBD but drafted (Chris to pick; candidate topics in `seo-standards.md`)
- `generateMetadata` for index and per-post
- `Blog` JSON-LD on index; `BlogPosting` + `Article` on posts
- OG image per post (auto-generated from post title)
- RSS feed at `/blog/rss.xml`

## Acceptance criteria

- [ ] MDX files live in `content/blog/` and render at `/blog/[slug]`
- [ ] Index lists all posts in reverse chronological order
- [ ] Post template renders with header, body, reading time, TOC
- [ ] TOC is sticky on desktop, collapsible on mobile
- [ ] Code blocks have syntax highlighting (Shiki via `next/mdx` or similar — no heavy client JS)
- [ ] `next/image` used for every image (including inline markdown images)
- [ ] First real post is published and readable end-to-end
- [ ] Metadata unique per post
- [ ] `BlogPosting` + `Article` JSON-LD validates
- [ ] OG image auto-generates with post title
- [ ] RSS feed at `/blog/rss.xml` validates
- [ ] Reading level: Grade 6-8 on the first post; no banned words
- [ ] Mobile and both themes hold
- [ ] Lighthouse mobile ≥ 95 on a long post (2,000+ words)

## Implementation notes

- Use `@next/mdx` with `rehype` plugins: `rehype-slug` (heading anchors), `rehype-autolink-headings`, `rehype-pretty-code` (Shiki highlighting)
- Avoid `remark-gfm` unless table support is actually needed — smaller bundle
- TOC: extract h2s at build time from the MDX AST; render in a client component for sticky + collapsible behaviour
- Reading time: simple word-count ÷ 200 wpm at build
- MDX content is imported directly — no separate CMS or Contentlayer
- Keep frontmatter minimal: title, description, date, tags, cover (optional)
- Image optimization for blog: put images in `public/blog/[slug]/` and reference with `next/image`

## Files to create

- `app/(marketing)/blog/page.tsx` — index
- `app/(marketing)/blog/[slug]/page.tsx` — post template
- `app/(marketing)/blog/[slug]/opengraph-image.tsx` — OG image generator
- `app/blog/rss.xml/route.ts` — RSS feed
- `components/blog/post-card.tsx`
- `components/blog/post-header.tsx`
- `components/blog/toc.tsx` (client, sticky)
- `components/blog/reading-time.tsx`
- `components/mdx/*` — custom MDX renderers (Heading, Code, Image, Blockquote)
- `lib/blog/loader.ts` — loads posts from `content/blog/`
- `lib/blog/reading-time.ts`
- `next.config.mjs` — MDX config
- `content/blog/[first-post-slug].mdx` — the first post

## Out of scope for this phase

- Categories / tag archive pages (`/blog/tag/[tag]`) — not in v1
- Comments — not in v1
- Newsletter signup — not in v1 (could be v1.1)
- Posts 2 and 3 — that's `blog-phase-2-posts.md`
- Author profiles — single-author blog, not needed

## Done when

`/blog` renders with one real post, `/blog/[slug]` template works, MDX pipeline is solid, TOC works, reading time displays, JSON-LD validates, OG image generates, RSS feed validates, Lighthouse ≥ 95.
