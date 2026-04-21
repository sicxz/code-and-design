# Preference Hierarchy Diagram

How to decide which theme to apply.

---

## The Decision Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   PAGE LOADS                                                        │
│         │                                                           │
│         ▼                                                           │
│   ┌─────────────────────────────────────────┐                       │
│   │  1. CHECK localStorage                  │                       │
│   │     Is there a saved 'theme' value?     │                       │
│   └─────────────────────────────────────────┘                       │
│         │                                                           │
│    ─────┴─────                                                      │
│    │         │                                                      │
│   YES        NO                                                     │
│    │         │                                                      │
│    ▼         ▼                                                      │
│   ┌─────────────────────────────────────────┐                       │
│   │  APPLY SAVED THEME                      │                       │
│   │  User made a choice — respect it!       │                       │
│   └─────────────────────────────────────────┘                       │
│            │                                                        │
│            │    ┌───────────────────────────────────────────────┐   │
│            │    │  2. CHECK SYSTEM PREFERENCE                   │   │
│            │    │     Does OS prefer dark mode?                 │   │
│            │    │     window.matchMedia('(prefers-color-scheme: │   │
│            │    │     dark)').matches                           │   │
│            │    └───────────────────────────────────────────────┘   │
│            │              │                                         │
│            │         ─────┴─────                                    │
│            │         │         │                                    │
│            │        YES        NO                                   │
│            │         │         │                                    │
│            │         ▼         ▼                                    │
│            │   ┌─────────────────────────────────────────┐          │
│            │   │  APPLY DARK    │  APPLY LIGHT          │          │
│            │   │  System says   │  System says light    │          │
│            │   │  dark mode     │  OR no preference     │          │
│            │   └─────────────────────────────────────────┘          │
│            │              │                                         │
│            └──────────────┴──────────────────────┐                  │
│                                                  ▼                  │
│                                    ┌─────────────────────────────┐  │
│                                    │  THEME IS NOW APPLIED       │  │
│                                    │  Page displays correctly    │  │
│                                    └─────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Priority Order

| Priority | Source | Why |
|----------|--------|-----|
| 1 (Highest) | User's saved choice | They explicitly picked this — always respect it |
| 2 | System preference | First-time visitors get their OS preference |
| 3 (Lowest) | Our default | Fallback when we have no other information |

---

## In Code

```javascript
function getInitialTheme() {
  // Priority 1: User's explicit choice
  const saved = localStorage.getItem('theme');
  if (saved) {
    return saved;
  }

  // Priority 2: System preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    return 'dark';
  }

  // Priority 3: Our default
  return 'light';
}

// Apply on page load
document.documentElement.dataset.theme = getInitialTheme();
```

---

## With a "System" Option

When the user explicitly chooses "System", they're saying: "Don't remember my choice — just follow my OS."

```javascript
function applyTheme(theme) {
  if (theme === 'system') {
    // Remove the override — let CSS media query handle it
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  } else {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
}
```

With CSS:

```css
/* Default light */
:root {
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
}

/* Explicit dark override */
[data-theme="dark"] {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}

/* Explicit light override */
[data-theme="light"] {
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
}

/* System preference (when no data-theme is set) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --color-surface: #1a1a1a;
    --color-text: #f0f0f0;
  }
}
```

---

## Why This Pattern Matters

**Respectful design:**
- New visitors get a comfortable default (their OS choice)
- Returning visitors get their explicit preference
- Users have control but don't have to configure anything

**Common mistake:**
- Forcing everyone into your default until they manually change it
- Not remembering their choice
- Ignoring system preferences entirely

---

## Testing the Hierarchy

1. **Clear localStorage** (DevTools → Application → Local Storage → Clear)
2. **Toggle system dark mode** (System Settings → Appearance)
3. **Refresh** — should follow system
4. **Click a theme button** — should save to localStorage
5. **Refresh** — should keep your choice
6. **Toggle system preference** — should NOT change (user choice wins)
7. **Click "System"** — should clear localStorage and follow OS again

---

## Visual Summary

```
USER CHOICE    >    SYSTEM PREFERENCE    >    DEFAULT
(localStorage)      (matchMedia query)        (our CSS)
   saves               detects                  fallback
 preference          OS setting

      ↑                   ↑                       ↑
   explicit           automatic               hardcoded
    choice            detection               last resort
```

---

## See Also

- [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: Window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
