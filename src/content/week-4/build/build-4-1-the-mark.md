# Build 4-1: The Mark

*15 points · Evaluated · Due before Week 5 Day 1*

**Project:** Project 2 - "The Mark" (Part 1 of 2)

**Time estimate:** 2-3 hours

---

## TL;DR

Design your personal mark (logo/icon) in Figma, structured for clean SVG export. This becomes your site's logo and favicon.

**Deliverables:**
1. Figma file with mark design
2. Design rationale (1-2 paragraphs)
3. Test SVG export

---

## Overview

Your mark is a visual signature — a simple graphic that represents you. It will become:
- Your site logo
- Your favicon (browser tab icon)
- Your brand identity

**Design with code in mind.** Simple shapes export cleaner. Semantic layer names become better code. This isn't just design practice — it's designing *for code*.

---

## Deliverables

### 1. Figma File

**Link to:** Public Figma file or PDF export

**Must include:**
- Your mark design at 24×24 or 32×32 frame
- Light and dark theme versions
- Properly named layers
- Clean structure (flattened groups, outlined strokes)

---

### 2. Design Rationale

**Write 1-2 paragraphs answering:**
- **Why these shapes?** What do they represent about you?
- **Why this structure?** How did you prep for code export?
- **Theme adaptability:** How does it work in light/dark?

---

### 3. Test Export

**Export as SVG**, examine code:
- Is it clean or bloated?
- Are layer names semantic?
- Can you understand the structure?

**No need to optimize yet** — Build 4-2 will clean it up. Just verify export works.

---

## Design Requirements

### Visual

- [ ] **Simple:** 3-8 shapes/paths (not dozens)
- [ ] **Recognizable:** Works at 16×16 (favicon size)
- [ ] **Theme-adaptable:** Works in light and dark modes
- [ ] **Personal:** Represents you (not generic)

### Technical (Figma Prep)

