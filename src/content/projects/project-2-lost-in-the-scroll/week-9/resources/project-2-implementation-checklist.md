# Project 2 Implementation Checklist (Week 8-10)

Use this as the single source of truth for progress. Prioritize `Must` items first.

---

## Checkpoint 1: Week 8 Monday (Structure Ready)

### Must
- [ ] Full HTML/CSS structure is built (all planned sections exist)
- [ ] Site deployed in a new GitHub repo
- [ ] Story draft is at least 90% complete

### Should
- [ ] Semantic structure in place (`main`, `section`, heading hierarchy)
- [ ] Tokens are used consistently (no major hardcoded style drift)

### Could
- [ ] One section already has a simple GSAP entrance animation

---

## Checkpoint 2: Week 8 Wednesday (Motion Foundation)

### Must
- [ ] Story is 100% written
- [ ] GSAP motion implemented across hero + core story sections
- [ ] `prefers-reduced-motion` guard is active for all GSAP code
- [ ] No blocking console errors

### Should
- [ ] At least 2 easing values chosen intentionally for story tone
- [ ] Motion pacing tested with one partner

### Could
- [ ] First ScrollTrigger section implemented and tuned with markers

---

## Checkpoint 3: Week 9 Monday (Scroll Implementation)

### Must
- [ ] ScrollTrigger is registered and active
- [ ] All major sections are scroll-triggered
- [ ] At least one section uses `scrub`
- [ ] Trigger timing is calibrated (`start`/`end`, not all defaults)

### Should
- [ ] One showpiece section starts using `pin: true`
- [ ] Partner can read content comfortably at normal scroll pace

### Could
- [ ] Simple parallax layer added to one section

---

## Checkpoint 4: Week 9 Wednesday (Debug + Polish)

### Must
- [ ] Pinned showpiece section works without layout jumps
- [ ] Markers removed in production build
- [ ] Accessibility pass complete (keyboard, contrast, reduced motion)
- [ ] Site is deployed and current on GitHub Pages

### Should
- [ ] Lighthouse check completed (Performance + Accessibility)
- [ ] README updated with metaphor and tech stack

### Could
- [ ] Optional polish (progress indicator, extra section transitions)

---

## Final Readiness: Week 10 Presentation

### Must
- [ ] Live site URL works from a clean browser session
- [ ] Portfolio links to the project
- [ ] Student can explain one section's HTML + GSAP + ScrollTrigger code
- [ ] Student can explain at least one bug they solved and how

### Should
- [ ] 5-7 minute presentation flow rehearsed once

---

## Debug Priority Order (When Time Is Tight)

1. Shipping blockers (deploy broken, JS crashing, unreadable content)
2. Accessibility blockers (reduced motion, keyboard, contrast)
3. Story clarity + pacing issues
4. Visual polish and stretch features
