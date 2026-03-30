# Claude Handoff

Last updated: March 30, 2026

## Repo

- Local path: `/Users/tmasingale/Documents/GitHub/code-and-design-recovered`
- Remote: `https://github.com/sicxz/code-and-design.git`
- Current branch: `main`
- No commit or push has been made for the current consolidation work.

## Current State

This repo is the consolidation target for the Code + Design course sites.

- `1` means DESN368 / Code + Design 1
- `2` means DESN378 / Code + Design 2

The unified Astro site is building successfully and is close to push-ready from an app/functionality perspective. The remaining work is mostly git curation and repo cleanup.

## Verified

- `npm run build` succeeds as of March 30, 2026
- Astro built `58` pages successfully
- Local preview has been used at:
  - `http://localhost:4321/`
  - `http://localhost:4321/1`
  - `http://localhost:4321/2`

## What Has Been Implemented

### Consolidation / Routing

- Shared layout and consolidated homepage wiring were updated
- Dynamic course routes were introduced so `/1` and `/2` work as the primary course entry points
- Legacy route compatibility pages were added so older links still resolve

Important files:

- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/data/course-data.json`
- `src/lib/courseRegistry.ts`
- `src/components/RedirectPage.astro`
- `src/pages/[course]/index.astro`
- `src/pages/[course]/assignments/index.astro`
- `src/pages/[course]/assignments/[slug].astro`
- `src/pages/[course]/style-guide.astro`
- `src/pages/[course]/syllabus.astro`
- `src/pages/[course]/weeks/[week].astro`
- `src/pages/assignments/index.astro`
- `src/pages/assignments/[slug].astro`
- `src/pages/syllabus.astro`
- `src/pages/weeks/[week].astro`

### Course Page Consolidation

Course-specific page sources now live under:

- `src/course-pages/course-1/`
- `src/course-pages/course-2/`
- `src/course-pages/course-1-fall-2025-archive/`

Current files there:

- `src/course-pages/course-1/index.astro`
- `src/course-pages/course-1/syllabus.astro`
- `src/course-pages/course-2/index.astro`
- `src/course-pages/course-2/syllabus.astro`
- `src/course-pages/course-1-fall-2025-archive/index.astro`
- `src/course-pages/course-1-fall-2025-archive/syllabus.astro`

### DESN368-specific changes

On `/1`:

- Only Week 0 is currently available
- All other weeks are marked coming soon
- The Firefox DevTools block on the overview page was restyled to match the current course visual language instead of using the older Mozilla-branded treatment

Relevant file:

- `src/course-pages/course-1/index.astro`

### Content / Link Fixes

- Restored the referenced week-1 content file:
  - `src/content/week-1/build/build-1-1-portfolio-migration.md`
- Updated a back-link in:
  - `public/resources/dev-tools-fieldguide/index.html`

### Shared Styling

- Shared visual system changes were made in:
  - `src/styles/styles.css`

## Worktree Status

The working tree is noisy, but the important distinction is:

### Meaningful source changes exist in tracked files

- `public/resources/dev-tools-fieldguide/index.html`
- `src/content/week-1/build/build-1-1-portfolio-migration.md`
- `src/data/course-data.json`
- `src/layouts/BaseLayout.astro`
- `src/pages/assignments/index.astro`
- `src/pages/index.astro`
- `src/pages/syllabus.astro`
- `src/pages/weeks/[week].astro`
- `src/styles/styles.css`

### Important untracked files that likely belong in the repo

- `src/components/RedirectPage.astro`
- `src/lib/courseRegistry.ts`
- `src/course-pages/**`
- `src/pages/[course]/**`
- `src/pages/1-fall-2025/**`
- `src/pages/assignments/[slug].astro`

### Noisy untracked or optional areas

- `planning/**`
- `.playwright-cli/`

## Git Cleanup Situation

`.gitignore` already ignores:

- `node_modules/`
- `dist/`
- `.astro/`
- `.DS_Store`

However, those generated folders were tracked in git history before this cleanup pass, so they currently appear as deletions in `git status`.

That means the repo likely needs an intentional cleanup commit that:

1. Removes tracked generated artifacts from version control
2. Stages the real source files for the consolidated site
3. Decides whether `planning/**` should be committed or left out

Generated/tracked removals showing in status include:

- `.astro/**`
- `dist/**`
- `node_modules/**`
- `.DS_Store`
- `src/.DS_Store`

These deletions are expected and likely correct if the goal is a clean source repo.

## Recommended Next Steps

1. Review `git status` with generated folders mentally filtered out
2. Stage the actual source of truth:
   - consolidated `src/course-pages/**`
   - dynamic route files under `src/pages/[course]/**`
   - redirect helpers and shared layout/data/style updates
3. Decide whether `planning/**` belongs in the repository
4. Commit the consolidation work
5. Push to `origin`

## Commands That Were Useful

```bash
npm ci
npm run build
git status --short --branch
git diff --stat -- src public .gitignore package.json package-lock.json astro.config.mjs tsconfig.json
```

## Notes For Claude

- Do not be alarmed by the huge `git status` output. Most of it is tracked generated files being removed from the repo.
- The app itself is in much better shape than the status output suggests.
- The remaining risk is mostly around staging the right files and not accidentally shipping or omitting the wrong directories.
- If you continue the push-prep work, prioritize source curation over visual redesign.
- User shorthand is important here:
  - `1` = DESN368
  - `2` = DESN378

