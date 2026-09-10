/** Catalog facts and faculty discussion proposals deliberately remain separate. */
export const catalogSource = {
  title: 'EWU 2026–27 Design course catalog',
  url: 'https://catalog.ewu.edu/course-listings/desn/',
  checkedOn: '2026-09-10',
};

export type Territory = 'foundation' | 'ux' | 'web' | 'development' | 'creative';
export type CurriculumCourse = {
  id: string;
  code: string;
  title: string;
  territory: Territory;
  status: 'catalog' | 'proposal';
  currentFocus: string;
  proposedFocus: string;
  catalogTopics: string[];
  prerequisite: string;
  proposal: string;
  evidence: string;
  sourceUrls: string[];
};

export const courses: CurriculumCourse[] = [
  {
    id: '216', code: 'DESN 216', title: 'Digital Foundations', territory: 'foundation', status: 'catalog',
    currentFocus: 'Media, files & digital culture', proposedFocus: 'Prepare the materials',
    catalogTopics: ['Digital media', 'Images and text', 'File management', 'Output preparation'],
    prerequisite: 'No prerequisite listed in the catalog.',
    proposal: 'Establish dependable file habits and preparation of visual assets. Let later courses build on these habits with discipline-specific tools.',
    evidence: 'A clearly organized set of assets that another student can open, identify, and use.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '338', code: 'DESN 338', title: 'User Experience Design 1', territory: 'ux', status: 'catalog',
    currentFocus: 'Research, information & prototypes', proposedFocus: 'Understand people',
    catalogTopics: ['UX research', 'Information architecture', 'Content strategy', 'Design ethics', 'Interactive prototypes'],
    prerequisite: 'No prerequisite listed in the catalog. DESN 368 is not a prerequisite.',
    proposal: 'Own the first encounter with user research and experience framing. Coordinate prototype language with the web sequence while preserving an independent entry into UX.',
    evidence: 'A research-informed prototype with an explanation of whose needs shaped it.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '348', code: 'DESN 348', title: 'User Experience Design 2', territory: 'ux', status: 'catalog',
    currentFocus: 'Methods & experiences beyond screens', proposedFocus: 'Investigate experiences',
    catalogTopics: ['Discovery', 'Research methods', 'Human-computer interaction', 'User testing', 'Analog and digital experiences'],
    prerequisite: 'DESN 338.',
    proposal: 'Deepen research and testing across contexts. Offer shared critiques with interaction students when a project benefits from both perspectives.',
    evidence: 'A documented change to an experience based on observed use, with reasons for the method chosen.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '458', code: 'DESN 458', title: 'User Experience Design 3', territory: 'ux', status: 'catalog',
    currentFocus: 'Partner projects & UX portfolios', proposedFocus: 'Work with real partners',
    catalogTopics: ['Community partners', 'Research', 'Testing and iteration', 'UX portfolios'],
    prerequisite: 'DESN 348.',
    proposal: 'Apply the full UX process with partners and communicate the evidence behind design decisions. Share outcomes with advanced web studios where useful.',
    evidence: 'A partner project case study tracing research, decisions, tests, and revisions.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '368', code: 'DESN 368', title: 'Web Design + Code 1', territory: 'web', status: 'catalog',
    currentFocus: 'HTML, CSS & accessible websites', proposedFocus: 'Source / structure',
    catalogTopics: ['HTML and CSS', 'Responsive design', 'Accessibility', 'GitHub', 'Figma', 'AI-assisted workflows'],
    prerequisite: 'DESN 216.',
    proposal: 'Make source-level fluency the dependable foundation: read, explain, build, debug, and publish an accessible page. Begin with manual practice, then introduce AI through explicit understanding checks.',
    evidence: 'A published portfolio, plus an independent explanation and repair of unfamiliar HTML/CSS.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '378', code: 'DESN 378', title: 'Web Design + Code 2', territory: 'web', status: 'catalog',
    currentFocus: 'Interactivity, animation & systems', proposedFocus: 'Signal / behavior',
    catalogTopics: ['JavaScript', 'SVG and Canvas', 'Design systems', 'Accessible interaction', 'Animation', 'AI-assisted coding'],
    prerequisite: 'DESN 368.',
    proposal: 'Begin with a short HTML/CSS re-entry exercise using shared structure and different visual interpretations. Then teach events, state, DOM changes, and purposeful motion while keeping source explanations visible.',
    evidence: 'An interaction that responds to input, exposes understandable state, and remains usable with a keyboard.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '468', code: 'DESN 468', title: 'Web Design + Code 3', territory: 'web', status: 'catalog',
    currentFocus: 'Components, content & production', proposedFocus: 'System / production',
    catalogTopics: ['Astro and Storybook', 'Components', 'CMS', 'Accessibility and performance', 'Collaborative version control', 'Sustainable design'],
    prerequisite: 'DESN 378.',
    proposal: 'Move from individual pages to reusable front-end systems. Make component decisions, content modeling, accessibility, performance, and collaborative review part of the same production practice.',
    evidence: 'A small published system whose components, content, and contribution process another designer can use.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '369', code: 'DESN 369', title: 'Web Development 1', territory: 'development', status: 'catalog',
    currentFocus: 'Web languages & server concepts', proposedFocus: 'Build beyond the foundation',
    catalogTopics: ['HTML and CSS', 'JavaScript', 'Interface implementation', 'Code patterns', 'Server-side programming', 'Automated deployment'],
    prerequisite: 'DESN 368.',
    proposal: 'Discuss a brief diagnostic for returning HTML/CSS skills, then give more space to program structure, deeper JavaScript, server concepts, and automated workflows. Compare assignments before deciding what repetition is useful.',
    evidence: 'An application feature whose logic the student can trace and whose deployment they can explain.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '379', code: 'DESN 379', title: 'Web Development 2', territory: 'development', status: 'catalog',
    currentFocus: 'Frameworks, APIs & databases', proposedFocus: 'Connect applications & data',
    catalogTopics: ['HTML templating', 'Frameworks and components', 'REST APIs', 'Databases', 'Static and server rendering', 'Performance'],
    prerequisite: 'DESN 369.',
    proposal: 'Make application architecture, data, and services the center of gravity. Coordinate component terminology with 468 while distinguishing interface-system design from full-stack implementation.',
    evidence: 'A working application with a clear account of where data lives and how it travels through the system.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '469', code: 'DESN 469', title: 'Web Development 3', territory: 'development', status: 'catalog',
    currentFocus: 'Full-stack delivery & workflows', proposedFocus: 'Deliver production applications',
    catalogTopics: ['Full-stack projects', 'CMS', 'Interface patterns', 'CI/CD', 'Multi-platform development', 'Technical portfolios'],
    prerequisite: 'DESN 379.',
    proposal: 'Protect the advanced development territory: complete applications, deployment pipelines, and technical project evidence. Use this expertise to inform any future advanced elective.',
    evidence: 'An application delivered through a reproducible workflow, with a technical portfolio explaining its design.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: '345', code: 'DESN 345', title: 'Digital Game Design', territory: 'creative', status: 'catalog',
    currentFocus: 'Computation through play', proposedFocus: 'Rules, systems & play',
    catalogTopics: ['Construct 3', 'Game mechanics', 'Computational thinking', 'Programming basics', 'Testing and debugging'],
    prerequisite: 'DESN 301 and DESN 326. No web-course prerequisite is listed.',
    proposal: 'Explore shared exercises about events, state, rules, and testing with Web 2 or Creative Coding. This is a teaching connection; the catalog entry remains grounded in storytelling and animation.',
    evidence: 'A playable system refined through playtesting, with an explanation of its rules and state changes.',
    sourceUrls: [catalogSource.url],
  },
  {
    id: 'creative-coding', code: 'Proposed elective', title: 'Creative Coding', territory: 'creative', status: 'proposal',
    currentFocus: 'Not a course in this draft catalog map', proposedFocus: 'Computation as creative material',
    catalogTopics: [], prerequisite: 'Not approved. Entry requirements, credits, and repeatability need faculty discussion.',
    proposal: 'Consider a repeatable studio with rotating topics: generative graphics, computational typography, data, sound, sensors, or shaders. A shared programming foundation could support different forms of expression each time.',
    evidence: 'An expressive computational work accompanied by an explanation of its rules and the choices the artist made.',
    sourceUrls: [],
  },
  {
    id: 'advanced-development', code: 'Proposed pathway', title: 'Advanced Development', territory: 'development', status: 'proposal',
    currentFocus: 'A discussion opportunity', proposedFocus: 'Deeper software & services',
    catalogTopics: [], prerequisite: 'Not approved. Placement and entry requirements are open questions.',
    proposal: 'Explore an advanced pathway or elective drawing on existing development expertise: APIs, databases, authentication, server-side architecture, testing, and deployment. No elimination, consolidation, or renumbering of 369/379/469 is proposed as a settled decision.',
    evidence: 'A production application with explicit architecture, tested behavior, and a maintainable delivery process.',
    sourceUrls: [],
  },
];

