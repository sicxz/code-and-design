# Week 6: The Blueprint

**Unit 2:** Teaching Through Story
**Interaction Question:** What happens when the page moves with you?

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Design** a complete scrollytelling site in Figma with 5–7 sections, each mapped to a metaphor chapter and JS concept
2. **Set up** Figma variables with semantic tokens and light/dark mode
3. **Explain** how GSAP ScrollTrigger ties animation progress to scroll position
4. **Use** ScrollTrigger's core properties: `trigger`, `start`, `end`, `scrub`, and `markers`
5. **Define** parallax and identify how different scroll speeds create the illusion of depth
6. **Build** a basic parallax effect using GSAP ScrollTrigger in CodePen
7. **Apply** DrawSVGPlugin to animate SVG strokes tied to scroll position (via tutorial)
8. **Analyze** scrollytelling as a design pattern — understanding how scroll controls pacing, attention, reveal, and meaning

---

## Two-Day Breakdown

### Day 1: ScrollTrigger + Design Foundation
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | Pull up a parallax scrollytelling site (Apple AirPods Pro). Scroll slowly together. "Not everything moves at the same speed. Why does this feel different from a normal webpage?" |
| 0:10 | Concept: ScrollTrigger | Scroll as a timeline controller. Instead of time driving animation, scroll position drives it. Introduce `trigger`, `start`, `end`, `scrub`, `markers`. Draw it on the whiteboard. |
| 0:25 | Live Demo: ScrollTrigger Basics | In CodePen: load GSAP + ScrollTrigger via CDN. Create 3 colored sections. Animate an element with `gsap.to()` + `scrollTrigger: {}`. Turn on `markers: true`. Show `scrub: true` vs. `scrub: false`. Change `start` and `end` — watch the markers move. Break it intentionally, then fix it. |
| 0:45 | Break | — |
| 0:55 | Engage 6-1: Parallax Dissection | In pairs, students examine 3–4 scrollytelling sites. For each: identify layers (what moves at different speeds), triggers (scroll-driven vs. auto-play), purpose (serves content or decoration?). Share one observation per pair. |
| 1:15 | Design Check-in + Work Time | Quick class poll: "Who has their style tile done? Who has a narrative map?" Review what the Blueprint assignment requires. Students who have style tiles start extending them into full section designs. |
| 1:30 | Closing | Assign: Learn 6-1 (Scrollytelling readings + visual notes, due Sunday), Learn 6-2 (SVG Icons tutorial, before Day 2), Build 6-1 (The Blueprint, due Sunday) |

**Deliverables assigned:**
- Engage 6-1: Parallax Dissection (in-class)
- Learn 6-1: Scrollytelling Readings + Visual Notes (due Sunday)
- Learn 6-2: Animating SVG Icons with GSAP + AI (before Day 2)
- Build 6-1: The Blueprint (due Sunday)
- Reflect 6-1: Visual Notes — Motion Map (due Sunday)

---

### Day 2: Parallax Implementation
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening: Tutorial Check-in | "How did the SVG Icons tutorial go? What was the difference between a scrubbed animation and one that just plays?" Quick show of hands: who got DrawSVG working? Who got the scroll-driven draw/undraw? |
| 0:10 | Figma Gallery Walk | Students show their Blueprint progress on screens. Walk around, observe. Quick verbal feedback: "I notice your sections have good rhythm" or "Think about what happens between these two sections." |
| 0:20 | Concept: Parallax | What parallax is: layers moving at different speeds to create depth. Show the principle with a simple diagram (foreground, midground, background). Connect to film: dolly shots vs. static camera. In GSAP: different `y` distances for different layers on the same scroll range. |
| 0:35 | Live Demo: Building Parallax | In CodePen: a hero section with a background element, a midground SVG, and foreground text. Each layer gets its own `gsap.to()` with ScrollTrigger, all sharing the same trigger but moving different distances. Show how adjusting `y` values changes the depth feel. Add `ease: "none"` for linear parallax. |
| 0:50 | Break | — |
| 1:00 | Practice 6-1: The Parallax | Students build a 3-layer parallax scene in CodePen. Background (barely moves), midground (moves more), foreground (moves most or stays still). Instructor circulates for troubleshooting. |
| 1:30 | Closing | Preview: "You've designed your site, you've learned ScrollTrigger and parallax in isolation. Next week: you start building the real thing." Remind: Build 6-1 + Reflect 6-1 due Sunday. |

