# Website intent map — final navigation and visitor journey

## Homepage

**Main message:** Designing data solutions to empower your goals.

The hero introduces the engineering promise and provides two choices: **Explore Services** and **Read My Blog**. The homepage does **not** duplicate the service cards. Instead it contains one interactive full data lifecycle followed by one invitation to describe an opportunity.

### Full data lifecycle

The curved path is the information architecture: Collect → Connect → Transform → Analyze → Activate → Automate. Each real button selects a self-contained, static HTML explanation with a descriptive link to an existing service page.

| Stage | Visitor understanding | Link destination |
| --- | --- | --- |
| Collect | Consent-aware measurement and useful events | Collect & Measure |
| Connect | Integrate applications, APIs and business data | Connect & Analyze |
| Transform | Govern and test data models | Connect & Analyze |
| Analyze | Produce decision-oriented insights | Connect & Analyze |
| Activate | Feed approved data into business workflows | Activate & Automate |
| Automate | Build evaluated, controlled AI-assisted workflows | Activate & Automate |

The lifecycle communicates how data becomes useful. The three service pages communicate what Mayo can actually deliver. Do not put another copy of all three services on the homepage.

## Services

Each service page explains its distinct delivery process using a short four-stage timeline, three capabilities, and one CTA: **Start a Conversation**, linking to the enquiry section of Contact. Do not insert "best suited for" or similar audience restrictions. Do not publish invented success metrics.

## About Me

Warm, credible first-person introduction about data engineering, AI, continuous learning, knowledge-sharing, family and football. Visitors can download the PDF CV immediately or open the detailed Resume page. About Me is a people/identity page, not another services list.

## Contact

Contact includes a topic dropdown (Collect & Measure, Connect & Analyze, Activation/AI, Not sure yet, Other) and one required short description. Visitors can prepare an email draft or copy it. The form has **no backend**. Never call a prepared draft a submitted lead.

The legacy /start/ route reuses the same interface but has a noindex directive; canonical contact is /contact/. Any future direct submission requires a deployed and secured backend, spam protection, privacy terms, acknowledgement/receipt handling and an updated tracking event.

## Resume

The Resume page keeps verified career history and displays a link to the professionally designed two-page PDF. No unearned certification badges or unverified outcomes.

## Blog and Work

The blog is for original, published, complete technical articles with clear attribution and defensible content. Work remains unindexed until case studies are truly completed, tested and publication-approved. Aria is an openly labelled in-development lab initiative, not a finished product.

## Tracking and SEO

Data-layer v1.1.0: pageViewed; CTA/content/service navigation; lifecycleStepSelected; resumeDownloadClicked; meaningful contact-intent events. No free-text form values enter event payloads. GTM/GA4 forwarding is not yet deployed.

SEO/GEO: static HTML content, canonical URLs, sitemap filtering, robots directives, profile/service/article/breadcrumb structured data, and direct internal links. Verify external indexing, browser interactions, mobile layout, real publication dates and social-preview assets as separate QA activities.
