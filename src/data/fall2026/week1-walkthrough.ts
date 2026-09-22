/** Proposed local instructor walkthrough. Teaching decisions below remain reviewable. */
export type WalkthroughStep = {
  time: string;
  title: string;
  tool: string;
  actions: string[];
  check: string;
  example?: string;
};

export type WalkthroughDay = {
  id: string;
  date: string;
  label: string;
  title: string;
  intro: string;
  tools: string[];
  carryIn: string;
  leaveWith: string;
  steps: WalkthroughStep[];
};

export const walkthroughDays: WalkthroughDay[] = [
  {
    id: 'monday',
    date: '2026-09-28',
    label: 'Monday',
    title: 'Give the recipe a structure',
    intro: 'Proposed 1–3:30 p.m. studio. Begin with each student’s saved work, introduce the recipe in CodePen Classic, then teach browser Inspect through one small example. Student AI stays off. The final 15 minutes are reserved for saving and reopening work; the independent build and partner check are slightly shorter than the original outline.',
    tools: ['Course website', 'CodePen Classic: HTML and CSS panels', 'Browser Inspect / DevTools', 'Canvas'],
    carryIn: 'The opening invitation’s saved Pen or local files, a working way to reopen its source, and a simple recipe the student can explain. An unsaved or inaccessible opening artifact is a setup problem to resolve before starting another one.',
    leaveWith: 'One personally saved recipe with a title, introduction, ingredients, and ordered method; one inspected element the student can locate in source; and a clear place to resume on Wednesday.',
    steps: [
      {
        time: '1:00–1:15',
        title: 'Reopen before moving on',
        tool: 'CodePen Classic + course website',
        actions: [
          'Each student reopens their own opening invitation and finds the heading in its source. Check that this is their saved version, not the shared demonstration.',
          'Ask for a small word change, save it, and reopen the saved link. Help students with access problems before introducing a second artifact.',
          'Open the week’s recipe brief. Name the two deadlines: the structure practice is due October 4; the finished recipe is due October 7. This week develops the same recipe across both days.'
        ],
        check: 'Every student has an editable, recoverable artifact and can distinguish the source view from the rendered page.'
      },
      {
        time: '1:15–1:40',
        title: 'Teach the editor and the first Inspect operation',
        tool: 'Verified CodePen Classic recipe starter + browser Inspect',
        actions: [
          'Use a starter entry explicitly labeled Classic. Confirm that students see the HTML, CSS, and JavaScript panels. These body-only instructions apply to Classic; stop and help anyone who instead sees the newer file-based editor.',
          'Show the HTML panel beside the actual rendered result. Locate the title, then right-click that heading in the result and choose Inspect. Do not inspect the CodePen editor’s interface.',
          'In the Elements panel, show the highlighted h1 and its containing element. Connect the preview, browser tree, and authored HTML. Show how to close DevTools and return to the HTML panel.',
          'Make any lasting content edit in the authored HTML panel, save, and rerun. Explain that an edit made only inside Inspect is temporary.'
        ],
        check: 'A student can point to the same heading in the rendered result, the inspected tree, and the HTML source. Other DevTools panels can wait.',
        example: '<h1>Apple and oat bowl</h1>\n<p>A quick breakfast with crisp apple and warm oats.</p>'
      },
      {
        time: '1:40–2:10',
        title: 'Build and save one meaningful section together',
        tool: 'CodePen Classic HTML panel',
        actions: [
          'Create a personal recipe Pen from the verified starter and title it “DESN 368 — Recipe”. Keep the opening invitation saved separately.',
          'Write a real title and a short introduction. Use one h1 for the page and h2 headings for Ingredients and Method.',
          'Build a short unordered ingredient list and an ordered method together. Explain why sequence matters for the method and why each item belongs inside its list.',
          'Save, reload, and verify this small working version before the break. Keep the starter CSS unchanged while learning the structure.'
        ],
        check: 'Each student’s saved recipe contains a working heading and correctly nested list that they can find again.',
        example: '<section>\n  <h2>Method</h2>\n  <ol>\n    <li>Wash and slice the apple.</li>\n    <li>Stir the apple into the cooked oats.</li>\n  </ol>\n</section>'
      },
      {
        time: '2:10–2:20',
        title: 'Break',
        tool: 'Step away from the screen',
        actions: ['Leave the saved recipe ready to resume. Take the full ten-minute break.'],
        check: 'The current artifact was saved before stepping away.'
      },
      {
        time: '2:20–3:00',
        title: 'Complete the recipe’s readable structure',
        tool: 'CodePen Classic HTML panel + rendered result',
        actions: [
          'Replace the starter’s instructional text with the student’s actual recipe. Complete its introduction, ingredients, and steps without padding the content to reach a quota.',
          'Use header, main, sections, and footer to organize the page. Check closing tags and list nesting as each section is added.',
          'Read the rendered recipe in order. Repair missing quantities, unclear instructions, or heading choices before spending time on appearance.',
          'Save a stable version. Then use a temporary copy or a clearly reversible edit for the structure experiment: predict what happens when a step is moved outside its list, inspect the result, and restore the correct structure.'
        ],
        check: 'The recipe reads coherently, the saved version has valid intended nesting, and the student has one actual observation to explain.'
      },
      {
        time: '3:00–3:15',
        title: 'Explain one structural decision to a partner',
        tool: 'Recipe source + browser Inspect',
        actions: [
          'One student explains why the method uses ol and ingredients use ul, pointing to the actual tags. The partner finds that list in the rendered page and browser tree.',
          'Swap roles so both students operate their own source and Inspect. Explain what the temporary experiment changed and how the correct structure was restored.',
          'Draft two to four sentences about that decision and one question. These become the weekly assignment evidence, not a separate essay.'
        ],
        check: 'Both students can trace one visible list to its source and describe the observed experiment in their own words.'
      },
      {
        time: '3:15–3:30',
        title: 'Save a recoverable stopping point',
        tool: 'CodePen Classic + Canvas assignment',
        actions: [
          'Save the correct recipe, copy its actual saved URL, close the editing tab, and reopen it. If using the agreed local fallback, reopen the saved index.html with its companion stylesheet.',
          'Open “Recipe structure check” in Canvas and show where the artifact, brief explanation, and question belong. Students can finish this record after Wednesday’s work; it is due October 4 at 11:59 p.m. Pacific.',
          'Record one thing to resume Wednesday. Keep the recipe source available; Wednesday adds links and an image to this same artifact.'
        ],
        check: 'Each student leaves with a working saved artifact and knows which Canvas assignment receives the weekly evidence. A screenshot alone does not replace the editable source or Pen.'
      }
    ]
  },
  {
    id: 'wednesday',
    date: '2026-09-30',
    label: 'Wednesday',
    title: 'Connect the recipe to its sources',
    intro: 'Proposed 1–3:30 p.m. studio. Resume Monday’s recipe, teach a descriptive link, then add one image with a usable source and credit. The image route needs an instructor decision before this is a runnable student lesson. Student AI stays off; HTML structure remains the focus.',
    tools: ['The same saved CodePen Classic recipe', 'Browser preview and Inspect', 'An instructor-verified image URL or an agreed local image folder', 'Canvas'],
    carryIn: 'Monday’s saved recipe and its source notes. The instructor brings one small permitted demonstration image with a verified source, credit, and a working distribution method.',
    leaveWith: 'The same recipe with a working source link and one relevant credited image, meaningful alternative text, and a prepared weekly structure-check submission. Styling continues next week; the project is not due today.',
    steps: [
      {
        time: '1:00–1:15',
        title: 'Resume the saved recipe',
        tool: 'CodePen Classic + rendered result',
        actions: [
          'Reopen Monday’s saved recipe rather than starting a second one. Confirm that the title, ingredient list, and method are present.',
          'Ask a partner to follow the method and identify one unclear instruction. Make a small repair and save.',
          'Introduce today’s two connections: an anchor sends the reader to a source; an image needs both a usable file address and a meaningful description.'
        ],
        check: 'The student can return to their own source and build on it without losing Monday’s work.'
      },
      {
        time: '1:15–1:40',
        title: 'Demonstrate links, image addresses, and credit',
        tool: 'CodePen Classic HTML panel + browser preview',
        actions: [
          'Add a real, verified recipe or ingredient-reference link. Explain the difference between the destination inside href and the descriptive words a reader sees.',
          'Demonstrate one permitted image using the chosen classroom distribution method. For the proposed Classic route, use a verified HTTPS image address. A file on the student’s computer is not automatically available to a hosted Pen.',
          'Explain that src locates the image, alt communicates its purpose, and a caption/source note gives credit. Use the actual image and source chosen for class; do not invent a URL or copy a search-result preview.',
          'For an agreed local fallback, show the downloaded image inside the recipe’s images folder and its exact relative path. Present this as a separate workflow, not a second required hosting setup.'
        ],
        check: 'The student can explain destination text versus URL, and distinguish image description from image credit.'
      },
      {
        time: '1:40–2:10',
        title: 'Add and test one real link together',
        tool: 'CodePen Classic HTML panel + rendered result',
        actions: [
          'Add one descriptive source link to the existing footer using an actual source consulted for the recipe or its content.',
          'Open the link from the rendered result and verify the destination. Return to the same saved Pen.',
          'Insert the class demonstration image through the chosen image route, then save and verify that it loads. Check the exact src if it does not.',
          'Use Inspect on the rendered image to locate the img element. Keep permanent repairs in the authored HTML panel.'
        ],
        check: 'The saved page has one working source link and a loading demonstration image before the independent block begins.'
      },
      {
        time: '2:10–2:20',
        title: 'Break',
        tool: 'Step away from the screen',
        actions: ['Save the working link and image. Take the full ten-minute break.'],
        check: 'The demonstrated connections are saved and recoverable.'
      },
      {
        time: '2:20–3:00',
        title: 'Use an image that belongs with the recipe',
        tool: 'The same recipe + the agreed image distribution method',
        actions: [
          'Add or replace the demonstration image with one relevant image the student created or may reuse. Apply the agreed image route; stop for help if the chosen source cannot supply a stable permitted address.',
          'Write alternative text that serves this recipe. Add a visible credit or a note that the student made the image; link its source when appropriate.',
          'Use figure and figcaption when a caption belongs with the image. Keep the written ingredients and method as text.',
          'Test the source link and image again after saving. If asset access is still blocked, preserve the working recipe and a precise blocker for the instructor rather than introducing a new hosting service.'
        ],
        check: 'The student can locate the image’s actual source and explain its alt text and credit. An unresolved image issue is recorded rather than disguised as completion.'
      },
      {
        time: '3:00–3:15',
        title: 'Read the page as someone using the recipe',
        tool: 'Rendered recipe + HTML source',
        actions: [
          'Partner A reads only the headings, then follows only the numbered method. Partner B identifies missing context or an incorrect order. Swap roles.',
          'Each student explains one structural decision with a concrete source example: list type, nesting, heading sequence, or image/caption.',
          'Use Monday’s reversible experiment or a small new comparison to support the explanation. Restore the intended structure before final saving.'
        ],
        check: 'The recipe’s structure supports reading and the student has a specific prediction/result to document.'
      },
      {
        time: '3:15–3:30',
        title: 'Prepare one weekly submission and keep building',
        tool: 'Saved recipe + Canvas',
        actions: [
          'Save and reopen the actual recipe link in a signed-out window. Confirm that the latest text, image, and source link appear. For local work, include the HTML, CSS, and needed image files together.',
          'Prepare the Canvas “Recipe structure check”: one recipe artifact, two to four sentences explaining the experiment, and one question or next step. Its deadline is October 4 at 11:59 p.m. Pacific.',
          'State the boundary clearly: this weekly score concerns the structural experiment; the same recipe’s finished HTML/CSS project is due October 7. No second reflection page or replacement project is needed.',
          'Use the remaining independent-work allowance to finish the same core recipe and evidence. The week’s four-hour estimate includes these tasks together.'
        ],
        check: 'The artifact is accessible, the student knows what to submit and when, and the same recipe is ready for next week’s CSS work.'
      }
    ]
  }
];

export const reviewQuestions: string[] = [
  'Confirm the proposed CodePen Classic teaching mode and a verified recipe-starter entry before turning this into student instructions. The newer file-based editor needs different copy/paste guidance.',
  'Is Monday’s first guided Inspect operation the right amount of DevTools for this group? The proposed stopping point is locating one element in the actual preview and returning to authored source.',
  'Choose Wednesday’s image route: an instructor-hosted set of permitted images with source credits would keep Classic simple; student-created local images require the separately demonstrated local workflow. The current brief does not settle this decision.',
  'The companion Milanote board link and its role are pending. Decide whether it is a reference board only; it should not silently become another required submission or a new setup task.',
  'Confirm the proposed timing adjustment: 40 minutes of independent building and 15 minutes of partner checking leave 15 minutes for saving, reopening, and Canvas delivery within the same 150-minute studio.'
];
