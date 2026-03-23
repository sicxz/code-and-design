# Event Flow Diagram

How user actions become visual changes.

---

## The Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   USER CLICKS BUTTON                                            │
│         │                                                       │
│         ▼                                                       │
│   ┌─────────────────────────────────────┐                       │
│   │  BROWSER DETECTS CLICK EVENT        │                       │
│   │  "Something happened on this        │                       │
│   │   element!"                         │                       │
│   └─────────────────────────────────────┘                       │
│         │                                                       │
│         ▼                                                       │
│   ┌─────────────────────────────────────┐                       │
│   │  JAVASCRIPT EVENT LISTENER RUNS     │                       │
│   │  The function inside addEventListener│                       │
│   │  executes NOW                       │                       │
│   └─────────────────────────────────────┘                       │
│         │                                                       │
│         ▼                                                       │
│   ┌─────────────────────────────────────┐                       │
│   │  JAVASCRIPT CHANGES THE STATE       │                       │
│   │  document.documentElement           │                       │
│   │    .setAttribute('data-theme',      │                       │
│   │     'dark')                         │                       │
│   └─────────────────────────────────────┘                       │
│         │                                                       │
│         ▼                                                       │
│   ┌─────────────────────────────────────┐                       │
│   │  CSS SELECTOR NOW MATCHES           │                       │
│   │  [data-theme="dark"] { ... }        │                       │
│   │  becomes active                     │                       │
│   └─────────────────────────────────────┘                       │
│         │                                                       │
│         ▼                                                       │
│   ┌─────────────────────────────────────┐                       │
│   │  BROWSER REPAINTS                   │                       │
│   │  Colors, fonts, etc. update         │                       │
│   │  visually on screen                 │                       │
│   └─────────────────────────────────────┘                       │
│         │                                                       │
│         ▼                                                       │
│   USER SEES THE CHANGE                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## In Code

```javascript
// 1. Find the button
const toggle = document.querySelector('.theme-toggle');

// 2. Listen for clicks
toggle.addEventListener('click', function() {

  // 3. Change the state (this triggers CSS to respond)
  document.documentElement.setAttribute('data-theme', 'dark');

});
```

```css
/* 4. CSS responds to the new state */
[data-theme="dark"] {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}

/* 5. Elements using these variables automatically update */
body {
  background: var(--color-surface);
  color: var(--color-text);
}
```

---

## The Key Insight

**JavaScript doesn't change colors directly.**

Instead:
1. JavaScript changes an **attribute** or **class**
2. CSS has rules that **match** that attribute/class
3. The browser **applies** those CSS rules
4. The visual **updates**

This separation is powerful:
- JavaScript handles **what** state we're in
- CSS handles **how** that state looks
- You can change the look without touching JavaScript

---

## Common Pattern

```
USER ACTION  →  JS UPDATES STATE  →  CSS RESPONDS  →  VISUAL CHANGE
   click          data-theme          [data-theme]     colors update
   hover          classList.add       .active          show/hide
   scroll         setAttribute        [data-visible]   animate in
```

---

## Why This Matters

When debugging, ask:
1. Is the **event firing**? (Add console.log in listener)
2. Is the **state changing**? (Check Elements panel for attribute/class)
3. Is **CSS responding**? (Check if your selector matches)

The problem is usually in one of these three places.
