/* Accessible, local-only data lifecycle interaction. No network or storage. */
(() => {
  'use strict';
  const root = document.getElementById('data-lifecycle');
  if (!root) return;
  const buttons = Array.from(root.querySelectorAll('[data-life-step]'));
  const panels = Array.from(root.querySelectorAll('[data-life-panel]'));

  function select(id, userAction = false) {
    if (!buttons.some(button => button.dataset.lifeStep === id)) return;
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.lifeStep === id));
    }
    for (const panel of panels) {
      panel.hidden = panel.dataset.lifePanel !== id;
    }
    if (userAction) {
      window.siteAnalytics?.track('lifecycleStepSelected', {
        actionId: id,
        actionLocation: 'dataLifecycle',
        contentType: 'dataLifecycleStage',
        contentId: id
      });
    }
  }
  for (const button of buttons) {
    button.addEventListener('click', () => select(button.dataset.lifeStep, true));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const index = buttons.indexOf(button);
      const next = event.key === 'Home' ? 0 :
        event.key === 'End' ? buttons.length - 1 :
        (index + (['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 1) + buttons.length) % buttons.length;
      buttons[next].focus();
      select(buttons[next].dataset.lifeStep, true);
    });
  }
})();
