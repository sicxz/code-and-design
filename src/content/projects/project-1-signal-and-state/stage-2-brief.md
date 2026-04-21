# Project 1: Signal & State — Stage 2

> **Not currently scheduled** — This enhancement stage may be added later in the quarter.

**Enhancement:** Fluid tokens with clamp()

---

## Core Challenge

Upgrade your token system with fluid typography and spacing using `clamp()`.

---

## Requirements

- [ ] Add fluid font sizes using `clamp()`
  - At minimum: base font size, heading size
- [ ] Add fluid spacing using `clamp()`
  - At minimum: one spacing token
- [ ] Tokens scale smoothly between mobile and desktop
- [ ] No media queries needed for these fluid values
- [ ] Update README with rationale for your fluid values

---

## What is clamp()?

```css
/* Syntax: clamp(minimum, preferred, maximum) */

:root {
  /* Font that scales from 1rem to 1.25rem based on viewport */
  --font-size-base: clamp(1rem, 0.875rem + 0.5vw, 1.25rem);

  /* Spacing that scales from 1rem to 2rem */
  --space-md: clamp(1rem, 0.5rem + 2vw, 2rem);
}
```

The middle value (`0.875rem + 0.5vw`) creates the fluid behavior. As viewport grows, the value smoothly transitions between min and max.

---

## Evaluation Focus

| Criteria | What We're Looking For |
|----------|----------------------|
| **Fluidity** | Do values scale smoothly? (no jumps) |
| **Readability** | Is text comfortable at all sizes? |
| **Rationale** | Do your chosen ranges make sense? |
| **Integration** | Do fluid tokens work with your existing system? |

---

## Recommended Formula

For font sizes:
```css
/* clamp(min, base + scale, max) */
--font-size-base: clamp(1rem, 0.9rem + 0.25vw, 1.125rem);
--font-size-lg: clamp(1.25rem, 1rem + 0.5vw, 1.5rem);
--font-size-xl: clamp(1.5rem, 1.25rem + 1vw, 2rem);
```

For spacing:
```css
--space-sm: clamp(0.5rem, 0.375rem + 0.5vw, 0.75rem);
--space-md: clamp(1rem, 0.75rem + 1vw, 1.5rem);
--space-lg: clamp(1.5rem, 1rem + 2vw, 2.5rem);
```

---

## Resources

- [CSS clamp() — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Modern Fluid Typography — Smashing Magazine](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)
- [Utopia Fluid Type Scale Calculator](https://utopia.fyi/type/calculator/)
- [Min-Max-Clamp Calculator](https://min-max-calculator.9elements.com/)

---

## Submission

1. Update your existing Project 1 deployment
2. Update README with Stage 2 additions
3. Note which tokens are now fluid

---

## Connection to Course

Fluid tokens connect to the core question: "How does it adapt to me?" Your system now adapts not just to user preference (light/dark) but also to their device and context.
