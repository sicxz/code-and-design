import course2Data from '../data/course-data.json';
import course1Manifest from '../course-pages/course-1/courseManifest.json';

export type CourseId = '1' | '2';
export type CourseThemeId = CourseId;

type CourseProject = {
  slug: string;
  title: string;
  path?: string;
  checklist?: string;
  contentDir?: string;
};

type CourseWeek = {
  slug: string;
  title: string;
  route: string;
};

export type CourseDefinition = {
  id: string;
  themeId: CourseThemeId;
  title: string;
  courseCode: string;
  term: string;
  subtitle: string;
  canvasUrl: string;
  milanoteUrl: string;
  repoUrl: string;
  studentCount: string;
  weekCount: number;
  workload: string;
  syllabusPath: string;
  assignmentsPath: string;
  homePath: string;
  styleGuidePath?: string;
  assignments: CourseProject[];
  weeks: CourseWeek[];
};

type Course2ProjectSource = {
  name: string;
  path: string;
  checklist: string;
  contentDir?: string;
};

type Course2WeekSource = {
  week: number;
  title: string;
  route: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const course2Projects = (course2Data.projects as Course2ProjectSource[]).map((project) => ({
  slug: slugify(project.name),
  title: project.name,
  path: project.path,
  checklist: project.checklist,
  contentDir: project.contentDir,
}));

const course2Weeks = (course2Data.weeks as Course2WeekSource[]).map((week) => ({
  slug: `week-${week.week}`,
  title: week.title,
  route: week.route,
}));

const course1Weeks: CourseWeek[] = (course1Manifest.weeks as Array<{ key: string; number: number; title: string }>).map(
  (week) => ({
    slug: week.key,
    title:
      week.number === 0
        ? 'Setup & Onboarding'
        : `Week ${week.number}: ${(week.title || '').replace(/^week\s*\d+\s*:?\s*/i, '').trim() || `Week ${week.number}`}`,
    route: `/1/weeks/${week.key}`,
  }),
);

export const COURSE_REGISTRY: Record<CourseId, CourseDefinition> = {
  '1': {
    id: '1',
    themeId: '1',
    title: 'DESN368: Code+Design 1',
    courseCode: 'DESN368',
    term: 'Spring 2026',
    subtitle: 'Brick by brick. Tag by tag. Source-level fluency.',
    canvasUrl: 'https://canvas.ewu.edu/courses/1907214',
    milanoteUrl: 'https://app.milanote.com/1W6e931MhvTVaN?p=1kaC1j7112i',
    repoUrl: 'https://github.com/sicxz/desn368-f25',
    studentCount: '14 students',
    weekCount: course1Weeks.length,
    workload: '5 hours/week in class · 10 hours/week at home',
    homePath: '/1',
    syllabusPath: '/1/syllabus',
    assignmentsPath: '/1/assignments',
    styleGuidePath: '/1/style-guide',
    assignments: [
      { slug: 'overview', title: 'Assignment Overview' },
      { slug: 'brief', title: 'Design Brief' },
      { slug: 'requirements', title: 'Code Requirements' },
      { slug: 'goals', title: 'Stretch Goals' },
    ],
    weeks: course1Weeks,
  },
  '2': {
    id: '2',
    themeId: '2',
    title: 'DESN378: Code+Design 2',
    courseCode: 'DESN378',
    term: 'Winter 2026',
    subtitle: 'Sense. Respond. Adapt.',
    canvasUrl: 'https://canvas.ewu.edu/courses/1858410',
    milanoteUrl: 'https://app.milanote.com/1Vycx91Ziu4g2D?p=bneQoS8Q1HM',
    repoUrl: 'https://github.com/sicxz/DESN-378-code-design-2',
    studentCount: '22 students',
    weekCount: course2Weeks.length,
    workload: '5 hours/week in class · 10 hours/week at home',
    homePath: '/2',
    syllabusPath: '/2/syllabus',
    assignmentsPath: '/2/assignments',
    styleGuidePath: '/2/style-guide',
    assignments: course2Projects,
    weeks: course2Weeks,
  },
};

export const ARCHIVED_COURSE_REGISTRY: Record<string, CourseDefinition> = {
  '1-fall-2025': {
    id: '1-fall-2025',
    themeId: '1',
    title: 'DESN368: Code+Design 1',
    courseCode: 'DESN368',
    term: 'Fall 2025 Archive',
    subtitle: 'Archived course site for Fall 2025.',
    canvasUrl: 'https://canvas.ewu.edu/courses/1839909',
    milanoteUrl: 'https://app.milanote.com/1UHeqL1Wevfm3F?p=jHMkPcMB5W4',
    repoUrl: 'https://github.com/sicxz/desn368-f25',
    studentCount: '11 students',
    weekCount: 11,
    workload: '5 hours/week in class · 10 hours/week at home',
    homePath: '/1-fall-2025',
    syllabusPath: '/1-fall-2025/syllabus',
    assignmentsPath: '/1-fall-2025/assignments',
    assignments: [
      { slug: 'overview', title: 'Assignment Overview' },
      { slug: 'brief', title: 'Design Brief' },
      { slug: 'requirements', title: 'Code Requirements' },
      { slug: 'goals', title: 'Stretch Goals' },
    ],
    weeks: [
      { slug: 'week-0', title: 'Week 0: Setup', route: '/1-fall-2025/weeks/week-0' },
      { slug: 'week-1', title: 'Week 1: HTML Fundamentals & Internet Basics', route: '/1-fall-2025/weeks/week-1' },
      { slug: 'week-2', title: 'Week 2: From Cloud to Code', route: '/1-fall-2025/weeks/week-2' },
    ],
  },
};

export function isCourseId(value: string | undefined | null): value is CourseId {
  return value === '1' || value === '2';
}

export function getCourse(courseId: string | undefined | null) {
  if (isCourseId(courseId)) return COURSE_REGISTRY[courseId];
  return courseId ? ARCHIVED_COURSE_REGISTRY[courseId] ?? null : null;
}

export function getCourseFromPathname(pathname: string) {
  const [courseId] = pathname.split('/').filter(Boolean);
  return getCourse(courseId);
}

export function withCoursePrefix(courseId: CourseId, path = '') {
  if (!path || path === '/') return `/${courseId}`;
  return `/${courseId}${path.startsWith('/') ? path : `/${path}`}`;
}
