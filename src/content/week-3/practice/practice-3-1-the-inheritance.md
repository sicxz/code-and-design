# Practice 3-1: The Inheritance

> **In-Class Lab** — Export your Figma variables to CSS. Part of [Project 1: Signal & State](../../../projects/project-1-signal-and-state/project-1-brief.md).

**Part of:** Project 1: Signal & State (20% of course)

---

## Overview

Time to bring your Figma variables into code. You'll create a `variables.css` file that mirrors your Figma collections, then build a working theme toggle using the conditionals you learned in Codedex.

This is where design meets development — your Figma decisions become real CSS.

---

## From Figma to Code

This assignment connects directly to your Figma Variables work. Your Figma collections become your CSS:

| Figma Collection | CSS Section |
|-----------------|-------------|
| `color_primitives` | Color Tokens (primitives) |
| `brand_colors` | Color Tokens (semantic) |
| `typography` | Typography Tokens |
| `spacing` | Spacing Tokens |

**Use your exact Figma variable names in your CSS.** If your Figma has `--color-brand-primary`, use the same name in `variables.css`. This creates a 1:1 relationship between your design file and your code.

---

## What You're Learning

- Organizing design tokens in a dedicated file
- Refactoring existing CSS to use variables
- Applying the toggle pattern to a real project
- Thinking systematically about design decisions

---

## Requirements

Apply the theme toggle pattern to your existing portfolio:

- [ ] Create a `variables.css` file with your brand tokens
- [ ] Refactor at least one page to use these tokens
- [ ] Add a working theme toggle

---

## Using the Export Plugin

