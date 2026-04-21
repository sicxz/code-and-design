# Build: The Refinement

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 90–120 minutes
**Prerequisite:** Practice 9-1 + Engage 9-1 (Peer Review)

---

## TL;DR
Address peer feedback. Polish everything. Deploy. This is the final build before presentation.

---

## Submit
1. Push final version to GitHub
2. Submit GitHub Pages URL to Canvas
3. Ensure site is linked from your portfolio

---

## Overview

This is it. After this build, your scrollytelling site is done. Week 10 is presentations — no more build time. Everything you submit Sunday is what you present.

---

## What You're Doing

### Step 1: Address Peer Feedback

Review the feedback you received. Prioritize:

1. **Confusion points** — If your partner got lost, other people will too. Fix the content or transitions.
2. **Pacing issues** — Adjust scroll ranges, add breathing room, or trim overly long sections.
3. **Accessibility failures** — Any Y/N "No" from the accessibility tests needs to be fixed.

### Step 2: Accessibility Audit

Run through this checklist yourself:

- [ ] **Keyboard:** Tab through every section. All content reachable?
- [ ] **Reduced Motion:** Enable in System Settings. Everything visible? No broken layouts?
- [ ] **Contrast:** Check text on every background. Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
- [ ] **Headings:** h1 → h2 → h3 with no skipping. Run a heading check in DevTools or browser extension.
- [ ] **Landmarks:** `<main>` wraps content. Sections use `<section>`.
- [ ] **Images:** All `<img>` tags have `alt` attributes (empty `alt=""` for decorative images).

### Step 3: Performance Pass

Open Chrome DevTools → Lighthouse tab → Generate Report (Performance + Accessibility).

**Quick wins if score is low:**
- Compress images (use squoosh.app)
- Add `loading="lazy"` to images below the fold
- Remove unused CSS
- Make sure no animations use expensive properties (`box-shadow`, `filter` on scroll)

### Step 4: Final Content Edit

Read your entire site one more time. Out loud. Fix:
- Typos
- Sentences that only make sense to you
- Metaphor inconsistencies
- Sections that feel rushed or underwritten

### Step 5: Remove All Debug Code

- [ ] All `markers: true` removed from ScrollTrigger configs
- [ ] No `console.log()` statements in production code
- [ ] No commented-out code blocks
- [ ] No `TODO` comments

### Step 6: Deploy

- Push to GitHub
- Verify GitHub Pages is serving the latest version (check the deployment status)
- Link from your portfolio (add a nav link or project card)

### Step 7: Prep for Presentation

In Week 10, you'll present for 5–7 minutes. Plan:
- Live scroll-through demo
- Which section's code you'll walk through
- Your metaphor explanation (1 minute max)
- What surprised you / what you'd change

---

## Complete Criteria

- [ ] Peer feedback addressed (at least 2 visible changes)
- [ ] Accessibility audit passed (all checklist items)
- [ ] Performance: no major jank or layout shifts
- [ ] All content proofread
- [ ] All markers and debug code removed
- [ ] Deployed to GitHub Pages
- [ ] Linked from portfolio
- [ ] README updated with project description

---

## Connection to This Week

This is the last build. Next week you present. The work you submit Sunday is your final deliverable for Project 2: The Long Way Down — 50% of your course grade.
