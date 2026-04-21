# Lecture 4-2: Interactive SVG
## CSS Hooks, States, and Accessibility

**Prerequisite:** Lecture 4-1 (SVG structure, Figma's engine)

---

## Part 1: Styling SVG with CSS (25 min)

### SVG Properties vs. HTML Properties

HTML and SVG share some CSS properties, but SVG has unique ones:

**Shared properties:**
```css
.element {
  opacity: 0.5;
  transform: rotate(45deg);
  transition: all 0.3s ease;
  cursor: pointer;
}
```

**SVG-specific properties:**
```css
.svg-element {
  fill: #FF0066;              /* Fill color (like background-color) */
  stroke: #000;               /* Outline color (like border) */
  stroke-width: 2;            /* Outline thickness */
  stroke-linecap: round;      /* Line endings (butt, round, square) */
  stroke-dasharray: 5 5;      /* Dashed lines */
}
```

---

### CSS Selectors for SVG

You can target SVG elements just like HTML:

```html
<svg class="icon" id="bookmark-icon">
  <path class="icon-outline" d="..." />
  <circle class="icon-dot" cx="12" cy="12" r="4" />
</svg>
```

```css
/* By class */
.icon {
  fill: var(--color-icon);
}

/* By element */
path {
  fill: currentColor;
}

/* By descendant */
.icon path {
  fill: var(--color-primary);
}

/* By ID */
#bookmark-icon {
  fill: blue;
}

/* By attribute */
[aria-label] {
  cursor: pointer;
}
```

**Best practice:** Use semantic classes, just like HTML.

---

### The Specificity Problem

**This is the most common SVG styling issue:**

```xml
<!-- Your SVG -->
<svg>
  <path fill="#000" d="..." />
</svg>
```

```css
/* Your CSS */
.icon {
  fill: red;  /* Doesn't work! Why?? */
}
```

**The problem:** Presentation attributes (like `fill="#000"`) have higher specificity than CSS classes.

**The specificity order (lowest to highest):**
1. CSS classes (`.icon`)
2. Inline styles (`style="fill: blue"`)
3. Presentation attributes (`fill="blue"`) ← This wins!

**The solution:**

Option 1: Remove presentation attributes during optimization
```xml
<!-- Clean SVG (no fill attribute) -->
<svg>
  <path d="..." />  <!-- CSS will set fill -->
</svg>
```

Option 2: Use `!important` (not ideal)
```css
.icon {
  fill: red !important;  /* Overrides presentation attribute */
}
```

Option 3: Use inline styles (also not ideal)
```xml
<svg>
  <path style="fill: red" d="..." />
</svg>
```

**Best practice:** Remove presentation attributes during optimization. Let CSS handle styling.

---

### Using CSS Custom Properties with SVG

SVG works with your design token system from Weeks 1-2:

```css
/* Your design tokens */
[data-theme="light"] {
  --color-icon: #333;
  --color-icon-hover: #000;
}

[data-theme="dark"] {
  --color-icon: #f0f0f0;
  --color-icon-hover: #fff;
}

/* Apply to SVG */
.icon {
  fill: var(--color-icon);
  transition: fill 0.2s ease;
}

.icon:hover {
  fill: var(--color-icon-hover);
}
```

**In your HTML:**

```html
<svg class="icon" viewBox="0 0 24 24">
  <path d="..." />  <!-- No fill attribute! CSS handles it -->
</svg>
```

**The result:**
- Icon responds to theme (light/dark)
- Smooth color transition on hover
- One system for HTML and SVG

---

### `currentColor` (SVG's Superpower)

`currentColor` inherits the text color from parent:

```html
<button style="color: blue;">
  <svg>
    <path fill="currentColor" />  <!-- Inherits blue from button -->
  </svg>
  Click me
</button>
```

**Why this matters:**
- Icon automatically matches text color
- No need to set fill explicitly
- Works with theme systems

**Common pattern:**

```css
.button {
  color: var(--color-text);
}

.button svg {
  fill: currentColor;  /* Matches button text */
}

.button:hover {
  color: var(--color-text-hover);  /* SVG updates too! */
}
```

---

## Part 2: Interactive States (25 min)

### The Three Core States

Every interactive element should have these states:

1. **Default** — Normal appearance
2. **Hover** — Mouse over (`:hover`)
3. **Focus** — Keyboard selected (`:focus`)

**Optional states:**
- **Active** — Being clicked (`:active`)
- **Visited** — For links (`:visited`)
- **Disabled** — Not interactive (`:disabled` or `[aria-disabled]`)

---

### Hover States

```html
<svg class="icon icon-heart" viewBox="0 0 24 24">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>
```

```css
.icon-heart {
  fill: #ccc;
  stroke: #999;
  stroke-width: 2;
  transition: fill 0.3s ease, stroke 0.3s ease;
  cursor: pointer;
}

.icon-heart:hover {
  fill: #e74c3c;
  stroke: #c0392b;
}
```

**Best practice:**
- Always include `transition` for smooth feedback
- Use `cursor: pointer` to indicate clickability
- Keep transitions short (0.2-0.3s)

---

### Focus States (Keyboard Accessibility)

By default, SVG is not focusable with keyboard. We need to make it interactive:

```html
<svg class="icon" tabindex="0" role="button" aria-label="Like">
  <path d="..." />
</svg>
```

**Key attributes:**
- `tabindex="0"` — Makes SVG focusable (Tab key)
- `role="button"` — Tells screen readers this acts like a button
- `aria-label="Like"` — Provides text description

**CSS for focus:**

```css
.icon:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* Or custom focus style */
.icon:focus {
  outline: none;  /* Remove default */
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}
```

**Critical:** Never remove focus styles without replacing them. Keyboard users need visual feedback.

---

### Active States

```css
.icon:active {
  transform: scale(0.95);  /* Slight press effect */
}
```

**The full interactive stack:**

```css
.icon {
  fill: var(--color-icon);
  transition: fill 0.2s ease, transform 0.1s ease;
  cursor: pointer;
}

.icon:hover {
  fill: var(--color-icon-hover);
}

.icon:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.icon:active {
  transform: scale(0.95);
}
```

---

### The `:focus-visible` Improvement

Problem: Focus styles show on mouse click (looks weird).

Solution: `:focus-visible` only shows focus on keyboard navigation.

```css
/* Remove focus ring on mouse click */
.icon:focus {
  outline: none;
}

/* Show focus ring on keyboard Tab */
.icon:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

**Browser support:** Modern browsers. Falls back to `:focus` gracefully.

---

## Part 3: ARIA Basics for Icons (20 min)

### Accessible Rich Internet Applications (ARIA)

ARIA attributes provide semantic information for screen readers.

**Three categories of icons:**

1. **Decorative icons** — Visual only, no meaning
2. **Informative icons** — Convey information
3. **Interactive icons** — Buttons, links

---

### Decorative Icons

Icons next to text (redundant):

```html
<button>
  <svg aria-hidden="true">  <!-- Screen reader ignores -->
    <path d="..." />
  </svg>
  Save
</button>
```

`aria-hidden="true"` tells screen readers to skip this element.

**When to use:** Icon accompanies visible text that says the same thing.

---

### Informative Icons

Icons conveying information (no text):

```html
<a href="/profile">
  <svg aria-label="View profile">  <!-- Screen reader reads this -->
    <path d="..." />
  </svg>
</a>
```

`aria-label` provides text alternative.

**When to use:** Icon stands alone, no visible text label.

---

### Interactive Icons

Icons that are buttons/links:

```html
<svg class="icon-favorite"
     role="button"
     tabindex="0"
     aria-label="Add to favorites"
     aria-pressed="false">
  <path d="..." />
</svg>
```

**ARIA attributes:**
- `role="button"` — Announces as button
- `tabindex="0"` — Keyboard focusable
- `aria-label="..."` — Provides name
- `aria-pressed="false"` — Toggle state (for toggles)

**With JavaScript:**

```javascript
const favorite = document.querySelector('.icon-favorite');

favorite.addEventListener('click', function() {
  const isPressed = this.getAttribute('aria-pressed') === 'true';
  this.setAttribute('aria-pressed', !isPressed);

  // Visual feedback
  this.classList.toggle('is-favorited');
});
```

```css
.icon-favorite {
  fill: #ccc;
}

.icon-favorite.is-favorited {
  fill: #e74c3c;
}
```

---

### The `<title>` Element (Alternative Approach)

SVG has a built-in `<title>` element for accessibility:

```html
<svg>
  <title>Star rating: 4 out of 5</title>
  <path d="..." />
  <path d="..." />
  <path d="..." />
  <path d="..." />
  <path d="..." />
</svg>
```

**Pros:**
- Native SVG feature
- Screen readers announce it
- Shows as tooltip in some browsers

**Cons:**
- Not as flexible as `aria-label`
- Must be first child of `<svg>`

**When to use:** Simple icons with straightforward descriptions.

---

### Testing with Screen Readers

**macOS: VoiceOver**
```
Cmd + F5 to enable
VO + Right Arrow to navigate
VO + Space to activate
```

**Windows: NVDA**
```
Download free from nvaccess.org
Insert + Down Arrow to navigate
Enter to activate
```

**What to test:**
- Is the icon announced?
- Is the label clear and descriptive?
- Can you activate it with keyboard?
- Does state change get announced?

---

## Part 4: Preparing for Week 5 (15 min)

### Week 5 Preview: CSS Transitions

Next week, we add smooth animated feedback:

```css
.icon {
  fill: var(--color-icon);
  transform: rotate(0deg);
  transition: fill 0.3s ease, transform 0.3s ease;
}

.icon:hover {
  fill: var(--color-icon-hover);
  transform: rotate(15deg);  /* Slight tilt on hover */
}
```

**The pattern:**
1. Define default state
2. Define hover/focus state
3. Add `transition` to smooth the change

---

### Combining States and Transitions

```css
.icon-heart {
  fill: none;
  stroke: var(--color-icon);
  stroke-width: 2;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);  /* Bounce */
}

