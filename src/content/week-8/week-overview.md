# Week 8: The Scroll

**Unit 2:** Teaching Through Story
**Interaction Question:** How does scroll become your storytelling medium?

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Load** the ScrollTrigger plugin and register it with GSAP
2. **Convert** existing GSAP animations to scroll-triggered animations
3. **Configure** `trigger`, `start`, and `end` parameters for precise scroll control
4. **Use** `markers: true` for debugging scroll trigger positions
5. **Implement** `scrub` to link animation progress to scroll position
6. **Calibrate** scroll pacing to match reading speed
7. **Disable** scroll animations for `prefers-reduced-motion` users

---

## Two-Day Breakdown

### Day 1: Scroll as Trigger
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | Demo: scroll through a site where elements appear on scroll. "Last week everything played at once. Now it responds to you." |
| 0:10 | ScrollTrigger Concept | Scroll position as a timeline. The page is a playback device. Show the mental model. |
| 0:20 | Setup | Load ScrollTrigger via CDN. `gsap.registerPlugin(ScrollTrigger)`. |
| 0:30 | Live Code: First ScrollTrigger | Take a `gsap.from()` and add `scrollTrigger: { trigger: '.section' }`. Show the magic. |
| 0:40 | Trigger, Start, End | What triggers the animation? When does it start? When does it end? Show markers. |
| 0:55 | Break | — |
| 1:05 | Practice Start | Students convert their section animations to scroll-triggered. Add markers. Adjust start/end. |
| 1:35 | Closing | Homework: finish converting all sections, start experimenting with scrub |

**Deliverables assigned:**
- Learn 8-1: Scroll as Medium (before Day 2)
- Practice 8-1: The Scroll (start in class, due before Day 2)

---

### Day 2: Scrub + Pacing
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | Side-by-side: animation that triggers-and-plays vs. animation that scrubs with scroll. "Feel the difference." |
| 0:10 | Scrub Deep Dive | `scrub: true` vs `scrub: 1` (smoothing). When to use each. How scrub turns scroll into a slider. |
| 0:25 | Live Code: Scrubbed Section | Build a section where elements progress with scroll — text fades in, images scale, colors shift. |
| 0:40 | Pacing Workshop | "Test: can someone read the text before it scrolls away?" Students swap laptops and test each other's scroll pacing. |
| 0:55 | Break | — |
| 1:05 | Scrollytelling Examples Analysis | Look at 2-3 professional scrollytelling pieces. Identify: trigger-and-play vs. scrubbed sections. When do they use each? |
| 1:20 | Work Time | Students refine scroll triggers, add scrub to at least 1 section, remove markers. |
| 1:35 | Closing | Preview: "Next week: pinning — locking a section in place while content animates inside it." |

**Deliverables assigned:**
- Build 8-1: The Story Flows (all sections scroll-triggered, due Sunday)
- Reflect 8-1: Visual Notes (scroll timeline map, due Sunday)

---

## Activities

| Type | Activity | Points | Due |
|------|----------|--------|-----|
| Learn 8-1 | Scroll as Medium | — | Before Day 2 |
| Practice 8-1 | The Scroll | 10 | Before Day 2 |
| Build 8-1 | The Story Flows | 10 | Sunday |
| Reflect 8-1 | Visual Notes | 10 | Sunday |

> See `learn/`, `practice/`, `build/`, and `reflect/` folders for activity files.

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| ScrollTrigger plugin | Deep | Loading, registering, basic config |
| `trigger` | Hands-on | Which element triggers the animation |
| `start` / `end` | Hands-on | When animation begins/ends relative to viewport |
| `markers` | Practical | Debugging tool — shows trigger positions |
| `scrub` | Deep | Linking animation progress to scroll position |
| Scroll pacing | Conceptual | Reading speed vs. scroll speed |
| toggleActions | Practical | What happens on enter/leave/re-enter |

---

## Project Milestone

**Project 2: "The Long Way Down"** — Week 8 checkpoint

- [ ] ScrollTrigger plugin loaded and registered
- [ ] ALL sections have scroll-triggered animations
- [ ] `trigger` element correctly set for each section
- [ ] `start` and `end` values calibrated (not default)
- [ ] At least 1 section uses `scrub` for progress-linked animation
- [ ] Markers removed for production
- [ ] `prefers-reduced-motion` disables all scroll animations
- [ ] Pacing tested with a partner

---

## Assigned Reading/Tutorials

