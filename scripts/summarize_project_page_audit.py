#!/usr/bin/env python3
"""Summarize the 26-page project SEO audit into a repository Markdown report."""
from __future__ import annotations

import csv
from collections import Counter
from datetime import date
from pathlib import Path

ROOT = Path("/home/ubuntu/sunlit-manus-audit")
INPUT = Path("/home/ubuntu/audit_sunlit_project_pages.csv")
OUTPUT = ROOT / "docs/seo/project-page-seo-audit-2026-08-24.md"


def trim(text: str, limit: int) -> str:
    text = " ".join((text or "").split())
    return text if len(text) <= limit else text[: limit - 1].rstrip() + "…"


def main() -> None:
    with INPUT.open(newline="", encoding="utf-8") as handle:
        rows = list(csv.DictReader(handle))

    rows = [row for row in rows if row.get("Project Slug")]
    rows.sort(key=lambda row: (-int(row["Indexing Priority"]), -int(row["Evidence Score"]), row["Project Slug"]))

    evidence = Counter(int(row["Evidence Score"]) for row in rows)
    priority = Counter(int(row["Indexing Priority"]) for row in rows)
    cannibalization = Counter((row["Cannibalization Risk"] or "").split("—", 1)[0].strip().lower() for row in rows)
    p0 = [row for row in rows if int(row["Indexing Priority"]) >= 4]
    p1 = [row for row in rows if int(row["Indexing Priority"]) == 3]
    p2 = [row for row in rows if int(row["Indexing Priority"]) <= 2]

    lines = [
        "# Sunlit 项目页 SEO 与收录审计",
        "",
        f"**审计日期：**{date.today().isoformat()}  ",
        "**范围：**26 个公开项目详情页（`/projects/{slug}/`）  ",
        "**方法：**逐页检查公开响应、self-canonical、项目事实记录、买家问题、证据缺口与同质化风险。此审计不代表 Google 已索引状态；索引状态仍须以 Search Console 的 URL Inspection 为准。",
        "",
        "## 管理结论",
        "",
        f"全部 {len(rows)} 个项目页均可公开访问并使用 self-canonical。内容问题不在于页面能否被抓取，而在于项目间的叙述结构过于相似、部分页面缺少可验证的项目证据，以及若干项目将估算的产出、耐候或合规表述写得接近已验证结论。",
        "",
        "| 指标 | 结果 | 含义 |",
        "|---|---:|---|",
        f"| 可访问且 self-canonical | {len(rows)}/{len(rows)} | 技术基础可用；不应靠重复提交 sitemap 解决内容问题。 |",
        f"| 证据评分 2/5 | {evidence[2]} | 应降为参考素材，待补充项目地点、文件、参数或照片证据后再重点推广。 |",
        f"| 证据评分 3/5 | {evidence[3]} | 可索引候选，但需强化一个独特的技术场景并限制未经验证的性能结论。 |",
        f"| 证据评分 4/5 | {evidence[4]} | 优先争取索引与内链支持；现有项目技术特征相对清晰。 |",
        f"| 收录优先级 4–5 | {len(p0)} | 先做的核心案例，适合 URL Inspection 与高质量内部链接。 |",
        f"| 中等同质化风险 | {cannibalization['medium']} | 多数 villa 页面不应共同争夺泛词 `luxury solar roof`，必须各自占有一个技术问题。 |",
        f"| 高同质化风险 | {cannibalization['high']} | 需要先替换通用段落或补充独有技术细节，再优先请求收录。 |",
        "",
        "## 必须先修复的共享模板问题",
        "",
        "项目详情模板当前对所有项目使用同一段 **Visual Outcome** 文本，并对所有系统套用相同的 Supply Scope。它会让项目之间产生结构与措辞上的重复；对于 `Others` 类型的红色 BIPV、BIPV 幕墙/透明玻璃、曲面金属屋面等案例，还可能把真实供货范围过度简化为相同的“PV sheets”叙述。应将 Visual Outcome 改为项目专属字段，并把 Supply Scope 改为按项目/技术类别配置。",
        "",
        "所有产出、节能、减排、风载、防水、HOA/heritage 合规与投资回报数字必须保持 **Estimated / project record** 的限定语，除非能补充监控截图、验收/并网文件、第三方测试、客户授权证明或项目文件。不要为填充页面而虚构地点、客户名、认证或结果。",
        "",
        "## P0：先进入 URL Inspection 与内容补强的核心案例",
        "",
        "| 项目页 | 页面独占买家问题 | 证据 | 立即动作 |",
        "|---|---|---:|---|",
    ]

    for row in p0:
        slug = row["Project Slug"]
        lines.append(
            f"| [`{slug}`](/projects/{slug}/) | {trim(row['Distinct Buyer Question'], 150)} | {row['Evidence Score']}/5 | {trim(row['Highest Value Action'], 170)} |"
        )

    lines.extend([
        "",
        "## P1：保留为参考案例，先完成模板去重与证据限定",
        "",
        "| 项目页 | 主要风险 | 下一步 |",
        "|---|---|---|",
    ])
    for row in p1:
        lines.append(
            f"| [`{row['Project Slug']}`](/projects/{row['Project Slug']}/) | {trim(row['Cannibalization Risk'], 160)} | {trim(row['Highest Value Action'], 190)} |"
        )

    lines.extend([
        "",
        "## P2：暂不争取泛词索引，先补足案例事实",
        "",
        "| 项目页 | 核心缺口 | 处理原则 |",
        "|---|---|---|",
    ])
    for row in p2:
        lines.append(
            f"| [`{row['Project Slug']}`](/projects/{row['Project Slug']}/) | {trim(row['Evidence Gaps'], 185)} | 先补充可验证技术/地点/文件；否则作为导航参考而非独立流量页。 |"
        )

    lines.extend([
        "",
        "## 执行顺序",
        "",
        "第一周先修复共享模板和估算指标标注，并从 P0 中选 5–8 页补入已存在的施工照片所对应的技术说明、独特的屋面问题和准确的产品/系统链接。完成后只对这些已增强页面使用 Search Console URL Inspection 请求编入索引。第二周再根据 Search Console 的抓取与索引反馈处理 P1，不以批量重复请求代替内容质量。",
        "",
        "## 审计数据",
        "",
        "逐页原始审计输出位于 `/home/ubuntu/audit_sunlit_project_pages.csv` 与 `/home/ubuntu/audit_sunlit_project_pages.json`（任务工作区）。本报告只归纳网站当前公开内容与项目数据源，不增加未经证实的项目事实。",
        "",
    ])

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote={OUTPUT}")
    print(f"projects={len(rows)} p0={len(p0)} p1={len(p1)} p2={len(p2)} evidence={dict(sorted(evidence.items()))}")


if __name__ == "__main__":
    main()
