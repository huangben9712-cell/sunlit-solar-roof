# Sunlit 项目页 SEO 与收录审计

**审计日期：**2026-08-24  
**范围：**26 个公开项目详情页（`/projects/{slug}/`）  
**方法：**逐页检查公开响应、self-canonical、项目事实记录、买家问题、证据缺口与同质化风险。此审计不代表 Google 已索引状态；索引状态仍须以 Search Console 的 URL Inspection 为准。

## 管理结论

全部 26 个项目页均可公开访问并使用 self-canonical。内容问题不在于页面能否被抓取，而在于项目间的叙述结构过于相似、部分页面缺少可验证的项目证据，以及若干项目将估算的产出、耐候或合规表述写得接近已验证结论。

| 指标 | 结果 | 含义 |
|---|---:|---|
| 可访问且 self-canonical | 26/26 | 技术基础可用；不应靠重复提交 sitemap 解决内容问题。 |
| 证据评分 2/5 | 6 | 应降为参考素材，待补充项目地点、文件、参数或照片证据后再重点推广。 |
| 证据评分 3/5 | 19 | 可索引候选，但需强化一个独特的技术场景并限制未经验证的性能结论。 |
| 证据评分 4/5 | 1 | 优先争取索引与内链支持；现有项目技术特征相对清晰。 |
| 收录优先级 4–5 | 17 | 先做的核心案例，适合 URL Inspection 与高质量内部链接。 |
| 中等同质化风险 | 21 | 多数 villa 页面不应共同争夺泛词 `luxury solar roof`，必须各自占有一个技术问题。 |
| 高同质化风险 | 1 | 需要先替换通用段落或补充独有技术细节，再优先请求收录。 |

## 必须先修复的共享模板问题

项目详情模板当前对所有项目使用同一段 **Visual Outcome** 文本，并对所有系统套用相同的 Supply Scope。它会让项目之间产生结构与措辞上的重复；对于 `Others` 类型的红色 BIPV、BIPV 幕墙/透明玻璃、曲面金属屋面等案例，还可能把真实供货范围过度简化为相同的“PV sheets”叙述。应将 Visual Outcome 改为项目专属字段，并把 Supply Scope 改为按项目/技术类别配置。

所有产出、节能、减排、风载、防水、HOA/heritage 合规与投资回报数字必须保持 **Estimated / project record** 的限定语，除非能补充监控截图、验收/并网文件、第三方测试、客户授权证明或项目文件。不要为填充页面而虚构地点、客户名、认证或结果。

## P0：先进入 URL Inspection 与内容补强的核心案例

