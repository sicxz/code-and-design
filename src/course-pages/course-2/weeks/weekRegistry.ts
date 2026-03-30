import courseData from '../../../data/course-data.json';
import Week1 from './week-1.astro';

export type CourseTwoWeekRecord = (typeof courseData.weeks)[number];

export const COURSE_TWO_WEEKS = courseData.weeks as CourseTwoWeekRecord[];

export const COURSE_TWO_SPECIAL_WEEK_COMPONENTS = {
  'week-1': Week1,
} as const;

export function getCourseTwoWeekData(weekSlug: string | undefined | null) {
  if (!weekSlug) return undefined;
  return COURSE_TWO_WEEKS.find((week) => `week-${week.week}` === weekSlug);
}
