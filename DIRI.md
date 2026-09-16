# Diri Innovation Challenge 2026 (one-pager)

**This branch is NOT the NCDMB TIC production site.**

- Live TIC site: https://www.ncdmb-tic.org/ (deploys from `v2` → `gh-pages` only)
- This branch: campaign landing page for **Diri Innovation Challenge 2026**
- Starting point: layout/UX patterns from the TIC static site the client liked
- Branding/photography: Bayelsa State Ministry of Youth Development ([moyd.by.gov.ng](https://moyd.by.gov.ng/))
- Implementer mark: EICL

## Edit content

All copy, dates, stats, FAQ, and CTAs live in `js/content.js`.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Stack

Static HTML/CSS/JS (same delivery model as TIC). One scrollable page with anchor nav.
