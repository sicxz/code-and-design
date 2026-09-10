# One workspace: build, publish, submit

Keep one place for the work you make. Early CodePens become the first projects in the same portfolio repository you use through finals.

## Weeks 0–2: CodePen and a local backup

1. Open a new Pen. Use the HTML panel for the contents of the page body and the CSS panel for the stylesheet. Leave the JavaScript panel empty. Do not paste a complete document's `head` or `body` tags into the HTML panel.
2. Save the Pen with a meaningful title such as `DESN 368 — Recipe`. Copy its saved URL.
3. For a starter downloaded from this site, open `index.html` in a text editor. Copy only the markup between `<body>` and `</body>` into the HTML panel; copy `styles.css` into the CSS panel. The local `link` element is unnecessary in CodePen.
4. Keep a local copy of your work. Online editors can be unavailable. A folder containing `index.html` and `styles.css` opens in your browser without a build command.

If an assignment link or embed fails, use its downloaded starter and follow the same source steps. Submit the files in Canvas with a short access note if you cannot get a working public link.

## Week 3: migrate one page manually

This is a learning exercise, so do the first move yourself. Use the [portfolio starter ZIP](/fall-2026/starters/portfolio.zip) or individual [HTML](/fall-2026/starters/portfolio/index.html) and [CSS](/fall-2026/starters/portfolio/styles.css) files.

1. Sign into GitHub. Create one repository named `desn368-portfolio`; initialize it with a README. Use a public repository for the standard free GitHub Pages path. Use a display name you are comfortable publishing and keep personal information out of its files. Contact the instructor for an alternative arrangement if public posting is a concern.
2. Open the repository's **Code → Codespaces** control and create a workspace. If Codespaces is unavailable, edit local files and upload them through the repository interface; do not purchase extra usage to complete the exercise.
3. Create the files and folders shown below. Put the portfolio starter at the root. Add the HTML document wrapper from the recipe download, then manually move your own CodePen HTML and CSS into `recipe/index.html` and `recipe/styles.css`.
4. In the recipe document's `head`, verify `<link rel="stylesheet" href="styles.css">`. Put any recipe image in `recipe/images/` and use a matching path, such as `images/soup.jpg`. File names are case-sensitive on the published site.
5. From the root portfolio, link to `recipe/`. From a project folder, link home with `../`. Avoid leading slashes: `/recipe/` points at the account's domain root rather than this repository's path.

```text
desn368-portfolio/
  index.html          portfolio home, kept all quarter
  styles.css          portfolio styles
  README.md           concise project and source notes
  recipe/
    index.html
    styles.css
    images/
  tribute/            add in week 3
  field-guide/        add in week 5
  landing/            add in week 8
  practice/           small experiments, linked only when useful
```

6. Save, inspect your changed files in Source Control, and commit with a message describing what changed. Sync/push the commit to GitHub. Never run a reset command to solve a normal synchronization problem; ask for help with the displayed error.
7. In the repository's **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save. Read the deployment status. The typical project URL is `https://YOUR-USERNAME.github.io/desn368-portfolio/`; copy the actual URL GitHub gives you rather than guessing it.
8. Open the URL in a separate browser tab. Click the recipe link and the return-home link. Change one heading locally, commit and push again, and check that the published heading changes. A successful local preview does not prove that publishing succeeded.

The [official GitHub Pages instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) describe this branch-based publishing option. If the interface differs, preserve the same choice of one branch and its root folder.

## Everyday editing

Open the same Codespace or local folder. Read the brief, save a working state, and make one small change at a time. Refresh your preview, inspect the result, then commit meaningful progress. Check the live site after pushing. Do not create a separate repository or switch deployment services for each project.

When viewing locally, double-clicking `index.html` is enough for our HTML/CSS starters. In Codespaces, a simple preview server can be started in the repository terminal with `python3 -m http.server 8000`; open its forwarded port from the Ports panel. Stop the server with Control+C. Use a local browser if that runtime is unavailable; no installation is necessary for the core activities.

## When something breaks

- **404:** check spelling, capitalization, folder location, and the link's starting directory. `index.html` is the default page in a folder.
- **HTML loads, CSS does not:** inspect the stylesheet `href`; open that URL directly and verify that it contains your CSS.
- **Old content:** verify the latest commit is on GitHub and the Pages deployment succeeded, then refresh the live page.
- **Image missing:** check the actual file name and extension, the relative path, and whether the file was committed. A path beginning with your computer's user folder cannot work for another person.
- **Git error:** stop, copy the error text without credentials, and bring it with the file you were editing. Keep a copy of unsaved work.

## Evidence and attribution

Each weekly Canvas submission has one artifact link or file, a two-to-four-sentence explanation of the specific source change, and one question or next step. No separate essay or duplicated screenshot set is required unless the brief needs a before/after comparison.

Keep a compact source section in the project or README: asset title/creator/source/license when known; tutorial or quotation link; and any permitted AI tool and the exact task it helped with. If you wrote the work yourself and used no external assets or AI, say so once. Never invent an AI error or fabricate a prompt history.
