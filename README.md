# Shuffle & Repeat

Complete static website export, ready for GitHub Pages. Includes the approved infinity-arrow intro, color cycle, zoom reveal, photo slideshow, transparent header logo, dark styling, and all current pages.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `shuffle-repeat`.
2. Upload the **contents of this folder** to the repository's root on the `main` branch. `index.html` must be at the root, alongside `style.css`, `site.js`, `intro-motion.js`, the other pages, and `assets/`. Upload the extracted files, not the ZIP itself.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**, and save.
5. When publishing completes, GitHub displays the site address on that page.

No npm install, build command, server, or framework is required. The included `.nojekyll` file keeps this a plain static site.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## URL compatibility

Links and assets use relative paths, so this works at a project address such as `https://YOUR-USERNAME.github.io/shuffle-repeat/`, a user-site address, or a custom domain. Internal navigation skips the intro, including Contact links; a fresh home-page visit or home-page refresh plays it. Reduced-motion preferences bypass the intro and automatic slideshow.

## Files to edit

- `index.html`: Home, slideshow image list, Contact section, intro SVG.
- `about.html`: About and partnerships section.
- `calendar.html`: Calendar and upcoming dates.
- `events.html`: Event images and original post links.
- `sponsorship.html`: Sponsorship copy and audience-information section.
- `style.css`: Colors, typography, layout, shadows, and responsive rules.
- `site.js`: Menu, slideshow, navigation behavior, and intro timeline.
- `intro-motion.js`: Infinity channel geometry, arrow movement, and color cycle.
- `assets/`: Local logo and photography assets.

The intro's arrow motion lasts 1.5 seconds, followed by a 1-second zoom. The slideshow advances every 6.5 seconds and pauses while the menu is open or the tab is hidden. Header-logo lettering has a transparent background and a drop shadow. Google Fonts loads Barlow Condensed and DM Sans; local fallback fonts are included in the CSS font stacks.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Current content

Calendar dates are still awaiting confirmation. Contact currently opens Instagram; there is no submission form or backend. Sponsorship demographics are not populated with unverified figures. This export preserves the current content rather than inventing those details.

## Assets

The logo and photographs were supplied for this project. Preserve applicable ownership and permissions when publishing or redistributing them. No new asset license is assigned by this export.
