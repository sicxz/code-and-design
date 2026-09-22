import {
  FILE_NAME,
  STORAGE_KEY,
  comparePassports,
  emptyPassport,
  isEmptyPassport,
  markComplete,
  mergePassports,
  parsePassport,
  serializePassport,
  setName,
  unmarkComplete,
} from '../lib/fall2026-passport.mjs';

const STORAGE_MESSAGE = 'This browser is not saving. Export before you close this tab.';
const importMessages = {
  'not-json': 'That file is not a Learning Passport. Nothing changed.',
  'too-large': 'That file is too large to be a Learning Passport. Nothing changed.',
  'not-a-passport': 'That file is not a Learning Passport. Nothing changed.',
  'bad-version': 'That passport file is damaged. Nothing changed.',
  'newer-version': 'That passport comes from a newer version of this site. Reload the page and try again.',
  'other-term': 'That passport belongs to a different term. Nothing changed.',
  'bad-fields': 'That passport file is damaged. Nothing changed.',
};

let storageFailed = false;
let passport = loadPassport();
let incomingPassport = null;

function loadPassport() {
  try {
    const text = localStorage.getItem(STORAGE_KEY);
    if (text === null) return emptyPassport(new Date());
    const result = parsePassport(text);
    return result.ok ? result.passport : emptyPassport(new Date());
  } catch {
    storageFailed = true;
    return emptyPassport(new Date());
  }
}

function savePassport() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(passport));
  } catch {
    storageFailed = true;
  }
}

function removePassport() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    storageFailed = true;
  }
}

function displayName(value) {
  return value || 'not named yet';
}

function displaySaved(value) {
  return isEmptyPassport(value) ? 'none yet' : new Date(value.savedAt).toLocaleString();
}

function setPassportStatus(message = '') {
  document.querySelectorAll('[data-passport-status]').forEach((status) => {
    status.textContent = storageFailed ? STORAGE_MESSAGE : message;
  });
}

function updateLessonButtons() {
  document.querySelectorAll('button[data-mark-complete][data-lesson-key]').forEach((button) => {
    const done = Object.hasOwn(passport.completed, button.dataset.lessonKey);
    button.setAttribute('aria-pressed', String(done));
    button.textContent = done ? 'Marked complete' : 'Mark as complete';
  });
}

function updateLessonTrees() {
  document.querySelectorAll('[data-lesson-tree] li[data-lesson-key]').forEach((row) => {
    const done = Object.hasOwn(passport.completed, row.dataset.lessonKey);
    const current = row.classList.contains('current') || row.querySelector('[aria-current="page"]');
    row.classList.toggle('is-done', done);
    const status = row.querySelector('.lesson-sr-only');
    if (status) status.textContent = current ? 'You are here. ' : done ? 'Marked complete. ' : 'Not started. ';
  });
}

function updateWeekProgress() {
  document.querySelectorAll('[data-week-progress]').forEach((surface) => {
    const weekId = surface.dataset.weekProgress;
    const station = surface.closest('[data-station]');
    const rows = [...(station ?? document).querySelectorAll('[data-lesson-tree] li[data-lesson-key]')]
      .filter((row) => row.dataset.lessonKey.startsWith(`${weekId}/`));
    const done = rows.filter((row) => Object.hasOwn(passport.completed, row.dataset.lessonKey)).length;
    const progress = surface.querySelector('progress');
    const label = surface.querySelector('.progress-label');
    if (!progress || !label) return;
    const total = progress.max;
    label.textContent = `${done} of ${total} complete`;
    progress.value = done;
    progress.setAttribute('aria-label', `Week ${surface.dataset.weekNumber}: ${done} of ${total} complete`);
  });
}

function updateCompanionName() {
  document.querySelectorAll('[data-companion-current]').forEach((surface) => {
    surface.textContent = displayName(passport.companionName);
  });
  document.querySelectorAll('[data-companion-form] input[name="companionName"]').forEach((input) => {
    input.value = passport.companionName;
  });
}

function updatePassportPage() {
  document.querySelectorAll('[data-passport-count]').forEach((surface) => {
    surface.textContent = String(Object.keys(passport.completed).length);
  });
  document.querySelectorAll('[data-passport-saved]').forEach((surface) => {
    surface.textContent = displaySaved(passport);
  });
}

function updateSurfaces() {
  updateLessonButtons();
  updateLessonTrees();
  updateWeekProgress();
  updateCompanionName();
  updatePassportPage();
  if (storageFailed) setPassportStatus();
}

function changePassport(nextPassport, message = '') {
  passport = nextPassport;
  savePassport();
  updateSurfaces();
  setPassportStatus(message);
}

function hideConflict() {
  document.querySelectorAll('[data-passport-conflict]').forEach((panel) => {
    panel.hidden = true;
  });
  incomingPassport = null;
}

function finishConflict(message) {
  hideConflict();
  setPassportStatus(message);
  document.querySelector('[data-passport-status]')?.focus();
}

