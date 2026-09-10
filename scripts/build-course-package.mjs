import { readFileSync, writeFileSync, mkdirSync, cpSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { marked } from 'marked';
import { spawnSync } from 'node:child_process';

const root = resolve('src/content/fall2026');
const output = resolve(process.argv[2] || '../instructor-package/generated');
const course = JSON.parse(readFileSync('src/data/fall2026/course.json', 'utf8'));
const origin = 'https://code-and-design.org';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const files = [
  ...course.documents.map(d => ({id:d.id, title:d.title, path:d.path, kind:'document'})),
  ...course.weeks.map(w => ({id:w.id, title:`Week ${w.number}: ${w.title}`, path:w.lesson, kind:'week'})),
  ...course.assignments.map(a => ({...a, path:a.brief, kind:'assignment'}))
];
mkdirSync(output, {recursive:true});
for (const item of files) {
  const source = resolve(root, item.path);
  if (!source.startsWith(root + '/')) throw new Error('Content path leaves course directory');
  let body = marked.parse(readFileSync(source, 'utf8'));
  body = body.replace(/(href|src)="\/(?!\/)/g, `$1="${origin}/`);
  const deadline = item.kind === 'assignment' ? `<p><strong>Due ${escape(item.dueDate)}, ${escape(item.dueTime)} Pacific · ${item.points} points</strong></p>` : '';
  const header = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(item.title)}</title><meta name="identifier" content="desn368-f26-${item.id}"><meta name="workflow_state" content="unpublished"><meta name="editing_roles" content="teachers"></head><body>`;
  const page = `${header}<p>DESN 368 · Fall 2026</p>${deadline}${body}</body></html>`;
  const filename = resolve(output, 'canvas-html', item.kind, item.id + '.html');
  mkdirSync(dirname(filename), {recursive:true});
  writeFileSync(filename, page);
  item.htmlPath = `canvas-html/${item.kind}/${item.id}.html`;
}
writeFileSync(resolve(output, 'course.json'), JSON.stringify(course, null, 2));
writeFileSync(resolve(output, 'content-index.json'), JSON.stringify(files, null, 2));
cpSync(root, resolve(output, 'markdown'), {recursive:true});
cpSync('public/fall-2026/starters', resolve(output, 'starters'), {recursive:true});
cpSync('public/pixel-pilot/starter', resolve(output, 'starters/pixel-pilot'), {recursive:true});
const result = spawnSync('python3', [resolve('scripts/package-canvas.py'), output], {stdio:'inherit'});
if (result.status !== 0) process.exit(result.status || 1);
console.log(`Generated ${files.length} Canvas HTML documents and review package in ${output}`);
