# First-party data layer: what visitors do on mayoracek.com

**Contract:** v1.1.0, unchanged event names and existing fields.  
**Enhancement:** each event now has an additional, optional \`activity\` object describing its purpose in plain camelCase terms. This is a backward-compatible addition; existing GTM/data-layer listeners that use \`event\`, \`page\` or \`interaction\` can keep their paths.  
**Status:** browser-only queue; no GA4, GTM, cookies, visitor identifiers, persistence or external analytics requests configured.  
**Code:** \`src/lib/site.mjs\`, \`public/site-analytics.js\`, \`public/intake.js\`.

## The questions an event should answer

1. **What happened?** \`event\`: a past-tense, camelCase event such as \`articleSelected\`.
2. **What was the visitor trying to do?** \`activity.name\`: a specific verb phrase such as \`openArticle\` or \`readBlog\`.
3. **What part of the journey is this?** \`activity.category\`: \`navigation\`, \`reading\`, \`profile\` or \`contact\`.
4. **What actually occurred?** \`activity.status\`: \`intent\`, \`observed\`, \`opened\`, \`started\`, \`selected\`, \`prepared\`, or \`copied\` (only as appropriate).
5. **Which element / page?** The existing \`interaction.actionId\`, \`interaction.actionLocation\`, \`interaction.targetPath\`, \`interaction.contentType\`, \`interaction.contentId\`, \`interaction.formId\` and \`page\` fields.

**Important:** A click is **intent**, not proof that navigation, a PDF download or an email send finished. \`projectBriefEmailPrepared\` is **not** a lead submission. The website has no contact backend.

## Real examples

### Page viewed

One event per full HTML page load. The \`page\` object is unchanged:

~~~js
window.dataLayer.push({
  event: 'pageViewed',
  schemaVersion: '1.1.0',
  page: {
    pageType: 'article',
    pagePath: '/blog/start-with-the-problem/',
    pageTitle: 'Start with the problem, not the platform',
    language: 'en',
    canonicalUrl: 'https://mayoracek.com/blog/start-with-the-problem/'
  },
  activity: {
    name: 'viewPage',
    category: 'navigation',
    status: 'observed'
  }
});
~~~

### Article card selected

~~~js
window.dataLayer.push({
  event: 'articleSelected',
  schemaVersion: '1.1.0',
  interaction: {
    actionId: 'start-with-the-problem',
    actionLocation: 'blogGrid',
    targetPath: '/blog/start-with-the-problem/',
    contentType: 'article',
    contentId: 'start-with-the-problem',
    formId: null
  },
  activity: {
    name: 'openArticle',
    category: 'reading',
    status: 'intent'
  }
});
~~~

### Contact topic selected (not the visitor's message)

~~~js
window.dataLayer.push({
  event: 'projectBriefNeedSelected',
  schemaVersion: '1.1.0',
  interaction: {
    actionId: 'other',
    actionLocation: 'projectBriefForm',
    targetPath: null,
    contentType: null,
    contentId: null,
    formId: 'projectBrief'
  },
  activity: {
    name: 'chooseContactTopic',
    category: 'contact',
    status: 'selected'
  }
});
~~~

The contact dropdown labels have changed to suit the blog, but the stored codes **remain** \`collect\`, \`connect\`, \`activate\`, \`unsure\`, \`other\`. The text field, email subject, recipient details, names, email body and all other free text are excluded from the data layer.

## Event catalog

| Event | Human-readable activity | Category / status | Where it happens |
| --- | --- | --- | --- |
| \`pageViewed\` | \`viewPage\` | navigation / observed | Every HTML page, once |
| \`navigationClicked\` | \`navigateSite\` | navigation / intent | Header, footer and logo navigation |
| \`navigationMenuOpened\` | \`openMenu\` | navigation / opened | Mobile menu opens, not closes |
| \`ctaClicked\` | \`readBlog\`, \`readAbout\`, \`browseArticles\`, or \`followLink\` | navigation / intent | Hero, article list and other action links |
| \`articleSelected\` | \`openArticle\` | reading / intent | Published article card |
| \`contentLinkClicked\` | \`followContentLink\` | reading / intent | Other content links |
| \`socialLinkClicked\` | \`openSocialProfile\` | profile / intent | Footer social profiles |
| \`resumeDownloadClicked\` | \`downloadResume\` | profile / intent | Explicitly tracked CV PDF links |
| \`contactMethodSelected\` | \`chooseContactMethod\` | contact / intent | Direct email link |
| \`projectBriefStarted\` | \`startContactMessage\` | contact / started | First focus in Contact form |
| \`projectBriefNeedSelected\` | \`chooseContactTopic\` | contact / selected | Dropdown selection, approved code only |
| \`projectBriefEmailPrepared\` | \`prepareContactEmail\` | contact / prepared | Valid form creates a mailto draft |
| \`projectBriefCopied\` | \`copyContactMessage\` | contact / copied | Successful clipboard copy |
| \`serviceSelected\` | \`exploreService\` | navigation / intent | Retired service UI; retained for compatibility |
| \`lifecycleStepSelected\` | \`exploreDataLifecycle\` | navigation / selected | Retired lifecycle UI; retained for compatibility |
| \`labProjectSelected\` | \`exploreLabProject\` | navigation / intent | Retired lab UI; retained for compatibility |

**Compatibility update (24 November 2026):** The Contact page now has a single **Send Message** button that opens an email draft. There is no backend and the message is not sent by this website. `projectBriefEmailPrepared` still indicates *draft prepared*. The old `projectBriefCopied` event stays recognized for historical compatibility but is dormant because the Copy Message control was retired. New Contact social links use `socialLinkClicked` with `contentType='socialProfile'` and stable IDs `contactLinkedIn`, `contactGithub`, `contactX`. No visitor-entered text is collected. The browser favicon now uses an astronomy-inspired north-star emblem; it has no analytics behavior.

**Total: 16 recognized events**, one page event and 15 interaction events. The last three events are dormant on the current blog, not reused for unrelated activities.

### The meaning of an activity

An \`activity\` is a **controlled description of a visible visitor action**, not a business outcome, user profile, session identity or behavioral prediction. Values come from a fixed code map. They cannot contain what someone typed into the form.

The \`interaction\` object still contains all six fields, set to a stable value or null; GTM readers should scope values to the current event and not inherit old values that may persist in data-layer state.

## QA in the browser console

~~~js
// All events from the current schema
window.dataLayer.filter(item => item?.schemaVersion === '1.1.0');

// Read activity purpose without looking up generic event definitions
window.dataLayer
  .filter(item => item?.activity)
  .map(({ event, activity, interaction, page }) => ({
    event,
    activity: activity.name,
    category: activity.category,
    status: activity.status,
    target: interaction?.targetPath ?? page?.pagePath ?? null
  }));
~~~

Check: a home page view creates exactly one \`pageViewed\`; clicking **Read the Blog** produces \`ctaClicked\` with \`activity.name='readBlog'\`; choosing **Other** produces \`projectBriefNeedSelected\` with \`actionId='other'\` and no message text; preparing an email creates \`projectBriefEmailPrepared\` but never \`formSubmitted\` or \`generate_lead\`. Rejected/incomplete inputs must not produce success events. CV clicks are intent only.

## Privacy and future activation

There are no GA4/GTM tags, analytics network calls, marketing pixels, cookies, storage writes or visitor identifiers in this implementation. Event collection and consent requirements must be designed and tested **before** connecting a vendor.

If the contract is extended again, keep camelCase, document allowed values, differentiate intent from completed outcomes and avoid sensitive payloads. Do not silently reinterpret old events or change the contract to claim conversions that did not happen.
