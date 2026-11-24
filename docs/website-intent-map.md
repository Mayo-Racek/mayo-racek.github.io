# Website intent map — personal technical blog

## Purpose
**Mayo Racek designs practical data solutions and writes about the engineering behind them.**

This is a personal professional blog, **not** a commercial services catalog or a portfolio of unfinished products. It should be clear who is writing, what they work on, what readers can learn and how to follow their thinking. Avoid marketing claims, manufactured outcomes and placeholder case studies.

## Public navigation and pages

| Page | Reader goal | Main action |
| --- | --- | --- |
| Home | Understand who Mayo is and why this blog exists | Read the Blog; About Me |
| Blog | Browse original articles | Read an article |
| Article | Read a complete technical perspective | Return to the Blog |
| About | Meet the engineer and person behind the writing | Download CV; View Experience; Read Blog |
| Resume | Review professional history | Download CV |
| Contact | Ask a question, share feedback or start a conversation | Send Message (opens email app); LinkedIn, GitHub, X |

The homepage consists of **a compact, portrait-led introduction** ("Engineering data you can trust.") with a factual "17+ years in data and analytics (Fortune 200 consulting details remain on About and CV)" line, plus **one recent article** (without a redundant section eyebrow, introduction, or extra All Articles link when there is only one post). Do not add service cards, full data lifecycle, sales CTAs, fake results or decorative content solely to fill space.

## What was retired
The Services, service-detail, Work, lab/Aria and duplicate Start public routes were removed. Their source remains available in repository history if a verified consultancy or product offering is intentionally launched in the future. The Contact page is a compact form-first layout with a warm invitation, three social profile links, a topic selector, a message field and one right-aligned **Send Message** button. The copy-to-clipboard control is retired. There is no backend; it opens an email draft for the visitor to review and send.

The About page uses four unnumbered, alternating chapters: personal introduction, data engineering and Fortune 200 consulting experience, family and football, and curiosity (astronomy, AI and knowledge sharing). The browser favicon uses a north-star emblem in the existing brand colors.

## Honest editorial policy
Only complete and technically defensible articles are published. Projects and AI agents must not be presented as launched or completed without documented testing/UAT and appropriate disclosure permission.

## Contract and technical continuity
- First-party data layer stays on **schema 1.1.0**.
- The original event dictionary and payload fields remain supported; events for removed Services, lifecycle and lab UI are now **dormant**, not repurposed. A new, fixed-value `activity` object names the visitor intent and state (for example `readBlog` / `intent`, or `prepareContactEmail` / `prepared`).
- **pageViewed**, **articleSelected**, **ctaClicked**, navigation, CV and contact-intent events continue to work with their existing shapes.
- The scripts do not forward data to a vendor or store/free-text visitor messages.
- Site metadata remains static HTML with canonical URLs and factual Person, WebSite, ProfilePage, Article and BreadcrumbList schemas.
- The sitemap contains only current public pages. Removed URLs return not found rather than pretending there is still a service to purchase.

## Future expansion
Start with meaningful, original writing. Add case studies or a commercial services section only when there is enough tested real work and a clear reader/customer purpose. Preserve old data-layer naming/IDs and use a versioned change when an event contract genuinely changes.