export type CurriculumRelationship = {
  from: string;
  to: string;
  type: 'official-prerequisite' | 'suggested-learning-connection';
  note: string;
  sourceUrls: string[];
};

export const relationships: CurriculumRelationship[] = [
  ...[['216', '368'], ['368', '378'], ['378', '468'], ['338', '348'], ['348', '458'], ['368', '369'], ['369', '379'], ['379', '469'], ['301', '345'], ['326', '345']].map(([from, to]) => ({
    from, to, type: 'official-prerequisite' as const,
    note: to === '345' ? 'DESN 345 requires both DESN 301 and DESN 326.' : `DESN ${to} lists DESN ${from} as a prerequisite.`,
    sourceUrls: [catalogSource.url],
  })),
  { from: '338', to: '368', type: 'suggested-learning-connection', note: 'Coordinate experience language and prototype-to-page conversations; neither direction creates a new prerequisite.', sourceUrls: [] },
  { from: '378', to: '345', type: 'suggested-learning-connection', note: 'Share ideas about events, state, feedback, and play. Preserve the current game-design entry requirements.', sourceUrls: [] },
  { from: '378', to: 'creative-coding', type: 'suggested-learning-connection', note: 'Explore how interaction knowledge might support expressive computation; entry requirements are undecided.', sourceUrls: [] },
  { from: '468', to: 'advanced-development', type: 'suggested-learning-connection', note: 'Discuss a route from front-end systems into deeper application work.', sourceUrls: [] },
  { from: '469', to: 'advanced-development', type: 'suggested-learning-connection', note: 'Draw on the existing development sequence when shaping this opportunity.', sourceUrls: [] },
];

