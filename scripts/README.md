# Course publishing checks

`npm run build` builds the production site. Run it immediately before `npm run check:course`; the validator reads the generated `dist/` directory and does not build it for you. The validator checks the Fall metadata contract, selected current-page local links and fragments, archive hashes, and the absence of raw export/record formats. It is not a complete browser or multi-course regression test. To byte-compare unchanged Web Design + Code 2 and Fall 2025 output too, pass a build of the Spring baseline: `python3 scripts/check-course.py /path/to/baseline/dist`.

`npm run package:course` generates the private review package in `../instructor-package/generated` and the ZIP beside it. The package includes standalone Canvas HTML and a locally validated Common Cartridge; test import in an empty Canvas sandbox before publishing. The script never calls Canvas.

For browser checks, install/use Playwright and a compatible Chromium, serve `dist` on a local port, then run `node scripts/browser-check.mjs`. Optional environment variables: `PLAYWRIGHT_MODULE` (absolute package path), `CHROMIUM_EXECUTABLE`, `COURSE_PREVIEW_URL` (default http://127.0.0.1:4321), and `COURSE_QA_OUTPUT` (default ../review/browser). Tests cover mobile overflow, keyboard controls, actual starter edits, share state, browser history, denied clipboard, complete print content, reduced motion, and no-JavaScript fallback. QA artifacts stay outside public content.

The Spring archive was captured from commit `fe2965f803de32e23838baa8f9275eb2a773b6f4`. `archive-spring.py` documents the capture and refuses to replace an existing archive. Keep its instructional files and frozen dependencies together. It is not a routine build step.
