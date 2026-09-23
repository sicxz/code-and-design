# Week 2 · Make the structure visible

**Monday, October 5 and Wednesday, October 7 · 1–3:30 p.m.**  
Student AI is off through October 7.

## Studio brief

Use typography and spacing to help someone cook from your recipe. Then show that you can connect a visible result to the source that caused it. The [recipe project](/1/assignments/project-recipe/) is due October 7.

## Build sequence

**Monday, October 5**

- **1:00–1:15:** inspect the recipe's unstyled structure and choose one readability problem.
- **1:15–1:40:** instructor demonstrates a selector, declaration, and the box model. Compare margin outside a border with padding inside it.
- **1:40–2:10:** follow the small CSS experiment below; predict each edit before refreshing.
- **2:10–2:20:** break.
- **2:20–3:05:** style your own recipe's type hierarchy, line length, and spacing. Start with one column.
- **3:05–3:25:** partner check: identify which rule creates the space between the title and first section.
- **3:25–3:30:** save and name the next repair.

```css
main {
  max-width: 42rem;
  margin: 2rem auto;
  padding: 1rem;
  border: 2px solid #222;
}
p { line-height: 1.6; }
```

Increase `padding` to `2rem` and observe the space inside the border. Restore it and increase the vertical `margin` instead. Explain why the two results differ. With `box-sizing: border-box` in the starter, the width calculation includes padding and border.

**Wednesday, October 7**

- **1:00–1:15:** review the [four source actions](/1/resources/source-checks/); show what counts as an explanation.
- **1:15–2:10:** complete an individual source exercise, then brief instructor spot checks while classmates finish the recipe delivery checklist. Each spot check uses a fresh instructor-selected edit; any remaining verifications continue during work time or by an arranged follow-up.
- **2:10–2:20:** break.
- **2:20–3:05:** finish core recipe requirements, perform recovery practice where needed, and test the published Pen or local files.
- **3:05–3:25:** brief table critique: identify one readable decision and one fix before delivery.
- **3:25–3:30:** save, submit, and note any follow-up source check.

Do not turn the check into a timed memory contest. The instructor records demonstrated actions and a targeted next step. If you need recovery, use [source recovery files](/fall-2026/starters/source-recovery.zip) and arrange another attempt. Continue building next week with human help and documentation.

## Source check

Identify an element and matching rule, predict a spacing or type edit, make it independently, and explain the result. Repair a small supplied nesting or class-name fault. This is the recipe's source-understanding evidence, not a second project.

## Studio evidence

Submit [Explain your CSS](/1/assignments/practice-02/) as a concise account of one prediction and result. It may use the recipe experiment; its weekly score concerns the explanation. Submit the finished recipe separately using its project brief.

## Delivery check

Check headings, list nesting, image credit and alternative text, source link, narrow-view readability, and the actual saved URL. Optional exploration waits until these work. There is no requirement for animation, a second page, or two typefaces.