export type Competency = {
  id: string;
  title: string;
  description: string;
  currentCourseIds: string[];
  proposedLeadIds: string[];
  proposedReinforcementIds: string[];
  discussion: string;
};

/** Coverage is a reading of published topics; proposed leads are discussion positions. */
export const competencies: Competency[] = [
  { id: 'research', title: 'Research & experience', description: 'Understand people, frame a problem, and use observations to revise a design.', currentCourseIds: ['338', '348', '458'], proposedLeadIds: ['338', '348', '458'], proposedReinforcementIds: ['368', '378', '345'], discussion: 'Keep UX methods substantive while making their findings usable in implementation studios.' },
  { id: 'html-css', title: 'HTML & CSS', description: 'Read structure, choose semantics, explain the cascade, and repair source.', currentCourseIds: ['368', '369'], proposedLeadIds: ['368'], proposedReinforcementIds: ['378', '369'], discussion: 'Compare actual assignments before deciding how much introductory repetition students need.' },
  { id: 'accessibility', title: 'Accessible interfaces', description: 'Build responsive pages and interactions that remain understandable and operable.', currentCourseIds: ['368', '378', '468'], proposedLeadIds: ['368'], proposedReinforcementIds: ['378', '468', '338', '369'], discussion: 'Agree on an introductory check and how later studios raise the standard.' },
  { id: 'interaction', title: 'JavaScript & behavior', description: 'Trace input, events, state, and feedback through an interface.', currentCourseIds: ['378', '369', '379'], proposedLeadIds: ['378', '369'], proposedReinforcementIds: ['345', 'creative-coding', '379'], discussion: 'Distinguish interaction design from deeper program structure, with shared terminology.' },
  { id: 'systems', title: 'Components & content', description: 'Organize reusable interfaces and content across a growing site or application.', currentCourseIds: ['468', '379', '469'], proposedLeadIds: ['468', '379'], proposedReinforcementIds: ['469'], discussion: 'Separate the design of a front-end system from application architecture without creating incompatible habits.' },
  { id: 'delivery', title: 'Versioning & delivery', description: 'Organize a project, explain a change, collaborate, and publish dependable work.', currentCourseIds: ['368', '369', '468', '469'], proposedLeadIds: ['368'], proposedReinforcementIds: ['369', '468', '469', 'advanced-development'], discussion: 'Start with a dependable publishing path, then deepen collaboration and automation.' },
  { id: 'data', title: 'Applications & data', description: 'Connect interfaces to services, databases, and server-side behavior.', currentCourseIds: ['369', '379', '469'], proposedLeadIds: ['379', '469'], proposedReinforcementIds: ['369', 'advanced-development'], discussion: 'Preserve the distinctive development material when considering future pathways.' },
  { id: 'expression', title: 'Expression & play', description: 'Use computational rules to create visual, interactive, and playable experiences.', currentCourseIds: ['378', '345'], proposedLeadIds: ['345', 'creative-coding'], proposedReinforcementIds: ['378'], discussion: 'Would a repeatable Creative Coding studio offer a useful home for rotating topics?' },
  { id: 'ai', title: 'AI & source fluency', description: 'Inspect generated work, test a claim, and explain the decisions that remain human.', currentCourseIds: ['368', '378', '468'], proposedLeadIds: ['368'], proposedReinforcementIds: ['378', '468', '369', 'creative-coding'], discussion: 'Define independent evidence of understanding before expanding AI assistance.' },
];

export const lanes = [
  { id: 'ux', title: 'User experience', idea: 'People & use', ids: ['338', '348', '458'] },
  { id: 'web', title: 'Web Design + Code', idea: 'Interfaces & source', ids: ['368', '378', '468'] },
  { id: 'development', title: 'Web development', idea: 'Applications & services', ids: ['369', '379', '469'] },
];

export const discussionQuestions = [
  { title: 'What should students carry forward?', text: 'Agree on a small set of artifacts and independent source checks that 368 graduates bring into 378 and 369. What can a short re-entry activity diagnose?' },
  { title: 'Where is repetition doing useful work?', text: 'Compare HTML/CSS, Git, component, and publishing assignments across courses. Keep purposeful reinforcement; give repeated introductions a clear reason and a stopping point.' },
  { title: 'Where could new pathways fit?', text: 'Discuss a repeatable Creative Coding studio and deeper development options alongside existing staffing, student demand, and course capacity. How do these relate to DESN 325 Emergent Design and the existing game and development courses?' },
];
