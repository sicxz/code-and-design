# Product Landing Page - Assignment Overview

## Course Context
**Course:** Web Code 1 (HTML & CSS Focus)
**Assignment Type:** Competency Project (2nd to last assignment)
**Purpose:** Culmination of HTML/CSS skills before final portfolio project
**Prerequisites:** Students have completed lessons on tables and forms

## Assignment Summary
Students will design and build a complete product landing page for **one product or service** of their choice. This two-phase project requires students to first create a design in Figma, then implement it using HTML and CSS.

**Important:** Design and code are graded separately. All content (including the data table) should be about the chosen product.

## Learning Objectives
This assignment assesses students' ability to:
- Create semantic HTML structure with proper hierarchy
- Implement responsive layouts using Flexbox/Grid
- Style and validate HTML forms
- Create and style data tables with responsive strategies
- Apply CSS transforms and animations
- Build fixed navigation with smooth scrolling
- Follow accessibility best practices
- Organize and document code professionally
- Deploy projects to production
- Work with version control (Git/GitHub)

## Project Timeline

| Date | Deliverable | Phase |
|------|-------------|-------|
| **Wednesday, Nov 19** | Style Guide & Theme Rough Draft | Design Phase |
| **Sunday, Nov 24** | Design Rough Draft (Figma) | Design Phase |
| **Monday, Nov 25** | Figma Critique Session | Design Phase |
| **Tuesday, Dec 3** | Final Code | Implementation Phase |

## Project Phases

### Phase 1: Design (Figma)
Students create a complete visual design before writing any code. See [DESIGN_BRIEF.md](DESIGN_BRIEF.md) for details.

**Deliverables:**
- Nov 19: Style guide with typography, colors, spacing system
- Nov 24: Complete desktop (1440px) and mobile (375-425px) designs
- Nov 25: Participate in group critique session

### Phase 2: Implementation (HTML/CSS)
Students build their designed landing page using semantic HTML and CSS. See [CODE_REQUIREMENTS.md](CODE_REQUIREMENTS.md) for technical specifications.

**Deliverable:**
- Dec 3: Final code with GitHub repository, deployed site, and documentation

### Phase 3 (Optional): JavaScript Enhancement
Advanced students can add interactive features using JavaScript. See [STRETCH_GOALS.md](STRETCH_GOALS.md) for options.

## Required Components

### 1. Fixed Header/Navigation
- Logo with ID `header-img`
- Navigation bar with ID `nav-bar`
- Minimum 3 navigation links (class: `nav-link`)
- Stays fixed at viewport top when scrolling

### 2. Hero Section
- H1 headline (value proposition)
- Subheading/description
- Primary call-to-action button

### 3. Video/Media
- Embedded video related to product
- Video element with ID: `video`
- Can be YouTube/Vimeo iframe OR HTML5 video element
- Must be responsive (scales on mobile)

### 4. Features Section
- Minimum 3 feature cards using `<article>` elements
- Each card has: icon/image, H3 heading, description
- Layout using Grid or Flexbox

### 5. Data Table (In-Page)

**IMPORTANT:** Table must contain **product-specific data** and appear **in the page** (not in a modal).

Choose ONE table type that fits your product:
- **Product specifications** (technical details, dimensions, capabilities)
- **Feature comparison matrix** (compare product tiers/versions)
- **Customer testimonials** (reviews with ratings/dates)
- **Pricing breakdown** (itemized costs or package details)

**Requirements:**
- Table ID: `data-table`
- Minimum 3 columns, 4-5 rows
- Proper `<thead>` and `<tbody>` structure
- Displayed in-page (not in modal)
- Must be responsive

### 6. Contact Form
- Form ID: `contact-form`
- Name input (type: text, required)
- Email input (type: email with HTML5 validation, required)
- Message textarea (required)
- Submit button ID: `submit`
- All inputs have associated labels

### 7. Footer
- Navigation links/sitemap
- Copyright notice
- Optional: social media links

## CSS Requirements