1. **Install a plugin:** (each of these plugins works to an extent, none of them are perfect).
   1. Go to [Export Styles and Variables to CSS](https://www.figma.com/community/plugin/1332412206147274506) on Figma Community and click "Try it out"
   2. [CSS variables import/export](https://www.figma.com/community/plugin/1470777269812001046/css-variables-import-export)
   3. [Variables to CSS](https://www.figma.com/community/plugin/1256552240995753259)

2. **Open your portfolio file** in Figma (the one with your variables from Build 2-1)
3. **Make sure you're in Design mode** (not Dev mode)
4. **Run the plugin:** Right-click → Plugins → Export Styles and Variables to CSS
5. **Export your tokens:**
   - Click the "Variables" tab → Copy the output into a new `variables.css` file
   - Click the "Styles" tab → Copy into `figma-styles-temp.css` (optional reference)

The Variables output is your token file — the design decisions you made in Figma, now as code. 



## Organizing Your Token File

The plugin export gives you raw variables. Organize them into a clean `variables.css`:

```css
/* ===========================================
   Design Tokens — [Your Name]'s Portfolio
   =========================================== */

/* -----------------------------
   Color Tokens (from your Figma export)
   ----------------------------- */
:root {
  /* Your base colors go here */
  /* Surface, text, accent, border — whatever you exported */
}

/* -----------------------------
   Typography Tokens
   ----------------------------- */
:root {
  /* Your font families and sizes from Figma */
}

/* -----------------------------
   Spacing Tokens
   ----------------------------- */
:root {
  /* Your spacing scale from Figma */
}
```

**Key points:**
- `:root` holds your base token values
- Keep the same variable names your Figma export gave you
- Add comment sections to stay organized
- We'll add theme switching after the tokens are in place

---

## Step-by-Step Guide

### Step 1: Audit Your Current CSS

Before creating tokens, look at your existing stylesheets:

1. How many different colors do you use?
2. How many font sizes?
3. Are values repeated in multiple places?

Make a quick list. This helps you decide what to tokenize.

### Step 2: Create Your Token File

1. Create `variables.css` in your CSS folder
2. Start minimal — you can always add more:
   - 3-5 color tokens
   - 2-3 font sizes
   - 3 spacing values

3. Import you variables.css into your styles.css

```css
/* ===========================================
   My Style Sheet 
   =========================================== */
  @import "./variables.css";
```

This gives you:

- single source of truth
- predictable cascade
- reusable across pages and projects
- easy theming

This is how modern design systems are structured.



### Step 3: Refactor Your Existing CSS

Find hardcoded values in your stylesheets and replace them with your new variables:

**Before:**
```css
body {
  background-color: #ffffff;
  color: #1a1a1a;
  font-family: system-ui, sans-serif;
  padding: 32px;
}

h1 {
  font-size: 40px;
  margin-bottom: 24px;
}
```

**After:**
```css
body {
  background-color: var(--color-surface-primary);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
  padding: var(--space-xl);
}

h1 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-lg);
}
```

> 💡 **Tip:** This is a good opportunity to use GitHub Copilot. Ask it to "find hardcoded colors in my CSS and replace them with variables from variables.css" — it can speed up the tedious find-and-replace work.

### Step 4: Define Visual Modes (Classes First)

Now we need to define what "light mode" and "dark mode" actually look like. Add these rules to your `styles.css`:

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

**Why both modes?**
- Light is now a **real mode**, not just a default accident
- Dark is a **real mode**
- Both states are symmetric
- The system can switch cleanly between them

### Step 5: Build a Class-Based Toggle

You built a basic toggle in **Practice 2-1: The Switch**. Now we make it work with both modes.

Add a toggle button to your HTML:

```html
<button class="theme-toggle">Toggle Theme</button>
```

Add this JavaScript to your `main.js`:

```javascript
const toggle = document.querySelector('.theme-toggle');

// Start the page in light mode
document.body.classList.add('light');

// Toggle between modes
toggle.addEventListener('click', function() {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
});
```

**What this does:**
- Page starts in a known state (light mode)
- First click: removes `light`, adds `dark`
- Second click: removes `dark`, adds `light`
- Switching is now symmetric and predictable

**Test it:** Click the toggle. The page should switch between light and dark.

---

### Step 6: Understanding STATE (Why We Upgrade)

Your toggle works — but we're asking CSS classes to do two jobs:

1. **Styling:** Tell CSS how things should look
2. **Memory:** Track what the user chose

That's **state wearing a styling costume.**

Consider: What if you wanted a class called `dark` for dark-colored buttons? Now `class="dark"` could mean a theme *or* a button color. Confusing.

**State** is the current condition of something — is the theme light or dark? We need a cleaner place to store it.

### Step 7: Upgrade to Data Attributes

HTML5 gives us **data attributes** — a dedicated place for state:

```html
<html data-theme="dark">
```

This says: "This element has data called 'theme' with value 'dark'." No confusion with styling classes.

**Update your CSS** (in `styles.css`):

```css
/* Before (class-based) */
body.light { ... }
body.dark { ... }

/* After (state-based) */
[data-theme="light"] {
  --color-surface: #ffffff;
  --color-text: #111111;
}

[data-theme="dark"] {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

**Update your JavaScript** (in `main.js`):

```javascript
const toggle = document.querySelector('.theme-toggle');

// Initialize in light mode
document.documentElement.dataset.theme = 'light';

// Toggle the theme
toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = newTheme;
});
```

**What changed:**
- `document.documentElement` targets `<html>` (not `<body>`)
- `.dataset.theme` reads/writes the `data-theme` attribute
- State is now separate from styling

### Step 8: Test Everything

1. Click the toggle — do colors change?
2. Open DevTools → Elements panel
3. Find the `<html>` tag — does it show `data-theme="light"` or `data-theme="dark"`?
4. Click the toggle again — does the attribute change?
5. Check for console errors
6. Verify your page looks correct in both modes

**The Pattern:**
```
User clicks
    ↓
STATE changes (data-theme)
    ↓
CSS responds
    ↓
UI updates
```

> JavaScript changes the truth. Data attributes store the truth. CSS reflects the truth.

**Next:** In Practice 3-2, we'll add localStorage so the browser *remembers* the user's choice.

---

## Complete Criteria

Your lab is complete when:

- [ ] `variables.css` exists with at least 5 tokens
- [ ] At least one page uses the tokens (no hardcoded colors in main styles)
- [ ] Theme toggle works using `data-theme` on `<html>`
- [ ] DevTools shows `data-theme` attribute changing when you toggle
- [ ] No console errors

---

## Submission

Submit screenshots showing:
1. Your `variables.css` file with your tokens
2. DevTools Elements panel showing `data-theme` attribute on `<html>` when toggled

This is a progress checkpoint — **Project 1 is the full submission.**

---

## Naming Conventions

**Semantic vs. Literal:**

| Literal (avoid) | Semantic (prefer) |
|-----------------|-------------------|
| `--color-blue` | `--color-accent` |
| `--color-dark-gray` | `--color-text-secondary` |
| `--font-size-16` | `--font-size-base` |
| `--spacing-24` | `--space-lg` |

Semantic names describe *purpose*, not *appearance*. When your brand color changes from blue to green, `--color-accent` still makes sense.

---

## File Organization

Recommended structure for your portfolio:

```
portfolio/
├── index.html
├── about.html
├── work.html
├── css/
│   ├── variables.css    ← tokens (load first)
│   ├── reset.css        ← optional reset/normalize
│   └── styles.css       ← your styles using tokens
└── js/
    └── main.js         ← toggle logic
```

---

## Connection to Project 1: Signal & State

This lab covers **Day 1** of Project 1: Signal & State:
- ✓ Design tokens (variables.css)
- ✓ Theme toggle with data-theme
- ✓ Understanding state vs styling

**Next (Practice 3-2):** localStorage persistence + system preference detection

**Full Project Brief:** [Project 1: Signal & State](../../../projects/project-1-signal-and-state/project-1-brief.md)

---

## Resources

- [Open Props](https://open-props.style/) — See how a mature token system is organized
- [Tokens in Design Systems](https://css-tricks.com/what-are-design-tokens/) — CSS-Tricks overview
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

## Examples for Inspiration

Look at how these sites handle theming:

- [MDN Web Docs](https://developer.mozilla.org) — Theme picker in header
- [Josh Comeau's Blog](https://joshwcomeau.com) — Animated sun/moon toggle
