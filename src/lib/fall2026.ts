import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { marked } from 'marked';
import data from '../data/fall2026/course.json';

export const fall = data;
const contentRoot = resolve('src/content/fall2026');
export function readLesson(path: string): string {
  const file = resolve(contentRoot, path);
  if (!file.startsWith(contentRoot + '/')) throw new Error('Content path leaves the course directory');
  return marked.parse(readFileSync(file, 'utf8'), { async: false }) as string;
}
const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
export function displayDate(date: string): string {
  return dateFormatter.format(new Date(date + 'T12:00:00Z'));
}
export const groupLabel = (id: string) => fall.grading.find(group => group.id === id)?.label ?? id;

export function displayTime(time = "23:59"): string {
  const [hour, minute] = time.split(":").map(Number);
  return `${hour % 12 || 12}${minute ? ":" + String(minute).padStart(2, "0") : ""} ${hour < 12 ? "a.m." : "p.m."}`;
}
