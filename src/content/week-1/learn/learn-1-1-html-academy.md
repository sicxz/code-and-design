# Learn: HTML Academy — Introduction to JavaScript

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 60–90 minutes
**Platform:** [HTML Academy](https://htmlacademy.org/courses/intro-to-web-development/javascript)

---

## TL;DR
Complete HTML Academy's Chapter 2 on JavaScript. Learn the Find → Listen → Change pattern for interactive elements.

---

## Submit
No submission required — come to Day 2 ready to discuss what clicked and what confused you.

---

## Overview

This week's Learn activity reinforces the JavaScript fundamentals you practiced in Week 0. HTML Academy's "Introduction to JavaScript" chapter walks you through building a theme switcher — exactly what we'll implement in code next week.

**Why HTML Academy?**
- Interactive, browser-based exercises
- Immediate feedback on your code
- Builds on concepts from the MDN tutorial
- Theme switcher project connects directly to our course content

---

## What You're Learning

By completing this tutorial, you'll practice:

- Using `querySelector` to find elements
- Adding event listeners with `addEventListener`
- Changing text content with `textContent`
- Working with `classList` to toggle states
- Reading and writing to `localStorage`
- Working with form inputs using `input.value`

---

## The Tutorial

Go to **[HTML Academy: Introduction to JavaScript](https://htmlacademy.org/courses/intro-to-web-development/javascript)** and complete Chapter 2.

### Chapter 2 Topics:

1. Why is JavaScript necessary?
2. Introduction to the theme switcher
3. Find an element using querySelector
4. Output the element to the console
5. Remove a class using classList.remove
6. Add a class using classList.add
7. Declare a variable
8. Introduction to the event handler
9. Make the theme switch when the button is clicked
10. Introduction to classList.toggle
11. Finish the theme switcher
12. Introduction to the textContent property
13. Change the textual content for the element
14. Uncomment the code
15. Retrieve data from the input field using input.value
16. Use concatenation
17. Summary

---

## What to Focus On

As you work through the exercises, pay attention to:

### The Pattern
```javascript
// 1. Find the element
const element = document.querySelector('.selector');

// 2. Listen for an event
element.addEventListener('click', function() {
  // 3. Do something
  element.classList.toggle('active');
});
```

This **Find → Listen → Change** pattern is the foundation of interactive JavaScript.

### Vocabulary to Lock In
- `querySelector` — "Find this element"
- `addEventListener` — "When this happens, do that"
- `classList.toggle` — "Flip this state on/off"
- `textContent` — "The text inside this element"
- `input.value` — "What the user typed"

---

## Connection to This Week

This tutorial keeps your JavaScript skills warm while we focus on design systems in Figma. Next week, you'll use these exact concepts to build a working theme toggle in your portfolio.

**The sequence:**
1. Week 0: Learn the concepts (MDN tutorial)
2. Week 1: Reinforce with practice (HTML Academy) + Design in Figma
3. Week 2: Build it in code

---

## If You Get Stuck

- **Re-read the instructions** — HTML Academy gives helpful hints
- **Check your syntax** — missing quotes, parentheses, or semicolons cause errors
- **Use the browser console** — `console.log()` helps you see what's happening
- **Ask in Slack** — your classmates might have the same question

---

## Resources

- [HTML Academy: Intro to Web Development](https://htmlacademy.org/courses/intro-to-web-development/javascript)
- [MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
