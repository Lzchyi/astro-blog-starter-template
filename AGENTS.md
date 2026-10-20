# ShotMark website

Static Astro marketing website deployed by the existing Cloudflare Workers GitHub connection. Preserve the Worker name `astro-blog-starter-template` until its Cloudflare binding is intentionally changed. Canonical domain: `https://shotmark.win`.

- Keep the approved white, minimalist design, system fonts, violet accent, and responsive layouts.
- Keep this a marketing site. No screenshot uploads, accounts, app-like library, tracking or speculative product capabilities.
- Product messaging leads with remembering why a screenshot was saved and the existing iOS Share Sheet.
- Asset sources and fidelity are in ASSETS.md. Do not publish raw personal screenshots. Preserve source assets; Astro optimizes copies at build time.
- Keep released product claims separate from future features and purchase offers. No fixed global pricing.
- Pages: `src/pages/`; shared chrome: `src/layouts/SiteLayout.astro`; styles: `src/styles/global.css`; interactive device gallery: `src/components/DeviceGallery.astro`.
- Keep the Free/Pro matrix in `src/components/PlanComparison.astro`, with explicit platform differences. Verify new purchase options against released listings; mobile and Mac releases can differ. Keep `/updates` and `/updates/` redirects to `/changelog/` in `public/_redirects`.
- Reuse `PhoneMockup.astro` for phone imagery. Its screen coordinates match the approved Apple bezel recorded in ASSETS.md. Social-card source is `scripts/social-card.astro`; its comment explains regeneration.
- Run `npm ci`, `npm run check`, then `npm run preview`. Check desktop and mobile navigation, device tabs with keyboard support, FAQs, images, and download links. Validate Cloudflare 404 responses after deployment.
- Do not run simulators. Do not change native app code, App Store Connect, or redirect the legacy site as part of this website launch; that migration is deferred to the next app build.
