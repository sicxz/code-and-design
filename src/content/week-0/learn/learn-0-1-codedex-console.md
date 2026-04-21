# Learn: Codedex Console Tutorial

**Due:** Before Day 2
**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 45–60 minutes
**Platform:** [Codedex.io](https://www.codedex.io/javascript)

---

## Overview

Your first JavaScript practice happens on Codedex.io — an interactive learning platform where you write code and see results instantly. You'll complete 5 short exercises that teach you the fundamentals of `console.log()` and comments.

After completing the exercises on Codedex, you'll consolidate everything into a single JavaScript file and submit it. This workflow mirrors real development: learn concepts → write code → organize → ship.

**Why Codedex?**
- Instant feedback (no setup required)
- Gamified learning with progress tracking
- Perfect for first-time JavaScript exposure

---

## What You're Learning

- How to output messages with `console.log()`
- That JavaScript runs one line at a time, top to bottom
- How to write single-line comments with `//`
- How to write multi-line comments with `/* */`
- How to format text output for readability

---

## The Exercises

Go to **[codedex.io/javascript](https://www.codedex.io/javascript)** and complete these 5 exercises in order:

### Exercise 1: Setting Up
**Codedex Link:** [01. Setting Up](https://www.codedex.io/javascript/01-setting-up)

Your first line of JavaScript! You'll write:
```javascript
console.log("Hello internet!");
```

This outputs a message to the console. Simple, but powerful — this is how you'll debug and test code throughout the course.

---

### Exercise 2: The Console
**Codedex Link:** [02. The Console](https://www.codedex.io/javascript/02-the-console)

Learn more about `console.log()` and output your favorite food. You'll discover:
- Messages go inside parentheses and quotes
- Double quotes `"` or single quotes `'` both work
- Semicolons at the end are optional (but good practice)

---

### Exercise 3: Letter Tree
**Codedex Link:** [03. Letter Tree](https://www.codedex.io/javascript/03-letter-tree)

JavaScript runs one line at a time. You'll create a pattern using multiple `console.log()` statements:

```
   a
  b c
 d e f
g h i j
   k
```

This exercise teaches you that order matters — code runs top to bottom.

---

### Exercise 4: Secret Recipe
**Codedex Link:** [04. Secret Recipe](https://www.codedex.io/javascript/04-secret-recipe)

Comments let you leave notes in your code. You'll learn:

**Single-line comments:**
```javascript
// This line is ignored when code runs
console.log("This line runs"); // Comments can go at the end too
```

**Multi-line comments:**
```javascript
/*
Everything between these markers
is ignored by JavaScript.
Great for longer explanations.
*/
```

**Your Task:** Write a recipe for your favorite dish. Include ingredients, steps, and a comment about your "secret ingredient."

> **If you took DESN 368:** Use the recipe from your recipe assignment!
> **If you don't have one:** Find a recipe you love and adapt it.

---

### Exercise 5: Receipt
**Codedex Link:** [05. Receipt](https://www.codedex.io/javascript/05-receipt)

Put it all together! Create a formatted receipt from a recent purchase using `console.log()` statements. The output should look something like:

```
==================================
         McDONALD'S RECEIPT
----------------------------------
           Order Details
----------------------------------
Item           Quantity   Price
----------------------------------
Burger          1          2.99
Fries           1          2.49
Soda            1          1.99
----------------------------------
Total                      7.47
==================================
```

This is your weekend assignment — take your time making it look good!

---

## Consolidating Your Work

After completing all 5 exercises on Codedex, create a single JavaScript file with all your code organized into sections.

### File Name
```
tutorial-0-1-codedex-console.js
```

### File Structure

Use the template below (or download `tutorial-0-1-template.js` from the course materials):

```javascript
// ============================================
// TUTORIAL 0-1: CODEDEX CONSOLE FUNDAMENTALS
// Student: [Your Name]
// Date: [Date]
// ============================================

// --------------------------------------------
// EXERCISE 1: SETTING UP
// --------------------------------------------
console.log("Hello internet!");
// Add your custom greeting below:


// --------------------------------------------
// EXERCISE 2: THE CONSOLE
// Your favorite food
// --------------------------------------------


// --------------------------------------------
// EXERCISE 3: LETTER TREE
// The pattern: a, b c, d e f, g h i j, k
// --------------------------------------------


// --------------------------------------------
// EXERCISE 4: SECRET RECIPE
// Use comments to document your recipe
// Include a "secret ingredient" comment
// --------------------------------------------


// --------------------------------------------
// EXERCISE 5: RECEIPT
// Format a receipt from a recent purchase
// --------------------------------------------

```

---

## Testing Your File

Before submitting, run your JavaScript file to make sure everything works:

### Option A: Browser Console
1. Open any browser (Chrome, Firefox, Safari)
2. Open DevTools:
   - **Mac:** `Cmd + Option + I`
   - **Windows:** `Ctrl + Shift + I`
3. Click the **Console** tab
4. Copy your entire `.js` file contents
5. Paste into the console and press Enter
6. All your outputs should appear in sequence

### Option B: Drag and Drop
1. Open DevTools Console
2. Drag your `.js` file directly into the console
3. Watch the outputs appear

**What you should see:**
- Your greeting from Exercise 1
- Your favorite food from Exercise 2
- The letter tree pattern from Exercise 3
- Your recipe (with comments NOT showing — they're ignored!)
- Your formatted receipt from Exercise 5

---

## Submission

Submit your work in **two places**:

### 1. GitHub (for file management practice)
1. Add your file to your portfolio repository
2. Commit with message: `Add Tutorial 0-1 Codedex exercises`
3. Push to GitHub

### 2. Canvas (for grading)
1. Upload `tutorial-0-1-codedex-console.js` to the Tutorial 0-1 assignment
2. This allows fast downloading and grading

---

## Complete Criteria

Your tutorial is complete when:

- [ ] File is named `tutorial-0-1-codedex-console.js`
- [ ] All 5 exercise sections are present
- [ ] Code runs without errors in browser console
- [ ] Exercise 4 uses both single-line and multi-line comments
- [ ] Content is personalized (not just copied examples)
- [ ] Submitted to both GitHub and Canvas

**Grading:** 10 points, Complete/Incomplete

---

## Common Issues

### "My code has an error"
Check for:
- Missing closing quotes on strings
- Mismatched parentheses
- Typos in `console.log`

### "Nothing appears when I run it"
Make sure you're looking at the Console tab, not the Elements tab in DevTools.

### "My comments are showing in the output"
Comments should NOT appear in output. If they are, you might have:
- Forgotten the `//` at the start
- Forgotten to close a multi-line comment with `*/`

### "The receipt doesn't line up nicely"
Use spaces to align columns. In a monospace font (like the console), each character takes the same width.

---

## Connection to Lab 0-2

This tutorial teaches you `console.log()` — the tool you'll use constantly for debugging. In Lab 0-2 (Console Explorer), you'll use the console to interact with web pages directly, changing colors, text, and more.

Think of this tutorial as learning to speak; Lab 0-2 is learning to have a conversation with the browser.

---

## Resources

- [Codedex JavaScript Course](https://www.codedex.io/javascript)
- [MDN: console.log()](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static)
- [MDN: JavaScript Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments)
- [Chrome DevTools Console](https://developer.chrome.com/docs/devtools/console/)
