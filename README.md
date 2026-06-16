# auraflux

Production Astro + Tailwind rewrite of the auraflux agency site, built from the Claude Design handoff bundle below (kept in `project/` as the source of truth for copy and visual fidelity).

## Stack

- **Astro v6** (`output: 'server'`), strict TypeScript
- **Tailwind CSS v4** (CSS-first `@theme` config in `src/styles/global.css`)
- **Sanity CMS** — GROQ queries run directly in each page's frontmatter (`src/lib/sanity.ts`); falls back to the static copy baked into each page when `SANITY_PROJECT_ID` isn't set or the CMS is unreachable
- **Native API routes** (`src/pages/api/`) integrating directly with Resend (contact email), Notion (lead log), Mailerlite (newsletter + lead magnet), and Cloudflare Turnstile (bot protection) — no middleware/Zapier layer
- **`@astrojs/vercel`** adapter for deployment

## Scripts

```
npm run dev      # local dev server
npm run build    # production build (astro build)
npm run preview  # preview the production build
npx astro check  # typecheck .astro files
```

## Environment variables

Copy `.env.example` to `.env` and fill in real values. All of these are declared as `context: 'server', access: 'secret'` in `astro.config.mjs`'s `env.schema`, so they're read via `astro:env/server` (never `import.meta.env`) and are never bundled into client-side code — see `src/lib/sanity.ts` and `src/pages/api/*.ts`. Every var is optional: anything unset degrades gracefully (CMS falls back to static copy, form submissions still return `{ ok: true }` to the user while the failure is logged server-side) rather than breaking the site.

## Original handoff notes

The section below is the original Claude Design handoff README, preserved because `project/` is still the canonical source for exact copy and design intent used while building the Astro pages.

---

# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Read the chat transcripts first.** There are 1 chat transcript(s) in `chats/`. The transcripts show the full back-and-forth between the user and the design assistant — they tell you **what the user actually wants** and **where they landed** after iterating. Don't skip them. The final HTML files are the output, but the chat is where the intent lives.

**Read `project/Auraflux Home.html` in full.** The user had this file open when they triggered the handoff, so it's almost certainly the primary design they want built. Read it top to bottom — don't skim. Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

- `README.md` — this file
- `chats/` — conversation transcripts (read these!)
- `project/` — the `Auraflux v2.0` project files (HTML prototypes, assets, components)
