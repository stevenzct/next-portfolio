# Project Structure

This guide explains how the portfolio is assembled, where content lives, and how its main interactions work.

## Application Model

The project uses the Next.js App Router. Server components handle the initial page composition and request-derived country detection. Interactive features are isolated in client components.

```text
Request
  -> src/app/layout.tsx
     -> global fonts, metadata, and Navbar
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

### Project details

`src/app/projects/[title]/page.tsx`:

- Decodes the route segment and performs a case-insensitive title lookup in `constants/projectDetails.ts`.
- Renders project metadata, assignment, objectives, deliverables, and case-study images.
- Supports either one direct project link or an accessible menu of related links.
- Builds previous navigation from array order and next navigation from the current project's data.
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
| `Navbar.tsx` | Desktop/mobile navigation, scroll appearance, dropdowns, and active-section tracking |
| `Footer.tsx` | Contact copy and email action |
| `Button.tsx` | Shared call-to-action button |
| `ProjectLinksMenu.tsx` | Click and keyboard-controlled project links menu |

The navigation's `useActiveSection` hook is co-located in `Navbar.tsx`; there is no separate hooks directory at present.

### Homepage sections

| Component | Responsibility |
| --- | --- |
| `Hero.tsx` | Primary introduction and project/pricing calls to action |
| `SwiperUi.tsx` | Continuous visual portfolio strip |
| `Projects.tsx` | Data-driven grid linking to dynamic case-study routes |
| `Experience.tsx` | Responsive work-history carousel |
| `About.tsx` | Biography, social links, portrait, and Spotify playlist embed |
| `TechSwiper.tsx` | Continuous technology-logo carousel |
| `Certifications.tsx` | Responsive credentials carousel with external certificate links |
| `Pricing.tsx` | Location-aware converted price, included services, intake, and booking links |

## Data and Content

The portfolio does not use a CMS or database. Content is stored in typed local modules:

| File | Content |
| --- | --- |
| `constants/projects.ts` | Homepage project cards |
| `constants/projectDetails.ts` | Full project case studies and navigation metadata |
| `constants/experience.ts` | Roles, companies, review links, and work images |
| `constants/certifications.ts` | Credentials and verification links |
| `constants/socialButton.ts` | Social profile links and icons |
| `constants/pricing.ts` | Base price, supported currencies, country mapping, services, and fallback rates |
| `types/pricing.ts` | Shared pricing and currency types |

Images are served from `public/images/`. Local fonts are served from `public/fonts/`.

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

- Homepage navigation uses hash links such as `/#projects`.
- Smooth scrolling is enabled globally in `src/app/globals.css`.
- `IntersectionObserver` marks the section nearest the viewport center as active.
- Route-aware fallbacks keep Projects or Pricing active on related subpages.
- Headless UI provides the mobile navigation dialog.
- Next.js `Link` handles internal navigation.

## Contact and External Services

There is no custom contact form backend.

- **Send a message:** opens the visitor's email client through a `mailto:` link.
- **Start a project:** opens the external Tally intake form.
- **Book a meeting:** uses the Cal.com embed.
- **About media:** embeds a Spotify playlist.
- **Exchange rates:** uses Frankfurter through a server route.

## Styling and Responsive Design

- Tailwind CSS 4 utilities define most layouts, spacing, colors, and breakpoints.
- CSS Modules provide the hero and footer background images.
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
6. Confirm the generated `/projects/<encoded-title>` route and previous/next navigation.

If a detail entry is intentionally unavailable, the project card can still exist; its route will show the current placeholder message.
