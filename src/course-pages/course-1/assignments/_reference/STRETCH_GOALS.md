# Stretch Goals: Level Up Your Skills

## About These Challenges

Finished your landing page early? Ready to push your skills further? These stretch goals are for you.

**IMPORTANT:** These are NOT copy-paste exercises. These challenges require you to:
- Research documentation independently
- Watch tutorials and understand concepts
- Experiment with different approaches
- Debug when things break (they will!)
- Possibly fail multiple times before succeeding
- Think creatively about solutions

**That's the point.** The base assignment gave you structure and guidance. Stretch goals test whether you can learn independently—one of the most critical skills for developers.

### What Makes These "Stretch" Goals?

- **No step-by-step instructions** - You'll need to figure out the implementation
- **Multiple valid approaches** - Research and choose what works for you
- **Real problem-solving** - You'll encounter bugs and need to debug
- **Independent research required** - Google, read docs, watch tutorials
- **2-4 hours per goal** - These take time and persistence

### Prerequisites

Before attempting these challenges:
- ✅ Completed base landing page (HTML/CSS)
- ✅ Comfortable with HTML structure and CSS styling
- ✅ Basic JavaScript knowledge (variables, functions, events)
- ✅ Patient and persistent mindset
- ✅ Comfortable reading documentation

---

## How to Approach These Challenges

**Don't jump straight into coding!** Follow this process:

