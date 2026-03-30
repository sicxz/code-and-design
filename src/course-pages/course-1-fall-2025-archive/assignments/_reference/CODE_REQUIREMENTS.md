# Code Requirements: Product Landing Page Implementation

## About This Phase

You've completed your Figma design—now it's time to bring it to life with HTML and CSS.

**What you're building:** The product landing page you designed in Figma
**When it's due:** Tuesday, December 3, 2024
**What's graded:** Your code implementation (this is separate from your design grade)

**Your Figma design is your roadmap.** Reference it constantly as you code. The closer your implementation matches your design, the better your final result.

---

## Page Structure: Semantic HTML

Your landing page should use semantic HTML5 elements to create a clear, accessible structure.

### Required Outer Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Product Name</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header id="header">
    <!-- Navigation goes here -->
  </header>

  <main>
    <!-- All your main content sections go here -->
  </main>

  <footer>
    <!-- Footer content goes here -->
  </footer>
</body>
</html>
```

### Inside `<main>`: Use Sections

Break your content into logical `<section>` elements:

```html
<main>
  <section id="hero">
    <!-- Hero content -->
  </section>

  <section id="video">
    <!-- Embedded video -->
  </section>

  <section id="features">
    <!-- Feature cards using <article> elements -->
  </section>

  <section id="data">
    <!-- Product data table -->
  </section>

  <section id="contact">
    <!-- Contact form -->
  </section>
</main>
```

**Note:** Video placement is flexible—place it where it makes sense in your design (could be in hero, its own section, or elsewhere).

### Understanding `<article>` vs `<section>`

**Use `<section>` for:**
- Thematic groupings of content
- Major page divisions
- Content that has a heading and relates to the page's main topic
- Example: Features section, Contact section

**Use `<article>` for:**
- Self-contained, independent content
- Content that could stand alone or be syndicated
- Reusable components
- Example: Individual feature cards, testimonials, blog posts

**Rule of thumb:** If the content could be pulled out and used somewhere else independently → use `<article>`

**In your features section, use `<article>` for each feature card:**

```html
<section id="features">
  <h2>Features</h2>
  <article>
    <img src="icon1.png" alt="Feature icon">
    <h3>Feature Name</h3>
    <p>Feature description...</p>
  </article>

  <article>
    <img src="icon2.png" alt="Feature icon">
    <h3>Feature Name</h3>
    <p>Feature description...</p>
  </article>

  <article>
    <img src="icon3.png" alt="Feature icon">
    <h3>Feature Name</h3>
    <p>Feature description...</p>
  </article>
</section>
```

**Learn more:** [MDN: `<article>` vs `<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)

---

## Required Elements

Your landing page must include all of the following elements with the specified IDs and classes.

### 1. Header/Navigation

**Requirements:**
- Fixed-position header (stays at top when scrolling)
- Header element with `id="header"`
- Logo/brand image with `id="header-img"`
- Navigation element with `id="nav-bar"`
- Minimum 3 navigation links with `class="nav-link"`

**What you implement:** How your Figma design shows the navigation.

### 2. Hero Section

