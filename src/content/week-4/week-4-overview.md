# Week 4: The Shape

## Unit 2: Interactive Graphics

**Interaction Question:** What happens when I interact?

**By End of Week:** Students will have designed a personal mark in Figma, exported and optimized the SVG code, and prepared it for interactive states.

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Understand Figma's SVG Engine** — Explain how Figma generates SVG code and what export settings affect output quality
2. **Prepare Designs for Code** — Structure Figma files with semantic layer naming, flattened groups, and outlined strokes for clean SVG export
3. **Read SVG Structure** — Identify SVG elements (`<svg>`, `<path>`, `<g>`, `<rect>`, `<circle>`) and understand XML syntax
4. **Explain viewBox** — Understand the viewBox coordinate system and how it differs from pixel dimensions
5. **Optimize SVG Code** — Use SVGO and manual cleanup to remove Figma metadata while preserving structure
6. **Apply Design Tokens to SVG** — Use CSS custom properties to theme SVG colors, connecting to Week 1-2 systems
7. **Implement ARIA Basics** — Add aria-label to icons and understand decorative vs. content SVG
8. **Prepare for Keyboard Interaction** — Make SVG focusable and plan for interactive states (expanded in Week 5)

---

## Two-Day Breakdown

### Day 1: SVG Structure & Figma's Engine (115 min)

| Time Block | Activity | Focus |
|------------|----------|-------|
| 15 min | Opening Hook | Manipulate SVG in DevTools (color, paths) |
| 20 min | Concept: SVG as Code | XML structure, inline vs external |
| 20 min | Demo: Figma's SVG Engine | Export settings comparison |
| 10 min | **BREAK** | — |
| 35 min | Live Coding: Figma to DOM | Design → Export → Clean → Theme → Test |
| 15 min | Closing | Assign tutorials, Lab 4-1, Visual Notes |

**What students do before Day 2:**
- Complete Learn 4-1: Figma's SVG Engine
- Complete Learn 4-2: SVG Fundamentals
- Start Practice 4-1: The Anatomy
- Create Visual Notes: Reflect 4-1

---

### Day 2: Practice & Project Kickoff (130 min)

| Time Block | Activity | Focus |
|------------|----------|-------|
| 25 min | Opening: What Did You Learn? | Tutorial check-in, SVG structure discussion |
| 20 min | Backfill: Common Issues | SVGO, CSS specificity, ARIA |
| 20 min | Engage 4-1: Icon Audit | Inspect real-world SVG implementations |
| 10 min | **BREAK** | — |
| 50 min | Structured Work Time | Lab 4-1 completion, Lab 4-2 start, Build 4-1 design |
| 15 min | Closing | Preview Week 5, Project 2 timeline |

**What students do before Week 5:**
- Complete Practice 4-1: The Anatomy
- Complete Practice 4-2: The Interaction
- Complete Learn 4-3: Optimization Workflow
- Start Build 4-1: The Mark (Figma design)

---

## Activities This Week

| Type | Activity | Points | Due |
|------|----------|--------|-----|
| **Learn** | Learn 4-1: Figma's SVG Engine | 10 | Before Day 2 |
| **Learn** | Learn 4-2: SVG Fundamentals | 10 | Before Day 2 |
| **Learn** | Learn 4-3: Optimization Workflow | 10 | Before Week 5 |
| **Practice** | Practice 4-1: The Anatomy | 10 | Before Week 5 |
| **Practice** | Practice 4-2: The Interaction | 10 | Before Week 5 |
| **Build** | Build 4-1: The Mark (Figma design) | 15 | Before Week 5 Day 1 |
| **Build** | Build 4-2: The Refinement (code) | 15 | Week 5 (in progress) |
| **Engage** | Engage 4-1: Icon Audit | 10 | In-class Day 2 |
| **Reflect** | Reflect 4-1: Visual Notes | 10 | Before Day 2 |

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| **Figma's SVG Engine** | Conceptual + Applied | Export settings, layer naming, boolean operations |
| **SVG Structure** | Foundational | XML syntax, viewBox, paths, groups, elements |
| **Optimization Workflow** | Applied | Figma → SVGO → manual cleanup → test |
| **CSS Hooks for SVG** | Applied | Selectors, custom properties, specificity |
| **viewBox Coordinate System** | Conceptual | Camera frame metaphor, scalable graphics |
| **Inline vs External SVG** | Decision-Making | Trade-offs, when to use each |
| **ARIA for Icons** | Foundational | aria-label, aria-hidden, decorative vs content |
| **Interactive State Prep** | Preview | Focusable SVG, keyboard access (deepened Week 5) |

---

## Project 2 Milestone

**Project 2: "The Mark"** — Interactive SVG logo + favicon

**This Week's Milestone:**
- Design personal mark in Figma (Build 4-1)
- Export and optimize SVG code (Build 4-2 starts, continues Week 5)
- Prepare for interactive states (Week 5)

**Week 5 Continuation:**
- Add CSS transitions for smooth feedback
- Implement hover, focus, click states
- Create favicon implementation
- Keyboard accessibility testing

---

## Assigned Tutorials (Before Day 2)