| Resource | Type | Required |
|----------|------|----------|
| [ScrollTrigger Getting Started](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Docs | Yes |
| [GSAP ScrollTrigger Tutorial](https://www.youtube.com/watch?v=X7IBa7vZjmo) | Video (10 min) | Yes |

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **ScrollTrigger** | GSAP plugin that triggers animations based on scroll position |
| **trigger** | The element whose position in the viewport triggers the animation |
| **start** | When the animation starts — e.g., `"top 80%"` means "when trigger's top hits 80% down the viewport" |
| **end** | When the animation ends — defines the scroll range |
| **markers** | Visual debugging aids showing trigger start/end positions |
| **scrub** | Links animation progress to scroll progress — scroll forward = animate forward, scroll back = animate back |
| **toggleActions** | Four actions for: onEnter, onLeave, onEnterBack, onLeaveBack |

---

## Common Struggles & Solutions

| Struggle | Solution |
|----------|----------|
| ScrollTrigger not working | Check: is the plugin loaded after GSAP and before your script? Did you call `gsap.registerPlugin(ScrollTrigger)`? |
| Animation triggers too early or too late | Use `markers: true` to see exactly where triggers fire. Adjust `start` and `end` values. |
| Scrub feels janky | Use `scrub: 1` instead of `scrub: true`. The number adds smoothing (in seconds). |
| Can't see markers | They're tiny labels at the right edge of the viewport. Scroll slowly and look for green/red lines. |
| Animation plays but doesn't reverse on scroll back | For scrub animations, this happens automatically. For trigger-and-play, set `toggleActions: "play none none reverse"`. |
| Page is really long and performance drops | Simplify animations. Use fewer properties per tween. Avoid animating `box-shadow` or `filter` on scroll. |

---

## Code Patterns Introduced

### Loading ScrollTrigger
```html
<!-- In HTML, after GSAP, before your script -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
<script src="scripts/main.js"></script>
```

### Registering the Plugin
```javascript
gsap.registerPlugin(ScrollTrigger);
```

### Basic Scroll-Triggered Animation
```javascript
gsap.from('#variables h2', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#variables',
    start: 'top 80%',     // when section top hits 80% of viewport
    markers: true          // remove for production!
  }
});
```

### Timeline with ScrollTrigger
```javascript
const sectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#the-switch',
    start: 'top 75%',
    end: 'bottom 25%',
    markers: true
  }
});

sectionTl
  .from('#the-switch h2', { opacity: 0, y: 30, duration: 0.6 })
  .from('#the-switch p', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
  .from('#the-switch .visual', { opacity: 0, scale: 0.9, duration: 0.5 });
```

### Scrubbed Animation
```javascript
gsap.to('#the-system .progress-bar', {
  width: '100%',
  ease: 'none',
  scrollTrigger: {
    trigger: '#the-system',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,              // smooth scrubbing (1 second lag)
    markers: true
  }
});
```

### Complete Pattern with Reduced Motion
```javascript
gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Hero (no scroll trigger — plays on load)
  const heroTl = gsap.timeline();
  heroTl
    .from('.hero__title', { opacity: 0, y: 40, duration: 0.8, ease: 'power2.out' })
    .from('.hero__subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');

  // Each section — scroll triggered
  gsap.utils.toArray('.section--chapter').forEach(section => {
    gsap.from(section.querySelectorAll('h2, p'), {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      }
    });
  });
}
```

---

## Accessibility Focus

- ScrollTrigger animations must be wrapped in the same `prefers-reduced-motion` check
- When reduced motion is enabled: content should appear immediately (no animation, but content is visible)
- Test: enable "Reduce Motion" in System Settings → Accessibility, reload your site. All content should be visible and readable.
- Scrubbed animations especially need reduced-motion handling — content shouldn't be locked behind scroll progress

---

## Connections

| Connects To | How |
|-------------|-----|
| Week 7 | GSAP animations become scroll-triggered |
| Week 9 | ScrollTrigger expanded with pinning and parallax |
| Week 6 | CSS fallbacks still work when JS/motion disabled |
| Project 2 | This is the core technology of the final deliverable |

---

## Instructor Notes

- The "trigger-and-play → scrub" progression is key. Start simple (trigger fires, animation plays), then show scrub as the mind-bending moment.
- Markers are the most important debugging tool. Insist students use them during development.
- The pacing workshop (Day 2) is critical. Students need to feel each other's sites to understand that scroll speed ≠ reading speed.
- Common confusion: `start: "top 80%"` means "when the TOP of the trigger element reaches 80% from the TOP of the viewport." Draw this on the board.
- The `gsap.utils.toArray().forEach()` pattern is powerful but might confuse students who haven't seen `.forEach()`. Explain it as "do this for each section" without diving deep into array methods.
- Remove markers before submission! Students will forget. Remind them.

---

## Materials Checklist

- [ ] ScrollTrigger CDN link tested
- [ ] Learn 8-1: Scroll as Medium (`learn/learn-8-1-scroll-as-medium.md`)
- [ ] Practice 8-1: The Scroll (`practice/practice-8-1-the-scroll.md`)
- [ ] Build 8-1: The Story Flows (`build/build-8-1-the-story-flows.md`)
- [ ] Reflect 8-1: Visual Notes (`reflect/reflect-8-1-visual-notes.md`)
- [ ] Resources page updated
- [ ] Scrollytelling analysis examples selected
- [ ] Trigger position diagram ready (whiteboard or slides)
