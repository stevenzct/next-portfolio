# Steven Cabugos Portfolio

A responsive portfolio for Steven Cabugos, a Philippines-based full-stack software engineer and UI/UX designer specializing in fintech, payments, and digital products. The site presents selected projects, professional experience, credentials, and ways to start a project or book a meeting.

> **Live demo:** [stevencabugos.me](https://stevencabugos.me/)

## Overview

This project uses the Next.js App Router and a data-driven content structure. Most portfolio content lives in TypeScript files under `constants/`, while reusable UI is organized under `components/`. Server-rendered routes provide indexable portfolio content and metadata, while client components handle navigation, GSAP motion, carousels, and booking.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 15.3.8 (App Router) |
| UI library | React 19.1 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, CSS Modules, global CSS |
| Carousels | Swiper 11 |
| Accessible UI | Headless UI |
| Icons | Heroicons |
| Animation | GSAP 3 |
| Scheduling | Cal.com Embed |
| Images and fonts | `next/image`, `next/font/local` |
| Exchange rates | Frankfurter API with local fallback rates |
| Tooling | npm, ESLint 9, PostCSS |

## Key Features

- Responsive homepage sections for featured projects, experience, about, certifications, and contact.
- Responsive split hero with a continuously moving two-lane desktop project wall and a touch-enabled mobile gallery.
- Global GSAP route entrances through the App Router template, with reduced-motion support and no page-opacity flash behind the transparent navigation.
- Route-specific canonical, Open Graph, Twitter, robots, sitemap, and JSON-LD metadata generated through the App Router Metadata API.
- The existing homepage About section provides the visible biography, portrait, experience, projects, credentials, and accessible social links without duplicating the content on another route.
- A homepage graph connects `WebSite`, `ProfilePage`, and `Person` structured data to that visible profile content.
- Dedicated all-projects page backed by the same typed project catalog as the six featured homepage cards.
- Shared project cards with compact year metadata pills that preserve title hierarchy.
- Dynamic project detail routes with a priority-loaded hero, scroll-based content reveals, and animated previous/next project navigation.
- Desktop navigation plus a responsive mobile dialog with GSAP open/close motion, expandable About links, large touch targets, and route-aware active states.
- Responsive Swiper carousels for visual work, experience, certifications, and technology logos.
- Server-side exchange-rate proxy with six-hour caching and static fallback rates.
- Cal.com booking page with timezone-aware scheduling.
- External project intake through Tally and direct contact through email links.
- Optimized local images and PP Neue Montreal font files.
- Smooth scrolling, hover transitions, and responsive Tailwind breakpoints.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main portfolio and all homepage sections |
| `/projects` | Complete project catalog |
| `/projects/[title]` | Data-driven project case study and previous/next navigation |
| `/book-a-meeting` | Embedded 30-minute Cal.com booking flow |
| `/api/exchange-rates` | Cached exchange rates with static fallbacks |
| `/resources` | Placeholder route for future resources content |

Project routes are matched against `constants/projectDetails.ts`. If a card has no matching detail entry, the route displays a "Project details coming soon" message.

## Folder Structure

```text
next-portfolio/
|-- components/
|   |-- booking/              # Cal.com booking embed
|   |-- hompage/              # Homepage sections and responsive hero gallery
|   |-- projects/             # Project grid and project-detail motion boundary
|   |-- Navbar.tsx            # Responsive navigation and active-section logic
|   |-- Footer.tsx            # Contact section
|   |-- JsonLd.tsx            # Safe reusable structured-data script
|   `-- ProjectLinksMenu.tsx  # Accessible links menu on project details
|-- constants/                # Portfolio content plus centralized site/SEO identity
|-- docs/                     # Developer-oriented project documentation
|-- hooks/
|   `-- useMobileMenuAnimation.ts  # GSAP mobile-menu lifecycle and cleanup
|-- public/
|   |-- fonts/                # Local PP Neue Montreal font files
|   `-- images/               # Portfolio assets, including images/hero concept artwork
|-- scripts/
|   `-- verify-seo.mjs        # Production-output SEO assertions
|-- src/app/
|   |-- api/exchange-rates/   # Server route for currency conversion data
|   |-- book-a-meeting/       # Booking page
|   |-- projects/             # All-projects index and dynamic project details
|   |-- resources/            # Placeholder resources page
|   |-- robots.ts             # Search crawler rules and sitemap discovery
|   |-- sitemap.ts            # Canonical static and project URLs
|   |-- globals.css           # Tailwind import and global styles
|   |-- layout.tsx            # Root metadata, fonts, and navigation
|   |-- template.tsx          # Global GSAP route entrance
|   `-- page.tsx              # Homepage composition and identity structured data
|-- types/                    # Shared TypeScript types
|-- utils/                    # Currency, metadata, structured-data, and motion helpers
|-- next.config.ts
|-- package.json
`-- tsconfig.json
```

See [Project Structure](docs/PROJECT_STRUCTURE.md) for the component and data flow in more detail.

## Getting Started

### Prerequisites

- A currently supported Node.js LTS release
- npm (the repository includes `package-lock.json`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/stevenzct/next-portfolio.git
   cd next-portfolio
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

No environment variables are currently required. The site uses public, non-secret service identifiers and URLs configured in source files.

If private integrations are added later, store local values in `.env.local`, document only the variable names, and never commit secret values. The existing `.gitignore` excludes `.env*` files.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Turbopack development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the lint command defined by the project |
| `npm run verify:seo -- <url>` | Verify rendered metadata, JSON-LD, crawlability, and index directives |
| `npx tsc --noEmit` | Run a standalone TypeScript check |

> `next.config.ts` currently sets `typescript.ignoreBuildErrors` to `true`. Run the standalone TypeScript check before deployment because a successful production build alone does not guarantee a clean type check.

## Updating Portfolio Content

Most content updates do not require editing page components:

| Content | Source file |
| --- | --- |
| Project cards and catalog order | `constants/projects.ts` |
| Project case studies | `constants/projectDetails.ts` |
| Work experience | `constants/experience.ts` |
| Certifications | `constants/certifications.ts` |
| Social profiles | `constants/socialButton.ts` |
| Optional pricing services, currencies, and fallbacks | `constants/pricing.ts` |
| Hero showcase images | `public/images/Image1.jpg` through `public/images/Image9.jpg` |
| Portfolio images | `public/images/` |

When adding a project, keep the project title consistent between `projects.ts` and `projectDetails.ts`; the title is used to build and resolve the dynamic route. Every entry in `projects.ts` appears on `/projects`, while the first six entries are featured on the homepage.

Project-detail hero images are priority-loaded because they are the primary visual for the route. Additional case-study images remain lazy-loaded and reveal as they approach the viewport.

## Build and Deployment

Create and test a production build locally:

```bash
npm run build
npm run start
```

The application requires a Next.js-compatible server runtime because it exposes the `/api/exchange-rates` route. Vercel is the simplest deployment target, but any Node.js host capable of running `next start` can be used.

See [Deployment Guide](docs/DEPLOYMENT.md) for Vercel, generic Node.js hosting, external service requirements, and post-deployment checks.

## Screenshots

Add current desktop, tablet, and mobile screenshots here.

```text
docs/images/home-desktop.png
docs/images/project-detail.png
docs/images/home-mobile.png
```

Example Markdown after the files are added:

```markdown
![Portfolio homepage](docs/images/home-desktop.png)
```

## Author and Credits

Designed and developed by **Steven Cabugos**.

- [GitHub](https://github.com/stevenzct)
- [LinkedIn](https://ph.linkedin.com/in/cabugos-steven)

Built with Next.js, React, Tailwind CSS, GSAP, Swiper, Headless UI, Heroicons, Cal.com, and the Frankfurter exchange-rate service.

## License

This project is licensed under the [MIT License](LICENSE).