**Requirements:**
- H1 headline (your product's value proposition)
- Subheading/supporting text
- Primary call-to-action button

**What you implement:** The hero design from your Figma file.

### 3. Video/Media Section

**REQUIRED:** Embed a video related to your product.

**Requirements:**
- Embedded video with `id="video"`
- Can use YouTube/Vimeo `<iframe>` OR HTML5 `<video>` element
- Must be responsive (scales on mobile)

**Embedding a YouTube video:**
```html
<iframe
  id="video"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Product video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

**Making video responsive:**
- Wrap in a container with `max-width` or use CSS to scale based on viewport
- Maintain 16:9 aspect ratio
- Consider `width: 100%; height: auto;` for simple scaling

**Learn more:** [MDN: The Embed Video element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

### 4. Features Section

**Requirements:**
- Minimum 3 feature cards
- Each feature uses `<article>` element
- Each feature has: icon/image, H3 heading, description text
- Layout using CSS Grid or Flexbox

**What you implement:** The feature card design from your Figma file.

### 5. Data Table (In-Page)

**IMPORTANT:** Table appears **in the page** (not in a modal). Modal implementation is a stretch goal.

**Requirements:**
- Table with `id="data-table"`
- Contains **product-specific data** (specs, pricing, comparisons, testimonials)
- Minimum 3 columns, 4-5 rows
- Proper structure with `<thead>`, `<tbody>`, `<th>`, and `<td>`
- `<th>` elements have `scope` attribute
- Responsive on mobile

**Basic table structure:**
```html
<table id="data-table">
  <thead>
    <tr>
      <th scope="col">Column Header 1</th>
      <th scope="col">Column Header 2</th>
      <th scope="col">Column Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Row Header</th>
      <td>Data</td>
      <td>Data</td>
    </tr>
    <!-- More rows -->
  </tbody>
</table>
```

**Mobile responsive strategies (choose one):**
- Horizontal scroll: Let table scroll sideways on small screens
- Stacked layout: Transform rows into cards using CSS
- Hide columns: Show only essential columns on mobile

### 6. Contact Form

**Requirements:**
- Form with `id="contact-form"` and `action="https://www.freecodecamp.com/email-submit"`
- Name input: `type="text"`, `required` attribute, associated label
- Email input: `id="email"`, `type="email"`, `required` attribute, associated label
- Message textarea: `required` attribute, associated label
- Submit button: `id="submit"`, `type="submit"`

**HTML5 validation:**
- Use `type="email"` for automatic email format validation
- Use `required` attribute for required fields
- Browser will validate before submission

**Style form states with CSS:**
- `:focus` - When user clicks into a field
- `:valid` - When input meets requirements
- `:invalid` - When input doesn't meet requirements

**Example:**
```css
input:focus {
  border-color: blue;
  outline: 2px solid lightblue;
}

input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}
```

### 7. Footer

**Requirements:**
- Footer navigation links or sitemap
- Copyright notice
- Optional: Social media links

**What you implement:** The footer design from your Figma file.

---

## Required CSS Demonstrations

You must demonstrate these CSS skills in your landing page:

### 1. At Least ONE Transform

Choose from:
- Button hover: `transform: translateY(-2px);` (lift effect)
- Card hover: `transform: scale(1.05);` (slight grow)
- Form focus: `transform: scale(1.02);` (subtle grow)
- Image hover: `transform: scale(1.1);` (zoom in)

**Example:**
```css
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}
```

### 2. At Least ONE Animation

Choose from:
- Fade in on load
- Slide up on scroll
- Pulse animation on CTA button
- Staggered feature card reveals

**Example fade-in animation:**
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.hero {
  animation: fadeIn 1s ease-in;
}
```

### 3. Responsive Design

- At least ONE media query
- Recommended breakpoint: 768px (tablet/mobile)
- Layout adapts for small screens

**Example:**
```css
@media (max-width: 768px) {
  .features {
    flex-direction: column;
  }
}
```

### 4. Fixed Navigation

Your navigation should stay at the top when the user scrolls.

**Basic approach:**
```css
#header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
}

/* Add padding to body so content doesn't hide behind fixed nav */
body {
  padding-top: 60px; /* Height of your nav */
}
```

---

## Code Organization

### File Structure

```
landing-page/
├── index.html
├── css/
│   └── styles.css
├── images/
│   ├── logo.png
│   ├── icon1.png
│   └── ...
└── README.md
```

### CSS Organization Order

Organize your CSS in this order for maintainability:

1. **CSS Variables** (colors, spacing, fonts)
2. **Reset/Base Styles** (*, body, html)
3. **Typography** (headings, paragraphs, links)
4. **Layout** (header, main sections, footer)
5. **Components** (buttons, cards, forms, table)
6. **Animations** (@keyframes rules)
7. **Media Queries** (responsive adjustments)

**Example:**
```css
/* 1. CSS Variables */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
  --spacing: 16px;
}

/* 2. Reset/Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
}

/* 3. Typography */
h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing);
}

/* Continue with remaining sections... */
```

