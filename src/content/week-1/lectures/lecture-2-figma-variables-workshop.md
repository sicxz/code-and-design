# Lecture 2: Figma Variables + Workshop

**Week 1, Day 2**
**Duration:** 45 min lecture + 60 min workshop (105 min total)
**Format:** Demo + Hands-on Practice

---

## Learning Objectives

By the end of this session, students will:
- Create variables in Figma for colors, numbers, and booleans
- Organize variables into collections with modes
- Apply semantic naming conventions
- Build a basic style guide using their token system

---

## Pre-Session Setup

- Figma open with Variables Playground
- Student portfolios recreated in Figma (or in progress)
- Style guide template ready to share

---

## Session Outline

### Part 1: Learning Log Check-In (10 min)

**Template questions to display:**

1. What did you learn since last class?
2. What was hard?
3. How did you use AI this week?
4. What is still giving you issues?

Have students spend 3 minutes writing, then share with a neighbor (2 min pairs, 5 min class discussion).

---

### Part 2: Figma Variables Deep Dive (25 min)

#### Quick Check: Who Did the Learn Activity?

Show of hands:
- Who completed Learn 1-2 (Figma Variables)?
- Who got mode switching to work?
- What questions came up?

**If many didn't complete it:** Take 5 minutes for them to open the Variables panel and create one variable. Then continue.

#### Quick Review from Day 1

```
PRIMITIVES           →    SEMANTIC
(raw values)              (meaningful names)
─────────────────         ─────────────────
blue-500: #0066CC   →    action-primary
gray-900: #1A1A1A   →    text-primary
white: #FFFFFF      →    surface-primary
```

#### Variable Types in Figma

| Type | Stores | Use For |
|------|--------|---------|
| **Color** | Hex values | Fills, strokes, backgrounds |
| **Number** | Integers/decimals | Spacing, radius, sizes |
| **String** | Text | Font families (limited use) |
| **Boolean** | true/false | Layer visibility, variants |

**This week:** Focus on Color and Number

#### Creating Variables — Live Demo

**[DEMO: Create a Primitives Collection]**

1. Open Local Variables panel (right sidebar or View → Local Variables)
2. Click "Create collection" → Name it "Primitives"
3. Create color variables:
   ```
   colors/blue/500    #0066CC
   colors/blue/600    #0052A3
   colors/gray/100    #F5F5F5
   colors/gray/900    #1A1A1A
   colors/white       #FFFFFF
   colors/black       #000000
   ```
4. Create spacing variables:
   ```
   spacing/base       8
   spacing/xs         4
   spacing/sm         8
   spacing/md         16
   spacing/lg         24
   spacing/xl         32
   ```

**Key points:**
- Use `/` for hierarchy (creates folders)
- Be consistent with naming
- Primitives are raw values — no modes yet

#### Creating Semantic Variables with Modes

**[DEMO: Create a Semantic Collection]**

1. Create new collection → "Semantic"
2. Add a mode: Light (default), then add Dark mode
3. Create variables that reference primitives:

**Light Mode:**
```
surface/primary      → {Primitives/colors/white}
surface/secondary    → {Primitives/colors/gray/100}
text/primary         → {Primitives/colors/gray/900}
text/secondary       → {Primitives/colors/gray/600}
action/primary       → {Primitives/colors/blue/500}
action/primary-hover → {Primitives/colors/blue/600}
border/primary       → {Primitives/colors/gray/200}
```

**Dark Mode:**
```
surface/primary      → {Primitives/colors/gray/900}
surface/secondary    → {Primitives/colors/gray/800}
text/primary         → {Primitives/colors/white}
text/secondary       → {Primitives/colors/gray/300}
action/primary       → {Primitives/colors/blue/400}
action/primary-hover → {Primitives/colors/blue/300}
border/primary       → {Primitives/colors/gray/700}
```

#### Applying Variables

**[DEMO: Apply to a frame]**

1. Select a frame
2. In fill, click the variable icon
3. Choose semantic variable (e.g., `surface/primary`)
4. Switch modes in the layer panel
5. Watch colors change automatically

**The magic moment:** Everything updates when you switch modes.

---

### Part 3: Token Naming Deep Dive (10 min)

*Note: If running short on time, this can be condensed to 5 min by focusing on the exercise rather than the full explanation.*

#### The Nathan Curtis Approach

**Naming pattern:** `category/property/variant`

| Category | Examples |
|----------|----------|
| `surface/` | primary, secondary, elevated |
| `text/` | primary, secondary, muted, inverse |
| `action/` | primary, secondary, destructive |
| `border/` | primary, secondary, focus |
| `spacing/` | xs, sm, md, lg, xl |

