# akpandeya.com

Personal website and blog built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

**Live site:** https://akpandeya.com

## Tech Stack

- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS
- **Content:** Markdown files with frontmatter
- **Deployment:** Oracle Cloud VM via GitHub Actions
- **CI/CD:** GitHub Actions

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Project Structure

```
/
├── public/              # Static assets (favicon, images, robots.txt)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/
│   │   └── blog/        # Markdown blog posts
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   │   ├── index.astro  # Landing page / resume
│   │   └── blog/        # Blog pages
│   └── styles/          # Global CSS
├── .github/
│   └── workflows/       # GitHub Actions deployment
└── astro.config.mjs     # Astro configuration
```

## Adding a Blog Post

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
description: "Brief description for previews and SEO"
pubDate: 2024-12-20
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

3. Commit and push to main branch — the site will automatically deploy via GitHub Actions

## Deployment

The site automatically deploys to Oracle Cloud on every push to the `main` branch.

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy to Oracle VM (requires SSH access)
rsync -avz --delete ./dist/ ubuntu@141.144.233.15:/var/www/akpandeya.com/
```

## Performance

Target metrics (Lighthouse):
- Performance: >95
- Accessibility: >95
- Best Practices: >95
- SEO: 100

## License

© 2024 Avanindra Kumar Pandeya. All rights reserved.
