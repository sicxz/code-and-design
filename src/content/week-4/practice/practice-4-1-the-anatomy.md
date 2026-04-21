# Practice 4-1: The Anatomy

*10 points · Complete/Incomplete · Due before Week 5*

**Time estimate:** 45-60 minutes

---

## Overview

You're going to dissect, clean, and theme an SVG icon. By the end, you'll understand SVG structure from the inside out and make it theme-responsive with CSS variables.

**What you'll build:** A cleaned, theme-responsive bookmark icon that changes color based on light/dark mode.

---

## What You're Learning

- **SVG structure:** Elements, attributes, nesting
- **viewBox:** Coordinate system vs. display size
- **Path commands:** Reading and modifying paths
- **Optimization:** Removing metadata, simplifying code
- **CSS hooks:** Adding classes, targeting SVG elements
- **Theme integration:** CSS variables from Week 1-2

---

## Requirements

- [ ] SVG code is clean (no metadata, simplified)
- [ ] Semantic class added for CSS targeting
- [ ] CSS custom properties applied for fill/stroke
- [ ] Theme-responsive (changes with `data-theme`)
- [ ] Tests at different sizes (viewBox scales correctly)
- [ ] No console errors

---

## Starter Code

### index.html

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice 4-1: The Anatomy</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>SVG Anatomy</h1>

    <!-- STEP 1: Paste the "messy" SVG here -->
    <!-- This is what Figma gives you (simulated export) -->
    <div class="icon-wrapper">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Generator: Figma -->
        <g id="bookmark-icon">
          <g id="bookmark-body">
            <path id="Vector" d="M5.0000 4.0000C5.0000 2.8954 5.8954 2.0000 7.0000 2.0000H17.0000C18.1046 2.0000 19.0000 2.8954 19.0000 4.0000V22.0000L12.0000 18.0000L5.0000 22.0000V4.0000Z" fill="#1E1E1E"/>
          </g>
        </g>
      </svg>
    </div>

    <!-- STEP 6: Your cleaned SVG will go here -->
    <div class="icon-wrapper">
      <!-- Replace this comment with your cleaned SVG -->
    </div>

    <!-- Theme toggle for testing -->
    <button class="theme-toggle" id="theme-toggle">Toggle Theme</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### styles.css

```css
/* Design tokens from Week 1-2 */
:root {
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-icon: #333333;
  --color-icon-hover: #000000;
}

[data-theme="dark"] {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
  --color-icon: #f0f0f0;
  --color-icon-hover: #ffffff;
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
  max-width: 600px;
  margin: 0 auto;
}

.icon-wrapper {
  margin: 2rem 0;
  padding: 2rem;
  border: 2px dashed #ccc;
  display: inline-block;
}

/* STEP 7: Add your SVG styles here */
.icon-bookmark {
  /* HINT: What CSS property controls fill color? */
  fill: ______;

  /* HINT: Should the color change smoothly? */
  transition: ______;
}

.icon-bookmark:hover {
  /* HINT: What color on hover? */
  fill: ______;
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
// Theme toggle (from Week 2)
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', function() {
  const html = document.documentElement;
  const currentTheme = html.dataset.theme;

  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = newTheme;
});
```

---

## Step-by-Step Guide

### Step 1: Examine the "Messy" SVG (5 min)

Open the starter code in your editor. Look at the SVG in `index.html`.

**Identify the parts:**

```xml
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
```

**Questions to answer:**
- What are `width` and `height`? (Display size: 48px × 48px)
- What is `viewBox`? (Coordinate system: 0 to 24, 0 to 24)
- What is `xmlns`? (XML namespace — not needed for inline SVG)
- What is `fill="none"` doing? (Figma default — overridden by path fill)

```xml
<!-- Generator: Figma -->
```

