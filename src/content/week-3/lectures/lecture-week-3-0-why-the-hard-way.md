# Lecture 1.5: Why We Do Math the Hard Way

**Week 3, Day 1 — Opening**
**Duration:** 20-30 minutes
**Format:** Discussion + Live Demo

---

## Learning Objectives

By the end of this lecture, students will:
- Understand why learning code fundamentals matters in an AI-assisted world
- See a live demonstration of vibecoding's strengths and limits
- Recognize code as a design material with properties, behaviors, and constraints
- Know what the "desk critique test" means for their portfolio work

---

## Pre-Lecture Setup

- VS Code open with GitHub Copilot enabled
- Empty HTML file ready for live demo
- Browser ready for testing
- Kevin Roose quote ready to show (see Part 1)

---

## Part 1: The Headlines (5 min)

### The Hook

**[SHOW ON SCREEN]**

> "I follow AI adoption pretty closely, and I have never seen such a yawning inside/outside gap. People in SF are putting multi-agent claudeswarms in charge of their lives, consulting chatbots before every decision."
> — Kevin Roose, NY Times tech columnist, January 2026

**Question to class:** "Has anyone tried building something with AI? ChatGPT, Copilot, Claude?"

*(Expect hands. If not, that's fine too.)*

### Acknowledge the Reality

The hype is real. People are building:
- Apps
- Automation tools
- Websites
- Games

All with prompts instead of code.

This is called **vibecoding** — prompting AI until something works.

And it does work. Sometimes.

**So why are we here learning JavaScript "the hard way"?**

That's what we're going to examine.

---

## Part 2: The Demo (7-10 min)

### What AI Can Do

**[LIVE DEMO — VS Code with Copilot]**

Open an empty HTML file. Type a comment:

```javascript
// dark mode toggle that saves preference to localStorage
```

Watch Copilot autocomplete. Accept the suggestion.

**[Run it in browser]**

It works. Toggle flips. Refresh the page. Preference persists.

**30 seconds. No syntax memorization. Impressive.**

### Now Break It

Add another comment:

```javascript
// respect prefers-reduced-motion
```

Let Copilot suggest something. Accept it.

**Question:** "Does this actually work? How would you know?"

*(Often it adds code that looks right but doesn't integrate correctly.)*

Add one more:

```javascript
// animate the toggle button, but only when motion is allowed
```

Watch what happens. The logic often gets tangled:
- Motion check in the wrong place
- Animation fires regardless
- Conflicting conditions

### The Reveal

**When it breaks, what do you do?**

Option A: Keep prompting until something sticks
*(This is the vibecoding loop. It can take hours.)*

Option B: Understand enough to fix it yourself
*(This takes minutes — if you know what you're looking at.)*

**Key line:**

> "AI can write code. It can't debug your design decisions."

---

## Part 3: Code as Material (10 min)

### The Design Frame

You've spent semesters learning about materials.

**Paper:**
- Grain direction affects folding
- Weight affects durability
- Tooth affects ink absorption

**Type:**
- X-height affects readability
- Contrast affects elegance
- Optical adjustments matter more than math

**Color:**
- Temperature creates mood
- Relationships create harmony or tension
- Accessibility creates or excludes audiences

You learned these things not because software can't handle paper, type, or color — but because **you can't design with a material you don't understand**.

### Code Has the Same Properties

| Material Aspect | Code Equivalent |
|-----------------|-----------------|
| Properties | Syntax, APIs, data types |
| Behaviors | Events, state changes, timing |
| Constraints | Browser limits, accessibility requirements, performance |
| Affordances | What interactions the medium invites |

**Example:** `prefers-reduced-motion`

This is a constraint. The browser tells you: "This user doesn't want motion."

If you don't know that constraint exists, you can't design for it — and neither can your AI prompt.

### The Power Tool Analogy

A table saw doesn't replace understanding wood grain.
Figma doesn't replace understanding typography.
GitHub Copilot doesn't replace understanding code.

**AI is a power tool, not a replacement for material knowledge.**

Power tools make experts faster.
They make novices dangerous.

---

## Part 4: The Desk Critique Test (5 min)

### From the Syllabus

Your AI policy says:

> "If you can't explain your code in a critique, it's an integrity issue."

But forget integrity for a moment. Think practically.

### The Real-World Version

**Portfolio review:**
"Walk me through how this interaction works."

**Job interview:**
"Why did you approach it this way?"

**Client call:**
"Can you change this behavior?"

If your answer is "I don't know, AI wrote it" — you're stuck.

You can't iterate. You can't debug. You can't advocate for your design decisions.

### What You Actually Need

The goal isn't to write code from scratch forever.

The goal is to understand enough to:

1. **Know what to ask for** — good prompts require vocabulary
2. **Evaluate the output** — is this accessible? performant? maintainable?
3. **Fix it when it breaks** — and it will break
4. **Explain it when asked** — in critiques, interviews, and client calls

---

## Part 5: The Reframe (2 min)

### What This Course Actually Teaches

**Not:** "Learn JavaScript syntax"
**But:** "Learn enough to be an effective AI collaborator"

You're not competing with AI.
You're learning to direct it.

### The Real Gap

Kevin Roose talks about a "yawning gap" between insiders and outsiders.

That gap isn't about coding skill.
It's about people who've integrated AI into their workflow vs. people who haven't touched it.

**You can be on the inside of that gap while still understanding what you're building.**

That's what we're doing here.

---

## Bridge to Lecture 3-1

Now that we've talked about *why* we're learning this, let's get into *what* we're building.

Today: Design tokens, state vs. styling, and the architecture that makes your theme system actually work.

*(Transition to Lecture 3-1: Signal & State)*

---

## Slide Outline

1. **Kevin Roose quote** — full quote on screen
2. **"Vibecoding"** — definition, examples
3. **Live demo** — VS Code with Copilot (no slides, just screen share)
4. **Code as Material** — four properties table
5. **Power tool analogy** — table saw / Figma / Copilot
6. **Desk critique test** — the three questions
7. **The reframe** — "Learn to direct, not compete"

---

## Instructor Notes

### Tone
- This should feel like a real conversation, not a lecture
- Acknowledge that the question "why learn this?" is legitimate
- Don't be defensive about teaching fundamentals
- Don't trash AI — students will use it regardless

### The Demo
- Practice this beforehand — Copilot is unpredictable
- If Copilot produces perfect code, that's fine — move to the "break it" phase faster
- If Copilot fails immediately, that's also fine — it proves the point
- The goal is showing the *limits*, not the failures

### Common Pushback
**"But what if AI gets better?"**
It will. And the people who understand the material will still be the ones directing it. Pilots didn't become obsolete when autopilot improved.

**"I just want to be a designer, not a developer."**
You're not becoming a developer. You're learning enough to prototype your own ideas and evaluate others' implementations. That's a design skill.

**"This feels like the 'learn cursive' argument."**
Fair. The difference: cursive has no professional utility. Understanding interactive systems does — it's core to the work you'll actually do.

### Timing
- If discussion runs long in Part 1, shorten Part 3
- Part 2 (demo) is the anchor — don't skip it
- Part 5 can be delivered in 60 seconds if needed

---

## Resources

- [Kevin Roose on X](https://x.com/kevinroose) — original post
- [Hard Fork Podcast](https://www.nytimes.com/column/hard-fork) — vibecoding episodes
- [GitHub Copilot](https://github.com/features/copilot) — student access info
