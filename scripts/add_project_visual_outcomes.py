#!/usr/bin/env python3
"""Add curated, evidence-constrained visual outcome fields to P0 project records."""
from __future__ import annotations

import re
from pathlib import Path

TARGET = Path("/home/ubuntu/sunlit-manus-audit/src/data/projects.ts")

OUTCOMES = {
    "nanjing-shanshui-huamen-villa-custom-solar-integration-on-complex-rooflines": "The documented Lumina Slate layout follows the villa’s multi-hip roof and triangular dormer windows, using a dark slate finish and project-record edge details at the main roof transitions.",
    "beijing-poly-longshang-luxury-villa-bipv-integration-on-complex-roof-geometry": "The project record shows modular solar tiles following multi-hip roof faces around existing chimneys and large skylights, creating a dark roof surface without the appearance of a separate rack-mounted array.",
    "beijing-tanxiangshan-villa": "A staggered solar-tile layout preserves the roof’s traditional rhythm while project installation images document the batten framework and concealed DC cable routing beneath the finished surface.",
    "hangzhou-eco-tech-building": "The project record pairs lightweight interlocking tiles with a timber-batten structure across skylights, T-shaped intersections, and a steep decorative tower roof on this eco-tech building.",
    "hangzhou-jiuxi-rose-garden": "The matte dark roof finish forms a deliberate contrast with the estate’s beige stone facade, Roman columns, and multi-hip roofline while retaining the visual language of natural slate.",
    "hangzhou-xianghu-arcadia-villa": "Active PV tiles and matching roof elements were recorded as a full roof replacement, giving the Xianghu villa a unified roof surface rather than a separate rooftop panel layer.",
    "hangzhou-yunxi-diegu-villa": "The dark, flat solar-tile profile follows the villa’s converging multi-hip slopes and ventilation chimneys, with project-record edge detailing at the roof perimeter.",
    "jiaxing-boutique-homestay": "The reference uses a dark Lumina Slate roof surface and valley detailing to support the small hospitality property’s architectural identity without adding visible rack-mounted hardware.",
    "modern-minimalist-residence": "The documented horizontal BIPV layout keeps the active roof surface low and continuous, supporting the residence’s clean lines and broad contemporary roof plane.",
    "nanjing-nanshan-lake": "The deep matte roof surface was chosen to complement the resort villa’s yellow facade and red brick chimney, while the project record identifies valley detailing for its intersecting slopes.",
    "premium-waterfront-estate": "Dark active roofing follows the estate’s multi-tiered roofline, providing a project-recorded BIPV surface that preserves the mansion’s layered architectural silhouette.",
    "shanghai-hongqiao-royal-villa": "The high-density Lumina Slate layout uses the compact roof area around dormers and chimneys, pairing a dark slate finish with the villa’s classical stone facade.",
    "urban-compact-home-retrofit": "The Storm Guard roof surface uses vertical interlocking profiles around a custom glass skylight, giving this compact urban retrofit a single, continuous roof treatment.",
    "urban-low-slope-extension": "The project record uses Storm Guard’s standing-seam profile as the primary roof surface on a low-slope extension, avoiding the separate visual layer associated with ballasted racks.",
    "xuzhou-luxury-villa-the-ultimate-bipv-vs-bapv-contrast": "This reference centers on a flush solar-tile layout across hip-roof slopes and around a vent pipe, so visitors can compare an integrated roof surface with nearby rack-mounted panel installations.",
    "yiwu-golf-villa": "On the compact roof area, matte-black solar tiles create a clear contrast with the villa’s red brick facade while using the roof plane for an integrated rather than rack-mounted layout.",
    "custom-red-bipv-solutions": "Custom red active tiles are paired with color-matched inactive elements at complex edges and cuts, giving this reference a terracotta-style roof palette rather than a standard blue-panel appearance.",
}


def main() -> None:
    source = TARGET.read_text(encoding="utf-8")
    if "visualOutcome?: string;" not in source:
        source = source.replace("  sourceUrl?: string;\n", "  sourceUrl?: string;\n  /** Project-specific architectural outcome based on the documented reference. */\n  visualOutcome?: string;\n")

    for slug, outcome in OUTCOMES.items():
        if f'visualOutcome: "{outcome}"' in source:
            continue
        pattern = re.compile(
            rf'(slug:\s*"{re.escape(slug)}"[\s\S]*?status:\s*"Reference",)(?=\s*(?:sourceUrl:|images:))'
        )
        replacement = rf'\1 visualOutcome: "{outcome}",'
        source, count = pattern.subn(replacement, source, count=1)
        if count != 1:
            raise RuntimeError(f"Could not add visual outcome for {slug}: {count} replacements")

    TARGET.write_text(source, encoding="utf-8")
    print(f"updated={TARGET} outcomes={len(OUTCOMES)}")


if __name__ == "__main__":
    main()
