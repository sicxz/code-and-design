# Practice 4-2: The Interaction

*10 points · Complete/Incomplete · Due before Week 5*

**Time estimate:** 45-60 minutes

**Prerequisite:** Practice 4-1 (The Anatomy)

---

## Overview

Make your cleaned SVG icon interactive and accessible. You'll add hover states, keyboard focus, and ARIA labels so that everyone can use your icon — mouse users, keyboard users, and screen reader users.

**What you'll build:** A fully accessible, keyboard-navigable icon with smooth hover/focus states.

---

## What You're Learning

- **Interactive states:** Hover, focus, active
- **Keyboard accessibility:** `tabindex`, focus visibility
- **ARIA basics:** `aria-label`, `role` attributes
- **Screen reader testing:** VoiceOver/NVDA basics
- **CSS transitions:** Smooth state changes (preview of Week 5)

---

## Requirements

- [ ] Hover state works (color changes on mouse over)
- [ ] Focus state is visible (keyboard navigation shows outline)
- [ ] SVG is keyboard focusable (`tabindex`)
- [ ] ARIA label present and descriptive
- [ ] Screen reader announces icon correctly
- [ ] Smooth transitions between states
- [ ] No accessibility errors in DevTools

---

## Starter Code

Use your completed Practice 4-1 code, or start with this:

### index.html

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice 4-2: The Interaction</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Interactive SVG Icons</h1>

    <div class="demo-section">
      <h2>Basic Icon (from Practice 4-1)</h2>
      <svg class="icon-bookmark" width="48" height="48" viewBox="0 0 24 24">
        <path d="M5 4C5 2.9 5.9 2 7 2H17C18.1 2 19 2.9 19 4V22L12 18L5 22V4Z" />
      </svg>
      <p class="status">Try hovering — should change color</p>
    </div>

    <div class="demo-section">
      <h2>STEP 1: Make it keyboard accessible</h2>
      <!-- HINT: Add tabindex, role, aria-label -->
      <svg class="icon-bookmark icon-interactive"
           width="48" height="48"
           viewBox="0 0 24 24">
        <path d="M5 4C5 2.9 5.9 2 7 2H17C18.1 2 19 2.9 19 4V22L12 18L5 22V4Z" />
      </svg>
      <p class="status">Try pressing Tab — should receive focus</p>
    </div>

    <div class="demo-section">
      <h2>STEP 3: Add click interaction</h2>
      <!-- This will toggle "favorited" state -->
      <svg class="icon-heart icon-interactive"
           width="48" height="48"
           viewBox="0 0 24 24"
           id="favorite-toggle">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <p class="status" id="heart-status">Not favorited</p>
    </div>

    <button class="theme-toggle" id="theme-toggle">Toggle Theme</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### styles.css

```css
/* Design tokens */
:root {
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-icon: #666;
  --color-icon-hover: #000;
  --color-accent: #e74c3c;
  --color-focus: #3498db;
}

[data-theme="dark"] {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
  --color-icon: #ccc;
  --color-icon-hover: #fff;
  --color-accent: #e74c3c;
  --color-focus: #5dade2;
}

/* Base styles */
body {
  background: var(--color-surface);
  color: var(--color-text);
  font-family: system-ui, sans-serif;
  padding: 2rem;
  transition: background 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 700px;
  margin: 0 auto;
}

.demo-section {
  margin: 3rem 0;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.status {
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
}

/* Basic icon (from Practice 4-1) */
.icon-bookmark {
  fill: var(--color-icon);
  transition: fill 0.2s ease;
  cursor: pointer;
}

.icon-bookmark:hover {
  fill: var(--color-icon-hover);
}

/* STEP 2: Add focus styles */
.icon-interactive {
  /* Add your focus styles here */
}

.icon-interactive:focus {
  outline: ______;  /* HINT: 2px solid var(--color-focus) */
  outline-offset: ______;  /* HINT: 2-4px for breathing room */
}

/* STEP 2b: Better focus (only on keyboard) */
.icon-interactive:focus:not(:focus-visible) {
  /* Remove outline on mouse click */
  outline: ______;  /* HINT: none */
}

.icon-interactive:focus-visible {
  /* Show outline on keyboard Tab */
  outline: ______;  /* HINT: Same as :focus */
}

/* STEP 4: Heart icon states */
.icon-heart {
  fill: none;  /* Start unfilled */
  stroke: var(--color-icon);
  stroke-width: 2;
  transition: fill 0.3s ease, stroke 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.icon-heart:hover {
  stroke: var(--color-accent);
}

.icon-heart.is-favorited {
  /* HINT: What changes when favorited? */
  fill: ______;  /* Fill it in */
  stroke: ______;  /* Match the fill */
}

/* Theme toggle button */
.theme-toggle {
  background: var(--color-text);
  color: var(--color-surface);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
}
```

### script.js

