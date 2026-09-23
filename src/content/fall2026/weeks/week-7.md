# Week 7 · Debug and publish the guide

**Monday, November 9 · 1–3:30 p.m.**  
**No class Wednesday, November 11.** The guide is due November 15.

## Studio brief

A useful debugging habit begins with an observed fault, not a random rewrite. Finish the [field guide](/1/assignments/project-field-guide/) by locating the most consequential remaining problem and proving its repair.

## Build sequence

| Time | Work |
| --- | --- |
| 1:00–1:15 | List current guide issues. Choose one that affects reading, navigation, or delivery. |
| 1:15–1:40 | Instructor demonstrates the evidence loop with a broken relative path and a layout overflow. |
| 1:40–2:10 | Reproduce one fault in your own work; form a prediction and inspect the likely cause. |
| 2:10–2:20 | Break. |
| 2:20–3:05 | Repair and test; complete guide content, credits, and portfolio link. |
| 3:05–3:25 | Partner visits the published URL while signed out and reports one concrete finding. |
| 3:25–3:30 | Commit, save the live URL, and identify the remaining core task. |

1. **Observe:** describe the fault precisely. “At 375px, the page scrolls sideways” is more useful than “responsive is broken.”
2. **Locate:** inspect the element that extends beyond the viewport. Check computed width, minimum width, padding, and long unbroken content. If an image is missing, inspect its requested path and actual file location.
3. **Predict:** state which source change should solve the observed cause. Do not begin with `overflow-x: hidden`; that can conceal inaccessible content.
4. **Change:** make one edit. Save a copy or commit so you can reverse it.
5. **Verify:** reproduce the original test, then check another width or neighboring link to see whether the repair created a different problem.

For a useful path exercise, a guide image stored at `field-guide/images/leaf.jpg` should normally be referenced from that guide's `index.html` as `images/leaf.jpg`. An absolute path beginning with `/Users/` can work only on the author's computer. Case and extension must match the real file.

Use the HTML validator as evidence, not as a substitute for understanding. Read the first relevant message, find its source, and inspect it. Automated checks cannot establish that your content makes sense or that your layout is comfortable to read.

## Source check

Show the original symptom, the exact cause, the edit, and the test that now passes. Explain why your repair targets the cause. If the page had no visible fault, use a copy and intentionally break a known selector or image path, then demonstrate the same loop. Do not introduce faults into the published final version.

## Studio evidence

Submit [One bug, one verified repair](/1/assignments/practice-07/). A short before/after account and one artifact are enough. Submit the guide project separately on November 15, using its existing source notes and planning evidence rather than a new reflection document.

## Delivery check

Open the guide's public URL in a signed-out window. Test three article destinations, source credits, narrow/intermediate/wide layouts, keyboard focus, and the route home. All three entries should contain accurate, useful text. There is no required fixed sidebar, decorative-placement quota, or additional case-study page. Optional enrichment can wait until the page is usable.
