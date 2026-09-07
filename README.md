# Personal Portfolio Website

A modern, fast, responsive personal website & portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Features

- Home, About, Portfolio, Skills, Experience, Certificates, Contact pages
- Static data (V1) — ready to migrate to Supabase (V2) and CMS (V3)
- Responsive, accessible, dark-mode-compatible
- SEO optimized (metadata, sitemap, robots)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Typecheck |

## Project Structure

```
docs/                        # PRD, design, architecture, roadmap docs
src/
├── app/                     # Next.js App Router pages
├── components/              # Navbar, sections, cards, UI
├── data/                    # Static content (V1)
├── lib/                     # Utilities
└── types/                   # TypeScript interfaces
```

## Deployment

See `docs/DEPLOYMENT.md` for Vercel/Netlify setup.

## Roadmap

- **V1** — Static portfolio (current)
- **V2** — Supabase / Go backend for dynamic content
- **V3** — Headless CMS (Payload/Sanity), blog
- **V4** — AI Job Apply Automation

See `docs/ROADMAP.md` for details.