# Week 4 · Arrange the pieces

**Monday, October 19 and Wednesday, October 21 · 1–3:30 p.m.**  
Independent work estimate: **6 hours total**, including the tribute due October 25. Optional AI explanation/debugging only after the foundation check; no page generation.

## Studio brief

Turn the tribute plan into a flexible composition. Layout should support the content's reading order and remain useful when the browser narrows. A restrained page with an explained structure is the target.

## Build sequence

Each day: 15-minute reconnect, 25-minute demonstration, 30-minute guided experiment, break 2:10–2:20, 45-minute project build, 20-minute pair source check, and 5-minute save.

**Monday: Flexbox and natural reading order.**

1. Start with the tribute's meaningful HTML in a single column. Read its heading, introduction, image, and highlights aloud in source order.
2. In a separate `.tribute-intro` wrapper, place an image/figure and text section as siblings. Apply the demonstrated layout below.
3. Resize gradually. Identify when each child's minimum size makes a wrap useful. Keep a sensible stacked order; do not use CSS `order` to conceal confused HTML.
4. Compare the browser with your Figma plan. Translate the hierarchy and relationship, not each coordinate. Replace a rigid height if real text needs more space.
5. Add consistent spacing and a working external source link. Commit a readable version before adding any decoration.

```css
.tribute-intro {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.tribute-intro > * {
  flex: 1 1 18rem;
  min-width: 0;
}
```

With two children, this creates flexible items with a starting basis that can wrap. Inspect the actual children: Flexbox arranges the direct children of its container, not every descendant.

**Wednesday: critique, cascade, repair.**

1. Instructor shows two competing rules targeting one element. Inspect the winning declaration and its source before changing it. A later rule only wins when the other cascade factors allow it.
2. Partner A uses the page at a narrow width; Partner B records one observable problem, such as a clipped image or an overly long line. Switch.
3. Choose the highest-impact issue and identify the rule causing it. Write your prediction, change one thing, and verify the repair. Do not apply random values to several selectors at once.
4. Check image purpose/alternative text, heading sequence, contrast, keyboard focus, and source credits.
5. Add the tribute to the portfolio home. The card needs a title, a one-sentence description, and a working link; it does not need a custom thumbnail system.

## Source check

Which element is the flex container and which are its items? What does `gap` change? Predict what removing `flex-wrap` does at 375px, test in a copy, then restore the safer behavior.

## Studio evidence

Submit [Explain a layout repair](/1/assignments/practice-04/) with one actual problem, the responsible rule, and the observed repair. Submit the [tribute](/1/assignments/project-tribute/) once as a project; its planning and critique notes stay with that project.

## Delivery check

Read the live page at 375px and a wide width. Open every link and return home. Explain one Figma-to-code choice. The optional extension is one thoughtfully justified visual accent, not a quota of decorative elements.
