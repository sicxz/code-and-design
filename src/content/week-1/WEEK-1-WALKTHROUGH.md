# Week 1 Instructor Walkthrough

A step-by-step guide to verify everything works before teaching.

---

## Pre-Class: Verify Everything Works

### Step 1: Figma Setup

**Verify access to:**
- [ ] [Figma Variables Playground](https://www.figma.com/community/file/1253443272911187215) — Community file
- [ ] Your demo Figma file with variables set up

**Test these in Figma:**

| Test | Expected Result |
|------|-----------------|
| Create a variable | Variable appears in Local Variables panel |
| Create a collection | Collection with modes available |
| Apply variable to fill | Variable icon appears in fill, not hex value |
| Switch modes | Colors change when mode switches |

---

### Step 2: Demo Files

**CSS Variables Intro:**
```
curriculum/weeks/week-1/demos/css-variables-intro.html
```
- [ ] Page loads
- [ ] Demonstrates `:root` variables

**Prefers Color Scheme:**
```
curriculum/weeks/week-1/demos/prefers-color-scheme.html
```
- [ ] Page loads
- [ ] Responds to system dark mode preference

---

### Step 3: Resources & Links

**Verify external links work:**
- [ ] [Figma Design Systems 101](https://www.figma.com/blog/design-systems-101-what-is-a-design-system)
- [ ] [NN Group Design Systems 101](https://www.nngroup.com/articles/design-systems-101/)
- [ ] [Penpot Intro to Design Tokens](https://penpot.app/blog/intro-to-design-tokens/)
- [ ] [OpenProps](https://open-props.style/)
- [ ] [FreeCodeCamp Figma Variables Handbook](https://www.freecodecamp.org/news/variables-in-figma-handbook)

---

## Day 1: The Structure of Design (Revised)

### Before Students Arrive
- [ ] VS Code open with example project structure
- [ ] Browser with design system examples ready (Spectrum, Material, Primer)
- [ ] Event flow diagram ready to display
- [ ] Learning log template displayed or linked
- [ ] normalize.css ready to show (necolas.github.io/normalize.css)

### Delivery Sequence

**1. Opening: Learning Log (15 min)**

Students update their learning log (README.md) with reflections on Week 0.

**Display the template:**
```markdown
## Week 1

### What I Learned
### What Was Hard
### How I Used AI
### What's Still Unclear

### Work Completed (Week 0)
- [ ] Engage: Portfolio Audit
- [ ] Learn: Console Explorer
- [ ] Learn: Codedex Console Fundamentals
- [ ] Reflect: Visual Notes
- [ ] Build: The Setup
- [ ] Build: The Behavioral Layer
```

**Instructions:**
1. Open portfolio repo in VS Code
2. Edit README.md (create if needed)
3. Add Week 1 section
4. Fill in reflections + check off completed work
5. Commit and push

**While they work:** Walk around, answer questions, check who's struggling with Git.

---

**2. Project Structure (25 min)**

Show the standardized folder structure:
```
/project-name/
├── index.html
├── css/
│   ├── normalize.css   ← browser reset
│   ├── variables.css   ← design tokens (later)
│   └── style.css       ← your styles
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
└── README.md
```

**Key points:**
- normalize.css → variables.css → style.css (order matters)
- Separation of concerns
- This structure grows with the project

**Normalize/Reset intro:**
- "Browsers have opinions. They don't agree."
- Different browsers render elements differently
- normalize.css resets them to a consistent baseline
- "You don't write this file. You download it and include it."
- Show: [necolas.github.io/normalize.css](https://necolas.github.io/normalize.css/)

---

**3. Design Systems Intro (20 min) — LIGHTER VERSION**

Draw on whiteboard:
```
Design System (biggest)
    └── Pattern Library
        └── Style Guide (what we're building)
```

**Keep it brief:**
- Style Guide: Colors, typography, spacing
- Pattern Library: Reusable components
- Design System: The complete package

**Show briefly:** Spectrum, Material, Primer
- "These teams have hundreds of engineers. Why do they invest in this?"

**Bridge statement:**
> "The way design systems solve this problem is with **variables** — named values that can change. Figma has them. CSS has them. JavaScript can control them. That's what this quarter is about: connecting all three."

```
Figma Variables  ←→  CSS Custom Properties  ←→  JavaScript
     ↑                      ↑                      ↑
  (design)              (styling)              (behavior)
```

"Day 2, we'll get into the details. Today, just know this connection exists."

---

**4. Event Flow (15 min)**

"Let's reinforce what you learned in Week 0 about JavaScript."

Walk through the diagram slowly:
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
│  State Change   │  ← classList.toggle
└────────┬────────┘
         ↓
┌─────────────────┐
│   UI Updates    │  ← CSS responds to new class
└─────────────────┘
```

**Key insight:** "JavaScript doesn't change colors directly. It changes **state**. CSS responds to state."

This is exactly what you'll do in the Story Teller practice.

---

**5. Selector Cheatsheet (15 min)**

"You used these in Week 0. Let's make sure you know where to look."

| Selector | Example | What it finds |
|----------|---------|---------------|
| `.class` | `.story-image` | Elements with that class |
| `#id` | `#story-caption` | The one element with that ID |
| `[data-*]` | `[data-step="1"]` | Elements with that attribute |

**Once you find an element, what can you do?**
- Change its text: `element.textContent = 'New text'`
- Add/remove classes: `element.classList.add('active')` or `.remove()` or `.toggle()`

"You saw these in the MDN tutorial. For Story Teller, you'll use them to update captions and progress dots."

**DevTools trick:** Right-click → Inspect → Right-click element → Copy → Copy selector

**Common mistake:** Forgetting the dot (`.story-image` not `story-image`)

"You don't need to memorize this. You need to know **where to look**."

---

**6. Closing: Assignments (10 min)**

**Assign:**
1. **Build 1-1: Portfolio Migration**
   - Restructure portfolio to follow project structure
   - Due before Day 2

2. **Learn 1-0: Codedex Variables**
   - Exercises 6-10 on [codedex.io/javascript](https://www.codedex.io/javascript)
   - Covers `let`, `const`, data types, math with variables
   - Due before Day 2

3. **Learn 1-1: HTML Academy Chapter 2**
   - Theme switcher tutorial
   - Due before Day 2

4. **Learn 1-2: Figma Variables Tutorial**
   - [Figma Guide to Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma) OR
   - [Get Started with Variables](https://www.figma.com/community/file/1253086684245880517/get-started-with-variables) (Community file)
   - Due before Day 2

**Remind:** Engage activity (VS Code Theme Setup) if not done

---

## Day 2: Figma Variables + Workshop

### Before Students Arrive
- [ ] Figma open with blank file for demo
- [ ] Style guide template ready to share
- [ ] Learning log questions displayed

### Delivery Sequence

**1. Learning Log Check-In (15 min)**

**Display questions:**
1. What did you learn since last class?
2. What was hard?
3. How did you use AI this week?
4. What is still giving you issues?

5 minutes writing, then share with a neighbor.

**2. Figma Variables Deep Dive (20 min)**

**[LIVE DEMO: Create Primitives Collection]**

1. Open Local Variables panel
2. Create collection → "Primitives"
3. Create color variables:
   ```
   colors/blue/500    #0066CC
   colors/blue/600    #0052A3
   colors/gray/100    #F5F5F5
   colors/gray/900    #1A1A1A
   ```
4. Create spacing variables:
   ```
   spacing/xs         4
   spacing/sm         8
   spacing/md         16
   spacing/lg         24
   ```

**Key points:**
- Use `/` for hierarchy (creates folders)
- Be consistent with naming
- Primitives are raw values — no modes yet

**[LIVE DEMO: Create Semantic Collection]**

1. Create new collection → "Semantic"
2. Add a mode: Light (default), then add Dark mode
3. Create variables that reference primitives:

**Light Mode:**
```
surface/primary      → {Primitives/colors/white}
text/primary         → {Primitives/colors/gray/900}
action/primary       → {Primitives/colors/blue/500}
```

**Dark Mode:**
```
surface/primary      → {Primitives/colors/gray/900}
text/primary         → {Primitives/colors/white}
action/primary       → {Primitives/colors/blue/400}
```

**3. Apply Variables to Frame (10 min)**

1. Select a frame
2. In fill, click the variable icon
3. Choose semantic variable
4. Switch modes in the layer panel
5. Watch colors change automatically

**The magic moment:** Everything updates when you switch modes.

**4. Token Naming Exercise (10 min)**

**Show a UI and have students suggest token names:**
- The background of a card → `surface/secondary`?
- The text on a button → `text/on-action`?
- The border of an input → `border/input`?
- The hover state of a link → `action/primary-hover`?

**Nathan Curtis naming pattern:** `category/property/variant`

**5. Break (10 min)**

**6. Workshop Time (45 min)**

**Students work on Build 1-2: The Foundation**

Their task:
1. Audit existing colors from portfolio
2. Create a Primitives collection
3. Create a Semantic collection with Light/Dark modes
4. Build a style guide frame

**Circulate and check for:**
- Are they using semantic names or just "color1, color2"?
- Do their semantic tokens reference primitives?
- Have they set up both modes?
- Are variables actually applied (not hardcoded colors)?

**7. Closing (10 min)**

**Progress check (show of hands):**
- Who has primitives set up?
- Who has semantic variables with modes?
- Who got mode switching to work?

**Weekend assignments:**
- Build 1-2: The Foundation (complete style guide)
- Practice 1-1: The Story Teller (creative JavaScript)
- Reflect 1-1: Visual Notes (design systems concepts)

**Preview Week 2:**
"Next week, we translate this Figma system into CSS. Your `variables.css` file will mirror what you built today. Then we add JavaScript to toggle between modes."

---

## Quick Reference: Key Paths

| Resource | Path from `week-1/` |
|----------|---------------------|
| CSS Variables Demo | `demos/css-variables-intro.html` |
| Prefers Color Scheme Demo | `demos/prefers-color-scheme.html` |
| Engage 1-1 | `engage/engage-1-1-vscode-theme-setup.md` |
| Engage 1-2 | `engage/engage-1-2-learning-log.md` |
| Learn 1-0 | `learn/learn-1-0-codedex-variables.md` |
| Learn 1-1 | `learn/learn-1-1-html-academy.md` |
| Learn 1-2 | `learn/learn-1-2-figma-variables.md` |
| Practice 1-1 | `practice/practice-1-1-the-story-teller.md` |
| Build 1-1 | `build/build-1-1-portfolio-migration.md` |
| Build 1-2 | `build/build-1-2-the-foundation.md` |
| Reflect 1-1 | `reflect/reflect-1-1-visual-notes.md` |
| Resources | `resources/week-1-resources.md` |

---

## External Resources (Verify Links)

**Assigned Reading:**
- [ ] [Figma Design Systems 101](https://www.figma.com/blog/design-systems-101-what-is-a-design-system)
- [ ] [NN Group Design Systems 101](https://www.nngroup.com/articles/design-systems-101/)
- [ ] [Penpot Intro to Design Tokens](https://penpot.app/blog/intro-to-design-tokens/)

**Figma Resources:**
- [ ] [FreeCodeCamp Figma Variables Handbook](https://www.freecodecamp.org/news/variables-in-figma-handbook)
- [ ] [Figma Variables Playground](https://www.figma.com/community/file/1253443272911187215)

**Reference:**
- [ ] [OpenProps](https://open-props.style/)
- [ ] [Nathan Curtis: Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)

**Video:**
- [ ] [Design Tokens for Dummies](https://www.youtube.com/watch?v=CJyJN0ZdEGA)
- [ ] [CSS Variables in 100 Seconds](https://www.youtube.com/watch?v=NtRmIp4eMjs) — Fireship

---

## If Things Go Wrong

**Figma Variables panel not showing:**
- View → Local Variables
- Or click the variable icon in the right sidebar

**Variables aren't showing when applying:**
- Make sure variable is scoped to the property (fill, stroke, etc.)
- Check collection is published to the file

**Mode switching doesn't work:**
- Variables must be applied, not hardcoded
- Frame needs to be set to use that collection's mode

**Students don't know what colors to use:**
- Start with what's in their portfolio
- Use OpenProps as reference for values
- Aim for 3-5 colors, not 20

**Design systems feels abstract:**
- Ground it in pain: "You have 47 different blues. How do you fix this?"
- Show before/after of messy code cleaned with tokens

---

## Files to Have Open

### Day 1
1. VS Code (project structure example)
2. Browser with design system examples (Spectrum, Material, Primer)
3. Event flow diagram
4. normalize.css website
5. Build 1-1 brief

### Day 2
1. Figma (blank file for live demo)
2. Style guide template
3. Build 1-2 brief
4. Learning log questions displayed

---

## Week 0 → Week 1 → Week 2 Progression

| Week 0 | Week 1 | Week 2 |
|--------|--------|--------|
| Console exploration | Design tokens in Figma | Design tokens in CSS |
| Reading code | Building style guides | Writing JavaScript |
| Understanding DevTools | Understanding systems | Implementing systems |
| Any website | Their portfolio (design) | Their portfolio (code) |

Week 1 is the design bridge: "Plan it in Figma before you code it."
