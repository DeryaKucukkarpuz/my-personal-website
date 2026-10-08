# Derya Kucukkarpuz — Academic Profile

A one-page personal website built with Astro for academic and teaching opportunities.

## Development

Run these commands from this directory:

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |

## Publishing on GitHub Pages

The `Deploy Astro site to GitHub Pages` workflow builds the site and deploys it when changes are pushed to `main` (or when run manually from the Actions tab). The production site URL is:

<https://deryakucukkarpuz.github.io/my-personal-website/>

In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**. The workflow uses the repository subpath as Astro's production base and the root path for local development.

## Updating profile content

Edit `src/pages/index.astro` to add the short bio, academic history, teaching details, and preferred contact information. Replace the instructional placeholder copy with confirmed personal details; the current page intentionally does not invent them.

The high-contrast control is in `src/components/SiteHeader.astro`. Shared profile section markup lives in `src/components/ProfileSection.astro`, and global page metadata is in `src/layouts/Layout.astro`.
