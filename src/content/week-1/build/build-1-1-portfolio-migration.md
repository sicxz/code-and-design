# Build: Portfolio Migration

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 30-45 minutes

---

## TL;DR
Move your portfolio files into the standardized `week-1/portfolio/` folder structure and fix any broken paths.

---

## Submit
No separate submission. Verified in class. Push to GitHub and confirm GitHub Pages works.

---

## Overview

Migrate your portfolio site into this week's folder structure. This establishes the project scaffold we'll use throughout the quarter and ensures your portfolio follows our standardized organization.

---

## What You're Doing

1. Copy your current portfolio files into `week-1/portfolio/`
2. Reorganize files to match our project structure
3. Update any broken paths: images, links, CSS, JS
4. Verify everything works locally

---

## Target Structure

```bash
week-1/
└── portfolio/
    ├── index.html
    ├── css/
    │   ├── normalize.css
    │   ├── variables.css
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── assets/
    │   ├── images/
    │   ├── fonts/
    │   └── icons/
    └── README.md
```

---

## Step-by-Step

### Step 1: Create the Folder Structure

In your repository's `week-1/` folder, create:

```bash
week-1/
└── portfolio/
    ├── css/
    ├── js/
    └── assets/
        ├── images/
        ├── fonts/
        └── icons/
```

### Step 2: Move Your Files

Copy your portfolio files into the appropriate folders:

| File Type | Destination |
|-----------|-------------|
| `index.html`, other `.html` files | `portfolio/` root |
| CSS files | `portfolio/css/` |
| JavaScript files | `portfolio/js/` |
| Images | `portfolio/assets/images/` |
| Fonts | `portfolio/assets/fonts/` |
| Icons/SVGs | `portfolio/assets/icons/` |

### Step 3: Create Missing Files

If you do not have these files yet, create them:

**normalize.css**
Download from [necolas.github.io/normalize.css](https://necolas.github.io/normalize.css/) or use a CDN link.

**variables.css** can be empty for now

```css
/* Design Tokens - Week 1 */
:root {
  /* Colors - to be defined */

  /* Typography - to be defined */

  /* Spacing - to be defined */
}
```

**README.md**

```md
# Portfolio - Week 1

## Project Structure
- `css/` - Stylesheets
- `js/` - JavaScript
- `assets/` - Images, fonts, icons

## Changes This Week
- Migrated to standardized structure
- Added variables.css for design tokens
```

### Step 4: Update Paths

After moving files, update paths in your HTML:

**Before flat structure:**

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
<img src="hero-image.jpg" alt="...">
```

**After organized structure:**

```html
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js" defer></script>
<img src="assets/images/hero-image.jpg" alt="...">
```

### Step 5: Test Locally

1. Open `index.html` in your browser
2. Check that:
   - [ ] Styles load correctly
   - [ ] Images display
   - [ ] JavaScript works if any
   - [ ] No console errors
3. Fix any broken paths

---

## Common Issues

### Images are not showing
- Check the path: `assets/images/filename.jpg`
- Verify the filename matches exactly and is case-sensitive

### CSS is not loading
- Check link order: normalize, variables, style
- Verify paths start from the HTML file's location

### JavaScript errors
- Add `defer` to your script tag
- Check the console for specific errors

---

## Complete Criteria

Your migration is complete when:

- [ ] Folder structure matches the target
- [ ] All files are in correct locations
- [ ] `variables.css` exists even if empty
- [ ] `README.md` exists with basic info
- [ ] Site loads without errors locally
- [ ] Committed to GitHub with a descriptive message

---

## Connection to This Week

This structure sets up your portfolio for the design system work we're doing this week:

- `variables.css` will hold your design tokens
- The organized structure matches professional projects
- Next week, you will add JavaScript to `js/script.js` for the theme toggle