| Source | Title | Focus | Time |
|--------|-------|-------|------|
| Figma Docs | Preparing Graphics for Export | Export settings, design prep | ~10 min read |
| CSS-Tricks | A Practical Guide to SVGs on the Web | SVG basics, when to use | ~15 min read |
| WebAIM | Making SVG Accessible | ARIA, keyboard, screen readers | ~12 min read |
| Video | Understanding Figma's SVG Output | How Figma generates code | ~8 min watch |

---

## Key Vocabulary

| Term | Definition | Connection |
|------|------------|------------|
| **SVG** | Scalable Vector Graphics — XML-based vector image format | Like HTML but for graphics |
| **viewBox** | Coordinate system defining SVG canvas | "The camera frame" — not pixels |
| **Path** | SVG element defining shapes with drawing commands | Like pen tool in Figma |
| **Group (`<g>`)** | Container for organizing SVG elements | Like groups in Figma layers |
| **Inline SVG** | SVG code directly in HTML | Full CSS/JS control |
| **SVGO** | SVG Optimizer tool | Removes metadata, minifies |
| **Outline Stroke** | Figma setting converting strokes to paths | Ensures consistent rendering |
| **Flatten** | Figma setting merging nested groups | Simplifies code structure |
| **ARIA-label** | Accessibility attribute providing text alternative | Screen reader reads this |
| **Presentation Attributes** | SVG styling via attributes (vs CSS) | Higher specificity than CSS |

---

## Common Struggles & Solutions

| Struggle | Symptom | Solution |
|----------|---------|----------|
| **Forgot to outline strokes** | Strokes render incorrectly or too thin | Figma → select all → Object → Outline Stroke |
| **Nested groups bloat code** | Excessive `<g>` wrappers | Flatten groups in Figma before export |
| **Unnamed layers → gibberish IDs** | IDs like `Vector_42_1` | Name layers semantically in Figma |
| **CSS not applying to SVG** | Colors won't change | Check presentation attributes (higher specificity) |
| **viewBox confusion** | SVG doesn't scale correctly | viewBox ≠ pixels — it's the coordinate system |
| **SVGO removed needed IDs** | Can't target elements with CSS | Adjust SVGO config to preserve class/id |
| **ARIA not announced** | Screen reader silent on icon | Check aria-label syntax, test with VoiceOver/NVDA |

---

## Resources

### Figma + SVG Intersection
- Figma SVG Export Settings (official docs)
- "Designing Icons for Code in Figma" (video)
- SVG Export Plugin for Figma

### SVG Fundamentals
- MDN: SVG Tutorial
- CSS-Tricks: Complete Guide to SVG
- SVG Path Visualizer (interactive tool)

### Optimization
- SVG OMG (SVGO GUI)
- SVGO Configuration Guide
- SVG Optimization Checklist

### Accessibility
- WebAIM: Accessible SVG
- Sara Soueidan: Accessible SVG Icons
- ARIA Authoring Practices (icons section)

### Inspiration
- Figma's icon system
- Stripe brand icons
- GitHub Octicons
- Feather Icons (open source)

---

## Connections

| Week | Connection | Why It Matters |
|------|------------|----------------|
| **Week 1-2** | Design tokens (CSS custom properties) | Apply to SVG `fill` and `stroke` for theming |
| **Week 3** | State management (`data-theme`) | SVG colors respond to theme state |
| **Week 5** | CSS transitions | Smooth feedback for SVG interactive states |
| **Week 6-8** | GSAP animation | Animate SVG paths, morphing, timelines |
| **DESN 368** | Figma proficiency | Build on existing Figma skills |

---

## Instructor Notes

### Audible Points
- **Figma comfort varies:** Some students are Figma power users, others are new. Adjust depth of Figma engine explanation accordingly.
- **SVG complexity ceiling:** Keep mark designs simple (3-8 shapes). Complex paths overwhelm beginners.
- **SVGO frustration:** First-time SVGO users find output confusing. Emphasize: "This is normal, we'll clean it together."

### Common Student Questions
- "Why does Figma export so much extra code?" → Metadata helps Figma re-import, but we don't need it for web
- "Why won't my CSS change the SVG color?" → Presentation attributes have higher specificity
- "What's the difference between viewBox and width/height?" → viewBox = coordinate system, width/height = display size

### Pacing Watchpoints
- **Day 1:** Figma demo can run long if students ask many questions (good!). Timebox to 20 min.
- **Day 2:** Practice 4-1 completion varies widely. Early finishers start Lab 4-2, others focus on Lab 4-1.

---

## Materials Checklist

**For Day 1:**
- [ ] Simple SVG example file for DevTools demo
- [ ] Figma file with shape ready to export (show different settings)
- [ ] Figma → SVGO → Manual cleanup workflow prepared
- [ ] Design token CSS variables file from Week 1-2

**For Day 2:**
- [ ] Practice 4-1 starter code (SVG with comments)
- [ ] Icon Audit worksheet (questions to guide inspection)
- [ ] Build 4-1 Figma template (optional scaffold)

**Student Needs:**
- Figma account (free tier sufficient)
- SVG OMG tool (web-based, no install)
- Code editor (VS Code)
- Browser DevTools (Chrome/Firefox)

---

## See Also

- `/curriculum/weeks/week-4/desn378-wk-4.md` — Full instructor plan
- `/curriculum/weeks/week-4/resources/week-4-resources.md` — Curated resources
- `/curriculum/projects/project-2-the-mark.md` — Project 2 brief
- `/docs/PROJECT-GUIDE.md` — Project rubrics and requirements
