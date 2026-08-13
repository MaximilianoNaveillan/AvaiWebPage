export function initWhatsApp() {
  const waChat = document.getElementById('waChat');
  const waToggle = document.getElementById('waToggle');
  const waClose = document.getElementById('waClose');
  const waForm = document.getElementById('waForm');
  const waMessage = document.getElementById('wa-message');
  const waCounter = document.getElementById('wa-counter');

  if (!waChat || !waToggle || !waClose || !waForm) return;

  function openChat(prefill = '') {
    waChat.classList.add('open');

    if (waMessage && prefill) {
      waMessage.value = prefill;
      waCounter.textContent = `${prefill.length} / 250`;
    }
  }

  function closeChat() {
    waChat.classList.remove('open');
  }

  function updateCounter() {
    waCounter.textContent = `${waMessage.value.length} / 250`;
  }

  function sendWhatsApp(e) {
    e.preventDefault();

    const name = document.getElementById('wa-name').value;
    const email = document.getElementById('wa-email').value;
    const message = waMessage.value;

    const text = `Hola, soy ${name}\n${email}\n\n${message}`;

    window.open(`https://wa.me/56956387784?text=${encodeURIComponent(text)}`, '_blank');
  }

  waToggle.addEventListener('click', () => {
    openChat('Hola, quiero contactar con AVAI');
  });

  waClose.addEventListener('click', closeChat);
  waMessage.addEventListener('input', updateCounter);
  waForm.addEventListener('submit', sendWhatsApp);

  window.openWhatsApp = openChat;
}