### Must Include:
1. **One CSS Transform** (examples):
   - Button hover lift effect
   - Card scale on hover
   - Form field focus transform
   - Image rotation/scale

2. **One CSS Animation** (examples):
   - Page load fade-in
   - Slide-up animation with stagger
   - Pulse animation on CTA button
   - Navigation link fade-in sequence

3. **Responsive Design**:
   - At least one media query (recommended: 768px breakpoint)
   - Mobile-first or desktop-first approach
   - Flexible layouts that adapt to screen size

### Layout Requirements:
- Flexbox or Grid for main layout
- Fixed positioning for navigation
- Proper spacing and alignment
- Optional: CSS smooth scroll behavior

### Form Styling:
- Clear focus states
- Validation state styling (`:invalid`, `:valid`, `:focus`)
- Mobile-friendly (16px min font size to prevent iOS zoom)
- Distinct hover states on buttons

### Table Styling:
- Border-collapse or border styling
- Differentiated header row
- Mobile responsive strategy (scroll, stack, or hide columns)
- Optional: zebra striping, hover states

## Code Organization

### File Structure:
```
landing-page/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── (student images)
└── js/ (optional for stretch goals)
    └── script.js
```

### CSS Organization Order:
1. CSS Variables (colors, spacing, borders)
2. Base styles & reset
3. Typography
4. Layout sections (header, hero, features)
5. Components (table, form)
6. Footer styles
7. Animations (@keyframes)
8. Media queries

## Accessibility Requirements

### Required:
- All images have descriptive alt attributes
- Form inputs have associated labels (explicit or implicit)
- Color contrast meets WCAG AA (4.5:1 for normal text)
- Visible focus states on all interactive elements
- Semantic HTML with proper heading hierarchy
- Table has proper `<th>` elements with scope attribute

### Recommended:
- Skip navigation link
- ARIA labels where needed
- Keyboard navigation testing
- 44x44px minimum touch targets on mobile

## Best Practices

### HTML:
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (H1 → H2 → H3, no skipping levels)
- Meaningful class names (BEM methodology recommended)
- Code must pass W3C validation

