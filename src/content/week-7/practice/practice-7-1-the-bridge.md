# Practice: The Bridge

**Points:** 10
**Time Estimate:** 30–45 minutes (in-class, Day 2)

---

## TL;DR

Port your Project 1 theme toggle into your scrollytelling site. Add dark mode tokens, a toggle button, and localStorage persistence — so your storytelling site respects user preferences from day one.

---

## Submit

Push to GitHub. Submit your GitHub Pages URL to Canvas.

---

## Overview

You built a theme system in Project 1: Signal & State. Your scrollytelling site doesn't have one yet. Today you bring it over.

This isn't starting from scratch — you already know how this works. You're *porting* tested code into a new project and adapting it to your scrollytelling design tokens. Think of it like moving furniture into a new apartment: same pieces, different layout.

Getting the theme toggle in now means your site respects user preferences *before* you start adding GSAP animations in Build 7-2. The `prefers-reduced-motion` check you'll add next pairs naturally with the `prefers-color-scheme` detection you're adding today.

---

## What You're Building

A working dark mode toggle in your scrollytelling site:

- Dark mode token overrides in your `tokens.css`
- A toggle button with proper accessibility
- JavaScript that handles detection, switching, and persistence

---

## What You're Learning

| Concept | What It Does | Reference |
|---------|-------------|-----------|
| `data-theme` attribute | Stores current theme on `<html>` for CSS targeting | [MDN: data-*](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) |
| `[data-theme="dark"]` selector | CSS attribute selector to apply dark tokens | [MDN: Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) |
| `localStorage` | Persists theme choice across page loads | [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) |
| `matchMedia()` | Detects system color scheme preference | [MDN: matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) |
| `prefers-color-scheme` | CSS media query for system theme | [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) |

---

## Requirements

### Core
- [ ] Toggle button added to your site with `aria-label`
- [ ] `data-theme` attribute used on `<html>` element
- [ ] Dark mode token overrides added to `tokens.css`
- [ ] At least 5 tokens swap between light/dark (surfaces, text, accent — minimum)
- [ ] localStorage saves and loads theme preference
- [ ] System preference detected for first-time visitors (`matchMedia`)
- [ ] Toggle works repeatedly (light → dark → light)

### Stretch Goals
- [ ] Smooth color transitions between modes (`transition: background-color 0.3s, color 0.3s`)
- [ ] Toggle icon changes with mode (sun/moon)
- [ ] Section-specific background tokens differentiated in dark mode
- [ ] "System" option that clears localStorage and follows OS

---

## Step-by-Step Guide

### Step 1: Add Dark Mode Tokens

Open your `tokens.css` (or `variables.css`). You already have light mode tokens. Add dark mode overrides using the `data-theme` attribute selector:

```css
/* ========================================
   LIGHT MODE (default)
   ======================================== */
:root {
  --color-surface-primary: #ffffff;
  --color-surface-secondary: #f5f5f5;
  --color-text-primary: #111111;
  --color-text-secondary: #555555;
  --color-accent: #3b82f6;
}

/* ========================================
   DARK MODE
   ======================================== */
[data-theme="dark"] {
  --color-surface-primary: #1a1a1a;
  --color-surface-secondary: #2a2a2a;
  --color-text-primary: #f0f0f0;
  --color-text-secondary: #aaaaaa;
  --color-accent: #60a5fa;
}
```

**Use your own token names and values.** The example above is a starting point — your scrollytelling site has its own palette. At minimum, swap: primary surface, secondary surface, primary text, secondary text, and accent.

<details>
<summary>Hint: What if my tokens file looks different?</summary>

Whatever variable names you used in your rough cut, keep them. Just add the `[data-theme="dark"]` block that overrides those same variable names with dark values. If your CSS already uses the variables, everything switches automatically.

</details>

---

### Step 2: Add the Toggle Button

Add this to your HTML. A good spot: inside your `<header>` or `<nav>`, or fixed-positioned so it's always accessible.

```html
<button class="theme-toggle" aria-label="Toggle dark mode">
  <span class="theme-toggle__icon" aria-hidden="true">&#9790;</span>
</button>
```

