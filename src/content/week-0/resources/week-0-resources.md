# Week 0 Resources: The Workshop

**Topics:** JavaScript Introduction, DevTools, Console, Script Linking

---

## Lectures

### Day 1: The Behavioral Layer
→ **[Lecture Slides](https://docs.google.com/presentation/d/1DA4Djfiy8rPv8m0ICxGS0ncj0jTnP7VcDJM1nuSIpYs/edit?usp=sharing)**

Variables, functions, event listeners, DOM selection — JavaScript fundamentals from a designer's perspective.

### Day 2: TBD
*Lecture content coming soon*

---

## Student Repository

→ **[DESN-378-code-design-2](https://github.com/sicxz/DESN-378-code-design-2)**

Your workspace for the quarter. Clone this template to start building your portfolio.

---

## Course Resources

### Console Playground
→ **[Console Playground](https://code-and-design.org/demos/console-playground.html)**

Interactive sandbox for practicing DevTools and console commands. Use this during Day 1 lecture.

### Designer's DevTools Field Guide
→ **[DevTools Field Guide](https://code-and-design.org/resources/dev-tools-fieldguide/)**

A custom-built guide that explains DevTools from a designer's perspective. Reference this throughout the quarter when you need help with:

- Visual Tools (Elements panel) — reading structure and styles
- Behavioral Tools (Console) — understanding state and events

---

## Assigned (Required)

Complete these before or during Week 0:

### For Day 1

| Resource | Type | Time | Notes |
|----------|------|------|-------|
| [JavaScript in 100 Seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE) | Video | 2 min | Fireship — fast, visual intro |
| [A Designer's Guide to JavaScript](https://react.design/javascript) | Article | 15 min | Designer-focused explanation |

### For Day 2

| Resource | Type | Time | Notes |
|----------|------|------|-------|
| [Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) | Tutorial | 30 min | MDN — hands-on practice |
| [What went wrong? Troubleshooting JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong) | Tutorial | 20 min | Error reading practice |

### Tutorial (External Platform)

| Resource | Type | Time | Notes |
|----------|------|------|-------|
| [Codedex JavaScript Console](https://www.codedex.io/javascript) | Interactive | 45 min | Exercises 1-5 — see Tutorial 0-1 |

---

## Reference

### DevTools Documentation

- [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/) — We use Firefox in this course
- [Chrome DevTools Overview](https://developer.chrome.com/docs/devtools/overview/) — If you prefer Chrome

### JavaScript Basics

- [MDN JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps) — Learning path
- [Variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables) — Deep dive on variables

---

## Video

### Essential

| Video | Duration | Why Watch |
|-------|----------|-----------|
| [JavaScript in 100 Seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE) | 2 min | Fireship — quick, visual overview |
|                                                              |          | h                                 |

### Recommended

| Video | Duration | Why Watch |
|-------|----------|-----------|
| [HTML/CSS/JS Crash Course Part 1](https://www.youtube.com/watch?v=O9Uauq-Gd0c) | 15 min | Reviews the three layers |
| [Learn JavaScript in 1 Hour](https://www.youtube.com/watch?v=W6NZfCO5SIk) | 60 min | Mosh — thorough explanations |

### For Fun

| Video | Duration | Why Watch |
|-------|----------|-----------|
| [The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4) | 10 min | Fireship — explains why JS is quirky |

---

## Deep Dive (Articles)

### Designer-Focused

- [JavaScript for Designers](https://alistapart.com/article/javascript-for-web-designers/) — A List Apart, addresses designer fears
- [UI/UX: JavaScript for Designers](https://nicklawrencedesign.medium.com/javascript-for-designers-dabc8871d4c1) — Medium, practical perspective

### Technical Deep Dive

- [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) — MDN, conceptual foundation
- [JavaScript for Cats](http://jsforcats.com/) — Whimsical but effective introduction
- [Eloquent JavaScript, Ch. 1-2](https://eloquentjavascript.net/) — Free online book, for those wanting depth

---

## Tools

### Browser DevTools

| Tool | Platform | Notes |
|------|----------|-------|
| Firefox DevTools | Firefox | We use this in class |
| Chrome DevTools | Chrome, Edge | Most popular alternative |
| Safari Web Inspector | Safari | macOS only |

### Online Playgrounds

| Tool | Best For |
|------|----------|
| [CodePen](https://codepen.io/) | Quick experiments, sharing |
| [JSFiddle](https://jsfiddle.net/) | Simple testing |

---

## Inspiration

- [CodePen Topics](https://codepen.io/topics/) — See what's possible
- [Active Theory](https://activetheory.net/work) — Award-winning interactive work
- [Refokus](https://www.refokus.com/) — Modern web experiences

---

## Cheat Sheet

### Opening DevTools
```
Mac:     Cmd + Option + I
Windows: Ctrl + Shift + I
Or:      Right-click → Inspect
```

### Console Basics
```javascript
// Math
2 + 2                    // 4
10 * 5                   // 50

// Strings
"Hello"                  // "Hello"
"Hello".length           // 5
"hello".toUpperCase()    // "HELLO"

// Finding elements
document.querySelector('h1')
document.querySelectorAll('a')
document.querySelectorAll('a').length

// Changing things
document.body.style.backgroundColor = "lightblue"
document.querySelector('h1').textContent = "New text"
```

### Linking JavaScript
```html
<script src="script.js" defer></script>
```

---

## Week 1 Preview

- CSS Custom Properties (design tokens)
- querySelector + addEventListener
- The $0 Bridge (connecting Inspector to Console)
- Building a theme toggle
- Your first interactive feature!
