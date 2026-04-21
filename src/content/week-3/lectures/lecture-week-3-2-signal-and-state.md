Lecture 3-2



## The Pattern (Preview of What You’re About to Build)

Everything you are about to implement follows this pattern:

```sql
User acts
    ↓
STATE changes (theme = dark)
    ↓
data attribute updates
    ↓
CSS responds
    ↓
UI updates
```

> JavaScript changes the truth.
> Data attributes store the truth.
> CSS reflects the truth.

Now we’re ready to give this system memory.

---

## Section 2: Introduction to Data Attributes

### Data Attributes: State's New Home

You've built a working toggle.

JavaScript added a `dark` class.

- CSS responded.
- The UI updated.

It works.

But now we know something important.

That class is not really describing appearance.
 **It is storing a decision the user made.**

## That is state.

HTML gives us a better place to store state:
 **data attributes**.

> Data attributes store information about an element, separate from styling.

They are labels for memory.

The syntax is simple:

`data-` followed by a name you choose.

```html
<html data-theme="dark">
```

Read that out loud: "data, theme, equals, dark."

Now think about what that says in plain English:

> This element has a piece of data.
> That data is called "theme."
> Its value is "dark."

Without knowing any JavaScript or CSS, you already understand:

- what the information is about
- what decision has been made
- what the current state is

That is what **self-documenting** means.

**Compare this:**

```html
<body class="dark">
```

Read it out loud:

**class, dark**

What does that mean?

- Is the background dark?
- Are the buttons dark?
- Is this a theme?
- Is this a mood?
- Is this just styling?

You cannot tell.

Now compare:

```html
<html data-theme="dark">
```

This is unambiguous.

- It is **data**
- About the **theme**
- With the value **dark**

No guessing.
No interpretation.
No documentation required.

------

### Framing in Design

> Good code reads like good interface labels.
> You should understand what it means without opening a manual.

Just like in our design system and tokens:

- "Primary Button"
- "Surface Color"
- "Body Text"

Not:

- "BlueThing1"
- "Style2"
- "TempClass"

## A Quick Note on Naming and Semantics

We chose the name `data-theme` on purpose.

The browser does not care what we call this.

We could write:

```html
<html data-cow="dark">
```

This would still work.

But humans care.

Good systems use names that describe what the state *means*.

- `theme` describes the decision
- `dark` describes the value

**This is semantic naming.**

It makes your code readable:

- six weeks from now
- to your teammate
- to your future self

This is the same discipline you use with:

- color tokens
- typography tokens
- component naming (ux 1, 2, 3)

## Naming is a design decision.



### Updating the System (Converting Classes → State)

Now we refactor the system.

We are not changing how the page looks.
We are changing **where the decision lives**.

We update three things:

1. **CSS** — selectors change from classes to data attributes
2. **JavaScript** — toggle logic changes from classList to dataset
3. **HTML** — add a default state to prevent flash of unstyled content

### Step 1 — Update the CSS (Classes → Data Attributes)

**Before (class-based):**

```css
body.light {
  --color-surface: #ffffff;
  --color-text: #111111;
}

body.dark {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

These classes controlled appearance, but they were also storing the decision.

Now we move the decision into data.

**After (state-based):**

```css
[data-theme="light"] {
  --color-surface: #ffffff;
  --color-text: #111111;
}

[data-theme="dark"] {
  --color-surface: #1a1a1a;
  --color-text: #f0f0f0;
}
```

What changed:

- we are no longer styling classes

- we are styling **state**

- the selector now means:

  > "When the theme equals dark, use these tokens"

Now CSS is no longer guessing.
It is responding directly to the system's truth.

---

## Step 2 — Update the JavaScript (Appearance → State)

Here is the version we had before:

```javascript
const toggle = document.querySelector(".theme-toggle");

// Initialize the page in light mode
document.body.classList.add("light");

