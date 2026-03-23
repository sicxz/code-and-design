# desn378-wk 1 



# Week 1: Systems That Respond

**Interaction Question:** How does it adapt to me?

**Technical Focus:** DOM basics, querySelector, addEventListener, CSS variables, prefers-color-scheme

**By End of Week:** Students have a working theme toggle, started their token system, and understand how JavaScript can respond to user interaction.

------

## Day 1: Lecture Day

### Opening Hook (15 min)

Start with the browser, not the theory.

**Demo: The browser knows things**

- Open any site with dark mode support (or your own demo page)
- Toggle system dark mode preference
- Page adapts. No refresh. No reload.
- "The system *knew*. How?"

**Console exploration:**

```javascript
window.matchMedia('(prefers-color-scheme: dark)').matches
```

- Toggle system preference, run again
- "This is an API—a way to ask the browser questions."

### Concept: CSS Variables as Design Tokens (20 min)

**Show the problem:**

- Page with colors hardcoded in multiple places
- "What if we need to change the blue? Find and replace 47 times?"

**Show the solution:**

- Refactor to CSS custom properties

```css
:root {
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-accent: #0066cc;
}

body {
  background: var(--color-surface);
  color: var(--color-text);
}
```

- Change one variable, everything updates
- "Tokens are design decisions stored in one place."

**Connect to Figma:**

- "You've used variables in Figma. Same idea, in code."
- "Tonight's reading explains *why* this matters at scale."

