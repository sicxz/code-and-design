# Learn: Codedex Conditionals Tutorial

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 60–90 minutes
**Platform:** [Codedex.io](https://www.codedex.io/javascript)

---

## TL;DR

Complete 7 Codedex exercises on conditionals, then consolidate into a single JS file.

---

## Submit

The link to `week-2/learn/tutorial-2-2-codedex-conditionals.js` on GitHub

---

## Overview

Week 1 introduced variables — containers for data. Now you'll learn **conditionals** — the ability to make decisions in your code.

Conditionals are how programs "think." Want to check if dark mode is on? That's a conditional. Want to show different content based on user input? Conditional. Want to validate a form before submitting? Conditionals everywhere.

The theme toggle you'll build in class uses conditionals: "If the theme is dark, switch to light. Else, switch to dark."

After completing the exercises on Codedex, you'll consolidate everything into a single JavaScript file and submit it.

---

## What You're Learning

- How to use `if` statements to check conditions
- How to use `else` for alternative actions
- How to chain multiple conditions with `else if`
- Comparison operators: `===`, `!==`, `>`, `<`, `>=`, `<=`
- Logical operators: `&&` (and), `||` (or), `!` (not)
- How to generate random numbers with `Math.random()`

---

## The Exercises

Go to **[codedex.io/javascript](https://www.codedex.io/javascript)** and complete these 7 exercises on Conditionals:

| # | Exercise | What You Learn |
|---|----------|----------------|
| 11 | [Coin Flip](https://www.codedex.io/javascript/11-coin-flip) | Control flow intro, see `if`/`else` in action |
| 12 | [Good Morning](https://www.codedex.io/javascript/12-good-morning) | Writing your first `if` statement |
| 13 | [Good Afternoon](https://www.codedex.io/javascript/13-good-afternoon) | Adding `else`, comparison operators |
| 14 | [pH Levels](https://www.codedex.io/javascript/14-ph-levels) | Using `else if` for multiple conditions |
| 15 | [Magic 8 Ball](https://www.codedex.io/javascript/15-magic-8-ball) | `Math.random()`, many conditions |
| 16 | [Air Quality Index](https://www.codedex.io/javascript/16-air-quality-index) | Logical operators `&&`, `||` |
| 17 | [Rock Paper Scissors](https://www.codedex.io/javascript/17-rock-paper-scissors) | Putting it all together |

### Bonus Reading (Recommended)

After completing the exercises, read these bonus articles on Codedex:

- [Nested Conditionals](https://www.codedex.io/javascript/bonus/nested-conditionals)
- [Ternary Operators](https://www.codedex.io/javascript/bonus/ternary-operators-in-javascript)

The ternary operator is especially useful for the theme toggle:
```javascript
// This if/else...
if (theme === 'dark') {
  newTheme = 'light';
} else {
  newTheme = 'dark';
}

// ...becomes this one-liner:
const newTheme = theme === 'dark' ? 'light' : 'dark';
```

---

## Consolidating Your Work

After completing all 7 exercises on Codedex, create a single JavaScript file with all your code organized into sections.

### File Name
```
tutorial-2-2-codedex-conditionals.js
```

### File Structure

```javascript
// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: [Your Name]
// Date: [Date]
// ============================================

// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------




// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------




// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------




// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------




// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------




// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------




// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------




```

---

## Testing Your File

Before submitting, run your JavaScript file to make sure everything works:

### Option A: Browser Console
1. Open any browser (Chrome, Firefox, Safari)
2. Open DevTools: `Cmd + Option + I` (Mac) or `Ctrl + Shift + I` (Windows)
3. Click the **Console** tab
4. Copy your entire `.js` file contents
5. Paste into the console and press Enter

### Option B: CodePen
1. Go to [codepen.io](https://codepen.io)
2. Create a new pen
3. Paste your code in the JS panel
4. Open the console (bottom left) to see output

**What you should see:**
- Coin flip results (run multiple times!)
- Morning or afternoon greeting based on hour
- pH classification (basic/acidic/neutral)
- Magic 8 Ball response
- AQI classification
- Rock Paper Scissors game result

---

## Complete Criteria

- [ ] File is named `tutorial-2-2-codedex-conditionals.js`
- [ ] All 7 exercise sections are present
- [ ] Code runs without errors in browser console
- [ ] Uses `if`, `else`, and `else if` correctly
- [ ] Uses at least 3 different comparison operators
- [ ] Uses at least one logical operator (`&&` or `||`)
- [ ] Magic 8 Ball and Rock Paper Scissors produce different results each run

---

## Common Issues

**"Unexpected token"**
Check for missing curly braces `{ }` or parentheses `( )`. Every `if` needs both.

**Condition always true/false**
Using `=` instead of `===`? Single `=` assigns a value. Triple `===` compares.
```javascript
if (theme = 'dark')   // ❌ This ASSIGNS 'dark' to theme
if (theme === 'dark') // ✅ This CHECKS if theme equals 'dark'
```

**Math.random() always returns same thing**
It doesn't! Run the code multiple times. `Math.random()` gives a new number each run.

**Rock Paper Scissors logic is wrong**
Map your numbers clearly:
- 0 = Rock
- 1 = Paper
- 2 = Scissors

Then check all 9 combinations (3 × 3).

**AQI ranges overlapping**
Use `&&` to check ranges:
```javascript
if (aqi >= 51 && aqi <= 100) {
  console.log("Moderate");
}
```

---

## Connection to Theme Toggle

Everything you learn here applies directly to the theme toggle:

| Conditionals Concept | Theme Toggle Usage |
|---------------------|-------------------|
| `if (condition)` | `if (savedTheme)` |
| `else` | Switch to opposite theme |
| `===` comparison | `theme === 'dark'` |
| Ternary operator | `theme === 'dark' ? 'light' : 'dark'` |

---

## Extra Help: The Story Teller Tutorial

If you want more practice with JavaScript fundamentals before the theme toggle, work through **The Story Teller Tutorial**:

📘 [Story Teller Tutorial](learn-2-3-story-teller-tutorial.md) (Optional / Extra Credit)

This interactive walkthrough covers:
- `querySelector` — finding elements
- Variables and arrays
- `addEventListener` — responding to clicks
- `if` statements and `.length`
- `forEach` loops and `classList`

It's optional but recommended if JavaScript still feels unfamiliar.

---

## Resources

- [Codedex JavaScript Course](https://www.codedex.io/javascript)
- [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)
- [MDN: Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)
- [Fireship: JavaScript If Else in 100 Seconds](https://www.youtube.com/watch?v=N4V0FZASK60)
