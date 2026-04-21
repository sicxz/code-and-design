# Week 3: Signal + State

**Unit 1:** Adaptive Systems  
**Interaction Question:** How does an interface remember what a user asked it to do?

---

## Learning Outcomes

By the end of this week, students will be able to:

1. **Refactor** portfolio styles into a token-driven system using `variables.css`
2. **Implement** theme state with `data-theme` instead of presentation-only classes
3. **Persist** user preferences with `localStorage`
4. **Apply** a preference hierarchy (user choice -> system -> default)
5. **Use** `matchMedia` for system preference detection
6. **Respect** `prefers-reduced-motion` in both CSS and JavaScript decisions
7. **Prepare** Project 1 for submission as a coherent signal-and-state system

---

## Two-Day Breakdown

### Day 1: Signal, State, and Refactor
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | Why fundamentals still matter in an AI-assisted workflow |
| 0:20 | Lecture | Signal + state mental model; class toggles vs data attributes |
| 0:40 | Demo | Refactoring tokens and implementing state architecture |
| 0:55 | Break | -- |
| 1:05 | Practice 3-1 | The Inheritance: Figma tokens -> CSS variables |
| 1:35 | Closing | Project 1 checkpoint and prep for persistence work |

### Day 2: Memory and Preference
**Duration:** 90 minutes

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Opening | Review state architecture from Day 1 |
| 0:15 | Lecture | `localStorage`, `matchMedia`, and preference hierarchy |
| 0:35 | Demo | Loading saved theme and fallback logic |
| 0:50 | Break | -- |
| 1:00 | Practice 3-2 | The Preference: persistence + reduced-motion |
| 1:30 | Closing | Project 1 handoff to Week 4 |

---

## Activities

| Type | Activity | Due |
|------|----------|-----|
| Learn | Lecture 3-0: Why the Hard Way | Day 1 |
| Learn | Lecture 3-1: Signal & State | Day 1 |
| Learn | Lecture 3-2: Signal & State (Data Attributes + Memory) | Day 2 |
| Practice | Practice 3-1: The Inheritance | Day 1/2 |
| Practice | Practice 3-2: The Preference | Day 2 |
| Build | Build 3-2: The Preference (Canvas-aligned) | End of week |
| Project | Project 1: Signal + State | End of week checkpoint |
| Reflect | Reflect: Week 3 Visual Notes (Canvas-aligned) | End of week |

---

## Topics Covered

| Concept | Depth | Notes |
|---------|-------|-------|
| Refactor workflow | Practical | Keep behavior while improving maintainability |
| Design tokens in CSS | Practical | Figma variable naming and code parity |
| State architecture | Deep | `data-theme` as system state, CSS as renderer |
| localStorage | Deep | Save and restore preferences across sessions |
| matchMedia | Practical | Detect system theme + reduced-motion |
| Preference hierarchy | Conceptual + Applied | User > system > default |

---

## Project Milestone

**Project 1: Signal + State**

- [ ] Token file (`variables.css`) from Figma variable system
- [ ] Theme state managed with `data-theme`
- [ ] Toggle interaction connected to state changes
- [ ] Preference persistence with `localStorage`
- [ ] System fallback with `matchMedia`
- [ ] Reduced-motion preferences respected

---

## Key Vocabulary

| Term | Definition |
|------|------------|
| **Signal** | A user or environment event that the interface should respond to |
| **State** | The current truth of the interface (e.g., `data-theme="dark"`) |
| **Persistence** | Keeping a preference across page loads and sessions |
| **Preference hierarchy** | Order of decision sources: user, then system, then default |
| **Refactor** | Improve code structure without changing outward behavior |
