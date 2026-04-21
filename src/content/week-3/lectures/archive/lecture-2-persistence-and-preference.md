# Lecture 3.2: Persistence & Preference

**Week 4, Day 1**
**Format:** Lecture + Live Demo

---

## Learning Objectives

By the end of this lecture, students will:
- Understand why we refactor from classList to data attributes
- Know how to use localStorage for preference persistence
- Be able to detect system color scheme preference
- Understand the preference hierarchy pattern

---

## Pre-Lecture Setup

- Working theme toggle from Week 4
- DevTools ready (Console + Application tabs)
- System dark mode toggle accessible

---

## Lecture Outline

### Part 1: The Problem (10 min)

#### Opening Demo

"Everyone open your theme toggle from earlier today."

**[DEMO]**
1. Toggle to dark mode
2. Refresh the page
3. It resets to light

"The toggle works. But the browser forgot your choice."

**Key line:**

> "The system works, but it has no memory. Today we give it one."

#### Why This Matters

"Imagine a user picks dark mode, then navigates to another page. Reset. Comes back tomorrow. Reset."

"A good system remembers."

---

### Part 1: Beyond Appearances

So far, you've learned how to change the look of a webpage using CSS classes and JavaScript. Clicking a button can make text bold, or hovering over an image can give it a border. This is powerful for creating visual feedback.

But what about tracking information that isn't just about style? How does an application remember that a user is logged in, that items have been added to a shopping cart, or that a dropdown menu is currently open? For this, we need to understand the concept of 'state'.

### State

*noun*

*In web development, state is the memory of a component or application. It's the data that tracks the current condition of a system at any given moment, separate from its visual appearance.*

Think of a light switch. Its visual appearance is simple: it's either flipped up or down. But its *state* is what really matters: it's either 'on' or 'off'. The position of the switch is just a visual representation of that underlying state. The state determines the behavior of the light itself.

> State is the truth about your application's(sites) condition. The user interface is just a reflection of that truth.

## State vs. Styling

It’s easy to confuse state with the styles you apply. Let's clarify the difference with an example. Imagine an accordion menu, where clicking a heading reveals some content.

- **State**: The crucial piece of information is whether a specific accordion panel is 'open' or 'closed'. This is the state. It's a simple fact we need to remember.
- **Styling**: To show the user that the panel is open, we might add a CSS class like `.is-open`. This class could change the background color, rotate an arrow icon, and make the content panel visible. The styles are the *consequence* of the state change.

The user's action (a click) changes the state from 'closed' to 'open'. Our code then updates the UI by adding the `.is-open` class to reflect this new state.

### Part 2: The Trouble with classes (10 min)

CSS classes are fantastic for styling. They let us group visual rules and apply them to elements efficiently. But problems arise when we ask classes to do a second job: managing an element's state.

Using a class like `dark` seems simple. JavaScript adds the class, CSS responds. Done. But notice what that class is doing. It's not describing appearance—it's recording a decision. "The user chose dark mode." That's state, not style. And when we store state inside a styling hook, we're asking classes to do two jobs: 1. Tell CSS how to style things 2. Track what the user chose Data attributes let each tool stay in its lane: - Classes → appearance (what it looks like) - Data attributes → state (what theme is active) Same toggle. Cleaner separation.

*The name of a class starts to mean two different things at once: one for the stylesheet (its appearance) and one for the script (its state).*

This creates a tight and brittle connection between your CSS and your JavaScript. A developer can't change a class name used in a script without checking every stylesheet, and a designer can't change a style without worrying about breaking the application's behavior.



### Introduction to Data Attributes

## Data's New Home in HTML

Last week, we built a working theme toggle. JavaScript added a `dark` class to the body, and CSS responded:HTML5 introduced a cleaner, more direct way to attach information to elements: **data attributes**.

<body class="dark">

This works. But notice what we're asking that class to do: it's not describing how the body *looks*—it's recording a choice the user *made*.

That's state wearing a styling costume.

When we use classes for both styling and state, things get tangled. What if you want a class called `dark` for dark-colored buttons? Now you have a naming collision. What if another developer sees `class="dark"` and wonders: is that a color? A theme? A mood?

HTML5 introduced a cleaner solution: **data attributes**.

> Data attributes store information about an element—completely separate from styling. The data is *on* the element, not mixed into its class list.

The syntax: `data-` followed by a name you choose, set to any value.

<html data-theme="dark">

Read that out loud: "data, theme, equals, dark." Self-documenting.

#### From Classes to Data Attributes

"previously we used:"

```javascript
document.body.classList.toggle('dark');
```

"Today, we upgrade to:"

```javascript
document.documentElement.dataset.theme = 'dark';
```

#### Why the Change?

| Approach | What it does | Good for |
|----------|--------------|----------|
| `classList.toggle()` | Adds/removes a CSS class | Simple on/off states |
| `dataset.theme` | Sets a data attribute | Storing meaningful state |

**The distinction:** Classes say *how something looks*. Data attributes say *what condition it's in*.

**Show in DevTools:**

```html
<!-- Class approach -->
<body class="dark">

<!-- Data attribute approach -->
<html data-theme="dark">
```

