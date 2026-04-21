# Week 9: The Deep

**Unit 2:** Teaching Through Story
**Interaction Question:** What separates good from great?

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Implement** a pinned ScrollTrigger section that locks in the viewport while content animates
2. **Create** parallax effects using different scroll speeds on layered elements
3. **Conduct** structured peer review of a scrollytelling site
4. **Test** for accessibility: keyboard navigation, reduced motion, color contrast
5. **Optimize** animation performance using Lighthouse and DevTools
6. **Deploy** a production-ready site to GitHub Pages
7. **Identify** and fix common scroll-animation bugs (layout shifts, z-index issues, pin spacing)

---

## Two-Day Breakdown

### Day 1: Pinning + Parallax
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | Show a pinned section from a professional site. "The viewport stops. The content keeps moving. That's pinning." |
| 0:10 | Pinning Explained | How `pin: true` works. The section locks in place. ScrollTrigger adds space for the scroll range. `start: "top top"`, `end: "+=100%"`. |
| 0:25 | Live Code: Pinned Section | Build a pinned section with content that animates within it — text fades in/out, images swap, progress bar fills. |
| 0:45 | Parallax Concept | Layers moving at different speeds create depth. Simple technique: different `y` offsets at different scroll rates. |
| 0:55 | Break | — |
| 1:05 | Practice Start | Students add one pinned section to their site. Choose which section is the "showpiece." Optional: add parallax to a background. |
| 1:35 | Closing | Homework: refine pinned section, prepare for peer review Day 2 |

**Deliverables assigned:**
- Practice 9-1: The Deep (start in class, due before Day 2)

---

### Day 2: Peer Review + Polish
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | "Your site is built. Now it needs another pair of eyes." |
| 0:05 | Peer Review Protocol | Walk through the feedback form. What to look for: clarity, pacing, metaphor, accessibility, delight. |
| 0:15 | Engage: Peer Review | Swap with a partner. 15 minutes to scroll through, test, and fill out feedback form. Then swap roles. |
| 0:45 | Break | — |
| 0:55 | Feedback Debrief | What surprised you? What common issues appeared? Quick group discussion. |
| 1:05 | Polish Workshop | Remaining time: address peer feedback, performance pass (Lighthouse), final content edit. |
| 1:30 | Closing | Final build due Sunday. Presentation prep for Week 10. |

**Deliverables assigned:**
- Build 9-1: The Refinement (final polish + deploy, due Sunday)
- Engage 9-1: Peer Review (in-class)
- Reflect 9-1: Visual Notes (final reflection, due Sunday)

---

## Activities

| Type | Activity | Points | Due |
|------|----------|--------|-----|
| Learn 9-1 | Scrollytelling Craft | — | Before Day 1 |
| Practice 9-1 | The Deep | 10 | Before Day 2 |
| Engage 9-1 | Peer Review | 10 | Day 2 |
| Build 9-1 | The Refinement | 10 | Sunday |
| Reflect 9-1 | Visual Notes | 10 | Sunday |

> See `learn/`, `practice/`, `build/`, `engage/`, and `reflect/` folders for activity files.

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| ScrollTrigger `pin` | Deep | Pinned sections, pin-spacing, layout implications |
| Parallax scrolling | Practical | Layered y-offsets at different speeds |
| Horizontal scroll | Exposure | Shown as stretch goal, not required |
| Performance optimization | Practical | Lighthouse, will-change, GPU layers |
| Peer review | Structured | Feedback form with specific criteria |
| Cross-browser testing | Practical | Chrome, Firefox, Safari quick check |
| Deployment | Practical | GitHub Pages, clean URLs |

---

## Project Milestone

**Project 2: "The Long Way Down"** — Week 9 checkpoint (FINAL before submission)

- [ ] At least 1 pinned section ("showpiece" moment)
- [ ] Peer review completed and feedback documented
- [ ] Peer feedback addressed (at least 2 changes based on feedback)
- [ ] `prefers-reduced-motion` fully implemented
- [ ] Keyboard navigable (Tab through all sections)
- [ ] Color contrast passing WCAG AA
- [ ] Semantic HTML verified (heading hierarchy, landmarks)
- [ ] Markers removed
- [ ] Performance: no major jank or lag
- [ ] Deployed to GitHub Pages
- [ ] Linked from portfolio

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **Pinning** | Locking a section in the viewport while scroll-linked content animates within it |
| **Pin-spacing** | Extra space ScrollTrigger adds to the page to accommodate the pinned section's scroll range |
| **Parallax** | Layers moving at different speeds to create a sense of depth |
| **Lighthouse** | Chrome DevTools audit tool for performance, accessibility, best practices |
| **GPU acceleration** | Using the graphics card for animation — triggered by `transform` and `opacity` |
| **will-change** | CSS hint that tells the browser to optimize an element for upcoming changes |
| **Peer review** | Structured feedback from a classmate focused on specific criteria |

