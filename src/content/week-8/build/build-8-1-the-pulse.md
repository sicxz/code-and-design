# Build: The Pulse

**Points:** 25
**Time Estimate:** 60–90 minutes
**Prerequisite:** Week 5 GSAP Express + Build 7-1: The Rough Cut + Motion Map (Week 6)

---

## TL;DR

Bring your Motion Map to life. Load GSAP, wrap everything in a reduced-motion check, and build entrance animations for your hero and at least 2 story sections. Reference your Motion Map for what to animate and how.

---

## Submit

1. Push to GitHub
2. Submit GitHub Pages URL to Canvas

---

## Overview

Your site has structure (Build 7-1). Your Motion Map has the plan. Now you connect them.

This week you're building the **animations** — not the **triggers**. Everything will animate on page load right now, even sections below the fold. That's expected. Think of it like rehearsing choreography without the curtain cues. Next week (Week 8), ScrollTrigger adds the scroll-driven timing so animations fire when the user reaches each section.

Open your Milanote Motion Map. Every annotation, every arrow, every GSAP method label — that's your implementation guide. Start with the hero, then move to the sections you're most confident about.

---

## What You're Building

- GSAP loaded via CDN in your scrollytelling project
- A `prefers-reduced-motion` check wrapping all animation code
- A hero entrance timeline with sequenced tweens
- Entrance animations for 2+ story sections
- CSS initial states with reduced-motion fallbacks

---

## Requirements

### Core
- [ ] GSAP loaded via CDN (before `main.js`)
- [ ] `prefers-reduced-motion` check wraps all animation code
- [ ] Hero entrance timeline with 2+ sequenced `.from()` tweens
- [ ] 2 additional sections with entrance animations
- [ ] At least 2 different easing values used
- [ ] At least 1 stagger animation on grouped elements (paragraphs, list items, cards)
- [ ] CSS initial states (`opacity: 0`) for all GSAP-animated elements
- [ ] `@media (prefers-reduced-motion: reduce)` restores visibility in CSS
- [ ] No console errors

### Stretch Goals
- [ ] All sections from your Motion Map animated
- [ ] A `gsap.fromTo()` used for precise start/end control
- [ ] Scale or rotation animation on at least one element
- [ ] Timeline position parameters used (`-=0.3`, `+=0.1`) for overlap/delay
- [ ] Showpiece section has a more complex animation sequence (3+ tweens)
- [ ] Different motion direction per section (fade up, slide left, scale in)

---

## Step-by-Step Guide

### Step 1: Link GSAP

Add the GSAP CDN script to your `index.html`, **before** your `main.js`:

```html
<!-- Before closing </body> tag -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="scripts/main.js"></script>
```

**Do NOT add ScrollTrigger this week.** You're building animations first, triggers next week.

Test: Open your site, open DevTools Console, type `gsap` and press Enter. You should see the GSAP object, not an error.

---

### Step 2: Set Up the Reduced Motion Check

This is the first thing in your `main.js` (or after your theme code if you did Practice 7-1):

```javascript
// ========================================
// ANIMATION — The Pulse
// ========================================

// Respect motion preferences
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (!prefersReducedMotion) {
  // ALL animation code goes inside this block
}
```

This is not optional. Every GSAP animation in this project lives inside this check. Users who prefer reduced motion see fully visible content with zero animation.

---

### Step 3: Build the Hero Timeline

Open your Motion Map. What did you plan for the hero?

A timeline lets you sequence multiple animations. Each `.from()` tween animates an element *from* a starting state to its natural CSS position:

```javascript
if (!prefersReducedMotion) {
  // Hero entrance timeline
  const heroTl = gsap.timeline();

  heroTl
    .from('.hero__title', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
    })
    .from(
      '.hero__subtitle',
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.4'
    );
}
```

**Key concepts:**
- `gsap.timeline()` creates a sequence — animations play one after another
- `.from()` animates FROM these values TO the element's natural CSS state
- `'-=0.4'` is a **position parameter** — this tween starts 0.4s before the previous one ends (overlap)
- `y: 40` means "start 40px below" — the element slides up into place

Adapt the selectors (`.hero__title`, `.hero__subtitle`) to match YOUR HTML class names.

---

### Step 4: Choose Your Easing

Easing is personality. The same animation with different easing feels completely different.

| Section Mood | Suggested Easing | Feels Like |
|-------------|-----------------|------------|
| Grand / welcoming | `power2.out` | Confident arrival |
| Energetic / surprising | `back.out(1.7)` | Slight overshoot, playful |
| Methodical / structured | `power2.out` + `stagger` | Orderly reveal |
| Dramatic / pivotal | `power4.out` | Heavy, deliberate |
| Gentle / reflective | `power1.out` | Soft fade |

