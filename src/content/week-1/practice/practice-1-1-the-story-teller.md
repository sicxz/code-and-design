# Practice: The Story Teller

**Points:** 20
**Time Estimate:** 90–120 minutes

---

## TL;DR
Create an interactive story with 5 images. Clicking advances the narrative and updates text dynamically.

---

## Submit

1. **GitHub Pages link** — your live, working story
2. **GitHub repo link** — direct link to your `story-teller/` folder

---

## Overview

**This is practice.** You read the [MDN Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) tutorial in Week 0. You completed the exercises. Now you USE those concepts in a creative context.

Remember the event flow from Day 1:
```
User Action → Event Listener → State Change → UI Updates
```

That's exactly what you're building here: click an image → listener fires → update the step → change what's displayed.

**Choose your theme:**
- **MLK Day** — Tell a story about civil rights, community, or service
- **Valentine's Day** — Tell a story about connection, friendship, or love

---

## What You're Building

A single-page interactive experience where:
- 5 images tell a sequential story
- Clicking an image advances the story or triggers a change
- Text updates dynamically based on user interaction
- (Stretch) Progress is remembered using localStorage

---

## Requirements

### Core (Required)

1. **5 images** that form a narrative sequence
2. **Click interaction** — each image does something when clicked:
   - Advance to next part of story
   - Reveal hidden text
   - Change the image
   - Add a visual effect (class toggle)
3. **Dynamic text** — at least one text element changes based on interaction
4. **Uses these JavaScript concepts:**
   - `querySelector` or `querySelectorAll`
   - `addEventListener`
   - `textContent` or `innerHTML`
   - `classList.add`, `classList.remove`, or `classList.toggle`

### Stretch Goals

- **localStorage** — Remember which image/step the user was on
- **User input** — Personalize the story with the user's name
- **Transitions** — CSS transitions for smooth visual changes
- **Sound** — Add audio that plays on interaction

---

## Technical Specifications

### File Structure
```
week-1/
└── story-teller/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── assets/
        └── images/
            ├── image-1.jpg
            ├── image-2.jpg
            ├── image-3.jpg
            ├── image-4.jpg
            └── image-5.jpg
```

### HTML Structure (Example)
```html
<main class="story-container">
  <div class="story-image">
    <img src="assets/images/image-1.jpg" alt="Story image 1" data-step="1">
  </div>

  <div class="story-text">
    <p id="story-caption">Click the image to begin...</p>
  </div>

  <div class="story-progress">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</main>
```

### JavaScript Pattern
```javascript
// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');

// Story content
const captions = [
  "Click the image to begin...",
  "Chapter 1: The beginning...",
  "Chapter 2: The journey...",
  "Chapter 3: The challenge...",
  "Chapter 4: The turning point...",
  "Chapter 5: The resolution..."
];

// Track current step
let currentStep = 0;

// Listen for clicks
image.addEventListener('click', function() {
  currentStep++;

  if (currentStep < captions.length) {
    // Update caption
    caption.textContent = captions[currentStep];

    // Update image
    image.src = `assets/images/image-${currentStep + 1}.jpg`;

    // Update progress dots
    updateProgress(currentStep);
  }
});

function updateProgress(step) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index <= step) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
```

---

## Image Sources

**Free image resources:**
- [Unsplash](https://unsplash.com) — High-quality free photos
- [Pexels](https://pexels.com) — Free stock photos
- [Library of Congress](https://loc.gov/pictures) — Historical images (great for MLK theme)
- Your own photos or illustrations

**Image guidelines:**
- Consistent aspect ratio across all 5 images
- Optimized for web (under 500KB each)
- Descriptive alt text for accessibility

---

## Evaluation Criteria

| Criteria | Points |
|----------|--------|
| 5 images that tell a cohesive story | 4 |
| Click interaction works correctly | 4 |
| Text updates dynamically | 4 |
| Uses required JavaScript concepts | 4 |
| Code is organized and readable | 2 |
| Visual design supports the narrative | 2 |
| **Total** | **20** |

**Bonus points (up to 5):**
- localStorage implementation (+2)
- User personalization (+1)
- CSS transitions (+1)
- Creative/unexpected interaction (+1)

---

## Connection to Course

This practice reinforces what you've already learned:

**From Week 0:**
- [MDN Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) — querySelector, addEventListener, DOM manipulation

**From Week 1 Day 1:**
- Event Flow diagram (User Action → Listener → State → UI)
- Selector Cheatsheet (`.class`, `#id`, `[data-*]`)

**Preview of Week 2:**
- localStorage for remembering state (stretch goal)

The pattern here (click → change state → update UI) is the same pattern you'll use for theme toggles, accordions, and more complex interactions throughout the course.

---

## Inspiration

- [The Boat](https://www.sbs.com.au/theboat/) — Interactive graphic novel
- [Snow Fall (NYT)](https://www.nytimes.com/projects/2012/snow-fall/) — Scrollytelling pioneer
- [A Short History of the Highrise](http://www.nytimes.com/projects/2013/high-rise/) — Interactive documentary

You don't need to be this complex — but notice how they use interaction to reveal narrative.
