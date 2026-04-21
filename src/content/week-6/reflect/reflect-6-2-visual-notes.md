# Reflect: Visual Notes — ScrollTrigger + Parallax

**Points:** 10 (Complete/Incomplete)

---

## Submission

- **What:** A PDF scan of your notes
- **Name your file:** `week-5-notes-scrolltrigger-lastname.pdf`
- **Upload to Canvas** by Sunday at midnight

---

## This Week's Focus

Create visual notes from the GSAP ScrollTrigger and parallax resources below.

You're learning a new relationship between **user input and animation.** Up until now, animations play on a timer. ScrollTrigger changes that — scroll becomes the controller.

Your notes should help you understand:

- How scroll position replaces time as an animation driver
- What `scrub`, `trigger`, `start`, `end`, and `markers` do
- How parallax uses different speeds to create depth
- Which GSAP tween methods (`gsap.to`, `gsap.from`, `gsap.fromTo`) fit different situations

---

## Required Resources (Watch/Read All)

### Video 1: GSAP ScrollTrigger — Getting Started (Required)
**Watch:** [GreenSock ScrollTrigger Introduction](https://gsap.com/scroll/)
**Time:** ~10 minutes

**Focus on:**
- What does `scrub` do to an animation?
- What are `markers` and why do you turn them on?
- What's the difference between `trigger`, `start`, and `end`?

### Video 2: Parallax Scrolling with GSAP (Required)
**Watch:** Search YouTube: "GSAP ScrollTrigger parallax tutorial" — pick one under 10 minutes from a channel you trust (DesignCourse, Developedbyed, or similar).

**Focus on:**
- What creates the illusion of depth?
- How do layers move at different speeds?
- What CSS property is being animated? (Hint: it's `y` via `transform`)

### Video 3: GSAP Plugins Overview (Recommended)
**Browse:** [GSAP Plugins — What's Available](https://gsap.com/docs/v3/Plugins/)
**Time:** ~5 minutes

**Look for:**
- **DrawSVGPlugin** — what can it animate?
- **ScrollTrigger** — how does it connect to tweens and timelines?
- **MorphSVGPlugin, MotionPathPlugin** — what else could you use?
- Where do you find the free CodePen trial CDN links?

### Reading: ScrollTrigger Documentation (Required)
**Read:** [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
**Time:** ~10 minutes

**Focus on these properties:** `trigger`, `start`, `end`, `scrub`, `markers`, `toggleActions`

---

## Requirements

- **Pages:** 2–4 pages (5.5" × 8.5" each)
- **Medium:** Moleskine Cahier notebook
- **Tools:** Pen (any color that scans well)
- **Style:** Hand-written with visual elements (sketches, diagrams, connections, etc.)

---

## What to Include

Document anything that helps you process and remember the material:

- Key concepts and definitions
- Quick sketches or diagrams
- Code snippets you want to remember
- Questions that came up
- Connections to your scrollytelling project
- Personal insights or "aha" moments

---

## Focus Questions

### Question 1: Time vs. Scroll

ScrollTrigger changes what drives an animation.

**Draw a comparison diagram:**

| | Without ScrollTrigger | With ScrollTrigger | With Scrub |
|---|---|---|---|
| What drives it? | Time (seconds) | Scroll position (triggers) | Scroll position (1:1) |
| When does it play? | Page load | When element enters viewport | As you scroll |

Sketch what each feels like from the user's perspective. When would you use each?

### Question 2: The ScrollTrigger Anatomy

Draw a diagram of how ScrollTrigger works. Include:

- A viewport (the browser window)
- A trigger element (a section on the page)
- Where `start` and `end` are relative to the viewport
- Where `markers` appear
- What happens in the scroll range between start and end

Label: `trigger`, `start`, `end`, `scrub`, `markers`

### Question 3: Parallax = Layers at Different Speeds

Draw a parallax scene with three layers:

- **Background** — moves slowest (small `y` value, e.g., `-50`)
- **Midground** — moves at medium speed (e.g., `-150`)
- **Foreground** — moves fastest or stays still (e.g., `-300` or `0`)

Show with arrows how each layer moves as the user scrolls down. Why does this create the feeling of depth?

### Question 4: Tween Methods Cheat Sheet

Sketch or write out the three GSAP tween methods:

```
gsap.to()     → animate FROM current state TO new values
gsap.from()   → animate FROM values TO current state
gsap.fromTo() → animate FROM start values TO end values
```

For each, draw a quick example: What would `gsap.from(".heading", { opacity: 0, y: 50 })` look like? What about `gsap.to(".bg", { y: -100 })`?

**Which method would you use for:**
- A heading that fades in from below? (`gsap.from`)
- A background that moves up on scroll? (`gsap.to`)
- An element that goes from small and invisible to full size? (`gsap.fromTo`)

### Question 5: Your Project Connection

Think about your scrollytelling site. Sketch one section and annotate:

- Where would you use ScrollTrigger?
- Would it be scrubbed or triggered?
- Could parallax work here? Which elements would be on which layer?
- Which tween method fits?

---

## Tips

- Don't worry about perfection — focus on capturing ideas
- Draw the diagrams — ScrollTrigger is spatial, so visual notes work better than text
- Copy code snippets by hand — writing it helps you remember the syntax
- These are YOUR learning artifacts

---

## Grading

- ✓ **Complete** (2–4 pages with genuine engagement)
- ✗ **Incomplete** (less than 2 pages or minimal effort)

---

## Inspiration

For visual note-taking techniques:

- [Google's Sketchnotes Gallery](https://www.google.com/search?q=sketchnotes+gallery)
- Search **#sketchnotes** on social media for community examples
