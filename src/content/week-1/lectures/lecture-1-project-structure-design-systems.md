# Lecture 1: Project Structure + Design Systems

**Week 1: The Structure of Design // Systems and Tokens**
**Day 1**
**Duration:** 85 minutes (excludes 15-min Learning Log opening)
**Format:** Lecture + Discussion

---

## Learning Objectives

By the end of this lecture, students will:
- Understand and implement a scalable project structure
- Explain what normalize/reset CSS does and why we use it
- Describe the hierarchy of design systems (conceptual)
- Trace the event flow from user action to UI update
- Know where to find selector references for JavaScript

---

## Pre-Lecture Setup

- VS Code open with example project structure
- Browser with design system examples ready (Spectrum, Material, Primer)
- Event flow diagram ready to display

---

## Lecture Outline

| Section | Time | Content |
|---------|------|---------|
| Project Structure | 25 min | Folder scaffold, normalize/reset intro |
| Design Systems Intro | 20 min | Conceptual only — no Figma yet |
| Event Flow | 15 min | Walk through the diagram |
| Selector Cheatsheet | 15 min | Reference before MDN/Story Teller |
| Preview + Assignments | 10 min | What's coming |

### Part 1: Project Structure (25 min)

#### Opening: Why Structure Matters

"Before we build anything, we need to know where things go."

Show a messy project:
```
my-site/
├── style.css
├── styles.css
├── main.css
├── script.js
├── app.js
├── image1.jpg
├── IMG_4532.png
├── hero.jpg
└── index.html
```

**Question:** "What's wrong with this?"

#### The Standard Structure

**[SHOW ON SCREEN]**

```
/project-name/
├── index.html
├── css/
│   ├── normalize.css
│   ├── variables.css
│   └── style.css
├── js/
│   ├── utils/
│   ├── components/
│   └── script.js
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
└── README.md
```

#### Walk Through Each Part

**`index.html`** — The entry point
- DOCTYPE declaration
- Meta tags (charset, viewport, description)
- Link CSS in head, JS before closing body
- Semantic HTML5 elements

**`css/` directory:**
| File | Purpose |
|------|---------|
| `normalize.css` | Browser reset, consistent baseline |
| `variables.css` | Design tokens (colors, spacing, typography) |
| `style.css` | Component styles, layout, utilities |

#### What Is Normalize/Reset?

"Browsers have opinions. They don't agree."

**The problem:** Different browsers render elements differently by default.
- Safari's button looks different from Chrome's
- Firefox has different default margins
- Your design breaks unexpectedly

**The solution:** Reset those defaults to a consistent baseline.

```html
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/style.css">
```

**Order matters:** normalize → variables → style

