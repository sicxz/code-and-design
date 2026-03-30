# Design Brief: Product Landing Page

## About This Assignment

This project builds on your knowledge of HTML tables and forms from Web Code 1. You'll apply these skills in a real-world context: designing a landing page that showcases a product or service and converts visitors into customers.

**Key Focus Areas:**
- Design-first workflow using Figma
- Semantic HTML structure (tables and forms)
- Responsive design principles
- Visual hierarchy and conversion optimization
- Professional design documentation

---

## Project Timeline

| Date | Deliverable | Details |
|------|-------------|---------|
| **Wednesday, Nov 19** | Style Guide & Theme Rough Draft | Typography, colors, spacing system defined in Figma |
| **Sunday, Nov 24** | Design Rough Draft | Complete desktop + mobile designs in Figma |
| **Monday, Nov 25** | Figma Critique | Group feedback session (assigned groups) |
| **Tuesday, Dec 3** | Final Code | Completed HTML/CSS implementation |

**Important:** Design and code are graded separately. This brief covers the design phase (due Nov 24).

---

## Design-First Workflow

**Phase 1: Design (You are here)**
1. Research landing page examples (see Resources below)
2. Choose your product/service
3. Create style guide (due Nov 19)
4. Design complete layout for desktop and mobile (due Nov 24)
5. Participate in critique session (Nov 25)

**Phase 2: Implementation (starts after design approval)**
6. Build HTML structure
7. Apply CSS styling
8. Implement responsive design
9. Test and deploy

**Why design first?** Creating a complete visual design before coding helps you:
- Plan the entire user experience
- Make design decisions without code constraints
- Identify potential problems early
- Have a clear roadmap when coding begins

---

## Objective

Design a conversion-focused landing page for **one product or service** of your choice. Your design should create a clear path to action while establishing a cohesive visual system.

**Examples of products/services:**
- Physical product (headphones, sneakers, coffee maker, skincare)
- Digital product (app, software, online course)
- Service (consulting, design agency, fitness coaching)
- Event (conference, workshop, concert)

**All content—including your data table—should support and describe your chosen product.**

---

## Deliverable

A link to your Figma file containing:
- Style guide (typography, colors, spacing system)
- Complete desktop design (1440px width)
- Mobile responsive version (375-425px width)
- Hover/interaction states for key elements
- Form validation states (default, focus, error, success)
- Animation annotations (see Animation section below)

---

## Required Design Elements

### 1. Hero Section

The first thing visitors see—make it count.

**Must include:**
- Impactful headline communicating your product's unique value
- Supporting subheading reinforcing key benefits
- Primary call-to-action button
- Background image/illustration treatment
- Clear visual hierarchy

**Example:** If designing for wireless headphones:
- Headline: "Sound That Moves With You"
- Subheading: "Studio-quality audio. 40-hour battery. Zero wires."
- CTA: "Shop Now" or "Hear the Difference"

### 2. Navigation

**Must include:**
- Fixed-position header with logo/brand mark
- Minimum 3 navigation links
- Mobile-responsive menu treatment (hamburger menu acceptable)
- Design hover/active states

**Common nav links:** Home, Features, Pricing, Contact, About

### 3. Video/Media Section

**REQUIRED:** Embed a video related to your product.

**Must include:**
- Video placeholder in your design showing thumbnail/preview image
- Clear dimensions and aspect ratio (16:9 recommended: 560x315, 640x360, or 1280x720)
- Consider placement: hero section, dedicated section, or within features area
- Mobile responsive treatment (how video adapts on small screens)

**Video options:**
- Product demo or promotional video
- Customer testimonial video
- How-it-works explainer
- Brand story video
- Product review or unboxing

**Design considerations:**
- Use a frame in Figma with an image placeholder (screenshot from the video)
- Show play button overlay if desired
- Consider surrounding content (heading, caption, CTA)
- Plan for responsive scaling

**Example for headphones:**
- Embed product demo video showing features in action
- Or customer testimonial video praising the product
- Or "How Active Noise Cancellation Works" explainer

**Mobile strategy:**
- Video should scale to container width
- Maintain aspect ratio
- Consider whether video should be full-width or constrained

### 4. Features Section

Showcase what makes your product valuable.

