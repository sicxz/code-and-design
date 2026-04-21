# Week 5: The Blueprint

**Unit 2:** Teaching Through Story
**Interaction Question:** What's the story you want to tell, and what does it look like?

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Choose** a personal metaphor that maps JavaScript concepts to familiar experience
2. **Design** a scrollytelling site layout in Figma with 5–7 narrative sections
3. **Create** a complete design system in Figma (primitives, semantic tokens, typography, spacing)
4. **Set up** Figma variables with modes (light/dark if applicable)
5. **Export** Figma variables to CSS custom properties (`tokens.css`)
6. **Map** each JS concept learned so far to a chapter in their metaphor
7. **Evaluate** a metaphor's clarity by explaining it to a partner

---

## Two-Day Breakdown

### Day 1: The Story & The Metaphor
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Project Introduction | Introduce "The Long Way Down" — show scrollytelling examples (Pudding, NYT, Apple). Explain the arc: 5 weeks → final presentation. |
| 0:15 | The Metaphor | What makes a good metaphor? Walk through the 4 options. Show the LLM prompt for discovering your own. |
| 0:30 | Engage: The Pitch | Students pair up. 10 minutes to choose/draft a metaphor. Present to partner. Partner explains it back. Iterate. |
| 0:50 | Break | — |
| 1:00 | Content Architecture | How to map JS concepts to story chapters. Show the recommended 7-section structure. Discuss: what's the arc? |
| 1:20 | Figma Setup | Start the Figma file. Create frames for each section. Rough layout — wireframe level. |
| 1:35 | Closing | Homework: complete Figma design + design system |

**Deliverables assigned:**
- Engage 5-1: The Pitch (in-class, due today)
- Practice 5-1: The Blueprint (start in class, due before Day 2)

---

### Day 2: The Design System
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Gallery Walk | Students show Figma designs on screens. Walk around, leave sticky note feedback. |
| 0:15 | Design System Review | Revisit Figma variables from Week 2. Show the full system: primitives → semantic → modes. |
| 0:35 | Live Demo: Export to CSS | Walk through exporting Figma variables to `tokens.css`. Clean up naming. Show the file structure. |
| 0:50 | Break | — |
| 1:00 | Work Time | Students build their design systems in Figma and export to CSS. Instructor circulates for 1-on-1 feedback. |
| 1:30 | Closing | Milestone check: metaphor + Figma design + tokens.css due Sunday |

**Deliverables assigned:**
- Build 5-1: The System (design system + tokens export, due Sunday)
- Reflect 5-1: Visual Notes (metaphor map, due Sunday)

---

## Activities

| Type | Activity | Points | Due |
|------|----------|--------|-----|
| Engage 5-1 | The Pitch | 10 | Day 1 |
| Practice 5-1 | The Blueprint | 10 | Before Day 2 |
| Build 5-1 | The System | 10 | Sunday |
| Reflect 5-1 | Visual Notes — Metaphor Map | 10 | Sunday |
| Reflect 5-2 | Visual Notes — ScrollTrigger + Parallax | 10 | Sunday |

> See `engage/`, `practice/`, `build/`, and `reflect/` folders for activity files.

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| Scrollytelling as format | Conceptual | Examples, analysis, what makes it work |
| Personal metaphor development | Creative | Choosing, testing, iterating |
| Content architecture | Practical | Mapping concepts to sections |
| Figma design for scrollytelling | Hands-on | Section layout, visual rhythm |
| Design systems in Figma | Deep | Primitives, semantic tokens, modes |
| Figma variables | Hands-on | Review from Week 2, extended |
| CSS custom properties export | Practical | Figma → tokens.css workflow |

---

## Project Milestone

**Project 2: "The Long Way Down"** — Week 5 checkpoint

- [ ] Metaphor chosen and partner-tested
- [ ] 5–7 sections designed in Figma (wireframe or higher fidelity)
- [ ] Figma variables: color primitives, semantic tokens, typography, spacing
- [ ] `tokens.css` exported with CSS custom properties
- [ ] Concept-to-chapter mapping documented

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **Scrollytelling** | A storytelling format where scroll position drives the narrative |
| **Metaphor** | A comparison that maps unfamiliar concepts to familiar ones |
| **Design system** | A set of reusable design decisions (colors, type, spacing) documented as a system |
| **Primitives** | Raw values in a token system (specific hex codes, pixel sizes) |
| **Semantic tokens** | Named references to primitives based on purpose (`surface-primary`, not `white`) |
| **tokens.css** | A CSS file containing custom properties that define your visual language |
| **Content architecture** | The structure and sequence of content on a page |

---

## Common Struggles & Solutions

| Struggle | Solution |
|----------|----------|
| Metaphor feels forced or generic | Go personal. "Learning JS is like cooking" is fine, but "Learning JS is like my grandmother teaching me to make tamales" is better. |
| Too many sections planned | Cap at 7. Better to have 5 deep sections than 10 shallow ones. |
| Figma design too detailed too early | Start with wireframes. You'll iterate. Don't pixel-perfect the first draft. |
| Token naming confusion | Follow the pattern: `--color-surface-primary`, `--space-md`, `--font-size-lg`. Purpose, not appearance. |
| Exporting variables is confusing | Use the Figma plugin. Clean up the output. It doesn't have to be perfect — you'll refine it. |

---

## Accessibility Focus

- Color contrast checking on all token pairs (light and dark modes)
- WCAG AA minimum (4.5:1 for text, 3:1 for large text)
- Use WebAIM Contrast Checker or Figma contrast plugins
- Planning for reduced motion from the design phase — know which elements will animate

---

## Connections

| Connects To | How |
|-------------|-----|
| Week 2 | Figma variables workflow — now applied to a new project |
| Week 6 | Figma designs become HTML/CSS |
| Week 7–9 | Design system carries through all animation work |
| Project 1 | Same token workflow, new context |

---

## Instructor Notes

- This week is 100% design, no code. That's intentional. Design students need to design first.
- The Pitch activity is critical — if the metaphor doesn't survive a partner explanation, it won't survive the project.
- Gallery walk on Day 2 builds community and accountability.
- Some students will want to skip Figma and go straight to code. Resist this — the Figma design IS the deliverable this week.
- Students who did strong Figma work in Weeks 1–2 will fly. Students who didn't will need extra support.
- The LLM prompt for metaphor discovery is a designed activity, not a shortcut. Frame it that way.

---

## Materials Checklist

- [ ] Scrollytelling example links tested and working
- [ ] Figma template or starter file (optional)
- [ ] Export plugin link ready to share
- [ ] Engage 5-1: The Pitch (`engage/engage-5-1-the-pitch.md`)
- [ ] Practice 5-1: The Blueprint (`practice/practice-5-1-the-blueprint.md`)
- [ ] Build 5-1: The System (`build/build-5-1-the-system.md`)
- [ ] Reflect 5-1: Visual Notes — Metaphor Map (`reflect/reflect-5-1-visual-notes.md`)
- [ ] Reflect 5-2: Visual Notes — ScrollTrigger + Parallax (`reflect/reflect-5-2-visual-notes.md`)
- [ ] Resources page updated
