# Website intent map — concise release, November 2026

## Positioning
**Mayo Racek — Data & AI Solutions Architect**

**Headline:** Designing data solutions to empower your goals.

**Supporting copy:** From data collection and cloud engineering to analytics and intelligent automation. I design connected solutions that help you turn information into action.

The website is a focused engineering consultancy portfolio, not a product catalog. It communicates a single proposition, three services and one clear contact action. No fabricated outcomes, completed projects or unearned credentials.

## Three service pathways

| Service | Customer outcome | Stable URL | Main capabilities |
| --- | --- | --- | --- |
| Collect & Measure | Trustworthy web and app activity | /services/measurement-architecture/ | Measurement plans, event design, GTM/GA4/server-side tagging, consent and QA |
| Connect & Analyze | Connected and understandable data | /services/cloud-data-products/ | Ingestion, BigQuery, Dataform, BI and data quality |
| Activate & Automate | Data used by approved business systems | /services/applied-ai-systems/ | Reverse ETL, AI-readiness, controlled automation and evaluation |

Each service page has one H1, one concise explanation, three capability groups, an ideal-customer statement and a single next action. The content is server-rendered HTML. Do not invent pricing, industry specialisation, quantitative outcomes or completed AI deployments.

## Homepage: element by element

| Element | Reason to exist | Expected user action | Data-layer event |
| --- | --- | --- | --- |
| Brand / portrait | Identify the individual engineer | Recognize the provider | pageViewed |
| Hero message | Explain the promise quickly | Understand value | pageViewed |
| Explore Services | Understand the offer | Open /services/ | ctaClicked, heroExploreServices |
| Read My Blog | Evaluate engineering thinking | Open /blog/ | ctaClicked, heroReadBlog |
| Three service cards | Select the relevant capability | Open service detail | serviceSelected |
| Final CTA | Share an outcome to explore | Open /start/ | ctaClicked |
| Footer | Find personal/contact details | Follow selected link | navigationClicked or socialLinkClicked |

The six-stage infographic, duplicate homepage blog showcase, and in-development project feature were removed to keep the homepage short. Finished case studies must pass QA, UAT and editorial approval before being presented as completed work.

## Navigation and evidence
Main navigation: Services, Blog, About and Contact; the brand links Home. Resume remains accessible from About and the footer. Work and Aria routes remain available but have noindex directives until verified content exists; Aria clearly states its in-development status.

## SEO / GEO baseline
Static Astro HTML; descriptive titles and meta descriptions; canonical URLs; robots and sitemap; factual Person/WebSite, Service, Article and BreadcrumbList JSON-LD with no fabricated reviews, dates or pricing. True author identity and real blog/article content are more valuable than artificial keyword repetitions. Verify indexability and metadata after deployment.

## Data and consent
Event schema remains unchanged (camelCase data-layer messages, version 1.0.0). No GTM/GA4 vendor transmission is introduced, and no visitor information from the project brief is sent to the data layer. Confirm browser behavior and consent before adding a destination.
