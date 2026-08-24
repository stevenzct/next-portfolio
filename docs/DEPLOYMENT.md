# Deployment Guide

The portfolio needs a Next.js server runtime because it exposes `/api/exchange-rates`; a static-file-only host is not sufficient without replacing that route.

## Pre-deployment Checklist

1. Install exact locked dependencies:

   ```bash
   npm ci
   ```

2. Run the standalone TypeScript check:

   ```bash
   npx tsc --noEmit
   ```

3. Create a production build:

   ```bash
   npm run build
   ```

4. Test the production server:

   ```bash
   npm run start
   ```

5. While the production server is running, verify its rendered SEO output:

   ```bash
   npm run verify:seo -- http://127.0.0.1:3000
   ```

> The current `next.config.ts` allows builds to continue when TypeScript errors exist. Treat `npx tsc --noEmit` as a separate required check.

## Environment Variables

No environment variables are required by the current codebase.

The Cal.com account and event slug, Tally form URL, social links, and Frankfurter endpoint are public values stored in source code. If any integration is later changed to use a private API key, keep it server-side and configure it through the hosting provider rather than committing it.

## Deploying to Vercel

1. Import `https://github.com/stevenzct/next-portfolio` into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Use the repository root as the root directory.
4. Keep the default install and build commands (`npm install`/`npm run build`).
5. Deploy. No environment variables are needed for the current implementation.
6. Keep `stevencabugos.me` as the primary production domain and confirm `www.stevencabugos.me` permanently redirects to the apex domain. `next.config.ts` provides the application-level 308 redirect.

## Deploying to a Node.js Host

The host must support a long-running Node.js process.

```bash
npm ci
npm run build
npm run start
```

The server listens through Next.js and normally uses port `3000`. Configure the platform's `PORT` mechanism or reverse proxy as required by the provider.

## External Service Requirements

The deployed site must be able to access or embed:

| Service | Use |
| --- | --- |
| `api.frankfurter.dev` | Live exchange rates |
| `cal.com` | Meeting calendar |
| `tally.so` | Project intake form |

If the exchange-rate request fails, the API route returns the static rates from `constants/pricing.ts`. Booking and intake embeds require the visitor's browser or network policy to allow those services.

## Post-deployment Checks

- Confirm the homepage and all section navigation links load correctly.
- Confirm the hero project gallery renders as two animated lanes on desktop, becomes a touch-enabled horizontal swiper on smaller screens, and remains static when reduced motion is enabled.
- Navigate between standalone routes and confirm the global GSAP entrance runs without hiding the page, flashing a white background behind the Navbar, or introducing horizontal scrolling.
- Open `/robots.txt` and confirm it references the production `/sitemap.xml`; verify the sitemap contains `/`, `/about`, `/projects`, `/book-a-meeting`, and every valid project-detail URL.
- Inspect the homepage, About, Projects, booking, and several project-detail pages for unique titles, descriptions, canonical URLs, and Open Graph/Twitter tags.
- Validate the homepage `WebSite`, About `ProfilePage` and `Person`, and project `CreativeWork` JSON-LD with an appropriate structured-data testing tool.
- Confirm `/images/about/steve-profile.png` is publicly reachable and the About portrait has descriptive alternative text.
- Confirm `https://www.stevencabugos.me/<path>` returns a permanent redirect to the matching apex URL.
- Confirm `/resources` outputs `noindex` while it remains placeholder content.
- Confirm the Projects navigation scrolls to the homepage project section and that **View All Projects** opens the complete `/projects` catalog.
- Confirm project years appear as compact right-aligned pills without changing the existing title and description sizing.
- Open several project cards and confirm the primary project hero loads immediately, case-study sections reveal as they enter view, and there is no horizontal overflow.
- Scroll to the previous/next project banner, confirm its reveal runs once, and test both navigation controls.
- Verify `/api/exchange-rates` returns JSON.
- Test the Tally intake link and Cal.com booking page.
- Test the email, social, certificate, and project resource links.
- Check desktop, tablet, and mobile navigation. On mobile, verify the GSAP open/close sequence, expand About, verify active states, scroll on a short viewport, and test the email action.
- Enable the operating system or browser reduced-motion preference and confirm route, menu, hero-card, and project-detail motion is disabled without hiding content.
- Add the final live URL and current screenshots to `README.md`.

## Google Search Console

1. Add or select the **Domain** property `stevencabugos.me`. Verify it with Google's DNS TXT record and leave that record in DNS. Use a URL-prefix property for `https://stevencabugos.me/` only when DNS access is unavailable. See [Add a property](https://support.google.com/webmasters/answer/34592?hl=en) and [Verify ownership](https://support.google.com/webmasters/answer/9008080?hl=en).
2. In **Sitemaps**, submit `https://stevencabugos.me/sitemap.xml`. Confirm **Status: Success** and verify that the deployed sitemap contains `/about`. See the [Sitemaps report guide](https://support.google.com/webmasters/answer/7451001?hl=en).
3. Use **URL Inspection** for `https://stevencabugos.me/` and `https://stevencabugos.me/about`. Run **Test live URL**, confirm crawling, fetching, and indexing are allowed, then select **Request indexing**. See the [URL Inspection guide](https://support.google.com/webmasters/answer/9012289?hl=en).
4. After Google recrawls the pages, inspect both URLs again. Confirm the user-declared and Google-selected canonicals match the apex homepage and exact `/about` URL, and that the last crawl occurred after deployment.
5. Test `/about` in the [Rich Results Test](https://search.google.com/test/rich-results) and monitor **Enhancements > Profile pages** after indexing. `WebSite` site-name markup does not appear in that test; validate its syntax with the validator linked from Google's [site-name documentation](https://developers.google.com/search/docs/appearance/site-names) and confirm the homepage is renderable through URL Inspection.

Valid structured data makes a page eligible for supported search features, but it does not guarantee indexing, a rich result, a chosen site name, or a knowledge panel.

## Static Export Note

A pure static export is not supported by the current architecture because exchange rates use a server route. Static hosting would require replacing that route with a browser-only or build-time alternative.
