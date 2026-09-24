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
import lessonRegistry from '../data/fall2026/lessons.json';
import openingScene from '../data/fall2026/opening-scene.json';

const STORAGE_MESSAGE = 'This browser is not saving. Export before you close this tab.';
const LAST_OPENED_KEY = 'desn368.last-opened.v1';
const NEXT_UNDO_KEY = 'desn368.next-undo.v1';
const modules = lessonRegistry.modules;
const lessonKeys = new Set(Object.entries(modules).flatMap(([weekId, module]) => module.lessons.map((lesson) => `${weekId}/${lesson.slug}`)));
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

function weekLessons(weekId) {
  return modules[weekId]?.lessons ?? [];
}

function lessonByKey(key) {
  const [weekId, slug] = key.split('/');
  return weekLessons(weekId).find((lesson) => lesson.slug === slug);
}

function lessonHref(weekId, slug) {
  return `/1/weeks/${weekId}/${slug}/`;
}

function readLastOpened() {
  try {
    const value = localStorage.getItem(LAST_OPENED_KEY);
    return value && lessonKeys.has(value) ? value : null;
  } catch {
    return null;
  }
}

function recordLastOpened() {
  const key = document.querySelector('[data-current-lesson]')?.dataset.currentLesson;
  if (!lessonKeys.has(key)) return;
  try {
    localStorage.setItem(LAST_OPENED_KEY, key);
  } catch {
    // Place markers still work in memory if storage is unavailable.
  }
}

function readNextUndo() {
  try {
    const value = sessionStorage.getItem(NEXT_UNDO_KEY);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function clearNextUndo() {
  try {
    sessionStorage.removeItem(NEXT_UNDO_KEY);
  } catch {
    // The notice is also cleared in the current document.
  }
}

function writeNextUndo(key, destination) {
  try {
    sessionStorage.setItem(NEXT_UNDO_KEY, JSON.stringify({ key, destination }));
  } catch {
    // Completion remains reversible through Mark as complete and the route.
  }
}

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
    localStorage.removeItem(LAST_OPENED_KEY);
    localStorage.removeItem(openingScene.studentNameKey);
    clearNextUndo();
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
    button.textContent = done ? '✓ Marked complete · Undo' : 'Mark as complete';
  });
}

function updateLessonTrees() {
  document.querySelectorAll('[data-lesson-tree]').forEach((tree) => {
    const hasOpenLesson = Boolean(tree.querySelector('[aria-current="page"]'));
    const target = hasOpenLesson ? null : resumeTarget(tree.dataset.weekId);
    tree.querySelectorAll('li[data-lesson-key]').forEach((row, index) => {
      const done = Object.hasOwn(passport.completed, row.dataset.lessonKey);
      const current = row.classList.contains('current') || row.querySelector('[aria-current="page"]');
      const resumeHere = target && index === target.index;
      row.classList.toggle('is-done', done);
      if (target) {
        row.dataset.emphasis = resumeHere ? 'next' : 'none';
        let cue = row.querySelector('.tree-next');
        if (resumeHere) {
          if (!cue) {
            cue = document.createElement('span');
            cue.className = 'tree-next';
            row.querySelector('.lesson-link')?.append(cue);
          }
          cue.textContent = target.allMarked ? 'Review here →' : target.hasStarted ? 'Continue here →' : 'Start here →';
        } else {
          cue?.remove();
        }
      }
      const status = row.querySelector('.lesson-sr-only');
      if (status) status.textContent = `${current ? 'You are here. ' : ''}${done ? 'Marked complete on this site. ' : current ? '' : 'Not marked. '}`;
    });
  });
}

function updateWeekProgress() {
  document.querySelectorAll('[data-week-progress]').forEach((surface) => {
    const weekId = surface.dataset.weekProgress;
    const lessons = weekLessons(weekId);
    const done = lessons.filter((lesson) => Object.hasOwn(passport.completed, `${weekId}/${lesson.slug}`)).length;
    const progress = surface.querySelector('progress');
    const label = surface.querySelector('.progress-label');
    if (!progress || !label || !lessons.length) return;
    const total = lessons.length;
    progress.max = total;
    progress.value = done;
    progress.setAttribute('aria-label', `Week ${surface.dataset.weekNumber}: ${done} of ${total} lessons marked complete on this site`);
    label.textContent = surface.dataset.progressFormat === 'fraction'
      ? `${done}/${total}`
      : surface.dataset.progressFormat === 'percent'
        ? `${done} of ${total} lessons marked here`
        : `${done} of ${total} complete`;
    const percent = Math.round((done / total) * 100);
    surface.querySelectorAll('[data-progress-percent]').forEach((node) => { node.textContent = `${percent}% complete`; });
  });
  document.querySelectorAll('.module-drawer > summary [data-progress-percent]').forEach((node) => {
    const weekId = node.dataset.progressPercent;
    const lessons = weekLessons(weekId);
    if (!lessons.length) return;
    const done = lessons.filter((lesson) => Object.hasOwn(passport.completed, `${weekId}/${lesson.slug}`)).length;
    node.textContent = `${Math.round((done / lessons.length) * 100)}% complete`;
  });
}

