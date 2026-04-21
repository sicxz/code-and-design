# Build: The Blueprint

**Points:** 75

---

## TL;DR

Design your complete scrollytelling site in Figma. 6–8 sections. (or more!), each mapped to your metaphor and a JS concept. Set up design tokens as Figma variables with light/dark mode. Annotate where parallax and GSAP animations will go.

**This is in figma btw.** 

---

## Submit

1. **Add your file to the class Figma Project:**https://www.figma.com/files/team/1590525066201132416/project/557432720?fuid=821425603950455766   
2. **Name your Figma file:** `the-blueprint-lastname`
3. **Submit the Figma link in Canvas:** share with **edit access**
4. **Double check:** all sections, variables, and modes are visible in the file

---

## Overview

Before you write any code, design first. It saves time, reduces wrong turns, and helps your site feel like one coherent experience instead of a stack of separate sections.

This build pulls together your Week 5 and Week 6 work: your metaphor, style tile, narrative map, and your first experiments with ScrollTrigger and parallax. By Sunday, you should have a complete visual blueprint you can build from next week.

---

## What You're Building

A Figma file with three parts:

1. **Style Tile** — Your visual direction (from Week 5, complete and/or update if needed)
2. **Narrative Map** — Your section-by-section content plan (from Week 5, complete and/or update if needed)
3. **Full Page Design** — 6–8 (or more) Figma frames showing the actual layout of each scroll section

---

## Part 1: Style Tile

*If you completed this in Week 5, review and refine. If not, create it ASAP(Like right now!!!).*

Your style tile defines the visual language without designing full pages. One Figma frame showing:

- [ ] **Colors:** Palette with hex values (primary, surface, text, accent — for both light and dark modes)
- [ ] **Typography:** Heading + body fonts with type scale (sizes for h1, h2, body, small)
- [ ] **Icons:** 3–5 icons that match your metaphor
- [ ] **Illustration/Image Style:** 2–3 visual references showing the vibe
- [ ] **Vibes:** 3–5 adjectives describing the feeling
- [ ] **Spacing:** Spacing scale (sm, md, lg, xl) with pixel values
- [ ] **Guidelines:** Layout direction, self-imposed rules

---

## Part 2: Narrative Map

*If you completed this in Week 5, review and refine. If not, create it now.*

A table mapping your 5–7 sections:

| Section | Metaphor Chapter | JS Concept | What Happens | Visual/Animation Notes |
|---------|-----------------|------------|--------------|----------------------|
| 1: Hero | Opening of your story | Why learn code? | Hook the reader | Parallax entrance, GSAP timeline |
| 2–7 | Story chapters | Variables, events, conditionals, etc. | Teach through metaphor | ScrollTrigger reveals, parallax layers |
| 8-10: Closing | Where the story leads | Reflection | Resolve the narrative | Gentle fade, quiet exit |

---

## Part 3: Full Page Design

This is the new work. Turn your style tile and narrative map into actual section designs.

### Create 5–7 Figma Frames

One frame per scroll section. Think of these as storyboards — each frame is a scene.

**For each frame:**
- [ ] **Layout:** Full-bleed, contained, split, centered? What's the structure?
- [ ] **Content placement:** Where does text go? Images? SVGs? Code snippets?
- [ ] **Visual hierarchy:** What's the biggest element? What draws the eye first?
- [ ] **Style tile applied:** Colors, typography, spacing from your tokens
- [ ] **Motion annotations:** Mark where GSAP, ScrollTrigger, or parallax will happen (use sticky notes, arrows, or a color-coded system)

### Visual Rhythm Check

Lay all frames side by side in Figma. Scroll through them like a filmstrip:

- [ ] Do adjacent sections look different enough?
- [ ] Is there variety in layout? (Not all centered, not all left-aligned)
- [ ] Does the pacing feel right? (Dense → spacious → dense → spacious)
- [ ] Does the hero feel like a hook?
- [ ] Does the closing feel like a resolution?

