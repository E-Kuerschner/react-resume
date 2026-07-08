# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page React/TypeScript resume site for Erich Kuerschner. There is no routing, no state management, and no backend — it's a static component tree rendered once into `#root`.

## Build tooling

The project uses **Bun** for everything — package management, the dev server, and production bundling. Bun runs TypeScript/TSX natively and treats `index.html` (at the repo root) as the bundler entrypoint: it follows the `<script src="./src/index.tsx">` tag and bundles the referenced TS/TSX, the CSS it imports, and any assets (fonts, the QR `.png`).

Scripts (`package.json`):

-   `bun run dev` — starts Bun's dev server (with React Fast Refresh / HMR) on `index.html`. Defaults to http://localhost:3000.
-   `bun run build` — type-checks with `tsc --noEmit`, then bundles to `dist/` via `bun build ./index.html --outdir=dist --minify`.
-   `bun run check` — type-check only.

Install deps with `bun install` (lockfile is `bun.lock`). There is no Vite/Parcel/webpack and no `react-scripts`; do not reintroduce them.

## Architecture

-   `src/index.tsx` — entry point; mounts `<Resume>` with hardcoded props (`customSummary`, `personalInfo`).
-   `src/Resume.tsx` — the entire resume content lives here as JSX (work history, education, skills, contact info). There's no data layer — to update resume content, edit this file directly.
-   `src/components/Layout.tsx` — implements a two-column layout via a render-prop pattern: it exposes `Left` and `Right` column components to its `children` function rather than using named slot props. Follow this pattern when reading/modifying `Resume.tsx`'s layout usage.
-   `src/components/*` — small presentational components (`Header`, `ResumeSection`, `WorkExperience`, `Education`, `SkillList`, `ContactInfo`), each with a typed props interface. No shared component library or styling framework — styles are plain CSS in `src/style/index.css`, imported for its side effect from `src/index.tsx`.
-   `src/assets.d.ts` — ambient module declarations so TypeScript understands the bundler's non-JS imports (`*.png` resolves to a URL string, side-effect `*.css` imports).
-   Class name composition uses the `classnames` package where multiple/conditional classes are needed (see `ResumeSection.tsx`).

## TypeScript config notes

-   React 19 with `@types/react` 19; `strict: true`, `jsx: react-jsx` (no need to import React in each file).
-   Tuned for a bundler: `moduleResolution: "bundler"`, `target: "ESNext"`, `allowImportingTsExtensions: true`.
-   `noEmit: true` — `tsconfig.json` exists purely to drive `tsc` type-checking. Bun ignores it for execution and does its own transpilation/bundling.

## Formatting

Prettier config is embedded in `package.json`: no semicolons, 4-space tabs (2 for CSS/SCSS/JSON), 100 char print width, no trailing commas.
