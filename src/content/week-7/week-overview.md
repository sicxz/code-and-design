# Week 7: The Rough Cut

**Unit 2:** Teaching Through Story
**Interaction Question:** Can your story work before JavaScript starts moving it?

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Translate** Figma section designs into semantic HTML structure (hero + story chapters + closing)
2. **Apply** design tokens from `tokens.css` to layout, type, and color decisions
3. **Build** reusable section layout patterns in `layout.css` (spacing, containers, rhythm)
4. **Establish** visual rhythm across sections in the browser (contrast in layout, density, pacing)
5. **Adjust** layouts for mobile and desktop readability
6. **Test** that the site remains readable and functional with JavaScript disabled
7. **Write** real content for the majority (or all) of their sections
8. **Prepare** a complete rough cut for next week's animation work
9. **Integrate** Project 1 theme toggle (dark mode tokens, localStorage, system preference detection) into the scrollytelling project
10. **Implement** GSAP entrance animations using timelines, easing, and stagger for hero and 2+ story sections

---

## Two-Day Breakdown

### Day 1: Blueprint to Browser (Structure + Tokens)
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | Compare a Figma frame and its semantic HTML version. "What translates directly, and what needs adaptation?" |
| 0:10 | Concept: Rough Cut | Define the goal: a readable, structured, token-driven site draft. Not finished, but real. |
| 0:20 | File Setup | Review project structure (`index.html`, `tokens.css`, `layout.css`, `animations.css`, `main.js`) and CSS load order. |
| 0:30 | Live Code: Hero Structure | Build the hero section in semantic HTML from a Figma design. |
| 0:45 | Live Code: Layout Tokens | Apply spacing, color, and type tokens in CSS. Show container width and section rhythm. |
| 0:55 | Break | — |
| 1:05 | Build Start | Students begin coding their rough cut (hero + first sections) from Figma. Instructor circulates for layout/token troubleshooting. |
| 1:35 | Closing | Homework: continue rough cut build, gather remaining section content drafts. |

**Deliverables assigned:**
- Learn 7-1: Rough Cut Prep (before Day 2)
- Build 7-1: The Rough Cut (start in class, due Sunday)

---

### Day 2: Section Completion + Browser QA
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | Scroll through a rough-cut site that is complete but unpolished. "Can you still follow the story?" |
| 0:10 | Browser QA Mindset | What to check in rough cut: structure, readability, pacing, token consistency, mobile layout. |
| 0:25 | Live Code: Section Pattern Cleanup | Refactor repeated section markup/classes. Improve consistency without over-polishing. |
| 0:40 | Live Code: Mobile Pass | Tighten spacing and type for narrow viewports. Show a quick responsive check workflow. |
| 0:50 | Break | — |
| 1:00 | Practice 7-1: The Bridge | Students port their P1 theme toggle into the scrollytelling site. Add dark mode tokens, toggle button, localStorage persistence. Instructor circulates for troubleshooting. |
| 1:30 | Quick Share + Closing | 2–3 students demo their toggle working. Assign Build 7-2: The Pulse (GSAP animations, due Sunday). Preview Week 8: "Next week, your animations respond to scroll." |

**Deliverables assigned:**
- Practice 7-1: The Bridge (in-class)
- Build 7-1: The Rough Cut (due Sunday)
- Build 7-2: The Pulse (due Sunday)
- Reflect 7-1: Visual Notes (rough cut audit, due Sunday)

---

## Activities

| Type | Activity | Points | Due |
|------|----------|--------|-----|
| Learn 7-1 | Rough Cut Prep | — | Before Day 2 |
| Practice 7-1 | The Bridge | 10 | Day 2 (in-class) |
| Build 7-1 | The Rough Cut | 50 | Sunday |
| Build 7-2 | The Pulse | 25 | Sunday |
| Reflect 7-1 | Visual Notes | 10 | Sunday |

> See `learn/`, `practice/`, `build/`, and `reflect/` folders for activity files.

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| Figma → HTML translation | Deep | Semantic structure, adaptation vs pixel-copy |
| Design tokens in CSS | Practical | `tokens.css`, semantic variables, consistency |
| Layout rhythm | Hands-on | Section spacing, container widths, hierarchy |
| Responsive layout pass | Hands-on | Mobile spacing/type adjustments, viewport checks |
| Visual rhythm in browser | Hands-on | Section contrast and pacing after translation from Figma |
| Browser QA workflow | Practical | Readability checks, no-JS test, quick critique criteria |
| Progressive enhancement | Conceptual | Site works before JS/GSAP is added |
| Theme integration across projects | Practical | Porting P1 toggle to P2: token mapping, localStorage, system detection |
| GSAP timelines | Hands-on | `gsap.timeline()`, `.from()`, position parameter, stagger |
| Easing as personality | Conceptual + Practical | Matching easing to section mood, Ease Visualizer |
| `prefers-reduced-motion` (JS) | Practical | `window.matchMedia` check wrapping all GSAP code |

---

## Project Milestone

**Project 2: "The Long Way Down"** — Week 7 checkpoint (Rough Cut)

