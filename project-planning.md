# Portfolio: Nuxt + Tailwind, one codebase for two people (domain-based)

## Context
Laia wants a personal portfolio site, built as a first-time exercise with Nuxt.js (never used before), styled with Tailwind CSS. The twist: the same codebase should serve **two portfolios** — hers and her boyfriend's — each on its own custom domain, showing different name/bio/projects/colors. The `laiamlerma-portfolio` folder currently only contains stray memory files — no app code exists yet, so this is a from-scratch bootstrap.

Decisions made with the user:
- **No blog** — just core sections (About, Projects, Skills, Contact).
- **Two people, one codebase**: which content/colors render is decided **at request time by which domain the visitor is on** (not a build-time flag) — requires Nuxt running in server mode (SSR), not a fully static export.
- **Fully customizable per person**: colors and content must not be hardcoded into components. Colors go through named "brand" tokens; content is passed into components as props from a per-person config file.
- Component breakdown and exact content-sourcing details for Projects/Skills are intentionally left open — build minimally now, refine once Laia is more comfortable in Nuxt.
- **Contact form**: built with a Nuxt server route (Nitro), zero-cost email stack (Resend free tier, or Nodemailer+Gmail as fallback — confirm before Step 5). The "send to" address must depend on which profile/domain was visited.
- **TypeScript**.
- **Deploy to Vercel**, single project, both custom domains attached to it once purchased (domain purchase itself is a manual, separate step for Laia — not blocking development, see Open Items).

## How the two-person architecture works (plain explanation)
- A **profile** is a config object: `{ name, tagline, bio, projects: [...], skills: [...], colors: { primary, secondary, accent, background, text }, contactEmail, social: {...} }`.
- Two files fill in that shape: `content/profiles/laia.ts` and `content/profiles/gabo.ts`, both typed against one shared `Profile` interface in `types/profile.ts` — so they can never drift out of shape from each other.
- A `server/middleware/profile.ts` runs on every request, reads the `Host` header, and looks it up in a small domain→profile map (placeholder domains until real ones exist, e.g. `laia.localhost` / `gabo.localhost` for local dev). It stashes the matched profile on `event.context.profile`.
- A composable `useProfile()` exposes that profile to pages/components (via `useState`, hydrated from server context so client and server agree).
- **Colors**: Tailwind config defines semantic token names (`brand-primary`, `brand-secondary`, `brand-accent`, `brand-bg`, `brand-text`) mapped to CSS variables (`var(--color-brand-primary)`, etc.), not fixed hex values. The active profile's color values get written into those CSS variables in `app.vue` (e.g. via a `<style>` bound to `profile.colors`). Components then just use classes like `bg-brand-primary text-brand-text` — never a hardcoded color — so the same component renders correctly for either person.
- **Content**: every content-bearing component takes props (title, text, items, etc.) rather than importing a specific profile — kept generic and reusable, fed by whichever profile matched the current domain.

## Implementation Steps

1. **Scaffold the Nuxt project**
   - `pnpm dlx nuxi@latest init .` (TypeScript) in the existing folder — keep the stray `MEMORY.md`/`feedback_*.md` files untouched.
   - Verify `nuxt dev` runs.

2. **Add Tailwind CSS + brand color tokens**
   - Install `@nuxtjs/tailwindcss`, register in `nuxt.config.ts`.
   - In `tailwind.config.ts`, extend the theme with `brand-primary`/`brand-secondary`/`brand-accent`/`brand-bg`/`brand-text` mapped to CSS variables.
   - `assets/css/main.css`: Tailwind directives + `:root` fallback values for the CSS variables (so styling works even before profile data loads).

3. **Profile system (the two-person core)**
   - `types/profile.ts`: the `Profile` interface.
   - `content/profiles/laia.ts` and `content/profiles/gabo.ts`: real data for Laia, placeholder data for Gabo until he provides his own.
   - `server/middleware/profile.ts`: domain → profile lookup, sets `event.context.profile`.
   - `composables/useProfile.ts`: exposes the active profile app-wide.
   - **Images**: `public/images/laia/...` and `public/images/gabo/...`, referenced by path from each profile's config (e.g. `projects[].image`). Install `@nuxt/image` for automatic resizing/format conversion (WebP/AVIF) and lazy-loading — free, no extra service, works out of the box on Vercel.
   - **Video**: don't self-host video files in `public/` — bloats the repo and eats Vercel's free-tier bandwidth/build-size limits. Embed via YouTube (unlisted) or Vimeo instead; store the video URL/ID in the profile config and render it in an `<iframe>`.
   - `app.vue`: applies `profile.colors` to the CSS variables at the root.

4. **Core layout & page skeleton**
   - `layouts/default.vue`: header/nav + footer, pulling name/social links from `useProfile()`.
   - `pages/index.vue`: placeholder sections (About, Projects, Skills, Contact), rendering profile content via props — just enough to confirm the whole chain (domain → profile → colors/content → UI) works end to end.
   - Component breakdown beyond this (e.g. `ProjectCard.vue`) deferred until Laia decides how she wants to structure Projects/Skills content.

5. **Contact form + Nitro server route (simple, functional, improve later)**
   - One straightforward form (name/email/message), POSTing to `/api/contact` along with which profile it came from.
   - `server/api/contact.post.ts`: validates input, sends via the chosen email provider, **to the requesting profile's `contactEmail`** — so a message from Gabo's site reaches him, not her.
   - Provider credentials in `.env`, read via `useRuntimeConfig()`, `.env` gitignored.

6. **Local testing of domain switching**
   - Map `laia.localhost` and `gabo.localhost` to `127.0.0.1` (via `/etc/hosts` or Nuxt dev server host override) so both profiles can be visited locally before real domains exist.

7. **Deployment setup**
   - Single Vercel project (Nuxt's Vercel preset is auto-detected — SSR works out of the box, no static export).
   - Env vars (email API key, domain→profile map if not hardcoded) added in Vercel project settings.
   - Once domains are purchased, attach both as custom domains on the same Vercel project.
   - Push to GitHub and connect to Vercel — Claude won't push/deploy without explicit confirmation at that step.

## Verification
- `pnpm dev`, visit both local hostnames, confirm distinct name/bio/colors/projects render correctly per domain.
- Submit the contact form from each local hostname, confirm the email lands at the correct person's address.
- `pnpm build && pnpm preview` — confirm SSR production build works before deploying.
- After Vercel deploy, repeat the domain + contact-form check on the live (placeholder or real) domains.

## Open Items (not blocking development)
- **Domains**: not purchased yet. Laia will buy two real domains later (Porkbun suggested as a cheap registrar; she'll investigate a "name change" oddity on an existing Porkbun domain separately). Development proceeds now using `*.localhost` placeholders; swapping in real domains later is a one-line change to the domain→profile map.
- **Email provider**: confirm Resend vs Nodemailer/Gmail before Step 5.
- **Gabo's content**: placeholder data until he supplies his own bio/projects/colors.