---

## Common Struggles & Solutions

| Struggle | Solution |
|----------|----------|
| Pinned section breaks layout below it | ScrollTrigger adds `pin-spacing` automatically. If layout shifts, check for elements with `position: fixed` or `z-index` conflicts. |
| Pinned section is the wrong height | Adjust `end: "+=100%"` — this means "pin for 100% of viewport height of scroll." Change the percentage to adjust scroll range. |
| Parallax looks choppy | Use `scrub: 1` for smoothing. Reduce the Y offset. Simpler parallax performs better. |
| Peer feedback is vague | Guide students: "Don't say 'it's good.' Say 'I got confused at section 3 because the metaphor shifted.' Be specific." |
| Lighthouse score is low | Common fixes: compress images, remove unused CSS, add `loading="lazy"` to images below the fold. |
| Site looks different in Safari | ScrollTrigger generally handles cross-browser, but test pinned sections in Safari specifically. Some CSS transforms render differently. |

---

## Code Patterns Introduced

### Pinned Section
```javascript
const showpieceTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#the-system',
    start: 'top top',
    end: '+=150%',          // pin for 1.5x viewport height of scroll
    pin: true,
    scrub: 1,
  }
});

// Content animates while pinned
showpieceTl
  .from('#the-system .step-1', { opacity: 0, y: 30 })
  .to('#the-system .step-1', { opacity: 0 }, '+=0.5')
  .from('#the-system .step-2', { opacity: 0, y: 30 })
  .to('#the-system .step-2', { opacity: 0 }, '+=0.5')
  .from('#the-system .step-3', { opacity: 0, y: 30 });
```

### Simple Parallax
```javascript
gsap.to('.section__bg', {
  y: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: '.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  }
});
```

### Horizontal Scroll (Stretch Goal)
```javascript
const horizontal = gsap.timeline({
  scrollTrigger: {
    trigger: '#horizontal-section',
    start: 'top top',
    end: () => '+=' + document.querySelector('.horizontal-track').scrollWidth,
    pin: true,
    scrub: 1,
  }
});

horizontal.to('.horizontal-track', {
  x: () => -(document.querySelector('.horizontal-track').scrollWidth - window.innerWidth),
  ease: 'none'
});
```

---

## Accessibility Focus

**This is the full audit week.** Before submission, check:

- [ ] **Keyboard:** Tab through the entire site. Can you reach all content?
- [ ] **Reduced motion:** Enable "Reduce Motion" in System Settings. Is all content visible? No animation?
- [ ] **Color contrast:** Run a contrast checker on all text/background pairs from your tokens
- [ ] **Semantic HTML:** Check heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] **Landmarks:** `<main>`, `<section>`, `<header>` present?
- [ ] **Screen reader test:** Turn on VoiceOver (Cmd+F5 on Mac). Navigate by headings. Does the content make sense?

---

## Connections

| Connects To | How |
|-------------|-----|
| Week 7 | GSAP timelines now used inside pinned sections |
| Week 8 | ScrollTrigger config extended with pin and parallax |
| Week 10 | This is the last build week — Week 10 is presentation |
| Project 2 | Final submission due Sunday |

---

## Instructor Notes

- Pinning is the "wow" moment of the course. Demo it well on Day 1.
- The peer review protocol needs to be STRUCTURED. Without guidance, students say "it looks good" and learn nothing. The feedback form is essential.
- Some students will be behind. That's okay — the peer review still helps them identify priorities.
- Horizontal scroll is a stretch goal. Only advanced students should attempt it. Pin-spacing math is tricky.
- The accessibility audit is real, not performative. Walk students through VoiceOver briefly if they've never used it.
- Remind students: markers off, site deployed, linked from portfolio. These are easy points to lose.

---

## Materials Checklist

- [ ] Pinning demo file prepared
- [ ] Parallax example ready
- [ ] Peer review feedback form printed/shared
- [ ] Learn 9-1: Scrollytelling Craft (`learn/learn-9-1-scrollytelling-craft.md`)
- [ ] Practice 9-1: The Deep (`practice/practice-9-1-the-deep.md`)
- [ ] Engage 9-1: Peer Review (`engage/engage-9-1-peer-review.md`)
- [ ] Build 9-1: The Refinement (`build/build-9-1-the-refinement.md`)
- [ ] Reflect 9-1: Visual Notes (`reflect/reflect-9-1-visual-notes.md`)
- [ ] Resources page updated
