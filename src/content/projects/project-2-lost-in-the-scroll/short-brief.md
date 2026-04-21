# Project Brief: Lost in the Scroll

**Theme:** Teaching Through Story
**Question:** Can you explain what you learned by telling a story about it?
**Weight:** 50% of course grade
**Due:** Week 10 (Final Presentations)

 

## The Idea

You're building a scrollytelling site — a single-page narrative that traces your JavaScript learning journey through a personal metaphor.

This isn't a tutorial or a blog post. It's a designed, animated, scroll-driven story that makes someone who's never written code understand what it *felt like* to learn.

Every concept you've learned this quarter — variables, events, classList, design tokens, and localStorage — becomes a chapter in your story. Every animation technique you learn over the next five weeks — CSS transitions, GSAP timelines, ScrollTrigger — becomes part of how you tell it.

The metaphor is yours. The story is yours. The scroll is your medium.

------

## Chapters vs. Tools

Not every concept needs its own section. Some are transformative "aha" moments worth a full chapter. Others are techniques you'll use along the way.

### Chapters (The Story Beats)
*These are the transformative moments — what it felt like to learn.*

**Note:** These are working titles. Use them as-is or rename them to fit your metaphor.

| Chapter | Concept | The Moment |
|---------|---------|------------|
| First Contact | console.log, DevTools | "I can talk to the browser" |
| Naming Things | Variables (let, const) | "I can hold and name things" |
| The Switch | Conditionals, classList | "I can make the page respond" |
| Listening | Events, addEventListener | "I can react to the user" |
| The System | Design tokens, CSS custom properties | "I see the pattern now" |
| The Memory | localStorage | "Things can persist" |
| The Scroll | ScrollTrigger, scroll-driven motion | "The page itself is the interaction" |

### Tools Along the Way
*These are techniques used to accomplish chapters — not their own story beats.*

- `document.querySelector` — how you grab things
- `documentElement` — the root for theming
- `matchMedia` / `prefers-color-scheme` / `prefers-reduced-motion` — detecting preferences
- `dataset` / `data-*` — storing state in HTML
- CSS transitions, @keyframes — foundational motion
- GSAP syntax (gsap.to, timeline) — the animation tool
- SVGs — visual assets
- Figma variables — where tokens come from

Pick 5–7 chapters for your story. Use the tools as needed to build them.

------

## What You're Making

- **A personal metaphor** — a framing device that maps code concepts to something you already understand
- **A design system** — Figma variables and tokens exported to CSS custom properties
- **A scrollytelling site** — 5–7 scroll sections, each chapter explaining a concept through your metaphor
- **Motion that serves the story** — CSS transitions, GSAP timelines, and ScrollTrigger animations
- **An accessible experience** — reduced-motion support, keyboard navigation, semantic HTML

## How We'll Build It

You build this over five weeks. Each week adds one layer:

| Week | Focus         | What You Add                                      |
| ---- | ------------- | ------------------------------------------------- |
| 5    | The Blueprint | Metaphor, Figma design, design system, tokens.css |
| 6    | The Rough Cut | HTML/CSS structure, content, CSS transitions      |
| 7    | The Pulse     | GSAP animations, all content written              |
| 8    | The Scroll    | ScrollTrigger on all sections, scrub on 1+        |
| 9    | The Deep      | Pinned section, peer review, polish, deploy       |
| 10   | The Showcase  | Final submission + presentation                   |

Each week has its own brief with specific deliverables. Weekly milestones are checked but not graded separately — the final rubric evaluates the complete site.

------

Each week has its own brief with specific deliverables. Weekly milestones are checked but not graded separately — the final rubric evaluates the complete site.

------

## Finding Your Metaphor

Your metaphor maps JavaScript concepts to something you already know well. Here are some starting points:

**The Kitchen** — Variables are ingredients. Functions are recipes. Events are timers going off. Conditionals are taste tests. The design system is your mise en place.

**The Garden** — Variables are seeds. The DOM is soil. Events are weather. Conditionals are seasons. localStorage is the root system that persists underground.

**The Map** — Each concept is a landmark on a journey. The switch is a fork in the road. Tokens are the legend. Scroll is the path you walk.

**The Mixtape** — Each concept is a track. Variables are samples. Events are drops. Conditionals are bridges. The design system is the album art that ties it together.

**Discover Your Own** — Use this prompt with an LLM:

> "I'm a design student learning JavaScript for the first time. I've learned about variables, events, conditionals, classList, localStorage, and design tokens. I need a metaphor that maps these programming concepts to something I already understand well — something from my life, hobbies, or interests. The metaphor should feel personal, not generic. Ask me about my interests and help me find one that fits."

**The test:** Can your partner explain your metaphor back to you after hearing it once? If not, simplify.

------

## Evaluation

| Criteria             | Weight | What We're Looking For                                       |
| -------------------- | ------ | ------------------------------------------------------------ |
| Story & Metaphor     | 25%    | Does the metaphor work? Is the story clear, personal, engaging? Would a non-coder follow the journey? |
| Interaction & Motion | 30%    | Does scroll pacing feel right? Do animations support narrative? Is there a showpiece? Does easing have personality? |
| Technical Execution  | 25%    | GSAP + ScrollTrigger correct? Tokens consistent? No major bugs? Deployed? |
| Accessibility        | 20%    | Reduced-motion alternative? Keyboard navigable? Color contrast? Semantic HTML? |

### What Exemplary Work Looks Like

- The metaphor is original and illuminating — it makes code make sense
- Scroll pacing feels cinematic — you want to keep scrolling
- Animations serve the story, not the other way around
- Technically clean — no console errors, smooth performance
- Accessible by default — reduced motion, keyboard, contrast all handled

------

## Starter Structure

```
lost-in-the-scroll/
├── index.html
├── styles/
│   ├── tokens.css        ← design tokens (load first)
│   ├── layout.css         ← section structure, grid
│   └── animations.css     ← motion styles
├── scripts/
│   └── main.js            ← GSAP + ScrollTrigger logic
├── assets/
│   ├── images/            ← visual assets for your story
│   └── svg/               ← any SVG graphics
└── README.md
```

------

## Final Submission (Week 10)

- Deploy to GitHub Pages
- Submit the live URL to Canvas
- Link from your portfolio (navigation or projects page)
- Ensure the repository is public
- Present in Week 10 (5–7 minutes):
  - Live scroll-through demo
  - Explain your metaphor
  - Walk through ONE section's code
  - What surprised you?
  - What would you add with more time?

The desk critique test applies: be ready to explain any line of code in your project.

------

## Resources

**Scrolltelling Inspiration:** [The PuddingLinks to an external site.](https://pudding.cool/)

 [NYT Snow FallLinks to an external site.](https://www.nytimes.com/projects/2012/snow-fall/) 

[Apple AirPods ProLinks to an external site.](https://www.apple.com/airpods-pro/)

**Design Systems:** [Open PropsLinks to an external site.](https://open-props.style/)

 [Figma Variables GuideLinks to an external site.](https://help.figma.com/hc/en-us/articles/15339657135383)

**Accessibility:** [web.dev: prefers-reduced-motionLinks to an external site.](https://web.dev/prefers-reduced-motion/)

 [MDN: Semantic HTMLLinks to an external site.](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)