- [ ] `index.html`, `tokens.css`, `layout.css`, `animations.css`, `main.js` set up and linked
- [ ] 5–7 sections exist in semantic HTML (hero → story chapters → closing)
- [ ] Design tokens applied throughout (not mostly hardcoded values)
- [ ] Most or all section content is real text (not placeholder)
- [ ] Desktop + mobile readability pass completed
- [ ] Site is readable and functional with JavaScript disabled
- [ ] Theme toggle working with dark mode tokens (Practice 7-1)
- [ ] GSAP loaded via CDN, hero entrance animation with timeline (Build 7-2)
- [ ] 2+ sections with entrance animations, `prefers-reduced-motion` respected (Build 7-2)

---

## Assigned Reading/Tutorials

| Resource | Type | Required |
|----------|------|----------|
| [MDN: `<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) | Docs | Yes |
| [MDN: `<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) | Docs | Yes |
| [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) | Docs | Yes |
| [Responsive Design Basics (web.dev)](https://web.dev/responsive-web-design-basics/) | Article | Recommended |

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **Rough Cut** | The first complete browser build of the story — structured, readable, and functional, but not final polish |
| **Semantic HTML** | HTML chosen for meaning/structure (e.g., `main`, `section`, headings), not just styling hooks |
| **Design Token** | Named reusable value (color, spacing, type) used consistently across the site |
| **CSS Custom Property** | A CSS variable (e.g., `--space-lg`) often used to implement design tokens |
| **Visual Rhythm** | Variation in spacing, density, layout, and pacing across sections |
| **Breakpoint** | A viewport width where layout/type/spacing rules are adjusted |
| **Responsive Pass** | A focused round of browser testing and CSS adjustments across device widths |
| **Progressive Enhancement** | Building a solid baseline experience first, then layering enhancements (like JS animation) |

---

## Common Struggles & Solutions

| Struggle | Solution |
|----------|----------|
| "My site looks flat compared to Figma" | Start with hierarchy and spacing first. Match layout rhythm before decorative polish. |
| CSS variables show as invalid | Check variable names and file order. `tokens.css` must load before `layout.css`/`animations.css`. |
| Mobile layout breaks | Add mobile-first spacing/type values and test early. Don't wait until all sections are built. |
| All sections feel the same after translation | Reintroduce the Blueprint's rhythm with spacing, alignment, and scale differences. |
| Page depends on JS to look correct | JS should be optional this week. All content/layout should work before JS enhancements. |
| Mobile layout feels unusable | Do a dedicated mobile pass: reduce padding, tighten line length, and stack layouts earlier. |

---

## Code Patterns Introduced

### CSS Load Order
```html
<link rel="stylesheet" href="styles/tokens.css">
<link rel="stylesheet" href="styles/layout.css">
<link rel="stylesheet" href="styles/animations.css">
```

### Section Layout Skeleton
```html
<main>
  <section class="section section--hero" id="hero">
    <div class="section__content">
      <h1 class="hero__title">[Title]</h1>
      <p class="hero__subtitle">[Hook]</p>
    </div>
  </section>

  <section class="section section--chapter" id="first-contact">
    <div class="section__content">
      <h2>[Chapter title]</h2>
      <p>[Story content]</p>
    </div>
  </section>
</main>
```

### Responsive Adjustment Pattern
```css
@media (max-width: 48rem) {
  .section {
    padding: var(--space-lg) var(--space-sm);
    min-height: auto;
  }

  .section__content {
    width: 100%;
  }

  .hero__title {
    font-size: var(--font-size-h2);
    line-height: 1.05;
  }
}
```

---

## Accessibility Focus

- Semantic structure comes first: clear heading hierarchy and landmarks
- Keyboard and motion refinements are part of the upcoming Polish Pass
- The site must communicate fully with JavaScript disabled (progressive enhancement baseline)
- Contrast should be checked in-browser, not only in Figma

---

## Connections

| Connects To | How |
|-------------|-----|
| Week 6 | Blueprint + Motion Map become a real browser build |
| Weeks 1–3 (Project 1) | Theme toggle system ported to scrollytelling site (Practice 7-1) |
| Week 5 | GSAP Express knowledge applied to real project HTML (Build 7-2) |
| Week 6 | Motion Map annotations become implementation targets (Build 7-2) |
| Week 8 (next) | ScrollTrigger converts page-load animations to scroll-driven |
| Project 1 | Reuses tokens, semantic HTML, focus states, and reduced-motion habits |

---

## Instructor Notes

- Keep students focused on "complete and readable" over "pixel-perfect." Rough cut energy matters.
- Model how to translate Figma intent into semantic HTML instead of div-heavy markup.
- Insist on file order (`tokens.css` first) and token usage early; this prevents cleanup debt later.
- Keep the Day 2 critique centered on readability and rhythm, not polish details.
- Students may want to jump to animation; keep them focused on finishing the whole story first.

---

## Materials Checklist

- [ ] Starter structure ready or project starter cloned
- [ ] Learn 7-1: Rough Cut Prep (`learn/learn-7-1-rough-cut-prep.md`)
- [ ] Build 7-1: The Rough Cut (`build/build-7-1-the-rough-cut.md`)
- [ ] Practice 7-1: The Bridge (`practice/practice-7-1-the-bridge.md`)
- [ ] Build 7-2: The Pulse (`build/build-7-2-the-pulse.md`)
- [ ] Reflect 7-1: Visual Notes (`reflect/reflect-7-1-visual-notes.md`)
- [ ] Resources page updated (`resources/week-7-resources.md`)
- [ ] Figma Blueprint examples ready for translation demo
- [ ] Responsive QA demo prepared
