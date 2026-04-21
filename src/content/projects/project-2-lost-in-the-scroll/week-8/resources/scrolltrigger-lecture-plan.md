# Week 8 Day 1 Lecture Plan: ScrollTrigger Without Overwhelm

**Class length:** 90 minutes
**Goal for today:** Students understand ScrollTrigger mental model and implement one working section.

---

## Outcomes

By the end of class, students can:

- Explain `trigger`, `start`, `end`, and `markers`
- Register ScrollTrigger correctly
- Convert one existing GSAP animation into a scroll-triggered animation
- Debug trigger timing using markers

---

## Run of Show

| Time | Segment | Instructor Moves | Student Output |
|------|---------|------------------|----------------|
| 0:00-0:08 | Opening context | Show one polished scrollytelling reference and point out where scroll controls pacing | Shared mental model |
| 0:08-0:18 | Concept framing | Explain: "scroll is timeline control" (not decoration) | Vocabulary ready |
| 0:18-0:35 | Live demo 1 | Add plugin, register, convert one tween to use `scrollTrigger` | Students mirror setup |
| 0:35-0:45 | Live demo 2 | Show `start`/`end` changes and markers in real time | Students see debugging workflow |
| 0:45-1:15 | Build sprint | Students implement on one section; you rotate for blockers | One working section each |
| 1:15-1:25 | Debug clinic | Group top bugs and fixes on board | Shared troubleshooting notes |
| 1:25-1:30 | Exit check | Quick thumbs check against 4-item exit ticket | Progress verified |

---

## Live Demo Script (Minimal)

### 1) Load scripts in order

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
<script src="scripts/main.js"></script>
```

### 2) Register plugin

```javascript
gsap.registerPlugin(ScrollTrigger);
```

### 3) Convert one tween

```javascript
gsap.from('#chapter-1 h2', {
  opacity: 0,
  y: 24,
  duration: 0.7,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#chapter-1',
    start: 'top 80%',
    end: 'top 50%',
    markers: true
  }
});
```

### 4) Add scrub on one visual

```javascript
gsap.to('#chapter-1 .chapter-visual', {
  y: -40,
  ease: 'none',
  scrollTrigger: {
    trigger: '#chapter-1',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
    markers: true
  }
});
```

---

## Exit Ticket (End of Class)

- [ ] ScrollTrigger plugin is loaded and registered
- [ ] One section animation is tied to scroll
- [ ] Markers visible and used for tuning
- [ ] Student can explain why their `start` value makes sense

---

## Homework (Light, High Value)

- Finish writing any remaining story text (target: 100%)
- Implement GSAP motion pass across all sections before Wednesday studio
- Keep markers on while building; remove before final submission
