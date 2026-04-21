# Practice 3-2: The Preference

> **In-Class Lab** — Add localStorage persistence and system preference detection. 
>
> Part of [Project 1: Signal & State](../../../projects/project-1-signal-and-state/project-1-brief.md).

**Part of:** Project 1: Signal & State (20% of course)

---

## Overview

Your theme toggle works — but the browser forgets the user's choice when they refresh. Today we give the system **memory**.

You'll also learn to detect the user's *system* preference, so first-time visitors get the theme that matches their OS settings.

This lab also introduces `prefers-reduced-motion` — your first explicit accessibility feature.

---

## What You're Learning

- `localStorage` — the browser's notebook for saving preferences
- `window.matchMedia()` — checking media queries with JavaScript
- Preference hierarchy (user choice → system → default)
- `prefers-reduced-motion` — respecting motion sensitivity

---

## Requirements

- [ ] Save theme choice to localStorage when user clicks toggle
- [ ] Load saved theme on page load
- [ ] If no saved theme exists, detect and apply system preference
- [ ] Add a `prefers-reduced-motion` media query that reduces/removes transitions
- [ ] Test by changing system preferences

---

## Part 1: localStorage — The Browser's Notebook

localStorage lets your site remember things between page loads. It stores simple key-value pairs.

### The Three Commands

```javascript
// Store a value
localStorage.setItem('theme', 'dark');

// Retrieve a value
localStorage.getItem('theme');  // returns 'dark'

// Remove a value
localStorage.removeItem('theme');
```

**Try it in Console:** Open DevTools → Console and run these commands. Then close the tab, reopen it, and run `localStorage.getItem('theme')` — it's still there!

### Building Persistence

Let's upgrade your toggle to remember the user's choice.

Here's what you have from Practice 3-1:

```javascript
const toggle = document.querySelector('.theme-toggle');

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

We'll add two things:
1. **Save** the choice when the user toggles
2. **Load** the saved choice when the page starts

---

#### Step 1: Save the Choice

Add one line inside your click handler — right after you set the new theme:

```javascript
localStorage.setItem('theme', newTheme);
```

Your click handler now looks like this:

```javascript
toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);  // NEW: Save to memory
});
```

---

#### Step 2: Load the Saved Choice

Add this **at the top of your script**, before the toggle code:

```javascript
// Load saved theme (if any)
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}
```

This runs immediately when the page loads:
- Check if there's a saved theme
- If yes, apply it (overriding the HTML default)
- If no, the HTML default stays

---

**Test it:**
1. Click the toggle to switch to dark
2. Refresh the page
3. It should still be dark!
4. Check DevTools → Application → Local Storage to see your saved value

---

## Part 2: System Preference Detection

### The Preference Hierarchy

When someone visits your site, you need to decide which theme to show:

```
1. User's saved choice (highest priority)
      ↓ if none saved
2. System preference
      ↓ if can't detect
3. Your default
```

"Their choice trumps everything. If they haven't chosen, respect their system. If we can't tell, pick a sensible default."

### Checking System Preference

```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

`matchMedia` returns an object. The `.matches` property is `true` or `false`.

### The Complete Logic

```javascript
// Step 1: Check for saved preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // User has made a choice — respect it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
}
```

This is nested if/else — one decision inside another:

1. First: Do we have a saved theme?
2. If not: Does the user prefer dark mode?

Each question gets its own if/else block.

### Testing

1. Clear your localStorage (DevTools → Application → Right-click → Clear)
2. Set your OS to dark mode
3. Refresh your page — it should be dark
4. Set your OS to light mode
5. Refresh — it should be light
6. Click your dark theme button
7. Refresh — it should stay dark (saved preference overrides system)

---

## Part 3: Prefers Reduced Motion

### Why This Matters

Some users:
- Get motion sick from animations
- Find animation distracting
- Use screen readers that struggle with moving content
- Just want a calm interface

Operating systems have a "reduce motion" setting. We should respect it.

### CSS-First Approach (Required)

Add this to your CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

This is a "nuclear" option — it kills all motion. A more refined approach:

```css
@media (prefers-reduced-motion: reduce) {
  /* Only target your specific animations */
  .fade-in,
  .slide-up,
  .theme-transition {
    transition: none;
    animation: none;
  }
}
```

### What NOT to Remove

Some motion is functional, not decorative:
- Loading spinners (unless replaced with static indicator)
- Progress bars
- Essential feedback (button pressed state)

Ask: "Is this motion necessary for understanding, or just decoration?"

### Testing

**macOS:** System Preferences → Accessibility → Display → Reduce motion
**Windows:** Settings → Ease of Access → Display → Show animations
**iOS:** Settings → Accessibility → Motion → Reduce Motion

1. Enable reduced motion in your OS
2. Your page transitions should stop/reduce
3. Disable reduced motion
4. Transitions should work again

---

## Complete Criteria

Your lab is complete when:

