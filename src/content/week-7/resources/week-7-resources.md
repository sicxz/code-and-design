# Week 7 Resources: The Rough Cut

---

## Assigned (Before Day 2)

| Resource | Type | Time |
|----------|------|------|
| [MDN: `<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) | Docs | 5 min |
| [MDN: `<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) | Docs | 5 min |
| [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) | Docs | 8 min |

---

## Reference

| Resource | Why |
|----------|-----|
| [Responsive Design Basics (web.dev)](https://web.dev/responsive-web-design-basics/) | Core responsive layout principles |
| [MDN: `min()`](https://developer.mozilla.org/en-US/docs/Web/CSS/min) | Useful for responsive containers/spacing |
| [MDN: `clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) | Fluid type/spacing values (optional) |
| [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) | Token implementation in CSS |
| [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | Contrast verification for token pairs |

---

## Video

| Resource | Time | Why |
|----------|------|-----|
| [Kevin Powell (search): semantic HTML](https://www.youtube.com/@KevinPowell/search?query=semantic%20html) | varies | Clear explanations of semantic structure and accessible markup |
| [Chrome Developers (search): responsive design basics](https://www.youtube.com/results?search_query=responsive+design+basics+chrome+developers) | varies | Quick refresh on device-width testing and layout thinking |

---

## Deep Dive

| Resource | Why |
|----------|-----|
| [MDN: Responsive Design Mode (Firefox docs)](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) | Device-size testing workflow |
| [web.dev: Learn CSS](https://web.dev/learn/css/) | Deeper CSS refresh if students are stuck on layout |
| [A List Apart: Responsive Web Design](https://alistapart.com/article/responsive-web-design/) | Conceptual framing for why responsive layout matters |

---

## Tools

| Tool | Use |
|------|-----|
| [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | Check text/background contrast pairs |
| Browser DevTools Device Toolbar | Test spacing and hierarchy on mobile widths |
| Figma + browser side-by-side | Translate sections without guessing |

---

## Inspiration

| Example | What to Notice |
|---------|---------------|
| [Awwwards: Editorial](https://www.awwwards.com/websites/editorial/) | Layout rhythm and section pacing for story pages |
| [Awwwards: Minimal](https://www.awwwards.com/websites/minimal/) | Restraint, hierarchy, and spacing choices |

---

## Cheat Sheet: Rough Cut Layout Basics

```css
/* LINK ORDER (HTML)
tokens.css -> layout.css -> animations.css */

/* TOKENS */
:root {
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --color-surface-primary: #ffffff;
  --color-text-primary: #111111;
}

/* BASE LAYOUT */
body {
  margin: 0;
  background: var(--color-surface-primary);
  color: var(--color-text-primary);
}

.section {
  min-height: 100svh;
  padding: var(--space-xl) var(--space-md);
}

.section__content {
  width: min(72rem, 100%);
  margin-inline: auto;
}

/* MOBILE PASS */
@media (max-width: 48rem) {
  .section {
    padding: var(--space-lg) var(--space-sm);
  }
}
```
