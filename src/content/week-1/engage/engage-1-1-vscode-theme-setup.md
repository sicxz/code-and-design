# Engage: VS Code Theme Setup

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 15–20 minutes

---

## TL;DR
Install a VS Code theme, enable Settings Sync, and submit a screenshot of your themed editor.

---

## Submit
Upload a screenshot showing:
- Your VS Code window with the custom theme active
- Some code visible in the editor (can be any file)

---

## Overview

Personalize your development environment by installing a VS Code theme and enabling Settings Sync. This ensures your preferences persist across GitHub Codespaces and local installations.

**Why This Matters:**
- A comfortable workspace improves focus and reduces fatigue
- Settings Sync means your setup follows you everywhere
- Sharing themes builds community and personal expression

---

## Step 1: Install Your Desired Theme

1. Open the Extensions view in VS Code (`Cmd+Shift+X` on Mac, `Ctrl+Shift+X` on Windows)
2. Search for your desired theme (e.g., "Night Owl", "GitHub Dark", "Fairyfloss", "One Dark Pro")
3. Click **Install** on the theme's page

**Popular themes to explore:**
- Night Owl (by Sarah Drasner)
- GitHub Dark Default
- Dracula Official
- One Dark Pro
- Fairyfloss
- Catppuccin

---

## Step 2: Set the Theme as Your Color Theme

1. Open the Command Palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Windows)
2. Type `color theme` and select **Preferences: Color Theme**
3. Use arrow keys to preview themes
4. Press **Enter** to select your preferred theme

This selection is saved in your user settings.

---

## Step 3: Enable Settings Sync

Settings Sync persists your settings across different codespaces and machines.

1. Click the **Accounts** icon at the bottom of the Activity Bar (looks like a person)
2. Select **Turn on Settings Sync...**
3. Sign in with your GitHub account if prompted
4. In the dialog, ensure these are selected:
   - Settings
   - Extensions
   - UI State
5. Click **OK** or **Sign in to Sync Settings**

If prompted for authorization, click **Authorize** in the browser window.

---

## Step 4: Configure GitHub Codespaces Preferences

Ensure new codespaces automatically use your synced settings:

1. Go to [github.com/settings/codespaces](https://github.com/settings/codespaces)
2. Under **Settings Sync**, ensure the **Enable** checkbox is selected
3. Under **Trusted repositories**, choose:
   - **All repositories** (recommended for this class)
   - Or select specific repositories

---

## Complete Criteria

Your setup is complete when:

- [ ] A custom theme is installed and active
- [ ] Settings Sync is enabled and connected to GitHub
- [ ] GitHub Codespaces preferences are configured

---

## Share Your Theme

Take a moment to share your theme choice with a neighbor:
- What drew you to this theme?
- Does it have good contrast for long coding sessions?
- Light mode or dark mode person?

---

## Troubleshooting

### "Settings Sync won't enable"
- Make sure you're signed into GitHub in VS Code
- Check that your GitHub account has the correct permissions

### "Theme doesn't look right in Codespaces"
- Reload the Codespace window (`Cmd+Shift+P` → "Developer: Reload Window")
- Check that Settings Sync finished syncing (look for the sync icon)

### "I want to change my theme later"
- Just repeat Step 2 anytime — your choice is automatically synced

---

## Connection to This Week

Your VS Code setup is part of your **development environment** — one piece of the larger project structure we're building this week. A well-organized workspace (both visual and file structure) supports better design thinking.
