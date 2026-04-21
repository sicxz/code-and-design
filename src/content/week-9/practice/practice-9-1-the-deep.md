# Practice: The Deep

**Points:** 10
**Time Estimate:** 45–60 minutes

---

## TL;DR
Add a pinned "showpiece" section to your scrollytelling site. Optional: add parallax to a background element.

---

## Submit
1. Push to GitHub
2. Submit GitHub Pages URL to Canvas

---

## Overview

Pinning is the signature move of scrollytelling. The viewport locks. The scroll bar keeps moving. But instead of scrolling past, the section stays fixed while content changes within it. It's how Apple sells AirPods, how the NYT tells data stories, and how you're going to create the "whoa" moment in your site.

---

## What You're Building

One pinned section in your scrollytelling site — the showpiece. Choose the section that deserves the most attention. This is where your metaphor hits hardest, where the concept clicks, where the reader slows down and pays attention.

---

## Requirements

### Core
- [ ] One section pinned with `pin: true`
- [ ] Timeline animates content while pinned (at least 3 content changes)
- [ ] `scrub` linked to scroll (not trigger-and-play)
- [ ] Scroll range appropriate (not too short, not exhausting)
- [ ] Pin releases cleanly (no layout jump below)

### Stretch Goals
- [ ] Parallax effect on at least one background element
- [ ] Multiple content "steps" within the pin (text swaps or image swaps)
- [ ] Progress indicator showing position within pinned section
- [ ] Horizontal scroll section

---

## Step-by-Step

### Step 1: Choose Your Showpiece Section

Look at your metaphor map. Which chapter is the turning point? The "aha" moment? That's your pinned section. For many students, "The System" (design tokens) or "The Switch" (first moment of control) are strong candidates.

### Step 2: Restructure the HTML

Your pinned section needs internal "steps" — content that swaps or layers:

```html
<section class="section section--pinned" id="the-system">
  <div class="pin-content">
    <div class="pin-step" id="step-1">
      <h2>First, you see the pieces</h2>
      <p>Colors. Fonts. Spacing values. Just raw ingredients...</p>
    </div>
    <div class="pin-step" id="step-2">
      <h2>Then you name them</h2>
      <p>Surface. Text. Accent. Suddenly they have purpose...</p>
    </div>
    <div class="pin-step" id="step-3">
      <h2>Then you see the system</h2>
      <p>Change one value. Everything updates. That's the power...</p>
    </div>
  </div>
</section>
```

### Step 3: Style for Stacking

```css
.section--pinned {
  position: relative;
  min-height: 100vh;
}

.pin-content {
  position: relative;
  width: 100%;
  height: 100vh;
}

.pin-step {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  max-width: 800px;
  text-align: center;
}

.pin-step:first-child {
  opacity: 1; /* first step visible by default */
}
```

### Step 4: Build the Pin Timeline

```javascript
if (!prefersReducedMotion) {
  const pinTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#the-system',
      start: 'top top',
      end: '+=200%',        // pin for 2x viewport height of scroll
      pin: true,
      scrub: 1,
      markers: true         // remove before submission!
    }
  });

  // Step 1 is visible by default
  // Fade out step 1, fade in step 2
  pinTl
    .to('#step-1', { opacity: 0, duration: 0.5 })
    .from('#step-2', { opacity: 0, y: 20, duration: 0.5 })
    .to('#step-2', { opacity: 0, duration: 0.5 }, '+=0.5')
    .from('#step-3', { opacity: 0, y: 20, duration: 0.5 });
}
```

### Step 5: Test the Scroll Range

Scroll through the pinned section. Ask:
- Is there enough scroll to read each step?
- Does the transition between steps feel smooth?
- Does the pin release feel natural (no jarring jump)?

Adjust `end: "+=200%"` — make it larger for more scroll time, smaller for less.

### Step 6: Add Parallax (Stretch)

For a background element that moves at a different speed:

```javascript
gsap.to('.section__bg-image', {
  y: -80,
  ease: 'none',
  scrollTrigger: {
    trigger: '.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});
```

---

## Evaluation

| Criteria | Points |
|----------|--------|
| Pinned section working (pin: true, content animates) | 4 |
| At least 3 content changes within the pin | 3 |
| Scrub linked to scroll | 2 |
| Clean pin release (no layout issues) | 1 |

---

## Troubleshooting

**Pinned section overlaps content below it:**
ScrollTrigger adds `pin-spacing` automatically. If it's not working, check for `overflow: hidden` on parent elements — that breaks pinning.

**Content below the pin jumps when pin releases:**
This is usually a `pin-spacing` issue. Make sure you're not setting the section's height in CSS in a way that conflicts with ScrollTrigger's calculations.

**Steps change too fast / too slow:**
Adjust `end: "+=200%"`. More percentage = more scroll time. Also adjust the `duration` values in your timeline — they're relative to the total scroll range.

**Pin works in Chrome but breaks in Safari:**
Add `anticipatePin: 1` to your ScrollTrigger config. This helps Safari handle the pin transition.

---

## Connection to Course

This is your last practice session. After this, you have the Build assignment to polish and deploy. Week 10 is presentations. Make the pinned section count — it's the moment that makes your site memorable.
