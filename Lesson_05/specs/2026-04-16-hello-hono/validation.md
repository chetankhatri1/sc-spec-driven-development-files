# Validation — Phase 1: Hello Hono

This phase is complete and ready to merge when all checks below pass.

## 1. Server starts

```
npm run dev
```

Expected: terminal output confirms the server is listening on port 3000. No TypeScript errors on startup.

## 2. Root route returns HTML

```
curl -s localhost:3000
```

Expected: HTTP status `200 OK` and response body contains `<h1>` with "AgentClinic".

## 3. Home page renders in browser

Open `http://localhost:3000` in a browser. Expected:

- Page title or `<h1>` reads "AgentClinic"
- Tagline is visible
- Nav links to `/agents`, `/ailments`, and `/therapies` are present (broken links are acceptable at this phase)

## 4. TypeScript compiles cleanly

```
npm run typecheck
```

Expected: exits 0 with no errors or warnings.

## 5. No regressions

- `src/index.ts` has no remaining placeholder content from the scaffold
- `package.json` has `dev`, `build`, and `typecheck` scripts

## Definition of Done

All five checks above pass. The branch can then be merged and Phase 2 can begin.
