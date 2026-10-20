# ShotMark website

Minimalist, responsive marketing site for ShotMark on iPhone, iPad and Mac. Built with the existing Astro starter and deployed as static assets through the owner's existing Cloudflare Worker and GitHub connection.

## Development

Node.js 22 or later.

```sh
npm ci
npm run dev
```

## Verification and local preview

```sh
npm run check
npm run preview -- --port 4321
```

The check builds all pages and optimized images, type-checks TypeScript, validates generated local links/anchors/assets/metadata, and runs a Wrangler deployment dry run. Browser QA covers desktop and mobile layouts, mobile navigation, keyboard device tabs, FAQs, and the actual Cloudflare 404 response.

## Publishing

The existing Cloudflare Workers Builds connection watches `main`, runs `npm run build`, then `npm run deploy`. Preserve the existing Worker name in `wrangler.json` unless the dashboard binding is changed too. `dist/` contains static HTML and assets with a custom `404.html`. Custom domains are attached in the Cloudflare dashboard.

Canonical: https://shotmark.win/. Pages include home, support, privacy, changelog, roadmap, and about. The old `/updates/` address redirects to `/changelog/`. See ASSETS.md for screenshot provenance and fidelity. Product previews use illustrative sample content. The Mac preview is edited from a privacy-safe capture of the owner's actual app, with matching fictional Kyoto content.

## Scope and sources

- Current website and privacy: https://www.zhenchyi.com/shotmark/ and https://www.zhenchyi.com/shotmark/privacy/
- Support and roadmap: https://www.zhenchyi.com/support/ and https://www.zhenchyi.com/shotmark/roadmap/
- App Store: https://apps.apple.com/app/id6761759060
- Public App Store history through mobile 2.1, checked 20 October 2026. Apple's public lookup API confirms the 2.1 release timestamp as `2026-10-19T16:06:09Z`.
- Existing screenshot assets supplied by the owner. Current mobile claims and Mac claims are verified separately; never infer shipping behavior from pending native changes.
- Prior ShotMark marketing work: emphasize the Share Sheet and remember why you saved it.

The native apps, App Store Connect metadata, and legacy-site forwarding are deferred to the next app build. No app data moves as part of this website launch. No analytics, external fonts, or tracking scripts are added.
