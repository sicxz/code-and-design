# Week 1 Resources: Systems That Respond

**Topics:** CSS Variables, Design Tokens, Theme Switching, DOM Basics, querySelector, addEventListener

---

## Assigned (Required)

Complete these before class:

### Technical Tutorial



- [Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) — MDN
  - Work through the whole thing. Same patterns we use in class.

### Conceptual Reading
- [Design Systems 101](https://www.figma.com/blog/design-systems-101-what-is-a-design-system/) — Figma Blog
  - What is a design system? Why does it matter?

- [Intro to Design Systems](https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems) — Figma Course
  - Focus on Overview + Foundations lessons

---

## Reference (Lookup, Not Reading)

MDN documentation for when you need the exact syntax:

- [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [Using CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

---

## Video

### Essential (Watch These)

- [CSS Variables in 100 Seconds](https://www.youtube.com/watch?v=NtRmIp4eMjs) — Fireship
  - Fast, clear introduction. Perfect for visual learners.

- [CSS Custom Properties](https://www.youtube.com/watch?v=5QIiWIoCmsc) — Kevin Powell
  - First 10 minutes cover everything you need. Kevin is the CSS whisperer.

### Recommended

- [Learn CSS Variables in 5 Minutes](https://www.youtube.com/watch?v=oZPR_78wCnY) — Web Dev Simplified
  - Another take on the same concepts. Sometimes a different voice helps.

- [JavaScript DOM Manipulation](https://www.youtube.com/watch?v=y17RuWkWdn8) — Web Dev Simplified
  - 20 minutes covering querySelector, addEventListener, classList. Excellent foundation.

### Hidden Gems

- [The Secret Mechanism of CSS Custom Properties](https://www.youtube.com/watch?v=PHO6TBq_auI) — Lea Verou (CSS Day)
  - Conference talk. Goes deeper than tutorials. Watch when you want to understand *why* CSS variables work the way they do.

- [Building a Design System with CSS Custom Properties](https://www.youtube.com/watch?v=wI80oS3KLxY) — Una Kravets (Google Chrome Developers)
  - Shows how tokens scale to real systems. Great for seeing the big picture.

- [Designing in the Browser](https://www.youtube.com/playlist?list=PLNYkxOF6rcIDI0QtJvW6vKonTxn6azCsD) — Una Kravets (YouTube Playlist)
  - Entire series on CSS features. Pick episodes that interest you.
    Maybe this? 
  - https://www.youtube.com/watch?v=xococe8wq_g&list=PLNYkxOF6rcIDI0QtJvW6vKonTxn6azCsD&index=2

---

## Deep Dive (Articles & Essays)

### Design Systems

- [What are Design Tokens?](https://css-tricks.com/what-are-design-tokens/) — CSS-Tricks
  - Clear explanation of tokens as a concept, not just CSS variables.

- [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) — Nathan Curtis (EightShapes)
  - The definitive article on design tokens. A bit long, but foundational.

- [Design Tokens for Dummies](https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71) — Louis Chenais
  - Approachable intro if the Nathan Curtis article feels heavy.

### Dark Mode & Preferences

- [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) — CSS-Tricks
  - Covers everything: CSS-only, JS toggle, localStorage, system preference. Bookmark this.

- [prefers-color-scheme: Hello darkness, my old friend](https://web.dev/articles/prefers-color-scheme) — web.dev
  - Google's guide to color scheme preference. Good examples.

### Hidden Gems (Articles)

- [The Power of CSS Custom Properties](https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/) — Michael Riethmuller (Smashing Magazine)
  - Published 2018 but still relevant. Shows advanced patterns.

- [A user's guide to CSS variables](https://increment.com/frontend/a-users-guide-to-css-variables/) — Lea Verou (Increment)
  - From the inventor of many CSS features. Concise and insightful.

- [The Languages Which Almost Became CSS](https://eager.io/blog/the-languages-which-almost-became-css/) — Zack Bloom
  - Not directly related, but fascinating history. Good for understanding *why* CSS is the way it is.

---

## Tools

### Playgrounds

- [CodePen](https://codepen.io/) — Quick experiments, easy to share
- [JSFiddle](https://jsfiddle.net/) — Another option, good for JS focus
- [StackBlitz](https://stackblitz.com/) — Full IDE in browser, good for larger experiments

### Color Tools

- [Realtime Colors](https://www.realtimecolors.com/) — Preview your color palette on a real layout
  - **Hidden gem.** Paste your tokens and see how they look immediately.

- [Coolors](https://coolors.co/) — Generate color palettes
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) — WebAIM accessibility checker
- [Who Can Use](https://www.whocanuse.com/) — See your colors through different vision types

### Token Systems

- [Open Props](https://open-props.style/) — Ready-made CSS custom properties
  - See how a mature token system is organized. Use as reference or scaffold.

- [Pollen](https://www.pollen.style/) — Minimal CSS variables library
  - Simpler than Open Props. Good inspiration for your own system.

### DevTools

- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/) — Official reference
- [Firefox DevTools User Docs](https://firefox-source-docs.mozilla.org/devtools-user/) — Firefox alternative

---

## Inspiration

Real-world examples of theme systems:

### Excellent Implementations

- [Stripe.com](https://stripe.com) — Toggle in footer, beautiful transitions
- [Josh Comeau's Blog](https://www.joshwcomeau.com/) — Animated sun/moon toggle, playful
- [MDN Web Docs](https://developer.mozilla.org) — Theme picker in header
- [GitHub](https://github.com) — Multiple themes (light, dark, auto, high contrast)
- [Vercel](https://vercel.com) — Clean system preference detection

### Design System References

- [Tailwind CSS](https://tailwindcss.com/docs) — See their color system approach
- [Radix Colors](https://www.radix-ui.com/colors) — Accessible color scales
- [Carbon Design System](https://carbondesignsystem.com/) — IBM's enterprise system
- [Shoelace](https://shoelace.style/) — Web components with great token architecture

### Student-Level Examples

- [Dark Mode Toggle CodePen Collection](https://codepen.io/collection/DgYaMj) — Various approaches
- [Theme Switcher Examples](https://codepen.io/search/pens?q=theme+switcher) — Search CodePen for inspiration

---

## Books (Optional, Quarter-Long)

These are references, not required reading:

- *Design Systems* by Alla Kholmatova (Smashing Magazine)
  - The definitive book on design systems. Read a chapter at a time.

- *Laying the Foundations* by Andrew Couldwell
  - Practical design system implementation. Good for project planning.

- *Refactoring UI* by Adam Wathan & Steve Schoger
  - Design advice for developers. Helps with token decisions.

---

## Week 1 Cheat Sheet

```css
/* Define tokens */
:root {
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
}

/* Use tokens */
body {
  background: var(--color-surface);
  color: var(--color-text);
}

/* Override for dark mode */
body.dark {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

```javascript
// Find the button
const toggle = document.querySelector('.theme-toggle');

// Listen for clicks
toggle.addEventListener('click', function() {
  // Toggle the class
  document.body.classList.toggle('dark');
});
```

---

## Next Week Preview

Week 2 adds:
- `localStorage` — remembering user choice
- `prefers-color-scheme` detection in JavaScript
- `prefers-reduced-motion` — respecting accessibility preferences