#### Why This Matters

**Bad names:**
```
blue-button-color
white-background
dark-text
```

**Good names:**
```
action/primary
surface/primary
text/primary
```

**The test:** "If the brand color changes from blue to purple, do my token names still make sense?"

#### Exercise: Name These Tokens

Show a UI and have students suggest token names:
- The background of a card
- The text on a button
- The border of an input field
- The hover state of a link

---

### Part 4: Workshop Time (60 min)

#### Your Task: Build Your Token System

**Goal:** By the end of workshop, you should have:
- A Primitives collection with your brand colors
- A Semantic collection with Light/Dark modes
- At least one component (button) using semantic tokens
- A style guide frame that switches between modes

**Using your portfolio as the source:**

1. **Audit your existing colors**
   - What colors are you using?
   - What are they used FOR?

2. **Create a Primitives collection**
   - Your brand colors
   - Neutral grays
   - White and black

3. **Create a Semantic collection**
   - Light mode first
   - Then dark mode
   - Reference primitives, not hex values

4. **Apply to a style guide frame**
   - Color swatches with labels
   - Typography samples
   - Spacing demonstrations

#### Style Guide Template

```
┌─────────────────────────────────────────────┐
│  YOUR BRAND — Style Guide                    │
├─────────────────────────────────────────────┤
│                                              │
│  COLORS                                      │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐        │
│  │    │ │    │ │    │ │    │ │    │        │
│  └────┘ └────┘ └────┘ └────┘ └────┘        │
│  surface text   text  action border         │
│  primary primary sec.  primary primary      │
│                                              │
│  TYPOGRAPHY                                  │
│  Heading 1 (H1)                             │
│  Heading 2 (H2)                             │
│  Body text paragraph                         │
│  Caption / small text                        │
│                                              │
│  SPACING                                     │
│  ┌──┐ xs (4px)                              │
│  ┌────┐ sm (8px)                            │
│  ┌────────┐ md (16px)                       │
│  ┌────────────┐ lg (24px)                   │
│                                              │
│  COMPONENTS                                  │
│  ┌─────────────┐  ┌─────────────┐           │
│  │  Primary    │  │  Secondary  │           │
│  └─────────────┘  └─────────────┘           │
│                                              │
└─────────────────────────────────────────────┘
```

#### Instructor Circulation

While students work, check for:
- Are they using semantic names or just "color1, color2"?
- Do their semantic tokens reference primitives?
- Have they set up both modes?
- Are variables actually applied (not hardcoded colors)?

---

### Closing (5 min)

#### Progress Check

Show of hands:
- Who has primitives set up?
- Who has semantic variables with modes?
- Who got mode switching to work?

#### This Weekend

1. **Build 1-2: The Foundation** — Complete your style guide
2. **Practice 1-1: The Story Teller** — Creative JavaScript exercise
3. **Reflect 1-1: Visual Notes** — Capture design systems concepts

#### Next Week Preview

"Next week, we translate this Figma system into CSS. Your `variables.css` file will mirror what you built today. Then we add JavaScript to toggle between modes."

---

## Resources for Workshop

**Figma:**
- [Figma Variables Playground](https://www.figma.com/community/file/1253443272911187215)
- [FreeCodeCamp Figma Variables Handbook](https://www.freecodecamp.org/news/variables-in-figma-handbook)

**Token Naming:**
- [Nathan Curtis: Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) — Medium article
- [Design Tokens Community Group](https://www.designtokens.org/) — Standards and best practices

**Accessibility:**
- [Color Blind Simulator Extension](https://chromewebstore.google.com/detail/color-blind-low-vision-si/lgflijofdempkdlaknbfmacfidjjhjbb)

---

## Common Issues During Workshop

**"I can't find the Variables panel"**
- View → Local Variables
- Or click the variable icon in the right sidebar

**"My variables aren't showing when I try to apply them"**
- Make sure the variable is scoped to the property you're using (fill, stroke, etc.)
- Check the collection is published to the file

**"Mode switching doesn't work"**
- Variables must be applied, not hardcoded
- The frame needs to be set to use that collection's mode

**"I don't know what colors to use"**
- Start with what you have in your portfolio
- Use OpenProps as a reference for values
- Aim for 3-5 colors, not 20

---

## Instructor Notes

- The Learning Log check-in sets a good collaborative tone
- Students will be at different Figma skill levels — pair advanced with beginners
- The workshop time should feel productive, not rushed
- Focus on primitives + semantic for colors first; spacing can be stretch
- Have students share screens to troubleshoot