| 项目页 | 页面独占买家问题 | 证据 | 立即动作 |
|---|---|---:|---|
| [`nanjing-shanshui-huamen-villa-custom-solar-integration-on-complex-rooflines`](/projects/nanjing-shanshui-huamen-villa-custom-solar-integration-on-complex-rooflines/) | How can I integrate solar power into a high-end villa with complex roof geometry and triangular dormers without compromising architectural aesthetics? | 4/5 | Add a technical section detailing the specific flashing method used for triangular dormers with close-up diagrams to prove waterproofing expertise. |
| [`beijing-poly-longshang-luxury-villa-bipv-integration-on-complex-roof-geometry`](/projects/beijing-poly-longshang-luxury-villa-bipv-integration-on-complex-roof-geometry/) | How can solar roof tiles be integrated into a complex multi-hip villa roof with multiple skylights and chimneys? | 3/5 | Include a detailed technical drawing or close-up diagram of the custom flashing solution used for the skylight and trapezoidal roof transitions to own the 'complex BIPV… |
| [`beijing-tanxiangshan-villa`](/projects/beijing-tanxiangshan-villa/) | How can a large-scale BIPV system be integrated into a luxury villa roof without visible wiring or compromising structural waterproofing? | 3/5 | Replace estimated financial returns with a verified 12-month energy production report or utility bill comparison to prove the 15,600 kWh claim to B2B partners. |
| [`hangzhou-eco-tech-building`](/projects/hangzhou-eco-tech-building/) | Can BIPV solar tiles be safely installed on lightweight bamboo or timber frame structures with steep pitches and complex intersections? | 3/5 | Integrate a verified annual generation report to replace the current estimates, providing a hard benchmark for commercial buyers interested in timber-frame BIPV. |
| [`hangzhou-jiuxi-rose-garden`](/projects/hangzhou-jiuxi-rose-garden/) | How can BIPV solar roofs be integrated into ultra-luxury European classical estates without compromising architectural aesthetics? | 3/5 | Replace all estimated technical specifications with actual measured performance data and add a specific detail on the custom flashing used for the multi-hip roof. |
| [`hangzhou-xianghu-arcadia-villa`](/projects/hangzhou-xianghu-arcadia-villa/) | How can BIPV solar tiles be integrated into high-end villa roofs with strict aesthetic requirements and complex features like skylights? | 3/5 | Create a technical deep-dive section on the skylight flashing method used in this project to capture long-tail B2B searches for BIPV architectural details. |
| [`hangzhou-yunxi-diegu-villa`](/projects/hangzhou-yunxi-diegu-villa/) | How can a solar roof meet strict HOA aesthetic standards in a luxury villa community while navigating complex multi-hip roof geometry? | 3/5 | Integrate a specific section detailing the HOA approval process and multi-hip flashing design to differentiate this case from standard residential installs. |
| [`jiaxing-boutique-homestay`](/projects/jiaxing-boutique-homestay/) | How can boutique homestays integrate high-capacity solar roofing without compromising premium architectural aesthetics? | 3/5 | Enhance the page with a specific location and a brief client quote to transform the case from a generic reference into a verified hospitality success story. |
| [`modern-minimalist-residence`](/projects/modern-minimalist-residence/) | How can I achieve a perfectly flat, gap-free solar roof for a minimalist architectural design? | 3/5 | Rename the 'Others' system category to a specific product series name and include a high-resolution technical detail drawing of the horizontal flush-mount joint to satis… |
| [`nanjing-nanshan-lake`](/projects/nanjing-nanshan-lake/) | Can solar tiles handle complex roof valleys and color matching for high-end resort architecture? | 3/5 | Rewrite the boilerplate 'Visual Outcome' section to specifically reference the yellow facade and red chimney to reduce content homogeneity and improve local relevance. |
| [`premium-waterfront-estate`](/projects/premium-waterfront-estate/) | How can a multi-tiered luxury mansion achieve 20kW+ solar capacity without visible traditional panels? | 3/5 | Specify the exact BIPV tile series used and provide a more granular location (city/province) to improve local SEO and technical credibility. |
| [`shanghai-hongqiao-royal-villa`](/projects/shanghai-hongqiao-royal-villa/) | How can I achieve high-density solar power on a small luxury villa roof without violating community aesthetic rules? | 3/5 | Upload a verified energy production report or monitoring system screenshot to substantiate the high-density 23,000 kWh annual output claim. |
| [`urban-compact-home-retrofit`](/projects/urban-compact-home-retrofit/) | How can a typhoon-rated solar roof be seamlessly integrated with large custom skylights on compact urban residential retrofits? | 3/5 | Add specific wind-load certification data and a technical diagram of the custom skylight flashing to substantiate the typhoon-resistance and architectural integration cl… |
| [`urban-low-slope-extension`](/projects/urban-low-slope-extension/) | How can I integrate solar into a low-slope residential extension without risking water ponding or exceeding structural weight limits? | 3/5 | Include a technical cross-section diagram or close-up installation video of the standing-seam drainage mechanism to visually validate the anti-ponding and waterproofing… |
| [`xuzhou-luxury-villa-the-ultimate-bipv-vs-bapv-contrast`](/projects/xuzhou-luxury-villa-the-ultimate-bipv-vs-bapv-contrast/) | How does the visual impact and architectural integration of BIPV solar tiles compare to traditional rack-mounted solar panels on high-end residential… | 3/5 | Enhance the \"BIPV vs BAPV\" comparison with a structured technical data table comparing installation height, weight per sqm, and wind load ratings against standard rack… |
| [`yiwu-golf-villa`](/projects/yiwu-golf-villa/) | How can BIPV tiles maximize solar power density on a 100sqm villa roof compared to traditional panels? | 3/5 | Insert a direct technical comparison showing the specific capacity gain of edge-to-edge BIPV tiles versus a standard BAPV layout on the same 100sqm roof footprint. |
| [`custom-red-bipv-solutions`](/projects/custom-red-bipv-solutions/) | How can I install high-performance solar on a heritage building that requires a traditional red terracotta roof appearance? | 2/5 | Add a technical comparison section or case study PDF that documents the specific color-matching process and the measured efficiency delta for these custom red tiles. |

