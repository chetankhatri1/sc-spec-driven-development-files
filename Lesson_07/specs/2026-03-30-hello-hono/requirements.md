# Phase 1 Requirements — Hello Hono

## Scope

Install and configure Hono with a `tsx` dev server. Expose a single `/` route that renders a minimal HTML home page via Hono JSX. Confirm TypeScript types work end-to-end.

## Out of Scope

- No test framework setup (Vitest deferred to a later phase)
- No database or additional routes
- No CI/CD pipeline

## Decisions

### Layout component structure
`src/components/Layout.tsx` owns the HTML shell (`<html>`, `<head>`, `<body>`) and composes the three structural subcomponents. Each subcomponent must live in its own file:

- `src/components/Header.tsx` — renders `<header>`
- `src/components/Main.tsx` — renders `<main>`, accepts `children`
- `src/components/Footer.tsx` — renders `<footer>`

No structural markup may be inlined directly in `Layout.tsx`; it delegates to these files. This keeps each piece independently readable and testable.

### Pin Hono version
Record the exact Hono version in `package.json` with no range prefix (e.g., `"hono": "4.x.y"`). Future phases must not silently upgrade without deliberate review.

### Enforce strict TypeScript
`tsconfig.json` must include `"strict": true`. This is non-negotiable from the first commit so the codebase never accumulates loose types.

## Context

This phase exists to prove the baseline works: Node runs TypeScript, Hono serves a response, and the dev loop is functional. Nothing more.

The home page should render an `<h1>` containing "AgentClinic" and a short tagline that reflects the mission. The route returns HTML, not a plain string — Hono JSX handles the rendering.

This is the first visible page a developer sees when they clone and run the project.

## Stakeholder Notes

- **Mary** needs TypeScript end-to-end (satisfied by `strict: true` + successful `tsc --noEmit`)
- **Steve** has no requirements yet; this phase is plumbing only
