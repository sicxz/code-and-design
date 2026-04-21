# Learn: ScrollTrigger Preview

**Points:** — (not graded, but required before Week 8 Day 1)
**Time Estimate:** 20 minutes

---

## TL;DR
Work through the interactive ScrollTrigger tutorial. Experience three scroll animation patterns by scrolling through them. Come to class knowing the difference between trigger, scrub, and pin.

---

## What to Do

### 1. Complete the ScrollTrigger Patterns Tutorial (Required — 20 min)
[ScrollTrigger Patterns Tutorial](/tutorials/gsap-scrolltrigger-tutorial/)

Work through all three parts. For each:
- Read the pattern explanation and the "How It Works" box
- **Scroll through the live demo slowly** — feel the concept, don't just read about it
- Copy the code block (you will use these patterns next week)
- Check each checkpoint when you understand the concept
- Write a brief reflection connecting the pattern to your project

### 2. Save Your Reflections
The tutorial saves your responses automatically. Before you leave, click **"Copy All My Responses"** at the bottom. Paste them into a note for reference in class.

---

## What to Notice

1. **Trigger vs. Scrub** — Basic trigger fires once. Scrub ties progress to scroll position. Feel the difference as you scroll through each demo.

2. **Scrub and easing** — Notice that scrub uses `ease: 'none'`. Your scroll speed provides its own easing. Adding complex easing on top feels overcooked.

3. **Pin extends height** — When a section pins, GSAP adds extra scroll distance to the page. The page gets longer. That extra distance IS the animation's timeline.

4. **Markers** — The code examples include `markers: true` for debugging. You'll use these constantly next week to fine-tune trigger positions.

5. **`start` and `end`** — These define the trigger zone. The format is always `"trigger-edge viewport-position"`. Understanding this syntax is the key to ScrollTrigger.

---

## Bring to Class

- The three ScrollTrigger patterns memorized: **trigger**, **scrub**, **pin + timeline**
- An idea for which Long Way Down sections use which pattern
- Your copied reflections from the tutorial
- Questions about anything that felt unclear — we'll address them before the lab
