# Contact Page

Contact form + WhatsApp + email. Primary conversion point after the homepage.

## Prerequisites

Build `home-phase-1-shell.md` first. Needs a Resend account + API key in environment variables (not code).

## Scope

- `/contact` route
- Page hero: micro-label (`C O N T A C T`), display h1, one-line summary
- Two-column layout (desktop) / stacked (mobile):
  - Left: contact form
  - Right: WhatsApp + email + studio cards
- Contact form fields:
  - Name (required)
  - Email (required, validated)
  - WhatsApp number (optional, Malaysian format hint)
  - What you're building (textarea, required)
  - Budget range (pill-style select: "Under RM5K," "RM5K–20K," "RM20K–50K," "50K+," "Not sure yet")
- Form submit → `POST /api/contact` → Resend email to `contact@kim-brothers.com`
- Success state: form replaces with a friendly thank-you message
- Error state: inline error, form data preserved
- WhatsApp card: big WhatsApp button, deep link to `wa.me/60164609428`
- Email card: `contact@kim-brothers.com` with mailto link
- Studio card: Putra Heights, Selangor + quick line ("by appointment only" or similar — Chris to confirm wording)
- `generateMetadata` + `LocalBusiness` JSON-LD

## Acceptance criteria

- [ ] Form validates email format; other required fields can't be blank
- [ ] Submit shows pending state; success state replaces form; error state inline
- [ ] Form data never leaves the browser before submit (no third-party analytics on form)
- [ ] Resend API key is read from `process.env.RESEND_API_KEY`, never committed
- [ ] Successful submissions arrive at `contact@kim-brothers.com` within seconds
- [ ] WhatsApp link opens `wa.me/60164609428` in new tab
- [ ] Email link uses `mailto:contact@kim-brothers.com`
- [ ] Budget pills are keyboard-navigable and screen-reader-announced
- [ ] Phone format: `+6016 460 9428`
- [ ] `LocalBusiness` schema validates
- [ ] Mobile: form and cards stack cleanly
- [ ] Both themes render correctly
- [ ] Lighthouse mobile ≥ 95
- [ ] Form handles spam: basic honeypot field, optional rate-limit at the edge (Vercel or Neon-backed IP counter)

## Implementation notes

- API route: `app/api/contact/route.ts` — validate with Zod, send via Resend SDK
- Form uses progressive enhancement: `action` points to the API route, works without JS; JS enhances to inline success/error
- Budget pills: native `<input type="radio">` with custom visible styling; preserves keyboard + SR support
- Optional: log submissions to Neon (see `CLAUDE.md` Neon config) — decide based on whether Chris wants a submission log beyond email inbox
- Don't add a CAPTCHA in v1 unless spam becomes a problem; honeypot usually enough
- Rate limiting: optional for v1, add if spam is observed post-launch

## Files to create

- `app/(marketing)/contact/page.tsx`
- `components/contact/form.tsx` (client)
- `components/contact/contact-cards.tsx` (server)
- `app/api/contact/route.ts`
- `lib/contact/validate.ts` — Zod schema
- `lib/resend.ts` — Resend client singleton
- Optional: `lib/contact/log.ts` — Neon submission log

## Out of scope for this phase

- Scheduling widget / Cal.com integration — WhatsApp is the primary path for synchronous contact
- Multi-step form — single-screen works for 5 fields
- File uploads on the form

## Done when

Form submits successfully, email arrives in the inbox, success/error states work, WhatsApp and email cards work, schema validates, mobile + both themes hold, Lighthouse ≥ 95, no API keys in the repo.
