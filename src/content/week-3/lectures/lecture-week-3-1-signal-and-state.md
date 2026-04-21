# Lecture: Signal & State

**Week 3**
**Duration:** 60-75 minutes
**Format:** Lecture + Live Demo + Project Brief

---

## Learning Objectives

By the end of this lecture, students will:
- Know how to export Figma tokens to CSS variables
- Understand how to refactor CSS to use design tokens
- Know why we upgrade from classes to data attributes for state
- Understand the difference between **state** and **styling**
- Be able to implement a toggle using `data-theme`
- See the pattern: User acts → State changes → CSS responds

---

## Pre-Lecture Setup

- Working theme toggle from Week 2 (Practice 2-1: The Switch)
- DevTools ready (Console + Application tabs)
- System dark mode toggle accessible (System Preferences)
- Demo files ready in CodePen or locally

---

## Part 1: Design Tokens and Refactor (foundation)

Implementing your system

#### The Problem: Scattered Decisions

[**Tokens demo on codepen.io**](https://codepen.io/tmasingale/pen/qENVjME)

**Question:** "How many places does exist `#ffffff`?"

**Question:** "What happens when the client says 'make the white a little warmer'?"

**Problem:** "Find and replace 47 times. Miss one, your design is inconsistent. And this takes time and energy.

#### The Solution: One Source of Truth

#### Refactor you CSS variables

**Refactor** means reorganizing code that already works so it is cleaner, easier to understand, and easier to change later, without changing how it looks or behaves.

This is like cleaning up a Photoshop, InDesign, or Illustrator file after you have been working in it for a while.

The design on the screen does not change.
 But behind the scenes:

- layers get renamed
- unused swatches get deleted
- groups get organized
- repeated styles get centralized

The artwork looks the same.
 The file becomes easier to maintain, update, and hand off to someone else.

That is refactoring in code.

Refactoring is about **improving maintainability without changing functionality**.

#### The Vocabulary

- **Refactor** = Cleaning up structure while preserving appearance and function
- **Token** = A design decision stored in one place
- **Variable** = The CSS syntax for storing a token (`--name: value`)
- **var()** = How you use a token (`var(--name)`)
- `:root` = The top of the document (where global tokens live)

### One More Setup Step (Important)

Before we build the toggle, make sure your CSS defines **both visual modes explicitly**.

Right under your main `body` style, add:

```css
body.light {
  --color-surface: #ffffff;
  --color-text: #111111;
}

body.dark {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```



Why this matters:

- light and dark are now **both real states**
- the system starts in a known condition
- toggling becomes symmetric and predictable

At this stage:

- classes describe appearance
- no state yet
- no memory yet
- just visual modes

This gives us a clean foundation before we refactor the architecture later.

------

This keeps:

- No discussion of state yet
- No data attributes introduced yet
- Focus stays on visual cause and effect
- Quietly introduces reversible logic (toggle symmetry)

---

## Part 2: State and Data Attributes (the decision)

## Quick Review - the switch (appearence only)

*Students have already built this in Practice 2-1-the switch . Brief recap only.*

### The Three Concepts

1. **querySelector** — Find things on the page
2. **addEventListener** — When this happens, do that
3. **classList.toggle** — Flip a state on/off

### The Problem

**[DEMO]**

**[the switch on codepen.io](https://codepen.io/tmasingale/pen/dPXZRJo)**

1. Toggle to dark mode
2. Refresh the page
3. It resets to light

> "The toggle works. But the browser forgets the users choice."

**Key line:**

> "The system works, but it has no memory. Today we'll learn how to give it one."

### What We've Built So Far

```javascript
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
});
```

This works visually — but only in one direction.

- First click → page becomes dark
- Second click → dark class removed
- But the system no longer knows what "light mode" is

Light is implicit.
Dark is explicit.
That becomes a problem when we later add memory and state.

### Step 1 — Make Both Visual Modes Explicit

Before upgrading the toggle, we must define **both themes as real modes**.

Add these directly under your main `body` style:

```css
body.light {
  --color-surface: #ffffff;
  --color-text: #111111;
}

body.dark {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

Why we do this:

- light is now a real mode, not a default accident
- dark is a real mode
- both states are symmetric
- the system can switch cleanly between them



### Step 2 — Start the Page in a Known State

We must tell the system which mode it begins in.

```javascript
document.body.classList.add('light');
```

This guarantees:

- the page always starts in light mode
- the state is predictable
- toggling will always work correctly

---

### Step 3 — Upgrade the Toggle (Two‑Way Switching)

Now we convert the one‑way toggle into a symmetric switch:

```javascript
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
});
```

What this does:

- if body has `light`, remove it and add `dark`
- if body has `dark`, remove it and add `light`

Now:

- light and dark are both explicit
- switching is reversible
- the system always has a clear visual state

At this stage:

- classes still control appearance
- no state yet
- no memory yet
- just visual modes working correctly

This is the final version for **Practice 3‑1**.

>

#### Why This Matters

"Imagine a user picks dark mode, then navigates to another page. Reset. Comes back tomorrow. Reset."

"A good system remembers."



---

### Section 1: Beyond Appearances

So far, you've learned how to change the look of a webpage using CSS classes and JavaScript. Clicking a button can make text bold, or hovering over an image can give it a border. This is how we create visual feedback.

But not everything we build is just about appearance.

What about remembering that a user is logged in?

- That items are in a cart?
-  That a menu is open?
-  That a theme is dark?

For this, we need a new concept.

We need to understand **state**

### State

*noun*

*In web development, state is the memory of a system. It is the data that stores the current condition of something so the system can behave correctly.*

Think of a light switch.

The switch has a visual position: up or down.
 But the important part is not how it looks.

The important part is its state:
**on** or **off**.

The position of the switch is just a visual representation.
 The state is what actually controls the light.

> State is the truth about your site's condition.
>  The user interface is just a reflection of that truth.

**Remember this:**

**State = The current condition of the system that must be remembered**

Examples:

- theme is light or dark
- menu is open or closed

### State vs. **Styling**

It's easy to confuse state with styling.

Let's separate them.

Imagine an accordion menu.

- **State**: Is this panel open or closed?
   That is the fact the system must remember.
- **Styling**: How do we show that fact visually?
  - Background color changes.
  -  Arrow rotates.
  -  Content becomes visible.

```
User clicks button
      ↓
