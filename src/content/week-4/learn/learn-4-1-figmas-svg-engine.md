# Learn 4-1: Figma's SVG Engine

*10 points · Complete/Incomplete · Due before Day 2*

**Time estimate:** 40-50 minutes

---

## TL;DR

Understand how Figma generates SVG code, what export settings do, and how to design for clean code output.

**Submit:**
- Screenshot of your 3 export tests
- 1-2 paragraph reflection on what surprised you

---

## Overview

Figma is your design tool, but it's also a code generator. When you export SVG, Figma converts your visual layers into XML code. Understanding how this conversion works helps you design smarter and export cleaner.

**By the end, you'll know:**
- How Figma converts vectors to SVG paths
- What each export setting does to the code
- How to prepare Figma files for clean exports
- Why layer naming matters for code quality

---

## What You're Learning

**Concepts:**
- Figma's SVG rendering engine
- Export settings: Outline stroke, Flatten, Simplify
- Layer structure → code structure mapping
- Boolean operations and code complexity
- Effects that don't translate well

**Skills:**
- Designing with code in mind
- Preparing files for export
- Predicting export quality

---

## The Reading

### Part 1: Official Documentation

**Read:** [Figma: Preparing Graphics for Export](https://help.figma.com/hc/en-us/articles/360040028114)

*Time: ~10 min*

**Focus on:**
- Export formats (SVG vs PNG vs PDF)
- SVG-specific settings
- Layer and component setup
- Outline stroke explanation

**Questions to answer:**
- What does "Outline stroke" do?
- When should you flatten groups?
- How do layer names affect export?

---

### Part 2: Video Walkthrough

**Watch:** "Understanding Figma's SVG Output"

*Time: ~8 min*

**Search YouTube for:** "Figma SVG export tutorial" or "Figma to code SVG"

**Suggested channels:**
- DesignCourse
- Figma official
- Flux Academy

**What to watch for:**
- Side-by-side: Figma layers → SVG code
- Export settings demonstration
- Common mistakes

---

### Part 3: Community Article

**Read:** "How Figma Generates SVG" or "Designing Icons for Code in Figma"

*Time: ~10 min*

**Search:** Medium, Dev.to, or CSS-Tricks for recent articles (2022+)

**Key topics:**
- Why Figma exports are verbose
- Metadata and re-import capability
- Boolean operations complexity
- Effects and filters

---

## Figma Engine Concepts

### How Figma Converts Layers to SVG

**In Figma:**
- You draw a rectangle with rounded corners
- Figma stores it as properties: x, y, width, height, corner radius

**On export:**
- Figma converts properties to SVG `<path>` data
- Rounded corners become Bézier curves
- Result: `<path d="M... C... L... Z" />`

**Why paths?**
- Paths are universal (work everywhere)
- Paths are flexible (can be edited)
- Paths are the "compiled" version of your design

---

### Export Setting: Outline Stroke

**Unchecked:**
```xml
<rect width="100" height="100" stroke="black" stroke-width="4" />
```
- Stroke stays as attribute
- **Problem:** Browsers render strokes slightly differently
- **Problem:** Stroke scales with SVG (might not want that)

**Checked:**
```xml
<path d="M0 2 L100 2 L100 98 L0 98 Z M4 4 L4 96 L96 96 L96 4 Z" fill="black" />
```
- Stroke converted to filled path (outline = shape, not line)
- **Benefit:** Consistent rendering everywhere
- **Benefit:** Full control in code

**When to use:** Almost always for icons. Ensures your stroke looks identical in all browsers.

---

### Export Setting: Flatten

**Unchecked:**
```xml
<g id="icon">
  <g id="layer-1">
    <g id="layer-2">
      <rect />
    </g>
  </g>
</g>
```
- Preserves Figma layer hierarchy
- **Problem:** Excessive nesting = bloated code

**Checked:**
```xml
<g id="icon">
  <rect />
</g>
```
- Merges nested groups
- **Benefit:** Simpler structure
- **Benefit:** Smaller file size

**When to use:** For simple icons/logos. Uncheck if you need to animate layers independently.

---

### Export Setting: Simplify

Rounds coordinates to fewer decimal places:

**Unchecked:**
```
M12.4567 34.8901 L56.7890 12.3456
```

**Checked:**
```
M12.5 34.9 L56.8 12.3
```

**Benefit:** Smaller file size
**Trade-off:** Tiny loss of precision (usually imperceptible at icon scale)

**When to use:** Always for icons. Consider unchecking for detailed illustrations.

---

### Why Figma Generates IDs

**Layer named "icon-background":**
```xml
<rect id="icon-background" />
```

**Layer named "Rectangle 7":**
```xml
<rect id="Rectangle-7" />
```

**Unnamed layer:**
```xml
<rect id="Vector" />
```

**Why this matters:**
- IDs help you target elements with CSS
- Generic names ("Vector", "Rectangle-7") are useless
- Semantic names ("icon-background") are helpful

**Best practice:** Name layers in Figma like you'd name CSS classes.

---

### Boolean Operations and Complexity

**In Figma:**
- Two overlapping circles
- Union them (combine into one shape)

**Exported SVG:**
```xml
<path d="M0 50 C0 22.4 22.4 0 50 0 C77.6 0 100 22.4 100 50 C100 58.3 98.1 66.1 94.7 72.9 C106.5 82.1 114.5 96.1 114.5 112 C114.5 139.6 92.1 162 64.5 162 C36.9 162 14.5 139.6 14.5 112 C14.5 96.1 22.5 82.1 34.3 72.9 C30.9 66.1 29 58.3 29 50Z"/>
```

**Result:**
- Complex path data (Bézier curves for both circles)
- Hard to edit by hand
- Single element (efficient for rendering)

**Trade-off:**
- Clean visual design in Figma
- Complex code output
- Harder to modify parts individually

**Best practice:** Use booleans for final design. Keep shapes separate if you need to animate them.

---

### Effects That Don't Export Well

**Drop shadows:**
```xml
<defs>
  <filter id="shadow">
    <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
  </filter>
</defs>
<rect filter="url(#shadow)" />
```
- SVG filters are complex
- Not all browsers support them fully
- Consider CSS `box-shadow` instead

**Blur:**
```xml
<filter id="blur">
  <feGaussianBlur stdDeviation="5" />
</filter>
```
- Similar issues
- Use CSS `filter: blur()` if possible

**Best practice for icons:** Avoid effects. Use solid colors and shapes.

---

## Design Prep Checklist

Before exporting from Figma:

### Layer Naming
- [ ] Name layers semantically ("button-background", not "Rectangle 42")
- [ ] Remove or rename default layers ("Vector", "Group", etc.)
- [ ] Use kebab-case (icon-outline) or camelCase (iconOutline)

### Structure
- [ ] Flatten unnecessary nested groups
- [ ] Group logically (related elements together)
- [ ] Remove empty layers

### Shapes
- [ ] Outline strokes (or plan to do on export)
- [ ] Resolve boolean operations (combine shapes)
- [ ] Convert text to outlines (if exporting as graphics)

### Colors
- [ ] Use single, solid colors (CSS will control them)
- [ ] Avoid gradients for simple icons
- [ ] Remove unnecessary effects

### Grid & Alignment
- [ ] Design on pixel grid (icons: 24×24, 32×32, etc.)
- [ ] Align to pixel boundaries (avoid subpixels)
- [ ] Use consistent padding/spacing

---

## Exercises

### Exercise 1: Export Comparison (15 min)

**Create a simple icon in Figma:**
- Use 2-3 basic shapes (circles, rectangles)
- Add a stroke
- Group them

**Export 3 times with different settings:**

1. **Default:**
   - Uncheck Outline stroke
   - Uncheck Flatten
   - Export → Save as "icon-default.svg"

2. **Optimized:**
   - Check Outline stroke
   - Check Flatten
   - Check Simplify
   - Export → Save as "icon-optimized.svg"

3. **Hand-coded comparison:**
   - Code the same icon by hand in HTML
   - Use simple `<circle>` and `<rect>` elements
   - Save as "icon-hand.svg"

**Compare file sizes:**
- Open each in VS Code
- Look at line count and complexity
- Which is smallest? Which is most readable?

**Screenshot:** Take a screenshot showing all 3 files side-by-side in your editor.

---

### Exercise 2: Layer Naming Impact (10 min)

**Create a bookmark icon:**
- Name layers: "bookmark-body", "bookmark-tab"
- Export → Check code

**Rename layers generically:**
- "Rectangle 1", "Rectangle 2"
- Export → Check code

**Compare:**
- How do IDs differ?
- Which is easier to understand?
- Which would you rather edit 6 months from now?

---

### Exercise 3: Boolean Operation Audit (10 min)

**Find a complex icon (with boolean operations):**
- Export as SVG
- Open in editor
- Look at the path data

**Questions:**
- How many path commands? (M, L, C, etc.)
- Can you understand what the path is drawing?
- What would happen if you needed to change one part?

---

## Complete Criteria

- [ ] Read Figma export documentation
- [ ] Watched SVG export video walkthrough
- [ ] Read community article on Figma SVG generation
- [ ] Completed Exercise 1 (3 export comparisons)
- [ ] Completed Exercise 2 (layer naming impact)
- [ ] Completed Exercise 3 (boolean operation audit)
- [ ] Screenshot submitted showing export comparisons
- [ ] Written reflection (1-2 paragraphs): What surprised you? What will you change in your workflow?

---

## Common Issues

**"My export still has nested groups even with Flatten checked"**
- Flatten works on groups, not frames
- Try ungrouping in Figma first, then re-group
- Or manually remove `<g>` wrappers in code

**"Outline stroke made my icon look different"**
- Check stroke alignment (inside/outside/center)
- Center stroke alignment exports best
- May need to adjust stroke width

**"Export is huge (thousands of lines)"**
- Check for hidden layers (export includes hidden)
- Check for excessive effects (shadows, blurs)
- Simplify boolean operations

---

## Reflection Prompt

Write 1-2 paragraphs reflecting on:

1. **What surprised you** about how Figma generates code?
2. **What will you change** in how you design going forward?
3. **What's the trade-off** between design flexibility and code simplicity?

**Example:**
> I was surprised how much cleaner the code is when you outline strokes and flatten groups. I didn't realize Figma layer names became IDs — I usually just leave them as "Rectangle 1" but now I'll name them semantically. The trade-off I noticed is that boolean operations make clean visual designs but complex code. I'll need to decide case-by-case whether I need shapes separate for animation or can combine for simplicity.

---

## Resources

- [Figma: Export Settings](https://help.figma.com/hc/en-us/articles/360040028114)
- [Figma: Outline Stroke](https://help.figma.com/hc/en-us/articles/360049283914)
- SVG OMG (online SVG optimizer): [svgomg.net](https://jakearchibald.github.io/svgomg/)
- [CSS-Tricks: SVG File Size](https://css-tricks.com/understanding-and-manually-improving-svg-optimization/)

---

**Next:** Learn 4-2 (SVG Fundamentals) and Learn 4-3 (Optimization Workflow)
