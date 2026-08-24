#!/usr/bin/env python3
"""Local pre-deployment validator for the WordPress-to-Astro cutover candidate.
This script never contacts Cloudways and does not modify source files.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
SOURCE = ROOT / 'astro.config.mjs'
GSC_FILE = DIST / 'googledabf998f259e57e5.html'
ROUTE_AUDIT = Path('/home/ubuntu/sunlit_wp_astro_final_route_classification.json')
EXPECTED_PDFS = {
    'lumina-slate-bipv-solar-roof-brochure-2026.pdf': 1_369_497,
    'storm-guard-bipv-solar-roof-brochure-2026.pdf': 1_287_289,
}


def check(condition, label, failures):
    prefix = 'PASS' if condition else 'FAIL'
    print(f'{prefix}: {label}')
    if not condition:
        failures.append(label)


def route_path_exists(target):
    path = target.split('#', 1)[0].strip('/')
    return (DIST / path / 'index.html').exists() if path else (DIST / 'index.html').exists()


def main():
    failures = []
    check((DIST / 'index.html').exists(), 'Astro dist homepage exists', failures)
    check(GSC_FILE.exists(), 'Google Search Console verification file exists at dist root', failures)
    if GSC_FILE.exists():
        check(GSC_FILE.read_text().strip() == 'google-site-verification: googledabf998f259e57e5.html', 'Google verification file content matches live WordPress file', failures)

    for filename, expected_size in EXPECTED_PDFS.items():
        path = DIST / 'downloads' / filename
        check(path.exists(), f'Public download exists: {filename}', failures)
        if path.exists():
            check(path.stat().st_size == expected_size, f'Public download byte size verified: {filename}', failures)

    config = SOURCE.read_text()
    legacy_groups = {
        'legacy article mappings': [
            '/sunlit-bipv-story/', '/solar-roof-electrical-system/', '/solar-roof-case-study/',
            '/why-are-most-solar-roofs-black/', '/solar-roofing-business-model/',
            '/solar-system-categories/', '/future-of-solar-roofs/', '/offshore-bipv-guide/',
        ],
        'component and installation mappings': [
            '/lumina-slate-series/lumina-slate-series-roof-base-layer-installation/',
            '/lumina-slate-series/lumina-slate-series-electrical-system/',
            '/lumina-slate-series/lumina-slate-series-ridge-edge-tiles/',
            '/lumina-slate-series/lumina-slate-series-main-roofing-tiles-installation/',
            '/storm-guard-series/storm-guard-series-roofing-tiles/',
            '/storm-guard-series/storm-guard-series-roof-base-layer/',
            '/storm-guard-series/storm-guard-series-electrical-system/',
            '/storm-guard-series/storm-guard-series-ridge-edge-tiles/',
        ],
        'legacy language mappings': [
            '/osynligt-solcellstak-for-premiumprojekt/',
            '/tetto-solare-invisibile-per-gli-edifici-di-pregio/',
            '/techo-solar-invisible-para-promociones-premium/',
            '/telhado-solar-invisivel-para-empreendimentos-de-luxo/',
            '/onzichtbaar-zonnedak-voor-hoogwaardige-projecten/',
            '/unsichtbares-solardach-fuer-premium-entwicklungen/',
        ],
    }
    for group, paths in legacy_groups.items():
        missing = [path for path in paths if f"'{path}':" not in config]
        check(not missing, f'{group} declared in Astro redirect configuration', failures)

    for source_file, expected_anchor in [
        (ROOT / 'src/pages/lumina-slate.astro', 'id="installation-evidence"'),
        (ROOT / 'src/pages/storm-guard.astro', 'id="installation-evidence"'),
    ]:
        check(expected_anchor in source_file.read_text(), f'Installation anchor exists: {source_file.name}', failures)

    if ROUTE_AUDIT.exists():
        audit = json.loads(ROUTE_AUDIT.read_text())
        missing_legacy = [r['old_path'] for r in audit['records'] if r['dist_classification']['type'] == 'missing']
        check(not missing_legacy, 'All audited published WordPress paths have an Astro page or static redirect preview', failures)
    else:
        print('WARN: Prior WordPress route classification not found; run classify_astro_static_routes.py before final acceptance.')

    print(f'RESULT: {len(failures)} failure(s)')
    if failures:
        for failure in failures:
            print(f' - {failure}')
        sys.exit(1)


if __name__ == '__main__':
    main()
