# Learn: Rough Cut Prep (HTML, Tokens, and Responsive Layout)

**Points:** — (not graded, but required before Day 2)
**Time Estimate:** 20–30 minutes

---

## TL;DR
Re-open your Blueprint + Motion Map, review semantic HTML + tokens + responsive layout basics, and come to class ready to translate your Figma sections into a working HTML/CSS site.

---

## What to Do

### 1. Re-open Your Week 6 Files (Required — 5 min)
Have these open before class:
- Your Figma Blueprint (all section frames)
- Your Motion Map board (Milanote)
- Your metaphor/narrative map notes

**Goal:** You should be able to answer:
- Which 5–7 sections are in your site?
- What is the hero layout?
- Which section needs the most space?
- Which elements are likely to need special treatment later (polish/motion/showpiece)?

### 2. Review Semantic HTML Structure (Required — 5–10 min)
Read/skim:
- [MDN: HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN: `<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
- [MDN: `<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)

Focus on:
- Proper heading hierarchy (`h1` once, then `h2`s for sections)
- Landmarks (`main`, `header`, `footer` if you use them)
- Meaningful structure before styling

### 3. Review CSS Custom Properties + Layout Basics (Required — 10 min)
Read/skim:
- [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [MDN: `min()`](https://developer.mozilla.org/en-US/docs/Web/CSS/min)
- [web.dev: Responsive web design basics](https://web.dev/responsive-web-design-basics/)

Focus on:
- Using variables/tokens in real layout CSS
- Container widths and readable line length
- Mobile-first adjustments (spacing/type/layout)

### 4. Review Baseline Accessibility Checks (Required — 5 min)
Read:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

Bring this mental model into class:
- The site must be readable before animation exists
- Contrast and hierarchy matter in the rough cut, not just the final polish
- Motion/accessibility refinements continue in the upcoming Polish Pass

---

## What to Notice

1. **Blueprint → Build is translation, not tracing**
Your Figma file tells you visual intent. HTML/CSS should preserve hierarchy and rhythm, not pixel-copy every detail immediately.

2. **The rough cut is about structure + readability**
This week is not about perfect polish. It is about getting the whole story on the page with good structure and a functional visual system.

3. **Browser layout is a design stage**
You are still designing while you build. The browser will reveal spacing and hierarchy issues that Figma hides.

4. **Accessibility starts before animation**
Semantic structure and contrast belong in the rough cut — not as a late cleanup.

---

## Bring to Class

- Your section order finalized (5–7 sections)
- A draft title + subtitle for the hero
- Real text (or rough real text) for at least 2 sections
- Your `tokens.css` export (or manual CSS variables list from Figma)
