# querySelector Selector Cheatsheet

This is your reference for finding elements in JavaScript.

---

## The Pattern

```javascript
// Find ONE element
const element = document.querySelector('selector');

// Find ALL matching elements
const elements = document.querySelectorAll('selector');
```

---

## Selector Types

### By Tag Name

```html
<button>Click me</button>
<p>Some text</p>
```

```javascript
document.querySelector('button')    // → <button>Click me</button>
document.querySelector('p')         // → <p>Some text</p>
```

---

### By Class (use a dot `.`)

```html
<button class="theme-toggle">Toggle</button>
<button class="primary">Submit</button>
```

```javascript
document.querySelector('.theme-toggle')  // → <button class="theme-toggle">
document.querySelector('.primary')       // → <button class="primary">
```

**Common mistake:**
```javascript
document.querySelector('theme-toggle')   // ❌ Returns null! (forgot the dot)
document.querySelector('.theme-toggle')  // ✅ Correct
```

---

### By ID (use a hash `#`)

```html
<header id="main-header">...</header>
<section id="about">...</section>
```

```javascript
document.querySelector('#main-header')   // → <header id="main-header">
document.querySelector('#about')         // → <section id="about">
```

---

### By Data Attribute (use brackets `[]`)

```html
<button data-theme="light">Light</button>
<button data-theme="dark">Dark</button>
<div data-visible="true">...</div>
```

```javascript
document.querySelector('[data-theme]')           // → First element with data-theme
document.querySelector('[data-theme="dark"]')    // → The dark theme button
document.querySelector('[data-visible="true"]')  // → The div
```

---

### Combined Selectors

```html
<button class="btn primary">Submit</button>
<button class="btn secondary">Cancel</button>
```

```javascript
// Element with multiple classes
document.querySelector('.btn.primary')    // → <button class="btn primary">

// Element type with class
document.querySelector('button.primary')  // → Same result
```

---

## querySelector vs querySelectorAll

| Method | Returns | Use When |
|--------|---------|----------|
| `querySelector` | First match (or `null`) | You want ONE element |
| `querySelectorAll` | NodeList of ALL matches | You want MULTIPLE elements |

```html
<button class="theme-btn">Light</button>
<button class="theme-btn">Dark</button>
<button class="theme-btn">System</button>
```

```javascript
// Get just the first one
const firstBtn = document.querySelector('.theme-btn');
// → <button class="theme-btn">Light</button>

// Get all of them
const allBtns = document.querySelectorAll('.theme-btn');
// → NodeList(3) [button, button, button]

// Loop through all of them
allBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Clicked:', btn.textContent);
  });
});
```

---

## What Does `null` Mean?

If `querySelector` returns `null`, it means **nothing matched**.

```javascript
const toggle = document.querySelector('.theme-toggle');
console.log(toggle);  // null = element not found!
```

**Debugging checklist:**
1. Did you spell the selector correctly?
2. Did you include the `.` for classes or `#` for IDs?
3. Does the element exist in your HTML?
4. Is your script running before the HTML loads? (Add `defer` to script tag)

---

## DevTools Trick

Copy a selector directly from DevTools:

1. Right-click an element in the page
2. Click **Inspect**
3. In Elements panel, right-click the highlighted element
4. Click **Copy** → **Copy selector**
5. Paste into your JavaScript

---

## Quick Reference

| HTML | JavaScript Selector |
|------|-------------------|
| `<button>` | `'button'` |
| `<div class="card">` | `'.card'` |
| `<header id="top">` | `'#top'` |
| `<button class="btn primary">` | `'.btn.primary'` |
| `<input type="text">` | `'input[type="text"]'` |
| `<div data-theme="dark">` | `'[data-theme="dark"]'` |
| All paragraphs | `querySelectorAll('p')` |

---

## See Also

- [MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