// Toggle both classes
toggle.addEventListener("click", function () {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});
```

This worked visually, but:

- the decision lived inside classes
- the system had no explicit state

---

### Step 3 — Update the HTML (Set the Default)

Add the starting state directly to your HTML:

**Before:**

```html
<html lang="en">
```

**After:**

```html
<html lang="en" data-theme="light">
```

#### Why This Matters

There's a brief moment when the page loads but JavaScript hasn't run yet.

During that moment:

- The browser is rendering your page
- Your CSS selectors like `[data-theme="light"]` are looking for a match
- But JavaScript hasn't set the attribute yet

This can cause a **flash of unstyled content (FOUC)** — the page appears broken for a split second before JavaScript kicks in.

By adding the default in HTML:

- CSS has something to match immediately
- The page renders correctly from the first frame
- JavaScript then takes over (updating based on localStorage or system preference)

> The HTML provides the default truth.
> JavaScript updates the truth when it has better information.

This is **progressive enhancement** — the page works before JavaScript, and JavaScript makes it better.

---

Now let's see the complete state-based version.

### New Version — Using `data-theme`

```javascript
const toggle = document.querySelector('.theme-toggle');

// Toggle the theme state
toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
});
```

Notice: No initialization line. The HTML already set `data-theme="light"` as the default.

Let's read this in plain English.

### What This Code Is Doing

**On click:**

```javascript
const currentTheme = document.documentElement.dataset.theme;
```

This reads the current state from the system.

---

```javascript
let newTheme;
if (currentTheme === 'dark') {
  newTheme = 'light';
} else {
  newTheme = 'dark';
}
```

This is decision logic:

- If we are currently in dark mode, the new theme should be light
- Otherwise (we must be in light mode), the new theme should be dark

We use `let` instead of `const` because we need to assign the value inside the if/else block.

---

```javascript
document.documentElement.dataset.theme = newTheme;
```

This writes the new truth into the system.

No classes.
No styling logic.

Just:

> "The theme is now dark"
> or
> "The theme is now light"

### What Changed Architecturally

Before:

- classes stored appearance
- classes stored decisions
- CSS and JS were tightly coupled

Now:

- `data-theme` stores the decision
- CSS only responds to state
- JavaScript only updates truth

We now have:

- explicit state
- clean separation
- a system ready for memory



### The Pattern

```
User acts
    ↓
STATE changes (data-theme)
    ↓
CSS responds
    ↓
UI updates
```

> JavaScript changes the truth.
> Data attributes store the truth.
> CSS reflects the truth.



### Part 3 - localStorage — Giving the System Memory

So far, we can store state on the page.

But the page disappears when you refresh.

Right now:

- The user chooses dark mode
- The UI updates
- The decision is stored in `data-theme`

Then the page reloads.

And the decision is gone.

We need a place to store memory that survives reloads.

That place is **localStorage**.

### localStorage: The Browser’s Notebook

### The Three Commands You Need to Know

localStorage works with simple **key and value** pairs.

Think of it like a tiny labeled notebook:

- the **key** is the label
- the **value** is what you write next to it

Today we only need three operations.

#### Store a Value

```javascript
localStorage.setItem('theme', 'dark');
```

Read this in plain English:

> Store a value in memory.
> The label is “theme”.
> The value is “dark”.

This writes into the browser’s notebook:

- key: `theme`
- value: `dark`

From now on, the browser remembers that choice.

#### Retrieve a Value

```javascript
localStorage.getItem('theme');
```

Read this as:

> Look in memory.
> Find the value stored under the label “theme”.
> Give it back to me.

If the user chose dark before, this returns:

```c#
"dark"
```

If nothing was ever saved, it returns:

```c#
null
```

That is how we know:

- user has a saved preference
- or this is a first-time visitor

#### Remove a Value

```javascript
localStorage.removeItem('theme');
```

Read this as:

> Go into memory.
> Delete the entry labeled “theme”.

Now the browser forgets the user’s choice.

This is useful when:

- switching back to “System” mode
- resetting preferences
- debugging

### The Mental Model (very important for students)

> localStorage is just a tiny dictionary.

- `setItem` = write something down
- `getItem` = read it back
- `removeItem` = erase it

Nothing more.

No magic.
No framework.
No database.

Just memory.

**localStorage lets your site write, read, and erase small pieces of memory for user preferences**



**[DEMO in Console]**

```javascript
// Store a value
localStorage.setItem('theme', 'dark');

