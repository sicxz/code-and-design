# Lecture 4-1: SVG Structure & Figma's Engine

## Part 1: SVG as Code (35 min)

### Opening Demo (in browser)

Open any site with an SVG logo (Stripe, GitHub, Figma).

Open DevTools → Elements panel → Find the `<svg>` element.

**In the Console:**

```javascript
const logo = document.querySelector('svg');

// Change color
logo.querySelector('path').setAttribute('fill', '#FF0066');

// Make it bigger
logo.setAttribute('width', '200');
logo.setAttribute('height', '200');

// Rotate it
logo.style.transform = 'rotate(45deg)';
```

**Ask the class:**
- What just happened?
- Why did it work?
- What does this tell you about SVG?

**Key insight:** SVG is code. Not pixels. It's structured, editable XML.

---

### SVG vs. Raster Images

**The problem with images:**

```html
<img src="logo.png" width="500">
```

- Scale up → blurry (pixels stretch)
- Can't change colors with CSS
- Can't animate individual parts
- One file per color/size variant

**SVG solves this:**

```html
<svg width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" fill="var(--color-primary)" />
</svg>
```

- Scale to any size → stays sharp (math, not pixels)
- Change colors with CSS variables
- Animate individual elements
- One file, infinite variants

**SVG = Scalable Vector Graphics**
- Scalable (any size, no quality loss)
- Vector (defined by math, not pixels)
- Graphics (visual content)

---

### SVG is XML

XML = eXtensible Markup Language

It looks like HTML but with different rules:

```xml
<!-- HTML -->
<div class="icon">
  <img src="icon.png">
</div>

<!-- SVG (XML) -->
<svg class="icon" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" />
  <path d="M8 12 L16 12" />
</svg>
```

**Similarities to HTML:**
- Elements with opening/closing tags
- Attributes (like `class`, `id`)
- Nesting (children inside parents)
- Can be styled with CSS

**Differences:**
- Self-closing tags must have `/` (XML is strict)
- Coordinate-based (not layout-based)
- Different elements (`<path>`, `<circle>`, not `<div>`, `<p>`)

---

### SVG Anatomy

Let's read this SVG like we'd read HTML:

```xml
<svg width="100" height="100" viewBox="0 0 100 100" class="icon">
  <circle cx="50" cy="50" r="40" fill="blue" />
  <path d="M30 50 L70 50 M50 30 L50 70" stroke="white" stroke-width="4" />
</svg>
```

**Line by line:**

```xml
<svg width="100" height="100" viewBox="0 0 100 100" class="icon">
```
- `<svg>`: Container (like a `<div>` for graphics)
- `width="100" height="100"`: Display size (100px × 100px on screen)
- `viewBox="0 0 100 100"`: Coordinate system (more on this soon)
- `class="icon"`: CSS class (just like HTML)

```xml
<circle cx="50" cy="50" r="40" fill="blue" />
```
- `<circle>`: SVG shape element
- `cx="50" cy="50"`: Center point (x=50, y=50 in viewBox)
- `r="40"`: Radius (40 units)
- `fill="blue"`: Fill color (can also use CSS)
- `/>`: Self-closing tag (XML syntax)

```xml
<path d="M30 50 L70 50 M50 30 L50 70" stroke="white" stroke-width="4" />
```
- `<path>`: Most flexible SVG element (can draw anything)
- `d="..."`: Path data (drawing commands)
  - `M30 50`: Move to point (30, 50)
  - `L70 50`: Line to point (70, 50)
  - `M50 30`: Move to point (50, 30) — starts new line
  - `L50 70`: Line to point (50, 70)
  - Result: A plus sign (two lines crossing)
- `stroke="white"`: Line color
- `stroke-width="4"`: Line thickness

**The result:**
- Blue circle, centered
- White plus sign overlay
- All in 100×100 coordinate space

---

### viewBox: The Camera Frame

**This is the most important concept in SVG.**