**Must include:**
- Minimum 3 key features/benefits
- Icon or image for each feature
- Consistent card layout (grid or flexbox pattern)
- Clear typography hierarchy

**Example for headphones:**
- Feature 1: "40-Hour Battery" (icon: battery) - "Listen for days, not hours"
- Feature 2: "Active Noise Cancellation" (icon: sound waves) - "Block out distractions"
- Feature 3: "Premium Comfort" (icon: headphones) - "All-day wearability"

See [student-examples-set-1.png](screenshots/student-examples-set-1.png) and [student-examples-set-2.png](screenshots/student-examples-set-2.png) for inspiration.

### 5. Data Table (In-Page)

**IMPORTANT:** Your table displays **product-specific data** and appears **in the page** (not in a modal).

Choose ONE table type that fits your product:

**Option A: Product Specifications**
Display technical details, dimensions, or capabilities.

Example for headphones:
| Specification | Details |
|--------------|---------|
| Battery Life | 40 hours |
| Charging Time | 2 hours (USB-C) |
| Weight | 250g |
| Bluetooth | 5.3 |
| Driver Size | 40mm |

**Option B: Pricing/Feature Comparison**
Compare different product tiers or packages.

Example:
| Feature | Basic | Pro | Premium |
|---------|-------|-----|---------|
| Battery Life | 20 hrs | 30 hrs | 40 hrs |
| Noise Cancellation | ✗ | ✓ | ✓ |
| Warranty | 1 year | 2 years | Lifetime |
| Price | $99 | $149 | $249 |

**Option C: Customer Testimonials/Reviews**
Display customer feedback with ratings.

| Customer | Rating | Review | Date |
|----------|--------|--------|------|
| Sarah M. | ⭐⭐⭐⭐⭐ | "Best headphones I've owned" | Nov 2024 |
| James K. | ⭐⭐⭐⭐⭐ | "Battery life is incredible" | Oct 2024 |

**Option D: Pricing Breakdown**
Itemized costs or package details.

**Table Design Requirements:**
- Minimum 3 columns, 4-5 rows
- Clear header row with distinct styling
- Readable text hierarchy
- Mobile-responsive strategy planned (see Mobile section below)
- Fits naturally into your page layout

### 6. Contact Form Section

Design a conversion-focused contact form.

**Required form fields:**
- Name field with label
- Email field with label (show HTML5 validation state)
- Message/comment textarea with label
- Submit button with clear visual prominence

**Required form states to design:**
- Default state (empty fields)
- Focus state (user clicks into field)
- Error state (invalid input, e.g., "user@" without domain)
- Success state (valid input)

**Form design considerations:**
- Clear labels above or beside inputs
- Adequate spacing between fields
- Touch-friendly sizing (minimum 44x44px for mobile)
- Visual feedback for validation states
- Clear error messages

**Example error state:** Email field with red border and message "Please enter a valid email address"

See [landing-page-concepts.png](screenshots/landing-page-concepts.png) for form layout examples.

### 7. Footer

**Include:**
- Link organization (sitemap or key pages)
- Copyright notice
- Optional: social media links, trust badges
- Consistent with overall design system

---

## Design System Requirements

Create a style guide page in your Figma file that defines:

### Typography

- **H1 (Hero headline):** Size, weight, line height
- **H2 (Section headings):** Size, weight, line height
- **H3 (Feature/card titles):** Size, weight, line height
- **Body text:** Minimum 16px for readability
- **Button/CTA text:** Bold, actionable
- **Form labels:** Clear, legible

Define line height (1.5-1.8 for body text) and letter spacing as needed.

See [figma-style-guide-template.png](screenshots/figma-style-guide-template.png) for example.

### Color Palette

Define colors with hex codes:
- **Primary brand color** (main brand identity)
- **Secondary/accent color** (variety, visual interest)
- **CTA color** (high contrast, draws attention)
- **Neutral backgrounds** (white, light gray, etc.)
- **Text colors** (dark gray/black for body, lighter for secondary text)
- **Error state color** (red for form validation errors)
- **Success state color** (green for valid form inputs)

**Accessibility requirement:** Ensure WCAG AA contrast ratios:
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum

Use tools like WebAIM Contrast Checker or Figma plugins to verify.

### Spacing System

Define a consistent spacing scale using multiples of 4 or 8:

