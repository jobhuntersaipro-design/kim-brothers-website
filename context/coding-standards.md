# Coding Standards

## Language

- **TypeScript strict mode.** No `any`. No `@ts-ignore` without a comment explaining why.
- **Prefer `type` over `interface`** unless extending a library interface.
- **No default exports** except for Next.js page / layout / route files (which require them).

## React

- **Server Components by default.** Only add `"use client"` when you need state, effects, browser APIs, or event handlers.
- **React Compiler is enabled.** Don't manually memoize with `useMemo` / `useCallback` / `React.memo` unless profiling shows a real need — the compiler handles it.
- **Composition over props drilling.** If a component takes more than 6 props, split it.
- **No prop-types** — TypeScript handles this.

## Next.js 16 patterns

- **App Router only.** No pages directory.
- **`generateMetadata`** for every route that produces HTML.
- **`use cache` directive** on case study and blog pages (they rarely change).
- **`<ViewTransition>`** (React 19.2, built into Next 16) for page transitions — not Framer Motion.
- **`proxy.ts`** instead of `middleware.ts` (middleware is deprecated in Next 16).
- **`next/image`** for every image. Never a plain `<img>` tag.
- **`next/font`** for every font. Never load fonts from a CDN.
- **`next/link`** for every internal link. Never a plain `<a>` tag for internal navigation.

## Styling

- **Tailwind v4 only.** No CSS modules, no styled-components, no Emotion.
- **Design tokens live in `globals.css`** as CSS custom properties and referenced in `tailwind.config.ts`.
- **No inline `style={{}}`** except for dynamic values that can't be expressed in Tailwind (e.g. calculated transforms).
- **Responsive: mobile-first.** Start with base styles, add `md:` and `lg:` breakpoints as you scale up.

## File organization

```
app/
  (marketing)/          # Route group for public pages
    page.tsx
    services/
    work/
    about/
    blog/
    contact/
  api/                  # Route handlers
  layout.tsx
  globals.css
components/
  ui/                   # Primitive reusable pieces (Button, Link, etc.)
  sections/             # Page sections (Hero, ServicesGrid, etc.)
  mdx/                  # MDX-specific components
lib/
  seo.ts                # SEO helpers (generateMetadata factories)
  schema.ts             # JSON-LD builders
  content/              # Case study data, blog post loading
content/
  case-studies/         # .ts files, one per case study
  blog/                 # .mdx files
context/                # Context docs (this file lives here)
public/                 # Static assets
```

## Naming

- **Components**: PascalCase (`HeroSection.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Route files**: lowercase (`page.tsx`, `layout.tsx`)
- **CSS classes**: kebab-case when custom, Tailwind utilities otherwise
- **Types**: PascalCase (`type CaseStudy = {...}`)

## Testing

- **Vitest** for unit and integration tests.
- **Playwright** for e2e on critical paths (contact form submission, navigation).
- Test files live next to source: `Hero.tsx` → `Hero.test.tsx`.
- Not every component needs a test. Test business logic, form validation, and anything user-facing and breakable.

## Accessibility

- **Semantic HTML first.** Use `<nav>`, `<main>`, `<article>`, `<section>` correctly. Don't build nav from a div.
- **Keyboard reachable.** Every interactive element works with Tab and Enter.
- **Focus visible.** Never `outline: none` without a replacement.
- **Alt text required.** Every `<Image>` gets a meaningful alt, or `alt=""` if purely decorative.
- **Contrast ratio:** minimum 4.5:1 for body text against cream background.

## Performance

- **No client-side data fetching on content pages.** Fetch on the server.
- **No heavy dependencies for small jobs.** Don't install Lodash for one utility; write the util.
- **Lazy-load below-the-fold.** Use `dynamic()` for heavy components not needed on first paint.
- **Run `npm run analyze`** before merging anything that adds a dependency.
