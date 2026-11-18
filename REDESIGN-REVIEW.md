# Mayo Racek website redesign — review branch

This is Mayo Racek's personal portfolio, hosted at `mayoracek.com`. The design uses midnight navy, cyan and violet and a colour-treated portrait based on the approved mockup. The original personal photo should replace the AI colour treatment when a high-resolution original becomes available.

## Included

- Three working service pages for measurement architecture, cloud data products and applied AI systems.
- Three placeholder case-study pages and three clearly marked draft blog article outlines. They are not portrayed as completed work.
- Updated About and Contact pages, SEO and accessible mobile navigation.
- CSS-only visual system with reduced-motion support.

## Deployment safety

- Branch only: nothing deploys until this PR is merged to `main`. Existing `.github/workflows/deploy.yml` is unchanged.
- All changes should pass `npm install` and `npm run build` on the pull request before merging.
- Placeholder detail pages are `noindex` until replaced with verified content.
- The three content arrays in `src/lib/site.mjs` are the main editing location for future articles and projects.

## Validation performed

- Generated all 16 local HTML pages with shared `src/lib/site.mjs` source.
- Checked all internal href and img asset paths in the static preview.
- Confirmed no unauthorized other-company names in the new site.
- Browser automation was blocked by the execution environment, so manual browser review and the GitHub Actions Astro build remain required.
