# Practice: The Scroll

**Points:** 10
**Time Estimate:** 45–60 minutes

---

## TL;DR
Convert your GSAP animations to scroll-triggered. Use markers to debug. Add scrub to one section.

---

## Submit
1. Push to GitHub
2. Submit GitHub Pages URL to Canvas

---

## Overview

Last week, all your animations fired on page load. Sections below the fold animated before you even scrolled to them. That's the problem ScrollTrigger solves.

This practice session converts your existing GSAP animations into scroll-triggered ones. When you scroll to a section, its animation plays. The page comes alive as you move through it.

---

## What You're Building

Your existing scrollytelling site, but now each section's animation is triggered by scroll position.

---

## Requirements

### Core
- [ ] ScrollTrigger loaded and registered
- [ ] At least 3 sections have scroll-triggered animations
- [ ] `trigger` element set correctly for each
- [ ] `start` values adjusted (not all default)
- [ ] `markers: true` used during development
- [ ] `prefers-reduced-motion` still wraps everything

### Stretch Goals
- [ ] `scrub` on at least 1 section
- [ ] `toggleActions` configured for at least 1 animation
- [ ] `gsap.utils.toArray()` used to batch-animate similar sections

---

## Step-by-Step

### Step 1: Load ScrollTrigger

Add the ScrollTrigger plugin to your HTML (after GSAP, before your script):

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
<script src="scripts/main.js"></script>
```

Register it at the top of your `main.js`:

```javascript
gsap.registerPlugin(ScrollTrigger);
```

### Step 2: Convert One Section

Take your simplest section animation and add ScrollTrigger. Before:

```javascript
gsap.from('#variables h2', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out'
});
```

After:

```javascript
gsap.from('#variables h2', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#variables',
    start: 'top 80%',
    markers: true
  }
});
```

Scroll to that section. The animation should play when the section enters the viewport. Check the markers to confirm the trigger position.

### Step 3: Understand Start/End

`start` and `end` use the format: `"[trigger position] [viewport position]"`.

| Value | Meaning |
|-------|---------|
| `"top 80%"` | When trigger's TOP hits 80% from viewport TOP (common for section reveals) |
| `"top center"` | When trigger's TOP hits viewport CENTER |
| `"top top"` | When trigger's TOP hits viewport TOP (used for pinning) |
| `"center center"` | When trigger's CENTER hits viewport CENTER |

Adjust `start` for each section until it feels right. Sections with more content might trigger earlier (`top 85%`). Short sections might trigger later (`top 60%`).

### Step 4: Convert a Timeline

For sections with timelines:

```javascript
const switchTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#the-switch',
    start: 'top 75%',
    markers: true
  }
});

switchTl
  .from('#the-switch h2', { opacity: 0, y: 30, duration: 0.6 })
  .from('#the-switch p', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2');
```

### Step 5: Try Scrub (Stretch)

Pick one section and add `scrub`:

```javascript
gsap.from('#the-system .visual', {
  scale: 0.5,
  opacity: 0,
  ease: 'none',
  scrollTrigger: {
    trigger: '#the-system',
    start: 'top 80%',
    end: 'center center',
    scrub: 1,
    markers: true
  }
});
```

Scroll slowly through that section. The animation should progress as you scroll — and reverse if you scroll back up. `scrub: 1` adds 1 second of smoothing so it doesn't feel janky.

---

## Evaluation

| Criteria | Points |
|----------|--------|
| ScrollTrigger loaded and registered | 2 |
| 3+ sections scroll-triggered | 3 |
| Start values calibrated (not all default) | 2 |
| Markers present for debugging | 1 |
| Reduced motion check in place | 2 |

---

## Troubleshooting

**ScrollTrigger not defined:**
Plugin not loaded. Check your `<script>` tag order: GSAP → ScrollTrigger → your script. Check the URL for typos.

**Animation plays immediately, ignoring scroll:**
You forgot to add the `scrollTrigger` object to your tween/timeline. The GSAP animation still works — it just doesn't know about scrolling.

**Markers don't appear:**
Make sure `markers: true` is inside the `scrollTrigger` object, not in the tween properties. Also check: are you scrolled past the trigger? Markers might be above or below your current view.

**Section animates too early:**
Change `start` to trigger later: `"top 60%"` instead of `"top 80%"`. Use markers to visualize.

**Scrub feels laggy:**
Increase the scrub smoothing value: `scrub: 2` or `scrub: 0.5`. Or simplify the animation — fewer properties = smoother performance.

---

## Connection to Course

ScrollTrigger is the core technology of your final project. This week gets the fundamentals working. Next week (Week 9), you'll add pinning — locking a section in place while content animates within it. That's the "showpiece" technique.