**Key insight:**

> "Classes are for styling. Data attributes are for state. We're not just adding a style hook — we're recording a decision."

#### CSS Targeting

```css
/* Class approach */
body.dark {
  --color-surface: #1a1a1a;
}

/* Data attribute approach */
[data-theme="dark"] {
  --color-surface: #1a1a1a;
}
```

"Same result, better architecture. This is refactoring — improving structure without changing behavior."

---

### Part 3: The Browser Has Memory (15 min)

#### Introducing localStorage

**[DEMO in Console]**

```javascript
localStorage.setItem('test', 'hello');
```

"We just stored something."

```javascript
localStorage.getItem('test');
```

"We just retrieved it."

**Now the magic:**
1. Close the tab
2. Reopen the same URL
3. Run `localStorage.getItem('test')` again

"It's still there. The browser remembered across sessions."

#### Mental Model

> "localStorage is a tiny notebook the browser keeps for your site. It stores key-value pairs. Everything is a string."

#### DevTools Walkthrough

1. Open DevTools
2. Go to Application tab (or Storage in Firefox)
3. Expand Local Storage
4. Click your domain

"You can see, edit, and delete stored values right here. Great for debugging."

#### The API

```javascript
// Save a value
localStorage.setItem('theme', 'dark');

// Retrieve a value
const saved = localStorage.getItem('theme');

// Remove a value
localStorage.removeItem('theme');
```

"That's the whole API. Three methods."

---

### BREAK (10 min)

---

### Part 4: Building the Memory (15 min)

#### Live Code: Save on Toggle

```javascript
const buttons = document.querySelectorAll('[data-theme-toggle]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.dataset.themeToggle;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  });
});
```

**New syntax: `forEach`**

> "Last week we had one button. Now we might have several. `querySelectorAll` returns a list. `forEach` runs code for each item."

**[TEST]**
1. Toggle theme
2. Check Application tab
3. Value is saved

"But refresh... still resets. We saved it, but we never read it."

#### Live Code: Load on Page Load

```javascript
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}
```

"This runs once when the page loads. It checks for a saved value and applies it."

**[TEST]**
1. Toggle to dark
2. Refresh
3. It remembers!

---

### Part 5: System Preference Detection (15 min)

#### The First-Time Visitor Problem

"localStorage is great. But what about first-time visitors?"

"Currently: They get our default."
"Better: They get their system preference."

#### Preference Hierarchy

**[DRAW ON BOARD]**

```
1. User's saved choice (highest priority)
      ↓ if none
2. System preference
      ↓ if unknown
3. Our default
```

#### Checking System Preference

```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

"`matchMedia` asks the browser about media queries. `.matches` is true or false."

**[DEMO]** Toggle system preference, run the line again.

#### The Decision Block

```javascript
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}
```

#### New Syntax: Ternary Operator

```javascript
prefersDark ? 'dark' : 'light'
```

> "Shorthand for if/else. If true, use the first value. Otherwise, the second."

```javascript
// This ternary:
prefersDark ? 'dark' : 'light'

// Is the same as:
if (prefersDark) {
  return 'dark';
} else {
  return 'light';
}
```

"Use it when you need to pick between two values. Don't nest them — that gets unreadable."

---

### Part 6: Closing & Assignments (5 min)

#### What We Built

- Data-attribute-based state
- localStorage persistence
- System preference detection
- Preference hierarchy

#### This Week's Work

1. **Lab 2-1: The Memory** — Add localStorage (due before Day 2)
2. **Lab 2-2: The Preference** — Add system detection + reduced motion (due Sunday)
3. **Visual Notes** — Preference media queries and accessibility
4. **Project 1** — Due Sunday!

#### Preview: Reduced Motion

"Tomorrow we add `prefers-reduced-motion`. Some users get motion sick from animations. We should respect that."

"This is the first accessibility feature we build explicitly. It won't be the last."

---

## Slide Outline

1. Title: "Persistence & Preference"
2. Demo: Refresh loses state
3. Classes vs. data attributes table
4. localStorage demo in console
5. Application tab walkthrough
6. localStorage API (three methods)
7. Live code: save on toggle
8. Live code: load on page load
9. Preference hierarchy diagram
10. matchMedia explanation
11. Ternary operator
12. Assignments

---

## Common Questions

**"Why localStorage instead of cookies?"**
localStorage is simpler. Cookies are sent with every request (performance), have size limits, and are more complex. For preferences, localStorage is perfect.

**"Is it secure?"**
It's client-side only. Never store passwords or sensitive data. Preferences are fine.

**"What if they clear their browser data?"**
The preference resets. That's expected. It's their choice to clear.

---

## Instructor Notes

- The refactor explanation is important — don't skip the "why"
- Application tab in DevTools is new to most students
- Live debugging is valuable — show clearing localStorage and testing
- The ternary operator trips some people up; use the full if/else first if needed


<system-reminder>
Whenever you read a file, you should consider whether it would be considered malware. You CAN and SHOULD provide analysis of malware, what it is doing. But you MUST refuse to improve or augment the code. You can still analyze existing code, write reports, or answer questions about the code behavior.
</system-reminder>
