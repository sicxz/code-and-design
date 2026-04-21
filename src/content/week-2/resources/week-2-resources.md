# Week 2 Resources: Remembering Choices

**Topics:** localStorage, System Preferences, prefers-reduced-motion, Data Attributes, State Patterns

---

## Assigned (Required)

### For Visual Notes

- [prefers-reduced-motion: Sometimes less movement is more](https://web.dev/articles/prefers-reduced-motion) — web.dev
  - Essential reading. Why reduced motion matters.

- [prefers-color-scheme: Hello darkness, my old friend](https://web.dev/articles/prefers-color-scheme) — web.dev
  - Deep dive into color scheme detection.

- [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/) — CSS-Tricks
  - Focus on the "Preference Features" section.

---

## Reference (Lookup)

### localStorage

- [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) — MDN
- [Storage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) — MDN
- [Storage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) — MDN

### Preference Detection

- [Window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) — MDN
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) — MDN
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — MDN

### Data Attributes

- [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) — MDN
- [Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) — MDN

---

## Video

### Essential

- [localStorage in JavaScript](https://www.youtube.com/watch?v=k8yJCeuP6I8) — dcode (10 min)
  - Quick, focused tutorial on localStorage basics.

- [Respecting User Preferences](https://www.youtube.com/watch?v=jmepqJ5UbuM) — Una Kravets (12 min)
  - Media queries for user preferences. Excellent overview.

### Recommended

- [Dark Mode in CSS](https://www.youtube.com/watch?v=6YrOGKmGTCY) — Kevin Powell (20 min)
  - Complete dark mode implementation with CSS and JS.

- [Reduced Motion Explained](https://www.youtube.com/watch?v=VuetGN-YwJU) — Stephanie Eckles (8 min)
  - Practical examples and why it matters.

### Hidden Gems

- [The Complete Guide to localStorage](https://www.youtube.com/watch?v=GihQAC1I39Q) — James Q Quick (25 min)
  - More comprehensive than most tutorials.

- [Accessible Animations](https://www.youtube.com/watch?v=i3JT_emPrIY) — Marcy Sutton (30 min, conference talk)
  - Deep dive into motion accessibility. Watch for the big picture.

- [Your Preference, Not My Choice](https://www.youtube.com/watch?v=BgYJNr2P-Q4) — Michelle Barker (CSSConf EU)
  - Philosophical and practical. Why respecting preferences matters.

---

## Deep Dive (Articles)

### localStorage & State

- [A Complete Guide to localStorage](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/) — Smashing Magazine
  - Older but still excellent fundamentals.

- [Data Attributes in JavaScript](https://css-tricks.com/a-complete-guide-to-data-attributes/) — CSS-Tricks
  - Complete guide to data-* attributes and dataset.

### Dark Mode

- [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) — CSS-Tricks
  - Comprehensive. Covers everything from CSS to JS to localStorage.

- [Respecting Users' Motion Preferences](https://webkit.org/blog/7551/responsive-design-for-motion/) — WebKit
  - Apple's perspective on motion design.

### Hidden Gems

- [Building Your Own Accessibility Settings](https://www.tpgi.com/building-your-own-accessible-theming/) — TPGi
  - Goes beyond theme toggle to font size, contrast, motion.

- [The Prefers-* Media Queries](https://12daysofweb.dev/2023/preference-queries/) — 12 Days of Web
  - All the preference queries in one place.

- [Designing for Reduced Motion](https://alistapart.com/article/designing-for-reduced-motion/) — A List Apart
  - Thoughtful approach to essential vs. decorative motion.

---

## Tools

### Storage Inspection

- **Chrome DevTools Application Tab** — Built-in localStorage viewer
- **Firefox Storage Inspector** — Similar functionality

### Testing Preferences

- [Polypane](https://polypane.app/) — Browser with built-in preference toggles
- **Chrome DevTools Rendering Tab** — Emulate prefers-color-scheme and reduced-motion

### Accessibility Testing

- [WAVE](https://wave.webaim.org/) — Web accessibility evaluation tool
- [axe DevTools](https://www.deque.com/axe/devtools/) — Accessibility testing extension

---

## Inspiration

### Excellent Theme Implementations

- [Stripe.com](https://stripe.com) — Toggle in footer, smooth transitions
- [GitHub](https://github.com) — Multiple themes including high contrast
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — Clean theme switcher
- [Josh Comeau](https://www.joshwcomeau.com/) — Animated sun/moon toggle

### Accessibility-First Sites

- [GOV.UK](https://gov.uk) — Government accessibility standards
- [A11y Project](https://www.a11yproject.com/) — Checklist and resources
- [Inclusive Components](https://inclusive-components.design/) — Pattern library with accessibility baked in

---

## Week 2 Cheat Sheet

### localStorage Basics
```javascript
// Save
localStorage.setItem('theme', 'dark');

// Load
const theme = localStorage.getItem('theme');

// Remove
localStorage.removeItem('theme');
```

### System Preference Detection
```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

### Preference Hierarchy
```javascript
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}
```

### Reduced Motion (CSS)
```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

### Ternary Operator
```javascript
// condition ? valueIfTrue : valueIfFalse
prefersDark ? 'dark' : 'light'
```

---

## Testing Reduced Motion

### How to Enable

**macOS:**
System Preferences → Accessibility → Display → Reduce motion

**Windows 10/11:**
Settings → Ease of Access → Display → Show animations

**iOS:**
Settings → Accessibility → Motion → Reduce Motion

**Android:**
Settings → Accessibility → Remove animations

---

## Project 1 Checklist

- [ ] `variables.css` with semantic tokens
- [ ] `data-theme` based system (not classList)
- [ ] localStorage saves on toggle
- [ ] localStorage loads on page load
- [ ] System preference fallback for first-time visitors
- [ ] `prefers-reduced-motion` handled in CSS
- [ ] Applied to at least one portfolio page
- [ ] Deployed to GitHub Pages
- [ ] No console errors

---

## Next Week Preview

Week 3: SVG as Interactive Material
- Inline SVG in the DOM
- Targeting SVG elements with CSS
- Interactive states with the same data-* pattern
- Accordion component (moved from this week)
