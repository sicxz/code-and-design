# Week 1: First Light

**Unit 1:** Adaptive Systems
**Interaction Question:** How does it adapt to me?

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Implement** a scalable project structure with separation of concerns
2. **Explain** the hierarchy of design systems (system → pattern library → style guide)
3. **Differentiate** between primitive and semantic design tokens
4. **Create** Figma variables with collections and modes
5. **Build** a brand component library (style guide) in Figma
6. **Apply** JavaScript fundamentals (querySelector, addEventListener) in a creative project

---

## Two-Day Breakdown

### Day 1: Project Structure + Design Systems
**Duration:** 90 minutes lecture + demo

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Learning Log | Update README.md with Week 0 reflections |
| 0:15 | Project Structure | File organization, separation of concerns |
| 0:35 | Design Systems Hierarchy | System → Pattern Library → Style Guide |
| 0:50 | Break | — |
| 1:00 | Design Tokens | Primitives vs. Semantic, naming conventions |
| 1:15 | Figma Variables Demo | Live demo of token pipeline |
| 1:35 | Closing | Assignments overview |

**Deliverables assigned:**
- Build 1-1: Portfolio Migration
- Learn 1-0: Codedex Variables
- Learn 1-1: HTML Academy Ch. 2
- Engage 1-3: Style Tile (complete before Learn 1-2)
- Learn 1-2: Figma Variables tutorial

---

### Day 2: Figma Variables + Workshop
**Duration:** 30 minutes lecture + 60 minutes workshop

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Learning Log | 15-minute reflection check-in |
| 0:15 | Variables Deep Dive | Collections, modes, applying variables |
| 0:30 | Token Naming | Semantic naming exercise |
| 0:40 | Break | — |
| 0:50 | Workshop Time | Build your style guide |
| 1:25 | Closing | Weekend assignments, Week 2 preview |

**Deliverables assigned:**
- Build 1-2: The Foundation (Brand Component Library)
- Practice 1-1: The Story Teller
- Reflect 1-1: Visual Notes on Design Systems

---

## Activities

| Type | Activity | Points | Due |
|------|----------|--------|-----|
| Engage 1-1 | VS Code Theme Setup | 10 | Day 1 |
| Engage 1-2 | Learning Log | 10 | Day 1 (in-class) |
| Engage 1-3 | Style Tile | 5 | Before Day 2 |
| Learn 1-0 | Codedex Variables | 10 | Before Day 2 |
| Learn 1-1 | HTML Academy Ch. 2 | 10 | Before Day 2 |
| Learn 1-2 | Figma Variables | 10 | Before Day 2 |
| Practice 1-1 | The Story Teller | 20 | Sunday |
| Build 1-1 | Portfolio Migration | 10 | Before Day 2 |
| Build 1-2 | The Foundation | 30 | Sunday |
| Reflect 1-1 | Visual Notes: Design Systems | 10 | Sunday |

> See `engage/`, `learn/`, `practice/`, `build/`, and `reflect/` folders for activity files.

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| Project structure | Practical | File organization, folders, naming |
| Design systems hierarchy | Conceptual | System → Pattern Library → Style Guide |
| Design tokens | Deep | Primitives, semantic, naming conventions |
| Figma variables | Hands-on | Collections, modes, applying |
| JavaScript review | Reinforcement | querySelector, addEventListener, classList |

---

## Project Milestone

**Project 1: "The System"** — Assigned this week, due end of Week 2

This week students:
- Create token system in Figma (colors, typography, spacing)
- Build style guide with light/dark modes
- Prepare foundation for code implementation in Week 2

---

## Assigned Reading/Tutorials

| Resource | Type | Required |
|----------|------|----------|
| [HTML Academy: Introduction to JavaScript](https://htmlacademy.org/courses/intro-to-web-development/javascript) | Tutorial | Yes |
| [Design Systems 101](https://www.figma.com/blog/design-systems-101-what-is-a-design-system/) | Article | Yes |
| [NN Group Design Systems 101](https://www.nngroup.com/articles/design-systems-101/) | Article | Yes |
| [Penpot Intro to Design Tokens](https://penpot.app/blog/intro-to-design-tokens/) | Article | Yes |

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **Design System** | Collection of reusable components and standards |
| **Style Guide** | Visual foundation: colors, typography, spacing |
| **Design Token** | A design decision stored as data |
| **Primitive Token** | Raw value named by what it IS (blue-500, gray-900) |
| **Semantic Token** | Value named by what it DOES (action-primary, text-primary) |
| **Figma Variable** | Design-side equivalent of CSS Custom Property |
| **Collection** | Group of related variables in Figma |
| **Mode** | Variable variant (light mode, dark mode) |

---

## Common Struggles & Solutions

| Struggle | Solution |
|----------|----------|
| "What colors should I use?" | Start with your existing portfolio colors |
| "Primitives vs. semantic?" | Primitives = raw values, Semantic = meaningful names |
| "Mode switching doesn't work" | Check that variables are applied, not hardcoded |
| "Too many tokens" | Start minimal: 5 colors, 3-5 spacing values |

---

## Resources

### Videos
| Resource | Description |
|----------|-------------|
| [Design Tokens for Dummies](https://www.youtube.com/watch?v=CJyJN0ZdEGA) | Comprehensive token overview |
| [CSS Variables in 100 Seconds](https://www.youtube.com/watch?v=NtRmIp4eMjs) | Fireship quick intro |
| [CSS Custom Properties](https://www.youtube.com/watch?v=5QIiWIoCmsc) | Kevin Powell deep dive |

### Figma
| Resource | Description |
|----------|-------------|
| [Variables Playground](https://www.figma.com/community/file/1253443272911187215) | Official practice file |
| [FreeCodeCamp Handbook](https://www.freecodecamp.org/news/variables-in-figma-handbook) | Written tutorial |

### Tools
| Tool | Use For |
|------|---------|
| [OpenProps](https://open-props.style/) | Token value reference |
| [Color Blind Simulator](https://chromewebstore.google.com/detail/color-blind-low-vision-si/lgflijofdempkdlaknbfmacfidjjhjbb) | Accessibility testing |

---

## Accessibility Notes

- Test color combinations for sufficient contrast
- Use Color Blind Simulator to verify color choices
- Semantic naming supports future accessibility features
- Preview: `prefers-reduced-motion` implementation in Week 2

---

## Connections

| Connects To | How |
|-------------|-----|
| Week 0 | JavaScript fundamentals practiced in Story Teller |
| Week 2 | Figma tokens become CSS Custom Properties |
| Week 3 | SVG colors use same token system |
| Week 5+ | Motion tokens (duration, easing) |
| Project 1 | This is the design foundation of "The System" |

---

## Instructor Notes

- Learning Log check-in on Day 2 sets collaborative tone
- The token naming discussion generates good questions
- Students will be at different Figma skill levels — pair up
- Focus on colors first; spacing can be stretch goal
- Watch for hardcoded colors vs. applied variables

---

## Materials Checklist

- [ ] Lecture 1 slides/outline ready
- [ ] Lecture 2 slides/outline ready
- [ ] Engage 1-1: VS Code Theme Setup posted
- [ ] Engage 1-3: Style Tile posted + Figma template created
- [ ] Learn 1-1: HTML Academy guide posted
- [ ] Learn 1-2: Figma Variables guide posted
- [ ] Practice 1-1: The Story Teller posted
- [ ] Build 1-1: Portfolio Migration posted
- [ ] Build 1-2: The Foundation posted
- [ ] Reflect 1-1: Visual Notes posted
- [ ] Figma Variables Playground shared
- [ ] Resources page updated
