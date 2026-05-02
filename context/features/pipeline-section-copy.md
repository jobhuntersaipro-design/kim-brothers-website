# Pipeline Section — Copy

Final copy for the "How it works" pipeline section on the home page. All node descriptions are one sentence each, written in plain language for Malaysian SME owners who may not be fluent in English.

**Section location:** Home page (`/`), below the Services grid.
**Component:** `components/pipeline-section.tsx`
**Data:** `lib/pipelines.ts`

---

## Section header

**Eyebrow micro-label:**
`H O W   I T   W O R K S`

**H2 (display, with italic emphasis on "time"):**
Same five steps. Every _time_.

**Supporting paragraph:**
Whether it's a chatbot, a website, or a scraper — we follow the same five steps. Pick one to see how.

---

## Tabs

Three pipeline tabs, auto-rotating every 9 seconds, stops on click:

1. `MESSAGE → CUSTOMER`
2. `DATA → REPORT`
3. `IDEA → WEBSITE`

---

## Pipeline 1: `MESSAGE → CUSTOMER`

The chatbot flow (built on top of Sofie / WhatsApp infrastructure).

| Node | Top label  | Description                                           |
| ---- | ---------- | ----------------------------------------------------- |
| 1    | Message in | A customer sends you a WhatsApp message.              |
| 2    | AI replies | An AI agent replies and answers their questions.      |
| 3    | Chat saved | The chat is saved automatically so nothing gets lost. |
| 4    | Right team | The right team member is notified to take over.       |
| 5    | Customer   | You follow up with a customer who's ready to buy.     |

---

## Pipeline 2: `DATA → REPORT`

The scraping / daily reporting flow (built on top of the Unifi sales reporting work).

| Node | Top label    | Description                                                    |
| ---- | ------------ | -------------------------------------------------------------- |
| 1    | Source       | We point the tool at the website or system you need data from. |
| 2    | Collected    | It pulls the data automatically, every day.                    |
| 3    | Stored       | The data is stored and organised so it stays clean.            |
| 4    | Cleaned      | We turn the raw numbers into something easy to read.           |
| 5    | Daily report | A simple summary lands on your phone every morning.            |

---

## Pipeline 3: `IDEA → WEBSITE`

The web development flow (built on top of the Thrive Chiropractic work).

| Node | Top label | Description                                    |
| ---- | --------- | ---------------------------------------------- |
| 1    | Your idea | You tell us what you want the website to do.   |
| 2    | Design    | We design how it looks and feels.              |
| 3    | Build     | We build it to be fast and easy to update.     |
| 4    | Launch    | We put it online so anyone can visit.          |
| 5    | Live      | Google finds it and customers start coming in. |

---

## Notes for the build

- **No tech stack labels in the visible UI.** No "Next.js," "Vercel," "respond.io," "Make.com," "Postgres," "Sofie," or any other product or library name. Those belong on the case study pages, not here. The pipeline section's job is to communicate the flow to a non-technical visitor.
- **Italic emphasis word in the h2 is "time"** — coloured with `--accent-ink` per the design system rule (one italic word per display title).
- **Tab labels use uppercase mono** with the standard letter-spacing — same treatment as other micro-labels on the site.
- **Auto-rotation:** 9 seconds per tab, stops on first click. Per `DESIGN.md` §5 and §7.
- **Mobile:** pipeline collapses to 2-up grid, connectors hide. Each node still shows its description.
- **Reduced motion:** auto-rotation stops, accent pulse stops. Static display only.

## Why no tech stack labels

The previous version showed brand names ("respond.io," "Make.com," "Next.js," "Vercel," "Postgres") under each node. Three reasons that's been removed:

1. The audience is Malaysian SME owners, many not technical. These labels mean nothing to them and make the section feel intimidating.
2. Each `/work/[slug]` case study page has a dedicated tech stack section. Technical visitors who want depth will get it there.
3. A diagram is most effective when it carries one message clearly. Mixing flow + brand names dilutes both.

If a future iteration wants to surface the stack to technical visitors, the pattern to add is a hover tooltip on each node — never a default visible label.

---

## Copy review checklist

Before this copy ships, confirm:

- [ ] No banned words (see `content-guidelines.md`)
- [ ] Reading level Grade 6-8 (run through a checker)
- [ ] No product or library names anywhere in the visible UI
- [ ] No published numbers
- [ ] First node description connects to the tab's input word; last node description delivers the tab's output word
- [ ] H2 has exactly one italic word
- [ ] Mobile fallback works (descriptions readable in 2-up grid)