**Deliverables assigned:**
- Practice 6-1: The Parallax (in-class, finish by end of Day 2)
- Reflect 6-1: Visual Notes — Motion Map (due Sunday)

---

## Activities

| Type | Activity | Points | Due |
|------|----------|--------|-----|
| Learn 6-1 | Scrollytelling Readings + Visual Notes | 10 | Sunday |
| Learn 6-2 | Animating SVG Icons with GSAP + AI | — | Before Day 2 |
| Learn 6-3 | GSAP ScrollTrigger + Parallax | — | Before Day 2 |
| Engage 6-1 | Parallax Dissection | 10 | Day 1 (in-class) |
| Practice 6-1 | The Parallax | 10 | End of Day 2 |
| Build 6-1 | The Blueprint | 10 | Sunday |
| Reflect 6-1 | Visual Notes: Motion Map | 10 | Sunday |

> See `learn/`, `practice/`, `build/`, `engage/`, and `reflect/` folders for activity files.

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| GSAP ScrollTrigger | Deep | `trigger`, `start`, `end`, `markers`, `scrub`, `toggleActions` |
| Parallax scrolling | Practical + Conceptual | Layer concept, implementation with ScrollTrigger |
| DrawSVGPlugin | Hands-on (via tutorial) | Stroke animation tied to scroll |
| GSAP Tweens | Review + Practical | `gsap.to()`, `gsap.from()`, `gsap.fromTo()` |
| Figma design for scrollytelling | Hands-on | Full section design, visual rhythm |
| Figma variables and tokens | Completion | Primitives, semantic tokens, light/dark mode |
| Motion planning | Conceptual | Annotating designs with animation intent |
| Scroll as input | Conceptual | Scroll position as timeline controller |
| Scrollytelling as a pattern | Conceptual (via readings) | Pacing, attention, reveal, structure patterns |

---

## Project Milestone

**Project 2: "The Long Way Down"** — Week 6 checkpoint

- [ ] Complete Figma design with 5–7 sections
- [ ] Each section maps to a metaphor chapter and JS concept
- [ ] Figma variables set up (primitives + semantic tokens)
- [ ] Light/dark mode tokens configured
- [ ] Style tile applied to all section designs
- [ ] Visual rhythm established (sections look different, not repetitive)
- [ ] Motion annotations on design (where GSAP, ScrollTrigger, parallax will go)
- [ ] Parallax CodePen exercise completed

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **ScrollTrigger** | A GSAP plugin that triggers or drives animations based on scroll position |
| **trigger** | The element ScrollTrigger watches to determine when animation starts |
| **start / end** | Where in the viewport the trigger element must be to begin/end the animation |
| **scrub** | Links animation progress directly to scroll progress (1:1 relationship) |
| **markers** | Visual debugging aids that show where ScrollTrigger starts and ends |
| **parallax** | An effect where layers move at different speeds to create an illusion of depth |
| **DrawSVGPlugin** | A GSAP plugin that animates SVG stroke drawing (as if drawn by hand) |
| **toggleActions** | ScrollTrigger property controlling what happens on enter, leave, enter-back, leave-back |
| **gsap.to()** | Animate FROM current state TO specified values |
| **gsap.from()** | Animate FROM specified values TO current state |
| **gsap.fromTo()** | Animate FROM specified start values TO specified end values |

---

## Common Struggles & Solutions

| Struggle | Solution |
|----------|----------|
| ScrollTrigger animation doesn't play | Is the page scrollable? ScrollTrigger needs scroll room. Add enough content or section height. |
| Markers don't show up | Make sure `markers: true` is inside the `scrollTrigger` object, not outside it. |
| Animation plays immediately instead of on scroll | Did you forget `scrollTrigger: { ... }` inside your tween? Without it, GSAP plays on load. |
| Parallax layers don't feel like depth | The y-value difference between layers is too small. Try -50 (bg), -150 (mid), -300 (fg). |
| DrawSVGPlugin not working | It's a premium plugin. Only works on CodePen with the trial CDN. Check the URL. |
| Figma variables are confusing | Start with colors: raw hex = primitive, named purpose = semantic (`surface-primary`, `text-primary`). |
| Light/dark mode feels overwhelming | Focus on swapping surface and text colors first. Accent colors often stay the same. |
| Sections all look the same in Figma | Check your visual rhythm. Alternate: full-bleed ↔ contained, text ↔ image, dense ↔ spacious. |

