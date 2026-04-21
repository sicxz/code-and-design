# Week 5 Resources: The Blueprint

---

## Assigned (Before Class)

| Resource | Type | Time |
|----------|------|------|
| [Snow Fall: The Avalanche at Tunnel Creek (NYT)](https://www.nytimes.com/projects/2012/snow-fall/) | Scrollytelling Example | 10 min browse |
| [What is Scrollytelling? (Webflow)](https://webflow.com/blog/scrollytelling-guide) | Article | 5 min |

---

## Reference

| Resource | Why |
|----------|-----|
| [Figma: Guide to Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma) | Official Figma variables docs |
| [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) | How CSS variables work |
| [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | Test your token color pairs |

---

## Video

| Resource | Time | Why |
|----------|------|-----|
| [Design Tokens Explained (Kevin Powell)](https://www.youtube.com/watch?v=wDBEOHEDz5s) | 8 min | Clear explanation of tokens for designers |
| [Figma Variables Tutorial](https://www.youtube.com/watch?v=1ONxxlJnvdM) | 12 min | Hands-on variables walkthrough |
| [The Best Scrollytelling Examples (Fireship)](https://www.youtube.com/watch?v=Kx7r6wTnMzQ) | 5 min | Quick tour of what's possible |

---

## Deep Dive

| Resource | Why |
|----------|-----|
| [The Pudding](https://pudding.cool/) | Gold standard scrollytelling — browse their archive for inspiration |
| [Scrollama.js Examples](https://russellsamora.github.io/scrollama/basic/) | See how scroll-driven stories are structured (we'll use GSAP instead, but the patterns are similar) |
| [Design Systems 101 (Nielsen Norman)](https://www.nngroup.com/articles/design-systems-101/) | Why systems matter — not just what they are |

---

## Tools

| Tool | Use |
|------|-----|
| [Figma Export Plugin](https://www.figma.com/community/plugin/1332412206147274506) | Export Figma variables to CSS custom properties |
| [Open Props](https://open-props.style/) | Reference for how a mature token system is structured |
| [Coolors](https://coolors.co/) | Color palette generator if you need a starting point |
| [Type Scale](https://typescale.com/) | Visual calculator for typography scales |

---

## Inspiration

| Site | What to Notice |
|------|---------------|
| [Apple AirPods Pro](https://www.apple.com/airpods-pro/) | How scroll pacing controls the story |
| [Species in Pieces](http://www.species-in-pieces.com/) | CSS-only scroll art — proof that constraints breed creativity |
| [A Short History of Nearly Everything (Information is Beautiful)](https://informationisbeautiful.net/) | Data as visual storytelling |
| [Femme Fatale](https://www.femmefatale.paris/en) | Agency site with scroll-driven reveals — notice the rhythm |

---

## Cheat Sheet: Token Naming

```css
/* Pattern: --category-purpose-variant */

/* Colors */
--color-surface-primary      /* main background */
--color-surface-secondary    /* alternate background */
--color-text-primary         /* main text */
--color-text-secondary       /* subdued text */
--color-accent               /* emphasis/highlight */
--color-border               /* dividers */

/* Typography */
--font-heading               /* heading font family */
--font-body                  /* body font family */
--font-size-xl               /* largest size */
--font-size-base             /* default reading size */

/* Spacing */
--space-xs                   /* 0.25rem */
--space-sm                   /* 0.5rem */
--space-md                   /* 1rem */
--space-lg                   /* 2rem */
--space-xl                   /* 4rem */
--space-2xl                  /* 8rem */
```
