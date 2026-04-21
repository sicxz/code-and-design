# Week 2 Instructor Walkthrough

A step-by-step guide to verify everything works before teaching.

---

## Pre-Class: Verify Everything Works

### Step 1: localStorage Demo

**Open in Firefox:**
```
curriculum/weeks/week-2/demos/localstorage-basics.html
```

**Test these:**

| Test | Expected Result |
|------|-----------------|
| Page loads | Form inputs visible, no console errors |
| Enter key + value, click Save | Output shows `localStorage.setItem(...)` |
| Click Get | Retrieves saved value |
| Click Show All | Lists all stored items |
| Refresh page | Data persists (shows "Found X saved item(s)") |
| Click Clear All | Clears localStorage |

**DevTools verification:**
1. Open DevTools → **Application tab** (or **Storage** in Firefox)
2. Expand **Local Storage** → click your domain
3. Verify you can see, edit, and delete entries

- [ ] localStorage demo works correctly
- [ ] Application/Storage tab accessible

---

### Step 2: Preference Hierarchy Demo

**Open in Firefox:**
```
curriculum/weeks/week-2/demos/preference-hierarchy.html
```

**Test these:**

| Test | Expected Result |
|------|-----------------|
| Clear localStorage, set system to dark | Page loads in dark mode |
| Clear localStorage, set system to light | Page loads in light mode |
| Click Dark button, refresh | Dark mode persists (overrides system) |
| Click System button | Returns to following system preference |

- [ ] Preference hierarchy demo works correctly
- [ ] System preference detection working

---

### Step 3: Test Reduced Motion

**How to toggle reduced motion:**
- **macOS:** System Preferences → Accessibility → Display → Reduce motion
- **Windows:** Settings → Ease of Access → Display → Show animations

**Or use DevTools:**
1. Open DevTools → Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
2. Type "Rendering" → Select "Show Rendering"
3. Scroll to "Emulate CSS media features"
4. Set `prefers-reduced-motion` to `reduce`

- [ ] Know how to toggle reduced motion for demos

---

### Step 4: Lab Links Verification

**Open:**
```
curriculum/weeks/week-2/labs/lab-2-1-the-memory.md
```

