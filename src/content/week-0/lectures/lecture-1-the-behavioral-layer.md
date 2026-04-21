# Lecture 1: The Behavioral Layer

**Week 0, Day 1**
**Duration:** 60 minutes
**Format:** Lecture + Guided Exploration

---

## Learning Objectives

By the end of this lecture, students will:
- Understand JavaScript's role as the "behavioral layer" of web design
- Navigate the Chrome DevTools Console
- Execute simple expressions in the console
- Recognize basic JavaScript syntax patterns

---

## Pre-Lecture Setup

- Browser open (any website)
- DevTools ready to open
- Students have laptops open and ready to follow along

---

## Lecture Outline

### Part 1: What is JavaScript? (15 min)

#### Opening: The Three Layers

"Let's start with what you already know."

**Draw on board:**

```
┌─────────────────────────────────────┐
│  BEHAVIOR (JavaScript)              │  ← What it DOES
├─────────────────────────────────────┤
│  PRESENTATION (CSS)                 │  ← How it LOOKS
├─────────────────────────────────────┤
│  STRUCTURE (HTML)                   │  ← What it IS
└─────────────────────────────────────┘
```

"In 368, you mastered structure and presentation. This quarter, we add behavior."

#### The Nervous System Metaphor

"Think of a website like a body:"
- **HTML** is the skeleton — structure, bones, what exists
- **CSS** is the skin and clothes — appearance, style
- **JavaScript** is the nervous system — it senses and responds

"JavaScript is what makes a website feel *alive*. It responds to you."

#### Examples of JavaScript Behavior

**[SHOW LIVE EXAMPLES]** (or describe)

- Toggle a dark mode switch → page colors change
- Type in a search box → suggestions appear
- Scroll down → elements animate into view
- Click a button → form submits
- Leave the page → "Are you sure?" popup

"All of these are JavaScript. The page is responding to your actions."

#### What JavaScript is NOT

| JavaScript is NOT... | Instead... |
|---------------------|------------|
| A design tool | CSS handles appearance |
| Magic | It follows strict rules |
| Something you memorize | You look things up |
| Only for "programmers" | Designers use it too |

"You don't need to become a computer scientist. You need to make things respond."

---

### Part 2: DevTools Tour (20 min)

#### Opening DevTools

"Everyone open a website. Any website. Your portfolio, Google, anything."

**[DEMO]**

"Open DevTools:"
- **Mac:** `Cmd + Option + I`
- **Windows/Linux:** `Ctrl + Shift + I`
- **Or:** Right-click anywhere → Inspect

"You've seen this in 368. But we're going to a new place."

#### The Console Tab

**[CLICK TO CONSOLE TAB]**

"This is the Console. It's where JavaScript lives."

"Two things happen here:"
1. You can type JavaScript and run it immediately
2. The page tells you about errors

**[DEMO]** Type in console:

```javascript
2 + 2
```

"Press Enter. What do you see?"

**Response:** `4`

"You just ran JavaScript. The console evaluated your code and showed the result."

#### Types of Values

**[DEMO]** Try these:

```javascript
10 * 5
```

"Numbers work like math."

```javascript
"Hello, World!"
```

"Text goes in quotes. We call these 'strings'."

```javascript
"Hello, " + "World!"
```

"You can combine strings with `+`."

```javascript
true
```

"This is a boolean — true or false. Useful for yes/no questions."

#### Talking to the Page

"Here's where it gets interesting. JavaScript can see and change the page."

**[DEMO]**

```javascript
document.title
```

"That's the page title. JavaScript just read it from the page."

```javascript
document.body.style.backgroundColor = "lightblue"
```

"Whoa. We just changed the page. No CSS file. JavaScript did that."

```javascript
document.querySelector('h1')
```

"This finds the first `<h1>` on the page. `querySelector` uses the same selectors you use in CSS."

```javascript
document.querySelector('h1').textContent = "I changed this heading!"
```

"We found it and changed it."

**Key insight:**

"JavaScript can find things on the page and change them. That's the foundation of everything we'll do."

---

