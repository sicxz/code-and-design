# Learn: Codedex Variables Tutorial

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 45–60 minutes
**Platform:** [Codedex.io](https://www.codedex.io/javascript)

---

## TL;DR
Complete 5 Codedex exercises on variables and data types, then consolidate into a single JS file.

---

## Submit
The link to `week-1/learn/tutorial-1-0-codedex-variables.js` on GitHub

---

## Overview

Week 0 introduced `console.log()` and comments. Now you'll learn **variables** — containers that store values you can use and change throughout your code.

Variables are fundamental to everything we'll build this semester. Want to remember a user's theme preference? That's a variable. Want to track how many times someone clicked a button? Variable. Want to store a color value? Variable.

After completing the exercises on Codedex, you'll consolidate everything into a single JavaScript file and submit it.

---

## What You're Learning

- How to declare variables with `let` and `const`
- The difference between `let` (can change) and `const` (can't change)
- JavaScript data types: strings, numbers, booleans, undefined
- How to do math with variables
- How to combine variables in output

---

## The Exercises

Go to **[codedex.io/javascript](https://www.codedex.io/javascript)** and complete the 5 exercises on Variables:

- **Exercise 6:** Let & Const
- **Exercise 7:** Data Types
- **Exercise 8:** Temperature

> **Note on Exercises 9 & 10:** The Codedex exercises ask for personal body measurements. In our class, we believe you shouldn't have to share personal information to learn programming concepts. The alternatives below teach the same skills — math with variables, formulas, and formatted output — using neutral data. Complete the Codedex exercises to learn the concepts, then submit these alternatives in your consolidated file.

### Exercise 9: Tip Calculator (Alternative)

Create a tip calculator:
- Store a bill amount
- Store a tip percentage (15%, 18%, or 20%)
- Calculate the tip amount: `tipAmount = billAmount * (tipPercent / 100)`
- Calculate the total: `total = billAmount + tipAmount`
- Print a formatted receipt

### Exercise 10: Playlist Duration (Alternative)

Create a playlist duration calculator:
- Store the number of songs in your playlist
- Store the average song length in minutes (e.g., 3.5)
- Calculate total playlist duration in minutes
- Convert to hours and minutes
- Output a formatted summary

---

## Consolidating Your Work

After completing all 5 exercises on Codedex, create a single JavaScript file with all your code organized into sections.

### File Name
```
tutorial-1-0-codedex-variables.js
```

### File Structure

```javascript
// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: [Your Name]
// Date: [Date]
// ============================================

// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables (first name, favorite color)
// - Two let variables (current location, mood)
// Print them all, then reassign one let variable
// --------------------------------------------




// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// - companyName (string)
// - foundingYear (number)
// - isActive (boolean)
// - fundingAmount (undefined)
// Print them all
// --------------------------------------------




// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Brooklyn's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------




// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------




// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
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
- Your user profile with all 4 variables
- Updated mood after reassignment
- Company info with different data types
- Temperature conversion
- Tip calculator receipt
- Playlist duration summary

---

## Complete Criteria

- [ ] File is named `tutorial-1-0-codedex-variables.js`
- [ ] All 5 exercise sections are present
- [ ] Code runs without errors in browser console
- [ ] Uses both `let` and `const` correctly
- [ ] Includes all 4 data types (string, number, boolean, undefined)
- [ ] Content is personalized (not just copied examples)

---

## Common Issues

**"const cannot be reassigned"**
You tried to change a `const` variable. Use `let` if you need to change the value later.

**"NaN" (Not a Number)**
You're trying to do math with something that isn't a number. Check your variable values.

**Tip calculation is off**
Remember: `tipPercent / 100` converts 20 to 0.20. Don't forget the parentheses!

**Hours/minutes conversion**
To get hours: `Math.floor(totalMinutes / 60)`
To get remaining minutes: `totalMinutes % 60` (the `%` is modulo — gives the remainder)

---

## Resources

- [Codedex JavaScript Course](https://www.codedex.io/javascript)
- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN: Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
