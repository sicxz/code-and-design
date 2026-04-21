# Learn: Console Explorer

**Due:** Before Day 2
**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 30–45 minutes

---

## Overview

Your first encounter with JavaScript happens in the browser console. This lab is about exploration and discovery — there's no "wrong" answer, just careful experimentation. By the end, you'll be comfortable opening DevTools, typing commands, and seeing how JavaScript can interact with web pages.

---

## What You're Learning

- How to open and use Chrome/Firefox DevTools
- The Console as a JavaScript playground for trying ideas and seeing errors
- How JavaScript can read and modify web pages (the DOM)
- How to read and run basic JavaScript expressions
- The $0 bridge between Elements and Console

---

## Reference Material

Use the **Designer's DevTools Field Guide** as a companion to this lab:

→ **[DevTools Field Guide](../resources/dev-tools-fieldguide/index.html)**

The Field Guide explains DevTools from a designer's perspective. If you get stuck or want to go deeper, start there.

---

## Before You Start

Go to the **Console Playground** page:

→ **[Console Playground](../demos/console-playground.html)**

This page is designed for experimentation. All the examples below will work on it, and there's a hidden surprise waiting for you to find.

*(You can also experiment on any website, but the Playground has elements that match these examples exactly.)*

---

## Part 1: Open DevTools (≈5 min)

1. Open the Console Playground (or any website)

2. Open DevTools:
   - **Mac:** `Cmd + Option + K` (opens Console directly in Firefox)
   - **Windows/Linux:** `Ctrl + Shift + K`
   - **Or:** Right-click → Inspect → Console tab

3. You should see a blinking cursor — this is where you'll type JavaScript.

> 💡 **Need more guidance?** The Field Guide has a step-by-step walkthrough: [Your First 15 Minutes](../resources/dev-tools-fieldguide/start.html)

---

## Part 2: Basic Expressions (≈10 min)

Type each of these in the console and press Enter. Watch what appears after each one.

### Math

```javascript
2 + 2
```

```javascript
100 * 3
```

```javascript
50 / 8
```

```javascript
2 ** 10
```
*(2 to the power of 10)*

### Text (Strings)

```javascript
"Hello, World!"
```

```javascript
"Hello, " + "JavaScript!"
```

```javascript
"DESN 378".length
```

```javascript
"whisper".toUpperCase()
```

**Hint:** Strings need quotes; numbers don't.

### Short questions (answer in 1–2 sentences each):

- What happens if you type `"hello" + 5`?
- What does `.length` measure in the examples above?
- What happens if you forget the closing quote on a string? What error do you see?

---

## Part 3: Talking to the Page (≈10 min)

JavaScript can interact with the page you're viewing through the `document` object and DOM methods.

### Reading the page

Try each:

```javascript
document.title
```

```javascript
document.body
```

```javascript
document.querySelector('h1')
```

```javascript
document.querySelectorAll('a')
```

```javascript
document.querySelectorAll('a').length
```

### Changing the page

Then try:

```javascript
document.body.style.backgroundColor = 'lightblue'
```

```javascript
document.body.style.fontFamily = 'Georgia, serif'
```

```javascript
document.querySelector('h1').textContent = 'I changed this!'
```

```javascript
document.querySelector('h1').style.color = 'tomato'
```

**Note:** Refresh the page to undo your changes.

### Short questions:

- What does `document.querySelector('h1')` return when it finds nothing?
- How many links (`<a>` tags) are on the page you're viewing?

> 💡 **Getting `null`?** That means your selector didn't find anything. See the Field Guide: [Reading Errors](../resources/dev-tools-fieldguide/errors.html)

---

## Part 4: Exploration (≈10 min)

Now it's your turn to explore. Use the console to:

1. **Change colors** — background, text, or borders
2. **Change text** — headings, paragraphs, button labels
3. **Count elements** — How many images? How many `<div>`s?
4. **Intentionally "break" something** — What happens when you run invalid code?

### Things to try on the Console Playground:

```javascript
document.querySelector('#counter').textContent = '999'
```

```javascript
document.querySelector('.color-box').style.background = 'hotpink'
```

```javascript
document.querySelector('#primary-btn').textContent = 'CLICK ME!'
```

```javascript
document.querySelector('body').style.transform = 'rotate(2deg)'
```

```javascript
alert('Hello from the console!')
```

```javascript
console.log('This appears in the console, not a popup')
```

### Challenge: Find the hidden message

Somewhere on the Console Playground, there's a hidden element. Can you find it and make it visible?

**Hints:**
- Use `document.querySelectorAll('*')` to see all elements
- Hidden elements often have `style.display = 'none'`
- Try changing that property to `'block'`

> 💡 **Stuck?** The Field Guide explains how to select and manipulate elements: [The $0 Bridge](../resources/dev-tools-fieldguide/bridge.html)

You can clear the console at any time with the clear button or the `clear()` command.

---

## Part 5: Reflection (submit these)

Answer in complete sentences (bullet points are fine):

1. **What's one thing you changed on a page that surprised you?**

2. **What error message did you encounter? What did it say, and what caused it?**

3. **In your own words, what's the difference between `alert()` and `console.log()`?**

4. **Rate your comfort level with DevTools on a scale from 1–5** (1 = "still very unsure", 5 = "very comfortable")

---

## Submission

Submit to Canvas:

- A screenshot of your console with at least 5 different commands you typed (not just the provided ones)
- Your answers to the Part 5 reflection questions

**Complete criteria** (10 pts complete / 0 pts incomplete):

- Screenshot clearly shows the console with multiple commands and results
- At least 3 of the reflection questions are answered thoughtfully
- Evidence of experimentation (not just copying and pasting the examples)

---

## Stretch Goals (optional)

If you finish early or want to explore more:

1. **Find the CSS** — In the Elements/Inspector panel, click an element and look at the Styles pane. Try changing a value (like a color or font size) and see the effect.

2. **localStorage preview** — Type `localStorage` in the console. What do you see? (These key–value pairs will matter in Week 2.)

3. **Inspect a site you admire** — Open DevTools on a favorite site.
   - How is their HTML structured?
   - Can you find their JavaScript files in the Sources or Debugger tab?

---

## Common Issues

### "I don't see a Console tab"
Click the `>>` icon in DevTools to see hidden tabs, or use the menu to open the Console panel.

### "My code gave an error"
That's expected when learning. Read the error message: which line does it reference, and what does it say?

### "I changed something and now the page looks broken"
Refresh the page. Your changes in DevTools are temporary.

### "querySelector returns null"
The element you're looking for doesn't exist on this page, or the selector doesn't match anything. Double-check your selector syntax (remember: `.class` and `#id`).

---

## Connection to Week 1

Everything you practiced here — `querySelector`, changing `.style`, reading `.textContent` — becomes the foundation for your first project.

In Week 1, you'll use these same techniques to build a theme toggle that responds to user clicks. The console is where you'll debug it.

---

## Resources

- [Chrome DevTools Overview](https://developer.chrome.com/docs/devtools/overview/)
- [Chrome Console Panel](https://developer.chrome.com/docs/devtools/console/)
- [Firefox DevTools User Docs](https://firefox-source-docs.mozilla.org/devtools-user/)
