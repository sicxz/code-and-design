# Week 0 Instructor Walkthrough

A step-by-step guide to verify everything works before teaching.

---

## Pre-Class: Verify Everything Works

### Step 1: Console Playground

**Open in Firefox:**
```
curriculum/weeks/week-0/demos/console-playground.html
```

**Test these in the Console (`Cmd+Option+K`):**

| Test | Expected Result |
|------|-----------------|
| `document.querySelector('h1')` | Returns `<h1>Console Playground</h1>` |
| `document.querySelector('#counter')` | Returns `<span id="counter">0</span>` |
| `document.querySelector('.color-box')` | Returns the blue box div |
| `document.querySelector('#secret')` | Returns the hidden div |
| `document.querySelector('#secret').style.display = 'block'` | Reveals "🎉 You found the secret message!" |

- [x] All queries work
- [x] Image loads from picsum.photos
- [x] No console errors on page load

---

### Step 2: DevTools Field Guide

**Open in Firefox:**
```
curriculum/weeks/week-0/resources/dev-tools-fieldguide/index.html
```

**Verify:**
- [x] Page loads with fonts (DM Sans body, JetBrains Mono code)
- [x] Sidebar shows 4 sections:
  - **Get Started**: Overview, Your First 15 Minutes
  - **Tutorials**: The Console, The $0 Bridge, Reading Element State
  - **Troubleshooting**: Reading Errors, Quick Reminders
  - **Reference**: Visual Tools, Keyboard Shortcuts
- [x] Click each sidebar link — all 9 pages load
- [x] Navigation footers appear at bottom of tutorial pages

**Test Console Playground link from Field Guide:**
1. Go to `start.html` (Your First 15 Minutes)
2. Click the Console Playground link in the callout
3. Should open `../../demos/console-playground.html`
- [x] Link works

---

### Step 3: Lab Links

**Open:**
```
curriculum/weeks/week-0/labs/lab-0-2-console-explorer.md
```

**Verify these links resolve correctly:**
- [x] `../resources/dev-tools-fieldguide/index.html` → Field Guide
- [x] `../resources/dev-tools-fieldguide/start.html` → First 15 Minutes
- [x] `../resources/dev-tools-fieldguide/errors.html` → Reading Errors
- [x] `../resources/dev-tools-fieldguide/bridge.html` → The $0 Bridge
- [x] `../demos/console-playground.html` → Console Playground

---

## Day 1: Lecture Day

### Before Students Arrive
- [ ] Console Playground open in Firefox
- [ ] Field Guide `index.html` open in a tab
- [ ] Syllabus ready (brief overview only)
- [ ] Test projector/screen share with DevTools visible

### Delivery Sequence

**1. Syllabus Overview (5-10 min)**
- Brief — this is an advanced course
- Key points: 4 projects, accessibility integrated, portfolio focus
- Point to syllabus for details, move on

**2. What is JavaScript? (15 min)**
- Draw the 3-layer diagram (HTML = structure, CSS = appearance, JS = behavior)
- "Nervous system" metaphor
- Examples: toggles, forms, menus, preferences
- What JS is NOT: not magic, not memorization

**3. DevTools Tour (20 min)**
- Open Console Playground
- `Cmd+Option+K` to open Console directly
- Demo these commands live:

```javascript
2 + 2
"Hello, " + "World"
alert("Welcome to JavaScript!")
document.body.style.backgroundColor = "lightblue"
```

- Show Elements/Inspector tab briefly: "You know this from 368"

**4. Reading Code, Not Writing (15 min)**
- Show vocabulary: `const`, `function`, `querySelector`, `addEventListener`
- "Don't memorize. Recognize."

**5. Break (10 min)**

**6. Console Playground Practice (25 min)**

Math:
```javascript
10 * 5
2 ** 8
```

Strings:
```javascript
"Hello".length
"hello".toUpperCase()
```

