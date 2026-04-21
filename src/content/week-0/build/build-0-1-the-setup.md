# Build: The Setup

**Due:** Before Day 2
**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 30–45 minutes

---

## Overview

Before you write any JavaScript, you need a place for your code to live. This lab sets up your workspace for the entire quarter — a GitHub repository that starts as a learning log and grows into your portfolio.

By the end of this lab, you'll have a live website where your work will be published throughout the quarter.

---

## What You're Learning

- Creating a repository from a template (not forking)
- Enabling GitHub Pages for live publishing
- Maintaining consistent professional presence across platforms
- Verifying that your development environment is ready

---

## Requirements

Set up your DESN 378 workspace:

- [ ] Create repository from template (not fork)
- [ ] Repository is public
- [ ] `PROFILE.md` filled out completely
- [ ] All profiles match (GitHub, Figma, CodePen) — same name, same photo
- [ ] GitHub Pages enabled and working
- [ ] Live portfolio link added to README
- [ ] VS Code extensions installed

---

## Step-by-Step Guide

### Step 1: Create Your Repository (5 min)

1. Go to the template repository:
   → **[github.com/sicxz/DESN-378-code-design-2](https://github.com/sicxz/DESN-378-code-design-2)**

2. Click **"Use this template"** → **"Create a new repository"**
   - ⚠️ Do NOT fork — use the template button

3. Configure your new repo:
   - **Repository name:** `DESN378-code-design-2` (or similar)
   - **Visibility:** Public (required for GitHub Pages)
   - Click **Create repository**

4. Clone to your computer using GitHub Desktop:
   - In GitHub Desktop: File → Clone Repository
   - Find your new repo and clone it

**Verify:** You should see the starter files in your local folder:
```
├── index.html
├── css/styles.css
├── scripts/main.js
├── assets/
├── labs/
├── PROFILE.md
└── README.md
```

---

### Step 2: Fill Out Your Profile (10 min)

1. Open `PROFILE.md` in VS Code

2. Fill out all sections:
   - Your name
   - Your @ewu.edu email
   - Links to GitHub, Figma, CodePen profiles
   - Short bio

3. Save the file

**Why this matters:** Recruiters and collaborators look at your profiles. Consistency builds trust.

---

### Step 3: Synchronize Your Profiles (10 min)

Your online presence should be consistent across platforms:

| Platform | Update | Location |
|----------|--------|----------|
| **GitHub** | Name, photo, bio | Settings → Profile |
| **Figma** | Same name, same photo | Settings → Account |
| **CodePen** | Same name, same photo | Settings → Profile |

**Same name. Same photo. Professional presence.**

Use a photo where your face is visible — the same one across all platforms.

---

### Step 4: Enable GitHub Pages (5 min)

1. Go to your repository on GitHub.com

2. Click **Settings** → **Pages** (in the left sidebar)

3. Under "Source":
   - Select **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
   - Click **Save**

4. Wait 2-3 minutes for the initial deployment

5. Your site will be live at:
   ```
   https://yourusername.github.io/DESN378-code-design-2
   ```

**Verify:** Open your live URL. You should see the starter page.

---

### Step 5: Update Your README (5 min)

1. Open `README.md` in VS Code

2. At the top, add your live links:
   ```markdown
   # DESN 378: Code + Design 2

   🔗 **[Learning Log](https://yourusername.github.io/DESN378-code-design-2)**
   🔗 **[DESN368 Portfolio](https://yourusername.github.io/your-368-repo)**
   ```

3. Replace the template content with YOUR version (see Section 4 in the README for a starter template)

4. Save, commit, and push

---

### Step 6: Verify Your Tools (5 min)

Open VS Code and confirm these extensions are installed:

| Extension | Purpose | How to Check |
|-----------|---------|--------------|
| **GitHub Copilot** | AI code suggestions | Extensions panel → Search "Copilot" |
| **Live Server** | Local preview server | Extensions panel → Search "Live Server" |
| **Prettier** | Code formatting | Extensions panel → Search "Prettier" |

**GitHub Copilot requires GitHub Student Developer Pack.** If you don't have it:
1. Go to [education.github.com/benefits](https://education.github.com/benefits)
2. Verify with your @ewu.edu email
3. Benefits activate within 24-48 hours

---

## Complete Criteria

Your lab is complete when:

- [ ] Repository exists at `github.com/yourusername/DESN378-code-design-2`
- [ ] Repository is **public** (not private)
- [ ] `PROFILE.md` is filled out with all your info
- [ ] All three profiles match (GitHub, Figma, CodePen)
- [ ] GitHub Pages is enabled and your site is live
- [ ] README includes your live portfolio link
- [ ] VS Code has Copilot, Live Server, and Prettier installed

---

## Stretch Goals

Done early? Try these:

1. **Customize your starter page** — Edit `index.html` to personalize the content
2. **Add a custom favicon** — Replace the placeholder in `assets/`
3. **Explore the DevTools Field Guide** — Preview the behavioral layer concepts we'll cover in class: `resources/dev-tools-fieldguide/index.html`

---

## Troubleshooting

### "Use this template" button missing

Make sure you're signed into GitHub. The button only appears for logged-in users.

### GitHub Pages shows 404

1. Check Settings → Pages — is it pointing to the right branch?
2. Wait a few minutes — first deployment takes time
3. Make sure `index.html` is in the root folder (not inside another folder)
4. Check the Actions tab for build errors

### Profiles won't update

- **GitHub:** Changes may take a few minutes to propagate
- **Figma:** Make sure you're editing your personal account, not a team
- **CodePen:** Check Settings → Profile, not just the display name

### VS Code extensions not working

1. Make sure you're signed into GitHub in VS Code
2. Try reloading VS Code (Cmd/Ctrl + Shift + P → "Reload Window")
3. For Copilot: Check that your Student Pack is active

### "I forked instead of using template"

Delete the forked repo and start over with "Use this template." Forks maintain a connection to the original repo that we don't want.

---

## What's Next

With your workspace ready, you're prepared for the rest of Week 0:

- **Lab 0-2:** Console Explorer — Your first hands-on JavaScript experiments
- **Lab 0-3:** Portfolio Audit — Peer review of your DESN 368 work

Everything you build this quarter will live in this repository. By Week 10, it becomes your portfolio.

---

## Submission

**Submit to Canvas:**
1. Link to your GitHub repository
2. Link to your live GitHub Pages site
3. Screenshot showing all three profiles match (GitHub, Figma, CodePen side by side)

---

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Student Developer Pack](https://education.github.com/pack)
- [Figma Education](https://figma.com/education)
- [VS Code Extensions Marketplace](https://marketplace.visualstudio.com/vscode)
