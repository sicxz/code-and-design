# Build: The Behavioral Layer

**Due:** Before Day 2
**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 45–60 minutes

---

## Overview

You've experimented with JavaScript in the console. Now it's time to write code that lives in a file and runs on a real web page.

In this lab, you'll work through MDN's "Adding Interactivity" tutorial and build two interactive features: an image that changes when clicked and a personalized welcome message that remembers your name. These are the same patterns — `querySelector`, `addEventListener`, `localStorage` — that power everything we'll build this quarter.

---

## What You're Learning

- How to link a JavaScript file to an HTML page
- Using `querySelector()` to find elements on the page
- Using `addEventListener()` to respond to clicks
- Using `localStorage` to remember data between visits
- The pattern: **find → listen → respond**

---

## Requirements

Complete the MDN tutorial exercises in your GitHub repo:

- [ ] Create a `week-0` folder
- [ ] Add the `behavioral-layer` project folder
- [ ] Build the image changer with two custom images
- [ ] Build the personalized welcome message
- [ ] Style the "Change user" button
- [ ] Code includes LLM-generated explanations as comments
- [ ] Code includes your summary comment at the bottom
- [ ] Code runs without errors
- [ ] Published to GitHub Pages, add the link to your index.html under a week 0 level 2 heading. 

---

## Step-by-Step Guide

### Step 1: Download the Starter Files (2 min)

1. Go to the MDN tutorial: **[Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)**
2. Scroll to the **"A Hello world!" walkthrough** section
3. **[Download the example code](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/main)**
4. Unzip the file and rename the folder to `behavioral-layer`
5. Keep this folder ready — you'll drag it into your Codespace next

---

### Step 2: Set Up Your Codespace (5 min)

1. Go to your GitHub repository
2. Click the green **Code** button
3. Select the **Codespaces** tab
4. Click **Create codespace on main**

Wait for your Codespace to load — this gives you a full VS Code environment in your browser.

**Add your project:**

1. In the Codespace file explorer, right-click and create a new folder called `week-0`
2. Drag your `behavioral-layer` folder into `week-0`

Your structure should look like:
```
week-0/
└── behavioral-layer/
    ├── index.html
    ├── styles/
    │   └── style.css
    └── images/
        └── firefox-icon.png
```

---

### Step 3: Work Through the Tutorial

Go to **[MDN: JavaScript — Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)**

