# Lecture 2: Tokens in Practice

**Week 1, Day 2**
**Duration:** 30 minutes
**Format:** Discussion + Live Debugging + Exercise

---

## Learning Objectives

By the end of this lecture, students will:
- Understand common JavaScript errors and how to read them
- Know the difference between semantic and literal token naming
- See how their token system will grow throughout the quarter
- Be ready for structured work time

---

## Pre-Lecture Setup

- A student repo with a common bug (or your own intentionally broken demo)
- DevTools Console open
- Whiteboard or shared screen for token naming exercise

---

## Lecture Outline

### Part 1: What Did You Learn? (10 min)

#### Quick Check-In

"How did the MDN tutorial go?"
- Hands up: Who got through the whole thing?
- What clicked?
- What was confusing?

"How about Lab 1-1?"
- Who has a working toggle?
- Who got stuck somewhere?

#### Common Wins to Celebrate

- "I made the colors change!"
- "I saw the class appear in DevTools!"
- "I finally understand what querySelector does!"

"These are real accomplishments. You wrote JavaScript that works."

---

### Part 2: Reading Errors (10 min)

#### The Console Is Your Friend

"When JavaScript breaks, it tells you. You just have to know where to look."

**[DEMO]** Open a broken example:

```javascript
const toggle = document.querySelector('.theme-togle'); // typo!
toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
});
```

**[SHOW CONSOLE]**

```
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at script.js:2:8
```

#### Anatomy of an Error

```
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
│              │                            │                    │
│              │                            │                    └── what it tried to do
│              │                            └── what it found (null = nothing)
│              └── type of error
└── it wasn't caught/handled

    at script.js:2:8
         │        │ │
         │        │ └── character position
         │        └── line number
         └── file name
```

"Line 2, character 8. That's exactly where to look."

#### The Most Common Error

`Cannot read properties of null` = querySelector found nothing

**Why it happens:**
1. Typo in selector (`.theme-togle` vs `.theme-toggle`)
2. Forgot the dot (`.classname` vs `classname`)
3. Script runs before HTML exists (missing `defer`)

**[DEMO]** Fix the typo, show it working.

#### Script Loading: The `defer` Attribute

"Your JavaScript runs as soon as the browser sees it. If the HTML isn't loaded yet, there's nothing to find."

```html
<!-- BAD: Script runs immediately, HTML might not exist yet -->
<script src="script.js"></script>

<!-- GOOD: Script waits until HTML is parsed -->
<script src="script.js" defer></script>
```

"Always use `defer` unless you have a specific reason not to."

---

### Part 3: Token Naming Exercise (10 min)

#### The Setup

**[SHOW]** A design with 5 colors:
- White background
- Dark gray text
- Blue accent/links
- Light gray secondary background
- Red for errors

"Write down names for these as CSS variables. You have 2 minutes."

#### Compare and Discuss

"Pair up. Compare your names."

Common patterns that emerge:

| Literal (Describes Appearance) | Semantic (Describes Purpose) |
|-------------------------------|------------------------------|
| `--color-white` | `--color-surface` |
| `--color-dark-gray` | `--color-text` |
| `--color-blue` | `--color-accent` |
| `--color-light-gray` | `--color-surface-secondary` |
| `--color-red` | `--color-error` |

#### Why Semantic Names Win

"What happens to `--color-blue` when your brand changes to green?"

"Your code is full of 'blue' but it's actually green. Future-you is confused."

"Semantic names describe *purpose*, not *appearance*."

```css
/* This makes sense even if the actual color changes */
.button {
  background: var(--color-accent);
}

/* This becomes a lie when the brand changes */
.button {
  background: var(--color-blue);
}
```

#### Real-World Reference

"Open Props uses semantic groupings:"
- `--gray-0` through `--gray-12` for a scale
- `--red-0` through `--red-12` for another

"They use literal names, but they're a library, not a brand. Your portfolio should use semantic names."

---

## Transition to Work Time

### File Structure Check

"Before you start Lab 1-2, let's make sure your files are organized:"

```
portfolio/
├── index.html
├── css/
│   ├── variables.css    ← NEW: your tokens
│   └── styles.css       ← uses the tokens
└── js/
    └── theme.js         ← toggle logic
```

### Start Minimal

"Your `variables.css` should start small:"
- 3-5 color tokens
- 2-3 spacing values
- 1-2 font families

"You can always add more. Don't over-engineer on day one."

### Where the Toggle Goes

"Think about placement in your portfolio:"
- Header (common)
- Footer (Stripe does this)
- Floating button (visible on all pages)
- Hidden in a menu (less discoverable)

"There's no wrong answer, but it should be findable."

### Preview: What's Coming

"Next week, we add two things:"

1. **localStorage** — The browser remembers their choice
2. **System preference detection** — First-time visitors get their OS preference

"Your toggle becomes a real, polished feature."

---

## Assignments Reminder

- **Lab 1-2: "The Inheritance"** — Due Sunday
  - Create `variables.css`
  - Refactor one page to use tokens
  - Add working toggle

- **Visual Notes** — Due Sunday
  - Figma Design Systems readings
  - Come ready to discuss

- **Project 1: "The System"** — Due end of Week 2
  - Everything this week builds toward this

---

## Slide Outline (if using slides)

1. Title: "Tokens in Practice"
2. Check-in questions
3. Error anatomy diagram
4. Common error: null
5. The `defer` attribute
6. Token naming exercise prompt
7. Literal vs Semantic comparison
8. File structure diagram
9. "Start minimal" list
10. Assignments reminder

---

## Instructor Notes

- Day 2 is shorter lecture, longer work time
- The naming exercise often sparks good discussion — let it run if engaged
- Students stuck on Lab 1-1 need one-on-one time during work session
- Watch for script loading issues — very common
- If class is ahead, show Open Props briefly as inspiration