.icon-heart:hover {
  fill: var(--color-accent);
  stroke: var(--color-accent);
  transform: scale(1.1);
}

.icon-heart:active {
  transform: scale(0.95);
}
```

**Result:** Icon bounces slightly larger on hover, compresses on click.

---

### Easing Functions

`ease`, `ease-in`, `ease-out`, `ease-in-out` are built-in.

For custom easing:
```css
transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Resource:** [easings.net](https://easings.net) — Visual easing reference

---

### Reduced Motion Accessibility

**Critical:** Some users get motion sick from animations.

```css
@media (prefers-reduced-motion: reduce) {
  .icon {
    transition: none;  /* Instant changes, no animation */
  }
}
```

**Alternative approach:**
```css
@media (prefers-reduced-motion: reduce) {
  .icon {
    transition-duration: 0.01ms;  /* Effectively instant */
  }
}
```

This respects user preference automatically (from OS settings).

---

## Summary

### Key Concepts

1. **CSS selectors work on SVG** — Target with classes, just like HTML
2. **Presentation attributes override CSS** — Remove during optimization
3. **CSS variables theme SVG** — Use design tokens from Week 1-2
4. **Three core states** — Default, hover, focus (+ active optional)
5. **Keyboard accessibility** — `tabindex`, visible focus styles
6. **ARIA labels** — Decorative, informative, or interactive
7. **Transitions next week** — Smooth animated feedback

### The Pattern

```css
/* Design tokens (Week 1-2) */
[data-theme="light"] {
  --color-icon: #333;
}

/* SVG styles */
.icon {
  fill: var(--color-icon);
  transition: fill 0.2s ease;  /* Week 5 */
  cursor: pointer;
}

.icon:hover {
  fill: var(--color-icon-hover);
}

.icon:focus-visible {
  outline: 2px solid var(--color-focus);
}
```

```html
<svg class="icon"
     tabindex="0"
     role="button"
     aria-label="Like this post">
  <path d="..." />  <!-- No fill attribute! -->
</svg>
```

### Next Steps

- **Practice 4-2:** Make SVG keyboard accessible
- **Build 4-2:** Code your mark with theme responsiveness
- **Week 5:** Add CSS transitions for smooth feedback

### Questions to Explore

1. Why remove presentation attributes from SVG?
2. When should you use `aria-hidden` vs. `aria-label`?
3. How do you make SVG keyboard accessible?
4. What's the difference between `:focus` and `:focus-visible`?
5. How do design tokens from Week 1-2 apply to SVG?

Practice these concepts in this week's labs!
