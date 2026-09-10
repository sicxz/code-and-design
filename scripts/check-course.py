"""Check the published course contract, local routes, downloads, and frozen archives."""
import hashlib
import json
import re
import sys
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote

root = Path(__file__).resolve().parents[1]
dist = root / 'dist'
course = json.loads((root / 'src/data/fall2026/course.json').read_text())
assert [g['weight'] for g in course['grading']] == [20,30,40,10]
assert len(course['assignments']) == 17 and len(course['weeks']) == 11
ids = [a['id'] for a in course['assignments']]
assert len(ids) == len(set(ids))
assert course['schedule']['finalDate'] == '2026-12-09'
assert next(a for a in course['assignments'] if a['id']=='project-landing')['dueDate'] == '2026-12-02'
assert next(a for a in course['assignments'] if a['id']=='final-portfolio')['dueTime'] == '12:00'
sessions = [s for w in course['weeks'] for s in w['sessions']]
assert len(sessions) == 19
assert len({s['date'] for s in sessions}) == 19
for session in sessions:
    assert date.fromisoformat(session['date']).weekday() in (0,2)
    assert session['date'] not in course['schedule']['noClassDates']
    assert (session['mode'] == 'async') == (session['date'] == '2026-10-28')
for week in course['weeks']:
    assert 2 <= week['estimatedHours'] <= 7
    assert (root / 'src/content/fall2026' / week['lesson']).is_file()
    assert all(item in ids for item in week['assignmentIds'])
for assignment in course['assignments']:
    assert (root / 'src/content/fall2026' / assignment['brief']).is_file()

class Links(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.links=[]; self.ids=[]; self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        if 'id' in attrs: self.ids.append(attrs['id'])
        for key in ('href','src'):
            if key in attrs: self.links.append((tag,attrs[key]))

routes = [dist/'index.html', dist/'1/index.html', dist/'1/schedule/index.html',dist/'1/syllabus/index.html',dist/'1/peel-up-the-pixels/index.html',dist/'curriculum/index.html']
routes += list((dist/'1/weeks').rglob('index.html')) + list((dist/'1/resources').rglob('index.html'))
routes += [dist/f'1/assignments/{item}/index.html' for item in ids]
routes += [dist/'1/assignments/index.html']
failures=[]
for page in routes:
    parsed=Links(page.read_text())
    assert len(parsed.ids)==len(set(parsed.ids)), f'Duplicate IDs: {page}'
    path='/' + str(page.relative_to(dist)).removesuffix('index.html')
    for tag,link in parsed.links:
        if not link or link.startswith(('mailto:','tel:','data:')): continue
        url=urlsplit(urljoin('https://code-and-design.org'+path,link))
        if url.netloc != 'code-and-design.org': continue
        target=dist/unquote(url.path.lstrip('/'))
        if target.is_dir(): target=target/'index.html'
        if not target.exists() and not target.suffix: target=target/'index.html'
        if not target.is_file(): failures.append(f'{path} -> {link}')
        elif url.fragment and target.suffix=='.html' and unquote(url.fragment) not in Links(target.read_text()).ids:
            failures.append(f'{path} -> missing fragment {link}')
assert not failures, '\n'.join(failures)
map_html=(dist/'curriculum/index.html').read_text()
assert re.search(r'<meta[^>]+name="robots"[^>]+content="[^"]*noindex',map_html)
assert '/curriculum/' not in (dist/'index.html').read_text()
assert '/curriculum/' not in (dist/'1/index.html').read_text()
archive = root/'public/1-spring-2026'
assets = root/'public/archive-assets/spring-2026'
manifest=json.loads((assets/'manifest.json').read_text())
for name,digest in manifest['files'].items():
    assert hashlib.sha256((archive/name).read_bytes()).hexdigest()==digest, name
for name,digest in manifest['sharedFiles'].items():
    assert hashlib.sha256((assets/name).read_bytes()).hexdigest()==digest, name
# Historical navigation must stay frozen; the archive banner is the sole link to current Fall.
for folder in (archive, assets):
    for file in folder.rglob('*.html'):
        content = file.read_text()
        content = re.sub(r'<aside style="padding:12px 24px;background:#fff0b0.*?</aside>', '', content, flags=re.S)
        for _, link in Links(content).links:
            url = urlsplit(urljoin('https://code-and-design.org/', link))
            if url.netloc == 'code-and-design.org':
                assert not re.match(r'^/(1(?:/|$)|tutorials/|demos/|assets/)', url.path), f'Archive link escapes: {file}: {link}'
# Compare unrelated course output to the baseline. Strip build-specific asset hashes only.
baseline=Path(sys.argv[1]).resolve() if len(sys.argv)>1 else root.parent/'site-work/dist'
if baseline.is_dir():
    for course_path in ('2', '1-fall-2025'):
        assert (baseline/course_path/'index.html').is_file(), f'Incomplete baseline: missing {course_path}/index.html'
elif len(sys.argv)>1:
    raise AssertionError(f'Explicit baseline does not exist: {baseline}')
normalize=lambda text:re.sub(r'(?<=\.)[A-Za-z0-9_-]{8}(?=\.(?:css|js))','HASH',text)
for course_path in (('2','1-fall-2025') if baseline.is_dir() else ()):
    for before in (baseline/course_path).rglob('*'):
        if before.is_file():
            after=dist/before.relative_to(baseline)
            assert after.is_file(), f'Missing preserved route: {after}'
            if before.suffix=='.html':
                assert normalize(before.read_text())==normalize(after.read_text()), f'Changed preserved page: {after}'
            else: assert before.read_bytes()==after.read_bytes(), f'Changed preserved asset: {after}'
for path in dist.rglob('*'):
    assert path.suffix not in ('.imscc','.csv','.xlsx'), f'Unexpected export/records in public build: {path}'
print(f'PASS: {len(routes)} current pages; internal links/fragments; 19 meetings; 17 assignments; grading; frozen Spring files; no exported records.')
print('PASS: /2 and Fall archive output unchanged from baseline.' if baseline.is_dir() else 'SKIPPED: historical output comparison; pass a baseline dist directory to enable it.')