// Retrieve a value
localStorage.getItem('theme');

// Remove a value
localStorage.removeItem('theme');
```

Now close the tab.
 Reopen it.
 Run `getItem` again.

It is still there.

> localStorage is a tiny notebook the browser keeps for your site.

It is:

- per site
- persistent
- simple key and value pairs

Perfect for:

- theme preference
- layout choice
- language selection

Not for passwords.
 Not for sensitive data.
 Only for preferences.





### Building Persistence

Let's upgrade your toggle to remember the user's choice.

Here's what you have now:

```javascript
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
});
```

We'll add two things:
1. **Save** the choice when the user toggles
2. **Load** the saved choice when the page starts

---

#### Step 1: Save the Choice

Add one line inside your click handler — right after you set the new theme:

```javascript
localStorage.setItem('theme', newTheme);
```

Your click handler now looks like this:

```javascript
toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);  // NEW: Save to memory
});
```

Now every toggle writes to the browser's notebook.

---

#### Step 2: Load the Saved Choice

Add this **at the top of your script**, before the toggle code:

```javascript
// Load saved theme (if any)
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}
```

This runs immediately when the page loads:
- Check if there's a saved theme
- If yes, apply it (overriding the HTML default)
- If no, the HTML default stays

---

#### The Complete Code

Here's your full script with persistence:

```javascript
// 1. Load saved theme (runs immediately)
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

// 2. Toggle on click
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});
```

---

#### Test It

1. Toggle to dark mode
2. Refresh the page
3. It remembers!

Open DevTools → Application → Local Storage to see your saved value.

---

### System Preference Detection

#### The Question: Why Not CSS?

Before we write JavaScript, let's address the obvious question:

**Can't CSS already detect dark mode preference?**

Yes. Absolutely.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface: #1a1a1a;
    --color-text: #f0f0f0;
  }
}
```

This works. It's simple. It's built-in.

So why are we using JavaScript?

#### The Problem CSS Can't Solve

CSS can detect system preference.
But CSS cannot:

1. **Save user choices** — If the user toggles to light mode, CSS has no way to remember that override
2. **Build a preference hierarchy** — "Saved choice beats system preference beats default"
3. **Communicate state** — Other JavaScript (like analytics, localStorage) can't read CSS variables

**The CSS-only approach gives you:**
- Automatic system preference detection
- No user control
- No persistence

**The JavaScript approach gives you:**
- User choice (toggle works)
- Persistence (localStorage)
- Fallback to system preference (for first-time visitors)
- A single source of truth (data-theme)

> CSS tells you what the system prefers.
> JavaScript lets users override that preference and remember it.

#### Why We Need JavaScript for State

When you toggle the theme, you're not just changing appearance.
You're making a decision that should:

1. Update the UI immediately
2. Save to localStorage
3. Override the system preference
4. Persist across sessions

CSS alone can't do steps 2-4.

That's why we use `data-theme` as state and JavaScript to manage the decision logic.

#### What Happens Without JavaScript

Imagine this scenario with CSS-only:

1. User's OS is in dark mode
2. CSS detects this, shows dark theme ✓
3. User clicks toggle to light mode
4. JavaScript changes `data-theme="light"` ✓
5. UI updates to light ✓
6. User refreshes page
7. **CSS redetects OS preference → back to dark mode ✗**

The user's choice disappeared.

With JavaScript managing state:

1. User's OS is in dark mode
2. No saved preference → JS detects system → shows dark ✓
3. User clicks toggle to light mode
4. JS changes `data-theme="light"` ✓
5. JS saves `localStorage.setItem('theme', 'light')` ✓
6. User refreshes page
7. JS loads saved theme → shows light ✓

