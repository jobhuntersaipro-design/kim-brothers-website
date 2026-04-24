# Blog — Phase 2: Posts 2 and 3

Two more launch posts. Pure content — no infrastructure changes.

## Prerequisites

Build `blog-phase-1-infra.md` first. If the template needs changes to support these posts, go back and fix the infrastructure before writing more content.

## Scope

- Two additional `.mdx` files in `content/blog/`
- Each 1,500–2,500 words
- Each targets a specific long-tail Malaysian SME query (candidates in `seo-standards.md`)
- Each includes a cover image, 2-3 inline images or diagrams, at least 2 internal links
- Each ends with a clear CTA to a related service page or case study

## Suggested topics (Chris to confirm one, or pick his own)

- "How to automate Unifi reseller leads with WhatsApp" — links to Sofie case study + Automation service
- "Why your J&T franchise needs payroll software" — links to EasyStaff case study + SaaS service
- "How to stop doing data entry with PDF extraction" — links to Tisha's PO case study + Automation service
- "The Malaysian SME owner's guide to Meta Ads" — links to Ads case study + Marketing supporting line
- "Why your chiropractic clinic needs a real website in 2026" — links to Thrive case study + Web service

Pick topics that connect naturally to 1-2 of the 7 case studies — posts that don't link into the rest of the site don't build site authority.

## Acceptance criteria

Per post:

- [ ] 1,500–2,500 words
- [ ] Grade 6-8 reading level (run through Hemingway or similar)
- [ ] No banned words from `content-guidelines.md`
- [ ] Targets one specific long-tail query
- [ ] Unique title + description in metadata
- [ ] Cover image + 2-3 inline images with meaningful alt text
- [ ] At least 2 internal links to services or case studies
- [ ] Ends with a clear CTA (contact, case study, or service page)
- [ ] No published numbers unless the number is about industry / public data, not a Kim Brothers result
- [ ] OG image generates
- [ ] `BlogPosting` JSON-LD validates

Global:

- [ ] Index page at `/blog` now lists 3 posts in reverse chronological order
- [ ] RSS feed includes all 3

## Implementation notes

- Write in MDX files directly — no separate drafting tool needed
- Lead with the answer, not the setup — first paragraph should start answering the target query
- Use concrete Malaysian examples ("a dispatcher at a J&T branch in Klang," not "a courier company employee")
- Break up walls of text with subheadings every 200-300 words
- Run each post through a reading-level checker before merging
- If a post takes more than an hour to write well, it's probably too long — cut it

## Files to create

- `content/blog/[post-2-slug].mdx`
- `content/blog/[post-3-slug].mdx`
- Per post: cover image in `public/blog/[slug]/cover.jpg` (+ any inline images)

## Out of scope for this phase

- New blog features (tags, categories, series, etc.) — those go in later phases if needed
- Rewriting the first post from Phase 1 — that's done

## Done when

Two additional posts are published, both pass the per-post criteria, the blog index shows 3 posts, all JSON-LD validates, RSS feed includes them all.
