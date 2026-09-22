export const PASSPORT_FORMAT = 'desn368-passport';
export const PASSPORT_VERSION = 1;
export const PASSPORT_TERM = '2026-fall';
export const PASSPORT_NOTE = 'Self-reported place markers. Not a grade or a record of completion.';
export const STORAGE_KEY = 'desn368.passport.v1';
export const FILE_NAME = 'desn368-passport.json';

const LESSON_KEY = /^week-(?:[0-9]|10)\/[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MARKER_DATE = /^\d{4}-\d{2}-\d{2}$/;
const NAME_CHARACTERS = /^\p{L}[\p{L} -]*$/u;
const ISO_TIMESTAMP = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

function sortedCompleted(completed) {
  return Object.fromEntries(Object.entries(completed).sort(([a], [b]) => a.localeCompare(b)));
}

function passportWith(passport, changes = {}) {
  return {
    format: PASSPORT_FORMAT,
    version: PASSPORT_VERSION,
    term: PASSPORT_TERM,
    companionName: changes.companionName ?? passport.companionName,
    completed: sortedCompleted(changes.completed ?? passport.completed),
    savedAt: changes.savedAt ?? passport.savedAt,
    saveCount: changes.saveCount ?? passport.saveCount,
    note: PASSPORT_NOTE,
  };
}

function isLessonKey(key) {
  return typeof key === 'string' && LESSON_KEY.test(key);
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    && Object.getPrototypeOf(value) === Object.prototype;
}

function isMarkerDate(value) {
  if (typeof value !== 'string' || !MARKER_DATE.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function isIsoTimestamp(value) {
  if (typeof value !== 'string' || !ISO_TIMESTAMP.test(value)) return false;
  const date = new Date(value);
  return !Number.isNaN(date.getTime()) && date.toISOString() === value;
}

export function emptyPassport(now) {
  return {
    format: PASSPORT_FORMAT,
    version: PASSPORT_VERSION,
    term: PASSPORT_TERM,
    companionName: '',
    completed: {},
    savedAt: now.toISOString(),
    saveCount: 0,
    note: PASSPORT_NOTE,
  };
}

export function isEmptyPassport(passport) {
  return passport.companionName === '' && Object.keys(passport.completed).length === 0;
}

export function normalizeName(text) {
  if (typeof text !== 'string') return { ok: false, reason: 'characters' };
  const name = text.trim().replace(/\s+/gu, ' ');
  if (Array.from(name).length > 24) return { ok: false, reason: 'too-long' };
  if (name !== '' && !NAME_CHARACTERS.test(name)) return { ok: false, reason: 'characters' };
  return { ok: true, name };
}

export function setName(passport, text, now) {
  const normalized = normalizeName(text);
  if (!normalized.ok) return normalized;
  return {
    ok: true,
    passport: passportWith(passport, {
      companionName: normalized.name,
      savedAt: now.toISOString(),
    }),
  };
}

export function markComplete(passport, key, now) {
  if (!isLessonKey(key)) throw new RangeError(`Invalid lesson key: ${String(key)}`);
  return passportWith(passport, {
    completed: {
      ...passport.completed,
      [key]: passport.completed[key] ?? now.toISOString().slice(0, 10),
    },
    savedAt: now.toISOString(),
  });
}

export function unmarkComplete(passport, key, now) {
  if (!isLessonKey(key)) throw new RangeError(`Invalid lesson key: ${String(key)}`);
  const completed = { ...passport.completed };
  delete completed[key];
  return passportWith(passport, { completed, savedAt: now.toISOString() });
}

export function serializePassport(passport, now) {
  const saved = passportWith(passport, {
    savedAt: now.toISOString(),
    saveCount: passport.saveCount + 1,
  });
  return { text: `${JSON.stringify(saved, null, 2)}\n`, passport: saved };
}

export function parsePassport(text) {
  if (typeof text !== 'string') return { ok: false, reason: 'not-json' };
  if (text.length > 100000) return { ok: false, reason: 'too-large' };

  let value;
  try {
    value = JSON.parse(text);
  } catch {
    return { ok: false, reason: 'not-json' };
  }

  if (!isPlainObject(value) || value.format !== PASSPORT_FORMAT) {
    return { ok: false, reason: 'not-a-passport' };
  }
  if (!Number.isInteger(value.version) || value.version < 1) {
    return { ok: false, reason: 'bad-version' };
  }
  if (value.version > PASSPORT_VERSION) return { ok: false, reason: 'newer-version' };
  if (value.term !== PASSPORT_TERM) return { ok: false, reason: 'other-term' };

  const normalizedName = normalizeName(value.companionName);
  const completedIsValid = isPlainObject(value.completed)
    && Object.entries(value.completed).every(([key, date]) => isLessonKey(key) && isMarkerDate(date));
  const fieldsAreValid = normalizedName.ok
    && normalizedName.name === value.companionName
    && completedIsValid
    && isIsoTimestamp(value.savedAt)
    && Number.isInteger(value.saveCount)
    && value.saveCount >= 0
    && typeof value.note === 'string';
  if (!fieldsAreValid) return { ok: false, reason: 'bad-fields' };

  return {
    ok: true,
    passport: {
      format: PASSPORT_FORMAT,
      version: PASSPORT_VERSION,
      term: PASSPORT_TERM,
      companionName: value.companionName,
      completed: sortedCompleted(value.completed),
      savedAt: value.savedAt,
      saveCount: value.saveCount,
      note: PASSPORT_NOTE,
    },
  };
}

export function comparePassports(a, b) {
  const aKeys = Object.keys(a.completed).sort();
  const bKeys = Object.keys(b.completed).sort();
  return a.companionName === b.companionName
    && aKeys.length === bKeys.length
    && aKeys.every((key, index) => key === bKeys[index])
    ? 'same'
    : 'different';
}

export function mergePassports(a, b, now) {
  const completed = { ...a.completed };
  for (const [key, date] of Object.entries(b.completed)) {
    completed[key] = completed[key] && completed[key] < date ? completed[key] : date;
  }

  const newer = a.savedAt > b.savedAt ? a : b;
  const other = newer === a ? b : a;
  return passportWith(newer, {
    companionName: newer.companionName || other.companionName,
    completed,
    savedAt: now.toISOString(),
    saveCount: Math.max(a.saveCount, b.saveCount),
  });
}
