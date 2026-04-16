# Phase 1 Plan — Hello Hono

## Group 1 — Package Setup

1. Install `hono` (pin exact version, no `^` prefix)
2. Install `tsx` as a dev dependency
3. Verify `tsconfig.json` has `"strict": true` and a sensible `target`/`module` for Node

## Group 2 — Application Entry Point

4. Replace `src/index.ts` placeholder with a minimal Hono app
5. Add a single `GET /` route returning `"AgentClinic is open for business"`
6. Call `serve()` to bind the app to a port (default 3000)

## Group 3 — Dev Script

7. Add `"dev": "tsx src/index.ts"` (or `tsx watch`) to `package.json` scripts
8. Add `"typecheck": "tsc --noEmit"` to `package.json` scripts

## Group 4 — Home Page

9. Create a Hono JSX component for the home page (`src/pages/Home.tsx`)
10. Page renders an `<h1>` with "AgentClinic" and a short tagline
11. Update the `GET /` route to return the rendered JSX instead of a plain string

## Group 5 — Layout Component

12. Create `src/components/Layout.tsx` — renders the full HTML shell (`<html>`, `<head>`, `<body>`); accepts `children` via `PropsWithChildren`; composes `<Header>`, `<Main>`, and `<Footer>` — children are passed into `<Main>`
13. Create `src/components/Header.tsx` — renders `<header>` with a home link to `/`
14. Create `src/components/Main.tsx` — renders `<main>` wrapping `children`
15. Create `src/components/Footer.tsx` — renders `<footer>` with a copyright line
16. `<head>` in `Layout` includes `<meta name="viewport">` and `<link rel="stylesheet" href="/static/style.css">`
17. Create `static/style.css` with CSS custom properties for color/spacing tokens, base element resets, and `min-width` media queries for larger viewports
18. Serve `static/` via `@hono/node-server/serve-static` in `src/index.tsx`
19. Update `src/pages/Home.tsx` to use `<Layout>` — pass page content as children directly (do not re-wrap in `<Main>`)

## Group 6 — Verify

18. Run `npm run typecheck` — must exit 0 with no errors
19. Run `npm run dev` and confirm `curl localhost:3000` returns HTML containing the heading
20. Confirm `curl localhost:3000/static/style.css` returns the CSS file