function fillConflict(local, incoming) {
  const values = {
    '[data-conflict-local-name]': displayName(local.companionName),
    '[data-conflict-local-count]': String(Object.keys(local.completed).length),
    '[data-conflict-local-saved]': displaySaved(local),
    '[data-conflict-file-name]': displayName(incoming.companionName),
    '[data-conflict-file-count]': String(Object.keys(incoming.completed).length),
    '[data-conflict-file-saved]': displaySaved(incoming),
  };
  for (const [selector, value] of Object.entries(values)) {
    document.querySelectorAll(selector).forEach((cell) => {
      cell.textContent = value;
    });
  }
}

document.querySelectorAll('button[data-mark-complete][data-lesson-key]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.lessonKey;
    const next = Object.hasOwn(passport.completed, key)
      ? unmarkComplete(passport, key, new Date())
      : markComplete(passport, key, new Date());
    changePassport(next);
  });
});

document.querySelectorAll('[data-companion-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input[name="companionName"]');
    const status = form.closest('[data-companion-name]')?.querySelector('[data-companion-status]');
    const result = setName(passport, input?.value, new Date());
    if (!result.ok) {
      if (status) {
        status.textContent = result.reason === 'too-long'
          ? 'That name is longer than 24 letters.'
          : 'Use letters, spaces and hyphens only.';
      }
      return;
    }
    changePassport(result.passport);
    if (status) status.textContent = result.passport.companionName
      ? 'Saved in this browser.'
      : 'The name is cleared.';
  });
});

document.querySelectorAll('[data-passport-export]').forEach((button) => {
  button.addEventListener('click', () => {
    const result = serializePassport(passport, new Date());
    changePassport(result.passport, 'Exported. Submit this file to the Save Point in Canvas.');
    const url = URL.createObjectURL(new Blob([result.text], { type: 'application/json' }));
    const download = document.createElement('a');
    download.href = url;
    download.download = FILE_NAME;
    document.body.append(download);
    download.click();
    download.remove();
    URL.revokeObjectURL(url);
  });
});

document.querySelectorAll('[data-passport-import]').forEach((input) => {
  input.addEventListener('change', async () => {
    hideConflict();
    const file = input.files?.[0];
    if (!file) {
      input.value = '';
      return;
    }
    try {
      const text = await file.text();
      const result = parsePassport(text);
      if (!result.ok) {
        setPassportStatus(importMessages[result.reason]);
      } else if (isEmptyPassport(passport)) {
        changePassport(result.passport, 'Imported.');
      } else if (comparePassports(passport, result.passport) === 'same') {
        setPassportStatus('The file matches this browser. Nothing changed.');
      } else {
        incomingPassport = result.passport;
        fillConflict(passport, incomingPassport);
        const panel = document.querySelector('[data-passport-conflict]');
        if (panel) {
          panel.hidden = false;
          panel.focus();
        }
      }
    } catch {
      setPassportStatus(importMessages['not-json']);
    } finally {
      input.value = '';
    }
  });
});

document.querySelectorAll('[data-conflict-keep]').forEach((button) => {
  button.addEventListener('click', () => finishConflict('Kept this browser.'));
});

document.querySelectorAll('[data-conflict-use]').forEach((button) => {
  button.addEventListener('click', () => {
    if (incomingPassport) changePassport(incomingPassport, 'Imported.');
    finishConflict('Imported.');
  });
});

document.querySelectorAll('[data-conflict-merge]').forEach((button) => {
  button.addEventListener('click', () => {
    if (incomingPassport) changePassport(mergePassports(passport, incomingPassport, new Date()), 'Merged.');
    finishConflict('Merged.');
  });
});

document.querySelectorAll('[data-passport-clear]').forEach((button) => {
  button.addEventListener('click', () => {
    const confirm = button.parentElement?.querySelector('[data-passport-clear-confirm]');
    if (!confirm) return;
    confirm.hidden = false;
    confirm.querySelector('[data-passport-clear-no]')?.focus();
  });
});

document.querySelectorAll('[data-passport-clear-no]').forEach((button) => {
  button.addEventListener('click', () => {
    const confirm = button.closest('[data-passport-clear-confirm]');
    if (confirm) confirm.hidden = true;
    confirm?.parentElement?.querySelector('[data-passport-clear]')?.focus();
  });
});

document.querySelectorAll('[data-passport-clear-yes]').forEach((button) => {
  button.addEventListener('click', () => {
    removePassport();
    passport = emptyPassport(new Date());
    updateSurfaces();
    const confirm = button.closest('[data-passport-clear-confirm]');
    if (confirm) confirm.hidden = true;
    setPassportStatus('Removed from this browser.');
  });
});

window.addEventListener('storage', (event) => {
  if (event.key !== STORAGE_KEY) return;
  if (event.newValue === null) {
    passport = emptyPassport(new Date());
  } else {
    const result = parsePassport(event.newValue);
    passport = result.ok ? result.passport : emptyPassport(new Date());
  }
  hideConflict();
  updateSurfaces();
});

updateSurfaces();
