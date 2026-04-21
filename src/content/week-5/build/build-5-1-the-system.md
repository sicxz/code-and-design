# Build: The Blueprint

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 90–120 minutes
**Due:** Before next class

---

## TL;DR
Design a style tile for your scrollytelling site and map out a loose narrative. Two deliverables: a Figma style tile and a narrative map that connects your metaphor chapters to JS concepts.

---

## Submit
1. Figma file link (Canvas) — style tile page visible
2. Narrative map — either in Figma, a Google Doc, or as `narrative.md` in your repo

---

## Overview

You've chosen your metaphor. Now give it a visual identity and a story structure.

The **style tile** answers: *What does my story look and feel like?*
The **narrative map** answers: *What happens in each section?*

Both of these feed directly into next week when you build the HTML structure.

---

## Part 1: Style Tile

A style tile is a design artifact that captures the visual direction of a project — without designing full pages. Think of it as a mood board with rules.

Create a page in your Figma file called **"Style Tile"** that includes:

### Colors
- **Primary palette** — 3–5 core colors that set the mood
- **Surface colors** — backgrounds for sections (at least 2)
- **Text colors** — primary and secondary
- **Accent** — one color that draws the eye
- Show the colors as swatches with hex values

### Typography
- **Heading font** — what it is, where it's from (Google Fonts, Adobe, etc.)
- **Body font** — readable at paragraph length
- Show a type scale: heading sizes (xl, lg, md) and body text (base, sm)
- Show a sample sentence or two in each style

### Icons
- 3–5 icons that fit your metaphor and visual style
- Source them from [Lucide](https://lucide.dev/), [Phosphor](https://phosphoricons.com/), or draw your own
- Show them at the size you'd use them

### Illustration / Image Style
- What kind of visuals support your metaphor?
- Photos? Illustrations? Abstract shapes? SVG graphics?
- Include 2–3 examples (can be reference images, not original work yet)
- If using SVGs, include the one from Week 4

### Vibes
- 3–5 adjective words that describe the feeling (e.g., "warm, handmade, patient" or "sharp, electric, fast")
- 1–2 reference sites or images that capture the energy you're going for

### Guidelines
- Spacing approach — tight and dense or open and airy?
- Layout direction — centered and vertical? Asymmetric? Full-bleed images?
- Any rules you're setting for yourself (e.g., "no more than 2 fonts," "every section has one SVG")

---

## Part 2: Narrative Map

Map your 5–7 sections. This doesn't need to be polished — it's a plan, not final content. Use the Chapters from the project brief as your starting point.

Fill out a table like this (in Figma, a doc, or markdown):

| # | Section Name | Metaphor Chapter | JS Concept | What Happens | Visual Notes |
|---|-------------|-----------------|------------|-------------|-------------|
| 1 | Hero | — | The hook | [What's the opening moment? What pulls someone in?] | [Full-screen? Image? Animation idea?] |
| 2 | | First Contact | console.log, DevTools | [How does your metaphor introduce "talking to the browser"?] | |
| 3 | | Naming Things | Variables (let, const) | [How does your metaphor explain holding/naming things?] | |
| 4 | | The Switch | Conditionals, classList | [How does your metaphor show decision-making?] | |
| 5 | | The System | Design tokens, CSS custom properties | [How does your metaphor reveal the pattern?] | |
| 6 | | The Memory | localStorage | [How does your metaphor show persistence?] | |
| 7 | Closing | — | Reflection | [Where does the story land? What's next?] | |

**You don't need all 7.** Pick the 5–7 that work best for your metaphor. Combine or skip chapters that don't fit.

**The content column doesn't need final copy.** A few bullet points or a sentence describing what happens is enough. You'll write the real content when you build the HTML.

---

## Complete Criteria

### Style Tile
- [ ] Colors: palette with hex values, surface + text + accent
- [ ] Typography: heading + body fonts, type scale shown
- [ ] Icons: 3–5 icons that fit the metaphor
- [ ] Illustration/image style: 2–3 visual references
- [ ] Vibes: 3–5 adjective words
- [ ] Guidelines: at least 2 rules you're setting for yourself

### Narrative Map
- [ ] 5–7 sections mapped out
- [ ] Each section connects a metaphor chapter to a JS concept
- [ ] Brief description of what happens in each section
- [ ] At least one section has visual/animation notes

---

## Why This Matters

Next week you'll build the HTML structure and start coding. If you don't know what your sections contain or what your site looks like, you'll stall.

The style tile gives you design decisions to implement.
The narrative map gives you content to put in each section.

Without both, next week becomes "stare at a blank `index.html`."

---

## Tips

**For the style tile:**
- Don't overthink it. A single Figma frame with organized swatches, type samples, and references is enough.
- Look at [Style Tiles](http://styletil.es/) for the concept (the site is old but the idea holds).
- Your P1 design system is a reference — you've done this before at a smaller scale.

**For the narrative map:**
- Talk through your metaphor out loud. What story are you actually telling?
- The hero and closing are the hardest. Start with the middle chapters — they're more concrete.
- If a JS concept doesn't fit your metaphor naturally, don't force it. Better to have 5 strong sections than 7 weak ones.

---

## Connection to Course

This is the design foundation for everything that follows:
- **Next week:** Your style tile becomes `tokens.css`. Your narrative map becomes your HTML sections.
- **Weeks after:** Your visual notes about animation become real GSAP + ScrollTrigger code.
- **Polish week:** You'll review against the standards you set here.

The decisions you make this week define the project. Make them intentionally.
