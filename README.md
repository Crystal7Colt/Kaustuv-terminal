# kaustuv-terminal

Personal site — retro terminal / widget-desktop theme, built with Next.js (App Router).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Next.js — just click Deploy. No env vars needed.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Editing content

Everything text-based (bio, skills, projects, contact links) lives in one place:

```
lib/content.js
```

Edit that file and redeploy — no need to touch the components.

## Structure

```
app/
  layout.js       root layout, loads JetBrains Mono
  page.js         renders <Terminal />
  globals.css     design tokens + all styling
components/
  Terminal.jsx    owns theme (green/amber) state, assembles the layout
  Boot.jsx        boot-sequence overlay on load
  Topbar.jsx      nav + status lights
  ConsoleWidget.jsx   "whoami" typewriter + skill bars
  ClockWidget.jsx     live clock, timezone, session uptime
  ProjectsWidget.jsx  project cards with prev/next
  ContactWidget.jsx   contact / social links
  Footer.jsx      bottom bar + amber-mode toggle
lib/
  content.js      all editable copy
```
