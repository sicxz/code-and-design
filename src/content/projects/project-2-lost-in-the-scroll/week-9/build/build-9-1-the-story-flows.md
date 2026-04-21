# Build: The Story Flows

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 60–90 minutes
**Prerequisite:** Practice 8-1: The Scroll

---

## TL;DR
All sections scroll-triggered. At least one uses scrub. Pacing tested. Markers removed.

---

## Submit
1. Push to GitHub
2. Submit GitHub Pages URL to Canvas

---

## Overview

Your scrollytelling site is becoming real. This week's build turns it from "a page with animations" into "a story that unfolds as you scroll." The difference is pacing, trigger placement, and the right mix of trigger-and-play vs. scrubbed animations.

---

## What You're Doing

### Step 1: Convert ALL Remaining Sections

Every section of your site should now have scroll-triggered animations. Use the pattern from Practice 8-1.

**Efficient approach:** If most sections animate the same way (fade-in headings and paragraphs), batch them:

```javascript
if (!prefersReducedMotion) {
  // Hero — plays on load (no ScrollTrigger)
  const heroTl = gsap.timeline();
  heroTl
    .from('.hero__title', { opacity: 0, y: 40, duration: 0.8, ease: 'power2.out' })
    .from('.hero__subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');

  // All chapter sections — scroll-triggered
  gsap.utils.toArray('.section--chapter').forEach(section => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      }
    });

    tl.from(section.querySelector('h2'), {
      opacity: 0, y: 30, duration: 0.6, ease: 'power2.out'
    });

    tl.from(section.querySelectorAll('p'), {
      opacity: 0, y: 20, duration: 0.5, stagger: 0.15
    }, '-=0.2');
  });
}
```

Then customize specific sections with unique animations.

### Step 2: Add Scrub to Your Best Section

Pick the section that deserves the most attention — the one where you want the reader to slow down and feel the content. Add `scrub`:

```javascript
const systemTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#the-system',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
  }
});

systemTl
  .from('#the-system h2', { opacity: 0, y: 20 })
  .from('#the-system .token-list', { opacity: 0, x: -30 })
  .from('#the-system .visual', { scale: 0.8, opacity: 0 });
```

### Step 3: Test Pacing

**The reading test:** Open your site. Scroll at a natural reading pace. For each section, ask:
- Can I read all the text before the next section starts?
- Does the animation help me understand the content, or distract from it?
- Is there enough "breathing room" between sections?

If scrolling feels exhausting, your sections might be too dense or your animations too aggressive.

### Step 4: Remove Markers

Delete every `markers: true` from your code. They're debugging tools — they don't belong in production.

### Step 5: Final Content Check

Read through your entire site top to bottom. Fix any:
- Typos or unclear explanations
- Missing content in any section
- Metaphor inconsistencies (does it hold all the way through?)
- Broken visual assets

---

## Complete Criteria

- [ ] ALL sections have scroll-triggered animations
- [ ] At least 1 section uses `scrub`
- [ ] `start` values are calibrated per section (not all `"top 80%"`)
- [ ] ALL markers removed
- [ ] `prefers-reduced-motion` wraps all animation code
- [ ] Content complete and proofread
- [ ] Pushed to GitHub, live on Pages

---

## Common Issues

**Q: My forEach loop doesn't work.**
A: `document.querySelectorAll()` returns a NodeList, not an array. Use `gsap.utils.toArray()` instead — it handles the conversion.

**Q: Scrub animation feels disconnected from content.**
A: The scroll range might be too wide. Tighten `start` and `end` so the animation happens while the content is in view. Use `"top center"` to `"bottom center"` as a starting point.

**Q: Some sections look better without animation.**
A: That's fine. Not every section needs to animate. A simple fade-in is enough for some sections. The closing section especially might benefit from being still.

---

## Connection to This Week

After this build, your site is a functional scrollytelling piece. Next week you'll add the "showpiece" — a pinned section where the viewport locks and content animates within it. Think about which section deserves that treatment.
