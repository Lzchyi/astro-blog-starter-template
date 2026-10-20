# Website asset provenance

Refreshed 20 October 2026. Original owner-supplied files are preserved. No raw screenshot containing personal conversations, account pages, or sales information is published.

| Website asset | Source | Fidelity and use |
| --- | --- | --- |
| `src/assets/logo.png`, `public/app-icon.png` | Owner-supplied `shotmarklogo.png` in `/Users/lzchyi/Desktop/App Images/ShotMake App Store` | Unchanged ShotMark identity artwork. |
| `src/assets/iphone-library.png` | Supplied `ShotMark-V2-App-Store-Screenshots 2/source/screens/iphone-03-library-list.png` | Existing fictional travel library mockup. Hero and device gallery. |
| `src/assets/iphone-capture.png` | Same supplied pack, `iphone-01-capture.png` | Existing fictional Kyoto Capture-tab mockup. This is the main app Capture screen, not the Share Sheet. |
| `src/assets/iphone-collections.png` | Same supplied pack, `iphone-04-collection.png` | Existing fictional Places to Visit Collection mockup. |
| `src/assets/iphone-projects.png` | `output/shotmark-demo-content-2026-09-17/edited/iphone-06-project-grid.png` | Existing fictional Japan Trip Projects mockup, shown as an iPhone/iPad Pro feature. |
| `src/assets/ipad-library.png` | Supplied screenshot pack, `ipad-02-library-list.png` | Existing fictional travel library in dark appearance. |
| `src/assets/iphone-frame.png` | `output/shotmark-asc-v2-display-iphone-frame-v2/source/artwork/iphone-16-pro-max-black-titanium.png` | Previously approved official Apple iPhone 16 Pro Max Black Titanium bezel, unchanged. Not labelled as iPhone 17 or 18. Reused in `PhoneMockup.astro`. |
| `public/social-card.jpg` | HTML/CSS composition rendered in the browser from `scripts/social-card.astro` | 1200 × 630 JPEG using the existing logo, phone library mockup, and approved Apple frame. |
| `src/assets/mac-native-demo.png` | Actual Mac window captured 20 October 2026, with content edited using built-in ImageGen | Native Mac sidebar, toolbar, and grid layout with fictional Kyoto content aligned to the iPhone/iPad previews. This is an edited product mockup, not a pixel-identical release screenshot. |

The phone and iPad screen layers were previously edited with ImageGen to replace personal data. Their original provenance records differences in spacing, text wrapping, framing, and badges. They remain illustrative product previews with sample content, rather than pixel-identical captures of the latest release.

The Apple bezel has a 1470 × 3000 canvas, with screen rectangle x75, y66, width1320, height2868 and corner radius190. Its source and prior approval are recorded in `output/shotmark-asc-v2-display-iphone-frame-v2/source/device-frame.json`. Official source: https://devimages-cdn.apple.com/design/resources/download/Bezel-iPhone-16.dmg; resource page: https://developer.apple.com/design/resources/. Newer device artwork was investigated but not used because it would require another license acceptance.

The older `ShareSheet.png` promotional poster has been removed from the website. No current, clean native Share Sheet capture was available in the supplied assets. The replacement uses the newer Capture-tab mockup with a visible, accurate caption; the copy still explains the existing Share Sheet workflow.

## Mac preview

The owner opened the Mac app and explicitly requested a screenshot-based mockup aligned with the iOS imagery. The window was captured using CUA. A temporary Kyoto search hid all existing screenshot thumbnails before the reference used for editing was saved; the search was then cleared. The private unfiltered capture was not sent to ImageGen and is not in the website checkout.

The edit target was `output/shotmark-website-qa/mac-reference-safe.png`, with the existing fictional `output/shotmark-demo-content-2026-09-17/edited/iphone-02-library-grid.png` as the content reference. Built-in ImageGen preserved the native window structure while populating a six-card Kyoto library. Two follow-up edits corrected native-style metadata and sample sidebar counts. Final source: `/Users/lzchyi/.codex/generated_images/01a153af-6e15-7931-bfbe-425ea6217403/exec-13144bbb-1924-4235-8a75-e2af86db6102.png`, copied unchanged to `src/assets/mac-native-demo.png`.

The prompt requested the actual Mac sidebar and toolbar, six fictional travel cards (Kyoto Weekend, Coffee Stops, Stay Ideas, Quiet Courtyard, River Walk, Bamboo Trail), no promotional headline or hardware, no private information, and no additional controls. Detailed prompt text is retained in `output/shotmark-website-qa/mac-image-prompts.md`. The old generated App Store poster has been removed.
