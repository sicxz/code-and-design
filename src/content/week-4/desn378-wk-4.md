# Week 4: The Shape
## SVG Structure, Figma's Engine, and Interactive Graphics

**Interaction Question:** What happens when I interact?

---

## Day 1: Lecture Day — SVG Structure & Figma's Engine

### Opening Hook (15 min)

Start with the browser, not the theory.

**Demo:** Open any website with an SVG logo (Stripe, GitHub, Figma itself) in DevTools

```javascript
// In DevTools Console, grab an SVG element
const logo = document.querySelector('svg');

// Change its color live
logo.querySelector('path').setAttribute('fill', '#FF0066');

// Change another path
logo.querySelectorAll('path')[1].setAttribute('fill', '#00FF66');

// Make it huge
logo.setAttribute('width', '500');
logo.setAttribute('height', '500');
```

**Ask:**
- "What just happened?"
- "Why did this work when we changed the code?"
- "What does this tell you about SVG?"

**Key insight to land:** SVG is code. It's not a flattened image — it's structured, editable, and responsive to changes. Just like HTML.

---

### Concept: SVG as Code (20 min)

**Show the problem:**
- Images (JPG, PNG) are pixels. Scale them up → blurry
- You can't change a logo's color with CSS
- You can't animate individual parts of an image

**Show the solution:**

```html
<!-- This is an SVG -->
<svg width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" fill="var(--color-primary)" />
  <path d="M8 12 L16 12 M12 8 L12 16" stroke="white" stroke-width="2" />
</svg>
```

Read this out loud:
- "SVG tag — like a container"
- "Circle: center at 12,12, radius 10, filled with our design token color"
- "Path: draw a plus sign with two lines"

**This is XML.** It's structured like HTML. It has elements, attributes, and nesting.

**Connect to Figma:**
- When you draw a circle in Figma → Figma stores it as math (center, radius)
- When you export as SVG → Figma writes that math as XML code
- The browser reads the XML and draws the shape

**Key concepts:**
- SVG = Scalable Vector Graphics (math, not pixels)
- XML = structured code (like HTML but for graphics)
- Inline SVG = code directly in your HTML (full control)
- External SVG = separate file (`<img src="logo.svg">`) (less control)

---

### Demo: Figma's SVG Engine (20 min)

