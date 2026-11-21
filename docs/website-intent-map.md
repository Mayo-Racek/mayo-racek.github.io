# Website intent and CTA map — November 2026

## Editorial positioning

Professional role: **Data & AI Solutions Architect**.
Main promise: **Engineering data solutions that solve real problems.**
Supporting message: **I turn fragmented data, manual workflows and unreliable measurement into practical solutions. From trustworthy cloud data and activation to AI-powered automation, the problem comes first and the technology follows.**

Reference principles from established consulting firms:
- Lead with the problem and operational impact (rather than feature inventories).
- Present reliable data, security, governance and validation as part of engineering quality.
- Be technology-agnostic in the offer, while showing strong Google Cloud, BigQuery, Dataform, GTM/GA4 and AI/ADK experience when relevant.
- Distinguish proven implementation from active experiments, and never invent client outcomes.
- Publish case studies only after implementation, reproducible QA, UAT and editorial evidence review.

## Page-by-page purpose

| Page/element | Visitor question answered | Intended next action | Primary measure |
| --- | --- | --- | --- |
| Hero headline | What kind of professional is this? | Read proposition | pageViewed (home) |
| Hero primary: Explore Services | Which problems can they solve? | Open services | ctaClicked (heroExploreServices) |
| Hero secondary: Read My Blog | Does this engineer think rigorously? | Read real technical article | ctaClicked (heroReadBlog) |
| Home service cards | Which problem category fits my need? | Select a service | serviceSelected |
| Home short project brief | I am not sure where to start | Open brief form | ctaClicked |
| Home Aria preview | What AI system is being designed? | Read lab rationale and quality gates | labProjectSelected |
| Home approach | How does this person think? | Read About | ctaClicked |
| Home article card | Is there substantial technical writing? | Read full article | articleSelected |
| Header nav | Where is the right part of the site? | Navigate by content category | navigationClicked |
| Header project brief | I already have a defined challenge | Open a short form | ctaClicked |
| Services landing | What engagements are possible? | Pick a service | serviceSelected |
| Service details | What changes and deliverables can I expect? | Read process, then share brief | ctaClicked |
| Projects landing | Can I verify completed work? | Read publishing standard or Aria lab | labProjectSelected |
| Aria lab | What problem does Aria address, and is it finished? | Understand development status / quality gates | pageViewed (labProject) |
| Blog landing | What does this person know and believe? | Select a substantive article | articleSelected |
| Article | How does the engineering approach work? | Continue reading / explore services | pageViewed (article) |
| About | Who will be responsible for the work? | Explore background or start brief | navigation / CTA |
| Resume | What is their professional experience? | Download public CV or contact | contentLinkClicked |
| Contact | Which contact method works for me? | LinkedIn, GitHub, brief | contactMethodSelected |
| Start/project brief | Can I explain the business goal without a specification? | Prepare email or copy | projectBriefEmailPrepared / projectBriefCopied |
| Footer | I want a different destination or social account | Follow relevant link | navigationClicked / socialLinkClicked |

## Publishing policy

- **Completed case study**: named or anonymized real problem; constraints and architecture; implementation; validation evidence; UAT; factual outcome and limitations; owner approval.
- **In development**: Aria may describe its problem, design plan, status and release requirements. It must not be counted as a finished production deliverable.
- **Article**: substantive original reasoning, coherent structure and technically accurate explanation. An editorial review is required before public release.
- **Credentials**: display earned certifications only.
- **Lead metrics**: opening an email draft is not a lead submission, and copying a brief is not a sent inquiry.

## Phase 1 boundaries

Keep the existing site structure, colorful portrait, responsive styles and GitHub Pages hosting. Remove misleading placeholder projects, publish only one substantive original article after review, add a clear Aria lab page, and instrument meaningful interactions locally through the versioned data layer.

Any future connection to GTM/GA4, server-side GTM, BigQuery or AI agent tracking is a **separate implementation** requiring consent/privacy design, destination mapping, tests, deployment checks and release approval.
