initTheme();

function handleThemeToggleClick({ target }) {
  if (target.id === 'toggle') {
    return;
  }

  const root = document.documentElement;
  const attribute = root.getAttribute('theme') === 'durk' ? 'light' : 'durk';

  root.setAttribute('theme', attribute);
  localStorage.setItem('theme', attribute);
}

function initTheme() {
  const theme = localStorage.getItem('theme') ?? 'light';

  document.documentElement.setAttribute('theme', theme);
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const toggle = document.querySelector('#toggle');

    themeToggle?.addEventListener('click', handleThemeToggleClick);

    if (toggle) {
      toggle.checked = theme === 'durk';
    }
  });
}
