# Week 2: The Memory

**Unit 1:** Adaptive Systems
**Interaction Question:** How does it adapt to me?

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Use** `document.querySelector()` to find elements in the DOM
2. **Implement** `addEventListener()` to respond to user interactions
3. **Apply** `classList.toggle()` to change element state
4. **Build** a working light/dark theme toggle with CSS Custom Properties
5. **Store** user preferences using `localStorage`
6. **Detect** system color scheme preference with JavaScript
7. **Implement** a preference hierarchy (user choice → system → default)
8. **Respect** `prefers-reduced-motion` in CSS

---

## Two-Day Breakdown

### Day 1: Systems That Respond
**Duration:** 90 minutes lecture + demo

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening Hook | Demo: browser responds to system dark mode |
| 0:15 | CSS Variables Review | Design tokens from Figma → code |
| 0:30 | JavaScript Mental Model | Find, Listen, Change |
| 0:45 | Break | — |
| 0:55 | Live Code: querySelector | Finding elements, storing in variables |
| 1:10 | Live Code: addEventListener | When this happens, do that |
| 1:25 | Live Code: classList.toggle | Flip the state |
| 1:40 | Closing | Assignments overview |

**Deliverables assigned:**
- Practice 2-1: The Switch (in-class start, due before Day 2)
- Build 2-1: The Inheritance (apply tokens to portfolio)

---

### Day 2: Persistence & Preference
**Duration:** 60 minutes lecture + 30 minutes practice

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | Demo: Refresh page, theme resets. "The browser forgot." |
| 0:10 | Refactoring | From classList to data-theme (why data attributes) |
| 0:25 | localStorage | setItem, getItem, DevTools Application panel |
| 0:40 | Break | — |
| 0:50 | System Preference | matchMedia, preference hierarchy |
| 1:05 | prefers-reduced-motion | CSS-first approach, accessibility |
| 1:20 | Work Time | Complete labs, Project 1 polish |
| 1:40 | Closing | Project 1 due Sunday, Week 3 preview |

**Deliverables assigned:**
- Build 2-2: The Preference (localStorage + system detection)
- Reflect 2-1: Visual Notes: User Preferences & Accessibility
- Project 1 due Sunday

---

## Activities

| Type | Activity | Points | Due |
|------|----------|--------|-----|
| Practice 2-1 | The Switch | 10 | Before Day 2 |
| Practice 2-2 | The Memory | 10 | Before Day 2 |
| Build 2-1 | The Inheritance | 10 | Before Day 2 |
| Build 2-2 | The Preference | 10 | Sunday |
| Reflect 2-1 | Visual Notes: Preferences | 10 | Sunday |

> See `practice/`, `build/`, and `reflect/` folders for activity files.

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| CSS Custom Properties | Practical | Translating Figma tokens to CSS |
| `document.querySelector` | Hands-on | Finding elements, selector syntax |
| `addEventListener` | Hands-on | Event binding, callback functions |
| `classList.toggle` | Hands-on | Adding/removing classes |
| localStorage | Deep | setItem, getItem, DevTools inspection |
| Data attributes | Practical | `dataset`, `data-theme`, state management |
| matchMedia | Practical | System preference detection in JS |
| prefers-reduced-motion | Practical | CSS-first implementation |

---

## Project Milestone

**Project 1: "The System"** — Due this week (Sunday)

Requirements:
- [ ] `variables.css` with semantic tokens (from Week 1 Figma work)
- [ ] Working theme toggle with querySelector/addEventListener
- [ ] `data-theme` based state management
- [ ] localStorage persistence
- [ ] System preference fallback (matchMedia)
- [ ] `prefers-reduced-motion` handled in CSS
- [ ] Applied to at least one portfolio page
- [ ] Deployed to GitHub Pages

---

## Assigned Reading/Tutorials

| Resource | Type | Required |
|----------|------|----------|
| [prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion) | Article | Yes |
| [prefers-color-scheme](https://web.dev/articles/prefers-color-scheme) | Article | Yes |
| [MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) | Reference | Yes |
| [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) | Reference | Yes |

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **DOM** | Document Object Model — JavaScript's view of the page |
| **querySelector** | Method to find an element by CSS selector |
| **addEventListener** | Method to wait for and respond to events |
| **classList** | An element's list of CSS classes (can add/remove/toggle) |
| **localStorage** | Browser storage that persists across sessions |
| **setItem/getItem** | Methods to write/read localStorage |
| **dataset** | JavaScript interface for data-* attributes |
| **matchMedia** | JavaScript API to check media queries |
| **prefers-reduced-motion** | Media query for motion sensitivity |

---

## Common Struggles & Solutions

| Struggle | Solution |
|----------|----------|
| Script runs before HTML exists | Add `defer` to script tag |
| querySelector returns null | Check selector spelling, check for dot/hash |
| Classes toggle but colors don't change | Check CSS specificity, use DevTools |
| localStorage not persisting | Check DevTools Application tab |
| Preference order wrong | User choice must override system |
| Reduced motion not working | Check CSS media query syntax |

---

## Code Patterns Introduced

### The Theme Toggle Pattern
```javascript
const toggle = document.querySelector('[data-theme-toggle]');

toggle.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});
```

### The Preference Hierarchy
```javascript
function getPreferredTheme() {
  // 1. User's saved choice (highest priority)
  const saved = localStorage.getItem('theme');
  if (saved) return saved;

  // 2. System preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  // 3. App default
  return 'light';
}
```

---

## Accessibility Focus

This week formally introduces accessibility considerations:

- **prefers-reduced-motion** — Essential vs. decorative motion
- **Respecting user preferences** — Not overriding their choices
- Preview: ARIA and keyboard navigation in Weeks 3-4

---

## Connections

| Connects To | How |
|-------------|-----|
| Week 1 | Figma tokens become CSS Custom Properties |
| Week 3 | State pattern (data-*) used for SVG interactions |
| Week 5-7 | Reduced motion applies to GSAP animations |
| Project 1 | Completes "The System" requirements |

---

## Instructor Notes

- Day 1 is the first time students write JavaScript that manipulates the DOM
- The toggle demo should be live-coded, not pre-written
- Let students see mistakes and fixes — that's learning
- The refactor from classList to data-theme on Day 2 is important
- LocalStorage debugging in Application tab is a key skill
- prefers-reduced-motion is the first explicit accessibility conversation
- Project 1 is due; expect questions about requirements

---

## Materials Checklist

- [x] Lecture 1 (Systems That Respond) slides/outline ready
- [ ] Lecture 2 (Persistence & Preference) slides/outline ready
- [x] Practice 2-1: The Switch (`practice/practice-2-1-the-switch.md`)
- [x] Practice 2-2: The Memory (`practice/practice-2-2-the-memory.md`)
- [x] Build 2-1: The Inheritance (`build/build-2-1-the-inheritance.md`)
- [x] Build 2-2: The Preference (`build/build-2-2-the-preference.md`)
- [x] Reflect 2-1: Visual Notes (`reflect/reflect-2-1-visual-notes.md`)
- [ ] Resources page updated
- [ ] Project 1 rubric reviewed
- [ ] Demo files tested
