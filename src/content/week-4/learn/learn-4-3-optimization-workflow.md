# Learn 4-3: Optimization Workflow

*10 points · Complete/Incomplete · Due before Week 5*

**Time estimate:** 40-50 minutes

**Prerequisites:** Learn 4-1 (Figma's SVG Engine), Learn 4-2 (SVG Fundamentals)

---

## TL;DR

Learn the complete workflow from Figma export to production-ready SVG: SVGO automated cleanup, manual refinement, and testing.

**Submit:**
- Before/after file size comparison
- Cleaned SVG code snippet
- Checklist of what you removed/added

---

## Overview

Figma exports verbose SVG (metadata, precision, structure). Your job: clean it up without breaking it. This workflow teaches you to optimize systematically.

**The workflow:**
1. Export from Figma (optimal settings)
2. Examine raw output (understand what Figma generated)
3. Run SVGO (automated cleanup)
4. Manual cleanup (semantic classes, remove bloat)
5. Test (validate, check accessibility)

---

## What You're Learning

**Concepts:**
- SVGO (SVG Optimizer)
- Automated vs. manual optimization
- What to remove (metadata, IDs, precision)
- What to add (classes, ARIA, comments)
- Trade-offs (file size vs. editability)

**Tools:**
- SVG OMG (SVGO GUI)
- VS Code
- Browser DevTools

---

## The Reading

### Part 1: SVGO Documentation

**Read:** [SVGO GitHub README](https://github.com/svg/svgo)

*Time: ~8 min*

**Focus on:**
- What SVGO does
- Common plugins (removeMetadata, cleanupIDs, etc.)
- Configuration options

---

### Part 2: Video Walkthrough

**Watch:** "Cleaning SVG Exports" or "SVG Optimization Tutorial"

*Time: ~10 min*

**Search YouTube for:** "SVG optimization" or "SVGO tutorial"

**What to watch for:**
- Before/after comparison
- Using SVG OMG tool
- Manual cleanup steps

---

### Part 3: Optimization Guide

**Read:** [CSS-Tricks: Understanding SVG Optimization](https://css-tricks.com/understanding-and-manually-improving-svg-optimization/)

*Time: ~10 min*

**Focus on:**
- Manual optimization techniques
- What SVGO misses
- Adding semantic markup

---

## The Workflow

### Step 1: Export from Figma (Optimal Settings)

**Settings:**
- ☑ Outline stroke
- ☑ Flatten
- ☑ Simplify
- ☐ Include "id" attribute (we'll add classes manually)

**Export → Save as `icon-raw.svg`**

---

### Step 2: Examine Raw Output (5 min)

Open in VS Code. Look for:

**Metadata:**
```xml
<!-- Generator: Figma -->
xmlns="http://www.w3.org/2000/svg"
```

**Unnecessary attributes:**
```xml
fill="none"  <!-- on <svg>, doing nothing -->
```

**Generic IDs:**
```xml
id="Vector"
id="Group-1"
```

**Inline styles:**
```xml
fill="#1E1E1E"
```

**Excessive precision:**
```xml
d="M5.0000 4.0000 ..."
```

---

### Step 3: Run SVGO (10 min)

**Use:** [SVG OMG](https://jakearchibald.github.io/svgomg/)

1. Upload `icon-raw.svg`
2. Enable plugins:
   - ☑ Remove comments
   - ☑ Remove metadata
   - ☑ Remove useless defs
   - ☑ Cleanup IDs
   - ☑ Round/rewrite paths
   - ☐ Remove viewBox (KEEP THIS!)
3. Download as `icon-svgo.svg`

**Compare file sizes:**
- Raw: ~450 bytes
- SVGO: ~180 bytes (60% smaller!)

---

### Step 4: Manual Cleanup (15 min)

SVGO doesn't do everything. Manual steps:

#### Remove Remaining Bloat

```xml
<!-- Before -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="..." fill="#1E1E1E"/>
</svg>

<!-- After -->
<svg width="24" height="24" viewBox="0 0 24 24">
  <path d="..." />
</svg>
```

**Removed:**
- `fill="none"` (not needed)
- `xmlns` (not needed for inline SVG)
- `fill="#1E1E1E"` (CSS will control this)

#### Add Semantic Classes

```xml
<!-- Before -->
<svg>
  <path d="..." />
</svg>

<!-- After -->
<svg class="icon-bookmark">
  <path class="icon-shape" d="..." />
</svg>
```

#### Add ARIA (if interactive)

```xml
<svg class="icon-bookmark"
     role="img"
     aria-label="Bookmark">
  <path d="..." />
</svg>
```

#### Simplify Path Data (optional)

```xml
<!-- Before: 4 decimals -->
d="M5.0000 4.0000 L19.0000 4.0000"

<!-- After: 1 decimal (or whole numbers) -->
d="M5 4 L19 4"
```

---

### Step 5: Test (10 min)

**Visual test:**
- Open in browser
- Compare to original Figma design
- Check at different sizes

**Code validation:**
- No console errors
- SVG renders correctly

**Accessibility test:**
- Screen reader announces label (if interactive)
- Keyboard focusable (if button/link)

---

## What to Remove

| Item | Why Remove | Example |
|------|------------|---------|
| Generator comments | Metadata, bloat | `<!-- Generator: Figma -->` |
| XML namespace | Not needed inline | `xmlns="http://..."` |
| Unused IDs | Clutter | `id="Vector"` |
| Inline fills/strokes | CSS should control | `fill="#000"` |
| Empty groups | No purpose | `<g></g>` |
| Excessive precision | File size | `5.0000` → `5` |
| Clip paths (if unused) | Complexity | `<defs><clipPath>...</clipPath></defs>` |

---

## What to Add

| Item | Why Add | Example |
|------|---------|---------|
| Semantic classes | CSS targeting | `class="icon-bookmark"` |
| ARIA labels | Accessibility | `aria-label="Bookmark"` |
| Role attributes | Screen readers | `role="img"` or `role="button"` |
| Comments | Future you | `<!-- Bookmark icon for save button -->` |

---

## SVGO Configuration (Advanced)

For consistent results, create a config file:

**svgo.config.js:**
```javascript
module.exports = {
  plugins: [
    { name: 'removeDoctype' },
    { name: 'removeXMLProcInst' },
    { name: 'removeComments' },
    { name: 'removeMetadata' },
    { name: 'removeUselessDefs' },
    { name: 'removeEditorsNSData' },
    { name: 'cleanupIDs' },
    { name: 'roundValues', params: { precision: 1 } },
    { name: 'convertPathData', params: { precision: 1 } },
    { name: 'removeViewBox', enabled: false },  // KEEP viewBox!
  ],
};
```

---

## Exercises

### Exercise 1: Full Workflow (25 min)

**Find or create an icon:**
- Design in Figma OR download from [Feather Icons](https://feathericons.com/)
- If downloading, use unoptimized version

**Run through workflow:**
1. Export with optimal settings (if from Figma)
2. Examine raw SVG (note file size)
3. Run through SVG OMG
4. Manual cleanup (remove bloat, add classes)
5. Test in browser

**Document:**
- File size: Raw → SVGO → Manual
- List what you removed
- List what you added
- Screenshot of before/after code

---

### Exercise 2: Compare 3 Complexity Levels (15 min)

**Test workflow on:**
1. Simple icon (3-5 shapes)
2. Medium icon (10-15 shapes)
3. Complex icon (boolean operations, curves)

**Compare:**
- Which benefited most from optimization?
- Which was hardest to clean manually?
- Which would you code by hand vs. export?

---

## Complete Criteria

- [ ] Read SVGO documentation
- [ ] Watched optimization tutorial video
- [ ] Read CSS-Tricks optimization guide
- [ ] Completed Exercise 1 (full workflow)
- [ ] Completed Exercise 2 (3 complexity levels)
- [ ] Documented file size improvements
- [ ] Submitted cleaned SVG code
- [ ] Submitted checklist (removed/added items)

---

## Common Issues

**"SVGO removed something I needed"**
- Check plugin settings
- Disable specific plugins (e.g., don't remove viewBox)
- Use SVG OMG GUI to toggle plugins interactively

**"File size didn't improve much"**
- Check if Figma export was already clean
- Try manual cleanup (SVGO can't remove everything)
- Check for effects/filters (remove in Figma)

**"SVG looks different after optimization"**
- Check if viewBox changed
- Check if important attributes removed
- Compare visually at same size

**"Can't add classes in SVG OMG"**
- SVG OMG only does automated optimization
- Add classes manually in VS Code after SVGO

---

## Checklist Template

Use this for your workflow:

### Removed:
- [ ] Generator comments
- [ ] `xmlns` attribute
- [ ] `fill="none"` on `<svg>`
- [ ] Inline `fill` on paths
- [ ] Generic IDs (`id="Vector"`)
- [ ] Empty groups
- [ ] Excessive decimal precision

### Added:
- [ ] Semantic classes
- [ ] ARIA label (if interactive)
- [ ] Role attribute (if interactive)
- [ ] Comments (if complex)

### Tested:
- [ ] Visual check (browser)
- [ ] Size check (different widths)
- [ ] Console (no errors)
- [ ] Accessibility (if interactive)

---

## Resources

- [SVG OMG](https://jakearchibald.github.io/svgomg/) — SVGO GUI
- [SVGO GitHub](https://github.com/svg/svgo) — Documentation
- [CSS-Tricks: SVG Optimization](https://css-tricks.com/understanding-and-manually-improving-svg-optimization/)
- [MDN: SVG in HTML](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction)

---

**Next:** Build 4-1 (design your mark) and Build 4-2 (apply this workflow to your mark)!
