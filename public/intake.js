/*
 * Lightweight project enquiry for a static GitHub Pages website.
 * This script does not submit data to a server, store text, or send telemetry.
 * It prepares a mailto draft that the visitor must review and send.
 */
(() => {
  'use strict';
  const form = document.getElementById('project-brief');
  if (!form) return;
  const feedback = document.getElementById('brief-feedback');
  const needField = form.querySelector('#brief-need');
  const detailsField = form.querySelector('#brief-details');
  const needLabels = Object.freeze({
    collect: 'Measurement or tracking',
    connect: 'Data engineering or analytics',
    activate: 'AI and automation',
    unsure: 'General question',
    other: 'Other'
  });

  function compose() {
    if (!form.reportValidity()) return null;
    const key = needField.value;
    if (!Object.prototype.hasOwnProperty.call(needLabels, key)) return null;
    const details = detailsField.value.trim().slice(0, 1400);
    if (details.length < 8) {
      detailsField.setCustomValidity('Please add a short description of at least eight characters.');
      detailsField.reportValidity();
      return null;
    }
    detailsField.setCustomValidity('');
    return {
      subject: 'Website enquiry: ' + needLabels[key],
      body: [
        'Hi Mayo,', '',
        'I would like to get in touch about:', needLabels[key], '',
        'My idea or question:', details, '',
        'Please reply to this email so we can discuss the next steps.'
      ].join('\n')
    };
  }

  detailsField.addEventListener('input', () => detailsField.setCustomValidity(''));

  form.addEventListener('submit', event => {
    event.preventDefault();
    const draft = compose();
    if (!draft) return;
    const href = 'mailto:me@mayoracek.com?subject=' + encodeURIComponent(draft.subject) +
      '&body=' + encodeURIComponent(draft.body);
    window.siteAnalytics?.track('projectBriefEmailPrepared', {
      actionId: 'prepareEmail',
      actionLocation: 'projectBriefForm',
      formId: 'projectBrief'
    });
    feedback.textContent = 'Your email app should open a draft. Review it and press Send there. Nothing has been sent by this website.';
    window.location.href = href;
  });


})();
