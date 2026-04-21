# Build: The Rough Cut

**Points:** 50
**Time Estimate:** 60–90 minutes
**Prerequisite:** Week 6 Blueprint + Motion Map

---

## TL;DR
Translate your Figma Blueprint into a working HTML/CSS site: build the full page structure, apply your tokens, and get all sections styled and readable in the browser.

---

## Submit
Push to GitHub → Submit your GitHub Pages URL to Canvas.

---

## Overview

Week 6 was for planning the Blueprint: mapping motion and visual design decisions.

This week, you start building in code.

The goal is to establish a Rough Cut: semantic HTML structure, token-driven CSS, and all of your sections styled and working in the browser. It doesn't need to be pixel-perfect — but every section should be built, readable, and using your design tokens.

---

## What You're Building This Week

A first live version of your scrollytelling site with:

- Linked CSS files (`variables.css` and `styles.css`)
- A semantic page structure
- All sections (hero + story chapters) translated from Figma
- Real content (or near-final draft content) in every section

---

## Requirements

### Core

**Files**
- `index.html`
- `styles/variables.css`
- `styles/styles.css`
- `scripts/main.js`

- [ ] CSS files linked in the correct order (`variables` → `styles`)
- [ ] Semantic HTML structure in place (`<main>`, `<section>`, heading hierarchy)
- [ ] All sections (hero + 5–7 story chapters) built from your Figma designs
- [ ] Tokens applied for colors, type, and spacing (not hardcoded everywhere)
- [ ] Site is readable on desktop and mobile widths
- [ ] Real text (not lorem ipsum) in every section
- [ ] Page works without JavaScript errors (JS can be mostly empty this week)

### Stretch Goals
- [ ] Hover/focus transitions added in `styles.css`
- [ ] GSAP CDN linked and `main.js` scaffolded for animations
- [ ] Dark mode tokens tested in-browser
- [ ] Section-to-section visual contrast (backgrounds, layout shifts) working across all chapters

---

## Step-by-Step

### Step 1: Set Up the File Structure in GitHub

Use the project starter structure (or match it manually):

```text
week-7
  lost-in-the-scroll
    index.html
    styles/
      variables.css
      styles.css
    scripts/
      main.js
    assets/
```

Link your CSS in this order:

```html
<link rel="stylesheet" href="styles/variables.css">
<link rel="stylesheet" href="styles/styles.css">
```

**Why this order matters**
`variables.css` defines your design tokens first. `styles.css` uses those tokens for layout and components.

### Step 2: Build the Semantic Skeleton

Start with `<main>`, then add one `<section>` per story chapter.

```html
<main>
  <section class="section--hero" id="hero">
    <div class="section__content">
      <h1>Story title</h1>
      <p>Hero hook text...</p>
    </div>
  </section>

  <section class="section--chapter" id="first-contact">
    <div class="section__content">
      <h2>First chapter title</h2>
      <p>Real story content...</p>
    </div>
  </section>
</main>
```

**Tip**
Don't worry about perfect spacing yet. Get the content and structure in place first.

### Step 3: Apply Tokens to Layout

In `styles.css`, build your section rhythm with tokens:

```css
body {
  margin: 0;
  background: var(--color-surface-primary);
  color: var(--color-text-primary);
  font-family: var(--font-body);
}

.section {
  min-height: 100svh;
  padding: var(--space-xl) var(--space-md);
}

.section__content {
  width: min(72rem, 100%);
  margin-inline: auto;
}
```

Focus on:

- Readable line length
- Consistent spacing
- Clear visual hierarchy
- Section-to-section contrast (not everything looking identical)

### Step 4: Translate All Sections from Figma

Work through your Figma blueprint section by section. A suggested order:

- Hero — establish the visual tone
- Your strongest story section — build confidence
- A section with a contrasting layout — test variety in your system
- Remaining chapters — fill out the full scroll

Use your Figma blueprint as a guide, but make browser-friendly decisions if needed. Rough cut first, precision later.

**Warning**
If the page looks nothing like your Figma, that's normal at this stage. Start with hierarchy and spacing. Fine visual polish comes after structure is solid.

### Step 5: Add Basic Interaction States

Add CSS transitions to links, buttons, and cards. These are simple state changes — the scroll-driven animation work happens later with GSAP.

```css
a {
  transition: color 0.2s ease-out;
}

a:hover {
  color: var(--color-accent);
}

a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Step 6: Quick Test Pass

Before submitting:

✓ Checkpoint — Resize to mobile width. Scroll the page top-to-bottom. Check heading hierarchy. Open console and confirm no JS errors.

---

## Evaluation

| Criteria | Points |
|----------|--------|
| File structure + CSS linking order correct | 5 |
| Semantic HTML structure and heading hierarchy | 5 |
| All sections built from Figma (hero + story chapters) | 15 |
| Tokens applied consistently (color/type/spacing) | 10 |
| Real content in every section (no lorem ipsum) | 5 |
| Responsive readability (desktop + mobile) | 5 |
| Section-to-section visual contrast and layout variety | 5 |

---

## Troubleshooting

### My CSS variables aren't working

Check file order. `variables.css` must load before any file that uses `var(...)`.

### The page looks nothing like Figma

That's normal at first. Start with hierarchy and spacing. Fine visual polish comes after structure is solid.

### Everything is too cramped on mobile

Your horizontal padding and type sizes are probably too large. Add smaller spacing/type values for narrow screens.

### I keep hardcoding values because it's faster

**Warning**
It is faster now, slower later. Use tokens for repeated values so the build stays consistent when you revise sections.
