import { useEffect, useMemo, useRef, useState } from 'react';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
  useActiveCode,
  type SandpackTheme,
} from '@codesandbox/sandpack-react';
import { markdown } from '@codemirror/lang-markdown';
import { marked } from 'marked';
import '../../styles/fall2026-live-markdown.css';

interface LiveMarkdownProps {
  file: string;
  notes: string;
  labels: {
    region: string;
    editor: string;
    preview: string;
    reset: string;
  };
}

const sandpackTheme: SandpackTheme = {
  colors: {
    surface1: 'var(--bg-primary)',
    surface2: 'var(--bg-card)',
    surface3: 'var(--bg-inset)',
    disabled: 'var(--text-secondary)',
    base: 'var(--text-primary)',
    clickable: 'var(--text-secondary)',
    hover: 'var(--text-primary)',
    accent: 'var(--text-link)',
    error: 'var(--eagle-red)',
    warning: 'var(--attention)',
  },
  syntax: {
    plain: 'var(--text-primary)',
    comment: 'var(--text-secondary)',
    keyword: 'var(--eagle-red)',
    definition: 'var(--text-link)',
    punctuation: 'var(--text-primary)',
    property: 'var(--attention)',
    tag: 'var(--eagle-red)',
    static: 'var(--eagle-green)',
    string: 'var(--eagle-green)',
  },
  font: {
    body: 'var(--font-system)',
    mono: 'var(--font-mono)',
    size: '16px',
    lineHeight: '1.6',
  },
};

const markdownLanguage = [
  {
    name: 'markdown',
    extensions: ['md'],
    language: markdown(),
  },
];

function previewDocument(source: string) {
  const rendered = marked.parse(source, { async: false });

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'">
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 20px;
    background: Canvas;
    color: CanvasText;
    font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.55;
    overflow-wrap: anywhere;
  }
  :first-child { margin-top: 0; }
  :last-child { margin-bottom: 0; }
  h1 { font-size: 2rem; line-height: 1.15; }
  h2 { font-size: 1.5rem; line-height: 1.25; }
  p, ul { margin: 0 0 1em; }
  ul { padding-left: 1.5em; }
  pre { white-space: pre-wrap; }
</style>
</head>
<body>${rendered}</body>
</html>`;
}

function MarkdownWorkspace({ notes, labels }: Pick<LiveMarkdownProps, 'notes' | 'labels'>) {
  const { code, updateCode } = useActiveCode();
  const [previewSource, setPreviewSource] = useState(code);
  const [mobileView, setMobileView] = useState<'source' | 'preview'>('source');
  const editorPanel = useRef<HTMLDivElement>(null);
  const previewFrame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const updatePreview = window.setTimeout(() => setPreviewSource(code), 150);
    return () => window.clearTimeout(updatePreview);
  }, [code]);

  const srcDoc = useMemo(() => previewDocument(previewSource), [previewSource]);

  const reset = () => {
    updateCode(notes, false);
    setPreviewSource(notes);
    setMobileView('source');
    requestAnimationFrame(() => editorPanel.current?.querySelector<HTMLElement>('.cm-content')?.focus());
  };

  const chooseView = (view: 'source' | 'preview') => {
    setMobileView(view);
    requestAnimationFrame(() => {
      if (view === 'preview') previewFrame.current?.focus();
      else editorPanel.current?.querySelector<HTMLElement>('.cm-content')?.focus();
    });
  };

  return (
    <>
      <div className="live-markdown__switch" role="group" aria-label="Markdown workspace view">
        <button type="button" aria-pressed={mobileView === 'source'} onClick={() => chooseView('source')}>Source</button>
        <button type="button" aria-pressed={mobileView === 'preview'} onClick={() => chooseView('preview')}>Preview</button>
      </div>
      <div className="live-markdown__viewport" data-mobile-view={mobileView}>
      <SandpackLayout className="live-markdown__layout">
        <div className="live-markdown__panel live-markdown__editor" ref={editorPanel}>
          <div className="live-markdown__label">{labels.editor}</div>
          <SandpackCodeEditor
            additionalLanguages={markdownLanguage}
            closableTabs={false}
            showInlineErrors={false}
            showLineNumbers
            showRunButton={false}
            showTabs={false}
            wrapContent
          />
          <button className="live-markdown__view-preview" type="button" onClick={() => chooseView('preview')}>View preview</button>
        </div>
        <div className="live-markdown__panel live-markdown__preview">
          <div className="live-markdown__label">{labels.preview}</div>
          <iframe ref={previewFrame} title={labels.preview} tabIndex={0} sandbox="" srcDoc={srcDoc} />
        </div>
      </SandpackLayout>
      </div>
      <button className="button secondary" type="button" onClick={reset}>
        {labels.reset}
      </button>
    </>
  );
}

export default function LiveMarkdown({ file, notes, labels }: LiveMarkdownProps) {
  return (
    <section className="live-markdown" aria-label={labels.region}>
      <SandpackProvider
        files={{ [file]: notes }}
        options={{
          activeFile: file,
          autoReload: false,
          autorun: false,
          initMode: 'immediate',
          skipEval: true,
          visibleFiles: [file],
        }}
        theme={sandpackTheme}
      >
        <MarkdownWorkspace notes={notes} labels={labels} />
      </SandpackProvider>
    </section>
  );
}