---

## Code Patterns Introduced

### Basic ScrollTrigger
```js
gsap.registerPlugin(ScrollTrigger);

gsap.from(".chapter", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".chapter",
    start: "top 80%",
    end: "top 20%",
    markers: true,
    toggleActions: "play none none reverse"
  }
});
```

### Scrubbed Animation
```js
gsap.to(".progress-bar", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".story",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});
```

### Parallax Layers
```js
// Same trigger, different speeds = depth
gsap.to(".layer--bg", {
  y: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".layer--mid", {
  y: -150,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".layer--fg", {
  y: -300,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

---

## Accessibility Focus

- **Parallax and `prefers-reduced-motion`:** All scroll-driven animations must respect `prefers-reduced-motion: reduce`. Wrap GSAP animations in a media query check or use ScrollTrigger's built-in support.
- **Content without JavaScript:** The Figma design should ensure all content is readable in a static layout. Parallax and ScrollTrigger are enhancements.
- **Contrast in both modes:** Light and dark mode tokens must both pass WCAG AA contrast requirements.

---

## Connections

| Connects To | How |
|-------------|-----|
| Week 5 | Style tiles and narrative maps become full Figma designs |
| Week 5 | GSAP fundamentals (tweens, eases) now get ScrollTrigger and parallax |
| Week 2 | Same tokens workflow, now with light/dark mode |
| Week 7 | Figma designs become HTML/CSS, GSAP applied to real project |
| Week 8 | ScrollTrigger knowledge deepens with pinned sections |

---

## Instructor Notes

- **The Blueprint didn't happen in Week 5.** This is the catch-up. Students need the full Figma design before they can build in HTML. Don't rush past this.
- **No CSS animations this semester.** We're going straight from CSS transitions (hover/focus) to GSAP for all animation. Students don't need `@keyframes`.
- **The SVG Icons tutorial is meaty.** Give students a heads-up that Learn 6-2 takes 60–90 minutes. They should start it before Day 2, not the night before.
- **Parallax is the hook.** Students have seen parallax on websites they admire. Connecting GSAP ScrollTrigger to parallax makes the tool immediately exciting.
- **Gallery walk is fast.** 10 minutes max. The goal is quick peer exposure, not detailed critique. Save deep feedback for Week 7 when they're building in code.
- **Light/dark mode is required.** Every student must set up dual-mode tokens in Figma. If they're struggling, start simple: swap surface and text colors. Accents can stay the same.
- Students can use any GSAP plugins they want. ScrollTrigger and DrawSVG are the focus, but if they discover MotionPath, MorphSVG, or others — encourage exploration.

---

## Materials Checklist

- [ ] Learn 6-1: Scrollytelling Readings + Visual Notes (`learn/learn-6-1-scrollytelling-readings.md`)
- [ ] Learn 6-2: Animating SVG Icons with GSAP + AI (`learn/learn-6-2-svg-icons-gsap.md`)
- [ ] Learn 6-3: GSAP ScrollTrigger + Parallax (`learn/learn-6-3-gsap-scrolltrigger.md`)
- [ ] Engage 6-1: Parallax Dissection (`engage/engage-6-1-parallax-dissection.md`)
- [ ] Practice 6-1: The Parallax (`practice/practice-6-1-the-parallax.md`)
- [ ] Build 6-1: The Blueprint (`build/build-6-1-the-blueprint.md`)
- [ ] Reflect 6-1: Visual Notes (`reflect/reflect-6-1-visual-notes.md`)
- [ ] Resources page updated (`resources/week-6-resources.md`)
- [ ] Demo files: ScrollTrigger + parallax CodePen ready
- [ ] Example Figma scrollytelling layout prepared for Day 1
