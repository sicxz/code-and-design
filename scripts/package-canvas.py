"""Package authored content only; never read or mutate a Canvas course."""
import csv
import json
import sys
from datetime import datetime, timezone
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile, ZIP_DEFLATED
from zoneinfo import ZoneInfo

out = Path(sys.argv[1]).resolve()
course = json.loads((out / 'course.json').read_text())
items = json.loads((out / 'content-index.json').read_text())
CC = 'http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1'
CANVAS = 'http://canvas.instructure.com/xsd/cccv1p0'
identifier = lambda name: 'desn368-f26-' + name


def element(parent, tag, text=None, **attrs):
    child = ET.SubElement(parent, tag, attrs)
    if text is not None:
        child.text = str(text)
    return child


def xml(root):
    return ET.tostring(root, encoding='utf-8', xml_declaration=True)


def due_utc(assignment):
    date = datetime.fromisoformat(assignment['dueDate'] + 'T' + assignment['dueTime'])
    return date.replace(tzinfo=ZoneInfo(course['schedule']['timezone'])).astimezone(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')


manifest = ET.Element('manifest', {'identifier': identifier('course'), 'xmlns': CC})
metadata = element(manifest, 'metadata')
element(metadata, 'schema', 'IMS Common Cartridge')
element(metadata, 'schemaversion', '1.1.0')
organization = element(element(manifest, 'organizations'), 'organization', identifier='org_1', structure='rooted-hierarchy')
learning = element(organization, 'item', identifier='LearningModules')
resources = element(manifest, 'resources')
archive = {}


def resource(name, path, kind='webcontent', extra=()):
    node = element(resources, 'resource', identifier=identifier(name), type=kind, href=path)
    for file in (path, *extra):
        element(node, 'file', href=file)
    return node


application = 'associatedcontent/imscc_xmlv1p1/learning-application-resource'
groups = ET.Element('assignmentGroups', {'xmlns': CANVAS})
for position, group in enumerate(course['grading'], 1):
    node = element(groups, 'assignmentGroup', identifier=identifier(group['id']))
    for key, value in [('title', group['label']), ('position', position), ('group_weight', group['weight'])]:
        element(node, key, value)
archive['course_settings/assignment_groups.xml'] = xml(groups)
settings = ET.Element('course', {'identifier': identifier('course'), 'xmlns': CANVAS})
for tag, text in [('title', 'DESN 368 · Fall 2026 — review draft'), ('course_code', 'DESN 368'), ('time_zone', 'America/Los_Angeles'), ('group_weighting_scheme', 'percent')]:
    element(settings, tag, text)
archive['course_settings/course_settings.xml'] = xml(settings)
archive['course_settings/canvas_export.txt'] = b'Canvas Common Cartridge content package'

for item in items:
    if item['kind'] == 'assignment':
        folder = identifier(item['id'])
        html_path = folder + '/assignment.html'
        settings_path = folder + '/assignment_settings.xml'
        node = ET.Element('assignment', {'identifier': folder, 'xmlns': CANVAS})
        values = {
            'title': item['title'], 'due_at': due_utc(item), 'all_day_date': item['dueDate'],
            'time_zone_edited': 'Pacific Time (US & Canada)', 'all_day': 'false',
            'assignment_group_identifierref': identifier(item['group']), 'workflow_state': 'unpublished',
            'points_possible': item['points'], 'grading_type': 'points',
            'submission_types': 'none' if item['group'] == 'participation' else 'online_text_entry,online_upload',
            'omit_from_final_grade': 'false', 'published': 'false'
        }
        # Participation is an instructor-recorded grade, with no student upload.
        for key, value in values.items():
            element(node, key, value)
        archive[settings_path] = xml(node)
        resource(item['id'], html_path, application, (settings_path,))
    else:
        html_path = 'wiki_content/' + item['id'] + '.html'
        resource(item['id'], html_path)
    archive[html_path] = (out / item['htmlPath']).read_bytes()
    if item['id'] == 'syllabus':
        archive['course_settings/syllabus.html'] = archive[html_path]
        resource('syllabus-copy', 'course_settings/syllabus.html', application).set('intendeduse', 'syllabus')

modules = ET.Element('modules', {'xmlns': CANVAS})
sections = [('start', 'Start here', [i['id'] for i in items if i['kind'] == 'document'])]
sections += [(w['id'], f"Week {w['number']}: {w['title']}", [w['id'], *w['assignmentIds']]) for w in course['weeks']]
by_id = {i['id']: i for i in items}
for position, (module_id, title, ids) in enumerate(sections, 1):
    module = element(modules, 'module', identifier=identifier('module-' + module_id))
    for tag, value in [('title', title), ('workflow_state', 'unpublished'), ('position', position), ('require_sequential_progress', 'false')]:
        element(module, tag, value)
    entries = element(module, 'items')
    org_module = element(learning, 'item', identifier=identifier('module-' + module_id))
    element(org_module, 'title', title)
    for item_position, item_id in enumerate(ids, 1):
        item = by_id[item_id]
        item_identifier = identifier('item-' + module_id + '-' + item_id)
        entry = element(entries, 'item', identifier=item_identifier)
        for key, value in [('content_type', 'Assignment' if item['kind'] == 'assignment' else 'WikiPage'), ('workflow_state', 'unpublished'), ('title', item['title']), ('identifierref', identifier(item_id)), ('position', item_position), ('indent', 0)]:
            element(entry, key, value)
        element(element(org_module, 'item', identifier=item_identifier, identifierref=identifier(item_id)), 'title', item['title'])
archive['course_settings/module_meta.xml'] = xml(modules)
resource('course-settings', 'course_settings/canvas_export.txt', application,
         ('course_settings/course_settings.xml', 'course_settings/assignment_groups.xml', 'course_settings/module_meta.xml'))
archive['imsmanifest.xml'] = xml(manifest)
# Validate every XML file and every manifest reference before writing the cartridge.
for name, content in archive.items():
    if name.endswith('.xml'):
        ET.fromstring(content)
for file in manifest.findall('./resources/resource/file'):
    assert file.attrib['href'] in archive, file.attrib['href']
with ZipFile(out / 'desn368-fall-2026-review.imscc', 'w', ZIP_DEFLATED) as bundle:
    for name, content in sorted(archive.items()):
        bundle.writestr(name, content)

with (out / 'assignment-dates.csv').open('w', newline='') as handle:
    writer = csv.writer(handle)
    writer.writerow(['stable_id', 'title', 'category', 'points', 'due_date_pacific', 'due_time_pacific', 'due_at_utc'])
    for assignment in course['assignments']:
        writer.writerow([assignment[k] for k in ('id','title','group','points','dueDate','dueTime')] + [due_utc(assignment)])

(out / 'README.md').write_text(f'''# DESN 368 · Fall 2026 · Canvas review package

Generated from the same Markdown briefs and calendar metadata as the website. The package contains {len(items)} Canvas-ready HTML documents, the Markdown sources, downloadable starters, assignment dates, and a Common Cartridge draft. It contains no student records or historical exports.

## Review the import in an empty sandbox course

1. In a Canvas sandbox, choose Settings → Import Course Content → Canvas Course Export Package. Select `desn368-fall-2026-review.imscc`. Keep the existing dates; do not shift the quarter.
2. Confirm 12 modules (Start here + weeks 0–10), 17 assignments, and four assignment groups. Imported material is marked unpublished; inspect visibility before making anything available.
3. Enable/confirm assignment group weighting: participation 20%, weekly assignments 30%, projects 40%, portfolio 10%. Check that participation is an instructor-recorded grade. The four projects carry equal points; portfolio evaluates curation rather than grading them again.
4. Compare all dates with `assignment-dates.csv`, especially October 28 and the December 9 noon portfolio deadline. UTC dates correctly account for the November daylight-saving transition. Final presentations are December 9, 1–3 p.m. Pacific.
5. Open each module and its links. Course links and starter downloads point to code-and-design.org; these must be reachable from student devices. The pixel lesson has a local-file fallback. HTML files can also be pasted into Canvas's HTML editor if cartridge import differs in your Canvas instance.
6. Add the actual classroom, current office-hour arrangements, and institution-required syllabus statements in Canvas. Review rubrics and recovery arrangements. Check Student View before publishing selected materials.

The cartridge structure and references have been checked locally against the supplied Canvas export format. It has NOT been imported into Canvas or verified by Canvas's importer. No live Canvas course has been changed. Use a sandbox first; this package is not a claim of completed LMS deployment.

## Editing and regeneration

Edit `src/content/fall2026` and `src/data/fall2026/course.json` in the website repository, then run `node scripts/build-course-package.mjs`. Do not hand-edit generated HTML if it should stay synchronized with the website. The CSV is a review aid, not a Canvas gradebook-import file. Rubrics are readable HTML, not native Canvas rubric objects.
''')
zip_path = out.parent / 'desn368-fall-2026-course-package.zip'
with ZipFile(zip_path, 'w', ZIP_DEFLATED) as bundle:
    for file in sorted(out.rglob('*')):
        if file.is_file():
            bundle.write(file, file.relative_to(out))
print(f'Cartridge: {len(items)} content items, {len(sections)} modules, {len(course["assignments"])} assignments. Package: {zip_path}')
