# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Cullan Luther's personal portfolio site (cullanluther.com): a static SvelteKit 5 site with pages for work history, art, freelancing info, and small standalone tools/bookmarklets/snippets he's published.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml`, `pnpm-workspace.yaml`, `.npmrc` has `engine-strict=true`).

```bash
pnpm install
pnpm dev          # vite dev server
pnpm build        # production build to /build, then runs postbuild (sitemap generation)
pnpm preview       # preview the production build locally
pnpm clean         # recursively delete .DS_Store files
```

There is no test suite and no lint script wired into `package.json`. A `biome.config` exists (relaxes `useConst`/`useImportType`/`noUnusedVariables`/`noUnusedImports` for `.svelte` files) but Biome is not a project dependency — it's presumably run via an editor extension or `pnpm dlx @biomejs/biome check .` on an ad hoc basis.

## Architecture

**Rendering**: Fully static/prerendered site. `src/routes/+layout.ts` sets `export const prerender = true` and `trailingSlash = 'never'` for the whole app. Adapter is `@sveltejs/adapter-static` wrapped by `sveltekit-html-minifier` (`svelte.config.js`), outputting to `build/`. Deployment (`.github/workflows/main.yml`) syncs `build/` to an S3 bucket and invalidates a CloudFront distribution on every push to `main` — there is no staging/preview deploy.

**Svelte 5 runes**: components use the Svelte 5 syntax (`$props()`, `$state()`, `$derived()`, `{@render children()}`), not the older `export let` / reactive-statement style. Match this when adding components.

**Content-as-data**: Most page content lives in `src/lib/data/` (`work.json`, `employers.ts`, `art.json`, `bookmarklets.json`, `snippets.json`, `tools.json`, `sculptures.ts`) rather than hardcoded in markup. Route `+page.svelte` files import these and map/filter over them (e.g. `src/routes/work/+page.svelte` filters `work.json` by `type` into "projects" vs "sites" tabs, and separately renders an `employers` list with per-employer `<dialog>` modals). When adding a new work item, art piece, tool, etc., prefer adding a data entry over writing new markup.

**Images**: Content images (site screenshots, home page photo) are served from an external CDN at `images.cullanluther.com`, referenced by absolute URL directly in markup (a `<link rel="preconnect">` to that origin is set in the root layout). Company logos in `employers.ts`, however, are still local assets under `src/lib/assets/images/company/` imported directly (Vite-processed). Don't assume all images are local.

**SEO**: `src/lib/components/Seo.svelte` is a per-page component that sets `<title>`, meta description, canonical URL, and Open Graph/Twitter tags. Every route page should render `<Seo title="..." pageCanonicalUrl="..." />` near the top (see `src/routes/work/+page.svelte` for the pattern). Defaults fall back to the site-wide description if a page doesn't override them.

**Root layout** (`src/routes/+layout.svelte`) owns:
- The slide-out sidebar nav (with a hand-rolled focus trap for accessibility when open, Escape-to-close, `aria-label`s).
- View Transitions API kickoff (`document.startViewTransition()`) on every navigation.
- The dark/light theme toggle (`src/lib/components/Theme-switch.svelte`) which toggles a `.dark` class on `<html>` and persists to `localStorage`; theming is done entirely via CSS custom properties defined in `src/lib/styles/global.scss` (`--primary-color`, `--sidebar-background`, etc.) — there's no CSS-in-JS or Tailwind.
- The homepage-only footer photo.

**Routes structure**: standard SvelteKit file-based routing under `src/routes/`. Note the nested art route uses a named layout: `src/routes/art/letters/+page@letters.svelte` with `src/routes/art/letters/+layout.svelte` to opt out of the root layout's container styling (full-bleed page). `tools/`, `bookmarklets/`, and `snippets/` are each a listing page plus one subdirectory per individual tool/snippet, and those subdirectories typically bundle their own helper `.ts` files (e.g. `bookmarklet-code.ts`, `bookmarklet-function.ts`) alongside the `+page.svelte` that writes up how to use them.

**Custom components** of note in `src/lib/components/`: `tabable/` is a hand-built accessible tabs implementation (`Tabs`/`TabList`/`Tab`/`TabPanel`) used instead of a UI library; `code-snippet/` wraps Prism.js (loaded via `static/prism-syntax.js`) for syntax-highlighted code blocks; `code-mutator/` is a standalone interactive tool embedded in one of the `/tools` pages.

**PWA/offline**: `src/service-worker.ts` implements a standard SvelteKit service worker (cache-on-install, network-falling-back-to-cache for other requests, cleans up stale caches on activate) backed by `static/manifest.json`.

**`src/lib/form.ts`**: a small Svelte action (`enhance`) for progressively-enhancing native `<form>` submissions via fetch — predates/parallels SvelteKit's own form actions; used for the contact form.