The user's choice persists.

> CSS can detect preference.
> Only JavaScript can remember choice.

#### The Architecture

```
System preference (CSS) ← Respects if no saved choice
         ↓
User toggles (JS) ← Creates a choice
         ↓
localStorage (JS) ← Saves the choice
         ↓
data-theme (HTML) ← Stores current truth
         ↓
CSS responds ← Applies the theme
```

CSS detects preference.
JavaScript lets users override it.

Now let's build that system.

---

#### The First-Time Visitor Problem

localStorage is great for returning visitors. But first-timers? They get our default.

Better: Detect their system preference as a fallback.

#### The Preference Hierarchy

```
1. User's saved choice (highest priority)
      ↓ if none saved
2. System preference
      ↓ if unknown
3. Our default
```

> "Their choice trumps everything. If they haven't chosen, respect their system."

#### matchMedia

```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

`matchMedia` asks the browser about media queries. `.matches` is true or false.

#### The Complete Decision

```javascript
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // User made a choice — respect it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
}
```

This is nested if/else — one decision inside another:

1. First: Do we have a saved theme?
2. If not: Does the user prefer dark mode?

Each question gets its own if/else block.

#### Why the HTML Default Matters Now

Remember how we set `data-theme="light"` in the HTML? Here's where it pays off.

While JavaScript runs this decision logic, the page is already visible with the HTML default. If the user's saved preference is `dark`, JavaScript updates it — but there's no flash of broken styling while it figures that out.

> HTML provides the instant default.
> JavaScript updates it when it has better information.

---

#### How This Works With Your Toggle

This is subtle but important: **We only save to localStorage when the user explicitly clicks the toggle.**

The system preference detection sets the theme, but it doesn't save it.

Here's the complete code with both pieces working together:

```javascript


if (savedTheme) {
  // User made a choice before — respect it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
}

// 2. Toggle on click
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);  // Saves the user's explicit choice
});

// 3. Listen for system preference changes
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeQuery.addEventListener('change', function(event) {
  // Only update if user hasn't made an explicit choice
  const savedTheme = localStorage.getItem('theme');

  if (!savedTheme) {
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
  }
});
```

Notice there are now **three parts** to the system:

1. **Detection on load** (Section 1): Checks localStorage, then system preference
2. **Toggle handler** (Section 2): Updates theme AND saves when user clicks
3. **System preference listener** (Section 3): Updates theme when OS changes (but only if no saved choice)

The key differences:
- **Section 1** (detection on load): Sets theme, does NOT save to localStorage
- **Section 2** (toggle): Sets theme AND saves to localStorage
- **Section 3** (listener): Updates theme when system changes, but only if no saved choice exists

#### Why Section 3 Matters

Without the listener, try this:
1. Visit the page (you see your system preference)
2. Switch your OS from dark mode to light mode
3. Nothing happens — the page stays dark until you refresh

With the listener:
1. Visit the page (you see your system preference)
2. Switch your OS from dark mode to light mode
3. The page updates instantly ✓

**But only if you haven't made an explicit choice.** If you toggled to dark mode, the listener respects that and ignores OS changes.

Let's trace through the complete flow:

**Scenario 1: First visit (user's OS is in dark mode, nothing saved)**

1. HTML loads with `data-theme="light"` (the default)
2. Detection code runs
3. `savedTheme` is `null` (nothing in localStorage yet)
4. Goes to `else` block
5. Detects OS preference: `prefersDark = true`
6. Sets `data-theme="dark"`
7. **Does NOT save to localStorage** (just detection, not a choice)
8. User sees dark theme ✓

**Scenario 2: User clicks toggle to switch to light**

1. Toggle handler reads: `currentTheme = "dark"`
2. Determines: `newTheme = "light"`
3. Sets `data-theme="light"`
4. **Saves to localStorage**: `theme = "light"` ← This is the key difference
5. User sees light theme ✓

**Scenario 3: User refreshes the page**

1. HTML loads with `data-theme="light"`
2. Detection code runs
3. `savedTheme = "light"` ← Found in localStorage!
4. Goes to `if` block (skips system preference check entirely)
5. Sets `data-theme="light"`
6. User sees light theme ✓ (their saved choice overrides OS preference)

**Scenario 4: User changes OS preference while page is open (no saved choice)**

1. User is viewing the page in dark mode (from OS preference, nothing saved)
2. User switches their OS to light mode
3. The `change` event fires
4. Listener checks: `savedTheme = null` (no saved choice)
5. Updates: `data-theme = "light"` (because `event.matches` is now false)
6. Page updates instantly ✓

**Scenario 5: User changes OS preference while page is open (WITH saved choice)**

1. User previously toggled to light mode (saved in localStorage)
2. User switches their OS to dark mode
3. The `change` event fires
4. Listener checks: `savedTheme = "light"` (choice exists!)
5. Does nothing (respects the saved choice)
6. Page stays light ✓

#### The Key Insight

```
System preference detection (on load) → sets theme, but doesn't save
System preference listener (on change) → updates theme, but doesn't save
User toggle → sets theme AND saves
```

This means:
- **No localStorage entry** = "I'm following my system preference" (updates automatically)
- **localStorage entry exists** = "I made a specific choice for this site" (ignores system changes)

#### Why This Matters

If a user:
- Has their OS in dark mode
- Toggles your site to light mode
- Later switches their OS to light mode

Your site will **stay light** because their explicit choice (saved in localStorage) overrides system preference detection.

**The hierarchy in action:**

```
1. User's saved choice (localStorage) ← Highest priority, explicit decision
      ↓ if nothing saved
