const dialog = document.querySelector('[data-opening-scene]');

if (dialog && typeof dialog.showModal === 'function') {
  const screens = [...dialog.querySelectorAll('[data-opening-screen]')];
  const next = dialog.querySelector('[data-opening-next]');
  const begin = dialog.querySelector('[data-opening-begin]');
  const counter = dialog.querySelector('[data-opening-counter]');
  const body = dialog.querySelector('[data-opening-body]');
  let current = 0;
  let destination = null;
  let opener = null;

  function showScreen(index) {
    current = index;
    screens.forEach((screen, position) => { screen.hidden = position !== current; });
    next.hidden = current === screens.length - 1;
    begin.hidden = !next.hidden;
    counter.textContent = `${current + 1} of ${screens.length}`;
    body.scrollTop = 0;
    screens[current].querySelector('[data-opening-text]').focus({ preventScroll: true });
  }

  function openScene(trigger, href = null) {
    opener = trigger;
    destination = href;
    // Reset before showModal so a replay never exposes the previous screen.
    showScreen(0);
    dialog.showModal();
    showScreen(0);
  }

  function finish() {
    try {
      localStorage.setItem(dialog.dataset.storageKey, '1');
    } catch {
      // Storage is optional; the route remains available.
    }
    dialog.close();
    if (destination) window.location.assign(destination);
    else opener?.focus();
  }

  document.querySelectorAll('a[data-opening-start]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      try {
        if (localStorage.getItem(dialog.dataset.storageKey) === '1') return;
      } catch {
        // If storage is unavailable, offer the scene again.
      }
      event.preventDefault();
      openScene(link, link.href);
    });
  });

  document.querySelectorAll('[data-opening-replay]').forEach((button) => {
    button.addEventListener('click', () => openScene(button));
    button.hidden = false;
  });
  next.addEventListener('click', () => {
    if (current < screens.length - 1) showScreen(current + 1);
  });
  begin.addEventListener('click', finish);
  dialog.querySelector('[data-opening-skip]').addEventListener('click', finish);
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    finish();
  });
}
