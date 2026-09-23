# Source checks and AI progression

A page can look finished before its author understands it. A source check makes that understanding visible through a small change you can perform and explain.

## The four actions

1. **Identify:** point to the HTML element and CSS rule responsible for a visible part of the page.
2. **Predict:** describe what should change before editing. Name what should remain the same.
3. **Edit:** make the change yourself in the actual source, save, and reload.
4. **Explain:** compare your prediction with the result using the element, selector, property, and value involved.

The instructor may choose the element or ask for a different value so that memorizing a prepared demonstration is not enough. You can use your editor and browser; close AI tools and messages from other people during an independent check. The instructor can clarify the task without supplying the code. A spoken explanation, typed explanation, or another agreed accessible format can show the same understanding.

## October 7: HTML and CSS foundation

In an individual exercise, use Project 1 to identify a heading and a CSS rule. Predict the effect of a change to spacing or type size, make the change, and explain it. Then repair one small nesting or class-name problem supplied by the instructor.

Readiness means all four actions are demonstrated, even if a first prediction needs correction after testing. It does not require speed, a perfect memory, or a visually elaborate Project 1. The instructor follows the individual exercise with a brief fresh-change spot check during studio work. The result contributes to the source-understanding criterion already present in the Project 1 rubric; it is not an additional assignment or grade category.

If an action is missing, record which one. Use the [source recovery starter](/fall-2026/starters/source-recovery.zip), complete the steps below, and arrange a fresh check during the next studio. Continue the course using human help and reference documentation while recovering. Do not stop building the next project.

### Recovery practice

Open `index.html` and `styles.css`. The HTML card has `class="note"`, while the intended rule uses `.notes`. First state why the padding is absent. Correct the selector, save, and refresh. Next change padding from `1rem` to `2rem`, predict the space that should change, and verify it. Finally, fix the provided list so both items belong inside it. Show the instructor the corrected files and explain one new change they choose. The sample is intentionally faulty; it is not a finished solution.

## After the foundation check: optional AI help

Starting October 12, students who have demonstrated the foundation may ask an AI tool to explain an unfamiliar declaration or help investigate a specific error. First write your own prediction and make an initial attempt. Limit the question to the relevant small snippet; verify the response through documentation and a source change. Do not ask it to build or rewrite the project. Human partners, the instructor, and documentation provide the same permitted support without AI.

A useful question is: “I expected this selector to match the heading. Here is the heading and the rule. What should I inspect?” A request to generate all of Project 2 exceeds this allowance.

## November 2: independent construction and debugging

Build a small content section from a blank body using a heading, a paragraph, and a working anchor link. Give it a reusable class. Add spacing and a flexible arrangement, then diagnose a supplied broken selector or path. Point to the cause and verify your repair at a narrow width. Allow about 15 minutes of individual work plus a short instructor verification during studio; take another attempt after practice if needed.

After this check, and only where a brief permits it, you may use scoped generation for a small part of Project 3 or Project 4. State the desired behavior, inspect every returned line, remove unfamiliar or unnecessary code, modify it yourself, and test the result. You remain responsible for source attribution and the final behavior. Do not submit generated content you have not checked or cannot explain. Independent checks remain AI-free throughout the course.

## Short disclosure

Add this to your existing source notes when AI was used:

> Tool and task: [name] helped explain why my navigation wrapped. I kept [specific change], changed [specific part], and verified [specific result at a stated width].

A few sentences are enough. You do not need a prompt diary, transcript, made-up failure, or separate process report. “No AI used” is a complete disclosure when true.

## Every week

The quick source question on each lesson checks that week's idea. Pair checks are practice, not a substitute for the two independent demonstrations. If a page works but its source cannot yet be explained, repair understanding with the smallest relevant example before adding features.