STATE changes: "now in dark mode"
      ↓
CSS rules for dark mode apply
      ↓
User sees the change
```

> The UI does not store the decision.
>
> It reflects the decision.

### The Trouble with Classes

CSS classes are excellent for styling.

They let us group visual rules and apply them efficiently.

But problems start when we ask classes to do a second job:
 **storing state.**

When we write:

`<body class="dark">`

This class is no longer just about appearance.

It is recording a decision:
 **the user chose dark mode.**

Now that class is doing two jobs:

1. Telling CSS how to style things
2. Storing what the user chose

That works.
 But it mixes concerns.

In design terms, we are mixing **appearance** and **meaning**.

Now imagine:

- You want a class called `dark` for dark buttons
- Another developer sees `class="dark"`

Is that a color?

- A theme?
-  A mood?
-  A state?

The name now means two different things at once.

That makes systems harder to read, harder to change, and easier to break.

Using `classList.toggle('dark')` works.

But it is:

> state wearing a styling costume.



## Section 2: Introduction to Data Attributes

### Data Attributes: State's New Home

Last week, we built a working toggle.

JavaScript added a `dark` class.

- CSS responded.
-  The UI updated.

It works.

But now we know something important.

That class is not really describing appearance.
 **It is storing a decision the user made.**

## That is state.

HTML gives us a better place to store state:
 **data attributes**.

> Data attributes store information about an element, separate from styling.

They are labels for memory.

The syntax is simple:

`data-` followed by a name you choose.

```html
<html data-theme="dark">
```

Read that out loud: "data, theme, equals, dark."

Now think about what that says in plain English:

> This element has a piece of data.
>  That data is called "theme."
>  Its value is "dark."

Without knowing any JavaScript or CSS, you already understand:

- what the information is about
- what decision has been made
- what the current state is

That is what **self-documenting** means.

**Compare this:**

```html
<body class="dark">
```

Read it out loud:

**class, dark**

What does that mean?

- Is the background dark?
- Are the buttons dark?
- Is this a theme?
- Is this a mood?
- Is this just styling?

You cannot tell.

Now compare:

```html
<html data-theme="dark">
```

This is unambiguous.

- It is **data**
- About the **theme**
- With the value **dark**

No guessing.
No interpretation.
No documentation required.

------

### Framing in Design

> Good code reads like good interface labels.
>  You should understand what it means without opening a manual.

Just like in our design system and tokens:

- "Primary Button"
- "Surface Color"
- "Body Text"

Not:

- "BlueThing1"
- "Style2"
- "TempClass"

## A Quick Note on Naming and Semantics

We chose the name `data-theme` on purpose.

The browser does not care what we call this.

We could write:

```html
<html data-cow="dark">
```

This would still work.

But humans care.

Good systems use names that describe what the state *means*.

- `theme` describes the decision
- `dark` describes the value

**This is semantic naming.**

It makes your code readable:

- six weeks from now
- to your teammate
- to your future self

This is the same discipline you use with:

- color tokens
- typography tokens
- component naming (ux 1, 2, 3)

## Naming is a design decision.



### Updating the System (Converting Classes → State)

Now we refactor the system.

We are not changing how the page looks.
We are changing **where the decision lives**.

We update three things:

1. **CSS** — selectors change from classes to data attributes
2. **JavaScript** — toggle logic changes from classList to dataset
3. **HTML** — add a default state to prevent flash of unstyled content

### Step 1 — Update the CSS (Classes → Data Attributes)

**Before (class-based):**

```css
body.light {
  --color-surface: #ffffff;
  --color-text: #111111;
}

