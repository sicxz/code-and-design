# Learn: Figma Variables

**Points:** 10 (Complete/Incomplete)
**Time Estimate:** 45–60 minutes
**Platform:** Figma

---

## TL;DR

Watch the Moon Learning videos on Figma Variables, then create your own Figma file with organized variable collections for colors, typography, navigation, and spacing.

---

## Submit

**Figma file link** with your variable collections set up.

Your file should contain:
- Color primitives
- Brand colors
- Brand typography
- Navigation variables
- Spacing variables

---

## Watch

Complete these Moon Learning tutorials on Figma Variables:

<!-- Insert video embeds or links here -->

**Total watch/work time:** ~60 minutes

---

## Your Task

While watching, create your own Figma file and set up the variables yourself.

1. **Follow along** — Use the tutorial content and recreate what you seee

Either approach works. The goal is that YOU set up the variables, not just copy from a demo file.

---

## Requirements

Your Figma file must include these variable these collections, collections should have groups:

- [ ] **color_primitives** — Raw color values (e.g., `blue-500`, `gray-100`)
- [ ] **brand colors** — Your brand colors referenced from primitives

- [ ] **brand typography or typography** — (font-family, text-size, text-weight)
- [ ] **spacing**

- [ ] **navigation**

---

## Important Note

When the videos mention **"layers"** for applying modes, look for the **Appearance** panel instead — it's the flyout widget in the right sidebar. This is especially important when applying modes to frames.

![CleanShot 2026-01-21 at 13.50.54@2x](/Users/tmasingale/screenshots-clnsht/CleanShot 2026-01-21 at 13.50.54@2x.png)>

![CleanShot 2026-01-21 at 13.51.29@2x](/Users/tmasingale/screenshots-clnsht/CleanShot 2026-01-21 at 13.51.29@2x.png)

---

## Complete Criteria

You're done when:

- [ ] Your Figma file has organized variable collections
- [ ] Colors include primitives AND semantic names
- [ ] You have at least one mode (Light/Dark) set up
- [ ] You can switch a frame between modes
- [ ] Variables are grouped logically within collections

---

## Troubleshooting

**Can't find the Variables panel?**
- View → Local Variables
- Or look for the hex icon in the right sidebar

**Modes not switching?**
- Select the FRAME, not individual elements
- Check the Appearance panel (flyout widget) for mode options

**Variables not showing when applying?**
- Make sure you're clicking the variable icon, not typing hex values
- Check that the variable type matches (Color for fills, Number for spacing)

---

## Resources

**If you get lost or want to go deeper:**
- [Figma Variables Reference Guide](learn-2-2-figma-variables.md) — Detailed concepts and additional tutorials

**Official Docs:**
- [Figma: Guide to Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)

**Practice:**

- [Variables Playground](https://www.figma.com/community/file/1253443272911187215) — Figma's official sandbox

FreeCodeCamp: Variables in Figma Handbook](https://www.freecodecamp.org/news/variables-in-figma-handbook)** — Faith Olohijere





---

## Connection to Code

What you build in Figma becomes your CSS blueprint:

| Figma | CSS |
|-------|-----|
| Variable collection | `:root { }` block |
| Color primitive | `--color-blue-500: #0066CC;` |
| Semantic variable | `--color-primary: var(--color-blue-500);` |
| Light/Dark modes | `[data-theme="dark"] { }` overrides |

The variable names you choose now become your CSS variable names in Week 2's code work.
