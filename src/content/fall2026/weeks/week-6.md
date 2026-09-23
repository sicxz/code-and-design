# Week 6 · Let the page respond

**Monday, November 2 and Wednesday, November 4 · 1–3:30 p.m.**  
Scoped AI generation is available only after the independent construction/debugging check and within the project brief.

## Studio brief

Your content decides when a layout needs to change. This week you will adapt the field guide, compare the October 28 experiments, and show that you can build and repair a small section independently.

## Build sequence

**Monday, November 2**

- **1:00–1:20:** return check. Open the October 28 files; compare the two-column prediction at 1000px with the one-column result at 375px. Explain one result before receiving a fix.
- **1:20–1:45:** instructor addresses common blockers using the actual starter. Locate a missing brace, wrong selector, or overridden rule before editing.
- **1:45–2:10:** introduce content-based breakpoints. Resize the guide until its card text or navigation becomes crowded. Record the width and choose a simpler layout before that point.
- **2:10–2:20:** break.
- **2:20–3:15:** independent construction/debugging check rotations; classmates build their responsive guide and test around the chosen breakpoint.
- **3:15–3:30:** explain one responsive decision and save. Arrange a recovery attempt if an independent action remains unclear.

For the check, create a small semantic section and working anchor link, add a reusable class and flexible layout, and repair a supplied selector/path fault without AI. The full procedure and recovery expectations are in [Source checks](/1/resources/source-checks/). Passing permits small, inspected generation where the brief allows it; it does not make an entire project an AI task.

**Wednesday, November 4**

- **1:00–1:15:** share one place where the browser needed a different layout than the initial sketch.
- **1:15–1:40:** demonstrate anchor navigation, the target `id`, and a visible keyboard focus style.
- **1:40–2:10:** add guide links such as `<a href="#entry-one">Entry one</a>` and an exactly matching article ID. Test each destination.
- **2:10–2:20:** break.
- **2:20–3:05:** test at narrow, intermediate, and wide widths; try 200% zoom; check image scaling and long text.
- **3:05–3:25:** keyboard partner test. One person uses Tab/Enter while the other records what is visible and where focus goes.
- **3:25–3:30:** save one concrete repair.

```css
.cards { display: grid; gap: 1rem; }
@media (min-width: 48rem) {
  .cards { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
```

`48rem` is an example to test, not the required breakpoint for every design. Explain the width your own content needs. The document still has the same meaningful reading order when CSS is removed.

## Source check

Point to the rule active just below and just above your breakpoint. Explain why the layout changes while the article content remains the same. If a link fails, compare its hash with the target ID character by character.

## Studio evidence

Submit [Responsive evidence](/1/assignments/practice-06/): one guide link, narrow/wide evidence of one decision, its source explanation, and a next step. One combined screenshot or two screenshots is enough; do not make a separate case study.

## Delivery check

Check three guide entries, meaningful internal links, focus visibility, image credit, and a return-to-portfolio link. Commit the working responsive version before attempting optional enhancements.
