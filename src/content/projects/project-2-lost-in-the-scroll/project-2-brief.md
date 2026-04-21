# Project 2: Lost in the Scroll



**Theme:** Teaching Through Story
**Question:** Can you explain what you learned by telling a story about it?
**Weight:** 50% of course grade
**Due:** Week 10 (Final Presentations)

---

## Overview

You're building a **scrollytelling site** — a single-page narrative that traces your JavaScript learning journey through a personal metaphor. This isn't a tutorial. It's not a blog post. It's a designed, animated, scroll-driven story that makes someone who's never written code understand what it *felt like* to learn.

Every concept you've learned this quarter — variables, events, classList, design tokens, localStorage — becomes a chapter in your story. Every animation technique you learn over the next five weeks — CSS transitions, GSAP timelines, ScrollTrigger — becomes part of how you tell it.

The metaphor is yours. The story is yours. The scroll is your medium.

---

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

---

## What You're Building

1. **A personal metaphor** — A framing device that maps code concepts to something you already understand
2. **A design system** — Figma variables, tokens, exported to CSS custom properties
3. **A scrollytelling site** — 5–7 scroll sections, each chapter explaining a concept through your metaphor
4. **CSS motion** — Transitions and keyframes for foundational animation
5. **GSAP animations** — Timelines with intentional easing for entrance sequences
6. **ScrollTrigger** — Scroll-driven reveals, at least one scrubbed animation
7. **A pinned section** — Your "showpiece" moment where scroll controls the narrative
8. **Accessibility** — `prefers-reduced-motion` alternative, keyboard navigation, semantic HTML

---

## Requirements

### The Metaphor

- [ ] Choose a metaphor that maps JS concepts to something personal
- [ ] Each section connects a code concept to a chapter in your metaphor
- [ ] A non-coder could follow the story without understanding the code
- [ ] The metaphor is consistent — it doesn't break or shift mid-story

### Design System

- [ ] Figma design with all sections designed before coding
- [ ] Figma variables: color primitives, semantic tokens, typography, spacing
- [ ] Exported to `tokens.css` with CSS custom properties
- [ ] Tokens used consistently throughout the site (no hardcoded values)

### Content & Structure

- [ ] 5–7 scroll sections, each covering a JS concept
- [ ] Real, written content (not placeholder text)
- [ ] Visual assets that support the metaphor (illustrations, photos, icons)
- [ ] Clear narrative arc: beginning → development → resolution

### CSS Motion (Week 6)

- [ ] CSS transitions on interactive elements (hover, focus)
- [ ] At least one `@keyframes` animation (hero entrance or repeating element)
- [ ] Performant properties used (`transform`, `opacity`)

### GSAP Animation (Week 7)

- [ ] GSAP loaded via CDN
- [ ] `gsap.to()` or `gsap.from()` used for entrance animations
- [ ] At least one `gsap.timeline()` sequencing 3+ elements
- [ ] At least 2 different easing values that match your story's tone

### ScrollTrigger (Week 8)

- [ ] ScrollTrigger plugin loaded and registered
- [ ] All sections have scroll-triggered animations
- [ ] At least one section uses `scrub` for progress-linked animation
- [ ] Start/end points are calibrated (tested, not default)

### Advanced Scroll (Week 9)

- [ ] At least one **pinned section** (your showpiece moment)
- [ ] Peer review completed and feedback addressed
- [ ] Deployed to GitHub Pages

### Accessibility

- [ ] `prefers-reduced-motion` check wraps all GSAP animations
- [ ] Content is fully readable with animations disabled
- [ ] Keyboard navigable (Tab through all interactive elements)
- [ ] Semantic HTML (proper heading hierarchy, landmarks)
- [ ] Color contrast passes WCAG AA on all token pairs
- [ ] Focus states visible

---

## Metaphor Options

Choose one of these or discover your own:

### 1. The Kitchen
Variables are ingredients. Functions are recipes. Events are timers going off. Conditionals are taste tests. The design system is your mise en place — everything in its place before you cook.

### 2. The Garden
Variables are seeds. The DOM is soil. Events are weather. Conditionals are seasons. localStorage is the root system that persists underground even when nothing is visible above.

### 3. The Map
Each concept is a landmark on a journey. The switch is a fork in the road. Tokens are the legend. Scroll is the path you walk.

### 4. The Mixtape
Each concept is a track on a mixtape. Variables are samples. Events are drops. Conditionals are bridges between sections. The design system is the album art system that ties it all together visually.

### Discover Your Own

Use this prompt with an LLM (ChatGPT, Claude, etc.):

