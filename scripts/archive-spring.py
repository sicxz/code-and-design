"""Freeze a built Spring 2026 site before the Fall route replaces /1.

Usage: python3 scripts/archive-spring.py /absolute/path/to/baseline/dist
The input must be built from the verified Spring baseline, not the new Fall site.
"""
from pathlib import Path
import hashlib
import json
import re
import shutil
import sys

root = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1]).resolve()
destination = root / 'public/1-spring-2026'
assets = root / 'public/archive-assets/spring-2026'
if destination.exists():
    raise SystemExit('Archive already exists; preserve it instead of overwriting history.')
home = (source / '1/index.html').read_text()
if 'Spring 2026' not in home:
    raise SystemExit('Expected a Spring 2026 baseline build.')
shutil.copytree(source / '1', destination)
shutil.copytree(source / '_astro', assets / '_astro')
for name in ('tutorials', 'demos', 'assets'):
    if (source / name).exists():
        shutil.copytree(source / name, assets / 'shared' / name)

banner = '<aside style="padding:12px 24px;background:#fff0b0;color:#20242b;font:16px/1.5 system-ui;border-bottom:2px solid #20242b">Spring 2026 archive. These dates and instructions belong to that term. <a href="/1/" style="color:#133e84;text-decoration:underline">Open the Fall 2026 course</a>.</aside>'
text_types = {'.html', '.css', '.js', '.json', '.svg'}
for folder in (destination, assets):
    for file in folder.rglob('*'):
        if not file.is_file() or file.suffix not in text_types:
            continue
        content = file.read_text()
        content = re.sub(r'/1(?=[/\"\'?#\s]|$)', '/1-spring-2026', content)
        content = content.replace('/_astro/', '/archive-assets/spring-2026/_astro/')
        for name in ('tutorials', 'demos', 'assets'):
            for origin in ('https://code-and-design.org', 'http://code-and-design.org'):
                content = content.replace(origin + '/' + name + '/', '/archive-assets/spring-2026/shared/' + name + '/')
            content = content.replace(chr(34) + '/' + name + '/', chr(34) + '/archive-assets/spring-2026/shared/' + name + '/')
            content = content.replace(chr(39) + '/' + name + '/', chr(39) + '/archive-assets/spring-2026/shared/' + name + '/')
        if file.suffix == '.html':
            content = content.replace('</head>', '<meta name="robots" content="noindex, follow"></head>')
            content = re.sub(r'(<body\b[^>]*>)', lambda m: m.group(1) + banner, content, count=1)
        file.write_text(content)

manifest = {
    'term': 'Spring 2026',
    'sourceCommit': 'fe2965f803de32e23838baa8f9275eb2a773b6f4',
    'archiveRoute': '/1-spring-2026/',
    'sharedFiles': {str(p.relative_to(assets)): hashlib.sha256(p.read_bytes()).hexdigest()
                    for p in sorted(assets.rglob('*')) if p.is_file()},
    'files': {str(p.relative_to(destination)): hashlib.sha256(p.read_bytes()).hexdigest()
              for p in sorted(destination.rglob('*')) if p.is_file()},
}
(assets / 'manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
# Only the historical subtree copied and verified above is removed from active /1.
legacy = root / 'public/1'
for path in legacy.rglob('*'):
    if path.is_file() and not (destination / path.relative_to(legacy)).exists():
        raise SystemExit(f'Archive missing legacy file: {path}')
shutil.rmtree(legacy)
print(f'Archived {len(manifest["files"])} files and preserved baseline assets.')
