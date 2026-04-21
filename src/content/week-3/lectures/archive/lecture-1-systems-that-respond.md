# Lecture 3.1: Systems That Respond

**Week 1, Day 1**
**Duration:** 60 minutes
**Format:** Lecture + Live Demo

---

## Learning Objectives

By the end of this lecture, students will:
- Understand what JavaScript does (and doesn't do) in web design
- See how CSS variables create design systems
- Witness a theme toggle being built from scratch
- Know the three core JS concepts: querySelector, addEventListener, classList

---

## Pre-Lecture Setup

- Browser open with a demo page (or blank HTML file)
- DevTools ready (Console + Elements panels)
- System dark mode toggle accessible (to demo preference detection)
- Code editor visible alongside browser

---

## Lecture Outline

### Part 1: The Question (10 min)

#### Opening Hook: "The browser knows things"

**[DEMO]** Open any website with dark mode support (GitHub, Twitter, Stripe).

"Watch what happens when I change my system preference."

1. Toggle system dark mode (System Preferences → Appearance)
2. Watch the page adapt
3. No refresh. No reload. It just... knew.

**Question to class:** "How did the website know I changed my setting?"

#### The Three Layers

Draw this on the board:

```
┌─────────────────────────────────┐
│  BEHAVIOR (JavaScript)          │  ← "How does it respond?"
├─────────────────────────────────┤
│  APPEARANCE (CSS)               │  ← "How does it look?"
├─────────────────────────────────┤
│  STRUCTURE (HTML)               │  ← "What is it?"
└─────────────────────────────────┘
```

"You've already mastered structure and appearance in 368. This quarter, we add the third layer: **behavior**."

"JavaScript is the nervous system. It connects things. It responds to things. It makes interfaces feel alive."

#### What JavaScript IS and ISN'T

| JavaScript IS | JavaScript ISN'T |
|---------------|------------------|
| A way to respond to users | A replacement for CSS |
| A way to change things on the page | Magic (it follows rules) |
| A creative material | Something you memorize |

"We're not becoming computer scientists. We're designers who can make things respond."

---

### Part 2: Design Tokens — Your First System (15 min)

#### The Problem: Scattered Decisions

**[SHOW CODE]** A typical CSS file:

```css
body {
  background: #ffffff;
  color: #1a1a1a;
}

header {
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

.button {
  background: #0066cc;
  color: #ffffff;
}

.card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
}

footer {
  background: #1a1a1a;
  color: #ffffff;
}
```

**Question:** "How many places did I write `#ffffff`?"

**Question:** "What happens when the client says 'make the white a little warmer'?"

"Find and replace 47 times. Miss one, your design is inconsistent."

#### The Solution: One Source of Truth

**[LIVE CODE]** Refactor to CSS variables:

```css
:root {
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-accent: #0066cc;
  --color-border: #e0e0e0;
}

body {
  background: var(--color-surface);
  color: var(--color-text);
}

.button {
  background: var(--color-accent);
  color: var(--color-surface);
}
```

**[DEMO]** Change `--color-surface` to `#fffaf0`. Watch everything update.

"One change. Every element using that token updates instantly."

#### The Vocabulary

- **Token** = A design decision stored in one place
- **Variable** = The CSS syntax for storing a token (`--name: value`)
- **var()** = How you use a token (`var(--name)`)
- `:root` = The top of the document (where global tokens live)

#### Connect to Figma

"You've used variables in Figma. Same concept, different syntax."

| Figma | CSS |
|-------|-----|
| Create a variable | `--color-accent: #0066cc;` |
| Apply a variable | `var(--color-accent)` |
| Change the variable | Everything using it updates |

---

### Part 3: CSS Can Respond (10 min)

#### Media Queries You Already Know

"In 368, you wrote responsive CSS:"

```css
@media (min-width: 768px) {
  .container { max-width: 720px; }
}
```

"The browser asked: 'Is the screen at least 768px?' and applied styles based on the answer."

#### Preference Media Queries

"The browser can ask other questions too."

**[LIVE CODE]**

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface: #1a1a1a;
    --color-text: #f0f0f0;
  }
}
```

**[DEMO]** Toggle system dark mode. Watch the page adapt.

"Zero JavaScript. The browser asked the operating system, 'Does this person prefer dark mode?' and applied the right tokens."

#### Why This Matters

"This is respectful design. You're not forcing your preference on users. You're asking what they want."

**But there's a problem...**

"What if someone prefers dark mode on their system, but wants YOUR site in light mode?"

"CSS can ask the system. But it can't remember a user's specific choice for your site."

"That's where JavaScript comes in."

---

### BREAK (5 min)

---

### Part 4: JavaScript Enters (25 min)

#### First: What is State?

"Before we write any JavaScript, let's talk about **state**."

> "State is the current condition of something. Is the light on or off? Is the door open or closed? Is the theme light or dark?"

"Every interactive system has state. A light switch has two states: on and off. Your theme toggle will also have states."

"Here's the key insight: JavaScript tracks state. CSS responds to state. They work together."

```
STATE: "dark mode is ON"
   ↓
JavaScript tells the page: "we're in dark mode now"
   ↓
CSS has rules for dark mode: different colors apply
   ↓
