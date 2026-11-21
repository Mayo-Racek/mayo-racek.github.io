# Mayo Racek — Engineering Portfolio

Source for [mayoracek.com](https://mayoracek.com), a professional portfolio about solving real data and automation problems.

**Positioning:** Data & AI Solutions Architect.
**Site:** Astro 4, static GitHub Pages deployment, plain CSS and small first-party scripts.
**Design principle:** Real problems, verifiable engineering, useful outcomes.

## Local development

Requires Node.js 20+.

~~~bash
npm install
npm run dev
# Before a PR:
node --check src/lib/site.mjs
node --check public/site-analytics.js
node --check public/intake.js
npm run build
node scripts/check-release.mjs
~~~

## Content and publishing

- src/lib/site.mjs contains the published service descriptions, article content, homepage renderer and engineering lab.
- Project case studies are published **only** after implementation, documented QA, UAT and editorial validation.
- Aria is openly labeled an **in-development** engineering initiative; it is not a completed production case study.
- The blog includes original engineering writing. Authors must review articles before approving the PR.
- No private client information, metrics, credentials or unearned certifications should be included.

See [Website Intent Map](docs/website-intent-map.md) for the purpose of page elements and the calls to action.

## Data layer

The site initializes a semantic, versioned window.dataLayer with pageViewed events and queues important user actions in public/site-analytics.js. No external analytics is enabled as part of this layer.

See [Data Layer Contract](docs/data-layer-contract.md) for the naming convention, event dictionary, payloads, privacy rules, proposed GA4 mapping and browser UAT plan.

## Deployment

- The custom domain is configured in public/CNAME.
- PRs are tested with .github/workflows/validate-pr.yml and **do not deploy**.
- The existing main-branch GitHub Pages workflow remains in place.
- Reviewers should check the build results, mobile layout, article accuracy, links, data layer output and privacy implications before merging.

## Acknowledgment and license

This site originated from the open-source [Astrofy](https://github.com/manuelernestog/astrofy) Astro/Tailwind portfolio template. The original license is retained in [LICENSE](LICENSE). Subsequent content and design changes were made for mayoracek.com.