viewBox defines the coordinate system — not the display size.

#### The Mental Model

Think of viewBox like a camera:
- `width` and `height` = how big the photo appears on screen
- `viewBox` = what the camera sees (the scene coordinates)

```xml
<svg width="200" height="200" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" />
</svg>
```

**What's happening:**
- Display size: 200px × 200px (big on screen)
- viewBox: 0 to 100, 0 to 100 (coordinate system)
- Circle center: (50, 50) in viewBox coordinates
- **Result:** Circle appears centered in 200px space (scaled 2×)

#### viewBox Syntax

```
viewBox="min-x min-y width height"
```

- `min-x, min-y`: Starting point (usually 0, 0)
- `width, height`: Coordinate system dimensions

**Examples:**

```xml
<!-- Standard: 0 to 24 coordinate system -->
<svg viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" />  <!-- Centered at 12,12 -->
</svg>

<!-- Zoomed out: 0 to 100 -->
<svg viewBox="0 0 100 100">
  <circle cx="12" cy="12" r="10" />  <!-- Now in top-left corner -->
</svg>

<!-- Cropped: starts at 10,10 -->
<svg viewBox="10 10 24 24">
  <circle cx="12" cy="12" r="10" />  <!-- Partially visible (cropped) -->
</svg>
```

#### Why viewBox Matters

**Without viewBox:**
```xml
<svg width="24" height="24">
  <circle cx="12" cy="12" r="10" />
</svg>
```
- Works, but assumes 1:1 scale (1 viewBox unit = 1 pixel)
- Harder to scale responsively

**With viewBox:**
```xml
<svg width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" />
</svg>
```
- viewBox defines coordinate space independently of display size
- Change `width` to `48` → same drawing, 2× bigger
- Responsive scaling (SVG stays proportional)

#### Common Mistake

```xml
<svg viewBox="0 0 24 24px">  <!-- NO! viewBox is unitless -->
```

viewBox values have no units. They're coordinates in an abstract space, not pixels.

---

### SVG Elements (Common Shapes)

#### Basic Shapes

```xml
<!-- Rectangle -->
<rect x="10" y="10" width="80" height="60" fill="blue" />

<!-- Circle -->
<circle cx="50" cy="50" r="30" fill="red" />

<!-- Ellipse -->
<ellipse cx="50" cy="50" rx="40" ry="20" fill="green" />

<!-- Line -->
<line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="2" />

<!-- Polyline (connected lines) -->
<polyline points="10,10 50,25 90,10 50,40" fill="none" stroke="purple" />

<!-- Polygon (closed shape) -->
<polygon points="50,10 90,90 10,90" fill="orange" />
```

#### Path (Most Powerful)

`<path>` can draw anything using commands:

```xml
<path d="M10 10 L90 90 L10 90 Z" fill="teal" />
```

**Path commands:**
- `M x y`: Move to point (start new path)
- `L x y`: Line to point
- `H x`: Horizontal line to x
- `V y`: Vertical line to y
- `C`: Cubic Bézier curve
- `Q`: Quadratic Bézier curve
- `A`: Arc (elliptical curve)
- `Z`: Close path (return to start)

**Example: Draw a triangle**

```xml
<path d="M50 10 L90 90 L10 90 Z" />
```
- Move to (50, 10) — top point
- Line to (90, 90) — bottom right
- Line to (10, 90) — bottom left
- Close path (Z) — back to start

**This is what Figma generates** when you use the pen tool or boolean operations.

---

### Groups (`<g>`)

Groups organize related elements:

```xml
<svg viewBox="0 0 100 100">
  <g id="icon-parts">
    <circle cx="50" cy="50" r="40" />
    <path d="M30 50 L70 50" />
  </g>
</svg>
```

**Why use groups:**
- Apply styles to multiple elements at once
- Transform multiple elements together
- Organize complex graphics (like Figma layers)

**Styles cascade down:**

