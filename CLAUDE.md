# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Toolchain

- Package manager: **pnpm** (do not use npm/yarn — `pnpm-lock.yaml` is the source of truth).
- Node version is pinned by **mise** in `mise.toml`. Run `mise install` once to get the right Node.
- Deployment target: **Cloudflare Workers** serving static assets (see `wrangler.jsonc`). The build emits to `./dist`, and Workers serves from there.

## Common commands

```bash
pnpm dev              # Vite dev server
pnpm build            # production build to ./dist
pnpm preview          # preview the built bundle locally
pnpm lint             # ESLint over the repo (eslint .)
pnpm wrangler:dev     # run the Cloudflare Workers dev server against ./dist (requires `pnpm build` first)
```

There is no test runner configured. ESLint is the only automated check.

## Architecture

Single-page React 18 + TypeScript app, no router, no backend. Entry: `src/main.tsx` → `src/App.tsx`, which composes section components from `src/components/` (`Header`, `Hero`, etc.). Styling is Tailwind-only — no CSS modules, no styled-components.

Tailwind has one custom token: `accent` / `accent-hover` (defined in `tailwind.config.js`) — use these classes (e.g. `bg-accent`, `hover:bg-accent-hover`) for brand-colored interactive elements rather than hardcoded color values.

The app ships as static files. There is no server-side code; `wrangler.jsonc` only configures Workers to serve `./dist` as assets.

## Design system

`.gemini/styleguide.md` is the canonical UI style reference — color tokens (note: the file documents `#0070f3` blue but the actual `accent` token in `tailwind.config.js` is orange `rgb(233, 84, 43)` — trust `tailwind.config.js`), typography scale, button/card/nav/hero patterns. Consult it before adding new UI; keep new components consistent with it.

## Session log convention

`docs/instruction.md` defines a session-summary protocol: when asked to record a session, write `docs/sessions/YYYY-MM-DD-HH-MM-SS.md` with frontmatter (`title`, `description`, `pubDate` in ISO 8601) and the structure described in that file. Don't invent your own format.

## Communication

`.github/copilot.prompt.md` sets the house tone: respond in Japanese, terse, no です・ます (くだけた口調). Apply the same to PR titles/bodies and commit messages where natural, while keeping technical identifiers in their original form.
