# Project Structure

This guide explains how the portfolio is assembled, where content lives, and how its main interactions work.

## Application Model

The project uses the Next.js App Router. Server components handle the initial page composition and request-derived country detection. Interactive features are isolated in client components.

```text
Request
  -> src/app/layout.tsx
     -> global fonts, metadata, and Navbar
     -> src/app/template.tsx
        -> global GSAP route entrance
     -> route page
        -> server-rendered page structure
        -> client components for interaction
        -> constants and public assets for content
```

## App Router Pages

### Root layout

`src/app/layout.tsx`:

- Loads PP Neue Montreal from `public/fonts/` through `next/font/local`.
- Defines the default title, description, and favicon metadata.
- Mounts the global navigation above every route.
- Imports the Tailwind entry point and global styles from `globals.css`.

`src/app/template.tsx` remounts for route navigation and applies the shared GSAP page entrance. It animates position, scale, and clipping without fading the complete page, so the transparent Navbar continues to show the underlying hero on reload. Visitors who prefer reduced motion receive the unanimated page.

Root metadata in `src/app/layout.tsx` uses `constants/site.ts` for the canonical site identity, title template, description, authorship, crawler directives, and default Open Graph/Twitter preview. Static routes use `utils/metadata.ts` for consistent canonical and social metadata. `src/app/robots.ts` and `src/app/sitemap.ts` expose crawl rules and all indexable canonical routes.

### Homepage

`src/app/page.tsx` is an async server component. It reads country headers, chooses an initial currency, and renders the sections in this order:

1. Hero
2. Visual work carousel
3. Projects
4. Experience
5. About
6. Technology carousel
7. Certifications
8. Pricing
9. Contact footer

The section IDs are also used by the navigation's active-section observer.

The hero keeps its layout and copy in the server-rendered `components/hompage/Hero.tsx` component. Its artwork is isolated in the client-side `HeroCard.tsx` component, which uses GSAP for the idle float, pointer-position 3D tilt, shadow transition, and reduced-motion fallback. The source image is `public/images/hero/concept-to-conversion.png`.

### Project catalog

`src/app/projects/page.tsx` renders the complete catalog from `constants/projects.ts` through the shared `components/projects/ProjectGrid.tsx` component. The homepage uses the same grid component with the first six catalog entries, so project cards have one source of data and one reusable presentation. Each card displays its year as a compact right-aligned metadata pill instead of combining it with the project title.

### Project details

`src/app/projects/[title]/page.tsx`:

- Decodes the route segment and performs a case-insensitive title lookup in `constants/projectDetails.ts`.
- Renders project metadata, assignment, objectives, deliverables, and case-study images.
- Supports either one direct project link or an accessible menu of related links.
- Builds previous navigation from array order and next navigation from the current project's data.
- Priority-loads the primary project mockup so it is available immediately instead of waiting for a viewport observer.
- Uses `components/projects/ProjectDetailMotion.tsx` for the intro sequence, viewport-based case-study reveals, and the previous/next project banner transition.
- Generates a unique canonical URL, title, description, social image, and `CreativeWork` JSON-LD object for every case study.
- Pre-renders known project-detail paths through `generateStaticParams` and marks unknown placeholder details as `noindex`.
- Displays a safe placeholder when no matching case study exists.

Project card and detail titles should stay synchronized because titles form the route URLs.

### Booking

`src/app/book-a-meeting/page.tsx` renders `components/booking/CalBooker.tsx`. The client component initializes the Cal.com embed and displays a 30-minute booking calendar.

### Exchange-rate API

`src/app/api/exchange-rates/route.ts`:

1. Requests PHP-based rates from the Frankfurter API.
2. Filters the response to supported currencies.
3. Caches the request for six hours using Next.js revalidation.
4. Returns local fallback rates if the external request fails.

### Resources

`src/app/resources/page.tsx` currently contains placeholder content and is not a completed public resource library.

## Components

### Global components

| Component | Responsibility |
| --- | --- |
| `Navbar.tsx` | Desktop navigation, responsive full-height mobile sheet, scroll appearance, dropdowns, homepage section tracking, and route-aware active states |
| `Footer.tsx` | Contact copy and email action |
| `Button.tsx` | Shared call-to-action button |
| `JsonLd.tsx` | Escaped JSON-LD output for visible profile and project data |
| `ProjectLinksMenu.tsx` | Click and keyboard-controlled project links menu |
| `projects/ProjectGrid.tsx` | Reusable project-card grid for the homepage and complete catalog |
| `projects/ProjectDetailMotion.tsx` | GSAP lifecycle for project intro, case-study, and next-project reveals |

The navigation's active-section observer remains co-located in `Navbar.tsx`. Mobile-menu GSAP orchestration is isolated in `hooks/useMobileMenuAnimation.ts`, which owns its element refs, entrance context, exit timeline, reduced-motion fallback, and cleanup.

### Homepage sections