```xml
<g fill="blue" stroke="white">
  <circle cx="50" cy="50" r="20" />  <!-- Inherits blue fill, white stroke -->
  <rect x="10" y="10" width="20" height="20" />  <!-- Same -->
</g>
```

---

## BREAK (5 min)

---

## Part 2: Figma's SVG Engine (30 min)

### How Figma Generates SVG

When you export from Figma, here's what happens:

1. Figma reads your design (layers, shapes, effects)
2. Converts vector layers to SVG elements
3. Preserves layer structure as groups
4. Adds metadata for re-importing
5. Generates XML code

**Figma's goal:** Create SVG that can be re-imported and edited.
**Our goal:** Create SVG optimized for web (smaller, cleaner).

These goals conflict! That's why we optimize.

---

### Figma Export Settings

**The Export Dialog:**

When you select a layer and click "Export":

```
Format: SVG
☐ Preview
☐ Suffix
☑ Outline stroke
☑ Flatten
☐ Include "id" attribute
☐ Simplify
```

Let's understand each setting:

#### Outline Stroke

**Unchecked:**
```xml
<rect width="100" height="100" stroke="black" stroke-width="4" />
```
- Stroke stays as attribute
- Stroke width scales with SVG
- Problem: Browsers render strokes slightly differently

**Checked:**
```xml
<path d="M0 2 L100 2 L100 98 L0 98 Z M4 4 L4 96 L96 96 L96 4 Z" fill="black" />
```
- Stroke converted to filled path
- Consistent rendering across browsers
- Paths are more complex, but predictable

**When to use:** Almost always check this. Ensures strokes render consistently.

---

#### Flatten

**Unchecked:**
```xml
<g id="Group-1">
  <g id="Group-2">
    <g id="Layer-3">
      <rect />
    </g>
  </g>
</g>
```
- Preserves Figma layer hierarchy
- Lots of nested groups
- Code is bloated

**Checked:**
```xml
<g id="icon">
  <rect />
</g>
```
- Merges nested groups
- Flatter structure
- Cleaner code

**When to use:** Check this unless you need to preserve exact layer structure for animation.

---

#### Include "id" attribute

**Unchecked:**
```xml
<rect />
```
- No IDs generated

**Checked:**
```xml
<rect id="Rectangle-1" />
```
- Layer names become IDs
- Useful for CSS targeting
- But clutters code if you're using classes instead

**When to use:** Optional. You can add classes manually instead.

---

#### Simplify

**Unchecked:**
```xml
<path d="M0.5432 1.2345 L10.9876 20.1234 ..." />
```
- High-precision decimal points
- Larger file size

**Checked:**
```xml
<path d="M0.5 1.2 L11 20 ..." />
```
- Rounds coordinates to fewer decimals
- Smaller file size
- Usually imperceptible quality loss

**When to use:** Check this for icons. Uncheck for detailed illustrations.

---

### What Figma Adds (Metadata)

**Typical Figma export:**

```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<!-- Generator: Figma -->
<g clip-path="url(#clip0_123_456)">
  <path d="..." fill="#1E1E1E"/>
</g>
<defs>
  <clipPath id="clip0_123_456">
    <rect width="24" height="24" fill="white"/>
  </clipPath>
</defs>
</svg>
```

**What we see:**
- `xmlns="http://www.w3.org/2000/svg"` — XML namespace (not needed inline)
- `fill="none"` on `<svg>` — Figma default
- `<!-- Generator: Figma -->` — Comment identifying source
- `<defs>` with clipPath — Complex effects/masking
- Clip path IDs — Unique IDs for internal references

