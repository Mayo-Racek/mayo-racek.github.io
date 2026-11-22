# Publishing and tracking roadmap for mayoracek.com

## Site structure and editorial purpose

- **Home**: single promise plus interactive six-stage full data lifecycle, leading to the appropriate service.
- **Services**: three commercial offers—Measurement Strategy & Implementation, Data Engineering & Analytics, Data Activation & Intelligent Automation. Each service detail explains its own four-step delivery path.
- **About Me**: who Mayo is, why he enjoys the work, family, football, knowledge sharing and a direct public CV download.
- **Resume**: more detailed verified career experience, and the same generated two-page PDF.
- **Blog**: only complete, reviewed and original technical articles.
- **Work**: only completed projects with demonstrable implementation and UAT. Aria remains in development and unindexed until verified.
- **Contact**: two-field enquiry; a visitor chooses a topic, including Other, and describes the goal. For now, a static-site mailto draft or clipboard copy is used. **There is no server submission**.

## Writing a blog article

1. Add a new object to the exported \`posts\` array in \`src/lib/site.mjs\`.
2. Set an accurate, stable \`slug\`, \`category\`, \`title\`, \`excerpt\`, \`status\` and fully developed \`sections\`.
3. Keep each section standalone, technically precise, and honest about what was observed versus proposed.
4. Include an author byline. Add real publication/modification timestamps only after an approved editorial publish (never guess).
5. Verify \`src/pages/blog/[slug].astro\` generates the route, and link the article to the most relevant service when genuinely useful.
6. Validate actual cited references, code snippets, claims and privacy before merge.

Good future topics **when the articles are written**: measurable AI agent outcomes, governance and permissions, agent safety, AI observability and evaluation, model/token cost versus business value, and measurement of AI-driven operations. Do not create thin placeholder posts just to fill the page.

## Publishing a completed case study

1. Record the customer/business problem, accepted scope, constraints and architecture.
2. Document what was actually implemented, the QA plan, acceptance criteria, UAT evidence and observed outcome; get necessary disclosure permission or anonymize.
3. Only after verification, add the case-study object to \`projects\` in \`src/lib/site.mjs\` and confirm its route and links.
4. Do not label Aria as a completed deployed product until release gates, safe tool permissions, failure and refusal evaluations, rollback and agreed UAT have passed.
5. Review headings, SEO metadata, factual structured data and internal links.

## Data layer 1.1.0

- Every HTML page queues exactly one \`pageViewed\` event.
- Curved lifecycle buttons queue \`lifecycleStepSelected\` with a **stable stage ID**, never free text.
- The lifecycle detail link produces \`serviceSelected\`.
- The About Me CV button queues \`resumeDownloadClicked\` (click intent, not proof of download completion).
- The contact form queues \`projectBriefStarted\` and \`projectBriefNeedSelected\`. Its selected values are strictly \`collect\`, \`connect\`, \`activate\`, \`unsure\` and \`other\`.
- \`projectBriefEmailPrepared\` only means a mailto draft was prepared; \`projectBriefCopied\` only means a clipboard copy succeeded.
- No names, free-text messages, credentials, email subjects or bodies enter the data-layer events.
- No analytics service or backend currently receives these first-party events.

See \`docs/data-layer-contract.md\` for the complete contract.

## Next technical prerequisites

- Configure a real contact backend (e.g. authenticated Cloud Run endpoint, spam protection, secure notification, retention rules and documented consent) **before** claiming successful submitted leads. Avoid third-party endpoints without an approved privacy review.
- Select the consent manager and define a compliant GTM/GA4 event mapping. Do not map both automatic and manual page views.
- Verify sitemap, Search Console and Bing indexing, and validate structured data against visible content.
- When publishing new content, keep the home page concise. Do not add duplicate services, project teasers or article grids without a concrete visitor purpose.
