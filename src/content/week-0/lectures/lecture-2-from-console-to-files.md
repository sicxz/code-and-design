# Lecture 2: From Console to Files

**Week 0, Day 2**
**Duration:** 30 minutes
**Format:** Discussion + Live Demo

---

## Learning Objectives

By the end of this lecture, students will:
- Understand how to link JavaScript files to HTML
- Know when and why to use the `defer` attribute
- Be able to read and interpret common console errors
- Feel confident debugging basic JavaScript issues

---

## Pre-Lecture Setup

- A broken demo file ready to debug together
- Students should have Lab 0-1 (The Setup) and Lab 0-2 (Console Explorer) complete (or in progress)

---

## Lecture Outline

### Part 1: What Did You Discover? (10 min)

#### Check-in

"Let's hear about your console adventures."

Questions to ask:
- "What did you try in the console?"
- "What surprised you?"
- "What error messages did you see?"

#### Celebrate the Errors

"If you got errors, that's good. You were experimenting."

"Every error is a clue. JavaScript is trying to tell you what went wrong."

#### Quick Q&A

Common questions that come up:
- "Why do strings need quotes but numbers don't?"
- "What's the difference between single and double quotes?"
- "What does `undefined` mean?"

**Answer:** `undefined` means "this exists but has no value" or "this function doesn't return anything."

---

### Part 2: Linking JavaScript Files (15 min)

#### The Console vs. Real Code

"The console is great for experiments. But real websites need code that runs automatically, saved in files."

"Let's connect a JavaScript file to an HTML page."

#### Live Demo: File Structure

**Create or show:**

```
my-project/
├── index.html
├── styles.css
└── script.js
```

"Same structure you know from 368, but now with a `.js` file."

#### The HTML

**[SHOW index.html]**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Script</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello!</h1>
  <button id="myButton">Click me</button>

  <script src="script.js" defer></script>
</body>
</html>
```

#### The Script

**[SHOW script.js]**

```javascript
console.log("Script loaded!");

const button = document.querySelector('#myButton');

button.addEventListener('click', function() {
  alert("You clicked the button!");
});
```

#### Key Points

**The `<script>` tag:**

```html
<script src="script.js" defer></script>
```

| Part | Meaning |
|------|---------|
| `<script>` | "Load some JavaScript" |
| `src="script.js"` | "From this file" |
| `defer` | "Wait until HTML is loaded first" |

**Why `defer` matters:**

"JavaScript runs as soon as it loads. If your script tries to find a button that doesn't exist yet, it fails."

**Without defer:**
```
Script runs → Button doesn't exist yet → Error
```

**With defer:**
```
HTML loads → Script runs → Button exists → Works
```

"Always use `defer` unless you have a specific reason not to."

---

### Part 3: Reading Errors (10 min)

#### Errors Are Your Friends

"When JavaScript breaks, it tells you. Let's learn to read the message."

**[DEMO: Break the code intentionally]**

```javascript
// Typo in the selector
const button = document.querySelector('#myButon');
button.addEventListener('click', function() {
  alert("Clicked!");
});
```

**Console shows:**

```
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at script.js:3:8
```

#### Anatomy of an Error

**[DRAW OR SHOW]**

```
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
   │         │                                │                    │
   │         │                                │                    └── What it tried to do
   │         │                                └── What it found (null = nothing)
   │         └── Type of error
   └── It wasn't caught/handled

    at script.js:3:8
         │        │ │
         │        │ └── Character position
         │        └── Line number
         └── File name
```

#### The Most Common Error

`Cannot read properties of null` = querySelector found nothing

**Three causes:**
1. **Typo in selector** — `#myButon` vs `#myButton`
2. **Forgot the dot or hash** — `myButton` vs `#myButton`
3. **Missing `defer`** — script runs before HTML exists

**How to fix:**
1. Check line 3 (the error told you)
2. Look at the selector
3. Compare to your HTML
4. Fix the typo

**[DEMO: Fix the typo, show it working]**

#### Other Common Errors

| Error | Usually means |
|-------|---------------|
| `Unexpected token` | Typo in syntax (missing quote, bracket) |
| `is not defined` | Variable doesn't exist (typo or not created) |
| `is not a function` | Trying to call something that isn't a function |
| `Syntax Error` | The code is malformed |

"The error message always tells you where to look. Trust it."

---

### Closing (5 min)

#### What You've Learned This Week

- ✓ JavaScript is the behavioral layer
- ✓ DevTools Console lets you run JS
- ✓ `document.querySelector` finds elements
- ✓ `addEventListener` waits for events
- ✓ `<script defer>` links files safely
- ✓ Errors tell you exactly where to look

#### Week 1 Preview

"Monday, we start Project 1: 'The System.'"

"You'll build a theme toggle that changes your whole site's colors. Everything from this week — console, querySelector, events — comes together in a real feature."

#### Reminders

- Lab 0-1 (The Setup) and Lab 0-2 (Console Explorer) complete
- Tutorial 0-1 (Codedex) complete
- Lab 0-3 (Portfolio Audit) due Sunday
- Come ready to build on Day 1 of Week 1

---

## Slide Outline (if using slides)

1. Title: "From Console to Files"
2. What did you discover? (discussion)
3. Console vs. files
4. File structure diagram
5. HTML with script tag
6. The `defer` attribute
7. Why defer matters (diagram)
8. Broken code example
9. Error message anatomy
10. Common errors table
11. Week summary
12. Week 1 preview

---

## Common Questions

**"Can I put the script in the head?"**
Yes, with `defer`. Without `defer`, it runs before the body exists.

**"What about putting script at the end of body?"**
Works too, but `defer` is cleaner and more explicit.

**"Why did my code work yesterday but not today?"**
Check: Did you save the file? Did you refresh the browser? Is the file path correct?

---

## Instructor Notes

- Keep this lecture short — students want work time
- The error-reading practice is crucial; don't skip it
- Show real debugging: the typo → error → fix cycle
- If time allows, debug a student's issue live
