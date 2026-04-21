# Learn 4-2: SVG Fundamentals

*10 points · Complete/Incomplete · Due before Day 2*

**Time estimate:** 40-50 minutes

---

## TL;DR

Learn SVG syntax, viewBox, path commands, and coordinate system from MDN and CSS-Tricks.

**Submit:**
- CodePen link with 3 SVG experiments
- Screenshot showing viewBox exploration

---

## Overview

SVG is a language for describing graphics with code. Like HTML, it has elements and attributes. Unlike HTML, it uses coordinates and math to define shapes.

**By the end, you'll know:**
- SVG syntax and structure
- How viewBox works (coordinate system)
- Basic shapes (circle, rect, path)
- Path commands (M, L, C, Z)
- How to hand-code simple SVG

---

## What You're Learning

**Concepts:**
- XML syntax for SVG
- viewBox coordinate system
- SVG elements and attributes
- Path data commands
- Fills, strokes, and styling

**Skills:**
- Reading SVG code
- Hand-coding SVG
- Modifying path data
- Using SVG interactive tools

---

## The Reading

### Part 1: MDN SVG Tutorial

**Read:** [MDN: SVG Tutorial - Getting Started](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started)

*Time: ~10 min*

**Then read:** [MDN: SVG Tutorial - Basic Shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

*Time: ~8 min*

**Focus on:**
- SVG element structure
- viewBox and viewport
- Basic shapes: `<rect>`, `<circle>`, `<ellipse>`, `<line>`, `<polyline>`, `<polygon>`

---

### Part 2: CSS-Tricks Guide

**Read:** [CSS-Tricks: A Complete Guide to SVG - Elements](https://css-tricks.com/lodge/svg/09-svg-data-uri/)

*Time: ~10 min*

**Navigate to sections:**
- SVG Elements Overview
- Paths section
- viewBox explanation

**What to focus on:**
- Common elements you'll use
- When to use `<path>` vs. basic shapes
- Real-world examples

---

### Part 3: Interactive Tool

**Use:** [SVG Path Visualizer](https://svg-path-visualizer.netlify.app/)

*Time: ~10 min*

**Experiment:**
- Type path commands (M, L, C, Z)
- Watch the visualization update live
- Copy example paths, modify them
- See what each command does visually

---

## SVG Syntax

### Basic Structure

```xml
<svg width="100" height="100" viewBox="0 0 100 100">
  <!-- Shapes go here -->
</svg>
```

- `<svg>`: Container element
- `width`, `height`: Display size (pixels)
- `viewBox`: Coordinate system (not pixels!)

---

### viewBox Deep Dive

```
viewBox="min-x min-y width height"
```

**Example:**
```xml
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" />
</svg>
```

- Starts at (0, 0)
- Extends to (100, 100)
- Circle is centered at (50, 50)
- Radius is 40 units

**Change display size:**
```xml
<svg width="200" height="200" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" />
</svg>
```

- Display: 200×200 pixels
- Coordinate system: Still 0-100
- Circle: Scales 2× (looks bigger, same coordinates)

---

## Basic Shapes

### Rectangle

```xml
<rect x="10" y="10" width="80" height="60" fill="blue" />
```

- `x, y`: Top-left corner
- `width, height`: Dimensions
- `rx, ry`: Optional corner radius

---

### Circle

```xml
<circle cx="50" cy="50" r="30" fill="red" />
```

- `cx, cy`: Center point
- `r`: Radius

---

### Line

```xml
<line x1="0" y1="0" x2="100" y2="100" stroke="black" stroke-width="2" />
```

- `x1, y1`: Start point
- `x2, y2`: End point
- Must have `stroke` (lines have no fill)

---

### Path (Most Powerful)

```xml
<path d="M10 10 L90 90 L10 90 Z" fill="green" />
```

- `d`: Path data (drawing commands)
- Can draw anything

---

## Path Commands

### Move To (M)

```
M x y
```

Moves the "pen" to a point (doesn't draw).

```xml
<path d="M50 50" />  <!-- Nothing visible, just moved -->
```

---

### Line To (L)

```
L x y
```

Draws a line from current position to (x, y).

```xml
<path d="M10 10 L90 90" stroke="black" />  <!-- Diagonal line -->
```

---

### Horizontal/Vertical Lines

```
H x   <!-- Horizontal line to x -->
V y   <!-- Vertical line to y -->
```

```xml
<path d="M10 50 H90" stroke="black" />  <!-- Horizontal -->
<path d="M50 10 V90" stroke="black" />  <!-- Vertical -->
```

---

### Close Path (Z)

```
Z
```

Draws line back to start point.

```xml
<path d="M10 10 L90 10 L50 90 Z" />  <!-- Triangle -->
```

---

### Curves (Advanced)

**Cubic Bézier (C):**
```
C x1 y1, x2 y2, x y
```

- `x1, y1`: First control point
- `x2, y2`: Second control point
- `x, y`: End point

**This is what Figma generates for curves.**

---

## Exercises

### Exercise 1: viewBox Exploration (15 min)

Create a CodePen with this SVG:

```xml
<svg width="200" height="200" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
```

**Experiment:**
1. Change viewBox to `"0 0 200 200"` — What happens?
2. Change viewBox to `"0 0 50 50"` — What happens?
3. Change viewBox to `"25 25 50 50"` — What happens?
4. Reset to `"0 0 100 100"`, change `width` to `400` — What happens?

**Screenshot:** Show all 4 experiments side-by-side.

**Takeaway:** viewBox = camera, width/height = print size.

---

### Exercise 2: Hand-Code a Simple Icon (15 min)

**Create a bookmark icon by hand** (no Figma):

```xml
<svg width="48" height="48" viewBox="0 0 24 24">
  <!-- Your code here -->
  <!-- HINT: Use <path> with M, L, Z commands -->
  <!-- Shape: Rectangle with triangular bottom -->
</svg>
```

**Steps:**
1. Start at top-left: `M5 2`
2. Line to top-right: `L19 2`
3. Line down right side: `L19 22`
4. Line to bottom-center (triangle point): `L12 18`
5. Line to bottom-left: `L5 22`
6. Close path: `Z`

**Compare to Figma export** — Simpler or more complex?

---

### Exercise 3: Modify a Path (10 min)

Take this heart icon:

```xml
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
```

**Change it:**
- Increase numbers by 10% → bigger heart
- Change `M12 21.35` to `M12 15` → shorter heart
- Remove some commands → broken heart?

**Takeaway:** Path data is fragile. Small changes = big visual impact.

---

## Complete Criteria

- [ ] Read MDN: Getting Started & Basic Shapes
- [ ] Read CSS-Tricks: SVG Elements guide
- [ ] Used SVG Path Visualizer tool
- [ ] Completed Exercise 1 (viewBox exploration)
- [ ] Completed Exercise 2 (hand-code icon)
- [ ] Completed Exercise 3 (modify path)
- [ ] CodePen submitted with all 3 exercises
- [ ] Screenshot of viewBox experiments

---

## Common Issues

**"My SVG doesn't show up"**
- Check if `viewBox` coordinates match your shape coordinates
- Check if shape is inside viewBox bounds
- Check if `fill` or `stroke` is set

**"viewBox is confusing"**
- Think: viewBox = what the camera sees
- width/height = how big the photo prints
- They're independent!

**"Path commands don't make sense"**
- Start with M (move), then L (line), end with Z (close)
- Use SVG Path Visualizer to see commands draw live
- Compare to Figma exports (same commands, more complex)

---

## Resources

- [MDN: SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [CSS-Tricks: Complete Guide to SVG](https://css-tricks.com/lodge/svg/)
- [SVG Path Visualizer](https://svg-path-visualizer.netlify.app/)
- [MDN: `<path>` Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
- [MDN: Path Commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands)

---

**Next:** Learn 4-3 (Optimization Workflow) to clean up exported SVG code.
