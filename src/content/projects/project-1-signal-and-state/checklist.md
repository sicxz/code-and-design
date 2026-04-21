# Project 1: Signal & State — Checklist

Use this checklist before submitting.

---

## Checklist

### Tokens
- [ ] `variables.css` exists and is linked in HTML
- [ ] Color tokens defined (surface, text, accent — minimum)
- [ ] Typography tokens defined (font sizes)
- [ ] Spacing tokens defined (at least 3 values)
- [ ] Tokens are actually used in your CSS (not hardcoded values)

### Theme Toggle
- [ ] Toggle UI is present and visible
- [ ] Light mode works
- [ ] Dark mode works
- [ ] System mode works (follows OS preference)
- [ ] Toggle feedback is immediate (no delay)

### Persistence
- [ ] Theme choice saves to localStorage
- [ ] Theme persists after page refresh
- [ ] First visit respects system preference

### Accessibility
- [ ] Toggle buttons have aria-labels
- [ ] Toggle buttons are keyboard accessible (can Tab to them)
- [ ] Focus states are visible
- [ ] `prefers-reduced-motion` foundation is in CSS

### Deployment
- [ ] Site is live on GitHub Pages
- [ ] README has project description
- [ ] No console errors

---

## Quick Tests

### localStorage Test
1. Open DevTools → Application → Local Storage
2. Click your domain
3. You should see a `theme` key with your chosen value

### System Preference Test
1. Open DevTools → More Tools → Rendering
2. Scroll to "Emulate CSS media feature prefers-color-scheme"
3. Select "dark" — page should update (if theme is set to "system")

### Keyboard Test
1. Use Tab to navigate to toggle buttons
2. Press Enter or Space to activate
3. Focus ring should be visible throughout

---

## Common Issues

| Problem | Check |
|---------|-------|
| Theme doesn't persist | Is localStorage.setItem being called? |
| System mode doesn't update | Is the matchMedia listener set up? |
| Colors don't change | Are you using `var(--token-name)` not hardcoded colors? |
| Focus not visible | Did you remove default focus styles without adding custom ones? |