body.dark {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

These classes controlled appearance, but they were also storing the decision.

Now we move the decision into data.

**After (state-based):**

```css
[data-theme="light"] {
  --color-surface: #ffffff;
  --color-text: #111111;
}

[data-theme="dark"] {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

What changed:

- we are no longer styling classes

- we are styling **state**

- the selector now means:

  > "When the theme equals dark, use these tokens"

Now CSS is no longer guessing.
It is responding directly to the system's truth.

---

## Step 2 — Update the JavaScript (Appearance → State)

Here is the version we had before:

```javascript
const toggle = document.querySelector(".theme-toggle");

// Initialize the page in light mode
document.body.classList.add("light");

// Toggle both classes
toggle.addEventListener("click", function () {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});
```

This worked visually, but:

- the decision lived inside classes
- the system had no explicit state

---

### Step 3 — Update the HTML (Set the Default)

Add the starting state directly to your HTML:

**Before:**

```html
<html lang="en">
```

**After:**

```html
<html lang="en" data-theme="light">
```

#### Why This Matters

There's a brief moment when the page loads but JavaScript hasn't run yet.

During that moment:

- The browser is rendering your page
- Your CSS selectors like `[data-theme="light"]` are looking for a match
- But JavaScript hasn't set the attribute yet

This can cause a **flash of unstyled content (FOUC)** — the page appears broken for a split second before JavaScript kicks in.

By adding the default in HTML:

- CSS has something to match immediately
- The page renders correctly from the first frame
- JavaScript handles the toggle from there

> The HTML provides the default truth.
> JavaScript updates the truth when the user acts.

This is **progressive enhancement** — the page works before JavaScript, and JavaScript makes it interactive.

---

Now let's see the complete state-based version.

### New Version — Using `data-theme`

```javascript
const toggle = document.querySelector('.theme-toggle');

// Toggle the theme state
toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
});
```

Notice: No initialization line. The HTML already set `data-theme="light"` as the default.

Let's read this in plain English.

### What This Code Is Doing

**On click:**

```javascript
const currentTheme = document.documentElement.dataset.theme;
```

This reads the current state from the system.

---

```javascript
let newTheme;
if (currentTheme === 'dark') {
  newTheme = 'light';
} else {
  newTheme = 'dark';
}
```

This is decision logic:

- If we are currently in dark mode, the new theme should be light
- Otherwise (we must be in light mode), the new theme should be dark

We use `let` instead of `const` because we need to assign the value inside the if/else block.

---

```javascript
document.documentElement.dataset.theme = newTheme;
```

This writes the new truth into the system.

No classes.
No styling logic.

Just:

> "The theme is now dark"
> or
> "The theme is now light"

### What Changed Architecturally

Before:

- classes stored appearance
- classes stored decisions
- CSS and JS were tightly coupled

Now:

- `data-theme` stores the decision
- CSS only responds to state
- JavaScript only updates truth

We now have:

- explicit state
- clean separation
- a system ready for memory



### The Pattern

```
User acts
    ↓
STATE changes (data-theme)
    ↓
CSS responds
    ↓
UI updates
```

> JavaScript changes the truth.
> Data attributes store the truth.
> CSS reflects the truth.

---

## Closing (5 min)

### What You Accomplished Today

1. ✓ Exported your Figma tokens to CSS variables
2. ✓ Defined visual modes (body.light, body.dark)
3. ✓ Understood the difference between **state** and **styling**
4. ✓ Upgraded from classes to data attributes
5. ✓ Built a toggle that uses `data-theme`

### The Pattern You Learned

```
User acts
    ↓
STATE changes (data-theme)
    ↓
CSS responds
    ↓
UI updates
```

### What's Missing

Your toggle works — but refresh the page. It resets.

**The browser has no memory.**

### Next Class (Day 2)

We'll add:
- **localStorage** — the browser's notebook for remembering preferences
- **System preference detection** — respect the user's OS settings
- **Reduced motion** — accessibility for motion-sensitive users

This completes Project 1: Signal & State.

---

## Practice 3-1: The Inheritance

**In-class work time** — export your Figma tokens and build your toggle.

By the end of class, you should have:
- `variables.css` with your design tokens
- Theme toggle working with `data-theme` on `<html>`
- DevTools showing the attribute changing when you click

---

## Instructor Notes

- Part 1 covers tokens and refactoring — students may need help with the Figma export plugin
- Part 2 is the conceptual core — spend time on the state vs styling distinction
- The "state wearing a styling costume" metaphor resonates well
- Make sure everyone has `data-theme` working before class ends
- localStorage is Day 2 — don't go there today