```javascript
// Theme toggle
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', function() {
  const html = document.documentElement;
  const currentTheme = html.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = newTheme;
});

// STEP 5: Add click interaction for heart icon
const heart = document.getElementById('favorite-toggle');
const heartStatus = document.getElementById('heart-status');

heart.addEventListener('click', function() {
  // HINT: Toggle the 'is-favorited' class
  this.classList.toggle('______');

  // HINT: Update aria-pressed attribute
  const isFavorited = this.classList.contains('is-favorited');
  this.setAttribute('aria-pressed', ______);

  // Update status text
  heartStatus.textContent = isFavorited ? 'Favorited!' : 'Not favorited';
});

// STEP 6: Add keyboard support (Enter/Space)
heart.addEventListener('keydown', function(event) {
  // HINT: Check if Enter or Space was pressed
  if (event.key === '______' || event.key === ' ') {
    event.preventDefault();  // Prevent page scroll on Space
    this.click();  // Trigger the click handler
  }
});
```

---

## Step-by-Step Guide

### Step 1: Add ARIA Attributes (10 min)

Make the bookmark icon keyboard accessible:

```html
<svg class="icon-bookmark icon-interactive"
     tabindex="0"
     role="button"
     aria-label="Bookmark this page"
     width="48" height="48"
     viewBox="0 0 24 24">
  <path d="..." />
</svg>
```

**Attributes added:**
- `tabindex="0"` — Makes SVG focusable with Tab key
- `role="button"` — Tells screen readers this acts like a button
- `aria-label="Bookmark this page"` — Provides text description

**Test:** Press Tab key. You should be able to focus the icon (but no visual feedback yet).

---

### Step 2: Add Visible Focus Styles (10 min)

Fill in the blanks in CSS:

```css
.icon-interactive:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: 4px;  /* Space between icon and outline */
}
```

**Test:** Tab to the icon. You should see a blue outline.

**The problem:** Outline also shows when you click with mouse (looks awkward).

**The solution:** Use `:focus-visible` (keyboard only):

```css
/* Remove outline on mouse click */
.icon-interactive:focus:not(:focus-visible) {
  outline: none;
}

/* Show outline on keyboard Tab */
.icon-interactive:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 4px;
}
```

**Test again:**
- Click with mouse → no outline
- Tab with keyboard → outline appears

---

### Step 3: Add ARIA to Heart Icon (5 min)

The heart icon is a toggle button (on/off state):

```html
<svg class="icon-heart icon-interactive"
     tabindex="0"
     role="button"
     aria-label="Add to favorites"
     aria-pressed="false"
     id="favorite-toggle"
     width="48" height="48"
     viewBox="0 0 24 24">
  <path d="..." />
</svg>
```

**New attribute:**
- `aria-pressed="false"` — Indicates toggle state (false = not pressed, true = pressed)

---

### Step 4: Style the Favorited State (5 min)

Fill in the CSS blanks:

```css
.icon-heart.is-favorited {
  fill: var(--color-accent);
  stroke: var(--color-accent);
}
```

**This means:** When the class `.is-favorited` is added, the heart fills in with the accent color (red).

---

### Step 5: Add Click Interaction (10 min)

Fill in the JavaScript blanks:

```javascript
heart.addEventListener('click', function() {
  // Toggle the class
  this.classList.toggle('is-favorited');

  // Update ARIA state
  const isFavorited = this.classList.contains('is-favorited');
  this.setAttribute('aria-pressed', isFavorited);

  // Update status text
  heartStatus.textContent = isFavorited ? 'Favorited!' : 'Not favorited';
});
```

**Test:** Click the heart. It should fill in (and out on second click).

---

### Step 6: Add Keyboard Support (5 min)

Fill in the blanks:

```javascript
heart.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();  // Prevent page scroll on Space
    this.click();  // Trigger the click handler
  }
});
```

**Test:**
- Tab to heart icon
- Press Enter or Space
- Heart should toggle (same as clicking)

---

### Step 7: Screen Reader Testing (10 min)

**macOS: VoiceOver**
```
Cmd + F5 to enable
VO + Right Arrow to navigate
VO + Space to activate
```

**Windows: NVDA**
- Download free from nvaccess.org
- Insert + Down Arrow to navigate
- Enter to activate

**What to listen for:**
- "Bookmark this page, button" (for bookmark icon)
- "Add to favorites, toggle button, not pressed" (for heart icon)
- After clicking: "Add to favorites, toggle button, pressed"

**If it doesn't announce correctly:**
- Check `role="button"` is present
- Check `aria-label` has descriptive text
- Check `aria-pressed` updates on click

---

## Complete Criteria

