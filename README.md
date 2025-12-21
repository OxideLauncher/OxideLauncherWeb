# Oxide Launcher Website

The official website for [Oxide Launcher](https://github.com/OxideLauncher/OxideLauncher).

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## News System

News articles are stored as Markdown files in `public/news/articles/`. Each article needs frontmatter:

```markdown
---
id: "unique-id"
title: "Article Title"
date: "2025-12-20"
category: "launcher" | "minecraft" | "mods" | "community"
summary: "Brief description for the article card"
author: "Author Name" (optional)
image: "/news/images/banner.png" (optional)
---

Article content in Markdown...
```

Run `npm run build:news` to regenerate the `index.json` file (this also runs automatically during build).

The launcher fetches `/news/index.json` to display news in the app, keeping website and launcher news in sync.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to `main`. See `.github/workflows/deploy.yml`.

For custom domain setup, the `CNAME` file in `public/` is set to `oxidelauncher.org`.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- React Router (hash-based for GitHub Pages)

## License

GPL-3.0 — same as the launcher.
