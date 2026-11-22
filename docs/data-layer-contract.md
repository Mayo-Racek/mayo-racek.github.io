# mayoracek.com — First-party Data Layer Contract

**Status:** Proposed on a feature branch, pending browser UAT. No vendor collection is enabled by this change.
**Version:** 1.0.0
**Owner:** Mayo Racek
**Implementation:** src/lib/site.mjs, public/site-analytics.js, public/intake.js.

## Design principles

The purpose is to measure meaningful outcomes, not every DOM click. Events use past-tense, action-oriented camelCase such as pageViewed and serviceSelected. Parameters use camelCase as well, with stable IDs independent of presentation text. A single click generates one semantic event. Custom data-layer events and GA4 event names are separate contracts.

The implementation creates window.dataLayer locally and pushes data into it. It does not set cookies, persist visitor IDs, read free-text form answers into analytics, or transmit data to external endpoints.

## Page event

Each page queues exactly one pageViewed event with this structure:

~~~js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'pageViewed',
  schemaVersion: '1.0.0',
  page: {
    pageType: 'home',
    pagePath: '/',
    pageTitle: 'Home',
    language: 'en',
    canonicalUrl: 'https://mayoracek.com/'
  }
});
~~~

The page types used by the static routes include home, services, serviceDetail, projects, labProject, blog, article, about, resume, contact and start. Parameters contain canonical paths without query strings. The fallback 404 page should use notFound.

## Interaction event

~~~js
window.dataLayer.push({
  event: 'serviceSelected',
  schemaVersion: '1.0.0',
  interaction: {
    actionId: 'cloud-data-products',
    actionLocation: 'servicesGrid',
    targetPath: '/services/cloud-data-products/',
    contentType: 'service',
    contentId: 'cloud-data-products',
    formId: null
  }
});
~~~

All six interaction properties are always provided, set to null when irrelevant, to prevent stale data from earlier events being mistaken for data about the current event.

| Event | Trigger | Measurement question |
| --- | --- | --- |
| pageViewed | One event for each page load | Which pages and content types attract interest? |
| navigationClicked | Header, footer or brand navigation | Can users find the relevant section? |
| navigationMenuOpened | Mobile navigation expands | Are users using mobile navigation? |
| ctaClicked | Hero or other purposeful CTA link | Which invitations cause a next step? |
| serviceSelected | Service card clicked | What problem category interests visitors? |
| articleSelected | Published article card clicked | Which technical topics are selected? |
| labProjectSelected | Aria link clicked | Are visitors interested in the in-development initiative? |
| contentLinkClicked | Other content anchor clicked | Where do readers go next? |
| socialLinkClicked | Footer profile link clicked | Which professional profile is selected? |
| contactMethodSelected | Contact option link clicked | Which contact option is chosen? |
| projectBriefStarted | First focus within brief form | Is there intent to explain a problem? |
| projectBriefNeedSelected | Brief category radio selection | Which broad needs are selected? |
| projectBriefEmailPrepared | Valid brief generates a mailto draft | Is a draft prepared? Not a sent lead. |
| projectBriefCopied | Valid brief is successfully copied | Is the brief copied? Not a submitted lead. |

For form category selection, record only stable codes needOption1 through needOption5. Never record names, email addresses, company, free-text descriptions or subject/body strings.

## Destinations and consent

Phase 1 has **no GTM or GA4 network calls** and no implied consent status. If you later add a consent management platform and Google Tag Manager, define legal basis, vendor purpose and actual consent handling first. For Basic Consent Mode, prevent relevant Google tags from loading until required consent is granted. Do not publish an invented consent flag.

Suggested future GA4 mapping:
- pageViewed → page_view, but only if automatic GA4 page views have been disabled. Avoid duplication.
- serviceSelected or articleSelected → select_content, with approved content_type and item_id parameters.
- navigationClicked → navigation_click custom event, only if it answers a business question.
- ctaClicked → cta_click custom event.
- projectBriefEmailPrepared → project_brief_email_prepared custom intent event, not generate_lead.
- projectBriefCopied → project_brief_copied custom intent event.

Map only useful events. GA4 expects its own event naming conventions and parameter constraints, so do not send camelCase data-layer events directly as if they were GA4 recommended event names.

## Browser UAT

1. Load a page with DevTools open and run: window.dataLayer.filter(e => e && e.schemaVersion === '1.0.0').
2. Confirm exactly one pageViewed per full page load, with correct pageType, pagePath and canonical URL.
3. Click Explore Services and Read My Blog. Each should produce one ctaClicked event with the stable IDs heroExploreServices and heroReadBlog, and go to the correct page.
4. Select a service, article and Aria link. Confirm serviceSelected, articleSelected and labProjectSelected with the corresponding IDs.
5. Open and close the mobile menu. navigationMenuOpened should occur only when opening.
6. Start a project brief, select a category, and check that text inputs and company details never enter the dataLayer.
7. Try preparing/copying an invalid brief. No success events should fire. With a valid brief, confirm projectBriefEmailPrepared for the mailto draft and projectBriefCopied only for actual clipboard success.
8. Inspect Network, Cookies and Local Storage to confirm the analytics implementation itself does not transmit or persist data.
9. Test on desktop and mobile, with keyboard navigation and real link destinations.
10. Review content claims, build output and the GitHub Actions PR validation before approving a production merge.

## Publication

The release pipeline runs syntax, Astro build, link, route, content integrity and privacy-related static checks. These checks are **not** a substitute for browser UAT, consent/legal review or client acceptance. The production deployment workflow continues to run only after merge to main.
