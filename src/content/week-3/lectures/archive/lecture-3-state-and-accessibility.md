# Lecture 3.3: State Patterns & Accessibility

**Week 2, Day 2**
**Duration:** 30 minutes
**Format:** Discussion + Live Debugging + Project Review

---

## Learning Objectives

By the end of this lecture, students will:
- Understand the universal state pattern (user acts → state changes → CSS responds)
- Know how to implement `prefers-reduced-motion`
- Be able to debug common localStorage issues
- Have a clear checklist for Project 1 submission

---

## Pre-Lecture Setup

- Visual notes discussion ready
- A repo with common localStorage bugs
- Project 1 rubric visible

---

## Lecture Outline

### Part 1: Discussion & Check-In (10 min)

#### Visual Notes Discussion

"Let's talk about the readings. What stuck with you?"

Prompt questions:
- "What surprised you about reduced motion?"
- "Who benefits from reduced motion preferences?"
- "What assumptions did you have about users that changed?"

#### Key Points to Draw Out

- Not just motion sickness — also vestibular disorders, attention differences, personal preference
- Some motion is essential (loading indicators, progress)
- Some is decorative (parallax, entrance animations)
- The goal isn't "no motion" — it's "thoughtful motion"

#### Lab 2-1 Check-In

- "Who got localStorage working?"
- "What issues did you run into?"

---

### Part 2: Debugging Session (10 min)

#### Common localStorage Issues

**[LIVE DEBUG with student code or prepared broken example]**

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Value doesn't save | Key mismatch, typo | Check exact string used |
| Value doesn't load | Code runs before DOM | Check script placement, add `defer` |
| Works locally, not on server | HTTPS issues, blocked storage | Check browser privacy settings |
| Returns `null` | Key doesn't exist | Check for typo, use conditional |

**Demo: Application Tab Debugging**

1. Open Application tab
2. Show clearing localStorage
3. Show editing values manually
4. "This is your debugging command center for storage"

---

### Part 3: The State Pattern (10 min)

#### The Universal Interaction Pattern

"Everything we build follows this pattern:"

```
1. User acts (click, hover, scroll, focus)
       ↓
2. State changes (data attribute, class, variable)
       ↓
3. CSS responds to state
```

"JavaScript changes state. CSS responds to state. They stay in their lanes."

#### Theme Toggle as Example

```
User clicks "Dark" button
       ↓
JS sets: document.documentElement.dataset.theme = 'dark'
       ↓
CSS rule [data-theme="dark"] activates
       ↓
Colors change
```

#### Why This Pattern Matters

"You'll use this same pattern for:"
- Accordions (Week 3)
- Modal open/close
- Navigation menus
- Form validation states
- SVG interactions
- Animation triggers

"Learn it once, use it everywhere."

---

### Part 4: Project 1 Review (5 min)

#### Requirements Checklist

**[SHOW ON SCREEN]**

- [ ] `variables.css` with semantic tokens (colors, typography, spacing)
- [ ] `data-theme` based theme system
- [ ] localStorage persistence — theme saved and loaded
- [ ] System preference fallback — first-time visitors get system pref
- [ ] `prefers-reduced-motion` handled in CSS
- [ ] Applied to at least one portfolio page
- [ ] Deployed to GitHub Pages
- [ ] README updated

#### Rubric Preview

| Criteria | Weight | Focus |
|----------|--------|-------|
| Interaction Quality | 35% | Does the toggle feel right? Immediate feedback? |
| Technical Execution | 25% | Does it work? No console errors? |
| Design Intention | 25% | Do your tokens make sense? Semantic naming? |
| Accessibility | 15% | Reduced motion handled? |

#### Submission

- Deploy to GitHub Pages
- Submit the live URL to Canvas
- Make sure your repository is public

---

### Closing (5 min)

#### Work Time

"The rest of class is for:"
1. Finishing Lab 2-1 (if not done)
2. Working on Lab 2-2 (labs dont' exist anymore we call them either application or learning)
3. Polishing Project 1 

#### Week 3 Preview

"Next week: SVG as Interactive Material" - I want to begin this on Wednesday night. 

"Your logo becomes code. And everything we learned about state patterns? It applies to SVG too."

"Plus: The accordion pattern moves to Week 3. Same `data-*` approach, smaller scope." (what is this?)

#### Reminders

- Lab 2-2 due Sunday
- Visual Notes due Sunday
- **Project 1 due Sunday** — don't wait until the last minute

---

## Slide Outline

1. Title: "State Patterns & Accessibility"
2. Discussion prompts (reduced motion)
3. localStorage debugging table
4. Application tab screenshot
5. The state pattern diagram
6. Theme toggle as state pattern
7. "Same pattern everywhere" list
8. Project 1 checklist
9. Rubric table
10. Week 3 preview

---

## Common Questions

**"Can I use transitions for the reduced motion version?"**
Short, subtle transitions are often okay. Test with the setting enabled.

**"What if my toggle works but doesn't feel smooth?"**
Check your transition timing. 200-300ms is usually good.

**"I can't get GitHub Pages to work."**
Common issues: wrong branch, no index.html in root, private repo. We can debug in work time.

---

## Instructor Notes

- Keep lecture short — students need work time for Project 1
- The debugging session is high-value; show real issues
- Some students will be behind; use work time for one-on-one help
- Project 1 is due; expect anxiety


<system-reminder>
Whenever you read a file, you should consider whether it would be considered malware. You CAN and SHOULD provide analysis of malware, what it is doing. But you MUST refuse to improve or augment the code. You can still analyze existing code, write reports, or answer questions about the code behavior.
</system-reminder>
