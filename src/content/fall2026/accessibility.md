# Readability and accessibility checks

Use these checks while building, not just before submission. They catch common problems in our small pages; passing them does not establish full accessibility conformance.

## Structure and content

Read the page without its CSS. Does the order make sense? Use one main page heading and logical section headings. Choose a list for a real list, a link for navigation, and a button for an action. Link text should describe its destination; “Read the recipe” is more useful than “Click here.”

Give an informative image an `alt` description that serves its purpose in this context. Use `alt=""` for an image that is purely decorative. Put credit and licensing information in a caption or source note rather than stuffing it into alternative text. If an image fails to load, the page should still communicate its main content.

## Keyboard and focus

Set the mouse aside. Press Tab from the top of the page. Can you see which link or control is focused? Is the order sensible? Activate a link with Enter and a native button with its normal keyboard controls. Check that a repeated navigation block has an effective skip link on the longer guide and landing pages.

```css
:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 4px;
}
```

This provides a starting indicator; inspect it against each background. Do not remove outlines without a visible replacement.

## Narrow widths and zoom

Test at 375px, around your breakpoint, and around 1280px. Then zoom a desktop browser to 200%. Look for missing content, overlapping text, cut-off controls, or horizontal page scrolling. A layout needs to work between the two Figma frames, not only at their exact widths.

Start with readable single-column content and add columns when they have enough space. Let images shrink within their containers:

```css
img {
  max-width: 100%;
  height: auto;
}
```

A long URL can cause overflow; prefer descriptive link text and inspect whether the container can shrink. Avoid solving overflow by hiding it before you understand its cause.

## Color and motion

Use a contrast checker on actual foreground/background pairs. Aim for at least 4.5:1 for ordinary text and 3:1 for large text. Underline inline links or provide another cue beyond color. Keep essential instructions in text, not only an icon or colored status.

Animation is optional in this course. If you add movement, respect the reader's reduced-motion preference and ensure that the page works without it. Never make seeing an animation necessary to understand the content.

## Forms and calls to action

Associate each input with a visible label, use the appropriate input type, and write instructions before the user needs them. A prototype form must say that it does not send data. Do not display a success message suggesting a real subscription occurred when nothing was sent. Our required landing-page action is a real anchor destination; collecting personal data or setting up a form backend is not required.

## Delivery check

Open the published URL while signed out. Test every internal link, every image, the return-home link, and the main action. Compare it with the local version. Record the most useful repair and any known remaining limitation in two or three sentences.

Reference: [W3C WAI easy checks](https://www.w3.org/WAI/test-evaluate/easy-checks/). For a real production site, these classroom checks would be followed by broader testing, including users of assistive technology.
