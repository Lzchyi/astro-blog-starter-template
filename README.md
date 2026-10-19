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

Canonical: https://shotmark.win/. The new site includes home, support, privacy, updates, and roadmap. See ASSETS.md for provenance and screenshot fidelity. Product previews use illustrative sample content; replace with authentic physical-device demo captures during a future fidelity refresh.

## Scope and sources

- Current website and privacy: https://www.zhenchyi.com/shotmark/ and https://www.zhenchyi.com/shotmark/privacy/
- Support and roadmap: https://www.zhenchyi.com/support/ and https://www.zhenchyi.com/shotmark/roadmap/
- App Store: https://apps.apple.com/app/id6761759060
- Existing English 2.0 copy and screenshot assets supplied by the owner.
- Prior ShotMark marketing work: emphasize the Share Sheet and remember why you saved it.

The native apps, App Store Connect metadata, and legacy-site forwarding are deferred to the next app build. No app data moves as part of this website launch. No analytics, external fonts, or tracking scripts are added.
