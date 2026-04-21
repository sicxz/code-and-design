import Week0 from './week-0.astro';
import Week1 from './week-1.astro';
import Week2 from './week-2.astro';
import Week4 from './week-4.astro';

export const COURSE_ONE_WEEK_COMPONENTS = {
  'week-0': Week0,
  'week-1': Week1,
  'week-2': Week2,
  'week-4': Week4,
} as const;

export type CourseOneWeekSlug = keyof typeof COURSE_ONE_WEEK_COMPONENTS;

export function isCourseOneWeekSlug(value: string | undefined | null): value is CourseOneWeekSlug {
  return Boolean(value && value in COURSE_ONE_WEEK_COMPONENTS);
}
