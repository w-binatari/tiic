# NCDMB TIC design system

Derived from the built site (Nov 2026). Tokens live in `src/app/globals.css` (`@theme`).

## World
A government programme site that puts the innovators first: deep NCDMB green fields own whole bands, gold is kept for the single primary action and for small markers, pale mint bands carry reading content, and real event photography runs full-bleed under a green duotone. Square corners throughout; no cards-as-scaffolding, no decorative blobs, no flyer images as content.

## Colour
| Token | Hex | Use |
|---|---|---|
| `forest-deep` | #062818 | Footer, photo band, darkest overlay |
| `forest` | #0A3D24 | Page heads, TIC 2027 band, headings on light |
| `green` | #006837 | NCDMB brand green: links, secondary buttons, duotone |
| `green-bright` | #1F8A4C | Hero duotone multiply |
| `gold` | #F0B429 | Primary button, timeline markers, progress bar, focus ring, selection |
| `mint` | #EAF3EC | Reading bands, expanded finalist panel |
| `mint-line` | #CFE2D4 | Hairline rules |
| `ink` / `ink-soft` / `ink-mute` | #10231A / #3D5247 / #5B6E63 | Body text tiers (all ≥4.5:1 on white) |

One gold action per viewport. Gold text appears only on forest-deep.

## Type
- Display: **Mulish** 700/800/900, tight tracking (-0.025em to -0.04em), balanced wrapping. Hero up to 6rem.
- Body: **Lato** 400/700, 17px, line-height 1.65, measure ≤ 68ch.
- Nav labels: Mulish 800, 0.78rem, uppercase, 0.14em tracking.
- Both self-hosted through `next/font`.

## Components
- `btn-gold` (primary, one per view), `btn-green` (form submit), `link-arrow` (secondary actions, underlined).
- Ruled lists: a 2px forest top rule, then 1px mint-line separators. Used for the timeline, thematic areas, offers, contacts and the finalists index.
- Finalists index (signature): a sector filter, then a ruled list; each row expands in place into a mint panel with a portrait and the full write-up.
- People grid: 4:5 portraits, name in Mulish 900, role in muted text.
- Fields: white with a 2px green bottom border; a gold focus halo; errors in #B42318 under the field.

## Motion
- A gold scroll-progress bar under the sticky header.
- Section photos unclip upward once on first view (`Reveal`), only when they start below the fold and `prefers-reduced-motion` allows it.
- Nothing else animates.

## Images
- Every raster goes through `next/image` (AVIF/WebP, sized, blur placeholder). Only the hero is eager; everything else lazy-loads.
- Source photos are ≤1080px wide, so full-bleed use must sit under the duotone. Ask the client for higher-resolution originals before adding new full-bleed images.
- Provenance: all photography and logos are the client's own (from the TIC production site); `tic-logo-white.png` is a recolour of the TIC logo's wordmark for dark grounds.