function resumeTarget(weekId) {
  const lessons = weekLessons(weekId);
  if (!lessons.length) return null;
  const lastOpened = readLastOpened();
  const [lastWeek, lastSlug] = lastOpened?.split('/') ?? [];
  const lastIndex = lastWeek === weekId ? lessons.findIndex((lesson) => lesson.slug === lastSlug) : -1;
  const marked = (lesson) => Object.hasOwn(passport.completed, `${weekId}/${lesson.slug}`);
  let index = lastIndex >= 0 && !marked(lessons[lastIndex]) ? lastIndex : -1;
  if (index < 0 && lastIndex >= 0) index = lessons.findIndex((lesson, position) => position > lastIndex && !marked(lesson));
  if (index < 0) index = lessons.findIndex((lesson) => !marked(lesson));
  if (index < 0) index = lastIndex >= 0 ? lastIndex : lessons.length - 1;
  return { lesson: lessons[index], index, total: lessons.length, allMarked: lessons.every(marked), hasStarted: lastIndex >= 0 || lessons.some(marked) };
}

function makeTypeBadge(type) {
  const badge = document.createElement('span');
  badge.className = `badge badge-${type}`;
  badge.dataset.lessonType = type;
  const node = document.createElement('span');
  node.className = `type-node node-${type}`;
  node.setAttribute('aria-hidden', 'true');
  badge.append(node, lessonRegistry.types[type].label);
  return badge;
}

function updateResumeLinks() {
  document.querySelectorAll('[data-week-resume]').forEach((surface) => {
    const weekId = surface.dataset.weekResume;
    const target = resumeTarget(weekId);
    if (!target) return;
    const { lesson, index, total, allMarked, hasStarted } = target;
    const weekNumber = weekId.replace('week-', '');
    const href = lessonHref(weekId, lesson.slug);
    const heading = surface.querySelector('#module-resume-title, [data-resume-title]');
    const position = surface.querySelector('[data-resume-position]');
    const state = surface.querySelector('[data-resume-state]');
    const description = surface.querySelector('[data-resume-description]');
    if (heading) heading.textContent = `${allMarked ? 'Review' : hasStarted ? 'Continue with' : 'Start with'} ${lesson.title}`;
    if (position) position.textContent = `Week ${weekNumber} · Lesson ${index + 1} of ${total}`;
    if (state) state.textContent = allMarked ? 'Review' : hasStarted ? 'Continue' : 'Start';
    const badge = surface.querySelector('.now-row [data-lesson-type]');
    if (badge) badge.replaceWith(makeTypeBadge(lesson.type));
    const nextList = surface.querySelector('.next-row ol');
    if (nextList) {
      nextList.start = index + 2;
      nextList.replaceChildren();
      const following = weekLessons(weekId).slice(index + 1, index + 3);
      if (!following.length) {
        const item = document.createElement('li');
        item.textContent = 'You are at the end of this week’s route.';
        nextList.append(item);
      }
      following.forEach((nextLesson, offset) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = lessonHref(weekId, nextLesson.slug);
        const number = document.createElement('span');
        number.className = 'lesson-number';
        number.textContent = String(index + offset + 2);
        link.append(number, ` ${nextLesson.title}`);
        item.append(makeTypeBadge(nextLesson.type), link);
        nextList.append(item);
      });
    }
    if (description) description.textContent = allMarked
      ? 'All lessons are marked here. Reopen the route whenever you need it. Check Canvas for submissions.'
      : hasStarted ? 'Pick up at this lesson. You can open any other lesson from the route below.'
        : 'Open the first lesson. You can return to any lesson from the route below.';
    surface.querySelectorAll('[data-resume-link]').forEach((link) => {
      link.href = href;
      link.innerHTML = `${allMarked ? 'Review lesson' : hasStarted ? 'Continue lesson' : 'Start lesson'} <span aria-hidden="true">→</span>`;
    });
  });
  const target = resumeTarget('week-0');
  if (target) document.querySelectorAll('[data-opening-start]').forEach((link) => {
    link.href = lessonHref('week-0', target.lesson.slug);
    const action = link.dataset.openingLabel === 'lesson'
      ? `${target.allMarked ? 'Review' : target.hasStarted ? 'Continue' : 'Start'} lesson ${target.index + 1}`
      : target.allMarked ? 'Review Week 0' : target.hasStarted ? 'Continue Week 0' : 'Start here: Week 0';
    link.innerHTML = `${action} <span aria-hidden="true">→</span>`;
    link.setAttribute('aria-label', `${action}: ${target.lesson.title}`);
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
  updateResumeLinks();
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
    hideCompletionNotice();
    const key = button.dataset.lessonKey;
    const next = Object.hasOwn(passport.completed, key)
      ? unmarkComplete(passport, key, new Date())
      : markComplete(passport, key, new Date());
    changePassport(next);
  });
});

