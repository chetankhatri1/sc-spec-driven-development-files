# Requirements — Phase 1: Hello Hono

## Scope

Install and configure Hono with the `tsx` dev server. Expose a single `GET /` route that returns a minimal AgentClinic home page as server-side HTML. Confirm TypeScript types compile cleanly end-to-end.

The home page must show the site name, a tagline, and nav links to future sections. This phase produces no database and no shared layout component — that is Phase 2. It is the foundation every subsequent phase builds on.

## Context

- Project: AgentClinic — a wellness platform for AI agents (see `specs/mission.md`)
- Stack: TypeScript + Node.js + Hono + plain CSS (see `specs/tech-stack.md`)
- This is Phase 1 of 10 on the roadmap. Nothing from later phases belongs here.

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Dev server port | **3000** | Standard local dev port; consistent across the team |
| Dev runner | **tsx** | Runs TypeScript directly with no build step, per tech-stack decision |
| Root route response | Minimal HTML home page | Server-side HTML with h1, tagline, and nav; no shared layout component yet (Phase 2) |

## Out of Scope

- No HTML layout or CSS
- No database
- No additional routes beyond `/`
- No tests (validation is manual for this phase)
