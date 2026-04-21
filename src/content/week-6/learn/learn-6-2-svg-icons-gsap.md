# Learn: Animating SVG Icons with GSAP + AI

**Points:** — (not graded, but required before Day 2)
**Time Estimate:** 60–90 minutes

---

## TL;DR

Follow this 11-step tutorial to build two animated bell icons in CodePen. You'll practice GSAP tweens (from Week 5), then learn two new plugins: DrawSVGPlugin and ScrollTrigger. Work with an AI model as your coding partner throughout.

---

## Submit

Share your CodePen URL during the Day 2 check-in.

---

## What You'll Build

A CodePen with two bell icons: one that rings on click, and one that draws itself in on scroll then undraws as you keep scrolling. You'll work with an AI model (ChatGPT, Claude, or Gemini) as your coding partner throughout.

## Before You Start

Open a new pen on [codepen.io](https://codepen.io/). You'll be adding external libraries, writing HTML, CSS, and JS across the following steps.

Pick your AI model and keep it open in another tab. You'll be prompting it for help at each stage.

---

## Step 1: Get the Bell Icon Rendering

Lucide is an open-source icon library that renders icons as inline SVGs. Your first task is to get a single bell icon showing up in CodePen.

**Your tasks:**

- Find the Lucide CDN link and add it to your CodePen's external scripts (Settings → JS)
- Add the HTML markup for a Lucide bell icon
- Write the JavaScript to initialize Lucide so the icon actually renders

**Inspect the result.** Right-click the bell and choose "Inspect." What did Lucide do to your HTML? What element is actually in the DOM now?

**If you're stuck, try asking your model:**

> "How do I use Lucide icons via CDN in a CodePen? I don't have access to npm imports."

---

## Step 2: Make the Bell Bigger

The default icon is 24×24 pixels. Make it larger.

**Your tasks:**

- Use CSS to increase the bell's size
- Think about what selector targets the rendered SVG (hint: check what you saw in the inspector from Step 1)

**If you're stuck, try asking your model:**

> "How do I target a rendered Lucide icon with CSS to change its size? What selector should I use?"

---

## Step 3: Change the Bell's Color

Lucide icons are stroke-based SVGs. Make the bell a color other than black.

**Your tasks:**

- Figure out which CSS property controls the color of a stroke-based SVG
- Apply it to your bell

**Pause and notice:** Try setting both `color` and `stroke` — what happens with each? Why?

**If you're stuck, try asking your model:**

> "How do I change the color of a Lucide SVG icon with CSS? Is it fill or stroke?"

---

## Step 4: Make the Bell Ring with GSAP

Now add animation. You'll use GSAP (GreenSock Animation Platform) to create a ringing motion.

**Your tasks:**

- Add GSAP via CDN to your CodePen's external scripts
- Write a GSAP timeline that rotates the bell back and forth like it's ringing
- Think about: where should the rotation pivot from? The center? The top? What looks more natural for a bell?

**Key concept:** A bell swings from where it hangs, not from its center. GSAP has a property that controls this.

**If you're stuck, try asking your model:**

> "How do I animate an SVG element with GSAP to create a ringing bell effect? How do I set the pivot point so it swings from the top?"

---

## Step 5: Add a Second Bell

Add a second bell icon to your HTML. Give each bell its own class (`.bell-1` and `.bell-2`) so you can target them independently.

**Your tasks:**

- Add the HTML for both bells with distinct classes
- Make them different colors using CSS
- Confirm both render correctly (remember: you only need to call `createIcons()` once)

**If you're stuck, try asking your model:**

> "I have two Lucide bell icons with different classes. How do I style them with different colors? Do I need to call createIcons() for each one?"

---

## Step 6: Stack the Bells

Position both bells so they overlap — one on top of the other. This is a CSS layout challenge.

**Your tasks:**

- Use CSS positioning to stack the two bells
- Make sure both are visible (their different colors should help)

**If you're stuck, try asking your model:**

> "How do I use CSS to position two SVG elements so they're stacked directly on top of each other?"

---

## Step 7: Ring Bell 1 on Click

Make the first bell ring only when you click it, not automatically.

**Your tasks:**

- Modify your GSAP timeline so it starts paused
- Add a click event listener that triggers the animation
- Consider: should you use `.play()` or `.restart()` on click? What's the difference if someone clicks while it's already ringing?

**If you're stuck, try asking your model:**

> "How do I make a GSAP timeline play only when an element is clicked? What's the difference between play() and restart()?"

---

> **Checkpoint:** Steps 1–7 reinforced your Week 5 GSAP skills — tweens, timelines, event listeners, transform origin. Steps 8–11 introduce two new GSAP plugins you'll use throughout Project 2: **DrawSVGPlugin** and **ScrollTrigger**.

---

## Step 8: Draw Bell 2 with DrawSVGPlugin

GSAP's DrawSVGPlugin animates the stroke of an SVG path — making it look like the icon is being drawn by hand.

**Important:** DrawSVGPlugin is a paid GSAP plugin, but GSAP provides free trial versions that work on CodePen. You need to find the correct CDN URL for the CodePen trial.

**Your tasks:**

- Find and add the DrawSVGPlugin trial CDN to your external scripts
- Register the plugin with GSAP
- Start with the bell's strokes hidden, then animate them to fully drawn
- Try using `stagger` to draw each path element one at a time instead of all at once

**Pause and observe:** Lucide's bell is made of multiple `<path>` and `<line>` elements. Inspect the SVG to see them. The `stagger` property animates each one sequentially.

**If you're stuck, try asking your model:**

> "How do I use GSAP's DrawSVGPlugin in CodePen? Where is the trial CDN? How do I animate an SVG so it looks like it's being drawn?"

---

## Step 9: Drive the Draw Animation with ScrollTrigger

Instead of the draw animation playing immediately, tie it to the user's scroll position.

**Your tasks:**

- Add the ScrollTrigger CDN to your external scripts
- Register ScrollTrigger with GSAP
- Connect your draw timeline to scroll using ScrollTrigger's `scrub` property
- Add enough content/spacing in your HTML so the page is actually scrollable

**Critical detail:** ScrollTrigger won't work if there's nothing to scroll. You need the page to be taller than the viewport.

**Turn on `markers: true`** in your ScrollTrigger config so you can see exactly where the animation starts and ends.

**If you're stuck, try asking your model:**

> "How do I use GSAP ScrollTrigger to tie a timeline to scroll position? The animation isn't working — could it be because my page isn't scrollable?"

---

## Step 10: Undraw on Continued Scroll

Once the bell is fully drawn, continuing to scroll should undraw it — reversing the stroke animation.

**Your tasks:**

- Add a second tween to your timeline that animates `drawSVG` back to `0%`
- Adjust your ScrollTrigger's `end` value so there's enough scroll range for both the draw and undraw
- Scroll up and down — the whole sequence should scrub in both directions

**If you're stuck, try asking your model:**

> "I have a DrawSVG animation on a scrubbed ScrollTrigger timeline. How do I add a second phase that undraws the SVG if the user keeps scrolling?"

---

## Step 11: Ring at Full Draw

When the bell reaches 100% drawn (the midpoint of your scroll range), trigger the ring animation.

**The challenge:** The ring animation shouldn't be scrubbed — it needs to play freely at normal speed regardless of scroll. But it should fire at the right moment in the scrubbed timeline.

**Your tasks:**

- Create a separate ring timeline (paused)
- Figure out how to trigger it when the draw-in tween completes, even though the parent timeline is scrubbed
- Look into GSAP's tween callbacks

**If you're stuck, try asking your model:**

> "I have a scrubbed ScrollTrigger timeline. How do I fire a separate, non-scrubbed animation when a specific tween in that timeline completes? What callbacks are available on GSAP tweens?"

---

## Reflection

Look at what you've built and consider:

- How does `scrub: true` change the relationship between animation and user input?
- What's the difference between an animation that *plays* and one that's *driven* by scroll?
- When would you use `onComplete` vs. adding more tweens to the same timeline?
- How did working with an AI model change your debugging process?

---

## Reference: External Scripts Order

Your final CodePen should have these external scripts in Settings → JS, in this order:

1. Lucide (CDN)
2. GSAP core
3. DrawSVGPlugin (CodePen trial)
4. ScrollTrigger

The exact URLs are part of the exercise — use your AI model to find them if needed.

---

## Connection to Course

| This Tutorial | Connects To |
|--------------|-------------|
| Steps 1–7: GSAP tweens, timelines, events | Week 5 GSAP fundamentals |
| Step 8: DrawSVGPlugin | Your scrollytelling SVG illustrations |
| Steps 9–11: ScrollTrigger + scrub | Week 6 parallax practice, Week 7+ project build |
| AI as coding partner | Workflow for all future assignments |

The skills from this tutorial — especially ScrollTrigger and DrawSVG — are the exact tools you'll use to bring your scrollytelling site to life.
