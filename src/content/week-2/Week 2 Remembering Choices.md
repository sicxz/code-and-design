1. # Week 2: Remembering Choices

   **Interaction Question:** How does it adapt to me?

   **Technical Focus:**

   - localStorage
   - conditionals as decision logic
   - system preference detection
   - prefers-reduced-motion (CSS-first)
   - interaction patterns: state in the DOM

   **By End of Week:** Project 1 ("The System") is complete and deployed. Students have a theme system that:

   - remembers user choice
   - respects system preferences
   - accounts for reduced motion
   - is implemented as state, not styling hacks

   ------

   ## Day 1: Lecture Day

   ### Opening: Where We Left Off (10 min)

   **Quick check:**

   - Who has a working theme switcher?
   - Who refreshes and loses their choice?

   **Live demo:**

   - Toggle theme
   - Refresh
   - State resets

   **Key line:**

   > "The system works, but the browser forgot. Today we give it memory."

   ------

   ### Bridge: Refactoring Our Approach (10 min)

   **Acknowledge the shift:**

   Last week we wrote:

   ```javascript
   document.body.classList.toggle('dark');
   ```

   This week we'll use:

   ```javascript
   document.documentElement.dataset.theme = 'dark';
   ```

   **Why the change?**

   | Approach             | What it does             | Good for                 |
   | -------------------- | ------------------------ | ------------------------ |
   | `classList.toggle()` | Adds/removes a CSS class | Simple on/off states     |
   | `dataset.theme`      | Sets a data attribute    | Storing meaningful state |

   **Key insight:**

   - Classes are for styling
   - Data attributes are for state
   - `classList.contains('dark')` works, but mixes concerns
   - `dataset.theme` says "this is the current theme" — semantic, readable
   - CSS can target `[data-theme="dark"]` just as easily

   **Show in DevTools:**

   ```html
   <!-- Class approach -->
   <body class="dark">
   
   <!-- Data attribute approach -->
   <html data-theme="dark">
   ```

   > "Both work. But data attributes make the state visible and meaningful. We're not just adding a style hook — we're recording a decision."

   **CSS targeting:**

   ```css
   /* Class approach */
   body.dark {
     --color-surface: #1a1a1a;
   }
   
   /* Data attribute approach */
   [data-theme="dark"] {
     --color-surface: #1a1a1a;
   }
   ```

   > "Same result, better architecture. This is refactoring — improving structure without changing behavior."

   ------

   ### Concept: The Browser Has Memory (15 min)

   **Console exploration:**

   ```javascript
   localStorage.setItem('test', 'hello');
   localStorage.getItem('test');
   ```

   - Close tab
   - Reopen
   - Run `getItem` again

   **Observation:** The value persists.

   **Mental model:**

   - localStorage is a tiny notebook the browser keeps for your site
   - It stores key–value pairs
   - Everything is a string, and that's fine for now

   **DevTools walkthrough:**

   - Application tab → Local Storage
   - Show editing, deleting, clearing

   **MDN reference:**

   - [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

   ------

   ### Demo: Making the Theme Remember (30 min)

   We build on last week's system. Better architecture, same goal.

   **Step 1: Save the user's choice**

   ```javascript
   const buttons = document.querySelectorAll('[data-theme-toggle]');
   
   buttons.forEach((button) => {
     button.addEventListener('click', () => {
       const theme = button.dataset.themeToggle;
       document.documentElement.dataset.theme = theme;
       localStorage.setItem('theme', theme);
     });
   });
   ```

   **New syntax: `forEach`**

   > "Last week we had one button. Now we might have several (light, dark, system). `querySelectorAll` returns a list. `forEach` runs code for each item in the list."

   ```javascript
   // This:
   buttons.forEach((button) => {
     // do something with each button
   });
   
   // Means: "For each button in the list, run this code"
   ```

   **Check:**

   - Toggle theme
   - Look in Application tab
   - Value is saved

   **Observation:** Refresh still resets.

   **Key line:**

   > "We saved it, but we never read it."

   ------

   **Step 2: Load the choice on page load**

   ```javascript
   const savedTheme = localStorage.getItem('theme');
   
   if (savedTheme) {
     document.documentElement.dataset.theme = savedTheme;
   }
   ```

   **Test:**

   - Toggle to dark
   - Refresh
   - It remembers

   **Concept framing:**

   - This code runs once, when the page loads
   - It sets initial state
   - CSS reacts to the state

   **Conditionals vocabulary (brief):**

   - `if` means "ask a question"
   - `===` means "exact match"
   - We are not doing logic puzzles, just decisions

   **MDN references:**

   - [Storage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
   - [Storage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)

   ------

   ### Break (10 min)

   ------

   ### Concept: Respecting System Preference (20 min)

   **Prompt:**

   > "What about first-time visitors?"

   **Preference hierarchy (write on board):**

   1. User's saved choice (highest priority)
   2. System preference
   3. Your default

   **Checking system preference in JS:**

   ```javascript
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
   ```

   **MDN reference:**

   - [Window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)

   ------

   **Putting it together: the decision block**

   ```javascript
   const savedTheme = localStorage.getItem('theme');
   
   if (savedTheme) {
     document.documentElement.dataset.theme = savedTheme;
   } else {
     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
     document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
   }
   ```

   **New syntax: Ternary operator `? :`**

   ```javascript
   prefersDark ? 'dark' : 'light'
   ```

   > "This is shorthand for if/else. If true, use the first value. Otherwise, the second."

   ```javascript
   // This ternary:
   prefersDark ? 'dark' : 'light'
   
   // Is the same as:
   if (prefersDark) {
     return 'dark';
   } else {
     return 'light';
   }
   ```

   > "Use it when you need to pick between two values. Don't nest them — that gets unreadable fast."

   ------

   **Walkthrough in plain language:**

   1. Have they been here before?
   2. If yes, respect their choice
   3. If not, ask the system
   4. Set the state once

   **MDN reference:**

   - [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

   ------

   ### Concept: prefers-reduced-motion (20 min)

   **Accessibility framing:**

   - Some users get motion sick
   - Some find animation distracting
   - Some just want calm interfaces

   **Required approach: CSS-first**

   ```css
   @media (prefers-reduced-motion: reduce) {
     *,
     *::before,
     *::after {
       transition-duration: 0.01ms !important;
       animation-duration: 0.01ms !important;
     }
   }
   ```

   **Or more targeted:**

   ```css
   @media (prefers-reduced-motion: reduce) {
     .fade-in,
     .slide-up {
       transition: none;
       animation: none;
     }
   }
   ```

   **Key point:**

   - Do not remove all motion blindly
   - Be intentional about what you reduce
   - Essential motion (like a loading indicator) might stay
   - Decorative motion gets removed

   **MDN reference:**

   - [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

   **Optional JS check (stretch only):**

   ```javascript
   const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   ```

   This is not required for Project 1.

   ------

   ### Closing and Assignments (15 min)

   **Frame:**

   > "By Sunday, your portfolio has a real system. It remembers people and respects them."

   **Assigned:**

   1. **Lab 2-1: "The Memory"**
      - Add localStorage persistence
      - Due before Day 2
   2. **Lab 2-2: "The Preference"**
      - Add system preference fallback
      - Add prefers-reduced-motion handling in CSS
      - Due Sunday
   3. **Lab 2-3: "The Accordion"**
      - Build a collapsible FAQ component
      - Practice the state pattern
      - Due Sunday
   4. **Visual Notes: User Preferences & Accessibility**
      - Readings listed below
      - Due Sunday
   5. **Project 1: "The System"**
      - Final submission
      - Deployed to GitHub Pages
      - Due Sunday

   ------

   ## Day 2: Practice Day

   ### Opening: Discussion and Debugging (25 min)

   **Note to students:**

   > "Lab 2-1 should be done. We'll troubleshoot together."

   **Visual notes discussion (10 min):**

   - What surprised you about reduced motion?
   - What assumptions did you have about users?

   **Common issues to debug live (15 min):**

   - Script missing `defer`
   - localStorage read happens after state is applied
   - Typos in data attributes
   - Preference logic in wrong order

   **Live debug with a student repo:**

   - Console errors
   - Application tab
   - Read code top to bottom

   ------

   ### Concept: Interaction Patterns — State in the DOM (20 min)

   **Framing:**

   > "The theme switcher is one pattern: global state that affects everything. But most interactions are local — one element changes, others stay the same."

   **The universal interaction pattern:**

   1. User acts (click, hover, focus)
   2. State changes (open/closed, active/inactive, selected/unselected)
   3. CSS responds to state

   **Example: A collapsible section**

   HTML structure:

   ```html
   <div class="accordion-item" data-expanded="false">
     <button class="accordion-header">Question goes here</button>
     <div class="accordion-content">
       <p>Answer goes here</p>
     </div>
   </div>
   ```

   CSS responds to state:

   ```css
   .accordion-item[data-expanded="false"] .accordion-content {
     display: none;
   }
   
   .accordion-item[data-expanded="true"] .accordion-content {
     display: block;
   }
   ```

   JS toggles state:

   ```javascript
   const header = document.querySelector('.accordion-header');
   const item = document.querySelector('.accordion-item');
   
   header.addEventListener('click', () => {
     const isExpanded = item.dataset.expanded === 'true';
     item.dataset.expanded = isExpanded ? 'false' : 'true';
   });
   ```

   **Key insight:**

   > "JS changes state. CSS responds to state. They stay in their lanes."

   **Why this matters:**

   - Same pattern as theme switching, smaller scope
   - Same pattern you'll use for: modals, dropdowns, tabs, tooltips
   - Same pattern SVG interactions will use (Week 3-4)
   - Same pattern animation will hook into (Week 5-7)

   ------

   ### Live Demo: Building an Accordion Together (20 min)

   **Build it step by step:**

   1. HTML structure with multiple items
   2. CSS for open/closed states
   3. JS to toggle one item
   4. JS to handle multiple items with `forEach`

   **Multiple items:**

   ```javascript
   const headers = document.querySelectorAll('.accordion-header');
   
   headers.forEach((header) => {
     header.addEventListener('click', () => {
       const item = header.closest('.accordion-item');
       const isExpanded = item.dataset.expanded === 'true';
       item.dataset.expanded = isExpanded ? 'false' : 'true';
     });
   });
   ```

   **New method: `closest()`**

   > "Start at this element and look up the DOM tree for the nearest match. Useful when your click target is inside the thing you want to change."

   **MDN reference:**

   - [Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)

   ------

   ### Structured Work Time (50 min)

   **Students work on:**

   - Finishing Lab 2-1 (localStorage)
   - Lab 2-2 (preferences)
   - Lab 2-3 (accordion)
   - Project 1 polish

   **Circulation checkpoints:**

   - "Show me your localStorage entry in Application tab"
   - "Toggle your system dark mode and refresh — what happens?"
   - "Enable reduced motion in OS settings — does anything change?"
   - "Click your accordion headers — does state toggle?"

   ------

   ### Break (10 min)

   ------

   ### Project 1 Requirements Review (15 min)

   **Checklist:**

   - [ ] `variables.css` with semantic tokens
   - [ ] `data-theme` based theme system
   - [ ] localStorage persistence
   - [ ] System preference fallback
   - [ ] `prefers-reduced-motion` handled in CSS
   - [ ] Applied to at least one portfolio page
   - [ ] Deployed to GitHub Pages

   **Rubric preview:**

   | Criteria            | Weight |
   | ------------------- | ------ |
   | Interaction Quality | 35%    |
   | Technical Execution | 25%    |
   | Design Intention    | 25%    |
   | Accessibility       | 15%    |

   > "Accessibility contributes to interaction quality. It's graded explicitly so it's not skipped."

   ------

   ### Closing (10 min)

   **Remaining work time logistics:**

   - Office hours available
   - Questions via email welcome
   - Peer help encouraged

   **Preview Week 3:**

   > "Next week: SVG. Your logo becomes code. And everything we learned about state? It applies there too."

   **Remind:**

   - Lab 2-1 should already be done
   - Lab 2-2 due Sunday
   - Lab 2-3 due Sunday
   - Visual Notes due Sunday
   - Project 1 due Sunday

   ------

   ## Labs & Assignments

   ### Lab 2-1: "The Memory"

   *10 points · Complete/Incomplete · Due before Day 2*

   Add localStorage to your theme toggle.

   **Requirements:**

   1. When the user selects a theme, save their choice to localStorage
   2. When the page loads, check localStorage and apply the saved theme
   3. Use `data-theme` on `<html>` (not classes on body)

   **Complete criteria:**

   - Theme saves to localStorage (visible in DevTools → Application)
   - Theme loads correctly on refresh
   - Using `document.documentElement.dataset.theme` pattern
   - No console errors

   **Stretch:**

   - Add a "reset to system preference" button
   - Clear localStorage and re-detect system preference

   ------

   ### Lab 2-2: "The Preference"

   *10 points · Complete/Incomplete · Due Sunday*

   Add preference detection and accessibility handling.

   **Requirements:**

   1. If no saved theme exists, detect system preference and apply it
   2. Add a `prefers-reduced-motion` media query that reduces or removes transitions
   3. Test by changing system preferences

   **Complete criteria:**

   - First-time visitors get their system preference
   - Saved preference overrides system preference
   - Reduced motion is handled in CSS (not JS)
   - Tested with system settings toggled
   - No console errors

   **Stretch:**

   - Add a third "system" option to your toggle (light / dark / system)
   - When "system" is selected, remove the localStorage entry and follow OS preference
   - Animate the toggle button itself (and respect reduced motion)

   ------

   ### Lab 2-3: "The Accordion"

   *10 points · Complete/Incomplete · Due Sunday*

   Build an FAQ-style accordion component.

   **Requirements:**

   1. At least 3 collapsible question/answer sections
   2. Clicking a header toggles that section open/closed
   3. Use `data-expanded="true/false"` attribute for state
   4. CSS handles show/hide based on the attribute value
   5. Works with keyboard (buttons are focusable by default)

   **HTML structure to follow:**

   ```html
   <div class="accordion">
     <div class="accordion-item" data-expanded="false">
       <button class="accordion-header">Question 1</button>
       <div class="accordion-content">
         <p>Answer 1</p>
       </div>
     </div>
     <!-- More items... -->
   </div>
   ```

   **Complete criteria:**

   - 3+ accordion items
   - Clicking toggles `data-expanded` value
   - CSS shows/hides content based on attribute
   - Uses `querySelectorAll` and `forEach`
   - No console errors

   **Stretch:**

   - Only one section open at a time (clicking one closes the others)
   - Add a subtle transition when opening/closing (and respect reduced motion!)
   - Add ARIA attributes: `aria-expanded`, `aria-controls`

   ------

   ### Visual Notes: User Preferences & Accessibility

   *10 points · Complete/Incomplete · Due Sunday*

   **Required readings:**

   1. [prefers-reduced-motion: Sometimes less movement is more](https://web.dev/articles/prefers-reduced-motion) — web.dev
   2. [prefers-color-scheme: Hello darkness, my old friend](https://web.dev/articles/prefers-color-scheme) — web.dev
   3. [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/) — CSS-Tricks (focus on "Preference Features" section)

   **Focus questions:**

   - What user preferences can CSS detect?
   - Why does reduced motion matter? Who benefits?
   - How do you balance respecting preferences with design intent?

   *(See separate Visual Notes assignment document for full requirements)*

   ------

   ### Project 1: "The System"

   *20% of course grade · Due Sunday*

   **Full brief in:** `project-1-system/README.md`

   **Submission:**

   - Deploy to GitHub Pages
   - Submit the live URL to Canvas
   - Ensure project folder in repo has all source files

   ------

   ## Resources

   ### Assigned This Week

   **For Visual Notes:**

   - [prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion) — web.dev
   - [prefers-color-scheme](https://web.dev/articles/prefers-color-scheme) — web.dev
   - [CSS Media Queries Guide](https://css-tricks.com/a-complete-guide-to-css-media-queries/) — CSS-Tricks

   ### MDN References (Curated)

   These are rulebooks, not tutorials:

   - [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
   - [Storage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
   - [Storage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
   - [Window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
   - [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
   - [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
   - [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
   - [Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)

   **Student-facing note:**

   > "MDN is the specification reference. Use it to check what's valid, not to learn everything at once."

   ### Additional Reference

   - [The Complete Guide to Dark Mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) — CSS-Tricks

   ### Tutorials to Record

   1. **"localStorage in 5 Minutes"** (5 min)
      - setItem, getItem, removeItem
      - Checking DevTools Application tab
      - Common gotcha: it only stores strings
   2. **"The Preference Hierarchy"** (8 min)
      - User choice → system preference → default
      - Code walkthrough with conditionals
      - Testing by changing system settings
   3. **"forEach and Ternary for Designers"** (5 min)
      - When you have a list of things
      - When you need to pick between two values
      - Keep it simple, don't nest
   4. **"The Accordion Pattern"** (10 min)
      - HTML structure
      - Data attributes as state
      - CSS responding to state
      - JS toggling state

   ------

   ## Alternatives

   ### If localStorage doesn't click:

   **Analogy shift:**

   - "It's a sticky note the browser keeps in its pocket"
   - "A key-value pair is like a label and a box"

   **Simpler first:**

   - Just save and retrieve a simple string
   - Then build up to theme logic

   **Visual debugging:**

   - Spend more time in DevTools Application tab
   - "You can literally see what's stored"

   ### If the architecture shift feels like "we did it wrong":

   **Reframe:**

   - "Last week worked. This week is better."
   - "Refactoring means improving without breaking."
   - "Both approaches ship. One scales better."

   **Show both working:**

   - Demo class toggle working
   - Demo data-theme working
   - "See? Same result. Different structure."

   ### If the accordion feels overwhelming:

   **Simplify:**

   - Start with just ONE accordion item
   - Get that working, then add more
   - forEach comes after single-item works

   **Different angle:**

   - "It's the same pattern as the theme toggle, just smaller scope"
   - "User clicks → state changes → CSS responds"

   ### If forEach/ternary feels like too much new syntax:

   **Defer ternary:**

   - Use full if/else for now
   - "Ternary is just shorthand. You can always write it long."

   **Explain forEach with analogy:**

   - "You have a stack of papers. forEach means: do this to each paper."

   ------

   ## Suggestions

   ### Portfolio Enhancement

   - Theme toggle is now permanent and polished
   - Accordion could become an FAQ section on portfolio
   - Both demonstrate interaction patterns to employers

   ### Going Deeper

   - Add a high-contrast theme option
   - Animate the toggle icon (sun → moon) with reduced-motion fallback
   - Add ARIA to the accordion for full accessibility
   - Add `prefers-contrast` detection

   ### Connection to Later Weeks

   - Week 3-4: SVG states use the same `data-*` pattern
   - Week 5: Motion tokens (`--duration-*`, `--ease-*`) build on token system
   - Week 5-7: Accordion animation with GSAP
   - Week 7: ScrollTrigger respects reduced motion
   - Project 4: Signature moment must consider accessibility

   ------

   ## Open Questions

   1. **Lab load:** Three labs + visual notes + project due Sunday. Is that too much? Could Lab 2-3 be due Week 3 Day 1 instead?
   2. **Accordion accessibility:** Should ARIA be required or stretch? Full a11y adds complexity but is the "right" way.
   3. **Reduced motion testing:** Do students know how to toggle this in their OS? Quick reference card might help:
      - **macOS:** System Preferences → Accessibility → Display → Reduce motion
      - **Windows:** Settings → Ease of Access → Display → Show animations
      - **iOS:** Settings → Accessibility → Motion → Reduce Motion