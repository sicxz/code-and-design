# Build: Three Chapters

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 60–90 minutes
**Prerequisite:** Build 7-2: The Pulse

---

## TL;DR
Animate entrance sequences for 3 story sections using GSAP timelines. Finish writing all section content.

---

## Submit
1. Push to GitHub
2. Submit GitHub Pages URL to Canvas

---

## Overview

Your hero has a timeline. Now extend that pattern to your story sections. Each chapter in your scrollytelling site should have its own entrance animation — but not the same one. Different content deserves different motion.

This is also the week to finish all your content. Every section needs real text by Sunday.

---

## What You're Doing

### Step 1: Set Up Section Animations

For each section you're animating, create a new timeline. Pattern:

```javascript
if (!prefersReducedMotion) {
  // Hero timeline (from Practice 7-1)
  const heroTl = gsap.timeline();
  heroTl
    .from('.hero__title', { opacity: 0, y: 40, duration: 0.8, ease: 'power2.out' })
    .from('.hero__subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');

  // Chapter 1 timeline
  const ch1Tl = gsap.timeline();
  ch1Tl
    .from('#first-contact h2', { opacity: 0, x: -30, duration: 0.6, ease: 'power2.out' })
    .from('#first-contact p', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2');

  // Chapter 2 timeline
  const ch2Tl = gsap.timeline();
  ch2Tl
    .from('#variables h2', { opacity: 0, duration: 0.6, ease: 'power3.out' })
    .from('#variables p', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, '-=0.2');

  // Chapter 3 timeline
  const ch3Tl = gsap.timeline();
  ch3Tl
    .from('#the-switch h2', { opacity: 0, y: 20, duration: 0.6, ease: 'back.out(1.7)' })
    .from('#the-switch p', { opacity: 0, duration: 0.4 }, '-=0.2')
    .from('#the-switch .visual', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'back.out(1.4)' });
}
```

### Step 2: Vary Your Approach

Don't use the same animation for every section. Consider:

| Section Mood | Suggested Motion | Easing |
|-------------|-----------------|--------|
| Mysterious / discovery | Fade in (opacity only) | `power2.out` |
| Energetic / breakthrough | Slide + scale | `back.out(1.7)` |
| Methodical / structured | Stagger items | `power2.out` with `stagger: 0.1` |
| Dramatic / pivotal | Large Y offset, slow | `power4.out` |
| Gentle / reflective | Small fade, longer duration | `power1.out` |

### Step 3: CSS Initial States

Every element that GSAP animates needs CSS to handle the no-JS / reduced-motion case:

```css
/* Elements GSAP will animate */
.section h2,
.section p,
.section .visual {
  opacity: 0;
}

/* Show them if no motion or no JS */
@media (prefers-reduced-motion: reduce) {
  .section h2,
  .section p,
  .section .visual {
    opacity: 1;
  }
}

/* noscript fallback */
noscript ~ main .section h2,
noscript ~ main .section p {
  opacity: 1;
}
```

### Step 4: Finish All Content

Every section needs real text. Use your metaphor map from the Week 5 Reflect. For each section:

1. Open your metaphor map
2. Re-read the JS concept for that chapter
3. Write 2–3 paragraphs connecting the concept to your metaphor
4. Keep it conversational — you're telling a story, not writing documentation

---

## Complete Criteria

- [ ] 3+ sections have GSAP timeline entrance animations (beyond hero)
- [ ] Each animated section uses a distinct animation approach
- [ ] At least 2 different easing values used across sections
- [ ] CSS initial states set for all GSAP-animated elements
- [ ] `prefers-reduced-motion` respected (elements visible when motion disabled)
- [ ] ALL sections have real, written content
- [ ] Pushed to GitHub, live on Pages

---

## Common Issues

**Q: All my animations play at once on page load — sections below the fold animate before I see them.**
A: That's expected this week. Next week, ScrollTrigger solves this by only playing animations when you scroll to them.

**Q: My page is blank until animations finish.**
A: You probably have `opacity: 0` on too many elements without a proper fallback. Check your reduced-motion media query.

**Q: How many timelines should I have?**
A: One per section is a good pattern. You'll reorganize them next week when adding ScrollTrigger.

---

## Connection to This Week

Right now your site has a problem: everything animates at once on page load, even sections you haven't scrolled to. That's the problem ScrollTrigger solves next week. Think of this week as building the animations, next week as building the triggers.
