# Diri Innovation Challenge 2026 (one-pager)

**This branch is NOT the NCDMB TIC production site.**

- Live TIC site: https://www.ncdmb-tic.org/ (deploys from `v2` → `gh-pages` only)
- This branch: campaign landing page for **Diri Innovation Challenge 2026**
- Starting point: layout/UX patterns from the TIC static site the client liked
- Branding/photography: Bayelsa State Ministry of Youth Development ([moyd.by.gov.ng](https://moyd.by.gov.ng/))
- Implementer mark: EICL

## Edit content

All copy, dates, stats, FAQ, and CTAs live in `js/content.js`.

## Deploy

### Vercel (preview)
Anonymous previews expire after ~1 hour unless claimed. After expiry, redeploy from this branch:

```bash
rm -rf .vercel
npx vercel deploy --temporary --yes
```

Claim the deployment in Vercel to keep a permanent URL.

### GitHub Pages (recommended for a stable link)
Pushes to `cursor/diri-innovation-challenge-onepager-4a66` publish static files to the **`gh-pages-diri`** branch (workflow: `.github/workflows/deploy-diri-onepager.yml`).

In the repo: **Settings → Pages → Build and deployment → Deploy from branch → `gh-pages-diri` / root**, then save. The site will be at:

`https://w-binatari.github.io/tiic/`

(This does not affect TIC production on `v2` → `gh-pages` / ncdmb-tic.org.)

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Stack

Static HTML/CSS/JS (same delivery model as TIC). One scrollable page with anchor nav.
