export function initTabs() {
  const tabs = document.querySelector('.tabs');

  if (!tabs) return;

  const indicator = tabs.querySelector('.tab-indicator');
  const links = [...tabs.querySelectorAll('.tab')];

  if (!indicator || !links.length) return;

  function getCurrentPath() {
    return normalizePath(window.location.pathname);
  }

  function normalizePath(path) {
    return path.length > 1 ? path.replace(/\/$/, '') : path;
  }

  function getActiveTab() {
    const currentPath = getCurrentPath();

    return links.find((link) => normalizePath(link.getAttribute('href')) === currentPath) || links[0];
  }

  function moveIndicator(element) {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const parentRect = tabs.getBoundingClientRect();

    indicator.style.width = `${rect.width}px`;
    indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
  }

  function updateActiveState() {
    const activeTab = getActiveTab();

    links.forEach((link) => {
      link.classList.remove('active');
    });

    activeTab.classList.add('active');

    moveIndicator(activeTab);
  }

  async function initialize() {
    if (document.fonts) {
      await document.fonts.ready;
    }

    updateActiveState();

    requestAnimationFrame(() => {
      indicator.classList.add('ready');
    });
  }

  initialize();

  document.addEventListener('astro:page-load', () => {
    updateActiveState();
  });

  window.addEventListener('resize', () => {
    updateActiveState();
  });
}
