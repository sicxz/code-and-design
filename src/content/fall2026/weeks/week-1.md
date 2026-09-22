# Week 1 · Give content a structure

**Monday, September 28 and Wednesday, September 30 · 1–3:30 p.m.**  
Independent work estimate: **4 hours total**, including the recipe. Student AI is off.

## Studio brief

Make a recipe someone can follow. Before choosing colors, decide which content is a title, a description, an ingredient list, and a sequence of steps. You will start the [recipe project](/1/assignments/project-recipe/) now and style it next week.

Download the [recipe starter](/fall-2026/starters/recipe.zip). It contains a valid document shell, minimal CSS, a task README, and deliberately unfinished content. It is a starting point, not a model submission. Use a recipe you know or adapt one with attribution. Do not copy a long copyrighted article.

## References and documentation

Use **[HTML.com](https://html.com/)** as the main reference for this week's HTML. Focus on tags and attributes, headings, paragraphs, lists, links, and images. Look up element details in [MDN Web Docs](https://developer.mozilla.org/en-US/) or search [DevDocs](https://devdocs.io/). The [Milanote references board](https://app.milanote.com/1TZEGF153WvYf7?p=5XZtUQNrEkQ) holds the wider collection.

Keep one reference open beside your recipe. Look up a question, type a small example, and explain its effect in your own page. See [References and documentation](/1/resources/references/) for the lookup routine. The inherited optional manifesto is superseded; do not use it as the separate introduction-to-HTML bridge, whose exact prompt remains part of the opening-package review.

## Build sequence

Each studio uses 15 minutes to reconnect, 25 minutes for a demonstration, 30 minutes for a guided build, a 10-minute break, 45 minutes for your page, 20 minutes for a pair source check, and 5 minutes to save. The break is 2:10–2:20 p.m.

**Monday: choose elements by meaning.**

1. Write a recipe title, a short description, ingredients, and steps as plain text.
2. Add one `h1`. Use `h2` for Ingredients and Method. Put introductory prose in `p`, ingredients inside `ul`, and steps inside `ol`. Every list item needs its own `li`.
3. Wrap the main content in `main`. Keep elements properly nested: close a list item before beginning its next sibling; close a list before beginning the next section.
4. Read the unstyled page in order. Can a partner describe the recipe without relying on color or type size?
5. Inspect the browser's element tree. Compare it with your intended nesting. Browsers sometimes repair invalid markup, which can hide an error in the source.

**Wednesday: connect content.**

1. Demonstrate an anchor's `href`, then add a descriptive source link in your recipe's footer.
2. Add one image you created or may reuse. In a local folder, store it under `images/`; use a web URL in CodePen only when it is stable and permitted. Add alternative text suited to the image's purpose and a visible source credit.
3. Use `figure` and `figcaption` if the image needs a caption. Do not use an image of text to replace recipe instructions.
4. Ask a partner to read only the headings and follow only the numbered steps. Repair missing context or incorrect order.
5. Save your working recipe. Next week's CSS will style this same structure.

```html
<section>
  <h2>Method</h2>
  <ol>
    <li>Rinse and slice the fruit.</li>
    <li>Combine the ingredients in a bowl.</li>
  </ol>
</section>
```

The code is a small structure example, not the required recipe content. Change the food and instructions to your own meaningful material.

## Source check

Why is the ingredient list unordered while the method is ordered? Point to where the list begins and ends. Predict what changes if one step is moved outside its list. Try it in a copy, inspect, and repair.

## Studio evidence

Submit [Recipe structure check](/1/assignments/practice-01/) with the same recipe artifact, one explanation of a structural choice, and one question. Keep the recipe in progress for October 7; do not create a separate reflection page.

## Delivery check

Test your source link and image. Read the actual HTML, not only the preview. Check that the saved artifact contains your latest text. Optional: add a short note explaining a family or cultural connection to the recipe; this is not a research assignment.
