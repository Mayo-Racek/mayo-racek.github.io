/*
 * First-party data layer contract for mayoracek.com
 * No cookies, browser storage, identifiers, tracking pixels or network requests.
 * Events are queued locally in window.dataLayer only.
 * GA4/other forwarding requires a separate, reviewed, consent-aware integration.
 */
(() => {
  'use strict';

  const schemaVersion = '1.1.0';
  const supportedEvents = new Set([
    'navigationClicked',
    'navigationMenuOpened',
    'ctaClicked',
    'serviceSelected',
    'articleSelected',
    'labProjectSelected',
    'contentLinkClicked',
    'socialLinkClicked',
    'contactMethodSelected',
    'projectBriefStarted',
    'projectBriefNeedSelected',
    'projectBriefEmailPrepared',
    'projectBriefCopied',
    'lifecycleStepSelected',
    'resumeDownloadClicked'
  ]);

  // Never allow free-text inputs (such as brief details, company name or email)
  // to be passed into the event schema.
  function token(value) {
    return String(value == null ? '' : value)
      .slice(0, 96)
      .replace(/[^a-zA-Z0-9:/._-]/g, '')
      .slice(0, 64);
  }

  function targetPath(href) {
    if (!href || href.charAt(0) === '#') return null;
    try {
      const target = new URL(href, window.location.href);
      if (target.protocol !== 'https:' && target.protocol !== 'http:') return null;
      if (target.origin === window.location.origin) return target.pathname;
      return target.hostname;
    } catch (_) {
      return null;
    }
  }

  function track(eventName, fields) {
    if (!supportedEvents.has(eventName)) return false;
    const input = fields || {};
    const interaction = {
      actionId: token(input.actionId) || null,
      actionLocation: token(input.actionLocation) || null,
      targetPath: targetPath(input.targetPath) || null,
      contentType: token(input.contentType) || null,
      contentId: token(input.contentId) || null,
      formId: token(input.formId) || null
    };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, schemaVersion, interaction });
    return true;
  }

  // Public interface for explicit events raised only after successful form actions.
  window.siteAnalytics = Object.freeze({ track });

  function actionLocation(node) {
    if (node.closest('.hero')) return 'hero';
    if (node.closest('.site-header')) return 'header';
    if (node.closest('.site-footer')) return 'footer';
    if (node.closest('.services-section')) return 'homeServices';
    if (node.closest('.work-section')) return 'homeLab';
    if (node.closest('.blog-section')) return 'homeBlog';
    if (node.closest('.approach-section')) return 'homeApproach';
    if (node.closest('.contact-band')) return 'contactBand';
    if (node.closest('.contact-options')) return 'contactOptions';
    if (node.closest('.service-grid')) return 'servicesGrid';
    if (node.closest('.post-grid')) return 'blogGrid';
    return 'pageContent';
  }

  function eventForLink(link) {
    const explicit = link.getAttribute('data-track-event');
    if (explicit && supportedEvents.has(explicit)) return explicit;
    if (link.closest('.footer-social')) return 'socialLinkClicked';
    if (link.closest('.contact-options')) return 'contactMethodSelected';
    if (link.closest('.site-nav, .footer-links') || link.classList.contains('brand')) return 'navigationClicked';
    if (link.classList.contains('service-card')) return 'serviceSelected';
    if (link.classList.contains('post-card')) return 'articleSelected';
    if (link.classList.contains('lab-feature')) return 'labProjectSelected';
    if (link.matches('.btn, .nav-contact, .text-link, .section-link')) return 'ctaClicked';
    return 'contentLinkClicked';
  }

  function idForLink(link) {
    const explicit = link.getAttribute('data-track-id');
    if (explicit) return token(explicit);
    const href = link.getAttribute('href') || '';
    const target = targetPath(href);
    if (target) return token(target.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'home');
    if (href.startsWith('mailto:')) return 'email';
    return 'link';
  }

  document.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const menuButton = target.closest('.menu-toggle');
    if (menuButton && menuButton.getAttribute('aria-expanded') === 'true') {
      track('navigationMenuOpened', { actionId: 'mobileMenu', actionLocation: 'header' });
      return;
    }

    const link = target.closest('a[href]');
    if (!link || link.hasAttribute('data-track-ignore')) return;
    const eventName = eventForLink(link);
    const href = link.getAttribute('href') || '';
    const isExternalSocial = !!link.closest('.footer-social');
    track(eventName, {
      actionId: idForLink(link),
      actionLocation: link.getAttribute('data-track-location') || actionLocation(link),
      targetPath: href,
      contentType: eventName === 'articleSelected' ? 'article' :
        eventName === 'serviceSelected' ? 'service' :
        eventName === 'labProjectSelected' ? 'labProject' :
        isExternalSocial ? 'socialProfile' : null,
      contentId: link.getAttribute('data-track-id') || null
    });
  }, { passive: true });

  const form = document.getElementById('project-brief');
  if (form) {
    let started = false;
    form.addEventListener('focusin', () => {
      if (started) return;
      started = true;
      track('projectBriefStarted', {
        actionId: 'projectBrief',
        actionLocation: 'projectBriefForm',
        formId: 'projectBrief'
      });
    });
    form.addEventListener('change', event => {
      const input = event.target;
      if (!(input instanceof HTMLSelectElement) || input.name !== 'need') return;
      const allowed = new Set(['collect', 'connect', 'activate', 'unsure', 'other']);
      if (!allowed.has(input.value)) return;
      track('projectBriefNeedSelected', {
        actionId: input.value,
        actionLocation: 'projectBriefForm',
        formId: 'projectBrief'
      });
    });
  }
})();
