const dialog = document.querySelector('[data-course-guide]');

if (dialog instanceof HTMLDialogElement && typeof dialog.showModal === 'function') {
  const storageKey = 'desn368.fall2026.courseGuideSeen.v2';

  function openGuide() {
    if (dialog.open) return;
    dialog.showModal();
    try {
      window.localStorage.setItem(storageKey, '1');
    } catch {
      // Reopening the guide still works when storage is unavailable.
    }
  }

  document.querySelectorAll('[data-course-guide-open]').forEach((button) => {
    button.addEventListener('click', openGuide);
  });
  dialog.querySelectorAll('[data-course-guide-close]').forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });

  function openFromHash() {
    if (window.location.hash === '#course-guide') openGuide();
  }

  window.addEventListener('hashchange', openFromHash);
  if (window.location.hash === '#course-guide') {
    openGuide();
  } else {
    try {
      if (window.localStorage.getItem(storageKey) === null) {
        window.localStorage.setItem(storageKey, '1');
        openGuide();
      }
    } catch {
      // When browser storage is unavailable, the visible guide button still works.
    }
  }
}