### BREAK (10 min)

---

### Part 3: Reading Code (15 min)

#### The Goal This Week

"I don't expect you to write complex JavaScript yet. I want you to **recognize** it."

"When you see code, you should be able to say: 'That's a variable,' or 'That's a function.'"

#### Vocabulary Tour

**[SHOW CODE ON SCREEN]**

```javascript
// This is a comment. The browser ignores it.

// A variable stores a value
const greeting = "Hello";

// A function is reusable code
function sayHello() {
  console.log("Hello!");
}

// An event listener waits for something to happen
button.addEventListener('click', function() {
  // This code runs when the button is clicked
});
```

**Walk through each:**

| When you see... | It means... |
|-----------------|-------------|
| `//` | Comment (ignored by browser) |
| `const` or `let` | Creating a variable |
| `function` | Defining reusable code |
| `document.querySelector` | Finding an element |
| `addEventListener` | Waiting for an event |
| `console.log` | Printing to the console |

#### Reading, Not Writing

"You don't need to write this from memory. You need to read it and understand what's happening."

**Exercise:** Show code, ask what it does:

```javascript
const name = "Alex";
console.log("Hello, " + name);
```

"What does this print to the console?"

**Answer:** `Hello, Alex`

---

### Part 4: Console Playground (25 min)

#### Guided Experimentation

"Now it's your turn. I'll give you things to try. Type along with me."

**Math:**

```javascript
100 / 3
2 ** 8
(10 + 5) * 2
```

**Strings:**

```javascript
"JavaScript".length
"hello".toUpperCase()
"Hello World".includes("World")
```

**Page interaction:**

```javascript
document.querySelectorAll('a')
document.querySelectorAll('a').length
document.querySelectorAll('img').length
```

"How many links are on this page? How many images?"

**Modification:**

```javascript
document.body.style.fontFamily = "Georgia"
document.body.style.transform = "rotate(1deg)"
```

"Refresh to undo."

#### Free Exploration (10 min)

"Now experiment. Try to:"
- Change colors
- Change text
- Count different elements
- Break something (it's okay!)

"If you get an error, read it. We'll talk about errors on Day 2."

---

### Closing (5 min)

#### What You Just Did

- Opened DevTools
- Ran JavaScript in the console
- Changed a live web page
- Recognized basic syntax

"That's your first day with JavaScript. You didn't just read about it — you used it."

#### Assignments

1. **Build 0-1: The Setup** (do first!)
   - Create your GitHub repo from template
   - Enable GitHub Pages
   - Due before Day 2

2. **learn 0-1: Codedex Console Fundamentals**
   - Complete exercises 1-5 on Codedex.io
   - Due before Day 2

3. **learn 0-2: Console Explorer**
   - Guided exploration with the DevTools Field Guide
   - Due before Day 2

#### Preview

"Day 2: We'll learn how to save JavaScript in files and connect them to HTML pages. Then Week 1 begins the first project."

---

## Slide Outline (if using slides)

1. Title: "The Behavioral Layer"
2. Three layers diagram
3. Nervous system metaphor
4. Examples of JS behavior (with GIFs if possible)
5. What JavaScript is NOT
6. DevTools: how to open
7. Console tab screenshot
8. Demo: math in console
9. Demo: strings in console
10. Demo: document.title
11. Demo: changing background color
12. Demo: querySelector
13. Code vocabulary table
14. Reading exercise
15. Playground: try these
16. Assignments

---

## Common Questions

**"Is this the same as Java?"**
No. JavaScript and Java are completely different languages. The name is a historical accident.

**"Do I need to memorize all this?"**
No. You need to recognize patterns. You'll look up syntax all the time — professionals do too.

**"What if I break the website?"**
Refresh the page. Your changes are temporary. You can't permanently break anything from the console.

---

## Instructor Notes

- Let students type along — muscle memory matters
- Expect some students to be scared of the console. Reassure them.
- The goal is comfort, not mastery
- If someone is ahead, challenge them: "Can you change the font size of every paragraph?"
- If someone is behind, pair them up
