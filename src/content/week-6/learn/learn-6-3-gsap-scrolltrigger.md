# Learn: GSAP ScrollTrigger + Parallax

**Points:** — (not graded, but required before Day 2)
**Time Estimate:** 30–40 minutes

---

## TL;DR

Watch 3 short videos and read one doc page about GSAP ScrollTrigger and parallax. Understand how scroll position can drive animation before you get to class on Day 2.

---

## What to Watch

### 1. GSAP ScrollTrigger — Getting Started (Required)
[GreenSock ScrollTrigger Introduction](https://gsap.com/scroll/)
~10 minutes

**Watch for:**
- What does `scrub` do to an animation?
- What are `markers` and why do you turn them on?
- What's the difference between `trigger`, `start`, and `end`?

### 2. Parallax Scrolling with GSAP (Required)
Search YouTube: "GSAP ScrollTrigger parallax tutorial" — pick one under 10 minutes from a channel you trust (DesignCourse, Developedbyed, or similar).

**Watch for:**
- What creates the illusion of depth?
- How do layers move at different speeds?
- What CSS property is being animated? (Hint: it's `y` via `transform`)

### 3. GSAP Plugins Overview (Recommended)
[GSAP Plugins — What's Available](https://gsap.com/docs/v3/Plugins/)
Browse the plugin page. ~5 minutes.

**Look for:**
- **DrawSVGPlugin** — what can it animate?
- **ScrollTrigger** — how does it connect to tweens and timelines?
- **MorphSVGPlugin, MotionPathPlugin** — what else exists that you might want to try?
- Where do you find the free CodePen trial CDN links for premium plugins?

---

## What to Read

### ScrollTrigger Documentation (Required)
[GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

**Focus on these properties:**
| Property | What It Does |
|----------|-------------|
| `trigger` | The element ScrollTrigger watches |
| `start` | Where the trigger must be to begin the animation (e.g., `"top 80%"`) |
| `end` | Where the trigger must be to end the animation (e.g., `"top 20%"`) |
| `scrub` | Links animation progress to scroll progress (1:1) |
| `markers` | Shows visual start/end lines for debugging |
| `toggleActions` | What happens on enter, leave, enter-back, leave-back |

You don't need to memorize all of this. Bookmark the page — you'll reference it constantly.

---

## The Key Concept

**ScrollTrigger turns scroll position into a timeline controller.**

| Without ScrollTrigger | With ScrollTrigger | With Scrub |
|----------------------|-------------------|------------|
| Animation plays on page load | Animation plays when you scroll to it | Animation progress IS scroll progress |
| Time-based | Position-triggered | Position-driven |
| `gsap.to(".el", { ... })` | `gsap.to(".el", { scrollTrigger: { ... } })` | `scrollTrigger: { scrub: true }` |

**Parallax uses this principle:** different layers respond to the same scroll at different speeds, creating depth.

---

## GSAP Tween Methods — Quick Review

You learned these in Week 5. Here's the cheat sheet:

```js
// Animate FROM current state TO these values
gsap.to(".element", { x: 100, opacity: 0.5, duration: 1 });

// Animate FROM these values TO current state
gsap.from(".element", { y: 50, opacity: 0, duration: 1 });

// Animate FROM first values TO second values
gsap.fromTo(".element",
  { opacity: 0, y: 30 },    // from
  { opacity: 1, y: 0, duration: 1 }  // to
);
```

Any of these can have a `scrollTrigger` added to them. That's the Week 6 upgrade.

---

## What to Notice

As you watch these videos, think about **your** scrollytelling site:

- Which sections should animate when you scroll to them? (`toggleActions`)
- Which sections should be "scrubbed" — tied directly to scroll position?
- Where could parallax create depth? (Hero? Transitions between chapters? Background illustrations?)
- Which GSAP method fits each section? (`gsap.to`, `gsap.from`, `gsap.fromTo`)

Jot down 2–3 ideas. You'll use them in your Reflect 6-1 motion map.

---

## Connection to Course

This week you're learning the tools in isolation (CodePen exercises). Starting Week 7, you'll apply ScrollTrigger and parallax to your actual scrollytelling project. The better you understand these concepts now, the smoother the build goes.