### Parallax Annotations

For at least one section (hero recommended), mark the parallax layers:

- [ ] **Background layer:** What element? How much does it move? (slow)
- [ ] **Midground layer:** What element? How much does it move? (medium)
- [ ] **Foreground layer:** What element? How much does it move? (fast or stationary)

---

## Part 4: Figma Variables + Light/Dark Mode

Your design tokens must live as Figma variables — not just colors on a style tile.

### Figma Variables (Required)

- [ ] **Color primitives:** Raw hex values (e.g., `blue-500: #3B82F6`)
- [ ] **Semantic color tokens:** Named by purpose (e.g., `surface-primary`, `text-primary`, `accent`, `surface-secondary`)
- [ ] **Typography tokens:** Font family, sizes for each heading level and body
- [ ] **Spacing tokens:** `space-sm`, `space-md`, `space-lg`, `space-xl` with pixel values

### Light/Dark Mode (Required)

- [ ] Create two modes for your color variables in Figma
- [ ] **Light mode:** Default — your primary color scheme
- [ ] **Dark mode:** Inverted surfaces and text, adjusted contrast
- [ ] Test: does your design read well in both modes?
- [ ] Contrast check: both modes pass WCAG AA (use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- [ ] Accent colors: these often stay the same across modes, but check contrast

**If light/dark feels overwhelming:** Start simple. Swap your surface and text colors. That's the core of dark mode. Accents usually stay the same.

### Export Path

When you're ready to build in HTML (Week 7), you'll export these variables to a `tokens.css` file using a Figma plugin or manually. For now, just get the variables set up correctly in Figma.

---

## Section Planning Guide

### Section 1: Hero / Opening
- **Metaphor chapter:** The beginning of your story
- **JS concept:** Why learn code? What brought you here?
- **Visual approach:** Full-bleed? Large typography? Illustration?
- **Animation note:** This will have a GSAP entrance timeline + parallax layers

### Sections 2–6: Story Chapters
For each middle section, decide:
- **Metaphor chapter:** What part of your metaphor does this represent?
- **JS concept:** Which concept are you explaining? (variables, events, conditionals, classList, tokens, localStorage)
- **Visual approach:** Text-heavy or image-driven? How does it contrast with the previous section?
- **Animation note:** How might ScrollTrigger reveal this content? Is there a parallax opportunity?

### Section 7: Closing / What's Next
- **Metaphor chapter:** Where the story leads
- **JS concept:** Reflection, looking forward
- **Visual approach:** Quieter, resolved, a breath
- **Animation note:** Simple entrance, not GSAP-heavy — a gentle exit

---

## Design Tips

**Visual rhythm matters.** Alternate between:
- Full-bleed sections and contained sections
- Text-heavy and image-driven
- High-contrast and quieter moments
- Dense and spacious

**Think about scroll pacing.** Taller sections = more scroll time = slower reading. Shorter sections = quicker pace. Use height intentionally.

**The hero is your hook.** Give it the most design attention. First impressions drive engagement. This is also where parallax will have the biggest impact.

**Don't design for one mode.** Switch between light and dark as you design. Make sure both modes tell the same story with the same visual strength.

---

## Evaluation

| Criteria | Points |
|----------|--------|
| Style tile complete (colors, type, icons, vibes, spacing) | 10 |
| Narrative map with 5–7 sections mapped to metaphor + JS concepts | 10 |
| 5–7 Figma frames with layouts and content placement | 25 |
| Visual rhythm and variety across sections | 5 |
| Figma variables set up (primitives + semantic tokens) | 10 |
| Light/dark mode configured and contrast-checked | 5 |
| Motion/parallax annotations on at least one section | 10 |

---

---

## Inspiration

See the MIlanote Inspiration Board: https://app.milanote.com/1VPCwk1O6aPUfe?p=bneQoS8Q1HM

