# Learn: The Story Teller Tutorial (Optional)

**Points:** 5 (Extra Credit)
**Time Estimate:** 60–90 minutes
**Platform:** Browser

---

## TL;DR

An interactive JavaScript tutorial for students who want extra practice with DOM fundamentals before the theme toggle labs.

---

## Who Should Do This

This tutorial is **optional**. Do it if:

- [ ] You struggled with Practice 1-1 (The Story Teller)
- [ ] JavaScript syntax still feels confusing
- [ ] You want extra practice before the theme toggle
- [ ] You want extra credit

**Skip it if:** You're comfortable with `querySelector`, `addEventListener`, and `classList`.

---

## The Tutorial

📘 **[Open The Story Teller Tutorial](story-teller-tutorial/index.html)**

This interactive walkthrough teaches JavaScript fundamentals through building a click-through story:

| Section | Concept | What You Learn |
|---------|---------|----------------|
| 1 | The Grappling Hook | `document.querySelector` |
| 2 | The Memory | Variables (`let`, `const`), Arrays |
| 3 | The Listener | `addEventListener`, `currentStep++` |
| 4 | The Bouncer | `if` statement, `.length` |
| 5 | The Assembly Line | `forEach` loop, `classList` |
| 6 | Putting It Together | Complete solution, debugging |

---

## Features

- **Two-column layout:** Tutorial on left, CodePen workspace on right
- **Progress tracking:** Checkboxes save your progress (localStorage)
- **Reflections:** Write notes that auto-save
- **Hints:** Expandable help when you're stuck

---

## Submit (Extra Credit)

If completing for extra credit, submit:

1. Screenshot showing 100% progress in the tutorial
2. Link to your completed CodePen

---

## Connection to Theme Toggle

Everything you learn here applies directly to the theme toggle:

| Story Teller | Theme Toggle |
|--------------|--------------|
| `querySelector('.story-image')` | `querySelector('.theme-toggle')` |
| `addEventListener('click', ...)` | `addEventListener('click', ...)` |
| `classList.add('active')` | `classList.toggle('dark')` |
| `if (currentStep < captions.length)` | `if (savedTheme)` |

Same patterns, different application.
