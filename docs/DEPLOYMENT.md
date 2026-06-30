# Deployment Guide

The portfolio needs a Next.js server runtime. It reads request headers on the homepage and exposes `/api/exchange-rates`, so a static-file-only host is not sufficient without changing those features.

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

> The current `next.config.ts` allows builds to continue when TypeScript errors exist. Treat `npx tsc --noEmit` as a separate required check.

## Environment Variables

No environment variables are required by the current codebase.

The Cal.com account and event slug, Tally form URL, Spotify embed URL, social links, and Frankfurter endpoint are public values stored in source code. If any integration is later changed to use a private API key, keep it server-side and configure it through the hosting provider rather than committing it.

## Deploying to Vercel

1. Import `https://github.com/stevenzct/next-portfolio` into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Use the repository root as the root directory.
4. Keep the default install and build commands (`npm install`/`npm run build`).
5. Deploy. No environment variables are needed for the current implementation.
6. Add the production URL to the README live-demo section.

Vercel supplies `x-vercel-ip-country`, which the pricing feature can use for the initial currency.

## Deploying to a Node.js Host

The host must support a long-running Node.js process.

```bash
npm ci
npm run build
npm run start
```

The server listens through Next.js and normally uses port `3000`. Configure the platform's `PORT` mechanism or reverse proxy as required by the provider.

For country-aware pricing, forward one of these headers when available:

- `x-vercel-ip-country`
- `cf-ipcountry`
- `x-country-code`

Without a country header, the client falls back to browser locale detection and then PHP.

## External Service Requirements

The deployed site must be able to access or embed:

| Service | Use |
| --- | --- |
| `api.frankfurter.dev` | Live exchange rates |
| `cal.com` | Meeting calendar |
| `tally.so` | Project intake form |
| `open.spotify.com` | Playlist embed |

If the exchange-rate request fails, the API route returns the static rates from `constants/pricing.ts`. Booking, intake, and Spotify embeds require the visitor's browser or network policy to allow those services.

## Post-deployment Checks

- Confirm the homepage and all section navigation links load correctly.
- Confirm the hero concept card loads from `/images/hero/concept-to-conversion.png`, floats smoothly, tilts on pointer movement, and remains static when reduced motion is enabled.
- Confirm the Projects navigation opens `/projects`, remains active there, and the page displays the complete catalog.
- Confirm project years appear as compact right-aligned pills without changing the existing title and description sizing.
- Open several project cards and test previous/next project navigation.
- Verify `/api/exchange-rates` returns JSON.
- Confirm pricing uses an appropriate currency or the PHP fallback.
- Test the Tally intake link and Cal.com booking page.
- Test the email, social, certificate, and project resource links.
- Check desktop, tablet, and mobile navigation. On mobile, open the full-height sheet, expand About, verify active states, scroll on a short viewport, and test the email action.
- Add the final live URL and current screenshots to `README.md`.

## Static Export Note

A pure static export is not supported by the current architecture because the homepage uses request headers and pricing uses a server route. Static hosting would require replacing those server features with browser-only or build-time alternatives.
