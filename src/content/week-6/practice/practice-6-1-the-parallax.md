# Practice: The Parallax

**Points:** 10
**Time Estimate:** 30–45 minutes (in-class, Day 2)

---

## TL;DR

Build a 3-layer parallax scene in CodePen using GSAP ScrollTrigger. Background, midground, and foreground move at different speeds as you scroll — creating the illusion of depth.

---

## Submit

CodePen URL to Canvas.

---

## Overview

Parallax creates the illusion of depth by moving layers at different speeds. You've seen this in games, films, and the websites you analyzed in Engage 6-1. Now you build it.

This is a controlled exercise — a single scene, not your full project. The techniques transfer directly to your scrollytelling site.

---

## What You're Building

A scrollable page with a "scene" section containing three layers:

- **Background** — moves slowest (barely moves)
- **Midground** — moves at medium speed
- **Foreground** — moves fastest or stays completely still

As the user scrolls, the layers separate, creating depth.

---

## What You're Learning

- How to register and configure GSAP ScrollTrigger
- How `scrub: true` ties animation to scroll position
- How different `y` values on the same scroll range create parallax depth
- How to use `markers: true` for visual debugging
- How `ease: "none"` creates smooth, linear scroll-driven movement

---

## Requirements

### Core
- [ ] GSAP + ScrollTrigger loaded via CDN
- [ ] ScrollTrigger registered: `gsap.registerPlugin(ScrollTrigger)`
- [ ] 3 visual layers with different content (background, midground, foreground)
- [ ] Each layer animated with `gsap.to()` + `scrollTrigger` config
- [ ] Each layer moves a different distance (different `y` values)
- [ ] `markers: true` turned on for debugging
- [ ] Page is scrollable (enough content/height above and below the scene)
- [ ] `ease: "none"` on all parallax tweens

### Stretch Goals
- [ ] A 4th decorative layer (clouds, particles, shapes, or SVG illustrations)
- [ ] Opacity change on one layer (fades as it scrolls)
- [ ] Scale change on foreground (grows slightly as you scroll)
- [ ] Color or filter shift on background layer
- [ ] Add a second scene with different parallax speeds

---

## Starter Code

### HTML
```html
<!-- Spacer: gives room to scroll before the scene -->
<section class="spacer">
  <h1>Scroll Down</h1>
</section>

<!-- The parallax scene -->
<section class="parallax-scene">
  <div class="layer layer--bg">
    <div class="bg-shape"></div>
  </div>
  <div class="layer layer--mid">
    <p class="mid-text">midground element</p>
  </div>
  <div class="layer layer--fg">
    <h2 class="fg-heading">Foreground</h2>
  </div>
</section>

<!-- Spacer: gives room to scroll after the scene -->
<section class="spacer">
  <p>Keep scrolling...</p>
</section>
```

### CSS
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  color: #f0f0f0;
  background: #1a1a2e;
}

.spacer {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* The scene container */
.parallax-scene {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

/* All layers fill the scene */
.layer {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Background layer */
.layer--bg {
  z-index: 1;
}

.bg-shape {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: #16213e;
  border: 2px solid #0f3460;
}

/* Midground layer */
.layer--mid {
  z-index: 2;
}

.mid-text {
  font-size: 1.5rem;
  color: #e94560;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* Foreground layer */
.layer--fg {
  z-index: 3;
}

.fg-heading {
  font-size: 4rem;
  font-weight: 900;
  color: #f0f0f0;
}
```

### JavaScript
```js
gsap.registerPlugin(ScrollTrigger);

// Layer 1: Background — moves the LEAST (slow = far away)
gsap.to(".layer--bg", {
  y: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-scene",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true
  }
});

// YOUR TURN: Add Layer 2 (midground)
// Hint: use a larger y value than the background
// gsap.to(".layer--mid", { ... })

// YOUR TURN: Add Layer 3 (foreground)
// Hint: use the largest y value, or try y: 0 (stationary)
// gsap.to(".layer--fg", { ... })
```

---

## Step-by-Step Guide

### 1. Set Up the CodePen
Add these external scripts in Settings → JS (in this order):
- GSAP core: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
- ScrollTrigger: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`

### 2. Paste the Starter Code
Copy the HTML, CSS, and JS into your CodePen. You should see a page with three sections and markers visible.

### 3. Scroll and Observe
The background layer should move slightly as you scroll. The markers show where ScrollTrigger starts (`start`) and ends (`end`).

### 4. Add the Midground Layer
Write a `gsap.to()` for `.layer--mid` with a larger `y` value. Try `y: -150`. Use the same `scrollTrigger` config (same trigger, start, end, scrub).

### 5. Add the Foreground Layer
Write a `gsap.to()` for `.layer--fg`. Try `y: -300` for fast movement, or `y: 0` to keep it stationary (stationary foreground + moving background also creates depth).

### 6. Feel the Depth
Scroll up and down. Do the layers feel like they're at different distances? If not, increase the difference between `y` values.

### 7. Experiment
- Try positive `y` values — what happens?
- Try different values: `-30`, `-100`, `-250`
- What happens if background and foreground have the same `y`?

### 8. Customize
Replace the placeholder content with something that fits your style:
- Background: a gradient, a large shape, or an image
- Midground: an SVG, a decorative element, or text
- Foreground: your heading or hero content

### 9. Clean Up
Once satisfied, remove `markers: true` from all three tweens. Your parallax scene should feel smooth and natural.

---

## The Key Insight

All three animations share the same `trigger` and scroll range. The depth illusion comes entirely from different `y` distances:

| Layer | `y` Value | Speed | Perception |
|-------|-----------|-------|------------|
| Background | `-50` | Barely moves | Far away |
| Midground | `-150` | Moves more | Middle distance |
| Foreground | `-300` or `0` | Moves most (or stays still) | Close to you |

The minus sign means the element moves **up** as you scroll **down**. Experiment with positive values too.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Nothing animates | Did you register the plugin? `gsap.registerPlugin(ScrollTrigger)` |
| ScrollTrigger doesn't work | Is the page scrollable? You need spacer sections above and below. |
| Markers don't appear | Is `markers: true` inside the `scrollTrigger: { }` object? Not outside it. |
| No depth feeling | The `y` values are too similar. Try `-50`, `-150`, `-300` — big differences. |
| Layers not visible | Check `z-index` values. Higher z-index = closer to viewer. |
| Animation is jerky | Make sure `ease: "none"` is set. Non-linear easing looks weird on scrubbed parallax. |
| Animation plays on load, not scroll | The `scrollTrigger` config must be INSIDE the `gsap.to()` options, not separate. |

---

## Complete Criteria

Your parallax CodePen is complete when:
- 3 layers move at visibly different speeds on scroll
- ScrollTrigger is properly configured with `scrub: true`
- The depth illusion is perceptible (you can *feel* the layers)
- Code is clean and each tween is commented with what layer it controls

---

## Evaluation

| Criteria | Points |
|----------|--------|
| 3 layers with different scroll speeds | 4 |
| ScrollTrigger configured correctly (trigger, start, end, scrub) | 3 |
| Visual depth effect is perceptible | 2 |
| Code is clean and commented | 1 |

---

## Connection to Course

This parallax technique goes directly into your scrollytelling site. Your hero section, chapter transitions, or background illustrations can all use this same pattern. In Week 7, you'll apply this to your actual project HTML — the CodePen is your sandbox for learning the technique first.

---

## Resources

- [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP Ease Visualizer](https://gsap.com/docs/v3/Eases/)
- [ScrollTrigger Demos](https://gsap.com/scroll/)