### CSS:
- Use CSS custom properties (variables)
- Comment major sections
- Avoid !important unless absolutely necessary
- Consistent naming conventions
- DRY (Don't Repeat Yourself) principles

### Version Control:
- Meaningful commit messages
- Regular commits showing progress
- Clean repository structure

## Submission Requirements

### 1. GitHub Repository
- Name format: `landing-page-[initials]-368`
- Must include README.md with:
  - Project description
  - Which CSS transform implemented
  - Which CSS animation implemented
  - Which table content type chosen
  - Challenges encountered and solutions
  - Key learnings

### 2. Deployed Live Site
- Host on: Netlify, GitHub Pages, or Vercel
- Site must be fully functional
- No console errors

### 3. Figma Design File
- Share link with view access
- Must show complete design before implementation

### 4. Canvas Submission
- Submit all three URLs (GitHub, live site, Figma)

## Grading

**Important:** Design and code are graded separately.

### Design Grade (Figma - Due Nov 24)
See [DESIGN_BRIEF.md](DESIGN_BRIEF.md) for detailed assessment criteria:
- Visual Consistency & Design System (25%)
- Layout & Hierarchy (25%)
- Required Components (25%)
- Interaction Design & Polish (15%)
- Documentation & Presentation (10%)

### Code Grade (HTML/CSS - Due Dec 3)

**HTML Structure: 25%**
- Semantic HTML5 elements used appropriately
- All required elements present with correct IDs/classes
- Proper form and table structure
- Valid HTML (W3C validator)
- Proper heading hierarchy

**CSS Implementation: 45%**
- Fixed navigation that stays at top
- Responsive design with media queries
- At least one transform implemented
- At least one animation implemented
- Form states styled (focus, valid, invalid)
- Table styled and responsive (in-page display)
- Implementation matches Figma design

**Design & Polish: 20%**
- Visual consistency across sections
- Smooth hover/focus interactions
- Typography hierarchy and readability
- Cohesive color scheme
- Responsive behavior on multiple devices
- Professional appearance

**Deployment & Documentation: 10%**
- Live site functional and accessible
- Clear, professional README
- No console errors or broken links
- All required URLs submitted

## Timeline Recommendations

### Design Phase (Nov 13-24)
- **Week 1 (Nov 13-17):**
  - Research landing pages (Unbounce article, Milanote board)
  - Choose product/service
  - Begin style guide in Figma
  - **Due Wed Nov 19:** Style guide & theme rough draft

- **Week 2 (Nov 18-24):**
  - Complete desktop design (1440px)
  - Complete mobile design (375-425px)
  - Design interaction states and form validation states
  - Annotate animations/transforms
  - **Due Sun Nov 24:** Design rough draft in Figma
  - **Mon Nov 25:** Figma critique session

### Implementation Phase (Nov 25-Dec 3)
- **Week 3 (Nov 25-Dec 1):**
  - Build HTML structure with semantic markup
  - Implement CSS styling and layout
  - Create responsive design with media queries
  - Style form validation states
  - Style and make table responsive

- **Week 4 (Dec 2-3):**
  - Add CSS transforms and animations
  - Test on multiple devices/browsers
  - Check accessibility (contrast, labels, alt text)
  - Deploy to Netlify/GitHub Pages/Vercel
  - Write README documentation
  - **Due Tue Dec 3:** Final code submission

**Total Estimated Time:** 10-15 hours

## Common Pitfalls to Avoid

1. Starting to code before completing Figma design
2. Table not being product-specific (generic filler data)
3. Table in a modal instead of in-page
4. Forgetting to include required IDs and classes
5. Not testing on multiple devices/screen sizes
6. Skipping accessibility requirements (alt text, labels)
7. Poor mobile form experience (too small, zooms on focus)
8. Not using semantic HTML elements
9. Inline styles instead of external CSS
10. Not testing form validation
11. Forgetting to document in README
12. Deploying with console errors

## Resources

### Landing Page Fundamentals:
- **Unbounce Article:** [What Is a Landing Page?](https://unbounce.com/landing-page-articles/what-is-a-landing-page/)
- **Milanote Board:** [Landing Page Info & Examples](https://app.milanote.com/1Vl1yK1rLjfkdv/landing-page-info?p=jHMkPcMB5W4)
  - Student examples from previous quarters
  - Component tutorials
  - Icon libraries
  - CSS Grid/Flexbox resources

### HTML/CSS Reference:
- MDN Web Docs
- CSS-Tricks
- W3Schools

### Design Inspiration:
- Dribbble
- Awwwards
- Land-book
- Student examples in `/screenshots` folder

### Accessibility Testing:
- WAVE (WebAIM)
- axe DevTools
- Lighthouse (Chrome DevTools)

### Validation:
- W3C HTML Validator
- W3C CSS Validator

## Connection to Final Portfolio Project

This assignment prepares students for their final portfolio by:
- Practicing complete design-to-deployment workflow
- Building confidence with HTML/CSS fundamentals
- Creating a project they can showcase
- Learning documentation and professional presentation
- Mastering Git/GitHub and deployment platforms

Students should aim for portfolio-quality work, as this project demonstrates their competency before building their final portfolio site.

## Questions to Consider

As you work on this project, reflect on:
1. How does your design support your product's value proposition?
2. What design decisions improve user experience on mobile devices?
3. How do your animations/transforms enhance the user experience without being distracting?
4. What accessibility features did you implement and why are they important?
5. What was the most challenging aspect of this project and how did you overcome it?
6. How will you apply these skills to your final portfolio project?

---

**Need Help?** Review the detailed technical specifications in [CODE_REQUIREMENTS.md](CODE_REQUIREMENTS.md), design guidelines in [DESIGN_BRIEF.md](DESIGN_BRIEF.md), or optional enhancements in [STRETCH_GOALS.md](STRETCH_GOALS.md).