## P1：保留为参考案例，先完成模板去重与证据限定

| 项目页 | 主要风险 | 下一步 |
|---|---|---|
| [`beijing-new-world-lizun`](/projects/beijing-new-world-lizun/) | medium — high overlap with 'beijing-poly-longshang' project; differentiate by emphasizing 'compact residential' scale and 'wooden batten mounting' technical de… | Enhance the Technical Notes section by adding a detailed installation diagram of the wooden batten substructure to leverage the unique construction-phase photos. |
| [`shanghai-ansheng-huayuan-villa`](/projects/shanghai-ansheng-huayuan-villa/) | medium — Identical \"Visual Outcome\" and \"Supply Scope\" boilerplate across Lumina Slate projects creates high internal competition and risks being flagged a… | Rewrite the 'Visual Outcome' section to specifically describe the black slate and white facade contrast and add a close-up photo of the dormer window flashing. |
| [`usa-private-gymnasium`](/projects/usa-private-gymnasium/) | low — focus on commercial gymnasium typology differentiates it from residential Lumina Slate cases, though generic USA location risks broad keyword overlap. | Replace the estimated output with actual generation data and specify a US city to transform the page into a verified commercial case study. |
| [`large-scale-commercial-complex`](/projects/large-scale-commercial-complex/) | medium — generic slug and H1 overlap with product pages for 'Storm Guard' and general 'commercial solar roof' queries; lacks project-specific differentiation t… | Rename the project to include a specific industry or city and add a section with actual monthly generation logs to prove performance. |
| [`public-utility-infrastructure`](/projects/public-utility-infrastructure/) | medium — Vague 'Others' system classification risks overlap with generic industrial BIPV pages. Avoid by explicitly branding this as a 'Curved Metal Roof' spec… | Rewrite the boilerplate 'Visual Outcome' section to remove residential phrasing like 'curb appeal' and replace it with specific industrial benefits and the name of the water treatment facil… |
| [`suzhou-urban-relay-station`](/projects/suzhou-urban-relay-station/) | low — This page uniquely addresses small-scale urban infrastructure. Risk is limited if content focuses on 'urban aesthetics' rather than generic 'durability'… | Update technical specs with estimated capacity and area to provide B2B buyers with quantifiable performance data instead of placeholders. |
| [`urban-eco-park`](/projects/urban-eco-park/) | high — The 'Visual Outcome' and 'Supply Scope' sections use identical boilerplate text found on other project pages like Beijing New World Lizun, creating a ri… | Replace the generic 'Visual Outcome' boilerplate with specific technical performance data for the solar glass canopy and curtain wall to differentiate this unique infrastructure case. |
| [`us-coastal-community`](/projects/us-coastal-community/) | medium — uses 'Others' system tag while text mentions 'Lumina Slate', creating confusion with specific Lumina Slate project pages; unique 'Community' applicati… | Geolocate the project to a specific US state/city and correct the system category to 'Lumina Slate' to resolve internal data inconsistency and capture regional developer intent. |

## P2：暂不争取泛词索引，先补足案例事实

| 项目页 | 核心缺口 | 处理原则 |
|---|---|---|
| [`pioneer-residential-retrofit`](/projects/pioneer-residential-retrofit/) | Lack of actual multi-year energy generation data; no specific installation year to define 'long-term'; absence of third-party certification for the water-spray test; missing specific g… | 先补充可验证技术/地点/文件；否则作为导航参考而非独立流量页。 |

## 执行顺序

第一周先修复共享模板和估算指标标注，并从 P0 中选 5–8 页补入已存在的施工照片所对应的技术说明、独特的屋面问题和准确的产品/系统链接。完成后只对这些已增强页面使用 Search Console URL Inspection 请求编入索引。第二周再根据 Search Console 的抓取与索引反馈处理 P1，不以批量重复请求代替内容质量。

## 审计数据

逐页原始审计输出位于 `/home/ubuntu/audit_sunlit_project_pages.csv` 与 `/home/ubuntu/audit_sunlit_project_pages.json`（任务工作区）。本报告只归纳网站当前公开内容与项目数据源，不增加未经证实的项目事实。
