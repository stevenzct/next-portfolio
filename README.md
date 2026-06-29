# Steven Cabugos Portfolio

A responsive portfolio for Steven Cabugos, a software developer and UI/UX designer. The site presents selected projects, professional experience, certifications, services, location-aware pricing, and ways to start a project or book a meeting.

> **Live demo:** [stevencabugos.me](https://stevencabugos.me/)

## Overview

This project uses the Next.js App Router and a data-driven content structure. Most portfolio content lives in TypeScript files under `constants/`, while reusable UI is organized under `components/`. The home page combines server-rendered location detection with interactive client components for navigation, carousels, pricing, and booking.

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
| Scheduling | Cal.com Embed |
| Images and fonts | `next/image`, `next/font/local` |
| Exchange rates | Frankfurter API with local fallback rates |
| Tooling | npm, ESLint 9, PostCSS |

## Key Features

- Responsive single-page portfolio sections for projects, experience, about, certifications, pricing, and contact.
- Dynamic project detail routes generated from local TypeScript data.
- Desktop and mobile navigation with active-section tracking through `IntersectionObserver`.
- Responsive Swiper carousels for visual work, experience, certifications, and technology logos.
- Location-aware pricing based on deployment headers or browser locale.
- Server-side exchange-rate proxy with six-hour caching and static fallback rates.
- Cal.com booking page with timezone-aware scheduling.
- External project intake through Tally and direct contact through email links.
- Optimized local images and PP Neue Montreal font files.
- Smooth scrolling, hover transitions, and responsive Tailwind breakpoints.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main portfolio and all homepage sections |
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
|   |-- hompage/              # Homepage section components
|   |-- Navbar.tsx            # Responsive navigation and active-section logic
|   |-- Footer.tsx            # Contact section
|   `-- ProjectLinksMenu.tsx  # Accessible links menu on project details
|-- constants/                # Projects, case studies, experience, pricing, and profile data
|-- docs/                     # Developer-oriented project documentation
|-- public/
|   |-- fonts/                # Local PP Neue Montreal font files
|   `-- images/               # Portfolio, project, certification, and icon assets
|-- src/app/
|   |-- api/exchange-rates/   # Server route for currency conversion data
|   |-- book-a-meeting/       # Booking page
|   |-- projects/[title]/     # Dynamic project detail page
|   |-- resources/            # Placeholder resources page
|   |-- globals.css           # Tailwind import and global styles
|   |-- layout.tsx            # Root metadata, fonts, and navigation
|   `-- page.tsx              # Homepage composition and location detection
|-- types/                    # Shared TypeScript types
|-- utils/                    # Currency and country-detection helpers
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
| `npx tsc --noEmit` | Run a standalone TypeScript check |

> `next.config.ts` currently sets `typescript.ignoreBuildErrors` to `true`. Run the standalone TypeScript check before deployment because a successful production build alone does not guarantee a clean type check.

## Updating Portfolio Content

Most content updates do not require editing page components:

| Content | Source file |
| --- | --- |
| Project cards | `constants/projects.ts` |
| Project case studies | `constants/projectDetails.ts` |
| Work experience | `constants/experience.ts` |
| Certifications | `constants/certifications.ts` |
| Social profiles | `constants/socialButton.ts` |
| Pricing services, currencies, and fallbacks | `constants/pricing.ts` |
| Portfolio images | `public/images/` |

When adding a project, keep the project title consistent between `projects.ts` and `projectDetails.ts`; the title is used to build and resolve the dynamic route.

## Build and Deployment

Create and test a production build locally:

```bash
npm run build
npm run start
```

The application requires a Next.js-compatible server runtime because it uses request headers and the `/api/exchange-rates` route. Vercel is the simplest deployment target, but any Node.js host capable of running `next start` can be used.

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
- [LinkedIn](https://www.linkedin.com/in/cabugos-steven/)

Built with Next.js, React, Tailwind CSS, Swiper, Headless UI, Heroicons, Cal.com, and the Frankfurter exchange-rate service.

## License

This project is licensed under the [MIT License](LICENSE).
