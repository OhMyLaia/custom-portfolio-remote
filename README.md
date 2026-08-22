# Custom Portfolio

A single Nuxt app that serves multiple people's portfolios from one codebase. Which content shows up is decided at request time by hostname (see [server/middleware/profile.ts](server/middleware/profile.ts)) — there is no per-profile branch or build, just per-profile data.

## Setup

```bash
pnpm install
```

## Development server

Runs on `http://localhost:4000` (not the Nuxt default 3000):

```bash
pnpm dev
```

To preview a specific profile locally, the middleware matches on hostname (`laia.localhost`, `gabo.localhost`, `userRandom.localhost`), so visit `http://laia.localhost:4000` or `http://gabo.localhost:4000` instead of plain `localhost` — no `/etc/hosts` entry needed, `*.localhost` resolves automatically on modern OSes/browsers.

## Adding a new profile

1. Add a `content/profiles/<name>.ts` file implementing the `Profile` interface from [shared/types/profile.ts](shared/types/profile.ts) (colors, bio, projects, skills, SEO, etc.).
2. Register it in [server/middleware/profile.ts](server/middleware/profile.ts)'s `domainProfileMap`, mapping both the local `*.localhost` dev domain and the eventual production domain.
3. Add a dedicated landing organism under `app/components/organisms/` (e.g. `LandingGabo.vue`) — the landing page is unique per profile, not shared/data-driven, so it needs its own component. Wire it into [app/pages/index.vue](app/pages/index.vue)'s `v-if` chain on `profile?.id` (it currently falls back to `LandingLaia` by default). Other profile-specific organisms follow the same atoms/molecules/organisms structure — never hardcode one person's content into a shared component.
4. Add translated strings to `i18n/locales/{en,es,ca}.json` if the profile needs copy the others don't.

## Deployment & git flow (multi-contributor)

Production deploys happen on push to `main` — Vercel builds and ships automatically, so `main` must always be in a deployable state.

### Branching
- Work on a branch per change (e.g. `gabo/hero-section`, `laia/press-page`), open a PR into `main` instead of pushing directly.
- Every branch/PR gets an automatic Vercel Preview deployment with its own URL — use it to sanity-check a change before merging.
- Since profile data lives in the same repo, watch for collisions in shared files (`app/components/`, `i18n/locales/*.json`, `nuxt.config.ts`) — keep PRs small and pull `main` before starting new work.

### How domain → profile routing actually works

This matters once contributors are on separate Vercel projects, because it's easy to assume Vercel decides which profile is served. It doesn't — Vercel only decides which *deployment* handles a domain. The profile itself is picked at runtime, inside the app, per request:

1. Every deployment (yours, Gabo's, anyone's) bundles **all** profiles — `content/profiles/laia.ts`, `gabo.ts`, etc. are all part of the same build, regardless of whose Vercel account built it.
2. A visitor requests `gabo.com` → Vercel's edge network routes that request to whichever project has `gabo.com` registered under Settings → Domains (Gabo's project). That's Vercel's *entire* role here.
3. Inside that deployment, [server/middleware/profile.ts](server/middleware/profile.ts) reads the actual Host header of the request and looks it up:
   ```ts
   const host = (getRequestHost(event) || '').split(':')[0] // "gabo.com"
   event.context.profile = domainProfileMap[host] ?? defaultProfile
   ```
4. If `"gabo.com"` isn't a key in `domainProfileMap`, the app falls back to `defaultProfile` (laia) — even though Vercel correctly routed the request to Gabo's own deployment. Vercel routing to the right project does **not** by itself make the right profile show up.

So the code change in step 5 below (adding the domain to `domainProfileMap`) is the step that actually makes a domain show the right profile — the Vercel domain/project setup only gets the request to a deployment that's running the right code.

### Onboarding a new contributor with their own Vercel account (e.g. Gabo)

Each contributor deploys through their **own** Vercel account/project (kept separate since Vercel projects are tied to one Google/GitHub identity), pointed at this same shared repo:

1. **Get GitHub access** — the repo owner adds the new contributor as a collaborator (Settings → Collaborators). This grants read/write to the whole repo, including other profiles' content — there's no repo-level separation between profiles.
2. **Create a Vercel project** — from their own Vercel account: Import Project → select this GitHub repo → set production branch to `main`.
3. **Set environment variables** — in that project's Settings → Environment Variables, add their own copies of the required vars (e.g. `NUXT_RESEND_API_KEY`, `NUXT_RESEND_FROM_EMAIL` — see `.env.example`), for both **Production** and **Preview** environments. These are separate from the repo owner's — each Vercel project holds its own.
4. **Add their domain** — in that project's Settings → Domains, add their production domain.
5. **Register the domain in code** — add an entry for that domain in `domainProfileMap` in [server/middleware/profile.ts](server/middleware/profile.ts) (a PR into `main`, following the branch flow above), so the app knows to serve their profile on that hostname.

From then on, a merge to `main` deploys to **every** contributor's Vercel project at once, since they all watch the same branch — that's expected for a shared codebase.