**Example:** 8px, 16px, 24px, 32px, 48px, 64px, 96px

Apply consistently:
- Section padding
- Card spacing
- Form field gaps
- Button padding
- Margins between elements

Plan how spacing adjusts on mobile (often reduced by 25-50%).

---

## Animation & Interaction Design

**Your task:** Design and annotate interaction states in Figma. You'll implement these with CSS during the coding phase.

### Required: Design at least ONE transform

Choose from:
- **Button hover:** Subtle lift effect (translate up 2-4px + shadow)
- **Card hover:** Scale slightly larger (1.05x) or add elevation shadow
- **Form field focus:** Subtle border glow or scale
- **Image hover:** Subtle zoom into image

**How to show in Figma:**
- Create separate frames showing "default" and "hover" states side-by-side
- Add annotation text: "On hover: scale 1.05x, add shadow"

### Required: Design at least ONE animation

Choose from:
- **Page load fade-in:** Hero content fades in when page loads
- **Scroll-triggered reveal:** Features section animates in when scrolled into view
- **Form submission:** Loading spinner or success message animation
- **Staggered animations:** Feature cards appear one after another

**How to show in Figma:**
- Use Figma's prototype mode to demonstrate timing
- Add notes: "Fade in from 0% to 100% opacity over 0.6s"
- Show keyframes or states if applicable

**Tip:** Keep animations subtle and purposeful. They should enhance user experience, not distract.

---

## Mobile Responsive Design

Design a mobile version (375-425px width) showing how your layout adapts.

**Key mobile adaptations:**

**Layout:**
- Single-column layouts (stack elements vertically)
- Reduce spacing between sections
- Simplify navigation (hamburger menu)

**Typography:**
- Slightly smaller heading sizes
- Maintain 16px minimum for body text

**Buttons & Forms:**
- Touch-friendly sizes (minimum 44x44px tap targets)
- Full-width buttons often work better on mobile
- Adequate spacing between form fields

**Table Mobile Strategy (choose one):**

**Option 1: Horizontal Scroll**
- Table scrolls horizontally
- First column stays fixed (optional)
- Works well for wide comparison tables

**Option 2: Stacked Layout**
- Each row becomes a card
- Data stacks vertically within each card
- Good for specifications or testimonials

**Option 3: Hide Columns**
- Show only essential columns on mobile
- Less important data hidden
- Works for feature comparisons

See [responsive-design-principles.png](screenshots/responsive-design-principles.png) for mobile layout strategies.

---

## Content Generation

**Use AI to help generate realistic content:**

Tools like ChatGPT, Claude, or Gemini can create:
- Product name and tagline
- Feature descriptions (3-4 sentences each)
- Form labels and helper text
- Table data that fits your chosen product
- Footer links and copyright text
- Customer testimonials (if using testimonial table)

**Prompt example:** "Generate 3 feature descriptions for wireless headphones, each highlighting a key benefit with an engaging 2-sentence description."

---

## Resources