2. System preference (matchMedia) ← Fallback, inferred from OS
      ↓ if detection fails
3. HTML default (light) ← Last resort
```

> System preference is respected until the user makes a different choice.
> Then their choice becomes permanent.

---

## BREAK (5 min)

---

## Part 3: The Pattern (20-25 min)

### The Universal State Pattern

Everything we build follows this pattern:

```
1. User acts (click, hover, scroll, focus)
       ↓
2. State changes (data attribute, variable)
       ↓
3. CSS responds to state
```

> JavaScript changes state. CSS responds to state. They stay in their lanes.

### This Pattern Everywhere

You'll use this same pattern for:

- Theme toggles
- Accordions
- Modal open/close
- Navigation menus
- Form validation states
- SVG interactions
- Animation triggers

Learn it once, use it everywhere.

---

### Reduced Motion: Respectful Design

#### Why This Matters

Some users:

- Get motion sick from animations
- Find animation distracting
- Use screen readers
- Just want a calm interface

Operating systems have a "reduce motion" setting. We should respect it.

#### CSS-First Approach (Required)

Add this to your CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

This is the "nuclear" option — it stops all motion.

#### More Refined Approach

```css
@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .slide-up,
  .theme-transition {
    transition: none;
    animation: none;
  }
}
```

#### What NOT to Remove

Some motion is functional, not decorative:

- Loading spinners (unless replaced with static indicator)
- Progress bars
- Essential feedback (button pressed state)

> Ask: "Is this motion necessary for understanding, or just decoration?"

#### Testing

**macOS:** System Preferences → Accessibility → Display → Reduce motion
**Windows:** Settings → Ease of Access → Display → Show animations
**DevTools:** Rendering panel → Emulate CSS media feature

---

## Stretch Goal: The Ternary Operator

Your if/else toggle works great. But JavaScript has a shorthand for simple "this or that" decisions.

**Your challenge:**
1. Search "JavaScript ternary operator"
2. Refactor your toggle to use one
3. Add a comment in your code explaining how you understand it works

**Hints:**
- The ternary replaces a simple if/else
- The pattern looks like: `condition ? valueIfTrue : valueIfFalse`
- Your entire if/else block can become one line

If you figure it out, your comment might look something like:

```javascript
// Ternary: [your explanation here]
const newTheme = ...
```

This is optional — the if/else version is perfectly fine for Project 1.