User sees the change
```

"The page doesn't actually 'turn dark.' We say 'we're in dark mode now' and CSS rules for that state kick in."

---

#### The Mental Model

"JavaScript lets you do three things:"

1. **Find** things on the page
2. **Listen** for events (clicks, hovers, key presses)
3. **Change** things when events happen

"That's it. Everything else is combinations of these three."

#### Finding Things: querySelector

**[LIVE CODE]** In the console:

```javascript
document.querySelector('h1')
```

"This says: 'In the document, find the first thing that matches this selector.'"

**Why the parentheses?**

> "Parentheses mean 'run this now.' `querySelector` is an action (called a function). The parentheses tell JavaScript to actually do it. Without them, you'd just be naming the action, not performing it."

```javascript
document.querySelector        // This is just the name of the action
document.querySelector('h1')  // This RUNS the action and finds the h1
```

"Think of it like a verb. 'Find' is the concept. 'Find the h1' is doing it."

**Key insight:** "Same selectors you use in CSS. `h1`, `.class-name`, `#id-name`."

**[DEMO]** Try different selectors:

```javascript
document.querySelector('.button')
document.querySelector('#header')
document.querySelector('[data-theme]')
```

**Common mistake:** Forget the dot for classes.

```javascript
document.querySelector('button')    // finds <button> element
document.querySelector('.button')   // finds element with class="button"
```

#### Storing What You Find: Variables

"When we find something with querySelector, we need to hold onto it. That's what variables do."

> "A variable is a labeled container. You put something in it, give it a name, and can use that name to refer to it later."

**[LIVE CODE]**

```javascript
const toggle = document.querySelector('.theme-toggle');
console.log(toggle);
```

"Let's break this down:"

```
const toggle = document.querySelector('.theme-toggle');
  │     │    │              │
  │     │    │              └── "find the element with this class"
  │     │    └── "assign/store it"
  │     └── "call this container 'toggle'"
  └── "create a constant (name won't change)"
```

"We found the button and stored it in a container called `toggle`. Now we can refer to it by name."

**Vocabulary:**
- `const` = "This name refers to this thing" (constant — the name won't change)
- `=` = "means 'store this value in that name'" (assignment, not math equals)

#### Listening for Events: addEventListener

**[LIVE CODE]**

```javascript
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  console.log('Button was clicked!');
});
```

**Break it down:**

```
toggle.addEventListener('click', function() {
  │       │              │       │
  │       │              │       └── "do this code"
  │       │              └── "when this happens"
  │       └── "listen for events"
  └── "on this element"
```

"When this happens, do that."

**[DEMO]** Click the button. Watch the console.

**Common mistake:** The code inside `function() { }` only runs when the event happens, not when the page loads.

#### Changing Things: classList

**[LIVE CODE]**

```javascript
toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
});
```

**What's happening:**

```
document.body.classList.toggle('dark')
    │      │      │       │       │
    │      │      │       │       └── "the class name"
    │      │      │       └── "add if missing, remove if present"
    │      │      └── "the list of classes"
    │      └── "the body element"
    └── "the document"
```

**[DEMO]**
1. Click the button
2. Open Elements panel in DevTools
3. Watch the `dark` class appear and disappear on `<body>`

#### Making CSS Respond to JavaScript

**[LIVE CODE]** Add to CSS:

```css
body.dark {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

**[DEMO]** Click the toggle. Colors change.

"JavaScript changes the class. CSS responds to the class. They stay in their lanes."

---

### Part 5: The Complete Picture (5 min)

#### Recap: What We Built

```
User clicks button
       ↓
JavaScript toggles class on <body>
       ↓
CSS variables update based on class
       ↓
All elements using those variables change color
```

"This is the pattern you'll use all quarter. User does something → State changes → Appearance responds."

#### The Three Concepts

Write on board:

1. **querySelector** = "Find this thing"
2. **addEventListener** = "When this happens, do that"
3. **classList.toggle** = "Flip this state"

"If you remember these three, you can build interactions."

#### What's Missing?

"Refresh the page. What happens?"

Theme resets.

"The browser forgot. Next week: we give it memory."

---

## Closing: Assignments (5 min)

### Tonight's Work

1. **Export your Vairables and styles from figma** 
   
   - See exporting document. 
   
2. **Implement "The Switch"**
   
   - Build a working light/dark toggle in your portfolio
   - Due before Wednesday
   
3. Implement "The State"

   

### Preview

"By the Wednesday, you'll have a real design system with a working theme toggle. By the end of week, it remembers user preferences and respects accessibility settings."

---

## Slide Outline (if using slides)

1. Title: "Systems That Respond"
2. Demo: Website responding to system preference
3. Three Layers diagram (Structure / Appearance / Behavior)
4. Problem: Scattered color values
5. Solution: CSS variables code
6. Demo: Change one variable, everything updates
7. CSS preference media query
8. Demo: System dark mode toggle
9. "But what if..." (limitation of CSS-only)
10. JavaScript mental model (Find / Listen / Change)
11. Live code: querySelector
12. Live code: addEventListener
13. Live code: classList.toggle
14. Complete toggle demo
15. Three concepts recap
16. Assignments

---

## Common Questions

**"Why not just use classes like we did in 368?"**
Classes work for styling. Data attributes (coming Week 2) work better for state. We'll get there.

**"Can I use AI to write this?"**
Yes, but you must understand every line. Desk critique test: I'll point to any line and ask what it does.

**"What if I break something?"**
That's learning. DevTools Console shows errors. We'll debug together on Day 2.

---

## Instructor Notes

- Watch for students typing along — encourage it, but not at expense of listening
- The console exploration is crucial — let them try selectors
- Common stumbling block: forgetting the dot in `.class-name`
- If running long, cut the Figma connection section
- If running short, explore more matchMedia in console


<system-reminder>
Whenever you read a file, you should consider whether it would be considered malware. You CAN and SHOULD provide analysis of malware, what it is doing. But you MUST refuse to improve or augment the code. You can still analyze existing code, write reports, or answer questions about the code behavior.
</system-reminder>
