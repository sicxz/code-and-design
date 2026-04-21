# Week 0: The Workshop

**Unit:** Pre-Course Foundation
**Interaction Question:** What is JavaScript, and how do I talk to a web page?

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Set up** a GitHub repository from template with GitHub Pages enabled
2. **Explain** what JavaScript does in relation to HTML and CSS (the behavioral layer)
3. **Navigate** Chrome/Firefox DevTools, specifically the Console and Elements panels
4. **Execute** simple JavaScript expressions in the browser console
5. **Recognize** basic JavaScript syntax: variables, functions, event listeners
6. **Link** an external JavaScript file to an HTML document
7. **Read** console error messages and identify the source of common problems

---

## Two-Day Breakdown

### Day 1: The Behavioral Layer
**Duration:** 1 hour lecture + 30 minutes guided practice

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | What is JavaScript? The three-layer model |
| 0:15 | DevTools Tour | Console and Elements panel walkthrough |
| 0:35 | Vocabulary | Reading code — variables, functions, events |
| 0:50 | Break | — |
| 1:00 | Console Playground | Guided experimentation, typing together |
| 1:25 | Closing | Assignment overview, preview Week 1 |

**Deliverables assigned:**
- Build: The Setup (GitHub repo + Pages)
- Learn: Codedex Console Tutorial
- Learn: Console Explorer

---

### Day 2: From Console to Files
**Duration:** 30 minutes lecture + 60 minutes practice

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | What did you discover? Q&A |
| 0:15 | Script Linking | `<script>`, `defer`, file paths |
| 0:35 | Error Reading | Anatomy of console errors, common mistakes |
| 0:50 | Break | — |
| 1:00 | Work Time | Lab completion, MDN exercises, experimentation |
| 1:20 | Closing | Week 1 preview, final reminders |

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| GitHub setup | Practical | Template repo, GitHub Pages |
| JavaScript purpose | Introduction | Mental model, not syntax |
| DevTools Console | Hands-on | Primary focus this week |
| DevTools Elements | Overview | Connection to DOM |
| Variables (`const`, `let`) | Recognition | Reading, not writing |
| Functions | Recognition | See the pattern |
| Event listeners | Recognition | Conceptual introduction |
| `<script>` tag | Practical | `defer` attribute, file paths |
| Error messages | Practical | Line numbers, common errors |

---

## Activities

| Type | Activity | Points | Due |
|------|----------|--------|-----|
| Learn | Codedex Console Tutorial | 10 | Before Day 2 |
| Learn | Console Explorer | 10 | Before Day 2 |
| Build | The Setup | 10 | Before Day 2 |
| Engage | Portfolio Audit | 10 | Sunday |
| Reflect | Visual Notes | 10 | Before Day 2 |

> **Learn** activities use external platforms or self-guided exploration. **Build** creates infrastructure. **Engage** involves peer collaboration. **Reflect** captures understanding visually.

---

## Course Resource

### Designer's DevTools Field Guide

→ **[DevTools Field Guide](resources/dev-tools-fieldguide/index.html)**

A custom-built guide explaining DevTools from a designer's perspective. Use alongside Lab 0-2 and throughout the quarter.

| Section | Focus |
|---------|-------|
| Overview | Mental model, the $0 bridge |
| Visual Tools | Elements panel, reading structure |
| Behavioral Tools | Console, watching events |
| Reading Errors | What errors mean, how to respond |

---

## Assigned Reading/Tutorials

| Resource | Type | Required |
|----------|------|----------|
| [JavaScript in 100 Seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE) | Video | Yes |
| [A Designer's Guide to JavaScript](https://react.design/javascript) | Article | Yes |
| [Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) | MDN Tutorial | Yes |
| [Variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables) | MDN Tutorial | Optional |

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **DOM** | Document Object Model — the browser's representation of the page |
| **Console** | DevTools panel where JavaScript runs and errors appear |
| **Variable** | A named container for storing values |
| **Function** | A reusable block of code |
| **Event** | Something that happens (click, scroll, key press) |
| **Event Listener** | Code that waits for an event and responds |
| **`defer`** | Script attribute that waits for HTML to load first |
| **$0** | Console shortcut for the currently selected element |

---

## Common Struggles & Solutions

| Struggle | Solution |
|----------|----------|
| DevTools feels overwhelming | Focus only on Console tab first; use the Field Guide |
| "I don't understand the code" | Reading ≠ writing; recognition is the goal |
| Script doesn't run | Check `defer`, check file path |
| "Cannot read properties of null" | querySelector found nothing; check selector |
| GitHub Pages not deploying | Check Settings → Pages → Source is set to main |

---

## Demos Available

| Demo | Description | Location |
|------|-------------|----------|
| Console Playground | Interactive page for console experiments | `demos/console-playground.html` |
| DevTools Field Guide | Designer-focused DevTools reference | `resources/dev-tools-fieldguide/` |

---

## Accessibility Notes

- DevTools has keyboard navigation (Tab, Enter, arrow keys)
- Console output can be copied for screen reader users
- Code examples should use sufficient color contrast
- Preview: `prefers-color-scheme` comes in Week 1

---

## Connections

| Connects To | How |
|-------------|-----|
| Week 1 | querySelector, addEventListener used in theme toggle |
| Week 2 | Console used for debugging localStorage |
| All weeks | DevTools debugging is fundamental |

---

## Instructor Notes

- This week is about **confidence**, not complexity
- Let students break things — refresh fixes everything
- Some students will be ahead; point them to JavaScript30
- Some will struggle; pair them up
- The MDN tutorials are excellent; don't reinvent them
- Reference the **DevTools Field Guide** during demos

---

## Materials Checklist

- [x] Lecture 1 slides/outline ready
- [x] Lecture 2 slides/outline ready
- [x] Build: The Setup brief posted
- [x] Learn: Codedex Console Tutorial brief posted
- [x] Learn: Console Explorer brief posted
- [x] Engage: Portfolio Audit brief posted
- [x] Reflect: Visual Notes brief posted
- [x] DevTools Field Guide complete
- [x] Console Playground demo ready
- [x] Resources page updated
