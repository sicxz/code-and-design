# Practice 2-2: The Memory

**Due:** Before Day 2
**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 45-60 minutes

---

## Overview

Your theme toggle works, but refresh the page and the choice disappears. The browser has no memory.

In this lab, you'll give it one. Using `localStorage`, your site will remember the user's preference — even after they close the browser and come back days later.

---

## What You're Learning

- `localStorage.setItem()` — saving data in the browser
- `localStorage.getItem()` — retrieving saved data
- Data attributes (`data-theme`) as a pattern for state
- The DevTools Application panel

---

## Requirements

Add localStorage persistence to your theme toggle:

- [ ] When the user selects a theme, save their choice to localStorage
- [ ] When the page loads, check localStorage and apply the saved theme
- [ ] Use `data-theme` on `<html>` (refactored from classes on body)

---

## The Refactor: From Classes to Data Attributes

Last week we used:
```javascript
document.body.classList.toggle('dark');
```

This week, we're upgrading to:
```javascript
document.documentElement.dataset.theme = 'dark';
```

**Why the change?**

| Approach | Good for |
|----------|----------|
| `classList.toggle()` | Simple on/off states |
| `dataset.theme` | Storing meaningful values (light, dark, system) |

Data attributes are semantic — they say *what* the state is, not just that it changed.

**CSS targeting:**
```css
/* Old: class on body */
body.dark { --color-surface: #1a1a1a; }

/* New: data attribute on html */
[data-theme="dark"] { --color-surface: #1a1a1a; }
```

---

## Step-by-Step Guide

### Step 1: Update Your CSS

Change your dark mode selector:

```css
/* Light mode (default) */
:root {
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-accent: #0066cc;
}

/* Dark mode via data attribute */
[data-theme="dark"] {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
  --color-accent: #66b3ff;
}
```

### Step 2: Update Your Toggle Logic

Replace your old toggle code:

```javascript
// Find all theme toggle buttons
const buttons = document.querySelectorAll('[data-theme-toggle]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the theme this button sets
    const theme = button.dataset.themeToggle;

    // Set the theme on the document
    document.documentElement.dataset.theme = theme;

    // Save to localStorage
    localStorage.setItem('theme', theme);
  });
});
```

**New syntax: `forEach`**

```javascript
// querySelectorAll returns a list
// forEach runs code for each item in the list
buttons.forEach((button) => {
  // This code runs once per button
});
```

### Step 3: Update Your HTML

Give each button a `data-theme-toggle` attribute:

```html
<button data-theme-toggle="light">Light</button>
<button data-theme-toggle="dark">Dark</button>
```

### Step 4: Load the Saved Theme

At the top of your script (outside any event listener):

```javascript
// Check if there's a saved theme
const savedTheme = localStorage.getItem('theme');

// If there is, apply it
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}
```

This runs once when the page loads.

### Step 5: Test It

1. Click "Dark" to switch themes
2. Open DevTools → Application tab → Local Storage
3. You should see `theme: dark`
4. Refresh the page
5. The dark theme should persist!

---

## Complete Criteria

Your lab is complete when:

- [ ] Theme saves to localStorage (visible in DevTools → Application)
- [ ] Theme loads correctly on refresh
- [ ] Using `document.documentElement.dataset.theme` pattern
- [ ] No console errors

---

## Stretch Goals

1. **Add a "System" button**
   ```html
   <button data-theme-toggle="system">System</button>
   ```
   When clicked, clear the localStorage entry and follow OS preference. (We'll build this fully in Lab 2-2.)

2. **Show the current theme**
   Display which theme is active (e.g., highlight the current button).

3. **Animate the button state**
   Add a visual indicator showing which theme is selected.

---

## Understanding localStorage

### The Basics

```javascript
// Save a value
localStorage.setItem('key', 'value');

// Retrieve a value
const value = localStorage.getItem('key');

// Remove a value
localStorage.removeItem('key');

// Clear everything
localStorage.clear();
```

### Important Notes

- Everything is stored as a string
- Data persists until explicitly deleted
- Each domain has its own localStorage (your site can't read other sites' data)
- There's a size limit (~5MB) — plenty for preferences

### DevTools Inspection

1. Open DevTools
2. Go to Application tab (or Storage in Firefox)
3. Expand Local Storage
4. Click your domain
5. See all stored key-value pairs

You can edit and delete values directly in DevTools. Great for testing!

---

## Troubleshooting

### Using the Application Tab (Your Best Friend)

The Application tab in DevTools shows exactly what's in localStorage. Here's how to use it:

**Opening it:**
1. Open DevTools (F12 or Cmd+Opt+I)
2. Click the **Application** tab (in Firefox, it's called **Storage**)
3. In the left sidebar, expand **Local Storage**
4. Click on your domain (like `localhost` or `file://`)

**What you'll see:**
```
Key          │  Value
─────────────┼─────────
theme        │  dark
```

**Testing with it:**
- **Edit values:** Double-click any value to change it, then refresh
- **Delete values:** Right-click → Delete, then refresh to test first-visit behavior
- **Clear all:** Right-click → Clear, to start fresh

### "localStorage is not defined"

This happens in some sandboxed environments. Try:
1. If using CodePen, it should work — check if you're in a preview iframe
2. If opening HTML directly from your computer, use a local server (VS Code Live Server extension)
3. Some privacy browsers block localStorage — try Chrome or Firefox

### Theme doesn't persist after refresh

**Step-by-step debugging:**

1. **Click your theme button**
2. **Check Application tab immediately** — is `theme: dark` (or whatever) saved?
   - If NO: Your `setItem` code isn't running. Check for errors in Console.
   - If YES: Continue to step 3.

3. **Refresh the page**
4. **Check Application tab again** — is the value still there?
   - If NO: Something is clearing it. Check for `localStorage.clear()` or `removeItem` in your code.
   - If YES: Continue to step 5.

5. **Check the Console** — run this:
   ```javascript
   localStorage.getItem('theme')
   ```
   Does it return your saved value?

6. **Check your load code** — your `getItem` and `setAttribute` code should run immediately when the page loads (not inside an event listener).

### forEach error: "buttons.forEach is not a function"

This means you used `querySelector` (returns one element) instead of `querySelectorAll` (returns a list).

```javascript
// ❌ This won't work with forEach
const buttons = document.querySelector('[data-theme-toggle]');

// ✅ This works with forEach
const buttons = document.querySelectorAll('[data-theme-toggle]');
```

### Data attribute not setting correctly

Check the DevTools Elements panel. After clicking, does `<html>` have `data-theme="dark"`?

```javascript
// ✅ Correct: sets data-theme on <html>
document.documentElement.dataset.theme = 'dark';

// ❌ Wrong: sets on <body> (which won't match your CSS selector)
document.body.dataset.theme = 'dark';
```

Make sure your CSS selector matches:
```css
/* Matches: <html data-theme="dark"> */
[data-theme="dark"] { ... }

/* Does NOT match <body data-theme="dark"> unless you wrote it that way */
```

---

## Connection to Project 1

This is the core of "The System." After this lab:
- ✓ Design tokens working
- ✓ Theme toggle working
- ✓ Persistence working
- → Next: System preference fallback (Lab 2-2)

---

## Resources

- [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: Storage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
- [MDN: Storage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
- [MDN: HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
