# Build: The Foundation

**Points:** 30
**Time Estimate:** 2–3 hours
**Prerequisite:** Complete [Learn 2-1: Figma Variables](../learn/learn-2-1-figma-variables/learn-2-1-figma-variables.md) first

---

## TL;DR
Apply Figma variables to your portfolio project with Light and Dark modes.

---

## Submit
Share your Figma portfolio file link with viewing access.

---

## Overview

Take the Figma Variables skills from Learn 2-1 and apply them to **your actual portfolio project**. You'll create a complete variable system with primitives, semantic names, aliases, and theme modes.

**What you're building:**
- Variables applied to your portfolio Figma file
- Primitives → Semantic names → Aliases (the full token hierarchy)
- **2 Modes:** Light and Dark
- Foundation for the CSS implementation later this week

---

## Deliverables

Your portfolio Figma file with:

1. **Variable Collections** — Primitives, semantic names, and aliases
2. **2 Modes** — Light and Dark
3. **Applied Variables** — All colors, typography, and spacing using variables (no hardcoded values)
4. **Components** — At least buttons and one card/section using your variables

---

## Part 1: Create Your Style Guide

### What to Include

**Colors (Required)**
- Primary brand color
- Secondary/accent color
- Background colors (surface, card)
- Text colors (primary, secondary, muted)
- Border/divider color
- Error/success states (optional)

**Typography (Required)**
- Heading styles (H1, H2, H3 minimum)
- Body text
- Caption/small text
- Font family, weight, size, line-height

**Spacing (Required)**
- Base unit (e.g., 8px)
- Scale (xs, sm, md, lg, xl)
- Consistent padding/margin values

**Components (Required)**
- Atoms: Buttons (primary, secondary), Input fields, Labels
- Molecule: At least one (card, form group, navigation item)

---

## Part 2: Create Figma Variables

### Variable Collections

Create these collections in Figma:

**1. Primitives Collection**
Raw values that don't change between modes:
```
colors/
  blue/500: #0066CC
  blue/600: #0052A3
  gray/100: #F5F5F5
  gray/900: #1A1A1A
  white: #FFFFFF
  black: #000000

spacing/
  base: 8
  xs: 4
  sm: 8
  md: 16
  lg: 24
  xl: 32
```

**2. Semantic Collection (with 2 Modes)**
Meaningful names that reference primitives:
```
Mode: Light
  surface/primary: {colors/white}
  surface/secondary: {colors/gray/100}
  text/primary: {colors/gray/900}
  text/secondary: {colors/gray/600}
  action/primary: {colors/blue/500}

Mode: Dark
  surface/primary: {colors/gray/900}
  surface/secondary: {colors/gray/800}
  text/primary: {colors/white}
  text/secondary: {colors/gray/300}
  action/primary: {colors/blue/400}
```

### Naming Convention

Use forward slashes for hierarchy:
- `colors/blue/500` (primitive)
- `surface/primary` (semantic)
- `text/primary` (semantic)
- `spacing/md` (primitive)

This naming translates directly to CSS:
```css
--color-blue-500: #0066CC;
--surface-primary: var(--color-white);
--text-primary: var(--color-gray-900);
```

---

## Part 3: Apply Variables to Components

### Atoms (Build These)

**Button — Primary**
- Background: `action/primary`
- Text: `surface/primary`
- Padding: `spacing/sm` `spacing/md`
- Border radius: `4` or `8`

**Button — Secondary**
- Background: `surface/secondary`
- Text: `text/primary`
- Border: 1px `border/primary`

**Input Field**
- Background: `surface/primary`
- Border: 1px `border/primary`
- Text: `text/primary`
- Placeholder: `text/secondary`

### Molecule (Build at Least One)

**Card**
- Background: `surface/primary`
- Border: 1px `border/primary`
- Shadow: subtle
- Contains: Image, heading, body text, button

**Or: Form Group**
- Label + Input + Helper text
- Proper spacing between elements

---

## Part 4: Test Both Modes

1. Select your portfolio frame
2. In the right panel, find the **Appearance** panel (flyout widget)
3. Switch between **Light** and **Dark** modes
4. Everything should update automatically

**Test each mode:**
- [ ] Light mode: Clean, readable, your default brand colors
- [ ] Dark mode: Inverted colors, still readable, accent colors adjusted

**If it doesn't update:**
- Check that components use semantic variables (not primitives)
- Verify variables are applied, not hardcoded colors
- Make sure you're selecting the FRAME, not individual elements

---

## Resources

### Figma Variables
- [Figma: Guide to Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Variables Playground](https://www.figma.com/community/file/1253443272911187215)

### Design Systems
- [Figma Design Systems 101](https://www.figma.com/blog/design-systems-101-what-is-a-design-system)
- [NN Group Design Systems 101](https://www.nngroup.com/articles/design-systems-101/)

### Token Naming
- Nathan Curtis: Naming Tokens in Design Systems
- [Penpot Intro to Design Tokens](https://penpot.app/blog/intro-to-design-tokens/)

### Tools
- [OpenProps](https://open-props.style/) — Reference for token values
- [Color Blind Simulator](https://chromewebstore.google.com/detail/color-blind-low-vision-si/lgflijofdempkdlaknbfmacfidjjhjbb) — Test accessibility

---

## Evaluation Criteria

| Criteria | Points |
|----------|--------|
| **Variable Structure** | |
| Primitives collection (colors, spacing) | 6 |
| Semantic names referencing primitives | 6 |
| Variables follow naming convention | 3 |
| **2 Modes** | |
| Light mode works correctly | 5 |
| Dark mode works correctly | 5 |
| **Applied to Portfolio** | |
| All colors use variables (no hardcoded hex) | 3 |
| Typography and spacing use variables | 2 |
| **Total** | **30** |

---

## Connection to CSS

This Figma work becomes your CSS blueprint:

| Figma | CSS |
|-------|-----|
| Variable collection | `:root { }` block |
| `colors/blue/500` | `--color-blue-500: #0066CC;` |
| `surface/primary` | `--surface-primary: var(--color-white);` |
| Light/Dark modes | `[data-theme="dark"]` selector |

The variable names you create now become your CSS variable names in [Build 2-1: The Inheritance](build-2-1-the-inheritance.md).
