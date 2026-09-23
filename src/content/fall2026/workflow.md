# One workspace: build, publish, submit

Keep one place for the work you make. Early CodePens become the first projects in the same portfolio repository you use through finals.

## Weeks 0–2: CodePen and a local backup

1. Open a new Pen in [CodePen Classic](https://codepen.io/pen). Use the HTML panel for the contents of the page body and the CSS panel for the stylesheet. Leave the JavaScript panel empty. Do not paste a complete document's `head` or `body` tags into the HTML panel.
2. Save the Pen with a meaningful title such as `DESN 368 — Project 1`. Copy its saved URL.
3. For a starter downloaded from this site, open `index.html` in a text editor. Copy only the markup between `<body>` and `</body>` into the HTML panel; copy the starter’s CSS file into the CSS panel (`style.css` for the opening starter; `styles.css` for Project 1). The local `link` element is unnecessary in CodePen.
4. Keep a local copy of your work. Online editors can be unavailable. A folder containing `index.html` and its linked CSS file opens in your browser without a build command. Keep the starter’s file names: the `href` in the HTML must match the CSS file name.

These panel instructions use the Classic editor. If you see a file-based editor with a complete `index.html`, use the Classic link above or ask for help before copying. [CodePen documents the editor differences](https://blog.codepen.io/docs/what-changed/).

If an assignment link or embed fails, use its downloaded starter and follow the same source steps. Submit the files in Canvas with a short access note if you cannot get a working public link.

## Opening half-week: establish the course workspace

> **Development hold:** do not publish or assign this repository handoff yet. The accepted direction is clone—not fork—but the instructor source, student-owned destination, editing environment, public/private arrangement, save/push path, and update strategy still require an end-to-end novice rehearsal.

The final lesson will teach the required repository vocabulary and model each operation before independent work. It must verify that the student can clone the instructor source, establish their own writable destination, make and inspect one change, save and push it, close the workspace, and reopen the same work. Creating an account or receiving GitHub Education access does not grant permission to use AI during the independent foundation period.

## Week 3: migrate one page manually

After the opening handoff has been approved and completed, use that same student-owned course repository. Do the first CodePen-to-file move yourself so folders, paths, commits, and publication remain visible. Use the [portfolio starter ZIP](/fall-2026/starters/portfolio.zip) or individual [HTML](/fall-2026/starters/portfolio/index.html) and [CSS](/fall-2026/starters/portfolio/styles.css) files.

1. Copy only the portfolio starter's `index.html` and `styles.css` to the repository root. Preserve the course README and any assigned setup files.
2. Add the HTML document wrapper from the Project 1 download, then manually move your own CodePen HTML and CSS into `project-1/index.html` and `project-1/styles.css`.
3. In the Project 1 document's `head`, verify `<link rel="stylesheet" href="styles.css">`. Put any Project 1 image in `project-1/images/` and use a matching path, such as `images/soup.jpg`. File names are case-sensitive on the published site.
4. From the root portfolio, link to `project-1/`. From a project folder, link home with `../`. Avoid leading slashes: `/project-1/` points at the account's domain root rather than the repository's project path.
5. Save, inspect the changed files, and commit with a message describing what changed. Use the verified save/push and publication steps from the approved opening lesson. Never run a reset command to solve a normal synchronization problem; ask for help with the displayed error.
6. Open the actual published URL in a separate tab. Test the link from the portfolio to Project 1 and the link back home, change one heading, save and publish again, and verify that the online heading changes. A successful local preview does not prove that publishing succeeded.

```text
student-course-repository/
  index.html          portfolio home, kept all quarter
  styles.css          portfolio styles
  README.md           concise project and source notes
  project-1/
    index.html
    styles.css
    images/
  project-2/          add in week 3
  project-3/          add in week 5
  project-4/          add in week 8
  practice/           small experiments, linked only when useful
```

Recheck the [official GitHub Pages instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) immediately before the final course procedure is approved; this draft does not assume a specific current interface.

## Everyday editing

Open the same approved workspace. Read the brief, save a working state, and make one small change at a time. Refresh your preview, inspect the result, then commit meaningful progress. Check the live site after pushing. Do not create a separate repository or switch deployment services for each project.

When viewing locally, opening `index.html` in a browser is enough for these HTML/CSS starters. If the approved workspace supplies a preview server, use the reviewed course steps for it. No installation or paid service is required for the core activities.

## When something breaks

- **404:** check spelling, capitalization, folder location, and the link's starting directory. `index.html` is the default page in a folder.
- **HTML loads, CSS does not:** inspect the stylesheet `href`; open that URL directly and verify that it contains your CSS.
- **Old content:** verify the latest commit is on GitHub and the Pages deployment succeeded, then refresh the live page.
- **Image missing:** check the actual file name and extension, the relative path, and whether the file was committed. A path beginning with your computer's user folder cannot work for another person.
- **Git error:** stop, copy the error text without credentials, and bring it with the file you were editing. Keep a copy of unsaved work.

## Evidence and attribution

Each weekly Canvas submission has one artifact link or file, a two-to-four-sentence explanation of the specific source change, and one question or next step. No separate essay or duplicated screenshot set is required unless the brief needs a before/after comparison.

Keep a compact source section in the project or README: asset title/creator/source/license when known; tutorial or quotation link; and any permitted AI tool and the exact task it helped with. If you wrote the work yourself and used no external assets or AI, say so once. Never invent an AI error or fabricate a prompt history.