**Key point:** "You don't write this file. You download it and include it."
- [necolas.github.io/normalize.css](https://necolas.github.io/normalize.css/)
- Or use a CDN link

**scripts/` directory:**

| Folder/File | Purpose |
|-------------|---------|
| `main.js` | Main entry point, initialization |
| `utils/` | Helper functions, data manipulation |
| `components/` | UI component logic |

**`assets/` directory:**
| Folder | Contents |
|--------|----------|
| `images/` | Photos, graphics, backgrounds |
| `fonts/` | Custom font files |
| `icons/` | SVG icons, favicons |

**`README.md`** — Project documentation
- What is this project?
- How do I run it?
- What are the dependencies?

#### Key Principle: Separation of Concerns

"Each file has one job. Each folder groups related things."

- CSS files don't contain JavaScript
- JavaScript files don't contain CSS
- Assets are separate from code
- Tokens are separate from component styles

---

### Part 2: Design Systems Intro (20 min) — LIGHTER VERSION

#### Opening: What Is a Design System?

> "A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications."

**But that's abstract. Let's make it concrete.**

#### The Three Layers

**[DRAW ON BOARD or SHOW DIAGRAM]**

```
┌─────────────────────────────────────────────┐
│  DESIGN SYSTEM                               │
│  Technical specs, tokens, documentation,     │
│  principles, processes                       │
├─────────────────────────────────────────────┤
│  PATTERN LIBRARY                             │
│  Templates, layouts, interactions,           │
│  code snippets, components                   │
├─────────────────────────────────────────────┤
│  STYLE GUIDE                                 │
│  Colors, typography, icons, logos,           │
│  illustrations, brand guidelines             │
└─────────────────────────────────────────────┘
```

**Style Guide** — The visual foundation (what we're building)
**Pattern Library** — Reusable pieces
**Design System** — The complete package

#### Real Examples (Show, Don't Deep Dive)

**[SHOW BRIEFLY]**
- [Adobe Spectrum](https://spectrum.adobe.com/)
- [Google Material Design](https://material.io/)
- [GitHub Primer](https://primer.style/)

"These teams have hundreds of engineers. Why do they invest in design systems?"

- Consistency across products
- Faster development
- Single source of truth

#### The Bridge Statement

> "The way design systems solve this problem is with **variables** — named values that can change. Figma has them. CSS has them. JavaScript can control them. That's what this quarter is about: connecting all three."

**[SHOW VISUAL]**

```
Figma Variables  ←→  CSS Custom Properties  ←→  JavaScript
     ↑                      ↑                      ↑
  (design)              (styling)              (behavior)
```

"Day 2, we'll get into the details. Today, just know this connection exists."

---

### Part 3: Event Flow (15 min)

"Before we dive into Figma and design tokens, let's reinforce what you learned in Week 0 about JavaScript."

#### The Event Flow Diagram

**[WALK THROUGH SLOWLY]**

```
┌─────────────────┐
│   User Action   │  ← click, hover, keypress
└────────┬────────┘
         ↓
┌─────────────────┐
│  Event Listener │  ← addEventListener
└────────┬────────┘
         ↓
┌─────────────────┐
│  State Change   │  ← classList.toggle, variable update
└────────┬────────┘
         ↓
┌─────────────────┐
│   UI Updates    │  ← CSS responds to new class/state
└─────────────────┘
```

**Read each box aloud:**
1. User does something (clicks a button)
2. JavaScript listens for that action (addEventListener)
3. JavaScript changes some state (adds/removes a class)
4. CSS responds to the new state (different styles apply)

#### The Key Insight

> "JavaScript doesn't change colors directly. It changes **state**. CSS responds to state."

**Example:**
```javascript
button.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
```

JavaScript just toggles a class. CSS does the visual work:
```css
body { background: white; }
body.dark-mode { background: #1a1a1a; }
```

This mental model helps for the Story Teller practice and everything we build this quarter.

---

### Part 4: Selector Cheatsheet (15 min)

"You used these in Week 0. Let's make sure you know where to look."

#### The Most Common Selectors

| Selector | Example | What it finds |
|----------|---------|---------------|
| `.class` | `.story-image` | Elements with that class |
| `#id` | `#story-caption` | The one element with that ID |
| `[data-*]` | `[data-step="1"]` | Elements with that attribute |
| `element` | `img` | All elements of that type |

#### In Code

```javascript
// Find one element
const caption = document.querySelector('#story-caption');
const image = document.querySelector('.story-image img');

// Find many elements
const dots = document.querySelectorAll('.dot');
```

#### DevTools Trick

**[DEMONSTRATE]**
1. Right-click any element in the page
2. Inspect
3. Right-click the element in DevTools
4. Copy → Copy selector

#### Common Mistake

Forgetting the dot or hash:

```javascript
// WRONG — will not find anything
document.querySelector('story-image');

// RIGHT — includes the dot for class
document.querySelector('.story-image');
```

"You don't need to memorize all of this. You need to know **where to look**."

---

### Part 5: Preview + Assignments (10 min)

#### Assignments

1. **Build 1-1: Portfolio Migration**
   - Move your portfolio to the new folder structure
   - Due before Day 2

2. **Learn 1-0: Codedex Variables**
   - Exercises 6-10 on [codedex.io/javascript](https://www.codedex.io/javascript)
   - Covers `let`, `const`, data types, math with variables
   - Due before Day 2

3. **Learn 1-1: HTML Academy**
   - Theme switcher tutorial
   - Due before Day 2

4. **Learn 1-2: Figma Variables**
   - [Figma Guide to Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma) OR
   - [Get Started with Variables](https://www.figma.com/community/file/1253086684245880517) (Community file)
   - Due before Day 2

**Remind:** Engage activity (VS Code Theme Setup) if not done.

#### Preview

"Day 2, we dive into Figma Variables. You'll create your own token system — primitives, semantic tokens, light/dark modes. By Sunday, you'll have a complete style guide in Figma."

"Week 2, we translate that system into CSS and JavaScript. The variables you create in Figma become CSS Custom Properties in your code."

---

## Slide Outline

1. Title: "The Structure of Design // Systems and Tokens"
2. Messy project structure example
3. Clean project structure diagram
4. What is normalize/reset?
5. CSS organization (normalize → variables → style)
6. Design system hierarchy diagram
7. Real design system examples (brief)
8. Bridge statement (Figma ↔ CSS ↔ JS)
9. Event Flow diagram
10. JavaScript ↔ CSS relationship
11. Selector cheatsheet
12. DevTools trick
13. Assignments + Preview

---

## Resources to Reference

**Design Systems:**
- [Figma Design Systems 101](https://www.figma.com/blog/design-systems-101-what-is-a-design-system)
- [NN Group Design Systems 101](https://www.nngroup.com/articles/design-systems-101/)
- [DesignLab Guide to UX Design Systems](https://designlab.com/blog/guide-to-ux-design-systems)

**Design Tokens:**
- [Design Tokens for Dummies (Video)](https://www.youtube.com/watch?v=CJyJN0ZdEGA)
- [Penpot Intro to Design Tokens](https://penpot.app/blog/intro-to-design-tokens/)
- Nathan Curtis: Naming Tokens in Design Systems

**CSS Variables:**
- [CSS Variables in 100 Seconds](https://www.youtube.com/watch?v=NtRmIp4eMjs) — Fireship
- [CSS Custom Properties](https://www.youtube.com/watch?v=5QIiWIoCmsc) — Kevin Powell

---

## Common Questions

**"Why not just use Figma styles?"**
Variables can have modes (light/dark). Styles cannot. Variables can also do math and be referenced by other variables.

**"Do we need all these files?"**
For small projects, maybe not. But learning the pattern now means you're ready for larger projects.

**"Why separate normalize, variables, and style?"**
Separation of concerns. Normalize is third-party. Variables are your design decisions. Style is your implementation.

---

## Instructor Notes

- The structure section might feel dry — keep it moving
- Show real examples of messy vs. clean projects
- Design systems section is intentionally lighter — save token details for Day 2
- The Event Flow diagram is key — walk through it slowly, relate to Week 0 MDN tutorial
- Selector cheatsheet is a reference, not memorization — show the DevTools trick
- Students may struggle with the dot/hash — emphasize this common mistake
- Connect everything to the Story Teller practice they'll do this week
