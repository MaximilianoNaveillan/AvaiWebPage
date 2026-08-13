import { initTabs } from './tabs.js';
import { initDrawer } from './drawer.js';
import { initWhatsApp } from './whatsapp.js';

function initApp() {
  initTabs();
  initDrawer();
  initWhatsApp();
}

// primera carga
initApp();

// navegación Astro (CLAVE)
document.addEventListener('astro:page-load', initApp);
