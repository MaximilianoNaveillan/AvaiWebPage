export function initDrawer() {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');

  const openBtn = document.getElementById('openDrawer');
  const closeBtn = document.getElementById('closeDrawer');

  if (!drawer || !overlay || !openBtn || !closeBtn) return;

  // 🧠 evitar doble inicialización en navegación SPA
  if (openBtn.dataset.bound === 'true') return;
  openBtn.dataset.bound = 'true';

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('show');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
  }

  // ✅ eventos con addEventListener (mejor que onclick)
  openBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // cerrar al hacer click en links
  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
}
