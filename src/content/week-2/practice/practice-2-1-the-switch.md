# Practice 2-1: The Switch

**Due:** End of class
**Points:** 10
**Time:** 45-60 minutes

---

## The Goal

Build a light/dark theme toggle from scratch. When a user clicks a button, the entire page's color scheme should change.

This is the foundation for Project 1 and will become a permanent feature of your portfolio.

---

## Requirements

- [ ] A button that toggles the page between light and dark modes
- [ ] At least 3 CSS custom properties (variables) that change between modes
- [ ] Colors must be applied using `var()` — no hardcoded color values in your element styles
- [ ] The toggle must work repeatedly (light → dark → light → dark...)

---

## Concepts You'll Need

Research these before you start coding:

| Concept | What it does | MDN Reference |
|---------|--------------|---------------|
| `document.querySelector()` | Finds an element in the page | [MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) |
| `addEventListener()` | Runs code when something happens (like a click) | [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) |
| `classList.toggle()` | Adds a class if missing, removes it if present | [MDN: classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) |
| CSS Custom Properties | Variables that can be reused and overridden | [MDN: Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) |

---

## The Pattern

Think about what needs to happen:

1. **User clicks a button** → your code needs to detect this
2. **Something on the page changes** → a class gets added or removed
3. **CSS responds to that change** → different styles apply

Your job is to figure out how to connect these pieces.

---

## Hints (Use Sparingly)

<details>
<summary>Hint 1: How do I select an element?</summary>

`querySelector` takes a CSS selector as a string. If your button has a class, how would you write that selector in CSS?

</details>

<details>
<summary>Hint 2: How do CSS variables get overridden?</summary>

You can define variables in `:root` for defaults, then override them inside a more specific selector. What happens if you define the same variable inside `body.dark`?

</details>

<details>
<summary>Hint 3: Where should the class go?</summary>

Think about CSS specificity. If your variables are defined on `:root` and you want to override them, where would you add the class? What element contains everything on the page?

</details>

---

## Stretch Goals

1. Add a smooth transition when colors change
2. Change the button text to reflect the current mode
3. Add more variables: border colors, shadows, spacing
4. Use a sun/moon icon instead of text

---

## Submit

1. Add your CodePen link to the **Practice** table in your repo's README
2. Submit the link on Canvas

---

## Resources

- [MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