> "I'm a design student learning JavaScript for the first time. I've learned about variables, events, conditionals, classList, localStorage, and design tokens. I need a metaphor that maps these programming concepts to something I already understand well — something from my life, hobbies, or interests. The metaphor should feel personal, not generic. Ask me about my interests and help me find one that fits."

**The test:** Can your partner explain your metaphor back to you after hearing it once? If not, simplify.

---

## Progressive Build Schedule

You build this project over 5 weeks. Each week adds a layer:

| Week | Focus | You Add |
|------|-------|---------|
| 5 | The Blueprint | Metaphor, Figma design, design system, tokens.css |
| 6 | The Rough Cut | HTML/CSS structure, content, CSS transitions |
| 7 | The Pulse | GSAP animations on 3+ sections, all content written |
| 8 | The Scroll | ScrollTrigger on all sections, scrub on 1+ |
| 9 | The Deep | Pinned section, peer review, polish, deploy |
| 10 | The Showcase | Final submission + presentation |

**Weekly milestones are checked but not graded separately.** The final rubric evaluates the complete site.

---

## Evaluation

| Criteria | Weight | What We're Looking For |
|----------|--------|------------------------|
| **Story & Metaphor** | 25% | Does the metaphor work? Is the story clear, personal, engaging? Would a non-coder understand the journey? |
| **Interaction & Motion** | 30% | Does scroll pacing feel right? Do animations support narrative? Is there a showpiece? Does easing have personality? |
| **Technical Execution** | 25% | GSAP + ScrollTrigger correct? Tokens consistent? No major bugs? Deployed? |
| **Accessibility** | 20% | Reduced-motion alternative? Keyboard navigable? Color contrast? Semantic HTML? |

### Exemplary Work

- The metaphor is original and illuminating — it makes code *make sense*
- Scroll pacing feels cinematic — you want to keep scrolling
- Animations serve the story, not the other way around
- Technically clean — no console errors, smooth performance
- Accessible by default — reduced motion, keyboard, contrast all handled

### Common Pitfalls

- Metaphor is too literal ("variables are like boxes") — go deeper, make it personal
- Animation overload — every element doesn't need to animate
- Content is an afterthought — the story IS the project, not the animation
- Scroll pacing too fast — test: can someone read the text before it scrolls away?
- Pinned section breaks layout — test at multiple viewport sizes
- Forgetting `prefers-reduced-motion` — add it the same day you add GSAP

---

## Submission

1. **Deploy** to GitHub Pages
2. **Submit** the live URL to Canvas
3. **Link** from your portfolio (navigation or projects page)
4. **Ensure** repository is public
5. **Present** in Week 10 (5–7 minutes):
   - Live scroll-through demo
   - Explain your metaphor
   - Walk through ONE section's code
   - What surprised you?
   - What would you add with more time?

**The desk critique test applies:** Be ready to explain any line of code in your project.

---

## Starter Structure

```
the-thread/
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

---

## Connection to Course

This project synthesizes everything you've learned:

- **From Week 0:** DevTools, console — you'll explain these in your story
- **From Week 1:** Variables, events — chapters in your narrative
- **From Week 2:** The Switch, tokens, localStorage — the heart of the story
- **From Week 3:** Persistence, preferences — the deeper meaning
- **From Week 4:** SVG — visual assets for your sections
- **New (Weeks 5–9):** Design systems in Figma, CSS motion, GSAP, ScrollTrigger — how you tell the story

Everything connects. Nothing is throwaway.

---

## Stretch Goals

For students who want to push further:

- [ ] Horizontal scroll section
- [ ] Parallax backgrounds with depth layers
- [ ] Progress indicator linked to scroll position
- [ ] Dynamic text reveals (words appearing as you scroll)
- [ ] Dark/light mode toggle integrated into the scrollytelling site
- [ ] Sound design (ambient audio that responds to scroll position)
- [ ] Mobile-optimized scroll experience

---

## Resources

### ScrollTelling Inspiration
- [The Pudding](https://pudding.cool/) — Data-driven visual essays
- [NYT Snow Fall](https://www.nytimes.com/projects/2012/snow-fall/) — The original scrollytelling piece
- [Apple AirPods Pro](https://www.apple.com/airpods-pro/) — Product storytelling through scroll

### GSAP & ScrollTrigger
- [GSAP Getting Started](https://gsap.com/docs/v3/Installation/) — Official docs
- [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — Plugin reference
- [GSAP Easing Visualizer](https://gsap.com/docs/v3/Eases/) — Find your easing personality

### Design Systems
- [Open Props](https://open-props.style/) — Token system reference
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma) — Official Figma docs

### Accessibility
- [web.dev: prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion) — Motion accessibility
- [MDN: Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html) — Structure reference