**What we can remove:**
- `xmlns` (not needed for inline SVG)
- Generator comment
- `fill="none"` on `<svg>` (if we're setting fill in CSS)
- Clip paths (if not needed for the design)

---

### Export Settings Impact: Side-by-Side Comparison

Let's export the same star icon with different settings:

#### Export 1: Default (no optimization)

```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<!-- Generator: Figma -->
<g id="star-icon">
  <g id="star-body">
    <path id="star-outline" d="M12.0000 2.5000 L14.1234 9.3456 H21.5678 L15.7222 13.8765 L17.8456 20.7222 L12.0000 16.1913 L6.1543 20.7222 L8.2777 13.8765 L2.4321 9.3456 H9.8765 L12.0000 2.5000Z" fill="#FFD700"/>
    <path id="star-stroke" d="..." stroke="#000000" stroke-width="2"/>
  </g>
</g>
</svg>
```

**File size:** ~450 bytes
**Issues:**
- Nested groups
- Stroke is separate element
- High-precision decimals
- Metadata

---

#### Export 2: Outline stroke + Flatten

```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.5 L14.1 9.3 H21.6 L15.7 13.9 L17.8 20.7 L12 16.2 L6.2 20.7 L8.3 13.9 L2.4 9.3 H9.9 L12 2.5Z" fill="#FFD700"/>
</svg>
```

**File size:** ~180 bytes (60% smaller!)
**Improvements:**
- No nested groups
- Single path (stroke outlined)
- Simplified coordinates
- Clean structure

---

#### Export 3: Manual cleanup (what we want)

```xml
<svg class="icon icon-star" width="24" height="24" viewBox="0 0 24 24" aria-label="Star">
  <path d="M12 2.5 14.1 9.3 21.6 9.3 15.7 13.9 17.8 20.7 12 16.2 6.2 20.7 8.3 13.9 2.4 9.3 9.9 9.3z" fill="var(--color-icon)"/>
</svg>
```

**File size:** ~160 bytes
**Further improvements:**
- Removed `xmlns` (inline SVG)
- Removed `fill="none"` from `<svg>`
- Added semantic classes
- Added `aria-label` (accessibility)
- Changed fill to CSS variable
- Closed path with `z`

---

### Layer Naming → Code IDs

**In Figma:**
- Layer named "icon-outline" → `<path id="icon-outline" />`
- Layer named "Rectangle 42" → `<rect id="Rectangle-42" />`
- Unnamed layer → `<path id="Vector" />`

**Best practice:** Name layers in Figma like you'd name CSS classes.

```
❌ Layer: "Rectangle 7"
   Code: <rect id="Rectangle-7" />

✅ Layer: "button-background"
   Code: <rect id="button-background" />
```

In code, you can convert IDs to classes:

```xml
<!-- Figma exports -->
<rect id="button-background" />

<!-- We convert to -->
<rect class="button-background" />
```

---

### Boolean Operations in Figma

When you use boolean operations in Figma (Union, Subtract, Intersect), Figma converts them to paths on export.

**In Figma:**
- Two overlapping circles
- Boolean Union → single combined shape

**Exported SVG:**
```xml
<path d="M... complex path data combining both circles ..." />
```

**The good:**
- Single path (efficient)
- Works anywhere

**The bad:**
- Path data is complex
- Hard to edit by hand
- Can't change parts independently

**Best practice:** Use boolean operations for final design. Keep shapes separate if you need to animate parts individually.

---

### Effects That Don't Export Well

Some Figma effects don't translate to SVG:

**Drop shadows:**
```xml
<!-- Figma exports as SVG filter -->
<defs>
  <filter id="shadow">
    <feDropShadow ... />
  </filter>
</defs>
```
- SVG filters are complex
- Better to use CSS `box-shadow` or `filter: drop-shadow()`

**Blur:**
```xml
<filter id="blur">
  <feGaussianBlur stdDeviation="5" />
</filter>
```
- Again, SVG filter
- Consider CSS `filter: blur()` instead

**Gradients:**
```xml
<defs>
  <linearGradient id="grad">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#000" />
  </linearGradient>
</defs>
```
- Gradients export fine
- But add complexity
- Consider if you need them for icons

**Best practice for icons:** Use solid colors. Effects add complexity. Save effects for illustrations.

---

### The Optimization Workflow

```
Figma Design
    ↓ (export with optimal settings)
Raw SVG Export
    ↓ (SVGO automated cleanup)
Optimized SVG
    ↓ (manual cleanup)
Production-Ready SVG
    ↓ (add CSS classes, variables, ARIA)
Final Implementation
```

**Next lecture (Week 4-2):** We'll apply this workflow hands-on and add interactive states.

---

## Part 3: Inline vs. External SVG (15 min)

### Two Ways to Use SVG

#### 1. External File

```html
<img src="logo.svg" alt="Company Logo" width="100">
```

**Pros:**
- Cacheable (browser stores file)
- Reusable (same file, multiple pages)
- Clean HTML (SVG code not in page)

**Cons:**
- Can't style with CSS (colors, fill, stroke)
- Can't animate with JavaScript
- Extra HTTP request

**When to use:** Simple logos, repeated graphics, performance priority.

---

#### 2. Inline SVG

```html
<svg class="logo" viewBox="0 0 100 50">
  <path d="..." fill="var(--color-logo)" />
</svg>
```

**Pros:**
- Full CSS control (colors, styles)
- JavaScript access (animation, interaction)
- No extra HTTP request
- Can use design tokens (CSS variables)

**Cons:**
- Not cacheable (code in each page)
- Increases HTML file size
- Harder to reuse (must copy/paste or use components)

**When to use:** Icons, interactive graphics, theme-responsive elements.

---

### Choosing the Right Approach

| Use Case | Approach | Why |
|----------|----------|-----|
| Site logo (static) | External | Cacheable, reused across pages |
| Icons (theme-responsive) | Inline | Need CSS variable colors |
| Interactive graphic | Inline | Need JavaScript animation |
| Hero illustration | External | Large file, cache for performance |
| Button icons | Inline | Theme colors, hover states |
| Social media icons | External | Same everywhere, static |

**Hybrid approach:**
- External for large, static graphics
- Inline for small, interactive icons
- Use component systems (Week 6+) to manage inline SVG reusability

---

### Making External SVG Styleable

**The problem:**
```html
<img src="icon.svg" class="icon">
```

```css
.icon {
  fill: red;  /* Doesn't work! */
}
```

CSS can't reach into external files.

**The solution:**

Option 1: Use inline SVG (preferred for icons)

Option 2: Use `<svg>` with `<use>` (advanced, not covered this week)

Option 3: Use CSS filters (limited):
```css
.icon {
  filter: brightness(0) saturate(100%) invert(50%);  /* Hacky tint -->
}
```

**Best practice:** For icons that need styling, use inline SVG.

---

## Summary

### Key Concepts

1. **SVG is code** — XML structure like HTML, but for graphics
2. **viewBox = coordinate system** — Camera frame, not pixels
3. **Figma generates verbose SVG** — Metadata for re-import, we optimize for web
4. **Export settings matter** — Outline stroke, Flatten produce cleaner code
5. **Layer naming becomes IDs** — Name semantically in Figma
6. **Optimization workflow** — Figma → SVGO → manual → production
7. **Inline vs. external** — Inline for control, external for cache

### The Pattern We're Building

```
Design in Figma (semantic layers, simple shapes)
    ↓
Export (outline stroke, flatten)
    ↓
Optimize (SVGO, manual cleanup)
    ↓
Theme (CSS variables)
    ↓
Interact (Week 5: hover, focus, transitions)
```

### Next Steps

- **Labs:** Practice the optimization workflow
- **Build 4-1:** Design your personal mark in Figma
- **Week 5:** Add interaction states and smooth transitions

---

## Questions to Think About

1. When would you use a `<circle>` vs. a `<path>`?
2. What's the difference between viewBox and width/height?
3. Why does Figma's export include so much "extra" code?
4. When should you use inline SVG vs. external file?
5. How do you make SVG colors respond to your theme system?

We'll answer these through practice this week.