### 1. Understand the Challenge
- Read the entire challenge description
- Identify what you're building and why it matters
- Define success criteria (how you'll know it works)

### 2. Research First
- Read about the concepts listed
- Watch at least one tutorial video
- Find 2-3 code examples to study
- Understand the approach before writing code

### 3. Plan Your Implementation
- Sketch out the HTML structure needed
- List the CSS states required
- Outline the JavaScript logic flow
- Identify potential challenges

### 4. Build Incrementally
- Start with HTML structure only
- Add CSS styling next
- Finally add JavaScript functionality
- Test each piece before moving on

### 5. Debug Systematically
- Use `console.log()` to check values
- Use browser DevTools to inspect elements
- Read error messages carefully
- Search for specific error messages

### 6. Refine and Document
- Clean up your code
- Add comments explaining your approach
- Test edge cases
- Document what you learned in your README

---

## Where to Find Help

### DO Use These Resources:

**Primary Sources:**
- **MDN Web Docs** (developer.mozilla.org) - The gold standard for web documentation
- **CSS-Tricks** (css-tricks.com) - Practical tutorials and explanations
- **JavaScript.info** - Comprehensive JS tutorial
- **Official API Documentation** - Always check the source

**Learning Resources:**
- Tutorial videos (YouTube, frontend courses)
- CodePen examples (study how others solved similar problems)
- Stack Overflow (for specific errors, but understand the answers)

### DON'T Just:
- ❌ Copy entire solutions without understanding
- ❌ Skip reading the documentation
- ❌ Give up after the first attempt
- ❌ Use jQuery or libraries (practice vanilla JavaScript)
- ❌ Submit code you don't understand

### When You're Stuck (>30 minutes):

1. **Take a break** - Fresh eyes help
2. **Rubber duck debug** - Explain the problem out loud
3. **Search the specific error** - Copy/paste error messages into Google
4. **Ask in class** - But explain what you've already tried
5. **Simplify** - Break the problem into smaller pieces

---

## Stretch Goal 1: Modal Window for Data Table

### The Challenge

Create a modal (popup overlay) that displays your data table when a user clicks a button. The modal should be closeable and accessible.

### Why It Matters

Modals are everywhere in modern web apps:
- Login/signup forms
- Image galleries and lightboxes
- Product quick views
- Confirmation dialogs
- Detailed information overlays

Learning modals teaches you about layering, focus management, and creating polished user experiences.

### Concepts to Research

Before coding, research these topics:

**CSS Concepts:**
- `position: fixed` vs `position: absolute` vs `position: relative`
- `z-index` and stacking contexts
- `display: none` vs `visibility: hidden` vs `opacity: 0`
- CSS transitions for smooth animations
- Backdrop overlays

**JavaScript Concepts:**
- DOM manipulation (`querySelector`, `classList`)
- Event listeners (`addEventListener`, `removeEventListener`)
- Event objects and `event.target`
- Keyboard events (`keydown`, key codes)
- Focus management

**Accessibility Concepts:**
- ARIA roles for dialogs
- Focus trapping (keeping focus inside modal)
- Screen reader announcements
- Keyboard navigation (Escape key, Tab key)

### Resources

**Essential Reading:**
- [MDN: `<dialog>` Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) - Modern HTML dialog element
- [MDN: CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [MDN: Using z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
- [A11y Project: Modal Dialog Pattern](https://www.a11yproject.com/posts/modal-dialog-pattern/)

**Helpful Tutorials:**
- [CSS-Tricks: Considerations for Building Modals](https://css-tricks.com/considerations-for-making-a-modal/)
- [JavaScript.info: Browser Events](https://javascript.info/events)
- [Web.dev: Building a Modal](https://web.dev/building-a-dialog-component/)

**Interactive Examples:**
- Search CodePen for "accessible modal" examples
- Study different animation approaches

### Starter Hints

**HTML Structure to Consider:**
- Button to trigger the modal (needs an ID or class)
- Modal container (initially hidden)
- Overlay/backdrop behind the modal
- Close button (X or "Close" text)
- Content area where your table will go

**CSS Properties to Research:**
- How to center a modal on screen
- How to create a semi-transparent overlay
- How to make the modal appear above other content
- How to prevent body scroll when modal is open
- Transition properties for smooth open/close

**JavaScript Methods to Look Up:**
- How to add/remove CSS classes
- How to listen for click events
- How to check which element was clicked
- How to listen for Escape key press
- How to prevent default behavior

### Questions to Answer Through Research

1. What's the difference between `position: fixed` and `position: absolute`? Which should you use for a modal?
2. How do you prevent the background content from scrolling when a modal is open?
3. What `z-index` value should the modal have?
4. How do you close a modal when clicking the backdrop (but not the modal content)?
5. What ARIA attributes should a modal have for accessibility?
6. How do you trap focus inside the modal when it's open?

### Success Criteria

Your modal should:
- [ ] Open when clicking a trigger button
- [ ] Display your data table inside
- [ ] Close when clicking:
  - The close button
  - The background overlay
  - The Escape key
- [ ] Prevent body scroll when open
- [ ] Animate smoothly (fade in/out or slide in/out)
- [ ] Be keyboard accessible
- [ ] Work on mobile devices

### Testing Checklist

- [ ] Modal opens smoothly
- [ ] Table is fully visible and scrollable if needed
- [ ] All three close methods work
- [ ] Background doesn't scroll when modal is open
- [ ] Background DOES scroll when modal is closed
- [ ] Escape key closes the modal
- [ ] Modal is centered on screen
- [ ] Works on different screen sizes
- [ ] Keyboard navigation works (Tab key cycles through modal content)

### Bonus Challenges

If you finish the basic modal:
- Add animation (slide up, fade in, scale from center)
- Add a second button to close (footer "Done" button)
- Make the modal scrollable if content is too tall
- Add a confirmation before closing (if form has unsaved changes)

---

## Stretch Goal 2: Scroll-Triggered Animations

### The Challenge

Animate elements as they scroll into view (fade in, slide up, etc.). Elements should appear with animation only when the user scrolls to them.

### Why It Matters

Scroll animations:
- Draw attention to content as users discover it
- Create a polished, professional feel
- Guide users through your page narrative
- Are used by virtually every modern website

This teaches you about performance-aware JavaScript and creating delightful user experiences.

### Concepts to Research

**JavaScript APIs:**
- Intersection Observer API (modern, performant approach)
- `getBoundingClientRect()` (position calculations)
- Scroll events vs Intersection Observer (performance differences)
- Observer options: `threshold`, `rootMargin`

**CSS Concepts:**
- `transform` property (translateY, scale, rotate)
- `opacity` for fade effects
- `transition` vs `animation`
- Creating "hidden" and "visible" states

**Performance:**
- Why scroll events can be slow
- Throttling and debouncing
- Paint and reflow concepts

### Resources

**Essential Reading:**
- [MDN: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [MDN: CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Web.dev: Intersection Observer](https://web.dev/intersectionobserver/)

**Tutorials:**
- [CSS-Tricks: A Deep Dive into Intersection Observer](https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/)
- [Kevin Powell: Scroll animations with Intersection Observer](https://www.youtube.com/results?search_query=kevin+powell+intersection+observer) (YouTube)
- [JavaScript.info: Intersection Observer](https://javascript.info/intersection-observer)

**Interactive Examples:**
- Search CodePen for "intersection observer fade in"
- Study different animation styles

### Approaches to Explore

**Approach 1: Intersection Observer + CSS (Recommended)**
- Use Intersection Observer to detect when elements enter viewport
- Add a CSS class when element is visible
- CSS handles the actual animation
- Best performance, clean separation of concerns

**Approach 2: CSS Scroll-Driven Animations (Experimental)**
- Pure CSS approach using `scroll-timeline`
- Check browser support
- May not work in all browsers yet

**Approach 3: Scroll Event Listeners (Less Recommended)**
- Listen to scroll events
- Calculate element position manually
- Update classes based on scroll position
- Can hurt performance if not throttled

### Starter Hints

**CSS States to Create:**
- "Hidden" state (before animation): Consider using:
  - `opacity: 0`
  - `transform: translateY(50px)` (start below)
  - Or `transform: scale(0.8)` (start smaller)
- "Visible" state (after animation): full opacity, normal position/scale
- Transition between states smoothly

**JavaScript Pattern to Research:**
- How to select all elements you want to animate
- How to create a new Intersection Observer
- What the callback function receives
- When to add the "visible" class
- Whether to stop observing after animation

**Variations to Try:**
- Fade in from bottom
- Slide in from left/right
- Scale up from center
- Rotate while fading
- Stagger animations (each element delayed slightly)

### Questions to Answer

1. What's the difference between scroll events and Intersection Observer?
2. Why is Intersection Observer better for performance?
3. What does `threshold: 0.1` mean in Observer options?
4. When should you `unobserve()` an element?
5. How do you create a staggered animation effect (elements appear one after another)?

### Success Criteria

Your scroll animations should:
- [ ] Trigger when elements scroll into view
- [ ] Animate smoothly (no jank)
- [ ] Not animate elements already in viewport on page load
- [ ] Work for multiple elements (all feature cards, for example)
- [ ] Perform well (no slowdown when scrolling)
- [ ] Respect `prefers-reduced-motion` for accessibility

### Testing Checklist

- [ ] Scroll down - elements animate as they appear
- [ ] Scroll up - animations don't replay (unless you want them to)
- [ ] Fast scrolling works smoothly
- [ ] Mobile scrolling performs well
- [ ] No console errors
- [ ] Animations look professional (not too slow, not too fast)

### Bonus Challenges

- Animate different elements differently (fade some, slide others)
- Create staggered animations (delay each element slightly)
- Add animation direction based on scroll direction
- Respect `prefers-reduced-motion` media query
- Animate on scroll out as well as scroll in

---

## Stretch Goal 3: Enhanced Form Handling

### The Challenge

Add JavaScript to enhance your contact form with:
1. Loading state (disable button, show spinner while submitting)
2. Success message (confirmation after submission)
3. Error handling (display error if something goes wrong)
4. Form reset (clear fields after successful submission)

### Why It Matters

Forms are critical for user interaction. Good form UX:
- Provides feedback so users know what's happening
- Prevents duplicate submissions
- Handles errors gracefully
- Confirms successful actions

This teaches you about asynchronous JavaScript and user feedback patterns.

### Concepts to Research

**JavaScript Concepts:**
- Form `submit` events
- `event.preventDefault()`
- `async` / `await` syntax
- `try` / `catch` error handling
- `FormData` API
- `fetch()` API (for async requests)
- Promise states (pending, fulfilled, rejected)

**DOM Manipulation:**
- Disabling buttons
- Showing/hiding elements
- Creating elements dynamically
- Adding/removing CSS classes
- Form `reset()` method

**UX Patterns:**
- Loading indicators (spinners, disabled states)
- Success messages (checkmarks, confirmation text)
- Error messages (clear, helpful, visible)
- Timing (how long to show success/error)

### Resources

**Essential Reading:**
- [MDN: FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [JavaScript.info: Async/await](https://javascript.info/async-await)

**Tutorials:**
- [CSS-Tricks: Working with Forms](https://css-tricks.com/form-validation-part-1-constraint-validation-html/)
- [Web.dev: More capable form controls](https://web.dev/more-capable-form-controls/)

### Starter Hints

**Form Submission Flow:**
1. User clicks submit
2. Prevent default form submission
3. Show loading state (disable button, show spinner)
4. Try to submit form (async)
5. If successful: show success message, reset form
6. If error: show error message
7. Re-enable button after complete

**JavaScript Methods to Research:**
- How to listen for form submit events
- How to prevent the form from submitting normally
- How to disable a button
- How to change button text
- How to show/hide elements
- How to reset a form
- How to use setTimeout() for delays

**CSS for States:**
- Disabled button styling
- Loading spinner (can use CSS or Unicode character ⏳)
- Success message styling (green, checkmark)
- Error message styling (red, warning icon)

### Questions to Answer

1. What does `event.preventDefault()` do and why do you need it?
2. What's the difference between synchronous and asynchronous code?
3. How do you handle errors in async functions?
4. Should you re-enable the submit button if there's an error?
5. How long should success/error messages display?
6. How do you simulate a delay for testing (before real backend)?

### Success Criteria

Your enhanced form should:
- [ ] Show loading state when submitting
- [ ] Disable submit button during submission
- [ ] Display success message after successful submit
- [ ] Clear form fields after success
- [ ] Show error message if something goes wrong
- [ ] Re-enable button after completion
- [ ] Prevent duplicate submissions

### Testing Checklist

- [ ] Submit button shows loading state
- [ ] Button is disabled while "submitting"
- [ ] Success message appears after submit
- [ ] Form fields clear after success
- [ ] Success message disappears after a few seconds (or has close button)
- [ ] Test error handling (disconnect internet, check error message)
- [ ] Can't submit twice quickly (button disabled prevents this)
- [ ] Error message is clear and helpful

### Bonus Challenges

- Add a loading spinner icon
- Validate form before submitting (check all fields filled)
- Show which field has an error
- Animate success/error messages (slide in, fade in)
- Add a "sending..." text to button
- Count characters in textarea, show limit

---

## Stretch Goal 4: Enhanced Navigation

### The Challenge

Add two navigation enhancements:

1. **Smooth Scrolling**: When clicking nav links, smoothly scroll to sections
2. **Active Section Highlighting**: Highlight the nav link for the currently visible section as the user scrolls

### Why It Matters

Good navigation UX:
- Helps users orient themselves on the page
- Provides smooth, polished interactions
- Makes single-page sites more intuitive
- Shows users where they are in the content

### Concepts to Research

**For Smooth Scrolling:**
- CSS `scroll-behavior` property (easiest method)
- JavaScript `scrollIntoView()` method
- JavaScript `scrollTo()` method
- Hash links and their default behavior

**For Active Section Highlighting:**
- Intersection Observer API (recommended)
- `getBoundingClientRect()` for position calculations
- Scroll event listeners
- Adding/removing CSS classes dynamically
- Fixed header offset considerations

**Performance:**
- Debouncing scroll events
- When to use passive event listeners
- Requestanimation frame

### Resources

**Essential Reading:**
- [MDN: scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
- [MDN: Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- [MDN: getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

**Tutorials:**
- [CSS-Tricks: Smooth Scrolling](https://css-tricks.com/snippets/jquery/smooth-scrolling/)
- [CSS-Tricks: Active Navigation Based on Scroll](https://css-tricks.com/fixed-headers-on-page-links-and-overlapping-content-oh-my/)

### Approach A: CSS-Only Smooth Scroll (Easiest)

**Research:**
- Add one line of CSS to enable smooth scrolling
- Works with hash links (#hero, #features, etc.)
- Supported in modern browsers

**Consider:**
- Does your fixed header overlap content when scrolling to sections?
- How do you account for header height?
- Research: `scroll-padding-top` CSS property

### Approach B: JavaScript Smooth Scroll (More Control)

**Research:**
- Prevent default hash link behavior
- Use `scrollIntoView()` with options
- Or calculate position and use `scrollTo()`
- Control animation timing and easing

### For Active Section Highlighting

**Steps to Figure Out:**
1. How do you detect which section is currently visible?
2. How do you get all your navigation links?
3. How do you remove the "active" class from all links?
4. How do you add the "active" class to the correct link?
5. Should you highlight the first section entering viewport or the last?

**Using Intersection Observer (Recommended):**
- Observe all sections
- When a section enters viewport, highlight its corresponding nav link
- Handle multiple sections visible at once

**Using Scroll Events (Alternative):**
- Listen to scroll events
- Calculate each section's position
- Determine which section is currently visible
- Update navigation classes accordingly

### Questions to Answer

1. What's the difference between CSS `scroll-behavior` and JavaScript scrolling?
2. How do you account for a fixed header when scrolling to sections?
3. What happens if two sections are visible at once? Which nav link should be highlighted?
4. How do you get from a section ID (#features) to its corresponding nav link?
5. What's debouncing and why might you need it for scroll events?
6. How do you make navigation smooth on mobile?

### Success Criteria

**Smooth Scrolling:**
- [ ] Clicking nav links scrolls smoothly (not instant jump)
- [ ] Scrolls to correct section
- [ ] Content isn't hidden behind fixed header
- [ ] Works on all nav links
- [ ] Works on mobile

**Active Highlighting:**
- [ ] Nav link highlights when its section is visible
- [ ] Only one link highlighted at a time (or clear logic for multiple)
- [ ] Updates as user scrolls down
- [ ] Updates as user scrolls up
- [ ] Correct link highlighted on page load
- [ ] CSS for active state is visible and clear

### Testing Checklist

- [ ] Click each nav link - page scrolls smoothly to section
- [ ] Section content is fully visible (not hidden by header)
- [ ] Scroll manually - nav highlights correct link
- [ ] Fast scrolling works correctly
- [ ] Scroll to top - hero section nav link highlights
- [ ] Mobile scrolling works smoothly
- [ ] No console errors
- [ ] Active state is visually obvious

### Bonus Challenges

- Add scroll progress indicator (bar showing position on page)
- Add smooth "scroll to top" button
- Animate nav links when they become active
- Add offset animation for better UX (scroll slightly past section)
- Handle hash links in URL on page load

---

## Stretch Goal 5: Your Choice

### The Challenge

Pick an advanced feature YOU want to learn and implement it. This is true stretch territory—prove you can learn independently.

### Feature Ideas

Choose one that interests you:

**UI Components:**
- Image carousel/slider for product images
- Accordion for FAQ section
- Tabbed interface for content
- Tooltip system for helpful hints
- Dropdown menu for navigation
- Animated hamburger menu (mobile)

**Visual Effects:**
- Parallax scrolling effect
- Image lazy loading
- Loading skeleton screens
- Hover effects with JavaScript
- Animated counters (numbers counting up)

**Functionality:**
- Dark mode toggle with localStorage
- Search/filter functionality for table
- Form validation beyond HTML5
- Auto-save draft form data
- Copy to clipboard button

**Advanced:**
- Infinite scroll for content
- Drag and drop interactions
- Custom video player controls
- Real-time character counter
- Print-friendly view

### Your Process

1. **Choose a Feature**
   - Pick something you've seen and admired on other sites
   - Make sure it's appropriately challenging (2-4 hours)
   - Ensure it adds value to your landing page

2. **Research Thoroughly**
   - Find 3 different tutorials or approaches
   - Read MDN documentation for relevant APIs
   - Watch at least one video tutorial
   - Find CodePen examples to study

3. **Plan Your Implementation**
   - Sketch the HTML structure needed
   - List the CSS styles required
   - Outline the JavaScript logic
   - Identify potential challenges

4. **Build Incrementally**
   - Start simple (get basic version working)
   - Add features one at a time
   - Test thoroughly after each addition
   - Debug issues before moving forward

5. **Document Your Learning**
   - In your README, include a section for this feature
   - Explain what you built and why
   - List the resources you used
   - Describe challenges and how you solved them
   - Include your search strategies (what did you Google?)

### Success Criteria

Your custom feature should:
- [ ] Be fully functional
- [ ] Add real value to your landing page
- [ ] Be well-documented in your README
- [ ] Work on mobile devices
- [ ] Be accessible (keyboard navigation, screen readers)
- [ ] Have clean, commented code
- [ ] Show independent research and learning

### Documentation Requirements

In your README, include:

**Feature Description:**
- What you built
- Why you chose this feature
- What problem it solves

**Research Process:**
- Resources used (links to tutorials, docs, videos)
- Search terms that were helpful
- Dead ends you encountered

**Implementation Notes:**
- Approach you chose and why
- Challenges you faced
- How you solved problems
- Code you're proud of (with explanation)

**Learning Outcomes:**
- New concepts you learned
- Skills you practiced
- What you'd do differently next time
- How this will help in future projects

---

## General Debugging Strategies

When you encounter problems (and you will!):

### 1. Read the Error Message
- Error messages tell you exactly what's wrong
- Look at the file name and line number
- Google the exact error if unclear

### 2. Use Console.log()
```javascript
console.log('Variable value:', variableName);
console.log('Function called');
console.log('Element:', document.querySelector('#my-element'));
```

### 3. Use Browser DevTools
- **Elements tab**: Inspect HTML/CSS
- **Console tab**: See errors and logs
- **Sources tab**: Set breakpoints in JavaScript
- **Network tab**: See if resources loaded

### 4. Simplify
- Comment out code to isolate the problem
- Test one small piece at a time
- Build back up incrementally

### 5. Search Strategically
- Search for: "JavaScript [what you're trying to do]"
- Include specific error messages
- Add "MDN" to get documentation
- Add "tutorial" to get guides

### Common Issues and Solutions

**"Cannot read property of null"**
- Element doesn't exist or hasn't loaded yet
- Check your selectors
- Make sure script runs after HTML loads

**"Event listener not working"**
- Check element exists when listener added
- Verify event name (click, submit, etc.)
- Console.log inside the function to test if it runs

**"CSS not applying"**
- Check class/ID spelling
- Use DevTools to see which styles are applied
- Check CSS specificity (more specific selectors win)

**"Variable is undefined"**
- Check variable spelling
- Make sure it's declared before use
- Check scope (where variable is accessible)

---

## Final Thoughts

### What Makes a Good Stretch Goal Submission

**✓ DO:**
- Show your research process
- Explain your approach
- Document challenges and solutions
- Write clean, commented code
- Test thoroughly
- Make it work on mobile
- Consider accessibility

**✗ DON'T:**
- Copy code you don't understand
- Skip the research phase
- Ignore errors or bugs
- Forget about mobile users
- Submit without testing
- Leave out documentation

### Time Expectations

These are challenging goals:
- **Stretch Goal 1 (Modal):** 2-4 hours
- **Stretch Goal 2 (Scroll Animations):** 2-3 hours
- **Stretch Goal 3 (Form Handling):** 2-3 hours
- **Stretch Goal 4 (Navigation):** 2-4 hours
- **Stretch Goal 5 (Your Choice):** 3-5 hours

Don't try to complete all of them! Pick 1-2 that interest you most.

### Learning Objectives

By completing these stretch goals, you'll practice:
- Reading documentation independently
- Researching multiple approaches
- Making technical decisions
- Debugging complex issues
- Thinking about user experience
- Writing maintainable code
- Explaining your work clearly

These are the skills that separate junior developers from confident, independent developers.

---

## Need Help?

**Before Asking for Help:**
1. Read the error message carefully
2. Check your console for clues
3. Review the relevant documentation
4. Try searching for the specific problem
5. Spend at least 30 minutes debugging

**When Asking for Help:**
- Explain what you're trying to do
- Show what you've tried
- Include the error message
- Share your code (use CodePen or GitHub)
- Ask a specific question

**Remember:** Struggling is part of learning. If a stretch goal feels challenging and requires research, debugging, and persistence—that's exactly the point. You're building the skills to learn anything.

Good luck! 🚀
