# First-party data layer — mayoracek.com

**Schema version:** 1.1.0  
**Status:** Implemented in GitHub source; browser UAT still required. No external analytics forwarding is configured.  
**Implementation:** \`src/lib/site.mjs\`, \`public/site-analytics.js\`, \`public/lifecycle.js\`, \`public/intake.js\`.  
**Owner:** Mayo Racek.

## Why it exists

The site records meaningful intent on the browser's \`window.dataLayer\` queue. It does not record every pointer movement, scroll or decorative click. The schema uses **camelCase** action-oriented, past-tense event names and stable IDs.

Never collect free-text message content, company names, personal details, email subjects, email bodies, passwords, credentials or user identifiers in this data layer. The scripts create no cookies, persistent IDs, local storage entries or analytics network requests.

## Page-level payload

Emitted once in the static HTML head for every full page load:

~~~js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'pageViewed',
  schemaVersion: '1.1.0',
  page: {
    pageType: 'home',
    pagePath: '/',
    pageTitle: 'Home',
    language: 'en',
    canonicalUrl: 'https://mayoracek.com/'
  }
});
~~~

Page types include \`home\`, \`services\`, \`serviceDetail\`, \`article\`, \`blog\`, \`about\`, \`resume\`, \`contact\`, \`start\`, \`projects\`, \`labProject\` and \`notFound\`. Full page navigation produces a new pageViewed on the destination page, not a second event on the current page.

## Interaction payload

~~~js
window.dataLayer.push({
  event: 'lifecycleStepSelected',
  schemaVersion: '1.1.0',
  interaction: {
    actionId: 'transform',
    actionLocation: 'dataLifecycle',
    targetPath: null,
    contentType: 'dataLifecycleStage',
    contentId: 'transform',
    formId: null
  }
});
~~~

All six interaction fields are always present; irrelevant fields are null. Do not reuse GTM variables without event-scope guards, since earlier values may linger in data layer state.

## Event dictionary

| Event | When it fires | Important distinction |
| --- | --- | --- |
| pageViewed | Every HTML page load | Once, from server-rendered HTML |
| navigationClicked | Header, footer or brand navigation | Navigation intent |
| navigationMenuOpened | Mobile menu opens | Not on close |
| ctaClicked | Action button-style link | Links to a destination; not a conversion |
| serviceSelected | Service card or selected lifecycle service link | Stable service slug and page context |
| lifecycleStepSelected | Visitor activates a curved path stage | Stable ID: collect, connect, transform, analyze, activate, automate |
| articleSelected | Published article card clicked | Article content ID |
| labProjectSelected | Aria link clicked | In-development interest, not production use |
| contentLinkClicked | Other useful content link | Generic navigation |
| socialLinkClicked | Footer social profile link | Profile destination |
| contactMethodSelected | Contact option selected | Outreach intent |
| resumeDownloadClicked | CV download link explicitly instrumented | Click intent, not guaranteed download completion |
| projectBriefStarted | First focus within the enquiry form | Starts once per form load |
| projectBriefNeedSelected | Dropdown selection changes | Only stable codes: collect, connect, activate, unsure, other |
| projectBriefEmailPrepared | Valid form generates an email draft | NOT a submitted enquiry |
| projectBriefCopied | Valid message successfully copied | NOT a submitted enquiry |

**16 supported events: one page event and 15 interaction events.**

## Enquiry form / conversion boundary

The contact form has only two fields: an approved topic dropdown (including Other) and a short free-text description. The free text is used **only in the visitor's own email draft or clipboard**, never in \`window.dataLayer\`. The site itself does not send the email or receive the form data.

Mapping \`projectBriefEmailPrepared\` to GA4 \`generate_lead\` would be misleading. A future verified submission event would need a genuine server-side acknowledgement from a secure backend and an updated event contract. Record only permissible data with documented purpose, consent and retention policy.

## Proposed future GA4 / GTM mapping (not live)

| Data layer | Possible GA4 event | Notes |
| --- | --- | --- |
| pageViewed | page_view | Avoid duplicate enhanced/automatic page_view |
| ctaClicked | cta_click | Only meaningful CTA destinations |
| serviceSelected | select_content | Use approved content_type and item_id |
| lifecycleStepSelected | lifecycle_step_select | Optional; retain stable step_id |
| resumeDownloadClicked | file_download | Ensure enhanced measurement is not already collecting the same PDF click |
| articleSelected | select_content | content_type = article |
| projectBriefEmailPrepared | project_brief_email_prepared | Intent only; not a lead |
| projectBriefCopied | project_brief_copied | Intent only |

GA4 naming convention and custom dimensions are **separate** from the camelCase first-party contract. Prefer tracking fewer purposeful events over forwarding every link click.

## UAT before live analytics activation

1. On home, run \`window.dataLayer.filter(x => x?.schemaVersion === '1.1.0')\`. Expect one pageViewed.
2. Click each of the six curved stages, verify the displayed explanation, \`aria-pressed\`, one \`lifecycleStepSelected\` per activation and the relevant service link.
3. Click the lifecycle service link and verify one \`serviceSelected\` followed by a pageViewed on the destination.
4. Check both hero CTAs; IDs remain \`heroExploreServices\` and \`heroReadBlog\`.
5. Select Contact topic values including Other. Verify only stable codes enter \`projectBriefNeedSelected\`, never the written description.
6. Trigger invalid form inputs. No email-prepared/copied success event should fire.
7. For a valid message, verify mailto composition and an explicit notice that the visitor must press Send in the email application.
8. Download the CV from About and verify \`resumeDownloadClicked\`, the PDF link and two-page PDF.
9. Test keyboard (Tab and arrow keys), mobile viewport, browsers and reduced-motion settings.
10. In the browser Network / Storage panels, verify no vendor endpoint, identity cookie or analytics storage originates from this code.
11. Validate the static GitHub Actions checks, compare markup to actual site content and approve browser UAT.
12. Design consent and GTM/GA4 mapping before turning on any analytics vendor collection.

## External analytics roadmap

The site currently has a first-party event queue, not a connected tracking system. To complete analytics, define purpose, consent requirements, CMP implementation, GTM/GA4 tagging behavior, exact event mapping, parameter minimization, deduplication, UAT and documentation. If server-side GTM is added later, connect only the endpoints actually required by the approved measurement architecture.