Style it so it's visible but not distracting:

```css
.theme-toggle {
  position: fixed;
  top: var(--space-sm, 1rem);
  right: var(--space-sm, 1rem);
  z-index: 100;
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-text-secondary);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

<details>
<summary>Hint: What if my P1 toggle used a different approach?</summary>

If your Project 1 used `body.dark` instead of `data-theme`, switch to the `data-theme` attribute approach. It's cleaner and avoids specificity issues:

```javascript
// Instead of: document.body.classList.toggle('dark')
// Use: document.documentElement.dataset.theme = 'dark'
```

The `documentElement` is the `<html>` tag. `dataset.theme` maps directly to the `data-theme` attribute.

</details>

---

### Step 3: Add Theme JavaScript

Create a new file `scripts/theme.js` or add this to the top of your `main.js` — **before** any animation code.

```javascript
// ========================================
// THEME SYSTEM — Ported from Project 1
// ========================================

// 1. Check for saved preference (runs immediately)
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}

// 2. Toggle on click
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', function () {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});
```

If you use a separate `theme.js` file, link it in your HTML **before** `main.js`:

```html
<script src="scripts/theme.js"></script>
<script src="scripts/main.js"></script>
```

<details>
<summary>Hint: Why put theme.js before main.js?</summary>

The theme should be set before any animation code runs. If your GSAP animations reference token-based colors, the correct theme needs to be active first. Order matters.

</details>

---

### Step 4: Test Everything

1. **Toggle test:** Click the button. Do colors switch? Click again. Do they switch back?
2. **Persistence test:** Switch to dark, refresh the page. Still dark?
3. **System preference test:** Clear localStorage (DevTools → Application → Local Storage → right-click → Clear). Set your OS to dark mode. Refresh. Does the site start in dark?
4. **Keyboard test:** Can you Tab to the toggle button? Does it have a visible focus ring? Can you activate it with Enter or Space?
5. **Token check:** Open DevTools → Elements → `<html>`. Is `data-theme="dark"` present when in dark mode?

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Dark mode has no visible effect | Check that your CSS uses `[data-theme="dark"]` selector, not a class. Inspect `<html>` to confirm the attribute is being set. |
| Flash of wrong theme on load | Move theme detection to `<head>` in an inline `<script>`, or load `theme.js` before other scripts with no `defer`. |
| Toggle doesn't persist after refresh | Check localStorage in DevTools → Application → Local Storage. Is the key being set? |
| Some elements don't change color | You have hardcoded colors somewhere. Search your CSS for hex values (`#`) that aren't using variables. |
| Can't see the toggle button | Check `z-index` and `position: fixed`. The button may be behind a section. |
| `matchMedia` returns undefined | Make sure you access `.matches`: `window.matchMedia('(prefers-color-scheme: dark)').matches` |

---

## Complete Criteria

Your practice is complete when:

- [ ] Toggle button visible and clickable
- [ ] Dark mode tokens swap at least 5 values
- [ ] Theme persists across page refresh (localStorage)
- [ ] First-time visitors get their system preference
- [ ] Toggle is keyboard-accessible with visible focus
- [ ] No console errors

---

## Evaluation

| Criteria | Points |
|----------|--------|
| Toggle works (light ↔ dark) | 3 |
| Tokens swap correctly (5+ values) | 3 |
| Persistence + system detection | 2 |
| Accessible (aria-label, keyboard, focus ring) | 2 |

---

## Connection to Course

This bridges Project 1 and Project 2. The theme system you built in Weeks 1–3 now lives inside your scrollytelling site. When you add GSAP animations next (Build 7-2: The Pulse), the `prefers-reduced-motion` check pairs with the `prefers-color-scheme` detection you added today — both respect user preferences, both are checked with `matchMedia`.

Your site now has two preference-aware systems:
- Color scheme (today)
- Motion (Build 7-2)

---

## Resources

- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [MDN: data-* attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [CSS-Tricks: A Complete Guide to Dark Mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