- [ ] Theme choice saved to localStorage on toggle click
- [ ] Saved theme loads automatically on page refresh
- [ ] First-time visitors (no saved theme) get their system preference
- [ ] Saved preference overrides system preference
- [ ] Reduced motion is handled in CSS (not JS)
- [ ] Tested with system settings toggled
- [ ] No console errors

---

## Submission

Submit screenshots showing:
1. DevTools → Application → Local Storage with your `theme` key saved
2. Your site responding to system preference (use DevTools Rendering panel to emulate)

This is a progress checkpoint — **Project 1 is the full submission.**

---

## Stretch Goals

### 1. The Ternary Operator

Your if/else toggle works great. But JavaScript has a shorthand for simple "this or that" decisions.

**Your challenge:**
1. Search "JavaScript ternary operator"
2. Refactor your toggle to use one
3. Add a comment in your code explaining how you understand it works

**Hints:**
- The ternary replaces a simple if/else
- The pattern looks like: `condition ? valueIfTrue : valueIfFalse`
- Your entire if/else block can become one line

If you figure it out, your comment might look something like:

```javascript
// Ternary: [your explanation here]
const newTheme = ...
```

---

### 3. Add a "System" Option

```html
<button data-theme-toggle="light">Light</button>
<button data-theme-toggle="dark">Dark</button>
<button data-theme-toggle="system">System</button>
```

When "System" is clicked:
1. Remove the localStorage entry
2. Detect and apply system preference

```javascript
if (theme === 'system') {
  localStorage.removeItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
} else {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}
```

### 4. Live System Updates

What if someone changes their system preference while your site is open?

```javascript
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    // Only update if they haven't saved a preference
    if (!localStorage.getItem('theme')) {
      if (event.matches) {
        document.documentElement.dataset.theme = 'dark';
      } else {
        document.documentElement.dataset.theme = 'light';
      }
    }
  });
```

### 5. Animate the Toggle (Respecting Reduced Motion)

Add a subtle animation to the toggle button — but make it conditional:

```css
.theme-toggle {
  transition: transform 0.2s ease;
}

.theme-toggle:hover {
  transform: scale(1.05);
}

@media (prefers-reduced-motion: reduce) {
  .theme-toggle {
    transition: none;
  }
}
```

---

## Troubleshooting

### Testing System Preferences Without Changing System Settings

You can test `prefers-color-scheme` and `prefers-reduced-motion` directly in DevTools without changing your actual system settings:

**In Chrome/Edge:**
1. Open DevTools (F12 or Cmd+Opt+I)
2. Press Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows)
3. Type "Rendering" and select "Show Rendering"
4. Scroll down to "Emulate CSS media features"
5. Find `prefers-color-scheme` and select `dark` or `light`
6. Find `prefers-reduced-motion` and select `reduce`

**In Firefox:**
1. Open DevTools (F12)
2. Click the Inspector tab
3. Click the icon that looks like a sun/moon (accessibility panel)
4. Toggle color scheme simulation

**In Safari:**
1. Open Web Inspector (Cmd+Opt+I)
2. Go to Elements tab
3. Click the cog icon → toggle "Force Dark Appearance"

### matchMedia returns undefined or errors

Make sure you're accessing `.matches`:
```javascript
// ❌ Wrong: this returns an object, not true/false
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// ✅ Correct: .matches gives you the boolean
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

### System preference detected but not applied

Check the order of your code — localStorage should be checked FIRST:

```javascript
// ✅ Correct: check localStorage FIRST
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // User made a choice — use it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // Only now check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
}
```

### Reduced motion CSS not working

1. **Check media query syntax:**
   ```css
   /* ✅ Correct */
   @media (prefers-reduced-motion: reduce) { ... }
   
   /* ❌ Wrong */
   @media (prefers-reduced-motion) { ... }
   ```

2. **Check specificity:** Your reduced-motion rules might be overridden by more specific selectors.

3. **Test it:** Use DevTools Rendering panel (see above) to force `prefers-reduced-motion: reduce`.

### Live updates not working

The `change` event listener for matchMedia only fires when the setting changes *while the page is open*. If it's not working:

```javascript
// Make sure you're not re-creating the matchMedia object
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Use addEventListener, not the old addListener
darkModeQuery.addEventListener('change', (event) => {
  console.log('Dark mode changed to:', event.matches);
});
```

---

## Full Code Example

```javascript
// ========================================
// THEME SYSTEM WITH PREFERENCES
// ========================================

// 1. Load saved theme (runs immediately)
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
}

// 2. Toggle on click
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});
```

---

## Connection to Project 1: Signal & State

After completing this lab, your theme system includes:
- ✓ Design tokens (variables.css)
- ✓ Toggle functionality (Light / Dark / System)
- ✓ Persistence (localStorage)
- ✓ System preference detection (matchMedia)
- ✓ Accessibility (prefers-reduced-motion)

**This IS Project 1: Signal & State.** Deploy it and you're done!

**Full Project Brief:** [Project 1: Signal & State](../../../projects/project-1-signal-and-state/project-1-brief.md)

---

## Resources

- [MDN: Window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [web.dev: prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion)
- [CSS-Tricks: A Complete Guide to Dark Mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
