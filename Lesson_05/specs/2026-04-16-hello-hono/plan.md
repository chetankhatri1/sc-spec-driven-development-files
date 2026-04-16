# Plan — Phase 1: Hello Hono

## 1. Install dependencies

- Add `hono` as a production dependency
- Add `tsx` as a dev dependency
- Add `@types/node` as a dev dependency

## 2. Configure TypeScript

- Ensure `tsconfig.json` targets ES2020+
- Enable `"jsx": "react-jsx"` and set `"jsxImportSource": "hono/jsx"` (needed for later phases)
- Confirm `tsc --noEmit` exits 0 on an empty project

## 3. Wire up the Hono server

- Replace `src/index.ts` placeholder with a Hono app
- Register a `GET /` route returning an HTML home page (see task group 4)
- Call `serve({ fetch: app.fetch, port: 3000 })`

## 4. Build the minimal home page

- Return server-side HTML from the `GET /` route using Hono's `html` tagged template
- Page must include:
  - A visible `<h1>` with "AgentClinic"
  - A short tagline (e.g. "Wellness for AI agents")
  - A `<nav>` placeholder with links to `/agents`, `/ailments`, `/therapies` (hrefs only — pages don't exist yet)
- No external CSS file yet; inline a `<style>` block with minimal reset and typography

## 5. Add a dev script to package.json

- `"dev": "tsx watch src/index.ts"` — restarts on file changes
- `"build": "tsc"` — for future production builds
- `"typecheck": "tsc --noEmit"` — fast type-only check

## 6. Smoke test

- Run `npm run dev`, confirm server starts on port 3000
- `curl localhost:3000` returns HTML containing "AgentClinic"
- Open `http://localhost:3000` in a browser and confirm the page renders correctly
- Run `npm run typecheck`, confirm exit 0
