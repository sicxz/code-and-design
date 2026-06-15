// Curated interactive tutorials for DESN 368 (Course 1).
// These are the hands-on, standalone tutorial experiences that live in /public
// (and the html-101 lesson series + css-selector-quest Astro routes). They are
// layered on top of the Canvas-synced assignment manifest so each week surfaces
// both its assignments AND its richest practice material — all hosted on-site.

export type TutorialLink = {
  href: string;
  title: string;
  desc: string;
  icon?: string;
  external?: boolean; // open in a new tab (standalone playground / tool)
};

// Full library, shown on the course overview so every tutorial is reachable.
export const TUTORIAL_LIBRARY: TutorialLink[] = [
  {
    href: '/1/html-101/',
    title: 'HTML 101 — Document Structure',
    desc: '7-lesson interactive series: the skeleton, nesting, attributes, classes, inline styles, and building blocks. Each lesson has a live CodePen.',
    icon: 'code',
  },
  {
    href: '/1/css-selector-quest/',
    title: 'CSS Selector Quest',
    desc: 'The Selector Guild — a story-driven game for practicing CSS selectors, pseudo-classes, and the box model in a live CodePen workspace.',
    icon: 'zap',
  },
  {
    href: '/tutorials/a-box-story/',
    title: 'The Story of the Box',
    desc: 'Hover and click elements to see their content, padding, border, and margin live. The box model, made visible.',
    icon: 'layers',
    external: true,
  },
  {
    href: '/tutorials/box-sizing/',
    title: 'box-sizing — an interactive lesson',
    desc: 'Step through how content-box vs border-box changes the way width and height are calculated.',
    icon: 'code',
    external: true,
  },
  {
    href: '/tutorials/fonts-and-google-fonts/',
    title: 'Fonts & Google Fonts',
    desc: 'How web fonts work, how to load Google Fonts, and how to apply them with CSS.',
    icon: 'file-text',
    external: true,
  },
  {
    href: '/tutorials/flexbox-tutorial/',
    title: 'Interactive Flexbox Tutorial',
    desc: 'Build a two-column layout with a sticky-sidebar workspace. Flexbox properties, demonstrated as you change them.',
    icon: 'layers',
    external: true,
  },
  {
    href: '/tutorials/p4-cutup-figma/',
    title: 'P4 Cut-Up — Figma to Semantic HTML5',
    desc: 'Translate a Figma design into clean semantic HTML5 using AI as a co-coder.',
    icon: 'code',
    external: true,
  },
  {
    href: '/tutorials/gsap-scrolltrigger-tutorial/',
    title: 'ScrollTrigger Patterns',
    desc: 'Scroll as a design material — animation patterns with GSAP ScrollTrigger.',
    icon: 'play',
    external: true,
  },
  {
    href: '/tutorials/gsap-svg-tutorial/',
    title: 'Animating SVG Icons with GSAP',
    desc: 'Prompt-first mode — animate SVG icons with GSAP and AI assistance.',
    icon: 'play',
    external: true,
  },
  {
    href: '/tutorials/switch-practice/',
    title: 'Theme Switcher — Practice Mode',
    desc: 'Practice building a light/dark theme switcher with CSS and a little JavaScript.',
    icon: 'settings',
    external: true,
  },
  {
    href: '/resources/dev-tools-fieldguide/',
    title: 'Firefox DevTools Field Guide',
    desc: 'A 9-page field guide to the browser developer tools: the inspector, the console, reading errors, and keyboard shortcuts.',
    icon: 'book',
    external: true,
  },
];

// Per-week associations (by manifest week key). Weeks not listed simply show
// their Canvas assignments without an extra tutorial block.
export const TUTORIALS_BY_WEEK: Record<string, TutorialLink[]> = {
  'week-2': [byHref('/1/html-101/')],
  'week-4': [
    byHref('/tutorials/a-box-story/'),
    byHref('/tutorials/box-sizing/'),
    byHref('/tutorials/fonts-and-google-fonts/'),
  ],
  'week-5': [byHref('/1/css-selector-quest/')],
  'week-7': [byHref('/tutorials/flexbox-tutorial/')],
  'week-9': [
    byHref('/tutorials/p4-cutup-figma/'),
    byHref('/tutorials/gsap-scrolltrigger-tutorial/'),
    byHref('/tutorials/gsap-svg-tutorial/'),
  ],
};

function byHref(href: string): TutorialLink {
  const found = TUTORIAL_LIBRARY.find((t) => t.href === href);
  if (!found) throw new Error(`Unknown tutorial href: ${href}`);
  return found;
}
