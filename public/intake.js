/* Privacy-first lead intake for static GitHub Pages.
   No requests, storage, analytics or third-party endpoints.
   The visitor sends the prepared email using their own email application. */
(() => {
  const form = document.getElementById('project-brief');
  if (!form) return;
  const feedback = document.getElementById('brief-feedback');
  const clean = value => String(value || '').trim().slice(0, 1150);
  function compose() {
    if (!form.reportValidity()) return null;
    const data = new FormData(form);
    const need = clean(data.get('need'));
    const details = clean(data.get('details'));
    if (!need || details.length < 12) return null;
    const stage = clean(data.get('stage')) || 'Not specified';
    const company = clean(data.get('company')) || 'Not specified';
    return {
      subject: 'Project enquiry: ' + need,
      body: [
        'Hi Mayo,', '',
        'I would like to discuss the following:', '',
        'Main challenge: ' + need,
        'Business goal / context:', details, '',
        'Stage: ' + stage,
        'Company: ' + company, '',
        'Please reply to this email so we can discuss next steps.',
      ].join('\n')
    };
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    const message = compose();
    if (!message) return;
    const href = 'mailto:me@mayoracek.com?subject=' + encodeURIComponent(message.subject) +
      '&body=' + encodeURIComponent(message.body);
    feedback.textContent = 'Your email app should open with a draft. Review it and press Send there; nothing has been sent from this page.';
    window.location.href = href;
  });
  document.getElementById('copy-brief')?.addEventListener('click', async () => {
    const message = compose();
    if (!message) return;
    const value = 'To: me@mayoracek.com\nSubject: ' + message.subject + '\n\n' + message.body;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('No clipboard API');
      await navigator.clipboard.writeText(value);
      feedback.textContent = 'Copied. Paste the brief into an email addressed to me@mayoracek.com.';
    } catch {
      const area = document.createElement('textarea');
      area.value = value;
      area.style.position = 'fixed';
      area.style.top = '-2000px';
      document.body.append(area);
      area.select();
      const copied = document.execCommand('copy');
      area.remove();
      feedback.textContent = copied
        ? 'Copied. Paste the brief into an email addressed to me@mayoracek.com.'
        : 'Copy was unavailable. Please open an email to me@mayoracek.com and describe the goal.';
    }
  });
})();