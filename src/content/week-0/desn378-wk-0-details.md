# Week 0: The On-Ramp

**Purpose:** Prepare students for JavaScript before the first project. Build confidence, not complexity.

**Technical Focus:**
- What JavaScript is (and isn't)
- DevTools orientation (Console, Elements panel)
- Reading code vs. writing code
- First console experiments
- Script linking basics

**By End of Week:** Students can open DevTools, type in the console, read simple JavaScript, and aren't scared of it.

---

## Context

Students arrive from DESN 368 with:
- ✓ HTML/CSS fundamentals
- ✓ GitHub account and workflow
- ✓ Figma experience
- ✓ VS Code basics
- ✗ Zero JavaScript experience

Week 0 bridges this gap without overwhelming them.

---

## Day 1: Lecture Day

### Opening: What is JavaScript? (15 min)

**Start with the familiar:**

"You know HTML gives structure. You know CSS gives style. JavaScript gives behavior."

**Draw the layers:**

```
┌─────────────────────────────────┐
│  BEHAVIOR (JavaScript)          │  ← This quarter
├─────────────────────────────────┤
│  APPEARANCE (CSS)               │  ← You know this
├─────────────────────────────────┤
│  STRUCTURE (HTML)               │  ← You know this
└─────────────────────────────────┘
```

**The nervous system metaphor:**

"HTML is the skeleton. CSS is the skin and clothes. JavaScript is the nervous system — it senses things and responds."

**Examples of JavaScript behavior:**

- Button clicks that do something
- Forms that validate before submitting
- Menus that open and close
- Pages that remember your preferences
- Animations that respond to scroll

**What JavaScript is NOT:**

- Not a design tool (CSS does the styling)
- Not magic (it follows rules)
- Not something you memorize (you look things up)
- Not only for programmers (designers use it too)

---

### DevTools Tour (20 min)

**Open any website (or your portfolio from 368):**

"Right-click → Inspect. Or Cmd+Option+I (Mac) / Ctrl+Shift+I (Windows)."

**The Console Tab:**

"This is where JavaScript talks to you. Errors appear here. You can type code here."

**[DEMO]** Type in the console:

```javascript
2 + 2
```

"Press Enter. It evaluated your code and showed the result."

```javascript
"Hello, " + "World"
```

"You can combine text too. These are called strings."

```javascript
alert("Welcome to JavaScript!")
```

"This makes a popup. You just ran JavaScript."

**The Elements Tab:**

"This shows the live HTML. You already know this from 368."

"But watch — you can *change* the HTML from JavaScript."

**[DEMO]** In console:

```javascript
document.body.style.background = "lightblue"
```

"The page changed. JavaScript just talked to the DOM and modified it."

---

### Reading Code, Not Writing Code (15 min)

**The goal this week:**

"By Sunday, you need to *recognize* JavaScript. Not write complex programs. Just recognize."

**Vocabulary tour:**

```javascript
// This is a comment. The browser ignores it.

// A variable stores a value
const message = "Hello";

// A function does something when called
function sayHello() {
  console.log("Hello!");
}

// An event listener waits for something to happen
button.addEventListener('click', function() {
  // This runs when the button is clicked
});
```

**Don't memorize. Recognize:**

| When you see... | It means... |
|-----------------|-------------|
| `const` or `let` | A variable is being created |
| `function` | A reusable piece of code |
| `document.querySelector` | Finding something on the page |
| `addEventListener` | Waiting for something to happen |
| `console.log` | Printing a message to the console |

---

### Break (10 min)

---

### Console Playground (25 min)

**Guided experimentation:**

Walk students through these, typing together:

**1. Math works:**

```javascript
10 * 5
100 / 4
2 ** 8  // 2 to the power of 8
```

**2. Strings (text) work:**

```javascript
"Hello".length  // How many characters?
"hello".toUpperCase()  // Make it uppercase
"JavaScript".includes("Script")  // Does it contain...?
```

**3. The page is accessible:**

```javascript
document.title  // The page title
document.body  // The body element
document.querySelectorAll('a')  // All the links
document.querySelectorAll('a').length  // How many links?
```

**4. You can change things:**

```javascript
document.body.style.fontFamily = "Comic Sans MS"
document.querySelector('h1').textContent = "I changed this!"
```

**Let them explore:**

"Try changing colors. Try finding different elements. Break things — you can always refresh."

---

### Closing: Assignments (15 min)

**Frame the work:**

"This week is about getting comfortable. No projects. No pressure. Just exploration."

**Assign:**

1. **Lab 0-1: The Setup** (do first!)
   - Create your repository from the template
   - Enable GitHub Pages
   - Sync your profiles (GitHub, Figma, CodePen)
   - Due before Day 2

2. **Tutorial 0-1: Codedex Console Fundamentals**
   - Complete 5 exercises on [codedex.io/javascript](https://www.codedex.io/javascript)
   - Consolidate into single file: `tutorial-0-1-codedex-console.js`
   - Submit to GitHub + Canvas
   - Exercise 5 (Receipt) can be weekend homework

3. **Lab 0-2: Console Explorer**
   - Hands-on DevTools exploration
   - Use the **DevTools Field Guide** as a reference
   - Due before Day 2

**Reference:**
- [DevTools Field Guide](resources/dev-tools-fieldguide/index.html) — Designer-focused guide to DevTools

**Preview:**

"Next class, we'll go deeper into DevTools and start connecting scripts to HTML pages. Then Week 1 begins the first project."

---

## Day 2: Practice Day

### Opening: What Did You Discover? (15 min)

**Check-in:**

- "What did you try in the console?"
- "What surprised you?"
- "What broke?" (Celebrate the breaking — that's learning)

**Address common questions:**

- "Why do some things need quotes and some don't?"
- "What's the difference between `=` and `==`?"
- "Why did I get `undefined`?"

---

### Script Linking (20 min)

**Moving from console to files:**

"The console is great for experiments. But real code lives in files."

**[DEMO]** Create a simple HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Script</title>
</head>
<body>
  <h1>Hello!</h1>
  <button id="myButton">Click me</button>

  <script src="script.js" defer></script>
</body>
</html>
```

**Create script.js:**

```javascript
console.log("Script loaded!");

const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  alert("You clicked the button!");
});
```

**Key concepts:**

1. **`<script>` tag** — links the JavaScript file
2. **`defer` attribute** — waits until HTML is loaded
3. **`src` attribute** — path to the file

**Common mistakes:**

| Mistake | Result | Fix |
|---------|--------|-----|
| Missing `defer` | Script runs before HTML exists | Add `defer` |
| Wrong file path | Console error: "404 not found" | Check the path |
| Typo in selector | `null` error | Use DevTools to copy selector |

---

### Error Reading Practice (15 min)

**[DEMO]** Break the code intentionally:

```javascript
const button = document.querySelector('#myButon'); // typo!
button.addEventListener('click', function() { ... });
```

**Console shows:**

```
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at script.js:2:8
```

**Read the error together:**

- **TypeError** — something's the wrong type
- **null** — querySelector found nothing
- **script.js:2:8** — line 2, character 8

"Every error tells you exactly where to look. Trust the error."

**Practice:**

Show 3-4 common errors, have students identify the problem:
- Missing semicolon (often works anyway in JS)
- Unclosed string quote
- Undefined variable
- Function called before defined

---

### Break (10 min)

---

### Structured Work Time (30 min)

**Options for students:**

1. **Finish Tutorial 0-1** if not done (consolidate Codedex exercises into single file)
2. **Finish Lab 0-2** if not done
3. **Continue MDN exercises** from the Scripting module
4. **Experiment** with linking their own script file

**Circulate and help:**

- Watch for DevTools confusion
- Watch for path issues with script files
- Encourage console experimentation

---

### Closing (10 min)

**What you've accomplished:**

- Opened DevTools and used the console
- Read JavaScript and recognized key patterns
- Linked a script file to an HTML page
- Read error messages and found the problem

**Week 1 preview:**

"Monday we start Project 1: 'The System.' You'll build a theme toggle that changes your whole site's colors. Everything from this week — console, querySelector, events — comes together."

**Remind:**

- Tutorial 0-1 complete (all 5 exercises consolidated, submitted to GitHub + Canvas)
- Lab 0-2 complete
- Finish MDN Scripting module exercises
- Come ready to code on Day 1 of Week 1

---

## Tutorials & Labs

### Lab 0-1: The Setup

*See separate file: `labs/lab-0-1-the-setup.md`*

Students create their workspace for the quarter by setting up the GitHub template repo, enabling GitHub Pages, and synchronizing their profiles across platforms. This is foundational — everything else builds on having a working repository.

### Tutorial 0-1: Codedex Console Fundamentals

*See separate file: `tutorials/tutorial-0-1-codedex-console.md`*

Students complete 5 exercises on Codedex.io, then consolidate into a single JavaScript file. Dual submission: GitHub (file management practice) + Canvas (fast grading).

### Lab 0-2: Console Explorer

*See separate file: `labs/lab-0-2-console-explorer.md`*

Hands-on DevTools exploration. Students should use the **DevTools Field Guide** as a companion reference.

### Lab 0-3: Portfolio Audit

*See separate file: `labs/lab-0-3-portfolio-audit.md`*

Peer review of DESN 368 portfolios to assess current state before building on them.

---

## Course Resource: DevTools Field Guide

*Location: `resources/dev-tools-fieldguide/`*

A custom-built, designer-focused guide to browser DevTools. Unlike engineering tutorials that emphasize breakpoints and call stacks, this resource focuses on:

| Engineering Focus | Designer Focus |
|-------------------|----------------|
| Breakpoints and step debugging | Reading what changed |
| Call stack analysis | Watching events fire |
| Memory profiling | Checking element state |
| Network request debugging | Understanding errors |
| Source maps and minification | Testing predictions |

**Pages:**
- `index.html` — Overview and mental model
- `visual.html` — Elements panel (structure and styles)
- `console.html` — Console as listener
- `bridge.html` — The $0 bridge between visual and behavioral
- `behavioral.html` — Reading element state
- `connecting.html` — Connecting both panels
- `reference.html` — Keyboard shortcuts and browser differences

**Use throughout:** Reference during labs, demos, and when students need DevTools help.

---

## Resources

### Assigned

-  [The Console](https://www.codedex.io/javascript) - codexdex.io/javascript
- [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) — MDN 
- [A first splash into JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/A_first_splash) — MDN
- [Variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables) — MDN (optional but helpful)

### Reference

- [Chrome DevTools Overview](https://developer.chrome.com/docs/devtools/overview/)
- [Firefox DevTools User Docs](https://firefox-source-docs.mozilla.org/devtools-user/)

### Video

- [JavaScript in 100 Seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE) — Fireship
- [Chrome DevTools Crash Course](https://www.youtube.com/watch?v=x4q86IjJFag) — Traversy Media

---

## Alternatives

### If DevTools feels overwhelming:

- Focus only on Console tab
- Skip Elements panel deep dive
- "We'll use more tabs as we need them"

### If students are ahead:

- Point them to JavaScript30 Day 1
- Encourage experimentation with more DOM manipulation
- Preview Week 1's theme toggle concept

### If students are struggling:

- Pair them with someone more comfortable
- Emphasize reading over writing
- "You don't need to memorize. You need to recognize."

---

## Accessibility Checkpoint

### This Week's Focus

Week 0 introduces accessibility through DevTools awareness. Students learn that:

1. **DevTools has keyboard navigation** — Tab through panels, Enter to select, arrow keys within
2. **Console output is accessible** — Text can be copied for screen readers
3. **Errors are informative** — Well-written errors help everyone, including those using assistive technology

### Concrete Tasks

- [ ] During DevTools demo, show keyboard navigation (Tab, Enter, Esc)
- [ ] Mention that Console Playground has sufficient color contrast
- [ ] When discussing errors, emphasize that good error messages are an accessibility feature
- [ ] Preview: "Next week we'll learn about `prefers-color-scheme` — respecting user preferences"

### Connection to Future Weeks

| Week | Accessibility Focus |
|------|---------------------|
| 0 | DevTools keyboard navigation, error clarity |
| 1-2 | `prefers-color-scheme`, `prefers-reduced-motion` |
| 3-4 | Focus states, keyboard navigation, `aria-label` |
| 5-7 | Motion alternatives, reduced-motion implementation |
| 8-9 | Track-specific (canvas `aria-hidden`, decorative vs. content) |
| 10 | Full audit during Delight Audit |

---

## Open Questions

1. ~~**Timing:** Is Week 0 before the quarter officially starts (async) or the first in-class week?~~ — Week 0 is the first in-class week
2. ~~**MDN depth:** The full Scripting module has many lessons. Which are required vs. optional?~~ — See updated Resources section
3. ~~**Lab submission:** How do students submit Lab 0-1? Screenshot of console? Screen recording?~~ — See Lab 0-1 submission instructions
