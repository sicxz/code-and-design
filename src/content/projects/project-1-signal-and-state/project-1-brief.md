# Project 1: Signal & State

**Theme:** Designing for Preference
**Question:** How does your site adapt to the user?
**Weight:** 20% of course grade
**Due:** End of Week 3

---

## Overview

You're building an **adaptive system** — a portfolio that responds to user preferences, remembers their choices, and respects their system settings.

This isn't just a theme toggle. It's a foundation. The design tokens you create here will carry through every project this quarter. The patterns you learn (state → CSS response) will power every interaction you build.

---

## What You're Building

1. **Design Tokens** — CSS variables that define your visual language
2. **Theme Toggle** — Light, Dark, and System modes
3. **Persistence** — localStorage remembers user choice
4. **Preference Detection** — First-time visitors get their system preference
5. **Reduced Motion** — Accessibility foundation for animation

---

## Requirements

### Design Tokens (variables.css)

Create a `variables.css` file with your design decisions in one place:

**Required categories:**
- [ ] **Colors** — surface, text, accent, border (minimum)
- [ ] **Typography** — font family, 4+ font sizes, line heights
- [ ] **Spacing** — 6+ spacing values (xs, sm, md, lg, xl, 2xl)

**Both modes:**
- [ ] Light mode values (default in `:root`)
- [ ] Dark mode values (in `[data-theme="dark"]` selector)

**Optional but encouraged:**
- Layout tokens (max-width, border-radius)
- Transition tokens (duration, easing)

### Theme Toggle

- [ ] Three modes available: **Light**, **Dark**, **System**
- [ ] Uses `data-theme` attribute on `<html>` (not classes)
- [ ] Toggle feedback is immediate (no delay)
- [ ] Buttons are keyboard accessible (Tab + Enter/Space)
- [ ] Buttons have `aria-label` attributes

### Persistence (localStorage)

- [ ] Theme choice saves when user clicks a mode
- [ ] Theme loads correctly on page refresh
- [ ] User's explicit choice overrides system preference

### System Preference Detection

- [ ] First-time visitors see their OS preference (light/dark)
- [ ] Uses `window.matchMedia('(prefers-color-scheme: dark)')`
- [ ] System mode follows OS changes live (stretch goal)

### Reduced Motion (CSS)

- [ ] `prefers-reduced-motion` media query exists
- [ ] Decorative transitions/animations are reduced or removed
- [ ] Functional motion (focus states, loading) is preserved

### Integration & Deployment

- [ ] Applied to at least one portfolio page
- [ ] Deployed to GitHub Pages
- [ ] Repository is public
- [ ] README describes your token system

---

## Starter Structure

```
your-portfolio/
├── index.html
├── styles/
│   ├── variables.css    ← tokens (load first)
│   └── styles.css       ← your styles using tokens
├── scripts/
│   └── theme.js         ← toggle logic
└── README.md
```

See `starter/` folder for example files.

---

## How to Get There

### From Figma to CSS

You've already created Figma variables in Week 2. Now export them:

1. Install the "Export Styles and Variables to CSS" plugin
2. Run it on your portfolio file
3. Copy the output into `variables.css`
4. Clean up naming to match your preferred convention

**Naming guidance:**
| Figma | CSS |
|-------|-----|
| `colors/blue/500` | `--color-blue-500` |
| `surface/primary` | `--color-surface-primary` |
| `spacing/md` | `--space-md` |

### Building the Toggle

**Start here:** You built a basic toggle in **Practice 2-1: The Switch**. That's your foundation!

```javascript
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
});
```

**Follow these guides to complete your theme system:**

→ **Practice 3-1: The Inheritance** — Export Figma tokens, upgrade to `data-theme`
→ **Practice 3-2: The Preference** — Add localStorage + system preference detection

### The Complete Pattern

**Step 1:** Define visual modes (from Practice 3-1)
```css
[data-theme="light"] {
  --color-surface: #ffffff;
  --color-text: #111111;
}

[data-theme="dark"] {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

**Step 2:** Upgrade toggle to use data-theme (from Practice 3-1)
```javascript
const toggle = document.querySelector('.theme-toggle');

// Initialize in light mode
document.documentElement.dataset.theme = 'light';

// Toggle the theme
toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = newTheme;
});
```

**Step 3:** Add localStorage persistence (from Practice 3-2)
```javascript
toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);  // Save to localStorage
});
```

**Step 4:** Load saved theme + detect system preference (from Practice 3-2)
```javascript
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // User has made a choice — respect it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}
```

### In-Class Guides

Follow these step-by-step:
- **Practice 3-1: The Inheritance** — Figma export + variables.css + data-theme toggle
- **Practice 3-2: The Preference** — localStorage + system preference detection

---

## Evaluation

| Criteria | Weight | What We're Looking For |
|----------|--------|------------------------|
| **Interaction Quality** | 35% | Does the toggle feel right? Immediate feedback? Smooth transitions? |
| **Technical Execution** | 25% | Does it work? Persistence? System detection? No console errors? |
| **Design Intention** | 25% | Do tokens make sense? Semantic naming? Cohesive visual language? |
| **Accessibility** | 15% | Reduced motion handled? Keyboard accessible? Focus visible? |

### Exemplary Work

- Interaction feels inevitable — timing, feedback, seamlessness
- Token system is thoughtful — semantic names, consistent scale
- Both themes look intentional (not just inverted colors)
- Accessibility integrated, not bolted on

### Common Pitfalls

- Theme flashes on page load (script runs too late — use `defer` or put script at end of body)
- Tokens named for appearance (`--blue`) instead of purpose (`--accent`)
- Dark mode is just inverted light mode (adjust accent colors for dark backgrounds)
- Forgetting reduced motion handling

---

## Submission

1. **Deploy** to GitHub Pages
2. **Submit** the live URL to Canvas
3. **Ensure** your repository is public
4. **Include** a README with:
   - Brief description of your token system
   - Design decisions worth noting
   - Citations for any resources used

---

## Checklist

### Tokens
- [ ] `variables.css` exists and is linked first in HTML
- [ ] Color tokens defined (surface, text, accent — minimum)
- [ ] Typography tokens defined (font sizes)
- [ ] Spacing tokens defined (at least 3 values)
- [ ] Tokens are used in CSS (no hardcoded colors)

### Toggle
- [ ] Toggle UI present and visible
- [ ] Light mode works
- [ ] Dark mode works
- [ ] System mode works
- [ ] Toggle feedback is immediate

### Persistence
- [ ] Theme saves to localStorage
- [ ] Theme persists after refresh
- [ ] First visit respects system preference

### Accessibility
- [ ] Toggle buttons have aria-labels
- [ ] Toggle is keyboard accessible
- [ ] Focus states are visible
- [ ] `prefers-reduced-motion` in CSS

### Deployment
- [ ] Live on GitHub Pages
- [ ] README has project description
- [ ] No console errors

---

## Connection to Course

This project establishes the foundation for your entire portfolio:

- **Project 2 (The Mark):** Your SVG will use these tokens for colors
- **Project 3 (The Elevator):** Your animations will respect `prefers-reduced-motion`
- **Project 4 (The Signature):** Your creative voice builds on this design language
- **Portfolio Integration:** All projects share this theme system

Start minimal. Let it grow.

---

## Resources

### Documentation
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

### Articles
- [CSS-Tricks: A Complete Guide to Dark Mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- [web.dev: prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion)

### Tools
- [Open Props](https://open-props.style/) — See how a mature token system is organized
- [Figma Export Plugin](https://www.figma.com/community/plugin/1332412206147274506) — Export variables to CSS