Work through each section in order:
1. **What is JavaScript?** — Try the examples in [CodePen](https://codepen.io)
2. **A "Hello world!" example** — Do this in your Codespace (Step 4)
3. **Adding an image changer** — Use your own images (Step 5-6)
4. **Adding a personalized welcome message** — Follow along (Step 7)

---

**Required for all code snippets you copy and paste:**

1. Paste the code into Claude or ChatGPT and ask: *"Explain this code like I'm 5 years old. Use a metaphor if it helps."*
2. Read until you understand what each line does.
3. Add the explanation as comments above or below the particular code in your `main.js` file.

---

### Step 4: Hello World in Your Codespace (5 min)

Follow the **"A Hello world!" example** section in the MDN tutorial, but do it in your Codespace.

**Install the Live Server extension:**

1. In your Codespace, click the Extensions icon in the left sidebar (or press `Ctrl/Cmd + Shift + X`)
2. Search for **"Live Server"** by Ritwick Dey
3. Click **Install**

**How to use Live Server:**
- Open your `index.html` file
- Right-click in the editor → **Open with Live Server**
- Or click **Go Live** in the status bar at the bottom

> For more options, check the [Live Server extension page](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

**Test your starter files:**

Open with Live Server and verify the site loads. 

---

### Step 5: Find Your Images (5 min)

Use DevTools to find the dimensions of `firefox-icon.png`. You'll need two images the same size.

**Where to find images:**
- [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com) for free photos
- [Picsum](https://picsum.photos) for placeholder images

**Requirements:**
- Both images must be the same dimensions as the original
- Name them `fox1.png` and `fox2.png` (or update the code to match your names)
- Place them in your `images/` folder

---

### Step 6: Add the Image Changer (15 min)

Follow the **"Adding an image changer"** section in the tutorial.

---

### Step 7: Add the Welcome Message (15 min)

Follow the **"Adding a personalized welcome message"** section in the tutorial.

**Additional requirement:** Style the button. You can design it yourself or find styles on CodePen — just cite your source in a comment.

**Make it your own:** Change the heading text, pick images that mean something to you, customize the colors. This isn't just a tutorial — it's going in your portfolio.

---

### Step 8: Write Your Summary

At the bottom of your `main.js`, add a summary comment:

```javascript
/*
  SUMMARY:
  This file does two things:
  1. [Your explanation of the image changer]
  2. [Your explanation of the welcome message]

  The key pattern I learned: [your insight here]
*/
```

---

### Step 9: Commit and Push (5 min)

1. Save all files
2. In the Codespace, open the Source Control panel (left sidebar)
3. Stage your changes, write commit message: `Add behavioral layer lab`
4. Click **Commit** then **Sync Changes**
5. Verify your live site at `https://yourusername.github.io/DESN378-code-design-2/week-0/behavioral-layer/`

---

## Complete Criteria

Your lab is complete when:

- [ ] Project lives in `week-0/behavioral-layer/`
- [ ] Image changer works (click swaps between two images)
- [ ] Welcome message shows your name
- [ ] Name persists after page reload (localStorage working)
- [ ] "Change user" button lets you update your name
- [ ] Button is styled (not default browser style)
- [ ] No errors in browser console
- [ ] Published to GitHub Pages

---

## Stretch Goals

Done early? Try these enhancements:

1. **Add keyboard support** — Make the image swap when you press Enter or Space while it's focused (add `tabindex="0"` to the image)

2. **Add a transition effect** — Use CSS transitions to fade between images instead of an instant swap

3. **Add a third image** — Modify the code to cycle through three images instead of two

4. **Clear localStorage button** — Add a "Forget me" button that clears the saved name

---

## Troubleshooting

### Nothing happens when I click the image

1. **Check the console** — Open DevTools (Cmd/Ctrl + Option/Shift + I) and look for red errors
2. **Is the script linked?** — Make sure `<script src="main.js"></script>` is at the end of `<body>`
3. **File paths correct?** — Verify your image paths match exactly (case-sensitive!)

### The prompt keeps appearing

This happens if you click "Cancel" or leave the prompt empty. The code asks again to prevent blank names. Enter something to continue.

### localStorage isn't working

1. Make sure you're using Live Server in your Codespace, not opening the file directly (file:// URLs can't use localStorage)
2. Check if your browser blocks localStorage in private/incognito mode

### Images don't swap

Double-check that:
- Image file names match exactly (including extension: `.png` vs `.jpg`)
- Images are in the `images/` folder
- The `src` paths in your JavaScript match the actual paths

### Button doesn't do anything

Make sure you have both the `addEventListener` for the button AND the `setUserName` function defined above it.

---

## Connection to Week 1

The patterns you learned today are the foundation for everything:

| This Lab | Week 1: Theme Toggle |
|----------|---------------------|
| `querySelector("img")` | `querySelector(".theme-toggle")` |
| Click to swap images | Click to swap themes |
| `localStorage.setItem("name", ...)` | `localStorage.setItem("theme", ...)` |
| Remember name on reload | Remember theme on reload |

You just built the exact same logic you'll use for dark mode. The only difference is what you're storing and what you're changing.

---

## Submission

**Submit to Canvas:**
1. Link to your GitHub repository
2. Link to your live page: `https://yourusername.github.io/DESN378-code-design-2/week-0/behavioral-layer/`

---

## Resources

- [MDN: Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) — The tutorial we're working through
- [MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) — Finding elements
- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) — Responding to events
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) — Saving data locally