**Setup:** Open Figma, create a simple icon (let's say a star)

**Show 3 exports with different settings:**

#### Export 1: Default settings
- Uncheck "Outline stroke"
- Uncheck "Flatten"
- Export → examine code

```xml
<!-- Figma's default output (simplified for demo) -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <!-- Figma metadata -->
  <g id="star">
    <g id="Vector">
      <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z"
            fill="#1E1E1E"/>
      <path d="..." stroke="#000" stroke-width="2"/>
    </g>
  </g>
</svg>
```

**Point out:**
- IDs from layer names ("star", "Vector")
- Groups (`<g>`) wrap everything
- Stroke is separate element (not outlined)
- Metadata comments

#### Export 2: Outline stroke, Flatten
- Check both settings
- Export → examine code

```xml
<!-- With outline + flatten -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z"
        fill="#1E1E1E"/>
</svg>
```

**Point out:**
- No more nested groups (flattened)
- Stroke is now part of the path (outlined)
- Much cleaner!

#### Export 3: Hand-coded equivalent

```xml
<!-- What we want -->
<svg width="24" height="24" viewBox="0 0 24 24" class="icon icon-star">
  <path d="M12 2 14.5 9.5 22 9.5 16 14.5 18.5 22 12 17 5.5 22 8 14.5 2 9.5 9.5 9.5z"
        fill="var(--color-icon)"/>
</svg>
```

**Point out:**
- Added semantic class
- Removed fill (CSS will handle it)
- Simplified path notation
- Uses design token for color

**Key insights:**
- **Figma's export is verbose by design** — metadata helps Figma re-import
- **Export settings matter** — Outline/Flatten produce cleaner code
- **Layer names become IDs** — name semantically in Figma
- **We clean up the rest** — SVGO + manual

---

### BREAK (10 min)

---

### Live Coding: Figma to DOM (35 min)

Build an icon from Figma to themed SVG step-by-step.

#### Step 1: Design in Figma (5 min)

Create a simple icon together (e.g., a bookmark):
- Use basic shapes (rectangle, rounded corners)
- Name the layer "bookmark-icon"
- Keep it simple (2-3 shapes max)
- Use single color fills

**As you design, narrate:**
- "I'm naming this layer 'bookmark-icon' — this will become our ID"
- "I'm using only one color — CSS will control this later"
- "I'm keeping shapes simple — complex paths are hard to edit"

#### Step 2: Export with optimal settings (3 min)

```
Figma Export Settings:
☑ SVG
☑ Outline stroke
☑ Flatten
☑ Simplify
☐ Include "id" attribute (optional — we'll add classes instead)
```

Export → Open in VS Code

#### Step 3: Examine Figma's output (5 min)

```xml
<!-- What Figma gives you -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V22L12 18L5 22V4Z"
      fill="#1E1E1E"/>
</svg>
```

**Point out:**
- `xmlns` attribute (defines SVG namespace — usually not needed inline)
- `fill="none"` on `<svg>` (Figma default)
- Hardcoded fill color on path
- Long decimal path commands

**Ask:** "What do we need to change to make this theme-responsive?"

#### Step 4: Manual cleanup (10 min)

```xml
<!-- After cleanup -->
<svg class="icon icon-bookmark"
     width="24" height="24"
     viewBox="0 0 24 24"
     aria-label="Bookmark">
  <path d="M5 4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v18l-7-4-7 4V4z" />
</svg>
```

**Changes made:**
1. Removed `fill="none"` from `<svg>` (not needed)
2. Removed `xmlns` (not needed for inline SVG)
3. Removed `fill` from `<path>` (CSS will handle it)
4. Added semantic classes (`icon`, `icon-bookmark`)
5. Added `aria-label` (accessibility)
6. Simplified path data (rounded long decimals)

**CSS to go with it:**

```css
/* In your styles.css */
.icon {
  fill: var(--color-icon, currentColor);
  transition: fill 0.2s ease;
}

.icon:hover {
  fill: var(--color-icon-hover);
}

/* Theme-specific colors */
[data-theme="light"] {
  --color-icon: #333;
  --color-icon-hover: #000;
}

[data-theme="dark"] {
  --color-icon: #f0f0f0;
  --color-icon-hover: #fff;
}
```

#### Step 5: Test (5 min)

```html
<!-- In your HTML -->
<body data-theme="light">
  <svg class="icon icon-bookmark"
       width="24" height="24"
       viewBox="0 0 24 24"
       aria-label="Bookmark">
    <path d="M5 4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v18l-7-4-7 4V4z" />
  </svg>
</body>
```

**Test checklist:**
- [ ] Opens in browser — SVG renders
- [ ] Change `data-theme` to `dark` — color updates
- [ ] Hover over icon — color changes
- [ ] Resize browser — SVG scales smoothly
- [ ] Inspect in DevTools — classes are there, CSS applies

**Troubleshooting live:**
- If color doesn't change → check CSS specificity (path might have inline `fill`)
- If SVG is huge → check viewBox vs width/height
- If hover doesn't work → check selector syntax

#### Step 6: What we just did (7 min recap)

**The workflow:**

```
Figma (design with code in mind)
    ↓ export with optimal settings
Raw SVG (verbose, metadata)
    ↓ manual cleanup
Clean SVG (semantic, ready for CSS)
    ↓ add CSS variables
Themed SVG (responds to design system)
```

**Key concepts to land:**
- **Figma export is the starting point, not the end**
- **Optimization = removing what we don't need**
- **Semantic naming = code you can understand later**
- **Design tokens = one system for HTML and SVG**

---

### Closing: Assignments (15 min)

**Frame the work:**
- "You've just seen how designers turn graphics into code"
- "SVG bridges design and development — it's both visual and structural"
- "This week, you're learning to think in both languages"

**Assign:**

1. **Learn 4-1: Figma's SVG Engine** — Understand how Figma generates code
   - Read Figma docs on SVG export
   - Watch "Understanding Figma's SVG Output" video
   - Complete exercises comparing export settings
   - **Due before Day 2**

2. **Learn 4-2: SVG Fundamentals** — MDN + CSS-Tricks guides
   - Read SVG basics, viewBox, path commands
   - Experiment with SVG Path Visualizer
   - **Due before Day 2**

3. **Practice 4-1: The Anatomy** — Dissect provided SVG, clean it, theme it
   - Starter code provided with comments
   - Apply CSS variables to colors
   - **Due before Week 5**

4. **Reflect 4-1: Visual Notes** — Readings on SVG on the web, accessibility, viewBox
   - Focus questions provided
   - Sketch diagrams, annotate examples
   - **Due before Day 2**

**Introduce Project 2:**

Show the Project 2 brief: **"The Mark"** — Interactive SVG logo + favicon

- Design personal mark in Figma (this week)
- Export, optimize, make interactive (this week + Week 5)
- Implement as favicon (Week 5)
- Keyboard accessible, smooth transitions
- **Due end of Week 5**

**Preview Build 4-1:** Start thinking about your personal mark. Simple shapes. Works small. Represents you.

---

## Day 2: Practice Day — Hands-On with SVG

### Opening: What Did You Learn? (25 min)

#### Technical check-in (5 min)

"How did the tutorials go?"

**Show of hands:**
- Who got through Figma's SVG Engine reading?
- Who tried exporting with different settings?
- Who experimented with the SVG Path Visualizer?
- Who read the CSS-Tricks guide?

"What was one thing that clicked?"
"What's still confusing?"

#### Conceptual discussion (20 min)

**Pull key insights from readings:**

"What's the difference between viewBox and width/height?"
- viewBox = coordinate system (camera frame)
- width/height = display size (how big on screen)
- You can change width without changing viewBox (scales content)

"Why does Figma's export include so much extra code?"
- Metadata helps Figma re-import
- Layer structure preserved for editing
- We optimize for web (different goal than re-editability)

"When should you use inline SVG vs external file?"
- Inline: Need CSS/JS control (icons, interactive graphics)
- External: Simple logos, repeated images, caching

**Draw on whiteboard:**

```
SVG Anatomy:

<svg viewBox="0 0 100 100">  ← Camera (coordinate system)
  <circle cx="50" cy="50" r="40" />  ← Shape (centered)
</svg>

viewBox="0 0 100 100" means:
- Start at (0,0)
- Viewport is 100 units wide, 100 units tall
- Circle at (50,50) is centered

If you change to viewBox="0 0 200 200":
- Camera zooms out (same shapes, more space)
- Circle looks smaller (still at 50,50, but viewport doubled)
```

---

### Backfill: Common Issues (20 min)

Address what typically breaks:

#### Issue 1: CSS Not Applying to SVG

**What goes wrong:**
```css
/* Your CSS */
.icon {
  fill: red;
}
```

```xml
<!-- Your SVG -->
<svg class="icon">
  <path fill="blue" />  <!-- Still blue! Why?? -->
</svg>
```

**Why:** Presentation attributes (`fill="blue"`) have higher specificity than CSS classes.

**How to diagnose:**
- DevTools → Inspect element → Check computed styles
- Look for inline/attribute styles overriding CSS

**How to fix:**
1. Remove the `fill` attribute from SVG
2. OR use `!important` in CSS (not ideal)
3. OR use inline styles in CSS (also not ideal)

**Best practice:** Remove presentation attributes during optimization.

---

#### Issue 2: viewBox Confusion

**What goes wrong:**
- "I changed the viewBox and my SVG disappeared!"
- "viewBox numbers don't match my Figma frame size!"

**How viewBox works:**

```xml
<svg width="100" height="100" viewBox="0 0 50 50">
```

- **width/height:** Display size (100px × 100px on screen)
- **viewBox:** Coordinate system (0,0 to 50,50)
- **Result:** Content is 2× zoomed (viewBox half the size of display)

**Common mistake:**
```xml
<svg viewBox="100 100 200 200">  <!-- Starting at 100,100 -->
```
This moves the "camera" — content in 0,0 to 100,100 range is now off-screen!

**Fix:** viewBox should almost always start with `0 0` unless you're deliberately cropping.

---

#### Issue 3: Figma Layer Names → Gibberish IDs

**What goes wrong:**
```xml
<path id="Vector_42_1_stroke" />
<path id="Rectangle_7_fill" />
```

**Why:** Figma generates IDs from layer names. Default names are generic.

**How to fix (in Figma, before export):**
- Rename layers semantically:
  - "icon-outline"
  - "button-background"
  - "logo-mark"
- Figma will export these as IDs
- In code, you can convert to classes

**Best practice:** Name layers like you'd name CSS classes.

---

#### Reading Console Errors (SVG-specific)

Common SVG errors:

**"Unexpected end tag"**
```xml
<svg>
  <path />
</path>  <!-- Wrong closing tag! -->
</svg>
```
XML requires matching tags. Self-closing elements need `/>`

**"Attribute viewBox invalid value"**
```xml
<svg viewBox="0 0 24 24px">  <!-- Can't have units in viewBox -->
```
viewBox is unitless (coordinate system, not pixels)

---

### Exercise: Icon Audit (20 min)

**Engage 4-1: Icon Audit**

**Setup:**
- Visit 3-5 portfolio or agency sites (suggestions provided)
- Inspect their SVG icon implementations
- Answer guided questions

**Questions to investigate:**

1. **Inline or External?**
   - Right-click icon → Inspect
   - Is the SVG code in the HTML (`<svg>` tags)?
   - Or is it an image (`<img src="icon.svg">`)?
   - Why do you think they chose that approach?

2. **Are icons accessible?**
   - Look for `aria-label` or `<title>` tags
   - Try navigating with keyboard (Tab key) — can you focus icons?
   - What makes an icon accessible?

3. **Do they use CSS variables for theming?**
   - Inspect SVG fill/stroke values
   - Look for `var(--color-something)`
   - Or hardcoded colors like `#333`?

4. **What optimization approach?**
   - View page source (or inspect SVG code)
   - Is it clean (minimal code) or verbose (lots of metadata)?
   - Can you spot Figma export artifacts (comments, generator tags)?

**Discuss (last 5 min):**
- Share findings with the class
- What patterns did you notice?
- What surprised you?

**Connection:** You're reverse-engineering professional practice — seeing how real sites handle SVG.

---

### BREAK (10 min)

---

### Structured Work Time (50 min)

**For students still working on Practice 4-1:**
- Focus on completing The Anatomy lab
- Understand SVG structure, viewBox, paths
- Apply CSS variables to colors
- Get it theme-responsive

**For students who finished Practice 4-1:**
- Start Practice 4-2: The Interaction
- Add hover states, focus styles
- Make SVG keyboard accessible
- Test with screen reader

**For students ready for Build 4-1:**
- Start designing personal mark in Figma
- Keep it simple (3-8 shapes)
- Name layers semantically
- Test export settings

**Circulate and check:**

- **Does viewBox make sense?** → Ask: "What do these four numbers represent?"
- **Are CSS variables applying?** → Check presentation attributes, specificity
- **Is the SVG theme-responsive?** → Toggle `data-theme` in DevTools
- **Are layers named semantically?** (for Build 4-1) → "What will this become in code?"

**Common struggles to watch for:**
- viewBox confusion (draw the coordinate system)
- CSS not applying (check specificity, presentation attributes)
- Figma export bloat (show optimal settings again)
- ARIA syntax errors (check MDN reference)

---

### Closing (15 min)

**Recap the week:**
- "You learned how Figma generates SVG"
- "You cleaned up export code"
- "You made SVG theme-responsive with CSS variables"
- "You started thinking about accessibility"

**What's due before Week 5:**
- Practice 4-1: The Anatomy (complete)
- Practice 4-2: The Interaction (complete)
- Learn 4-3: Optimization Workflow (read)
- Build 4-1: The Mark — Figma design (start)

**Preview Week 5:**
- Week 5 = **"The Reaction"** — Interactive states
- We add CSS transitions for smooth feedback
- Your mark will respond to hover, focus, click
- Keyboard navigation and screen reader testing
- Project 2 due end of Week 5

**The progression:**
- Week 4: Structure + cleanup (what SVG is)
- Week 5: Interaction + feedback (how it responds)

**Remind:**
- Keep your mark design simple
- Name Figma layers semantically
- Test export settings before finalizing
- Accessibility isn't optional — it's integrated

---

## Labs & Assignments

### Practice 4-1: The Anatomy

*10 points · Complete/Incomplete · Due before Week 5*

Explore SVG structure by dissecting, cleaning, and theming a provided icon.

**What You're Learning:**
- XML structure and SVG elements
- viewBox coordinate system
- Path commands and syntax
- Optimization (removing metadata)
- CSS hooks for theming

**Requirements:**
1. Clean the provided SVG (remove metadata, simplify)
2. Add semantic classes for CSS targeting
3. Apply CSS custom properties for theme colors
4. Make it responsive to `data-theme` attribute
5. Test at different sizes (viewBox scaling)

**Complete:**
- [ ] SVG code is clean (no Figma metadata)
- [ ] Semantic classes added
- [ ] CSS variables applied for fill/stroke
- [ ] Theme switching works (light/dark)
- [ ] Scales smoothly at different sizes
- [ ] No console errors

**Stretch:**
- Add a second icon and create variations
- Experiment with different viewBox values
- Create a CSS animation (fade in, rotate)

**Connection to Project:** This is the exact workflow for Build 4-2 (coding your mark).

---

### Practice 4-2: The Interaction

*10 points · Complete/Incomplete · Due before Week 5*

Make SVG respond to user interaction with accessible states.

**What You're Learning:**
- CSS selectors for SVG elements
- Interactive states (hover, focus, active)
- Keyboard accessibility (`tabindex`, focus styles)
- ARIA labels for screen readers

**Requirements:**
1. Add CSS hover state (color change)
2. Add visible keyboard focus styles
3. Make SVG focusable (`tabindex="0"`)
4. Add `aria-label` for screen readers
5. Test with keyboard (Tab, Enter)
6. Test with screen reader (VoiceOver/NVDA)

**Complete:**
- [ ] Hover state works (color changes on mouse over)
- [ ] Focus state is visible (outline or color change on Tab)
- [ ] Keyboard focusable (can Tab to it)
- [ ] ARIA label present and descriptive
- [ ] Screen reader announces icon correctly
- [ ] No accessibility errors in DevTools

**Stretch:**
- Add click interaction (toggle between two states)
- Create multiple hover zones (different paths react differently)
- Add smooth transitions between states

---

### Learn 4-1: Figma's SVG Engine

*10 points · Complete/Incomplete · Due before Day 2*

See description in Learn activities section above.

---

### Learn 4-2: SVG Fundamentals

*10 points · Complete/Incomplete · Due before Day 2*

See description in Learn activities section above.

---

### Learn 4-3: Optimization Workflow

*10 points · Complete/Incomplete · Due before Week 5*

See description in Learn activities section above.

---

### Build 4-1: The Mark (Figma Design)

*15 points · Evaluated · Due before Week 5 Day 1*

Design your personal mark in Figma, structured for clean code export.

**Deliverables:**
1. Figma file with mark design
2. Design rationale (1-2 paragraphs)
3. Test SVG export

**Evaluation Criteria:**
- Simplicity (3-8 shapes, clean paths)
- Theme adaptability (works in light and dark)
- Technical feasibility (exportable, codeable)
- Personal voice (represents you, not generic)
- Code-ready structure (semantic layers, flattened groups, outlined strokes)

---

### Build 4-2: The Refinement (Code)

*15 points · Evaluated · Continues into Week 5*

Export, optimize, and code your mark with theme responsiveness.

**Parts:**
- Part 1: Export & Clean (SVGO + manual)
- Part 2: Apply CSS Variables
- Part 3: Add Accessibility
- Part 4: Test

---

### Engage 4-1: Icon Audit

*10 points · Complete/Incomplete · In-class Day 2*

See Exercise section above.

---

### Reflect 4-1: Visual Notes

*10 points · Complete/Incomplete · Due before Day 2*

Visual notes on assigned readings (SVG on web, accessibility, viewBox).

---

## Resources

### Assigned This Week

**Figma + SVG:**
- Figma: "Preparing Graphics for Export" (official docs)
- "Understanding Figma's SVG Output" (video, ~8 min)

**SVG Fundamentals:**
- CSS-Tricks: "A Practical Guide to SVGs on the Web"
- MDN: SVG Tutorial (Basic Shapes + viewBox sections)

**Accessibility:**
- WebAIM: "Making SVG Accessible"

### Reference

- Figma: SVG Export Settings Documentation
- MDN: SVG Element Reference
- SVG Path Commands Visualizer
- SVGO Configuration Docs

### Video

- Fireship: "SVG in 100 Seconds"
- "Designing Icons for Code in Figma"
- Kevin Powell: "How to Use SVG in HTML"
- Sarah Drasner: "SVG Can Do That?!" (conference talk)

### Tools

- Figma (design tool)
- SVG OMG (SVGO GUI)
- SVG Path Visualizer
- Chrome/Firefox DevTools

### Inspiration

- Figma's icon system
- Stripe brand icons
- GitHub Octicons
- Feather Icons

---

## Alternatives

### If Figma's SVG Engine doesn't land:

**Simplify:**
- Focus on hand-coding simple shapes first
- Show rectangle/circle/path examples
- Build understanding from code → Figma (reverse)

**Reframe:**
- "Figma is a code generator" (like exporting CSS from designs)
- Show side-by-side: Figma layer panel → SVG element tree

### If viewBox confusion persists:

**Alternative explanation:**
- "viewBox is like Figma's frame — it defines the canvas"
- Draw physical camera analogy (lens looking at scene)
- Use interactive demo (SVG Path Visualizer tool)

### If SVGO overwhelms students:

- Skip SVGO initially, do manual cleanup only
- Introduce SVGO in Week 5 after hand-cleaning is familiar
- Use SVG OMG GUI instead of command line

---

## Suggestions

### Portfolio Enhancement

Week 4 work integrates directly:
- Design personal mark (becomes site logo)
- Optimize SVG workflow (all future icons/graphics)
- Theme-responsive graphics (consistent with Week 1-2 system)

### Going Deeper

For students who want more:
- Sara Soueidan's SVG articles (deep technical dives)
- SVG animation with CSS `@keyframes`
- SVG filters and effects
- Exporting complex illustrations

### Connection to Later Weeks

- **Week 5:** Add CSS transitions to SVG states
- **Week 6-8:** GSAP animation (morphing paths, stroke dashoffset)
- **Project 3:** Scroll-triggered SVG reveals

---

## Open Questions

1. **SVGO config:** Should we provide a preset config file, or teach students to use SVG OMG GUI?
2. **Favicon implementation:** Introduce in Week 4 or save for Week 5?
3. **Complexity ceiling:** How complex should marks be? Enforce shape limit?

---

## Accessibility Checkpoint

This week's focus:
- [ ] `aria-label` for icons (semantic meaning)
- [ ] Decorative vs. content SVGs (`aria-hidden="true"` for decorative)
- [ ] Keyboard focus (` tabindex`, visible focus styles)
- [ ] Screen reader testing (VoiceOver/NVDA intro)

---

## See Also

- `week-4/week-4-overview.md` — Week summary
- `week-4/resources/week-4-resources.md` — Full resource list
- `PROJECT-GUIDE.md` — Project 2 rubric
- `desn378-claude-build-v2.md` — Full curriculum context