### Required Reading:
**What is a Landing Page?**
- Article: [Unbounce - What Is a Landing Page?](https://unbounce.com/landing-page-articles/what-is-a-landing-page/)
- Video explanation included in article

### Visual Inspiration & Examples:
**Milanote Board:** [Landing Page Info & Examples](https://app.milanote.com/1Vl1yK1rLjfkdv/landing-page-info?p=jHMkPcMB5W4)

Contains:
- Landing page concepts and principles
- Student examples from previous quarters
- Component tutorials (cards, navigation, forms)
- Icon library resources
- CSS Grid and Flexbox tutorials
- Responsive design guides

### Local Resources:
- [figma-style-guide-template.png](screenshots/figma-style-guide-template.png) - Example style guide
- [student-examples-set-1.png](screenshots/student-examples-set-1.png) - Previous student work
- [student-examples-set-2.png](screenshots/student-examples-set-2.png) - More student examples
- [landing-page-concepts.png](screenshots/landing-page-concepts.png) - Layout concepts
- [responsive-design-principles.png](screenshots/responsive-design-principles.png) - Mobile strategies
- [milanote-resources-overview.png](screenshots/milanote-resources-overview.png) - Resource overview

### Icon Resources (from Milanote board):
- Font Awesome
- Heroicons
- Feather Icons
- Remix Icon
- Iconify

---

## Before You Start Checklist

Before beginning your Figma design:

- [ ] Read the Unbounce article on landing pages
- [ ] Explore the Milanote board for inspiration
- [ ] Choose your product/service
- [ ] Decide which table type fits your product best
- [ ] Find or plan video content for your product
- [ ] Collect or plan content (text, images)
- [ ] Review student examples to understand scope

---

## Before You Submit Checklist

Before submitting your Figma link on Nov 24:

**Style Guide Page:**
- [ ] Typography hierarchy defined (H1, H2, H3, body)
- [ ] Color palette with hex codes
- [ ] Spacing system documented
- [ ] All colors meet WCAG AA contrast requirements

**Desktop Design (1440px):**
- [ ] Hero section with headline, subheading, CTA
- [ ] Fixed navigation with logo and 3+ links
- [ ] Video section with placeholder/thumbnail image (16:9 aspect ratio)
- [ ] Features section (3+ features with icons)
- [ ] Data table (in-page, product-specific, 3+ columns, 4-5 rows)
- [ ] Contact form (name, email, message, submit button)
- [ ] Footer with links and copyright

**Mobile Design (375-425px):**
- [ ] Single-column layout
- [ ] Hamburger menu design
- [ ] Video responsive (scales properly on mobile)
- [ ] Table mobile strategy implemented
- [ ] Touch-friendly button sizes (44x44px minimum)
- [ ] All content from desktop included (adapted)

**Interaction States:**
- [ ] Form states designed (default, focus, error, success)
- [ ] Hover states for buttons/links
- [ ] At least ONE transform annotated
- [ ] At least ONE animation annotated

**Overall:**
- [ ] Design is cohesive and professional
- [ ] Product focus is clear throughout
- [ ] All required elements present
- [ ] Visual hierarchy guides user to CTA

---

## Checkpoint Questions

Before finalizing your design, ask yourself:

**Content & Purpose:**
- Does my landing page clearly communicate what the product is?
- Is the value proposition obvious within 3 seconds?
- Does all content (including the table) relate to my product?

**Visual Design:**
- Does the visual hierarchy guide users toward the primary CTA?
- Are my color choices accessible (WCAG AA)?
- Is my typography hierarchy clear and readable?

**User Experience:**
- Are interactive elements clearly distinguishable from static content?
- Have I designed all necessary states (hover, focus, error, success)?
- Does my table content add real value (not just filler)?
- Does my mobile design work on small screens?

**Completeness:**
- Did I include all required elements?
- Is my style guide complete and documented?
- Are my animations/transforms annotated clearly?

---

## Assessment Criteria

Your design will be graded on:

**Visual Consistency & Design System (25%)**
- Cohesive style guide (typography, colors, spacing)
- Consistent application throughout design
- Professional appearance

**Layout & Hierarchy (25%)**
- Clear visual hierarchy
- Effective use of space and layout
- Desktop and mobile designs complete
- Responsive strategy well-planned

**Required Components (25%)**
- All elements present and complete
- Table is product-specific and well-designed
- Form states properly designed
- Navigation, hero, features, footer included

**Interaction Design & Polish (15%)**
- Thoughtful hover/interaction states
- Animation/transform annotations clear
- Form validation states well-designed
- User-centered design decisions

**Documentation & Presentation (10%)**
- Style guide clearly documented
- Annotations helpful and clear
- Figma file organized and labeled
- Design is ready to hand off to a developer

---

## Getting Help

**During class:** Ask questions about design decisions, layout strategies, or Figma techniques.

**Critique session (Nov 25):** You'll receive feedback in assigned groups. Be prepared to:
- Share your design (screen share)
- Explain your design decisions
- Give constructive feedback to peers
- Take notes on suggestions for improvement

**Office hours:** Available for one-on-one design review and feedback.

---

## What's Next?

After Nov 25 critique:
1. Incorporate feedback into your Figma design
2. Begin HTML/CSS implementation (see [CODE_REQUIREMENTS.md](CODE_REQUIREMENTS.md))
3. Reference your Figma design throughout coding process
4. Submit final code on Dec 3

**Remember:** Your Figma design is your roadmap. The closer your code matches your design, the more cohesive your final project will be.
