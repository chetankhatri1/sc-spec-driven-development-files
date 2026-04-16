import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { html } from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    html`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AgentClinic</title>
    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: system-ui, sans-serif; line-height: 1.6; padding: 1rem; color: #1a1a1a; }
      h1 { font-size: 2rem; margin-bottom: 0.5rem; }
      p { color: #555; margin-bottom: 1.5rem; }
      nav a { margin-right: 1rem; color: #0070f3; text-decoration: none; }
      nav a:hover { text-decoration: underline; }
      @media (min-width: 640px) {
        body { padding: 2rem; }
        h1 { font-size: 2.5rem; }
      }
    </style>
  </head>
  <body>
    <h1>AgentClinic</h1>
    <p>Wellness for AI agents</p>
    <nav>
      <a href="/agents">Agents</a>
      <a href="/ailments">Ailments</a>
      <a href="/therapies">Therapies</a>
    </nav>
  </body>
</html>`
  )
})

serve({ fetch: app.fetch, port: 3000 })