- [ ] Bookmark icon has `tabindex`, `role`, `aria-label`
- [ ] Heart icon has `tabindex`, `role`, `aria-label`, `aria-pressed`
- [ ] Focus state visible on keyboard Tab (outline)
- [ ] No focus outline on mouse click (`:focus-visible`)
- [ ] Hover state works (color change)
- [ ] Heart toggles on click (fills/unfills)
- [ ] Heart toggles on Enter/Space key
- [ ] `aria-pressed` updates on toggle
- [ ] Screen reader announces labels correctly
- [ ] Smooth transitions between states
- [ ] No console errors

---

## Stretch Goals

1. **Add more icons** — Create a row of 5 icons, all keyboard accessible
2. **Icon button component** — Make a reusable pattern (HTML template)
3. **Tooltip on hover** — Show label text as tooltip using `title` attribute or custom div
4. **Loading state** — Add `aria-busy="true"` while "saving" favorite
5. **Error state** — Show error styling + `aria-invalid` if action fails
6. **Keyboard shortcuts** — Add `accesskey` attribute (e.g., `accesskey="b"` for bookmark)

---

## Troubleshooting

### "I can't Tab to the icon"

**Diagnosis:**
- Check if `tabindex="0"` is present
- Check if another element is preventing focus

**Cause:** Missing `tabindex` attribute.

**Fix:** Add `tabindex="0"` to the `<svg>` element.

---

### "Screen reader doesn't announce the icon"

**Diagnosis:**
- Check if `aria-label` is present
- Check if `role="button"` is present
- Test with actual screen reader, not just DevTools

**Cause:** Missing ARIA attributes.

**Fix:** Add both `role="button"` and `aria-label="descriptive text"`.

---

### "Focus outline shows when I click with mouse"

**Diagnosis:**
- Check if using `:focus` instead of `:focus-visible`

**Cause:** `:focus` applies to both mouse and keyboard.

**Fix:** Use `:focus-visible` for keyboard-only outlines:

```css
.icon:focus:not(:focus-visible) {
  outline: none;  /* Remove on mouse */
}

.icon:focus-visible {
  outline: 2px solid var(--color-focus);  /* Show on keyboard */
}
```

---

### "Enter/Space doesn't toggle the heart"

**Diagnosis:**
- Check if `keydown` event listener is attached
- Check if checking for correct keys (`event.key`)

**Cause:** Missing keyboard event handler.

**Fix:** Add `keydown` listener checking for `'Enter'` and `' '` (space).

---

### "`aria-pressed` doesn't update"

**Diagnosis:**
- Check if `setAttribute('aria-pressed', ...)` is in click handler
- Check if passing boolean or string

**Cause:** `setAttribute` requires string value.

**Fix:**
```javascript
const isFavorited = this.classList.contains('is-favorited');
this.setAttribute('aria-pressed', isFavorited);  // Boolean converts to string
```

---

## Connection to Project

**Build 4-2: The Refinement uses these exact techniques:**

1. Export mark from Figma (Build 4-1)
2. Clean SVG code (Practice 4-1 workflow)
3. Add keyboard accessibility (`tabindex`, `role`, `aria-label`) ← **This lab**
4. Add focus styles (`:focus-visible`) ← **This lab**
5. Test with screen reader ← **This lab**
6. Week 5: Add CSS transitions for smooth feedback

You're building the skills for your project, step by step.

---

## Answer Key

<details>
<summary>Click to reveal complete code</summary>

### Complete HTML

```html
<svg class="icon-bookmark icon-interactive"
     tabindex="0"
     role="button"
     aria-label="Bookmark this page"
     width="48" height="48"
     viewBox="0 0 24 24">
  <path d="M5 4C5 2.9 5.9 2 7 2H17C18.1 2 19 2.9 19 4V22L12 18L5 22V4Z" />
</svg>

<svg class="icon-heart icon-interactive"
     tabindex="0"
     role="button"
     aria-label="Add to favorites"
     aria-pressed="false"
     id="favorite-toggle"
     width="48" height="48"
     viewBox="0 0 24 24">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>
```

### Complete CSS

```css
.icon-interactive:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: 4px;
}

.icon-interactive:focus:not(:focus-visible) {
  outline: none;
}

.icon-interactive:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 4px;
}

.icon-heart.is-favorited {
  fill: var(--color-accent);
  stroke: var(--color-accent);
}
```

### Complete JavaScript

```javascript
const heart = document.getElementById('favorite-toggle');
const heartStatus = document.getElementById('heart-status');

heart.addEventListener('click', function() {
  this.classList.toggle('is-favorited');

  const isFavorited = this.classList.contains('is-favorited');
  this.setAttribute('aria-pressed', isFavorited);

  heartStatus.textContent = isFavorited ? 'Favorited!' : 'Not favorited';
});

heart.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    this.click();
  }
});
```

</details>

---

## Resources

- [MDN: ARIA Best Practices for Buttons](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
- [MDN: Using tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
- [MDN: :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [WebAIM: Testing with Screen Readers](https://webaim.org/articles/screenreader_testing/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

---

**Next: Build 4-1 (design your personal mark) and Build 4-2 (code it with these techniques)!**
