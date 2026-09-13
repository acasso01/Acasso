(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  let mode = 'dark';
  try { mode = localStorage.getItem('acasso-theme') === 'light' ? 'light' : 'dark'; } catch {}
  const sync = () => {
    root.dataset.theme = mode;
    if (toggle) {
      const label = `Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`;
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    }
  };
  sync();
  toggle?.addEventListener('click', () => {
    mode = mode === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('acasso-theme', mode); } catch {}
    sync();
  });
})();