**Verify external links work:**
- [ ] [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [ ] [MDN: Storage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
- [ ] [MDN: Storage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
- [ ] [MDN: HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

---

## Day 1: Lecture Day

### Before Students Arrive
- [ ] localStorage basics demo open in Firefox
- [ ] Preference hierarchy demo ready
- [ ] VS Code open (for live coding)
- [ ] DevTools Application tab accessible
- [ ] Project 1 checklist ready to show

### Delivery Sequence

**1. Opening: Where We Left Off (10 min)**

Quick check:
- "Who has a working theme switcher?"
- "Who refreshes and loses their choice?"

**Live demo:**
- Toggle theme → Refresh → State resets
- "The system works, but the browser forgot. Today we give it memory."

**2. Bridge: Refactoring Approach (10 min)**

Show the shift from Week 1:
```javascript
// Week 1:
document.body.classList.toggle('dark');

// Week 2:
document.documentElement.dataset.theme = 'dark';
```

**Why data attributes?**
- Classes are for styling
- Data attributes are for state
- `dataset.theme` says "this is the current theme" — semantic, readable

**Show in DevTools:**
```html
<!-- Class approach -->
<body class="dark">

<!-- Data attribute approach -->
<html data-theme="dark">
```

**CSS targeting:**
```css
/* Class approach */
body.dark { --color-surface: #1a1a1a; }

/* Data attribute approach */
[data-theme="dark"] { --color-surface: #1a1a1a; }
```

**3. Concept: The Browser Has Memory (15 min)**

**Console exploration:**
```javascript
localStorage.setItem('test', 'hello');
localStorage.getItem('test');
```

- Close tab, reopen, run `getItem` again
- Value persists!

**Mental model:**
- localStorage is a tiny notebook the browser keeps for your site
- Key–value pairs, everything is a string

**DevTools walkthrough:**
- Application tab → Local Storage
- Show editing, deleting, clearing

**4. Demo: Making the Theme Remember (30 min)**

**Step 1: Save the user's choice**
```javascript
const buttons = document.querySelectorAll('[data-theme-toggle]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.dataset.themeToggle;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  });
});
```

**New syntax: forEach**
- `querySelectorAll` returns a list
- `forEach` runs code for each item

**Check:** Toggle theme → Look in Application tab → Value is saved

**Step 2: Load the choice on page load**
```javascript
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}
```

**Test:** Toggle to dark → Refresh → It remembers!

**5. Break (10 min)**

**6. Concept: Respecting System Preference (20 min)**

**Prompt:** "What about first-time visitors?"

**Preference hierarchy (write on board):**
1. User's saved choice (highest priority)
2. System preference
3. Your default

**Checking system preference in JS:**
```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

**The decision block:**
```javascript
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}
```

**New syntax: Ternary operator**
```javascript
prefersDark ? 'dark' : 'light'
// If true, use first value. Otherwise, second.
```

**7. Concept: prefers-reduced-motion (20 min)**

**Accessibility framing:**
- Some users get motion sick
- Some find animation distracting
- Operating systems have a "reduce motion" setting

**CSS-first approach (required):**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

**Key point:** Don't remove ALL motion — be intentional about what you reduce.

**8. Closing: Assignments (15 min)**

**Assign:**
1. Lab 2-1: "The Memory" (due before Day 2)
2. Lab 2-2: "The Preference" (due Sunday)
3. Visual Notes: User Preferences & Accessibility
4. **Project 1: "The System"** (due Sunday)

---

## Day 2: Practice Day

### Before Students Arrive
- [ ] localStorage demo open
- [ ] DevTools ready for debugging
- [ ] Project 1 checklist displayed

### Delivery Sequence

**1. Opening: Discussion and Debugging (25 min)**

**Visual notes discussion (10 min):**
- "What surprised you about reduced motion?"
- "What assumptions did you have about users?"

**Common issues to debug live (15 min):**
- Script missing `defer`
- localStorage read happens after state is applied
- Typos in data attributes
- Preference logic in wrong order

**2. Concept: State Patterns (20 min)**

**The universal interaction pattern:**
1. User acts (click, hover, focus)
2. State changes (open/closed, active/inactive)
3. CSS responds to state

**Same pattern as theme toggle, just smaller scope.**

**3. Break (10 min)**

**4. Structured Work Time (50 min)**

Students work on:
- Finishing Lab 2-1 (localStorage)
- Lab 2-2 (preferences)
- Project 1 polish

**Circulation checkpoints:**
- "Show me your localStorage entry in Application tab"
- "Toggle your system dark mode and refresh — what happens?"
- "Enable reduced motion in OS settings — does anything change?"

**5. Project 1 Requirements Review (15 min)**

**Checklist:**
- [ ] `variables.css` with semantic tokens
- [ ] `data-theme` based theme system
- [ ] localStorage persistence
- [ ] System preference fallback
- [ ] `prefers-reduced-motion` handled in CSS
- [ ] Applied to at least one portfolio page
- [ ] Deployed to GitHub Pages

**Rubric preview:**
| Criteria | Weight |
|----------|--------|
| Interaction Quality | 35% |
| Technical Execution | 25% |
| Design Intention | 25% |
| Accessibility | 15% |

**6. Closing (10 min)**

**Preview Week 3:**
- "Next week: SVG. Your logo becomes code."
- "Everything we learned about state? It applies there too."

---

## Quick Reference: Key Paths

| Resource | Path from `week-2/` |
|----------|---------------------|
| localStorage Demo | `demos/localstorage-basics.html` |
| Preference Hierarchy Demo | `demos/preference-hierarchy.html` |
| Lab 2-1 | `labs/lab-2-1-the-memory.md` |
| Lab 2-2 | `labs/lab-2-2-the-preference.md` |
| Resources | `resources/week-2-resources.md` |
| Preference Hierarchy Diagram | `resources/preference-hierarchy-diagram.md` |

---

## External Resources (Verify Links)

**Assigned Reading:**
- [ ] [prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion) — web.dev
- [ ] [prefers-color-scheme](https://web.dev/articles/prefers-color-scheme) — web.dev
- [ ] [CSS Media Queries Guide](https://css-tricks.com/a-complete-guide-to-css-media-queries/) — CSS-Tricks

**MDN References:**
- [ ] [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [ ] [Window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [ ] [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

## If Things Go Wrong

**localStorage demo won't load:**
- Check file path
- Try opening directly in browser (not through VS Code preview)

**Students get "localStorage is not defined":**
- Some sandboxed environments block localStorage
- Use VS Code Live Server extension
- Try Chrome or Firefox instead of privacy browsers

**Theme doesn't persist after refresh:**
1. Check Application tab — is value saved?
2. Check if `getItem` code runs on page load (not inside event listener)
3. Check for `localStorage.clear()` accidentally running

**Reduced motion not working:**
- Check media query syntax: `(prefers-reduced-motion: reduce)` not just `(prefers-reduced-motion)`
- Use DevTools Rendering panel to force `reduce`

**forEach error:**
- Used `querySelector` (returns one) instead of `querySelectorAll` (returns list)

---

## Files to Have Open

### Day 1
1. `demos/localstorage-basics.html` (Firefox)
2. `demos/preference-hierarchy.html` (Firefox)
3. VS Code (for live coding)
4. Project 1 checklist

### Day 2
1. `demos/preference-hierarchy.html` (Firefox)
2. DevTools Application tab ready
3. `labs/lab-2-1-the-memory.md`
4. Project 1 rubric

---

## Week 2 vs Week 1 Differences

| Week 1 | Week 2 |
|--------|--------|
| Toggle works | Toggle remembers |
| Classes on body | Data attributes on html |
| CSS-only preferences | JS preference detection |
| One button | Multiple buttons with forEach |
| No persistence | localStorage persistence |

Students should feel the progression from "it works" to "it works AND remembers."

---

## Project 1 Due This Week

**"The System"** is due Sunday. Students should have:
- Design tokens in `variables.css`
- Theme toggle with `data-theme`
- localStorage persistence
- System preference fallback
- `prefers-reduced-motion` in CSS
- Deployed to GitHub Pages

Expect questions about requirements. Have the checklist visible.
