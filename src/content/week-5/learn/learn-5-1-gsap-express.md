# Learn + Practice: GSAP Express

**Points:** 10
**Time Estimate:** 2–3 hours (course + animation work)

---

## TL;DR
Sign up for the free GSAP 3 Express course. Complete the Tweening Basics section. Then animate 5 SVGs in a single CodePen using what you learned — one from last week, four new ones that connect to your Project 2 theme.

---

## Submit
CodePen URL to Canvas

---

## Part 1: Learn — GSAP 3 Express

Sign up (free):
**[Creative Coding Club: GSAP 3 Express](https://www.creativecodingclub.com/courses/FreeGSAP3Express)**

### Required: Complete the Full Course

**Getting Started** (3 lessons)

| Lesson | Format | Time |
|--------|--------|------|
| Welcome to the course | Text | — |
| Our Development Environment | Video | 5 min |
| GSAP 3 Express Notes and Instructions | Download | — |

**Tweening Basics** (10 lessons)

| Lesson | Format | Time |
|--------|--------|------|
| GSAP Object: Tweens and Timelines | Video | 6 min |
| Basic Tween | Video | 9 min |
| from() and fromTo() | Video | 3 min |
| Special Properties: Delay and Repeat | Video | 3 min |
| Special Property: Ease | Video | 4 min |
| Reading Ease Curves | Video | 13 min |
| Special Property: Stagger | Video | 5 min |
| Tween Control | Video | 5 min |
| Why from() Tweens Glitch and Stop Working! | Video | 4 min |
| transformOrigin | Video | 6 min |

**Timelines** (5 lessons)

| Lesson | Format | Time |
|--------|--------|------|
| Why Timelines are Important | Video | 4 min |
| Basic Timeline Intro | Video | 7 min |
| Position Parameter Visualizer | Video | 7 min |
| Basic Timeline Position | Video | 5 min |
| Timeline Control and Labels | Video | 5 min |

**Keyframes** (2 lessons)

| Lesson | Format | Time |
|--------|--------|------|
| Percentage-Based Keyframes | Video | 17 min |
| Percentage-Based Keyframes Part 2: Benefits, Downsides and Challenges | Video | 10 min |

**Animated Buttons: Hover Effects** (3 lessons)

| Lesson | Format | Time |
|--------|--------|------|
| Simple Rollover / Hover Effects | Video | 8 min |
| Rollover / Hover Effects for Multiple Elements | Video | 9 min |
| Constant Hover Pulse with Smooth Reset | Video | 13 min |

**Final Project** (6 lessons)

| Lesson | Format | Time |
|--------|--------|------|
| Project Setup | Video | 4 min |
| Basic Animation | Video | 5 min |
| Timeline Defaults | Video | 4 min |
| GSDevTools | Video | 3 min |
| Tweak Timing | Video | 8 min |
| Remove Flash of Un-styled Content (FOUC) | Video | 6 min |

**Bonus (optional but recommended)**

| Lesson | Format | Time |
|--------|--------|------|
| Hole Jumper Part 1 | Video | 14 min |
| Hole Jumper Part 2: Finessing the Animation | Video | 18 min |
| Typewriter Effect with TextPlugin | Text | — |
| Getting Started with SplitText | Text | — |
| SplitText Word by Word | Text | — |
| SplitText Line by Line | Text | — |

Total required watch time: ~3 hours. Work through it over the week — don't try to do it all in one sitting. Follow along with each exercise in the videos.

---

### What You're Learning

**Three tween methods:**

```js
// Animate TO these values
gsap.to(".target", {x: 400, duration: 1});

// Animate FROM these values (back to natural position)
gsap.from(".target", {opacity: 0, y: -50});

// Animate FROM one set of values TO another
gsap.fromTo(".target", {x: 0}, {x: 400});
```

**Special properties** — these control *how* the animation runs, they don't get animated:

| Property | What it does | Example |
|----------|-------------|---------|
| `duration` | How long | `duration: 2` (2 seconds) |
| `delay` | Wait before starting | `delay: 0.5` |
| `repeat` | How many times | `repeat: -1` (forever) |
| `yoyo` | Play back and forth | `yoyo: true` |
| `ease` | Rate of change | `ease: "bounce"` |
| `stagger` | Offset multiple targets | `stagger: 0.2` |

**Performance properties** — animate these for smooth results:
`x`, `y`, `rotation`, `scale`, `scaleX`, `scaleY`, `skewX`, `skewY`, `opacity`

These map to CSS transforms behind the scenes. GSAP handles the translation for you.

---

## Part 2: Practice — Animate 5 SVGs

Build all 5 animations in **one CodePen** if you can. Separate pens are OK if you need them.

Use your SVG from Week 4 (minimum 1) plus new ones. Every SVG should connect to your **Project 2 theme/metaphor**.

### Requirements

- [ ] **5 SVGs** animated with GSAP (1 from Week 4, 4 new)
- [ ] All SVGs relate to your **Project 2 theme**
- [ ] At least **3 different tween methods** (`to`, `from`, `fromTo`)
- [ ] At least **3 different eases** — explore the [Ease Visualizer](https://gsap.com/docs/v3/Eases)
- [ ] **Stagger** on at least one animation with multiple elements
- [ ] **Repeat** or **yoyo** on at least one animation
- [ ] GSAP loaded via CDN in CodePen settings
- [ ] Code is commented — label what each animation does

### How to Think About It

Your animations should connect to your story. Ask:

| Question | Example |
|----------|---------|
| What moves in your metaphor? | Ingredients sliding into a bowl, seeds growing, landmarks appearing |
| What's the mood? | Playful `bounce`? Elegant `power2.out`? Urgent `back.out`? |
| What draws attention? | The biggest motion = the most important element |
| What repeats? | Rain falling, a heartbeat, waves — use `repeat: -1` |

### SVG + GSAP

GSAP animates any SVG attribute or CSS property on SVG elements:

```js
// Animate SVG element position + opacity
gsap.from(".icon", {y: -30, opacity: 0, stagger: 0.2});

// Animate fill color
gsap.to(".shape", {fill: "#ff6b6b", duration: 1});

// Animate stroke
gsap.from("#my-path", {strokeDashoffset: 500, duration: 2});

// Scale from center
gsap.from(".circle", {scale: 0, transformOrigin: "center center"});
```

**SVGs use `fill` and `stroke`** instead of `background-color` and `border-color`. GSAP handles both.

Read more: **[GSAP SVG Guide](https://gsap.com/resources/svg)**

### Setting Up Your CodePen

1. Open a new CodePen
2. Go to **Settings → JS**
3. Search for **gsap** and add the core library
4. Paste your SVG code directly in the HTML panel
5. Write your tweens in the JS panel

**Bonus plugins** (free on CodePen — search for them in Settings → JS):
- **DrawSVGPlugin** — animate SVG stroke drawing
- **MorphSVGPlugin** — morph one shape into another
- **MotionPathPlugin** — animate elements along a path
- **MotionPathHelper** — visual tool for editing motion paths

These are premium plugins but GreenSock makes them free on CodePen. Search for each by name in the JS settings search bar.

---

## Evaluation

| Criteria | Points |
|----------|--------|
| 5 SVGs animated with GSAP | 3 |
| Variety: 3+ methods, 3+ eases, stagger, repeat/yoyo | 3 |
| Animations connect to Project 2 theme | 2 |
| Code is commented and organized | 2 |

---

## Troubleshooting

**Animation doesn't play:**
Check the browser console (F12). Common issue: GSAP not loaded. Make sure it's added in CodePen Settings → JS, not pasted in the HTML.

**SVG element won't move:**
SVG elements don't respond to `top`/`left`. Use GSAP's `x` and `y` properties instead — these use transforms and work on everything.

**Colors won't animate:**
Make sure you're using `fill` or `stroke` (not `background-color`) for SVG elements. Also check that you're targeting the right element — sometimes the `<path>` is inside a `<g>` group.

**Stagger not working:**
You need multiple elements with the same selector. If you only have one `.icon`, stagger has nothing to offset. Use a class on multiple elements or target a parent's children: `"#icons path"`.

**from() tween glitches on reload:**
This is covered in the course. Short answer: `from()` tweens can flash the end state before animating. Use `fromTo()` if this happens, or set `immediateRender: false`.

---

## Resources

### GSAP Essentials
- [GSAP Getting Started](https://gsap.com/resources/get-started) — Official beginner guide
- [GSAP Easing Guide](https://gsap.com/resources/getting-started/Easing) — Understanding eases
- [GSAP Ease Visualizer](https://gsap.com/docs/v3/Eases) — Pick your eases here (bookmark this)

### SVG + GSAP
- [GSAP SVG Guide](https://gsap.com/resources/svg) — Everything about animating SVGs
- [DrawSVGPlugin Docs](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/) — Stroke animation
- [MorphSVGPlugin Docs](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/) — Shape morphing
- [MotionPathPlugin Docs](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) — Path animation
- [MotionPathHelper Docs](https://gsap.com/docs/v3/Plugins/MotionPathHelper/) — Visual path editor

### Course
- [Creative Coding Club: GSAP 3 Express](https://www.creativecodingclub.com/courses/FreeGSAP3Express) — Free (sign up required)

---

## Connection to Project 2

These are your first GSAP animations — the same tool you'll use for your scrollytelling site. Think of this as your animation sketchbook:

- **The SVGs** you animate here can become visual assets in your scroll sections
- **The eases** you choose set the tone for your story's motion
- **The techniques** (stagger, repeat, fromTo) are exactly what you'll use with ScrollTrigger in Weeks 8–9

Start building your motion vocabulary now. You'll need it.
