import manifest from '../courseManifest.json';

// Course 1 (DESN 368) weeks are driven by the Canvas-synced manifest, so a single
// data-driven component renders every week. No per-week .astro files to maintain.

export type CourseOneWeek = {
  key: string;
  number: number;
  title: string;
  items: any[];
};

export const COURSE_ONE_WEEKS = manifest.weeks as CourseOneWeek[];

const WEEK_BY_KEY: Record<string, CourseOneWeek> = Object.fromEntries(
  COURSE_ONE_WEEKS.map((w) => [w.key, w]),
);

export const COURSE_ONE_WEEK_SLUGS = COURSE_ONE_WEEKS.map((w) => w.key);

export function isCourseOneWeekSlug(value: string | undefined | null): boolean {
  return Boolean(value && value in WEEK_BY_KEY);
}

export function getCourseOneWeek(slug: string | undefined | null): CourseOneWeek | null {
  return slug && slug in WEEK_BY_KEY ? WEEK_BY_KEY[slug] : null;
}
