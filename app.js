const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';

    faqButtons.forEach((other) => {
      const panelId = other.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      other.setAttribute('aria-expanded', 'false');
      if (panel) panel.hidden = true;
    });

    const panelId = button.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;

    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      if (panel) panel.hidden = false;
    }
  });
});
