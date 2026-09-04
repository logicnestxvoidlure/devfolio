# Devfolio

A premium, minimal Roblox developer portfolio builder starter built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Current routes

- `/` — demo public portfolio
- `/dashboard` — starter portfolio editor
- `/u/logicnest` — public username route

## Architecture

```text
app/
  page.tsx
  dashboard/page.tsx
  u/[username]/page.tsx
  globals.css
components/
  navbar.tsx
  portfolio.tsx
  project-card.tsx
lib/
  demo-data.ts
  types.ts
```

## Production roadmap

1. Add PostgreSQL + Prisma.
2. Add authentication.
3. Move portfolio data from `lib/demo-data.ts` into the database.
4. Add `/u/[username]` lookup from the database.
5. Add project CRUD.
6. Add secure image uploads using object storage.
7. Add theme customization.
8. Add custom domains later.

Do not put private API keys in client components or commit `.env` files.
