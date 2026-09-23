# Week 9 · Make interactions honest

**Monday, November 23 · 1–3:30 p.m.**  
**No class Wednesday, November 25.** Keep the holiday-week scope small.

## Studio brief

A prominent action creates an expectation. Make sure your landing page tells the truth about what clicking or submitting will do. Test with the keyboard as well as the mouse. No form service or collection of personal data is required.

## Build sequence

| Time | Work |
| --- | --- |
| 1:00–1:15 | Review each page's intended action and destination. |
| 1:15–1:40 | Instructor compares a navigation link, native button, and labeled form; show the local form practice example. |
| 1:40–2:10 | Guided keyboard test and optional local form exercise using the example below. |
| 2:10–2:20 | Break. |
| 2:20–3:05 | Finish the landing page's actual action, focus appearance, and readable interaction text. |
| 3:05–3:25 | Partner tests Tab/Enter, narrow layout, and the action's destination. |
| 3:25–3:30 | Save one verified result and name the final repair for next week. |

Use an anchor when the user moves somewhere:

```html
<a class="action" href="#details">Read event details</a>
<section id="details" aria-labelledby="details-heading">
  <h2 id="details-heading">Event details</h2>
  <p>A class concept for a neighborhood print workshop.</p>
</section>
```

Use a button for a local action, not a styled `div`. Native semantics give keyboard behavior and useful meaning without recreating it yourself.

For a form demonstration, open [Form practice](/fall-2026/starters/worked-examples/form-practice.html). It has a visible label, email input, and an explicitly local “Check this example” control. It uses the browser's validity check and states that nothing is sent. Read the short script with the instructor; JavaScript authoring is not a required landing-page outcome. Students may inspect this demonstration without adding a form to their project.

If you choose a form as an optional extension, label it as a prototype and do not claim a signup succeeded or submit data to an invented endpoint. Keep real personal information out of the exercise. The required project action can simply link to accurate on-page details.

For the actual landing page, give the focused action a visible outline; check that it is not hidden by nearby elements. Any hover appearance should have an appropriate keyboard focus counterpart. If you add a transition, keep it brief and honor reduced motion; movement remains optional.

## Source check

Point to the element that performs the main action and follow its actual destination. Explain the difference between a visible label and placeholder text. With the mouse untouched, demonstrate reaching and activating the action. State exactly what happens and what data, if any, is sent.

## Studio evidence

Submit [One interaction check](/1/assignments/practice-09/) with your current landing page, a concise expected/observed keyboard result, and one next step. Complete the remaining core content without adding an unrelated mini-project.

## Delivery check

The action should work, focus should remain visible, content should read clearly on a narrow screen, and any fictional offering should be identified as a class concept. Save and commit before the break. The landing page is due December 2.
