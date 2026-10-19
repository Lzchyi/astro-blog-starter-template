import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist");
async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? files(path.join(directory, entry.name))
          : path.join(directory, entry.name),
      ),
    )
  ).flat();
}
const htmlFiles = (await files(root)).filter((file) => file.endsWith(".html"));
const pages = new Map(
  await Promise.all(
    htmlFiles.map(async (file) => [file, await readFile(file, "utf8")]),
  ),
);
assert.equal(
  htmlFiles.length,
  6,
  "Home, support, privacy, updates, roadmap and 404 must be built.",
);
for (const [file, html] of pages) {
  const label = path.relative(root, file);
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) ?? []).length,
    1,
    `${label}: one main heading`,
  );
  assert(html.includes('id="main-content"'), `${label}: skip-link target`);
  assert(html.includes('<html lang="en">'), `${label}: document language`);
  assert(html.includes('name="description"'), `${label}: search description`);
  assert(
    html.includes('rel="canonical" href="https://shotmark.win/'),
    `${label}: canonical domain`,
  );
  assert(
    !/example\.com|Hello, Astronaut|blog-placeholder|Astro Blog/.test(html),
    `${label}: no starter content`,
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${label}: no duplicate IDs`);
  for (const match of html.matchAll(
    /<(a|img|script|link)\b[^>]*?\b(?:href|src)="([^"]+)"[^>]*>/g,
  )) {
    const [, tag, raw] = match;
    const url = new URL(
      raw.replaceAll("&amp;", "&"),
      `https://shotmark.win/${label.replace(/index\.html$/, "")}`,
    );
    if (url.origin !== "https://shotmark.win") continue;
    let target = path.join(root, decodeURIComponent(url.pathname));
    if (url.pathname.endsWith("/")) target = path.join(target, "index.html");
    else if (!path.extname(target)) target = path.join(target, "index.html");
    assert(
      (await stat(target).catch(() => null))?.isFile(),
      `${label}: broken ${tag} target ${raw}`,
    );
    if (url.hash) {
      const targetHtml = pages.get(target) ?? "";
      assert(
        targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        `${label}: missing anchor ${raw}`,
      );
    }
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert(/\balt(?:="[^"]*"|(?=\s|>))/.test(match[0]), `${label}: image alternative text`);
    assert(
      /\bwidth="\d+"/.test(match[0]) && /\bheight="\d+"/.test(match[0]),
      `${label}: image dimensions prevent layout shifts`,
    );
  }
}
assert(
  pages
    .get(path.join(root, "404.html"))
    ?.includes('name="robots" content="noindex"'),
  "404 must not be indexed.",
);
const homepage = pages.get(path.join(root, "index.html"));
assert(
  homepage.includes("Share Sheet"),
  "Homepage explains the main capture workflow.",
);
assert(
  homepage.includes('type="application/ld+json"'),
  "Homepage includes software metadata.",
);
assert(
  !(await readFile(path.join(root, "sitemap-0.xml"), "utf8")).includes("404"),
  "404 excluded from sitemap.",
);
console.log(
  `PASS: ${htmlFiles.length} pages; local links, anchors, assets, metadata, image dimensions, and 404 indexing.`,
);
