# Engage 4-1: Icon Audit

*5 points · Complete/Incomplete · Due Day 2*

**Time estimate:** 20-25 minutes (in-class)

---

## TL;DR

Inspect how professional sites implement SVG icons. Reverse-engineer their approach and share findings with the class.

**Submit:** 3-5 annotated screenshots showing different SVG implementations

---

## Overview

You're learning the "right way" to implement SVG in this class. But what do real sites do? Are they following best practices? What shortcuts do they take? What can you learn from their approach?

**This activity:**
- Builds your critical eye for code quality
- Shows you real-world patterns (good and bad)
- Prepares you to audit your own work
- Connects theory to practice

---

## The Activity

### Step 1: Pick 3-5 Sites (5 min)

**Choose from:**
- Portfolio sites (designers, developers, agencies)
- Product sites (Stripe, Figma, Linear, Notion)
- Design tools (Adobe, Sketch, Webflow)
- Icon libraries (Feather Icons, Heroicons, Phosphor)

**Mix it up:**
- 1-2 portfolio sites
- 1-2 product sites
- 1 icon library or design tool

---

### Step 2: Inspect Their SVG (15 min)

**For each site:**

1. **Find an icon** (navigation, social links, buttons)
2. **Right-click → Inspect Element**
3. **Answer these questions:**

#### Implementation Method
- [ ] Is it inline SVG (`<svg>` in HTML)?
- [ ] Is it external (`<img src="icon.svg">`)?
- [ ] Is it an SVG sprite (`<use xlink:href="#icon">`)?
- [ ] Is it an icon font (Font Awesome, etc.)?

#### Code Quality
- [ ] Are there semantic class names or generic IDs?
- [ ] Are there inline styles (`fill="#000"`) or CSS classes?
- [ ] Is the SVG optimized (small file) or bloated (metadata)?
- [ ] Are paths readable or complex/minified?

#### Theming
- [ ] Does the icon adapt to light/dark mode?
- [ ] If yes, how? (CSS variables? `currentColor`? Inline styles?)
- [ ] Is color hardcoded or dynamic?

#### Accessibility
- [ ] Is there an `aria-label` on the SVG?
- [ ] Is `role="img"` present?
- [ ] If decorative, is it `aria-hidden="true"`?
- [ ] Can you Tab to it (if interactive)?

---

### Step 3: Take Screenshots (5 min)

**For each site, capture:**
- The DevTools view showing the SVG code
- Annotate with observations (use markup tool or text)

**Example annotations:**
- "Uses inline SVG ✅"
- "No aria-label ❌"
- "CSS variables for theming 🎨"
- "Generic id='Vector' 😬"
- "File size: 2KB (bloated)"

---

## Discussion Questions

**In class, we'll discuss:**

1. **What surprised you?**
   - Did famous sites have messy code?
   - Did anyone use techniques we haven't learned?

2. **What patterns did you notice?**
   - Inline vs. external — which was more common?
   - Did most sites use ARIA labels?
   - How did they handle theming?

3. **What would you do differently?**
   - Based on what you learned this week, what would you improve?
   - What shortcuts make sense? Which don't?

4. **What did you learn?**
   - Any techniques you want to try?
   - Any mistakes you'll avoid?

---

## Complete Criteria

- [ ] Audited 3-5 sites
- [ ] Answered questions for each site
- [ ] Took screenshots of SVG code (DevTools)
- [ ] Annotated screenshots with observations
- [ ] Participated in class discussion
- [ ] Submitted screenshots before end of class

---

## What to Look For

### Good Practices ✅

**Inline SVG for interactive icons:**
```html
<button>
  <svg role="img" aria-label="Menu">
    <path class="icon-path" d="..." />
  </svg>
</button>
```

**CSS variables for theming:**
```css
.icon {
  fill: var(--icon-color);
}

[data-theme="dark"] .icon {
  --icon-color: #fff;
}
```

**`currentColor` for text-like icons:**
```css
.icon {
  fill: currentColor;  /* Inherits parent text color */
}
```

**Semantic naming:**
```html
<svg class="icon-bookmark">
  <path class="icon-shape" d="..." />
</svg>
```

---

### Red Flags 🚩

**Bloated SVG (Figma metadata still present):**
```xml
<!-- Generator: Figma -->
<svg xmlns="http://www.w3.org/2000/svg" ...>
  <g id="Layer-1">
    <g id="Group-42">
      <path id="Vector" d="..." fill="#1E1E1E" />
    </g>
  </g>
</svg>
```

**Hardcoded colors (won't theme):**
```html
<svg>
  <path fill="#000000" />  <!-- Stuck in light mode -->
</svg>
```

**Missing accessibility:**
```html
<button>
  <svg>  <!-- No aria-label, no role -->
    <path d="..." />
  </svg>
</button>
```

**Icon fonts instead of SVG:**
```html
<i class="fa fa-home"></i>  <!-- Outdated approach -->
```

**Why are icon fonts outdated?**
- Accessibility issues (screen readers struggle)
- Loading failures show empty boxes
- No multi-color support
- SVG is more flexible and accessible

---

## Reflection Prompts

**While auditing, think about:**

- **Why did they choose this approach?**
  - Performance? Developer experience? Legacy code?

- **What trade-offs did they make?**
  - Speed vs. accessibility?
  - Simplicity vs. flexibility?

- **Would you do the same?**
  - For a portfolio? For a product?
  - What constraints might they have?

- **What can you steal?**
  - Clever CSS tricks?
  - Smart class naming?
  - Theming strategies?

---

## Example Sites to Audit

**Portfolios:**
- [Brittany Chiang](https://brittanychiang.com/)
- [Lynn Fisher](https://lynnandtonic.com/)
- [Robin Rendle](https://robinrendle.com/)

**Products:**
- [Stripe](https://stripe.com/)
- [Linear](https://linear.app/)
- [Figma](https://figma.com/)

**Icon Libraries:**
- [Feather Icons](https://feathericons.com/)
- [Heroicons](https://heroicons.com/)
- [Phosphor Icons](https://phosphoricons.com/)

**Design Tools:**
- [Webflow](https://webflow.com/)
- [Framer](https://framer.com/)

---

## Submission Format

**Create a document (Google Doc, Figma, or Markdown file) with:**

### Site 1: [Name]

**Screenshot:** [DevTools showing SVG code]

**Observations:**
- Implementation: Inline SVG ✅
- Theming: CSS variables 🎨
- Accessibility: No aria-label ❌
- Code quality: Optimized, ~200 bytes ✅

**What I learned:** They use `currentColor` for icons — inherits text color automatically. Smart!

---

### Site 2: [Name]

[Repeat format]

---

## Connection to Your Work

**This audit helps you:**
- Understand professional standards
- Identify best practices
- Avoid common mistakes
- Develop your critical eye

**When you submit Project 2:**
- Your code will be audited the same way
- Can you explain your choices?
- Does your implementation meet these standards?

---

**Next:** Apply these findings to your own mark in Build 4-2!
