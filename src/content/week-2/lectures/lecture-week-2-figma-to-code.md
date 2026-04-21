# Week 2 Lecture: From Figma to Code

**Duration:** 60–75 minutes
**Format:** Lecture + Live Demo + Lab Start

---

## Today's Agenda

| Time | Section | Focus |
|------|---------|-------|
| 0:00 | Opening | What are design tokens? |
| 0:15 | Figma Variables Demo | Live: Create collections |
| 0:35 | Accessibility Check | Color contrast + colorblind simulation |
| 0:50 | Figma → CSS Connection | Preview the theme toggle |
| 1:00 | Assignments Overview | Weekend work |

---

## Part 1: Design Tokens (15 min)

### Opening Hook

"You've built color palettes in Figma. You've written CSS. But when the client says 'make the blue more purple,' what happens?"

- Change it in Figma
- Change it in code
- Miss one spot
- Inconsistency

**Design tokens solve this.** One source of truth.

### The Token Hierarchy

```
Primitives       →  Semantic         →  Component
--color-blue-500 →  --color-primary  →  --button-bg
--space-4        →  --space-section  →  --card-padding
```

**Primitives:** Raw values (the actual hex code, the actual pixel value)
**Semantic:** What it means (primary action, secondary surface)
**Component:** Where it's used (button background, card padding)

### Why This Matters

| Without Tokens | With Tokens |
|----------------|-------------|
| `#0066CC` in 47 places | `--color-primary` everywhere |
| Find/replace disasters | Change once, updates everywhere |
| "Is this the right blue?" | Defined in one place |

**Reference:** [CSS-Tricks: What Are Design Tokens?](https://css-tricks.com/what-are-design-tokens/)

---

## Part 2: Figma Variables Demo (20 min)

### Live Demo: Create Variable Collections

Open Figma and create these collections live:

**1. color_primitives**
```
colors/
  blue/500: #0066CC
  blue/600: #0052A3
  gray/100: #F5F5F5
  gray/900: #1A1A1A
  white: #FFFFFF
  black: #000000
```

**2. brand_colors (with modes: Light/Dark)**
```
Mode: Light
  surface/primary: {colors/white}
  surface/secondary: {colors/gray/100}
  text/primary: {colors/gray/900}
  action/primary: {colors/blue/500}

Mode: Dark
  surface/primary: {colors/gray/900}
  text/primary: {colors/white}
  action/primary: {colors/blue/400}
```

**3. typography**
```
font/family/body: "Inter"
font/size/base: 16
font/size/lg: 18
font/weight/regular: 400
font/weight/bold: 700
```

**4. spacing**
```
space/xs: 4
space/sm: 8
space/md: 16
space/lg: 24
space/xl: 32
```

### Key Demo Moment: Switching Modes

1. Select a frame
2. Go to **Appearance panel** (flyout widget in right sidebar)
3. Switch from Light to Dark
4. Watch everything update

**Important Note:** Videos may say "Layers panel" — it's actually the **Appearance panel** now.

---

## Part 3: Accessibility Check (15 min)

### Why Check Accessibility?

"Your beautiful brand colors might be invisible to 8% of men (colorblind) or unreadable for anyone in bright sunlight."

### Live Demo: Color Tools

**1. [WhoCanUse](https://www.whocanuse.com/)**
- Enter your brand colors
- See how they appear to different vision types
- Check the "vision score"

**2. [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)**
- Enter foreground/background colors
- See WCAG AA and AAA scores
- Minimum: 4.5:1 for body text, 3:1 for large text

**3. [Toptal Colorfilter](https://www.toptal.com/designers/colorfilter)**
- Enter any website URL
- See how it looks with different types of colorblindness

### Quick Rules

| Ratio | Use For |
|-------|---------|
| 4.5:1 | Body text (WCAG AA) |
| 3:1 | Large text, UI components |
| 7:1 | Body text (WCAG AAA — enhanced) |

"If your contrast fails, your design fails for real people."

---

## Part 4: Figma → CSS Connection (10 min)

### The Translation

| Figma | CSS |
|-------|-----|
| Variable collection | `:root { }` block |
| `colors/blue/500` | `--color-blue-500: #0066CC;` |
| `surface/primary` | `--color-surface-primary: var(--color-white);` |
| Light/Dark modes | `[data-theme="dark"] { }` overrides |

### Preview: The Theme Toggle

```javascript
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('dark-theme');
};
```

"The JavaScript is simple. The hard part is setting up your tokens correctly in Figma first."

**Reference:** [Digital Ocean: CSS Theming with Custom Properties](https://www.digitalocean.com/community/tutorials/css-theming-custom-properties)

---

## Part 5: Assignments Overview (5 min)

### This Weekend

| Assignment | What | Due |
|------------|------|-----|
| **learn-2-1** | Watch Figma Variables videos, create your file | Tuesday |
| **learn-2-2** | Codedex Conditionals (exercises 11-17) | Tuesday |
| **learn-2-3** | Story Teller Tutorial (optional/extra credit) | — |

### Tuesday In-Class

- practice-2-1: The Switch (basic theme toggle)
- practice-2-2: The Memory (localStorage)

### End of Week

- build-2-1: Apply to portfolio
- build-2-2: System preferences

### The Flow

```
Figma Variables (this weekend)
       ↓
Codedex Conditionals (if/else)
       ↓
Practice Labs (Tuesday in-class)
       ↓
Apply to Portfolio (end of week)
```

---

## Resources to Share

### Required Reading
- [CSS-Tricks: What Are Design Tokens?](https://css-tricks.com/what-are-design-tokens/)
- [Digital Ocean: CSS Theming](https://www.digitalocean.com/community/tutorials/css-theming-custom-properties)

### Tools (Bookmark These)
- [WhoCanUse](https://www.whocanuse.com/) — Color accessibility
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Figma Color Contrast Checker](https://www.figma.com/color-contrast-checker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- [Toptal Colorfilter](https://www.toptal.com/designers/colorfilter) — Test websites

### Figma Reference
- [Figma: Guide to Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Variables Playground](https://www.figma.com/community/file/1253443272911187215)

---

## Instructor Notes

- The Figma demo is the core — make sure it works beforehand
- Emphasize the Appearance panel (not Layers) for mode switching
- WhoCanUse demo is impactful — use your own brand colors
- Students may ask about JavaScript — keep it brief, that's Tuesday
- If running short: skip contrast checker deep-dive
- If running long: cut the Figma → CSS code preview
