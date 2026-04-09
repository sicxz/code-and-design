export type LessonMeta = {
  slug: string;
  title: string;
  description: string;
  order: number;
  prev: string | null;
  next: string | null;
  codepenUrl: string;
};

// Placeholder template URL used until each lesson has its own saved pen.
// To update: save the lesson's starter pen in CodePen, click Embed,
// copy the URL (format: https://codepen.io/<user>/embed/<slug>?default-tab=html,result)
// and replace the codepenUrl for that lesson.
const TEMPLATE = 'https://codepen.io/editor/pen?template=23ae8cdfb3e1bc9caaca1ed624990289';

export const LESSONS: LessonMeta[] = [
  {
    slug: 'html-skeleton',
    title: 'The HTML Skeleton',
    description: 'Every web page starts with the same bones. Learn the required document structure that browsers expect.',
    order: 1,
    prev: null,
    next: '/1/html-101/nesting',
    codepenUrl: TEMPLATE,
  },
  {
    slug: 'nesting',
    title: 'Nesting & Hierarchy',
    description: 'HTML elements live inside other elements. Learn how parent-child relationships shape the DOM.',
    order: 2,
    prev: '/1/html-101/html-skeleton',
    next: '/1/html-101/annotations',
    codepenUrl: TEMPLATE,
  },
  {
    slug: 'annotations',
    title: 'Annotating Your Code',
    description: 'HTML comments let you leave notes in your source code that browsers ignore.',
    order: 3,
    prev: '/1/html-101/nesting',
    next: '/1/html-101/attributes',
    codepenUrl: TEMPLATE,
  },
  {
    slug: 'attributes',
    title: 'Tagging Your Content',
    description: 'Attributes add meaning and behavior to elements — from links to images to accessibility labels.',
    order: 4,
    prev: '/1/html-101/annotations',
    next: '/1/html-101/classes-and-ids',
    codepenUrl: TEMPLATE,
  },
  {
    slug: 'classes-and-ids',
    title: 'Addressing Your Elements',
    description: 'Classes and IDs give your elements names — so CSS and links can find them precisely.',
    order: 5,
    prev: '/1/html-101/attributes',
    next: '/1/html-101/inline-styles',
    codepenUrl: TEMPLATE,
  },
  {
    slug: 'inline-styles',
    title: 'Styling from the Inside Out',
    description: 'The style attribute lets you apply CSS directly to a single element — no stylesheet needed.',
    order: 6,
    prev: '/1/html-101/classes-and-ids',
    next: '/1/html-101/building-blocks',
    codepenUrl: TEMPLATE,
  },
  {
    slug: 'building-blocks',
    title: 'Building Blocks',
    description: 'The div element is a generic container with no meaning of its own — until you give it one.',
    order: 7,
    prev: '/1/html-101/inline-styles',
    next: null,
    codepenUrl: TEMPLATE,
  },
];

export function getLessonBySlug(slug: string): LessonMeta | undefined {
  return LESSONS.find((l) => l.slug === slug);
}
