# Reflect 4-1: Visual Notes

*5 points · Complete/Incomplete · Due before Day 2*

**Time estimate:** 45-60 minutes

---

## TL;DR

Create visual notes from this week's readings on SVG fundamentals, accessibility, and optimization. Use sketches, diagrams, and annotations to process the concepts.

**Submit:** Visual notes (PDF, image, or Figma link)

---

## This Week's Readings

### Reading 1: An Interactive Guide to SVG Paths

**Read:** [Josh Comeau: Interactive Guide to SVG Paths](https://www.joshwcomeau.com/svg/interactive-guide-to-paths/)

*Time: ~20 min*

**Focus on:**
- SVG path commands (M, L, H, V, C, Z)
- How commands draw shapes
- Interactive visualizations (play with the examples!)
- Building paths step-by-step
- Curves and Bézier control points

---

### Reading 2: Making SVG Accessible

**Read:** [WebAIM: Creating Accessible SVGs](https://webaim.org/techniques/images/#svg)

*Time: ~10 min*

**Focus on:**
- When SVG needs ARIA labels
- Decorative vs. meaningful graphics
- `role="img"` attribute
- Keyboard accessibility for interactive SVG

---

### Reading 3: Understanding and Manually Improving SVG Optimization

**Read:** [CSS-Tricks: Understanding SVG Optimization](https://css-tricks.com/understanding-and-manually-improving-svg-optimization/)

*Time: ~12 min*

**Focus on:**
- What Figma/Illustrator exports include (and why)
- What SVGO removes
- Manual cleanup steps
- Trade-offs (file size vs. editability)

---

## Focus Questions

### Question 1: Path Commands

**How do path commands build shapes?**

- Draw a simple shape (triangle or bookmark) step-by-step
- Show each command as it adds to the path:
  - `M10 10` — "Pen moves here"
  - `L90 10` — "Line to top right"
  - `L90 90` — "Line down"
  - `Z` — "Close it up"
- Annotate with arrows showing the "pen" moving
- Include one curved path example (C command with control points)

**From Josh's article:** "Commands are like giving directions to a pen"

---

### Question 2: viewBox

**What's the difference between `viewBox` and `width`/`height`?**

- Draw a diagram showing:
  - An SVG with `viewBox="0 0 100 100"` and `width="200"`
  - How the coordinate system differs from display size
  - What happens when you change each value

**Metaphor:** "viewBox is the camera frame, width/height is the print size"

---

### Question 3: Inline vs. External

**When should you use inline SVG vs. `<img src="icon.svg">`?**

Create a comparison chart:

| Inline SVG | External SVG |
|------------|--------------|
| Pros: ??? | Pros: ??? |
| Cons: ??? | Cons: ??? |
| Use when: ??? | Use when: ??? |

**Sketch examples** of each approach with code snippets.

---

### Question 4: Accessibility

**How do you make an icon accessible?**

Draw a decision tree:
- Is the icon decorative or meaningful?
  - If decorative → `aria-hidden="true"`
  - If meaningful → `role="img"` + `aria-label`
- Is it interactive (button/link)?
  - Yes → needs focus state + keyboard access
  - No → just needs label

**Include code examples** in your visual notes.

---

### Question 5: Optimization

**What does SVGO remove and why?**

Create a before/after diagram:

**Before (Figma export):**
```
<svg xmlns="..." width="24" height="24">
  <!-- Generator: Figma -->
  <g id="Layer-1">
    <path id="Vector" fill="#1E1E1E" d="M5.0000..." />
  </g>
</svg>
```

**After (SVGO + manual cleanup):**
```
<svg class="icon" viewBox="0 0 24 24">
  <path class="icon-shape" d="M5..." />
</svg>
```

**Annotate what was removed:**
- `xmlns` (not needed for inline)
- Generator comment (metadata)
- Generic IDs (`Vector`)
- Inline fills (CSS will handle)
- Excessive precision (`5.0000` → `5`)
- Nested groups (flattened)

---

## Visual Notes Format

**You can use:**
- Hand-drawn sketches (photo/scan)
- Digital notes (iPad, tablet)
- Figma/Miro diagrams
- Combination of text + visuals

**Must include:**
- Diagrams explaining concepts
- Code snippets with annotations
- Comparisons (before/after, pros/cons)
- Your own observations/questions
- Visual metaphors (cameras, frames, layers)

---

## Example Visual Note Strategies

### Strategy 1: The Diagram

**Draw the concept:**
- viewBox as a camera frame
- Inline vs. external as two different delivery methods
- ARIA decision tree
- Optimization workflow (Figma → SVGO → manual → production)

---

### Strategy 2: The Comparison Table

**Create side-by-side comparisons:**
- Inline SVG code vs. external `<img>` code
- Accessible icon vs. inaccessible icon
- Raw Figma export vs. optimized SVG

**Add pros/cons, use cases, examples**

---

### Strategy 3: The Annotation

**Take code examples from the readings:**
- Print them or screenshot them
- Annotate with arrows, circles, notes
- Explain what each part does
- Highlight problems and solutions

**Example:**
```xml
<svg aria-hidden="true">  ← Hides from screen readers
  <path fill="currentColor" />  ← Inherits text color
</svg>
```

---

### Strategy 4: The Mind Map

**Center concept:** "SVG on the Web"

**Branches:**
- Structure (viewBox, paths, groups)
- Styling (CSS vs. presentation attributes)
- Accessibility (ARIA, roles, focus)
- Optimization (SVGO, manual cleanup)
- Implementation (inline, external, sprites)

**Add sub-branches with details, code snippets, questions**

---

## Complete Criteria

- [ ] Read all 3 articles
- [ ] Answered all 5 focus questions visually
- [ ] Included diagrams/sketches
- [ ] Included code examples with annotations
- [ ] Created visual metaphors or comparisons
- [ ] Submitted before Day 2 (PDF, image, or Figma link)

---

## Tips for Effective Visual Notes

**Mix text and visuals:**
- Don't just write notes — draw concepts
- Don't just draw — explain with words
- Combine both for deeper understanding

**Use color strategically:**
- Highlight key concepts
- Color-code categories (structure, styling, accessibility)
- Use red for warnings/problems, green for solutions

**Include your own voice:**
- "This confused me at first..."
- "Aha! viewBox is like a camera!"
- "I didn't know you could..."
- "This reminds me of..."

**Make it scannable:**
- Use headings, boxes, arrows
- Group related concepts
- Leave white space
- Don't cram everything together

---

## Reflection Prompts

**As you create your visual notes, consider:**

1. **What concept clicked for you?**
   - Was there an "aha!" moment?
   - What metaphor helped it make sense?

2. **What's still confusing?**
   - What questions do you still have?
   - What needs more practice?

3. **How does this connect to your mark design?**
   - What will you apply from these readings?
   - What mistakes will you avoid?

4. **What surprised you?**
   - About how SVG works?
   - About optimization?
   - About accessibility?

---

## Resources

**Visual note-taking guides:**
- [Sketchnote Handbook](https://rohdesign.com/handbook)
- [How to Sketchnote](https://www.youtube.com/watch?v=5GxHsM6p_3s) (video)

**Digital tools (optional):**
- Figma (diagrams, annotations)
- Procreate (iPad drawing)
- Notability (iPad notes)
- Excalidraw (simple diagrams)
- Good old paper + pen

---

## Example Submission

**Title:** Week 4 Visual Notes: SVG Fundamentals

**Page 1: Path Commands**
- Interactive examples from Josh Comeau's guide
- Diagram of M, L, H, V, C, Z commands
- Drawing a bookmark icon step-by-step
- Notes: "Bézier curves = control points pulling the path!"

**Page 2: viewBox Explained**
- Diagram showing coordinate system vs. display size
- Code example with annotations
- Metaphor: "Camera frame = viewBox, print size = width/height"

**Page 3: Inline vs. External**
- Comparison table
- Code snippets for each approach
- Use cases: "Inline for interactive, external for static"

**Page 4: Accessibility**
- Decision tree diagram
- Before/after code examples (inaccessible → accessible)
- Notes: "Always label meaningful icons!"

**Page 5: Optimization Workflow**
- Flow diagram: Figma → SVGO → Manual → Production
- Before/after code comparison
- Checklist of what to remove/add

**Page 6: Questions & Connections**
- "Still confused about: When to use SVG sprites?"
- "Applying to my mark: semantic layer names, single color fills"
- "Surprised by: How interactive Josh's guide is — makes paths so clear!"

---

## Grading

**Complete (5 points):**
- All readings completed
- All 5 questions addressed visually
- Clear effort to process concepts (not just copied text)
- Includes personal observations/questions
- Submitted on time

**Incomplete (0 points):**
- Missing readings
- Text-only notes (no visual processing)
- Minimal effort
- Late submission

---

**Remember:** Visual notes aren't about artistic skill — they're about processing ideas. Stick figures and simple diagrams are perfect. The goal is to think visually about code concepts.