- [ ] **Frame size:** 24×24 or 32×32
- [ ] **Layers named semantically:** "mark-outline", "mark-fill" (not "Rectangle 7")
- [ ] **Groups flattened:** No excessive nesting
- [ ] **Strokes outlined:** Or ready to outline on export
- [ ] **Single color fills:** No gradients (CSS will control colors)
- [ ] **No unsupported effects:** No drop shadows, blur (won't export well)

---

## The Figma Setup

### Frame

```
Size: 24×24 or 32×32
Grid: 8px or 4px
Background: None (transparent)
```

**Why these sizes?**
- 24×24: Standard icon size
- 32×32: Slightly larger, easier to design
- Scales down to 16×16 (favicon)

---

### Grid & Alignment

Enable pixel grid:
- View → Pixel Grid
- Snap to pixels (avoid subpixels)

**Why?**
- Clean coordinates (whole numbers)
- Smaller SVG file size
- Crisper rendering

---

### Layer Naming

**Bad:**
```
Vector
Rectangle 1
Group
Path
```

**Good:**
```
mark-outline
mark-fill
mark-accent
icon-background
```

**Why?**
- Layer names → SVG IDs
- Semantic names = readable code
- Easier to target with CSS

---

## Design Strategies

### Strategy 1: Geometric Abstraction

Use basic shapes to create a recognizable form:
- Initials as geometric shapes
- Abstract symbol (arrow, star, etc.)
- Combination mark (letter + shape)

**Examples:**
- Circle + triangle = play button aesthetic
- Overlapping rectangles = layered/depth
- Rotated square = dynamic/movement

---

### Strategy 2: Monogram

Your initials, stylized:
- Single letter, custom form
- Two letters, overlapped
- Letterform as shape (not text!)

**Important:** Convert text to outlines (Type → Outline Stroke).

---

### Strategy 3: Symbolic

Icon representing your work/interests:
- Code brackets `{ }` for developer
- Pencil/pen for designer
- Camera for photographer

**Keep it abstract, not literal.** Simplified form works better at small sizes.

---

## Theme Adaptability

Your mark needs to work in **both light and dark modes**.

### Approach 1: Single Color

```
Light mode: Dark mark on light background
Dark mode: Light mark on dark background
```

**Figma:** Design in one color (black). CSS will invert for dark mode.

---

### Approach 2: Outline + Fill

```
Light mode: Dark outline, no fill
Dark mode: Light outline, filled
```

**Figma:** Two layers: "mark-outline" (stroke), "mark-fill" (fill, hidden by default).

---

### Approach 3: Accent Color

```
Light mode: Accent color (e.g., blue)
Dark mode: Same accent, different background
```

**Works if:** Accent has enough contrast in both themes.

**Figma:** Use bright accent (#3498db, #e74c3c, etc.).

---

## Code-Ready Checklist

Before finalizing:

### Layer Structure
- [ ] All layers semantically named
- [ ] No default names ("Vector", "Rectangle 1")
- [ ] Groups flattened (max 2 levels deep)
- [ ] No hidden layers (export includes hidden!)

### Shapes
- [ ] Strokes outlined: Select all → Object → Outline Stroke
- [ ] Boolean operations resolved (combine shapes)
- [ ] No text (converted to outlines if needed)
- [ ] Aligned to pixel grid (whole number coordinates)

### Colors
- [ ] Single solid color OR
- [ ] Two colors max (outline + fill)
- [ ] No gradients
- [ ] No effects (shadows, blur)

### Testing
- [ ] Reduce to 16×16 — still recognizable?
- [ ] Test export (SVG) — code looks clean?
- [ ] Layer names make sense?

---

## Export Settings (Test)

```
Format: SVG
☑ Outline stroke
☑ Flatten
☑ Simplify
☐ Include "id" attribute (you'll add classes manually)
```

Export → Open in VS Code → Examine code.

**Look for:**
- Are layer names in the code?
- Is structure relatively simple?
- File size reasonable (~200-500 bytes)?

**Don't optimize yet!** Build 4-2 will clean it up. Just verify it's not thousands of lines.

---

## Evaluation Criteria

| Criterion | Weight | What We're Looking For |
|-----------|--------|------------------------|
| **Simplicity** | 25% | 3-8 shapes, clean paths, recognizable at 16×16 |
| **Theme Adaptability** | 20% | Works in both light and dark modes |
| **Personal Voice** | 20% | Represents you, not generic |
| **Technical Feasibility** | 20% | Code-ready structure, semantic layers |
| **Design Quality** | 15% | Balanced, considered, well-crafted |

---

## Stretch Goals

1. **Design variations** — Create 2-3 versions, choose best
2. **Animated version** — Plan how it could animate (for Week 5)
3. **Alternate state** — Hover variation (filled vs outline)
4. **Favicon mockup** — Show how it looks in browser tab
5. **Brand system** — Create color palette, typography to match

---

## Connection to Code

**Build 4-2** (next assignment):
- Export this design
- Run optimization workflow (Learn 4-3)
- Add CSS variables for theming
- Make keyboard accessible (Practice 4-2)
- Implement as favicon

**Week 5:**
- Add CSS transitions (smooth hover)
- Add interactive states (hover, focus, active)
- Final implementation in portfolio

---

## Examples

### Good Examples:

**Geometric initial:**
- "T" as overlapping triangles
- Simple, recognizable, 4 shapes

**Abstract symbol:**
- Three circles forming triangle pattern
- Represents collaboration/connection
- 3 shapes, works small

**Monogram:**
- "J" + "D" overlapped, negative space creates new shape
- Letterforms outlined (no text)
- 2 paths after boolean operation

### What to Avoid:

- ❌ Detailed illustration (too complex)
- ❌ Thin lines (disappear at 16×16)
- ❌ Many colors (hard to theme)
- ❌ Text without outlining
- ❌ Effects that don't export (shadows, blur)

---

## Common Issues

**"My mark disappears at small sizes"**
- Simplify — fewer details
- Thicken lines/shapes
- Increase contrast
- Test at 16×16 constantly

**"Too many shapes"**
- Combine with boolean operations
- Remove unnecessary details
- Simplify to core idea

**"Doesn't work in dark mode"**
- Test with dark background in Figma
- Use outline version instead of filled
- Try accent color (works in both)

---

## Inspiration

**Where to look:**
- Dribbble: Search "logo mark", "monogram", "icon"
- Behance: Search "personal brand", "designer logo"
- LogoLounge: Inspiration (don't copy!)
- Your favorite brands: What makes their marks work?

**Note:** Use for inspiration, not imitation. Your mark should be *yours*.

---

## Resources

- [Figma: Outline Stroke](https://help.figma.com/hc/en-us/articles/360049283914)
- [Figma: Boolean Operations](https://help.figma.com/hc/en-us/articles/360039957534)
- [LogoLounge](https://www.logolounge.com/) — Inspiration
- [Favicon Generator](https://realfavicongenerator.net/) — Test as favicon

---

## Submission Checklist

- [ ] Figma file linked (public) or PDF exported
- [ ] Design rationale written (1-2 paragraphs)
- [ ] SVG export tested and examined
- [ ] Design meets all requirements
- [ ] Layers semantically named
- [ ] Works at 16×16 size
- [ ] Works in light and dark themes
- [ ] Submitted before Week 5 Day 1

---

**Next:** Build 4-2 (code your mark with optimization and accessibility)