Finding elements:
```javascript
document.querySelector('h1')
document.querySelectorAll('a').length
```

Changing things:
```javascript
document.querySelector('h1').textContent = "I changed this!"
document.querySelector('.color-box').style.background = 'hotpink'
```

Let students explore freely.

**7. Assignments (15 min)**
- **Lab 0-1: The Setup** — Create repo, enable GitHub Pages (do first!)
- **Tutorial 0-1: Codedex** — 5 exercises on codedex.io
- **Lab 0-2: Console Explorer** — Due before Day 2
- Point to **DevTools Field Guide** as reference

---

## Day 2: Practice Day

### Before Students Arrive
- [ ] Console Playground open
- [ ] VS Code ready for script linking demo
- [ ] Field Guide `errors.html` ready to reference

### Delivery Sequence

**1. What Did You Discover? (15 min)**
- "What did you try in the console?"
- "What surprised you?"
- "What broke?" (celebrate breaking!)
- Address common questions: quotes, `=`, `undefined`

**2. Script Linking Demo (20 min)**
- Create simple HTML file
- Add `<script src="script.js" defer></script>`
- Create `script.js` with button click handler
- Key concepts: `<script>` tag, `defer`, file paths

Common mistakes:
| Mistake | Symptom |
|---------|---------|
| Missing `defer` | "Cannot read property of null" |
| Wrong file path | Script doesn't run, no errors |
| Typo in selector | `null` returned |

**3. Error Reading Practice (15 min)**
- Break code intentionally (typo in selector)
- Read error together: TypeError, null, line number
- Reference: Field Guide `errors.html`
- Practice 3-4 common errors

**4. Break (10 min)**

**5. Work Time (30 min)**
Students choose:
- Finish Tutorial 0-1 (consolidate Codedex)
- Finish Lab 0-2
- Experiment with script linking

**6. Closing (10 min)**
- What you accomplished this week
- Week 1 preview: "Project 1: The System — theme toggle"
- Reminders: Tutorial + Labs due, come ready to code

---

## Quick Reference: Key Paths

| Resource | Path from `week-0/` |
|----------|---------------------|
| Console Playground | `demos/console-playground.html` |
| Field Guide (start) | `resources/dev-tools-fieldguide/index.html` |
| First 15 Minutes | `resources/dev-tools-fieldguide/start.html` |
| Errors Guide | `resources/dev-tools-fieldguide/errors.html` |
| Quick Reminders | `resources/dev-tools-fieldguide/connecting.html` |
| Lab 0-1 | `labs/lab-0-1-the-setup.md` |
| Lab 0-2 | `labs/lab-0-2-console-explorer.md` |
| Lab 0-3 | `labs/lab-0-3-portfolio-audit.md` |
| Tutorial 0-1 | `tutorials/tutorial-0-1-codedex-console.md` |

---

## If Things Go Wrong

**Console Playground won't load:**
- Check file path (should be in `demos/`)
- Use any website as fallback — Console works everywhere

**Field Guide links broken:**
- Navigate directly to files in `resources/dev-tools-fieldguide/`
- Paths were fixed — if still broken, check for typos

**Students overwhelmed by DevTools:**
- Focus ONLY on Console tab
- Skip Elements deep dive
- "We'll use more tabs as we need them"

**Students ahead:**
- Point to JavaScript30 Day 1
- Let them experiment more
- Preview Week 1 theme toggle concept

---

## Files to Have Open

### Day 1
1. `demos/console-playground.html` (Firefox)
2. `resources/dev-tools-fieldguide/index.html`
3. `labs/lab-0-1-the-setup.md`
4. `labs/lab-0-2-console-explorer.md`

### Day 2
1. `demos/console-playground.html` (Firefox)
2. `resources/dev-tools-fieldguide/errors.html`
3. VS Code (blank, for script linking demo)
4. `lectures/lecture-2-from-console-to-files.md`
