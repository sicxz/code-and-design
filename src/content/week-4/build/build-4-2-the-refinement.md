# Build 4-2: The Refinement

*20 points · Evaluated · Due before Week 5 Day 2*

**Project:** Project 2 - "The Mark" (Part 2 of 2)

**Time estimate:** 3-4 hours

**Prerequisites:** Build 4-1 (mark designed in Figma), Learn 4-3 (Optimization Workflow)

---

## TL;DR

Export your mark from Figma, run the optimization workflow, add CSS theming, implement keyboard accessibility, and integrate into your portfolio.

**Deliverables:**
1. Cleaned SVG file (optimized code)
2. CSS with design tokens applied
3. Keyboard accessible with ARIA
4. Live on your portfolio site

---

## Overview

You've designed your mark in Figma with code in mind. Now it's time to bring it to life on the web.

**This build teaches you:**
- The complete Figma → production workflow
- How to clean SVG exports (SVGO + manual)
- Applying CSS custom properties to SVG
- Making graphics keyboard accessible
- Testing across themes and devices

**By the end:**
- Your mark will be your site's logo
- It will adapt to light/dark themes
- It will be keyboard navigable
- It will be screen reader friendly

---

## Deliverables

### 1. Optimized SVG File

**Export from Figma with optimal settings:**
- ☑ Outline stroke
- ☑ Flatten
- ☑ Simplify
- ☐ Include "id" attribute (we'll add classes manually)

**Then clean it:**
- Run through SVGO (use [SVG OMG](https://jakearchibald.github.io/svgomg/))
- Manual cleanup (remove metadata, add semantic classes)
- File size should be ~200-500 bytes (simple mark)

**Must include:**
- Semantic class names (not generic IDs)
- No inline styles (colors will come from CSS)
- Clean structure (no empty groups, no metadata)
- Comments explaining complex paths (if needed)

---

### 2. CSS Integration

**Create `mark.css` with:**
- CSS custom properties for colors
- Theme-responsive styles (`[data-theme="dark"]`)
- Interactive states (hover, focus, active)
- Reduced-motion alternative

**Colors should use your design tokens:**
```css
.mark {
  --mark-color: var(--color-text);
  fill: var(--mark-color);
}

[data-theme="dark"] .mark {
  --mark-color: var(--color-text-inverse);
}
```

---

### 3. Accessibility Implementation

**Your mark must be:**
- Keyboard focusable (if interactive)
- Screen reader friendly (ARIA labels)
- Focus visible (`:focus-visible` styles)
- Semantic (proper role attributes)

**Example:**
```html
<a href="/" class="mark-link">
  <svg class="mark" role="img" aria-label="Home - [Your Name]">
    <!-- SVG content -->
  </svg>
</a>
```

---

### 4. Portfolio Integration

**Add your mark to:**
- Header/navigation (as logo/home link)
- Favicon (16×16 and 32×32 versions)

**Test that it:**
- Scales correctly
- Works in both themes
- Responds to keyboard
- Announces properly with screen reader

---

## Part 1: Export & Clean (Learn 4-3 Workflow)

### Step 1: Export from Figma

**In Figma:**
1. Select your mark frame
2. Export settings panel → SVG
3. Check these settings:
   - ☑ Outline stroke
   - ☑ Flatten
   - ☑ Simplify
   - ☐ Include "id" attribute
4. Export → Save as `mark-raw.svg`

**Why these settings?**
- **Outline stroke:** Converts strokes to paths (consistent rendering)
- **Flatten:** Removes unnecessary nesting
- **Simplify:** Reduces decimal precision (smaller file)
- **No IDs:** We'll add semantic classes instead

---

### Step 2: Examine Raw Export

**Open `mark-raw.svg` in VS Code.**

**Look for bloat:**
- Generator comments (`<!-- Generator: Figma -->`)
- XML namespace (`xmlns="http://..."`)
- Generic IDs (`id="Vector"`, `id="Group-1"`)
- Inline fills (`fill="#1E1E1E"`)
- Excessive precision (`5.0000`)
- Empty groups (`<g></g>`)

**Note the file size.** (You'll compare after cleanup.)

---

### Step 3: Run SVGO

**Use [SVG OMG](https://jakearchibald.github.io/svgomg/):**

1. Upload `mark-raw.svg`
2. Enable plugins:
   - ☑ Remove comments
   - ☑ Remove metadata
   - ☑ Remove useless defs
   - ☑ Cleanup IDs
   - ☑ Round/rewrite paths
   - ☐ **Keep viewBox** (IMPORTANT!)
3. Download as `mark-svgo.svg`

**Compare file sizes:**
- `mark-raw.svg`: ??? bytes
- `mark-svgo.svg`: ??? bytes (should be 40-60% smaller)

---

### Step 4: Manual Cleanup

**SVGO doesn't do everything. Manual steps:**

#### Remove Remaining Bloat

```xml
<!-- Before (SVGO output) -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="..." fill="#1E1E1E"/>
</svg>

<!-- After (manual cleanup) -->
<svg class="mark" width="24" height="24" viewBox="0 0 24 24">
  <path class="mark-shape" d="..." />
</svg>
```

**What changed:**
- ✅ Added semantic class `mark` to `<svg>`
- ✅ Added class `mark-shape` to `<path>`
- ✅ Removed `fill="none"` (not needed)
- ✅ Removed `xmlns` (not needed for inline SVG)
- ✅ Removed `fill="#1E1E1E"` (CSS will control this)

#### Add Semantic Classes

**Bad (generic):**
```xml
<svg>
  <path id="Vector" d="..." />
  <path id="Vector_2" d="..." />
</svg>
```

**Good (semantic):**
```xml
<svg class="mark">
  <path class="mark-outline" d="..." />
  <path class="mark-fill" d="..." />
</svg>
```

**Why?**
- CSS can target `.mark-outline` (readable)
- Future you knows what each path does
- Easier to theme (outline vs fill behavior)

#### Simplify Path Data (Optional)

**Before:**
```xml
d="M5.0000 4.0000 L19.0000 4.0000"
```

**After:**
```xml
d="M5 4 L19 4"
```

**Save as `mark-clean.svg`**

---

## Part 2: CSS Theming

### Step 1: Inline Your SVG

**Don't use `<img src="mark.svg">`** — you lose CSS control.

**Do this:**
```html
<a href="/" class="mark-link">
  <svg class="mark" width="32" height="32" viewBox="0 0 24 24">
    <path class="mark-shape" d="..." />
  </svg>
</a>
```

**Why inline?**
- Full CSS control (colors, hover states)
- No extra HTTP request
- Can animate individual paths

---

### Step 2: Create `mark.css`

**File: `mark.css`**

```css
/* Base mark styles */
.mark {
  display: block;
  width: 2rem;
  height: 2rem;
  /* Colors from design tokens */
  --mark-color: var(--color-text);
}

.mark-shape {
  fill: var(--mark-color);
  transition: fill 200ms ease;
}

/* Dark theme */
[data-theme="dark"] .mark {
  --mark-color: var(--color-background);
}

/* Light theme (explicit) */
[data-theme="light"] .mark {
  --mark-color: var(--color-text);
}
```

**Link in your HTML:**
```html
<link rel="stylesheet" href="css/mark.css">
```

---

### Step 3: Interactive States

**If your mark is a link, add hover/focus:**

```css
/* Hover state */
.mark-link:hover .mark-shape {
  --mark-color: var(--color-accent);
}

/* Focus state (keyboard) */
.mark-link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
  border-radius: 4px;
}

.mark-link:focus-visible .mark-shape {
  --mark-color: var(--color-accent);
}

/* Active state (click) */
.mark-link:active .mark-shape {
  transform: scale(0.95);
}
```

**Why `:focus-visible`?**
- Shows focus for keyboard users
- Hides focus for mouse clicks (better UX)

---

### Step 4: Reduced-Motion Alternative

**Respect user preferences:**

```css
@media (prefers-reduced-motion: reduce) {
  .mark-shape {
    transition: none;
  }

  .mark-link:active .mark-shape {
    transform: none;
  }
}
```

---

## Part 3: Accessibility

### Step 1: Add ARIA Label

**If your mark is a logo linking home:**

```html
<a href="/" class="mark-link" aria-label="Home">
  <svg class="mark" role="img" aria-label="[Your Name] logo">
    <path class="mark-shape" d="..." />
  </svg>
</a>
```

**If your mark is decorative (not interactive):**

```html
<svg class="mark" aria-hidden="true" focusable="false">
  <path class="mark-shape" d="..." />
</svg>
```

**When to use which?**
- **Interactive mark (logo/button):** Use `role="img"` + `aria-label`
- **Decorative mark:** Use `aria-hidden="true"`

---

### Step 2: Test Keyboard Navigation

**Manual test:**
1. Open your portfolio in browser
2. Press Tab key
3. Does focus outline appear on your mark link?
4. Press Enter
5. Does it navigate home?

**If focus outline doesn't show:**
- Check that you used `:focus-visible` (not `:focus`)
- Verify outline color has enough contrast
- Test in both light and dark themes

---

### Step 3: Test Screen Reader

**macOS (VoiceOver):**
1. Press Cmd+F5 to start VoiceOver
2. Press Control+Option+Right Arrow to navigate
3. When focused on mark, VoiceOver should say:
   - "[Your Name] logo, image"
   - OR "Home, link"

**Windows (NVDA - free):**
1. Download from [nvaccess.org](https://www.nvaccess.org/)
2. Start NVDA
3. Press Down Arrow to navigate
4. NVDA should announce the aria-label

**If nothing is announced:**
- Check that `aria-label` is present
- Verify `role="img"` on SVG
- Make sure SVG is not `aria-hidden="true"`

---

## Part 4: Favicon Implementation

Your mark should also be your favicon (browser tab icon).

### Step 1: Export Favicon Sizes

**In Figma:**
1. Duplicate your mark frame
2. Resize to 16×16 (test readability)
3. Export as `favicon-16.svg` and `favicon-32.svg`

**Or scale in code:**
```html
<!-- Simple approach: single SVG favicon -->
<link rel="icon" type="image/svg+xml" href="images/mark-clean.svg">
```

---

### Step 2: Test Favicon

**Add to `<head>`:**
```html
<link rel="icon" type="image/svg+xml" href="images/mark-clean.svg">
<!-- Fallback for older browsers -->
<link rel="icon" type="image/png" href="images/favicon-32.png">
```

**Check that:**
- Favicon appears in browser tab
- Works in both light and dark mode
- Recognizable at small size

**Note:** Some browsers don't support SVG favicons. For best support, also export PNG versions (16×16, 32×32).

---

## Complete Criteria

### Code Quality
- [ ] SVG is optimized (SVGO + manual cleanup)
- [ ] File size is reasonable (~200-500 bytes)
- [ ] Semantic class names (no `id="Vector"`)
- [ ] No inline styles (colors in CSS)
- [ ] Clean structure (no empty groups, no metadata)

### CSS Integration
- [ ] Uses CSS custom properties from design tokens
- [ ] Theme-responsive (`[data-theme="dark"]`)
- [ ] Interactive states (hover, focus, active)
- [ ] Reduced-motion alternative

### Accessibility
- [ ] ARIA label describes the mark
- [ ] Keyboard focusable (if interactive)
- [ ] `:focus-visible` outline visible and high contrast
- [ ] Screen reader announces label correctly

### Integration
- [ ] Inline SVG in HTML (not `<img>`)
- [ ] Linked as logo in header
- [ ] Added as favicon
- [ ] Works at different sizes (32px header, 16px favicon)

### Testing
- [ ] Visual check in both themes (light/dark)
- [ ] Keyboard navigation (Tab, Enter)
- [ ] Screen reader test (VoiceOver or NVDA)
- [ ] Reduced-motion test (toggle in OS settings)
- [ ] Favicon appears in browser tab

---

## Troubleshooting

### "My CSS isn't styling the SVG"

**Problem:** Presentation attributes override CSS.

**Example:**
```xml
<path fill="#000" />  <!-- This overrides CSS! -->
```

**Solution:** Remove inline `fill` from SVG, use CSS only.

```xml
<path class="mark-shape" />  <!-- No fill attribute -->
```

```css
.mark-shape {
  fill: var(--mark-color);  /* CSS wins now -->
}
```

---

### "SVGO removed something I needed"

**Problem:** Aggressive optimization removed structure.

**Solution:**
1. Go back to raw Figma export
2. In SVG OMG, disable specific plugins:
   - Uncheck "Cleanup IDs" if you need specific IDs
   - Uncheck "Remove viewBox" (ALWAYS keep this!)
   - Adjust precision slider (less aggressive)
3. Re-run SVGO with gentler settings

---

### "Focus outline doesn't show on click"

**That's correct!** `:focus-visible` only shows for keyboard.

**If you want focus on click too:**
```css
.mark-link:focus {
  outline: 2px solid var(--color-accent);
}
```

**But we recommend `:focus-visible`** — better UX (mouse users don't need outlines).

---

### "Screen reader doesn't announce my label"

**Check these:**
1. Is `aria-label` on the SVG?
2. Is `role="img"` present?
3. Is SVG inside a focusable element (link/button)?
4. Is SVG not `aria-hidden="true"`?

**Correct structure:**
```html
<a href="/" aria-label="Home">
  <svg class="mark" role="img" aria-label="[Your Name] logo">
    <!-- paths -->
  </svg>
</a>
```

Screen reader announces BOTH labels: "Home, link" and "[Your Name] logo, image"

---

### "My mark looks different after optimization"

**Causes:**
- viewBox was removed (check SVG OMG settings)
- Stroke was outlined incorrectly (check Figma export settings)
- Boolean operations resolved differently (simplify in Figma first)

**Solution:**
1. Compare raw export vs. optimized side-by-side in browser
2. If different, go back to Figma:
   - Flatten groups manually
   - Outline strokes manually (Object → Outline Stroke)
   - Re-export and try again

---

### "File size is still huge (>1KB)"

**Likely causes:**
- Complex paths (too many curves)
- Nested groups (SVGO didn't flatten)
- Unused defs/clipPaths
- Figma metadata still present

**Check:**
1. Search for `<!-- Generator: Figma -->` — remove it
2. Search for `<defs>` — remove if empty
3. Search for `<clipPath>` — remove if unused
4. Simplify paths in Figma (reduce points)

---

## Evaluation Criteria

| Criterion | Weight | What We're Looking For |
|-----------|--------|------------------------|
| **Code Cleanliness** | 25% | Optimized SVG, semantic classes, no bloat |
| **CSS Integration** | 20% | Design tokens applied, theme-responsive |
| **Accessibility** | 25% | ARIA labels, keyboard focus, screen reader friendly |
| **Interactivity** | 15% | Hover/focus states, reduced-motion support |
| **Integration** | 15% | Live on portfolio, works as logo and favicon |

---

## Stretch Goals

1. **Animated hover state** — Use CSS transitions to morph paths on hover
2. **Multi-part mark** — Different colors for outline vs. fill (CSS variables for each)
3. **Favicon generator** — Use [RealFaviconGenerator](https://realfavicongenerator.net/) for all sizes/platforms
4. **SVG sprite** — If you have multiple icons, create an SVG sprite system
5. **Loading state** — Add a subtle animation when page loads

---

## File Structure

**Recommended organization:**

```
portfolio/
├── index.html
├── css/
│   ├── tokens.css       # Design tokens (from Project 1)
│   ├── theme.css        # Theme system
│   └── mark.css         # Mark-specific styles (NEW)
├── images/
│   ├── mark-clean.svg   # Optimized mark (inline in HTML)
│   ├── favicon-16.png   # Favicon fallback
│   └── favicon-32.png   # Favicon fallback
└── js/
    └── theme.js         # Theme toggle (from Project 1)
```

**In `index.html`:**
```html
<head>
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/theme.css">
  <link rel="stylesheet" href="css/mark.css">
  <link rel="icon" type="image/svg+xml" href="images/mark-clean.svg">
</head>

<body>
  <header>
    <a href="/" class="mark-link" aria-label="Home">
      <svg class="mark" role="img" aria-label="[Your Name] logo" width="32" height="32" viewBox="0 0 24 24">
        <!-- Paste your cleaned SVG paths here -->
      </svg>
    </a>
  </header>
</body>
```

---

## Connection to Project 1

**Your design tokens should control your mark colors:**

```css
/* In tokens.css (from Project 1) */
:root {
  --color-text: #1a1a1a;
  --color-background: #ffffff;
  --color-accent: #3498db;
}

[data-theme="dark"] {
  --color-text: #f5f5f5;
  --color-background: #1a1a1a;
  --color-accent: #5dade2;
}
```

```css
/* In mark.css (Project 2) */
.mark {
  --mark-color: var(--color-text);  /* Uses tokens! */
}

.mark-link:hover .mark-shape {
  --mark-color: var(--color-accent);  /* Uses tokens! */
}
```

**This creates a cohesive system:** Change your tokens, everything updates (theme + mark).

---

## Next Steps

**Week 5:** Add CSS transitions to your mark for smooth state changes (hover, focus, theme switch).

**Week 6+:** Learn GSAP and animate your mark on page load or scroll.

**Week 11:** Refine your mark as part of final portfolio polish.

---

## Resources

- [SVG OMG](https://jakearchibald.github.io/svgomg/) — SVGO GUI
- [RealFaviconGenerator](https://realfavicongenerator.net/) — Multi-platform favicons
- [MDN: SVG and CSS](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)
- [CSS-Tricks: Accessible SVG Icons](https://css-tricks.com/accessible-svgs/)
- [WebAIM: Creating Accessible SVGs](https://webaim.org/techniques/images/#svg)

---

## Submission Checklist

- [ ] Optimized SVG file (show before/after file sizes)
- [ ] CSS with design tokens applied
- [ ] Keyboard accessible (Tab + Enter works)
- [ ] ARIA labels implemented
- [ ] Screen reader tested (VoiceOver or NVDA)
- [ ] Works in light and dark themes
- [ ] Live on portfolio (as logo and favicon)
- [ ] Reduced-motion alternative included
- [ ] Code validated (no console errors)
- [ ] Submitted before Week 5 Day 2

---

**Congrats!** Your mark is now a fully interactive, accessible, theme-responsive component. This workflow (Figma → SVGO → CSS → ARIA) applies to any SVG you'll create.
