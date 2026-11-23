# Blog publishing and tracking guide — mayoracek.com

## Current public site
- **Home:** personal portrait, "Designing data solutions. Sharing what works.", clear 17+ years engineering experience, two purposeful links (Blog and About), latest article.
- **Blog:** a small collection of complete technical articles.
- **About:** professional background, interests, family, knowledge sharing and downloadable CV.
- **Resume:** verifiable career history and the same generated PDF.
- **Contact:** compact, single-section form immediately visible beside or beneath the brief introduction. The website does not send enquiries: it prepares a mailto draft or allows copying text.

No Services, Work, Aria lab or duplicate Start pages are published. This does **not** prevent adding tested products, case studies or an offer at a later date.

## Publishing an article
1. Write an original technical article with a clear problem, relevant context, design decisions, trade-offs, and evidence where available.
2. Check technical details, code samples, assumptions, security/privacy, any client disclosures and factual claims.
3. Add a complete object to `posts` in `src/lib/site.mjs` with a stable slug, category, title, excerpt and reviewed sections. Never publish a placeholder just to fill the grid.
4. Keep headings and passages understandable independently. Link to related writing only when genuinely useful.
5. Show the actual author. Add genuine publication/updated dates only when they can be verified; don't invent dates.
6. Verify the generated page, HTML article schema, canonical, internal navigation, mobile layout and data-layer events before merge.
7. Merge only after the build, browser and full-history secrets scan passes.

Possible topics from ongoing professional learning: measurement QA, BigQuery/Dataform, operational data quality, data activation, agent boundaries, evaluation, governance, security, inference/token cost and observable outcomes.

## Optional future case studies
Only publish completed, tested and disclosure-approved implementations. Distinguish the business problem, architecture, what was implemented, QA/UAT evidence, measured outcome and limitations. An active AI agent prototype is **in development**, not a proven production product.

## Data layer 1.1.0 — unchanged contract
The browser queues one `pageViewed` event per full HTML load. Every event now includes a fixed-value `activity` description (name, category, status), so the intent is clear even when the established event name is generic. Meaningful link, article, navigation, CV-download and contact-intent interactions use the original camelCase first-party `window.dataLayer` contract.

`serviceSelected`, `lifecycleStepSelected` and `labProjectSelected` remain recognized by `public/site-analytics.js` for compatibility, but no current page emits them. Do not remove, rename or repurpose these events without a planned contract version change.

The contact form never adds free-text messages to the data layer. `projectBriefEmailPrepared` is an email-draft event, **not** a submitted lead. No GA4, GTM or server endpoint forwards events yet.

## SEO and safety
Static HTML, canonical URLs, a filtered XML sitemap, honest personal/author structured data and well-written articles are the foundations. Verify external indexing in Search Console/Bing separately. A public GitHub repository must never contain secrets; CI blocks deployment if a full-history or generated-site secrets scan fails.

Keep the homepage short. Improving article quality takes priority over adding visuals, sales modules or unnecessary schema.