Visit the [GSAP Ease Visualizer](https://gsap.com/docs/v3/Eases/) to see them in action. Pick at least 2 different easings across your sections.

---

### Step 5: Animate 2 Story Sections

Pick the 2 sections from your Motion Map you're most confident about. Each should use a **different approach** than the hero.

**Approach A: Individual elements with a timeline**

```javascript
// Section: first-contact
const section1Tl = gsap.timeline();

section1Tl
  .from('#first-contact h2', {
    opacity: 0,
    x: -30,
    duration: 0.6,
    ease: 'power2.out',
  })
  .from(
    '#first-contact p',
    {
      opacity: 0,
      y: 20,
      duration: 0.5,
    },
    '-=0.2'
  );
```

**Approach B: Stagger on grouped elements**

```javascript
// Section: variables — paragraphs reveal one by one
gsap.from('#variables p', {
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.15,
  ease: 'power2.out',
});
```

**Approach C: Scale + fade for visual elements**

```javascript
// Section: the-switch — image/visual scales in
const section3Tl = gsap.timeline();

section3Tl
  .from('#the-switch h2', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'back.out(1.7)',
  })
  .from(
    '#the-switch .visual',
    {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'back.out(1.4)',
    },
    '-=0.3'
  );
```

Adapt the selectors and values to match YOUR sections and YOUR Motion Map annotations.

---

### Step 6: Set CSS Initial States

Every element GSAP animates needs to start invisible in CSS. Otherwise, you'll see a flash of content before the animation plays.

Add to your `animations.css` (or wherever your animation styles live):

```css
/* ========================================
   GSAP INITIAL STATES
   Elements start invisible; GSAP reveals them
   ======================================== */
.hero__title,
.hero__subtitle,
#first-contact h2,
#first-contact p,
#variables p,
#the-switch h2,
#the-switch .visual {
  opacity: 0;
}

/* ========================================
   REDUCED MOTION FALLBACK
   Show everything if user prefers no animation
   ======================================== */
@media (prefers-reduced-motion: reduce) {
  .hero__title,
  .hero__subtitle,
  #first-contact h2,
  #first-contact p,
  #variables p,
  #the-switch h2,
  #the-switch .visual {
    opacity: 1;
  }
}
```

**Update these selectors to match the elements YOU are animating.** Every element in your GSAP code needs a matching line in both blocks.

---

### Step 7: Test and Debug

1. **Open your site in the browser.** Does the hero animate on load?
2. **Open DevTools Console.** Any red errors? Fix them before continuing.
3. **Scroll down.** Do the section animations play? (Yes — they all fire on load. That's expected this week.)
4. **Test reduced motion:**
   - macOS: System Settings → Accessibility → Display → Reduce motion
   - Or: DevTools → Rendering panel → Emulate `prefers-reduced-motion: reduce`
   - All content should be fully visible, no animation
5. **Disable JavaScript** (DevTools → Settings → Debugger → Disable JavaScript). Is content still visible? If not, your CSS initial states need a `<noscript>` fallback.

---

## About Page Load vs. Scroll

Right now, **everything animates at once on page load** — including sections you haven't scrolled to yet. You might scroll down and find content already in its final position because the animation already played.

This is intentional. You're building the **animations** this week and the **triggers** next week.

Think of it this way:
- **This week:** Choreography practice — you rehearse the moves
- **Next week (ScrollTrigger):** The curtain rises on cue — animations play when the audience sees them

Your Motion Map planned both the *what* (animation type, GSAP method) and the *when* (scroll position, trigger points). This week handles the *what*. Week 8 handles the *when*.

---

## Evaluation

| Criteria | Points |
|----------|--------|
| GSAP loaded via CDN, no console errors | 3 |
| `prefers-reduced-motion` check wraps all animations | 3 |
| Hero entrance timeline with 2+ sequenced tweens | 5 |
| 2 additional sections with entrance animations | 6 |
| At least 2 different easing values used | 3 |
| CSS initial states + reduced-motion fallback | 3 |
| Animations reference Motion Map intent | 2 |

---

## Common Issues

| Problem | Fix |
|---------|-----|
| `gsap is not defined` | GSAP script must load before `main.js`. Check `<script>` tag order in your HTML. |
| Hero text invisible, never appears | You set `opacity: 0` in CSS but GSAP isn't running. Check the Console for errors. Check your `prefersReducedMotion` wrapper — maybe you accidentally put code outside it. |
| `.from()` glitch (flash of final state) | Use `gsap.fromTo()` instead for explicit start/end, or add `immediateRender: true` to the tween. |
| Stagger has no effect | Your selector only matches one element. `stagger` needs multiple elements — check that the class/selector matches more than one. |
| Animation feels wrong | Change the easing. `ease: "power2.out"` is the safe default. Visit the [Ease Visualizer](https://gsap.com/docs/v3/Eases/). |
| Page is blank when JS is off | Your CSS sets `opacity: 0` but has no fallback. Add the `@media (prefers-reduced-motion: reduce)` block and consider a `<noscript>` style. |
| Everything animates at once | That's expected this week. ScrollTrigger (Week 8) fixes this. |
| Timeline tweens play at wrong time | Check your position parameters. `'-=0.4'` means overlap by 0.4s. No position parameter means "after previous tween ends." |

---

## Connection to Next Week

Right now your site has a problem: everything animates at once on page load, even sections you haven't scrolled to yet. That's the problem **ScrollTrigger** solves in Week 8.

Think of this week as building the animations, next week as building the triggers. Your Motion Map planned both — now you've implemented the first half.

Next week you'll wrap each section's animation in a `scrollTrigger` config, and suddenly the choreography plays on cue.

---

## Resources

- [GSAP Getting Started](https://gsap.com/resources/get-started/)
- [GSAP Ease Visualizer](https://gsap.com/docs/v3/Eases/)
- [GSAP Timeline Docs](https://gsap.com/docs/v3/GSAP/Timeline/)
- [GSAP .from() Tips](https://gsap.com/resources/get-started/#from-tweens)
- [GSAP Stagger](https://gsap.com/resources/getting-started/Staggers)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