function hideCompletionNotice(restoreFocus = false) {
  const notice = document.querySelector('[data-completion-notice]');
  if (!notice) return;
  notice.hidden = true;
  clearNextUndo();
  if (restoreFocus) document.querySelector('[data-lesson-heading]')?.focus();
}

function showCompletionNotice() {
  const notice = document.querySelector('[data-completion-notice]');
  const pending = readNextUndo();
  if (!pending) return;
  if (pending.destination !== window.location.pathname || !lessonKeys.has(pending.key)
    || !Object.hasOwn(passport.completed, pending.key) || !notice) {
    clearNextUndo();
    return;
  }
  const lesson = lessonByKey(pending.key);
  const message = notice.querySelector('[data-completion-notice-copy]');
  if (message) message.textContent = `${lesson?.title ?? 'Previous lesson'} marked complete on this site.`;
  notice.hidden = false;
  document.querySelector('[data-lesson-heading]')?.focus();
}

document.querySelectorAll('a[data-next-up][data-lesson-key]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const key = link.dataset.lessonKey;
    if (!lessonKeys.has(key)) return;
    hideCompletionNotice();
    if (Object.hasOwn(passport.completed, key)) return;
    changePassport(markComplete(passport, key, new Date()));
    writeNextUndo(key, new URL(link.href).pathname);
  });
});

document.querySelectorAll('[data-undo-next]').forEach((button) => {
  button.addEventListener('click', () => {
    const pending = readNextUndo();
    if (!pending || !lessonKeys.has(pending.key) || pending.destination !== window.location.pathname) return;
    if (Object.hasOwn(passport.completed, pending.key)) changePassport(unmarkComplete(passport, pending.key, new Date()));
    hideCompletionNotice(true);
  });
});

document.querySelectorAll('[data-dismiss-completion]').forEach((button) => {
  button.addEventListener('click', () => hideCompletionNotice(true));
});

const lessonDrawer = document.querySelector('.module-drawer');
const contentsDrawer = document.querySelector('.lesson-contents__drawer');
if (lessonDrawer || contentsDrawer) {
  const narrow = window.matchMedia('(max-width: 950px)');
  const syncDrawers = () => {
    if (lessonDrawer) lessonDrawer.open = !narrow.matches;
    if (contentsDrawer) contentsDrawer.open = !narrow.matches;
  };
  syncDrawers();
  narrow.addEventListener('change', syncDrawers);
}

const exerciseSteps = document.querySelector('.workbench-steps');
if (exerciseSteps) {
  const phone = window.matchMedia('(max-width: 620px)');
  const syncSteps = () => { exerciseSteps.open = !phone.matches; };
  syncSteps();
  phone.addEventListener('change', syncSteps);
}

const contentLinks = [...document.querySelectorAll('.lesson-contents nav a[href^="#"]')];
if (contentLinks.length) {
  let contentsQueued = false;
  const updateContents = () => {
    contentsQueued = false;
    let active = contentLinks[0];
    for (const link of contentLinks) {
      const section = document.getElementById(link.hash.slice(1));
      if (section && section.getBoundingClientRect().top <= 180) active = link;
    }
    for (const link of contentLinks) {
      link.classList.toggle('is-active', link === active);
      if (link === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  const scheduleContents = () => {
    if (contentsQueued) return;
    contentsQueued = true;
    requestAnimationFrame(updateContents);
  };
  window.addEventListener('scroll', scheduleContents, { passive: true });
  window.addEventListener('resize', scheduleContents);
  scheduleContents();
}

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
  if (event.key === LAST_OPENED_KEY) {
    updateSurfaces();
    return;
  }
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

recordLastOpened();
updateSurfaces();
showCompletionNotice();