**Question:**
- What is this comment for? (Metadata — Figma's signature, not needed)

```xml
<g id="bookmark-icon">
  <g id="bookmark-body">
```

**Question:**
- What are these `<g>` elements? (Groups — organizing elements like Figma layers)
- Do we need nested groups? (Not for this simple icon — can flatten)

```xml
<path id="Vector" d="M5.0000 4.0000C5.0000 2.8954 ..." fill="#1E1E1E"/>
```

**Questions:**
- What is `d="..."`? (Path data — drawing commands)
- What is `fill="#1E1E1E"`? (Hardcoded color — blocks CSS theming)
- Why so many decimal places? (Figma precision — can simplify)

**What we'll clean:**
1. Remove `xmlns` (not needed inline)
2. Remove `fill="none"` from `<svg>` (not doing anything)
3. Remove generator comment
4. Remove nested groups (flatten)
5. Change ID to semantic class
6. Remove inline fill (let CSS control it)
7. Simplify decimal precision

---

### Step 2: Copy the SVG to a Text Editor (5 min)

Copy just the `<svg>...</svg>` code to a separate file or scratchpad.

We'll clean it there, then paste it back.

---

### Step 3: Remove Metadata (3 min)

**Remove:**
- `xmlns="http://www.w3.org/2000/svg"` (not needed inline)
- `<!-- Generator: Figma -->` (metadata)
- `fill="none"` from `<svg>` tag (not doing anything)

**Before:**
```xml
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Generator: Figma -->
```

**After:**
```xml
<svg width="48" height="48" viewBox="0 0 24 24">
```

---

### Step 4: Flatten Groups (5 min)

**Remove nested `<g>` tags:**

**Before:**
```xml
<g id="bookmark-icon">
  <g id="bookmark-body">
    <path id="Vector" d="..." fill="#1E1E1E"/>
  </g>
</g>
```

**After:**
```xml
<path d="..." />
```

We don't need the groups for this simple icon. They're just adding complexity.

---

### Step 5: Add Semantic Class & Remove Inline Fill (5 min)

**Before:**
```xml
<svg width="48" height="48" viewBox="0 0 24 24">
  <path id="Vector" d="..." fill="#1E1E1E"/>
</svg>
```

**After:**
```xml
<svg class="icon-bookmark" width="48" height="48" viewBox="0 0 24 24">
  <path d="..." />
</svg>
```

**Changes:**
- Added `class="icon-bookmark"` (CSS hook)
- Removed `id="Vector"` (not semantic)
- Removed `fill="#1E1E1E"` (CSS will control color)

---

### Step 6: Simplify Path Data (Optional — 5 min)

**Before:**
```
M5.0000 4.0000C5.0000 2.8954 5.8954 2.0000 7.0000 2.0000H17.0000C18.1046 2.0000 19.0000 2.8954 19.0000 4.0000V22.0000L12.0000 18.0000L5.0000 22.0000V4.0000Z
```

**After (rounded to 1 decimal):**
```
M5 4C5 2.9 5.9 2 7 2H17C18.1 2 19 2.9 19 4V22L12 18L5 22V4Z
```

**How:**
- Remove trailing zeros: `5.0000` → `5`
- Round to 1 decimal: `2.8954` → `2.9`

**Why:**
- Smaller file size
- Easier to read
- Imperceptible visual difference for icons

**Tool:** You can use an online SVG optimizer (like SVG OMG) or do this manually.

---

### Step 7: Paste Cleaned SVG into HTML (5 min)

Replace the comment in the second `.icon-wrapper`:

```html
<div class="icon-wrapper">
  <svg class="icon-bookmark" width="48" height="48" viewBox="0 0 24 24">
    <path d="M5 4C5 2.9 5.9 2 7 2H17C18.1 2 19 2.9 19 4V22L12 18L5 22V4Z" />
  </svg>
</div>
```

**Save and preview in browser.** You should see two identical bookmarks — one messy, one clean.

---

### Step 8: Add CSS for Theming (10 min)

Fill in the blanks in `styles.css`:

```css
.icon-bookmark {
  fill: var(--color-icon);  /* Design token */
  transition: fill 0.2s ease;  /* Smooth color change */
  cursor: pointer;
}

.icon-bookmark:hover {
  fill: var(--color-icon-hover);  /* Hover state */
}
```

**Save and test:**
- Hover over the clean icon → should change color
- Hover over messy icon → nothing (inline fill blocks CSS)

---

### Step 9: Test Theme Switching (5 min)

Click the "Toggle Theme" button.

**Expected behavior:**
- Background switches (light ↔ dark)
- Text color switches
- **Clean icon switches color** (responds to `--color-icon`)
- Messy icon stays same color (hardcoded fill)

**This proves:** Removing inline styles lets CSS control theming.

---

### Step 10: Test Different Sizes (5 min)

Change the `width` and `height`:

```xml
<!-- Small -->
<svg class="icon-bookmark" width="24" height="24" viewBox="0 0 24 24">

<!-- Medium -->
<svg class="icon-bookmark" width="48" height="48" viewBox="0 0 24 24">

<!-- Large -->
<svg class="icon-bookmark" width="96" height="96" viewBox="0 0 24 24">
```

**Notice:** viewBox stays `0 0 24 24`. Only display size changes.

**This proves:** viewBox = coordinate system (constant), width/height = display size (variable).

---

## Complete Criteria

- [ ] Cleaned SVG is in the second `.icon-wrapper`
- [ ] No metadata (no xmlns, generator comment, fill="none")
- [ ] No nested groups (flattened to single path)
- [ ] Semantic class (`icon-bookmark`) instead of generic ID
- [ ] No inline fill on path (removed)
- [ ] CSS uses design tokens (`var(--color-icon)`)
- [ ] Theme switching works (icon changes color)
- [ ] Hover state works (color changes smoothly)
- [ ] Icon scales without distortion (viewBox works correctly)
- [ ] No console errors

---

## Stretch Goals

1. **Add a second icon** — Find another SVG online, clean it the same way, add to page
2. **Create icon variations** — Add class modifiers (`.icon-bookmark--filled`, `.icon-bookmark--outline`)
3. **Animate on hover** — Add `transform: scale(1.1)` or `rotate(5deg)` transition
4. **Add keyboard focus** — Make icon focusable with `tabindex="0"`, add `:focus` styles
5. **Create an icon system** — Multiple icons, consistent sizing, shared styles

---

## Troubleshooting

### "My CSS isn't changing the SVG color"

**Diagnosis:**
- Inspect the SVG in DevTools
- Look at the `<path>` element
- Check for inline `fill` attribute

**Cause:** Presentation attributes (`fill="#1E1E1E"`) override CSS.

**Fix:** Remove the `fill` attribute from the `<path>`.

---

### "The icon looks different sizes at different widths"

**Diagnosis:**
- Check if viewBox changed when you changed width/height
- viewBox should stay constant

**Cause:** Accidentally changed viewBox along with display size.

**Fix:** Reset viewBox to original (`0 0 24 24`), only change `width`/`height`.

---

### "Theme toggle doesn't change icon color"

**Diagnosis:**
- Check if CSS variables are defined in `:root` and `[data-theme="dark"]`
- Check if SVG has the class `.icon-bookmark`
- Check if fill uses `var(--color-icon)`

**Cause:** Either CSS variable not defined, or not applied to SVG.

**Fix:** Verify all three pieces (variables, class, fill property).

---

### "viewBox values don't make sense"

**Remember:**
- viewBox syntax: `x y width height`
- Usually starts at `0 0` (top-left)
- Width/height define coordinate system (not pixels)
- Display size (`width`/`height` attributes) can be different

**Example:**
```xml
<svg width="100" height="100" viewBox="0 0 50 50">
```
- Display: 100px × 100px
- Coordinate system: 0-50 × 0-50
- Content is 2× scaled (viewBox half of display size)

---

## Connection to Project

**This is exactly the workflow for Build 4-2:**

1. Export SVG from Figma (Build 4-1 design)
2. Clean it (remove metadata, flatten groups, semantic classes)
3. Apply CSS variables (theme-responsive)
4. Test (keyboard, screen reader, different sizes)

The only difference: Build 4-2 uses your personal mark. This lab is practice with a provided icon.

---

## Answer Key

<details>
<summary>Click to reveal complete cleaned SVG</summary>

```html
<svg class="icon-bookmark" width="48" height="48" viewBox="0 0 24 24">
  <path d="M5 4C5 2.9 5.9 2 7 2H17C18.1 2 19 2.9 19 4V22L12 18L5 22V4Z" />
</svg>
```

**Complete CSS:**

```css
.icon-bookmark {
  fill: var(--color-icon);
  transition: fill 0.2s ease;
  cursor: pointer;
}

.icon-bookmark:hover {
  fill: var(--color-icon-hover);
}
```

**Why this works:**
- No inline `fill` on path → CSS controls color
- CSS uses design tokens → responds to theme
- `transition` smooths color change
- `cursor: pointer` indicates interactivity

</details>

---

## Resources

- [MDN: SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [MDN: SVG `<path>` Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
- [MDN: SVG viewBox Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)
- [CSS-Tricks: Understanding SVG viewBox](https://css-tricks.com/scale-svg/)
- [SVG Path Visualizer](https://svg-path-visualizer.netlify.app/) — Interactive tool

---

**When you're done, move on to Practice 4-2: The Interaction (adding keyboard access and ARIA).**
