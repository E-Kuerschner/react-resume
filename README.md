# react-resume

A single-page React/TypeScript resume site for Erich Kuerschner. There's no
routing, state management, or backend — it's a static component tree rendered
once into `#root`.

## Tech stack

-   **React 19** + **TypeScript 6** — the resume is a small tree of typed,
    presentational components. `jsx: react-jsx` means no React import is needed
    per file.
-   **Bun** — used for everything: package management, the dev server, and
    production bundling. Bun runs TS/TSX natively and treats `index.html` as the
    bundler entrypoint, following its `<script src="./src/index.tsx">` tag to
    bundle the app, the CSS it imports, and any assets (fonts, the QR `.png`).
-   **Plain CSS** — styles live in `src/style/index.css` and are imported for
    their side effect from `src/index.tsx`. No CSS framework.
-   **classnames** — for conditional/multiple class composition.
-   **Prettier** — formatting (config embedded in `package.json`).

There is no Vite/Parcel/webpack and no `react-scripts`.

## Getting started

Install dependencies (lockfile is `bun.lock`):

```sh
bun install
```

### Scripts

-   `bun run dev` — starts Bun's dev server (React Fast Refresh / HMR) on
    `index.html`, defaulting to http://localhost:3000.
-   `bun run build` — type-checks with `tsc --noEmit`, then bundles a minified
    build to `dist/` via `bun build ./index.html --outdir=dist --minify`.
-   `bun run check` — type-check only.
-   `bun run format` — format the project with Prettier.

## Project structure

-   `index.html` — bundler entrypoint at the repo root.
-   `src/index.tsx` — mounts `<Resume>` with hardcoded props (`customSummary`,
    `personalInfo`) and imports the global stylesheet.
-   `src/Resume.tsx` — the entire resume content (work history, education,
    skills, contact info) as JSX. There's no data layer — edit this file
    directly to update resume content.
-   `src/components/` — small presentational components (`Layout`, `Header`,
    `ResumeSection`, `WorkExperience`, `Education`, `SkillList`, `ContactInfo`),
    each with a typed props interface. `Layout` implements a two-column layout
    via a render-prop pattern, exposing `Left` and `Right` column components to
    its `children` function.
-   `src/style/index.css` — all styling.
-   `src/assets.d.ts` — ambient module declarations so TypeScript understands the
    bundler's non-JS imports (`*.png` → URL string, side-effect `*.css` imports).

## TypeScript config

`tsconfig.json` exists purely to drive `tsc` type-checking (`noEmit: true`) —
Bun ignores it for execution and does its own transpilation/bundling. It's tuned
for a bundler: `moduleResolution: "bundler"`, `target: "ESNext"`,
`allowImportingTsExtensions: true`, and `strict: true`.
