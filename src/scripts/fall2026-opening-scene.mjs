const dialog = document.querySelector('[data-opening-scene]');

if (dialog && typeof dialog.showModal === 'function') {
  const screens = [...dialog.querySelectorAll('[data-opening-screen]')];
  const next = dialog.querySelector('[data-opening-next]');
  const begin = dialog.querySelector('[data-opening-begin]');
  const skip = dialog.querySelector('[data-opening-skip]');
  const counter = dialog.querySelector('[data-opening-counter]');
  const body = dialog.querySelector('[data-opening-body]');
  const companionCurrent = dialog.querySelector('[data-companion-current]');
  const destination = dialog.dataset.destination || null;
  const studentKey = dialog.dataset.studentKey || 'desn368.studentName';
  const nextLabel = next.textContent;
  // The first screen that asks for a name. Skip lands there; the name screens themselves have no Skip.
  const firstNameScreen = screens.findIndex((screen) => screen.hasAttribute('data-opening-name'));
  const NAME = /^\p{L}[\p{L} -]*$/u;
  let current = 0;
  let opener = null;

  function studentName() {
    try {
      return localStorage.getItem(studentKey) || '';
    } catch {
      return '';
    }
  }

  function companionNamed() {
    const text = companionCurrent ? companionCurrent.textContent.trim() : '';
    return text !== '' && text !== 'not named yet';
  }

  function named(screen) {
    const kind = screen.getAttribute('data-opening-name');
    if (kind === 'companion') return companionNamed();
    if (kind === 'student') return studentName() !== '';
    return true;
  }

  function fillEcho() {
    const name = studentName();
    dialog.querySelectorAll('[data-student-echo]').forEach((span) => { span.textContent = name || 'friend'; });
    dialog.querySelectorAll('[data-student-current]').forEach((surface) => { surface.textContent = name || 'not given yet'; });
    dialog.querySelectorAll('input[name="studentName"]').forEach((input) => { input.value = name; });
  }

  function refresh() {
    const screen = screens[current];
    const last = current === screens.length - 1;
    next.hidden = last;
    begin.hidden = !last;
    skip.hidden = firstNameScreen === -1 ? last : current >= firstNameScreen;
    next.disabled = !named(screen);
    next.textContent = screen.getAttribute('data-opening-label') || nextLabel;
  }

  function showScreen(index) {
    current = index;
    screens.forEach((screen, position) => { screen.hidden = position !== current; });
    refresh();
    counter.textContent = `${current + 1} of ${screens.length}`;
    body.scrollTop = 0;
    screens[current].querySelector('[data-opening-text]').focus({ preventScroll: true });
  }

  function openScene(trigger) {
    opener = trigger;
    fillEcho();
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

  function skipAction() {
    if (firstNameScreen !== -1 && current < firstNameScreen) showScreen(firstNameScreen);
    else if (current === screens.length - 1) finish();
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
      openScene(link);
    });
  });

  document.querySelectorAll('[data-opening-replay]').forEach((button) => {
    button.addEventListener('click', () => openScene(button));
    button.hidden = false;
  });
  next.addEventListener('click', () => {
    if (next.disabled) return;
    if (current < screens.length - 1) showScreen(current + 1);
  });
  begin.addEventListener('click', finish);
  skip.addEventListener('click', skipAction);
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    skipAction();
  });

  // The passport script saves the companion's name and rewrites this surface; Next follows it.
  if (companionCurrent) new MutationObserver(refresh).observe(companionCurrent, { childList: true, characterData: true, subtree: true });

  dialog.querySelectorAll('[data-student-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = form.querySelector('input[name="studentName"]');
      const status = form.closest('[data-student-name]')?.querySelector('[data-student-status]');
      const name = (input?.value || '').trim().replace(/\s+/gu, ' ');
      if (Array.from(name).length > 24) {
        if (status) status.textContent = 'That name is longer than 24 letters.';
        return;
      }
      if (name !== '' && !NAME.test(name)) {
        if (status) status.textContent = 'Use letters, spaces and hyphens only.';
        return;
      }
      try {
        if (name) localStorage.setItem(studentKey, name);
        else localStorage.removeItem(studentKey);
      } catch {
        // Storage is optional; the scene still plays.
      }
      fillEcho();
      refresh();
      if (status) status.textContent = name ? 'Saved in this browser.' : 'The name is cleared.';
    });
  });

  fillEcho();
}
