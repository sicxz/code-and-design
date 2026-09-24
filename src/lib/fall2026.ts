import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { marked, Renderer } from 'marked';
import data from '../data/fall2026/course.json';
import outcomeData from '../data/fall2026/outcomes.json';

export const fall = data;
export const outcomes = outcomeData;
export type WeekOutcomes = (typeof outcomes.weeks)[keyof typeof outcomes.weeks];
export const getWeekOutcomes = (weekId: string): WeekOutcomes | undefined =>
  (outcomes.weeks as Record<string, WeekOutcomes>)[weekId];
export function assignmentHref(item: string): string | null {
  return fall.assignments.some(assignment => assignment.id === item)
    ? `/1/assignments/${item}/`
    : null;
}
const contentRoot = resolve('src/content/fall2026');
const lessonCards = {
  'Try this first.': { kind: 'do', label: 'Try this first', icon: '<path d="m9 5 10 7-10 7Z" />' },
  'Aside.': { kind: 'note', label: 'Aside', icon: '<circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7v1" />' },
  'Check.': { kind: 'check', label: 'Check', icon: '<path d="m5 12 4 4L19 6" />' },
  'Draft for instructor review.': { kind: 'draft', label: 'Draft for instructor review', icon: '<path d="m12 3 10 18H2ZM12 9v5M12 17v1" />' },
};

// One renderer for Markdown files and the draft notes placed by the templates.
export function renderLessonMarkdown(markdown: string): string {
  const renderer = new Renderer();
  const renderLink = renderer.link;
  renderer.link = function (token) {
    const html = renderLink.call(this, token);
    return token.href.startsWith('https://canvas.ewu.edu/')
      ? html.replace('<a ', '<a target="_blank" rel="noopener noreferrer" ')
      : html;
  };
  renderer.blockquote = function ({ tokens }) {
    const html = this.parser.parse(tokens);
    const first = html.match(/^<p><strong>([^<]+)<\/strong>/);
    const card = first && Object.hasOwn(lessonCards, first[1])
      ? lessonCards[first[1] as keyof typeof lessonCards] : undefined;
    if (!card || !first) return `<blockquote>\n${html}</blockquote>\n`;
    const body = html.replace(first[0], '<p>').replace(/^<p>\s*<\/p>\s*/, '');
    return `<aside class="card card-${card.kind}" data-card="${card.kind}" aria-label="${card.label}">\n`
      + `<p class="card-label"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${card.icon}</svg><span>${card.label}</span></p>\n`
      + `${body}</aside>\n`;
  };
  return marked.parse(markdown, { async: false, renderer }) as string;
}

export function readLesson(path: string): string {
  const file = resolve(contentRoot, path);
  if (!file.startsWith(contentRoot + '/')) throw new Error('Content path leaves the course directory');
  return renderLessonMarkdown(readFileSync(file, 'utf8'));
}
const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
export function displayDate(date: string): string {
  return dateFormatter.format(new Date(date + 'T12:00:00Z'));
}
export const groupLabel = (id: string) => fall.grading.find(group => group.id === id)?.label ?? id;
export const isWeekReleased = (weekId: string): boolean => fall.weeks.some(week => week.id === weekId && week.released === true);
export const opensLabel = (isoDate: string): string => new Date(`${isoDate}T12:00:00Z`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' });

export function displayTime(time = "23:59"): string {
  const [hour, minute] = time.split(":").map(Number);
  return `${hour % 12 || 12}${minute ? ":" + String(minute).padStart(2, "0") : ""} ${hour < 12 ? "a.m." : "p.m."}`;
}

// The lesson registry supplements the existing weekly course data.
import registry from '../data/fall2026/lessons.json';
import journey from '../data/fall2026/opening-journey.json';

export type LessonType = keyof typeof registry.types;
export interface CanvasTurnIn {
  title: string;
  url: string;
  instruction: string;
}
export interface ModuleLesson {
  slug: string;
  title: string;
  type: LessonType;
  minutes: number;
  canvasCode: string;
  canvasCategory: string;
  summary: string;
  file: string;
  journeySteps: string[];
  story: boolean;
  draft: string | null;
  submission?: CanvasTurnIn;
}
export interface LessonModule {
  intro: string;
  lessons: ModuleLesson[];
}
export type CourseWeek = typeof fall.weeks[number];
export type JourneyStep = typeof journey.steps[number];
export const lessonTypes = registry.types;
export const lessonModules: Record<string, LessonModule> = registry.modules as Record<string, LessonModule>;
export const getLessonModule = (weekId: string): LessonModule | undefined => lessonModules[weekId];
export function weekLessonCounts(weekId: string, modules = lessonModules): { count: number; byType: Partial<Record<LessonType, number>> } | null {
  const module = modules[weekId];
  if (!module) return null;
  const byType: Partial<Record<LessonType, number>> = {};
  for (const lesson of module.lessons) byType[lesson.type] = (byType[lesson.type] ?? 0) + 1;
  return { count: module.lessons.length, byType };
}
export const lessonHref = (weekId: string, slug: string): string => `/1/weeks/${weekId}/${slug}/`;
export function lessonJourneySteps(lesson: ModuleLesson): JourneyStep[] {
  return lesson.journeySteps.map(id => {
    const step = journey.steps.find(step => step.id === id);
    if (!step) throw new Error(`Unknown journey step: ${id}`);
    return step;
  });
}

// Keep the required draft note in the Markdown, but place it after the body
// on the lesson page. Check the registry and content agree before moving it.
export function readModuleLesson(lesson: ModuleLesson): string {
  const html = readLesson(lesson.file).trimEnd();
  if (!lesson.draft) return html;
  const note = renderLessonMarkdown(`> **Draft for instructor review.** Waits on: ${lesson.draft}`).trimEnd();
  if (!html.endsWith(note)) throw new Error(`Draft note differs from registry: ${lesson.file}`);
  return html.slice(0, -note.length).trimEnd();
}