| Component | Responsibility |
| --- | --- |
| `Hero.tsx` | Responsive hero layout, introduction, artwork placement, and project/pricing calls to action |
| `HeroCard.tsx` | Client-side GSAP float and pointer-responsive 3D interaction for the hero artwork |
| `SwiperUi.tsx` | Continuous visual portfolio strip |
| `Projects.tsx` | Six featured projects and the call to action for the complete catalog |
| `Experience.tsx` | Responsive work-history carousel |
| `About.tsx` | Responsive biography, portrait, project call to action, and social links |
| `TechSwiper.tsx` | Continuous technology-logo carousel |
| `Certifications.tsx` | Responsive credentials carousel with external certificate links |
| `Pricing.tsx` | Location-aware converted price, included services, intake, and booking links |

## Data and Content

The portfolio does not use a CMS or database. Content is stored in typed local modules:

| File | Content |
| --- | --- |
| `constants/projects.ts` | Complete project-card catalog and display order |
| `constants/projectDetails.ts` | Full project case studies and navigation metadata |
| `constants/experience.ts` | Roles, companies, LinkedIn links, and work images |
| `constants/certifications.ts` | Credentials and verification links |
| `constants/socialButton.ts` | Social profile links and icons |
| `constants/pricing.ts` | Base price, supported currencies, country mapping, services, and fallback rates |
| `types/pricing.ts` | Shared pricing and currency types |

Images are served from `public/images/`. Hero artwork is grouped under `public/images/hero/`; local fonts are served from `public/fonts/`.

## Search and Social Metadata

- `constants/site.ts` is the source of truth for the production URL, creator identity, default descriptions, social profiles, and preview imagery.
- `utils/metadata.ts` creates consistent static and dynamic page metadata without duplicating title, canonical, Open Graph, Twitter, or `noindex` logic.
- The homepage emits `ProfilePage` and `Person` JSON-LD that matches the visible portfolio content.
- Project-detail routes emit page-specific metadata and `CreativeWork` JSON-LD using `constants/projectDetails.ts`.
- `/resources` remains accessible but is excluded from indexing while it contains placeholder content.
- `src/app/sitemap.ts` includes only canonical pages intended for search results; `/api/*` is excluded through `src/app/robots.ts`.
- The homepage keeps one primary `<h1>`; section titles use `<h2>` and visual eyebrow labels use paragraphs.

## Pricing Data Flow

```text
Request country headers
  -> choose initial currency on the server
  -> render Pricing with static fallback rates
  -> client requests /api/exchange-rates
  -> API returns live or fallback rates
  -> converted monthly price is formatted for the selected currency
```

Country detection checks Vercel, Cloudflare, and generic country headers. If none are available, the browser locale is used; PHP is the final fallback.

## Navigation and Routing

- The Projects navigation item links to `/projects`; the remaining homepage sections use hash links such as `/#work`.
- Smooth scrolling is enabled globally in `src/app/globals.css`.
- `IntersectionObserver` marks the section nearest the viewport center as active on the homepage.
- Pathname state takes priority on standalone routes, keeping Projects active across `/projects` and project detail pages.
- Headless UI provides the mobile navigation dialog. On narrow phones it opens as a full-width `30rem` panel; from the `sm` breakpoint it becomes a capped right-side drawer, and at `md` it uses the full viewport height. The dialog has a dimmed backdrop and its own overflow scrolling.
- `hooks/useMobileMenuAnimation.ts` adds a GSAP panel reveal, staggered navigation items, backdrop fade, and an animated close before Headless UI unmounts the dialog.
- Mobile navigation links use large touch targets, explicit active states, and an expandable About group.
- Next.js `Link` handles internal navigation.

## Contact and External Services

There is no custom contact form backend.

- **Send a message:** opens the visitor's email client through a `mailto:` link.
- **Start a project:** opens the external Tally intake form.
- **Book a meeting:** uses the Cal.com embed.
- **Exchange rates:** uses Frankfurter through a server route.

## Styling and Responsive Design

- Tailwind CSS 4 utilities define most layouts, spacing, colors, and breakpoints.
- CSS Modules provide the hero and footer background images.
- GSAP owns the hero card interaction, global route entrances, mobile-menu motion, and project-detail reveals.
- `utils/motion.ts` is the shared source for reduced-motion detection used by GSAP client components.
- Motion contexts, timelines, and observers are cleaned up when their owning component unmounts.
- `globals.css` imports Tailwind, defines font variables, enables smooth scrolling, and normalizes Swiper timing.
- The main content uses responsive side gutters and a `1200px` maximum width.
- Mobile-first layouts expand at Tailwind's `md` and `lg` breakpoints.
- Swiper changes visible card counts at `768px` and `1024px` where appropriate.

## Adding a Project

1. Add the card data and image path to `constants/projects.ts`.
2. Add a matching case study to `constants/projectDetails.ts`.
3. Use exactly the same project title in both files.
4. Place card artwork under `public/images/projects/`.
5. Place case-study images under `public/images/projectDetails/<ProjectName>/`.
6. Confirm the card appears on `/projects`; entries within the first six positions also appear on the homepage.
7. Confirm the generated `/projects/<encoded-title>` route and previous/next navigation.

If a detail entry is intentionally unavailable, the project card can still exist; its route will show the current placeholder message.
