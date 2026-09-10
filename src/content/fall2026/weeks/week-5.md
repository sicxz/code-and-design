# Week 5 · Build a repeatable pattern

**Monday, October 26: studio · Wednesday, October 28: asynchronous practice**  
Independent work estimate: **4 hours outside the scheduled practice block**, including the field guide. October 28 replaces the class meeting; do not treat it as extra homework. AI explanation/debugging remains optional only after the foundation check. Complete the independent practice prediction yourself.

## Studio brief

A small field guide can teach someone to recognize or choose among three related things: plants, typefaces, print processes, neighborhood landmarks, game objects, or another topic you can verify. A shared card pattern lets each entry feel related without requiring elaborate decoration.

## Monday build sequence · 1–3:30 p.m.

- **1:00–1:15:** examine a three-entry guide. Distinguish repeated information from unique content.
- **1:15–1:40:** instructor demonstrates a Grid container, direct children, and `gap` using the [worked responsive-card example](/fall-2026/starters/worked-examples/responsive-cards.html).
- **1:40–2:10:** start the [field guide](/1/assignments/project-field-guide/). Choose three entries, name the common fields, and write real content for one complete entry.
- **2:10–2:20:** break.
- **2:20–3:05:** use the [guide starter](/fall-2026/starters/field-guide.zip); build one article, test it, then repeat the pattern twice. Add meaningful IDs for navigation destinations.
- **3:05–3:25:** rehearse Wednesday's workflow, open both its example and starter, and answer one prediction together.
- **3:25–3:30:** save the files needed for offline practice.

A concrete first pattern is `.cards { display: grid; gap: 1rem; }`. It remains one column until you choose columns. Monday's demo adds `grid-template-columns: repeat(3, minmax(0, 1fr))` in a wide-screen media query. `minmax(0, 1fr)` allows columns to share available space while shrinking; next week you will decide when multiple columns suit your own content.

## October 28 practice packet · complete within the usual 150-minute block

The instructor is away. This activity uses concepts demonstrated Monday; it introduces no new required tool or deployment step. Download the [practice starter ZIP](/fall-2026/starters/async-practice.zip) and read its `README.md`. The separate [worked example](/fall-2026/starters/worked-examples/responsive-cards.html) is a reference, not your submission.

1. **First 20 minutes:** open the starter locally. Read its HTML and CSS; identify the container and its three articles. Write a prediction for changing `gap` from `1rem` to `2rem`.
2. **Next 30 minutes:** make that one change, save, refresh, and compare. Locate the wide-screen media query and predict what changing three columns to two will do.
3. **Next 20 minutes:** make the column change and test at 375px and 1000px. The narrow page should remain one column; the wide page should show two columns with the third card starting the next row.
4. **Take a 10-minute break.**
5. **Next 35 minutes:** replace one card's text with an entry for your own field guide. Keep the same pattern. Explain why longer text may make that row taller.
6. **Next 20 minutes:** compare to the worked example. If your result differs, inspect spelling, braces, saved files, and which rule currently applies. Stop adding changes after two focused attempts at the same fault.
7. **Last 15 minutes:** submit [October 28 practice checkpoint](/1/assignments/practice-05/) with the artifact, your prediction/result, and one question. If blocked, submit the attempted files and a precise description of the blocker. A clear attempt is useful evidence; do not spend the evening rebuilding the page.

## Source check and help

Explain why a media-query rule applies at 1000px but not 375px. Ask a classmate to compare the relevant rule if helpful. Send unresolved questions through Canvas Inbox with expected/actual behavior and the file or line involved. Do not expect an immediate instructor reply. We begin November 2 by comparing and repairing these exact experiments.

## Delivery check

Check that your submitted version is your edited starter, not the supplied example. Core work ends with the checkpoint. Optional: apply the same tested pattern to one more field-guide entry; do not start a new framework, animation, or AI workflow during the absence.
