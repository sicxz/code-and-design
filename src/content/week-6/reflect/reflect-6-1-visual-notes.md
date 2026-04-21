# Reflect: Visual Notes — Motion Map

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 20–30 minutes

---

## TL;DR

Build a motion map in Milanote. Drop in screenshots of your Figma sections, draw arrows showing animation direction, add reference examples from real sites, and label every planned animation with the GSAP method you'll use.

---

## Submit

1. Share your Milanote board link on Canvas (view access)

---

## What You're Building

A **Milanote board** that maps out every animation in your scrollytelling site. This is part mood board, part technical plan — you're combining visual references with specific GSAP decisions.

---

## How to Set It Up

1. Create a new Milanote board: `Motion Map — [Your Name]`
2. **Screenshot each Figma section** and drag them onto the board in scroll order (top to bottom or left to right)
3. Between and on top of each screenshot, add your annotations using Milanote's tools:
   - **Arrows** → show animation direction (fade up, slide left, parallax movement)
   - **Notes/cards** → label the GSAP method and animation type
   - **Images** → drop in reference examples from real sites that do what you want
   - **Color coding** → use different colors for different animation types
   - **Drawing** → sketch layer diagrams, motion paths, or timing notes

---

## What to Annotate

### 1. Where Will Animation Happen?

For each section, mark every element that will animate. Use **arrows** to show direction of movement. Be specific:
- "This heading fades in from below" (arrow pointing up)
- "This background image moves slower than the text" (small arrow vs. large arrow)
- "This SVG draws itself on scroll" (path trace)

### 2. What Kind of Animation?

Label each with the type (use colored notes or tags):
- **"parallax"** — layers moving at different speeds
- **"scroll-trigger entrance"** — element fades/slides in when scrolled to
- **"scrubbed"** — animation tied directly to scroll position
- **"timeline"** — multi-element coordinated sequence
- **"draw-on"** — SVG stroke animation (DrawSVGPlugin)

### 3. What GSAP Method?

Next to each animation, note what you'll use:
- `gsap.to()` — animate to new values
- `gsap.from()` — animate from values (element "arrives")
- `gsap.fromTo()` — control both start and end
- `gsap.timeline()` — sequence multiple animations
- `ScrollTrigger` — driven by or triggered by scroll
- `DrawSVGPlugin` — SVG stroke animation

### 4. Reference Examples

For each animation type you're planning, **find and add a reference** — a screenshot, GIF, or link from a real site that does something similar to what you want. Drop it next to the section where you'll use it.

Examples of where to find references:
- Sites from Engage 6-1 (Apple AirPods Pro, The Pudding, etc.)
- [GSAP ScrollTrigger Demos](https://gsap.com/scroll/)
- [Awwwards](https://www.awwwards.com/) — search "scroll animation"
- The class Milanote inspiration board

### 5. Where Is Parallax?

Mark at least one section with parallax layers. Draw or diagram the layers:
- **Background** (moves slowest)
- **Midground** (moves at medium speed)
- **Foreground** (moves fastest or stays still)

Use arrows to show relative speed. Add a reference example of parallax you want to emulate.

### 6. Where Is Your Showpiece?

Mark the one section that will be your most ambitious scroll moment. Add a note explaining:
- What happens in this section?
- Why is this the "wow" moment?
- What reference site inspired this?

---

## Why This Matters

You've learned the tools: GSAP tweens (Week 5), ScrollTrigger and parallax (Week 6). You've designed the site (Build 6-1). This motion map is the bridge between design and code. Every arrow becomes a line of JavaScript. Every reference becomes a target to aim for.

Animation without intention is decoration. Animation with intention is design.

---

## Evaluation

| Criteria | Points |
|----------|--------|
| All section designs present with animation annotations | 3 |
| At least 5 animation points marked with type and GSAP method | 3 |
| Reference examples included for planned animations | 2 |
| Parallax layers and showpiece section identified | 2 |