### Semantic HTML Best Practices

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use `<article>` for feature cards (self-contained content)
- Use proper heading hierarchy: H1 → H2 → H3 (don't skip levels)
- Don't use headings for styling—use them for structure

### Code Quality

- Use external CSS file (not inline styles)
- Comment major sections
- Use meaningful class/ID names
- Consistent indentation
- Validate HTML and CSS

---

## Accessibility Requirements

Make your landing page accessible to all users:

**Required:**
- [ ] All images have descriptive `alt` attributes
- [ ] All form inputs have associated `<label>` elements
- [ ] Color contrast meets WCAG AA standards (4.5:1 for normal text)
- [ ] Visible focus states on all interactive elements
- [ ] Semantic HTML elements used appropriately
- [ ] Table has proper `<th>` elements with `scope` attribute
- [ ] Video iframe has `title` attribute describing the video
- [ ] Heading hierarchy is logical (don't skip levels)

**Check contrast:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Testing & Quality Assurance

Before submitting, test your landing page:

### Browser Testing
- Test in Chrome, Firefox, and Safari
- Check for layout issues
- Verify all links work
- Confirm video plays

### Mobile Testing
- Test on actual mobile device if possible
- Use browser dev tools device simulation
- Check that:
  - Navigation is usable
  - Video scales properly
  - Table is readable/scrollable
  - Form inputs are at least 16px font (prevents iOS zoom)
  - Touch targets are at least 44x44px

### Validation
- **HTML:** [W3C HTML Validator](https://validator.w3.org/)
- **CSS:** [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Fix all errors (warnings are okay)

### Accessibility
- **WAVE:** [WAVE Accessibility Tool](https://wave.webaim.org/)
- **Lighthouse:** Run in Chrome DevTools (Inspect → Lighthouse tab)
- Address critical accessibility issues

### Console Check
- Open browser console (F12)
- Verify no JavaScript errors
- Check for broken resource links (images, CSS)

---

## Deployment

Deploy your landing page to a live URL:

**Options:**

- **GitHub Pages:** Enable in repo settings (Settings → Pages)


**Deployment checklist:**
- [ ] All files uploaded/pushed
- [ ] Site loads at public URL
- [ ] All images display correctly
- [ ] Video plays
- [ ] Form works (submits to FreeCodeCamp URL)
- [ ] No broken links
- [ ] No console errors
- [ ] Link to Landing Page on your Home index.html page
 
---

## Submission Requirements

### 1. GitHub Repository

**Repository name:** `landing-page-[your-initials]-368`

**Must include:**
- All HTML, CSS, and image files
- README.md with:
  - Project name and description
  - Link to live site
  - Link to Figma design
  - Which CSS transform you implemented
  - Which CSS animation you implemented
  - Which table content type you chose
  - Challenges you encountered and how you solved them
  - What you learned from this project

**Example README structure:**
```markdown
# Product Landing Page: [Your Product Name]

## Project Description
A responsive landing page for [product] built with HTML and CSS.

## Links
- Live Site: https://your-site.netlify.app
- Figma Design: https://figma.com/file/your-design

## Technical Implementations
- **Transform:** Button hover lift effect using translateY
- **Animation:** Fade-in animation on hero section
- **Table Type:** Product specifications

## Challenges & Solutions
[Describe a challenge you faced and how you solved it]

## Key Learnings
[What did you learn from this project?]
```

### 2. Deployed Live Site

- Host on Netlify, GitHub Pages, or Vercel
- Site must be fully functional
- No console errors
- All resources load correctly

### 3. Canvas Submission

**Due: Tuesday, December 3, 2024**

Submit all three URLs:
1. GitHub repository URL
2. Live site URL
3. Figma design file URL

---

## Resources

### Your Design
- Your [DESIGN_BRIEF.md](DESIGN_BRIEF.md) - Review design phase requirements
- Your Figma file - Your visual roadmap for implementation

### Learning Resources
- **Milanote Board:** [Landing Page Info & Examples](https://app.milanote.com/1Vl1yK1rLjfkdv/landing-page-info?p=jHMkPcMB5W4)
  - Student examples
  - Component tutorials
  - Icon libraries
  - CSS resources

### HTML/CSS Reference
- [MDN Web Docs](https://developer.mozilla.org/) - Complete HTML/CSS documentation
- [CSS-Tricks](https://css-tricks.com/) - Tutorials and guides
- [MDN: `<article>` vs `<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
- [MDN: Embedding Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

### Responsive Design
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### Accessibility
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)

### Validation
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

---

## Getting Help

### During Class
Ask questions about:
- HTML structure and semantic elements
- CSS layout techniques
- Responsive design strategies
- Debugging errors

### Office Hours
Get help with:
- Translating your Figma design to code
- Fixing layout issues
- Accessibility improvements
- Deployment problems

### Debugging Strategies

**Problem: Layout doesn't match design**
- Use browser DevTools to inspect elements
- Check for missing/incorrect CSS
- Verify box-model (padding, margins, borders)
- Look for typos in class/ID names

**Problem: Elements overlapping**
- Check z-index values
- Review position properties (fixed, absolute, relative)
- Inspect parent container sizing

**Problem: Video not displaying**
- Check iframe src URL is correct
- Verify video is set to public/embeddable
- Check browser console for errors
- Test video URL directly in browser

**Problem: Responsive design not working**
- Verify meta viewport tag in `<head>`
- Check media query syntax
- Test breakpoints in DevTools device mode
- Ensure no fixed widths preventing scaling

**Problem: Form not submitting**
- Verify `action` attribute points to FreeCodeCamp URL
- Check `id="email"` is on email input
- Ensure `id="submit"` is on submit button
- Check browser console for errors

---

## Grading Criteria

Your code will be graded on:

### HTML Structure (25%)
- Semantic HTML5 elements used appropriately
- All required elements present with correct IDs/classes
- Proper form structure with labels
- Proper table structure (thead, tbody, th, td, scope)
- Valid HTML (passes W3C validator)
- Proper heading hierarchy
- `<article>` elements used for feature cards

### CSS Implementation (45%)
- Fixed navigation stays at top
- Responsive design with media queries
- At least one transform implemented
- At least one animation implemented
- Form states styled (focus, valid, invalid)
- Table styled and responsive (in-page display)
- Video responsive on mobile
- Implementation matches Figma design

### Design & Polish (20%)
- Visual consistency across sections
- Smooth hover/focus interactions
- Typography hierarchy clear and readable
- Cohesive color scheme from design
- Responsive behavior on multiple devices
- Professional appearance

### Deployment & Documentation (10%)
- Live site functional and accessible
- Clear, professional README
- No console errors or broken links
- All required URLs submitted on time

---

## Common Pitfalls to Avoid

1. **Starting before design is done** - Finish Figma first
2. **Not using semantic HTML** - Use `<header>`, `<section>`, `<article>`, not just `<div>`
3. **Forgetting required IDs/classes** - Double-check all specified IDs
4. **Table in modal instead of in-page** - Table should be visible on page load
5. **Generic table data** - Table must contain product-specific information
6. **Missing video** - Video is required with `id="video"`
7. **Not testing mobile** - Always test responsive design on small screens
8. **Skipping accessibility** - Alt text, labels, and contrast are required
9. **Form inputs without labels** - Every input needs an associated label
10. **Inline styles** - Use external CSS file
11. **Not validating code** - Run W3C validators before submitting
12. **Deploying with errors** - Check console and fix errors before deployment
13. **Poor README** - Document your work thoroughly

---

## Final Checklist

Before submitting on December 3:

**Code Complete:**
- [ ] All required sections implemented
- [ ] Video embedded with `id="video"`
- [ ] Table displayed in-page (not modal)
- [ ] Feature cards use `<article>` elements
- [ ] All required IDs and classes present
- [ ] At least one transform working
- [ ] At least one animation working
- [ ] Responsive design with media query
- [ ] Form validation states styled

**Quality:**
- [ ] HTML passes W3C validation
- [ ] CSS passes W3C validation
- [ ] No console errors
- [ ] All images have alt text
- [ ] All form inputs have labels
- [ ] Color contrast meets WCAG AA
- [ ] Code is organized and commented

**Testing:**
- [ ] Tested in multiple browsers
- [ ] Tested on mobile device/simulation
- [ ] Video plays correctly
- [ ] Form submits correctly
- [ ] Table is readable on mobile
- [ ] All links work

**Deployment:**
- [ ] Site deployed to live URL
- [ ] All resources load correctly
- [ ] Site is publicly accessible
- [ ] README.md is complete

**Submission:**
- [ ] GitHub repo URL
- [ ] Live site URL
- [ ] Figma design URL
- [ ] All URLs submitted on Canvas
- [ ] Submitted by Dec 3

---

**You've got this!** You've already designed your landing page in Figma—now it's just a matter of translating your design into code. Take it section by section, test frequently, and don't hesitate to ask for help.

Good luck! 🚀