### Demo: CSS Responds to Preference (15 min)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface: #1a1a1a;
    --color-text: #f0f0f0;
  }
}
```

- Toggle system preference → page adapts
- "Zero JavaScript. CSS alone can respond to user preference."

**Pause:** "But what if the user wants to override their system setting?"

### Break (10 min)

### Demo: JavaScript Enters (40 min)

Live code a theme toggle, one step at a time.

**Step 1: Find the button**

```javascript
const toggle = document.querySelector('.theme-toggle');
console.log(toggle);
```

- Run it. Does it find the element?
- Break it: typo in selector. What happens?
- Fix it.

**Step 2: Listen for clicks**

```javascript
toggle.addEventListener('click', function() {
  console.log('clicked!');
});
```

- Run it. Click. Check console.
- "addEventListener means: when this happens, do that."

**Step 3: Toggle a class**

```javascript
toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
});
```

- Run it. Click. Check Elements panel—class appears/disappears.
- "classList.toggle: add if missing, remove if present."

**Step 4: CSS responds to the class**

```css
body.dark {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

- Now the toggle actually changes colors.

**Key concepts to land:**

- `querySelector` = "find this thing"
- `addEventListener` = "when this happens, do that"
- `classList.toggle` = "flip this state"
- The DOM is live—you can change it

### Closing: Assignments (15 min)

**Frame the work:**

- "By Day 2, you'll have built this yourself and read about *why* systems like this matter."

**Assign:**

1. **Technical Tutorial** (do first)
   - [Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) — MDN
   - Work through the whole thing. Same concepts as today.
2. **Lab 1-1: "The Switch"**
   - Build a working light/dark toggle
   - Due before Day 2
3. **Visual Notes: Design Systems**
   - Read and take notes on the readings
   - Due before Day 2
   - Come ready to discuss

**Show Project 1 brief** ("The System")

- Due end of Week 2
- "Everything this week builds toward this."

------

## Day 2: Practice Day

### Opening: What Did You Learn? (25 min)

**Technical check-in (5 min):**

- "How'd the MDN tutorial go?"
- "What clicked? What confused you?"
- Quick show of hands: who got their toggle working?

**Design systems discussion (20 min):**

- "What stuck with you from the Figma article?"
- "What's the difference between a style guide and a design system?"
- Draw out key ideas on whiteboard:
  - Consistency
  - Efficiency
  - Shared language
  - Single source of truth
- "How does this connect to what we built yesterday?"

### Backfill: Common Issues (20 min)

Address what broke:

**Script loading:**

- Where does `<script>` go?
- The `defer` attribute
- "If your code runs before the HTML exists, it can't find anything."

**Selector typos:**

- Class vs ID (`.theme-toggle` vs `#theme-toggle`)
- Missing the dot
- Use DevTools: right-click → Copy → Copy selector

**Reading console errors:**

- Every error has a line number
- "Cannot read property of null" = querySelector found nothing
- Demo finding and fixing an error

### Token Naming Exercise (20 min)

**Setup:**

- Show a design with 5 colors and 3 spacing values
- "Name these tokens. Write them down."

**Compare:**

- Pair up, compare names
- Did you choose `--color-blue` or `--color-primary`?
- Did you choose `--spacing-1` or `--space-sm`?

**Discuss:**

- Semantic vs literal naming
- "What happens to `--color-blue` when your brand changes to green?"
- Reference the books: Kholmatova and Couldwell both address this
- "Your system should be readable by future-you."

### Break (10 min)

### Structured Work Time (50 min)

**For students still working on Lab 1-1:**

- Finish the toggle
- Circulate, troubleshoot

**For students who finished:**

- Start Lab 1-2: Apply to your portfolio
- Create `variables.css` file
- Begin refactoring existing CSS to use tokens

**Check-in points while circulating:**

- Does clicking do anything? → Check console
- Does the class appear? → Check Elements panel
- Do colors change? → Check CSS specificity

### Closing (15 min)

**Token system setup:**

- Show file structure: where does `variables.css` live?
- Start minimal: 3-5 color tokens, 3 spacing tokens
- "This file grows all quarter. Don't over-engineer now."

**Show Open Props:**

- [open-props.style](https://open-props.style/)
- "One example of a mature token system. Notice their naming."
- "You're building your own, but this shows what's possible."

**Preview Week 2:**

- localStorage (remembering the user's choice)
- prefers-reduced-motion (respecting accessibility preferences)

**Remind:**

- Lab 1-2 due Sunday
- Project 1 due end of Week 2

------

## Labs & Assignments

### Lab 1-1: "The Switch"

*10 points · Complete/Incomplete · Due before Day 2*

Build a working light/dark toggle:

1. Create a button with class `theme-toggle`
2. Write JS that toggles class `dark` on the `<body>` when clicked
3. Write CSS that changes at least 3 variables when `.dark` is present
4. Test: clicking should visibly change the page

**Complete:**

- Button exists and is clickable
- Class toggles on body (visible in DevTools)
- Colors change visibly
- No console errors

**Stretch:**

- Add a transition so colors fade instead of snap
- Change the button text/icon based on current mode
- Add more than 3 tokens

------

### Lab 1-2: "The Inheritance"

*10 points · Complete/Incomplete · Due Sunday*

Apply the theme toggle pattern to your existing portfolio:

1. Create a `variables.css` file with your brand tokens
2. Refactor at least one page to use these tokens
3. Add a theme toggle that works

**Complete:**

- `variables.css` exists with at least 5 tokens
- One page uses the tokens
- Toggle works

**Stretch:**

- Add `@media (prefers-color-scheme: dark)` as fallback
- Apply tokens to multiple pages

------

### Visual Notes: Design Systems

*10 points · Complete/Incomplete · Due before Day 2*

*(See separate Visual Notes assignment document)*

**This week's readings:**

1. [Design Systems 101](https://www.figma.com/blog/design-systems-101-what-is-a-design-system/) — Figma blog
2. [Intro to Design Systems](https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems) — Figma course (Overview + Foundations lessons)

**Focus questions:**

- What's the difference between a style guide and a design system?
- What problems do design systems solve (and for whom)?
- How do tokens create a "single source of truth"?

------

## Resources

### Assigned This Week

**Technical:**

- [Adding Interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) — MDN tutorial

**Conceptual:**

- [Design Systems 101](https://www.figma.com/blog/design-systems-101-what-is-a-design-system/) — Figma blog
- [Intro to Design Systems](https://help.figma.com/hc/en-us/articles/14552901442839-Overview-Introduction-to-design-systems) — Figma course

### Reference

- [Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) — MDN
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) — MDN
- [Open Props](https://open-props.style/) — token system reference
- [CSS Variables](https://www.youtube.com/watch?v=5QIiWIoCmsc) — Kevin Powell (first 10 min)

### Quarter-Long References (Books)

- *Design Systems* by Alla Kholmatova
- *Laying the Foundations* by Andrew Couldwell

### Tutorials to Record

1. **"Finding Things with querySelector"** (5 min)
   - Demystify selectors, common mistakes
   - When querySelector vs querySelectorAll
2. **"Reading Console Errors"** (5 min)
   - Every error has a line number
   - Common errors and what they mean
3. **"Tokens: From Figma to CSS"** (8 min)
   - Export Figma variables
   - Translate to CSS custom properties
   - Show the parallel

------

## Alternatives

### If the toggle doesn't land:

**Simplify:**

- Just CSS first: spend more time on `prefers-color-scheme` without JS
- Smaller demo: toggle one element's color, not the whole page

**Reframe:**

- "The browser already knows how to do this. JS just gives users an override."

**Different metaphor:**

- Light switch (binary) vs dimmer (spectrum)
- We're building a light switch. Dimmers come later.

### If selectors are confusing:

- Interactive exercise: "I describe something, you write the selector"
- Use DevTools: right-click → Copy → Copy selector
- Emphasize: "Same selectors you know from CSS"

### If design systems feels too abstract:

- Start with pain: "You have 47 different blues. How do you fix this?"
- Show before/after of messy code cleaned with tokens
- Connect to their own 368 work: "How many places did you write the same hex code?"

------

## Suggestions

### Portfolio Enhancement

- The toggle becomes a permanent feature
- Week 2 adds persistence—users won't re-choose each visit
- Consider placement: nav? footer? floating?

### Going Deeper

- Research: How do Radix or Shoelace handle theming?
- Explore: What else does `window.matchMedia` know?
- Add a third theme (high contrast)

### Connection to Later Weeks

- Week 2: localStorage keys (naming matters here too)
- Week 3: SVG tokens for icon colors
- Week 5+: Motion tokens (duration, easing)

------

## Open Questions

1. **Portfolios:** Are these GitHub Pages deploys from 368, or fresh starters? Affects Lab 1-2 setup.
2. **Books:** Physical copies available in library? Or should these be optional purchase?
3. **Lab timing:** Is "due before Day 2" realistic for reading + tutorial + lab? Could split: tutorial + lab before Day 2, visual notes by Sunday.



Resources: 

https://alistapart.com/article/javascript-for-web-designers/

