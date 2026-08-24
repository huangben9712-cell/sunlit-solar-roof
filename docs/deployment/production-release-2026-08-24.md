# Sunlit Solar Roof Astro 生产发布与测量交接

**发布日期：**2026-08-24  
**生产域名：**`https://www.sunlitsolarroof.com/`  
**代码基线：**GitHub `main` 与 `develop` 已同步至 `daf6f06`（旧 WordPress sitemap 301 修复）。

## 发布结果

Astro 静态站已从经验证的 staging 发布到 Cloudways 生产应用。原 WordPress 文件没有删除，仍完整保留在生产 `public_html` 内的隐藏回滚归档目录；生产数据库、DNS 和 SSL 均未更改。生产应用已运行在 Hybrid Stack，使根目录 `.htaccess` 可以为历史 URL 返回服务器级 301。

| 验收范围 | 结果 |
|---|---|
| 核心页面、两份正式 PDF、robots、sitemap、GSC 验证文件、canonical、WhatsApp 入口 | 全部可用 |
| 公开域名完整发布验收 | 62 项检查、0 failures |
| 既有历史 URL | 45 条均为单跳 HTTPS 301，最终目标返回 200 |
| 遗留 WordPress brochure URL | 2 条均 301 至新的正式 PDF |
| 公开首页人工浏览 | Astro 首页、导航、Factory Pricing CTA 与 WhatsApp 入口正常 |
| 旧缓存修复 | 先切换 Hybrid Stack，后刷新 Cloudways 源站缓存与 Cloudflare 边缘缓存 |

## Search Console 迁移

正式域名的 Search Console URL 前缀属性仍保持验证状态，发布包内的 HTML 验证文件也仍可访问。`/sitemap.xml` 已由 Search Console 成功读取，显示发现 54 个 URL。历史 WordPress 提交记录已从 Search Console 移除；服务器仍保留这些旧 sitemap 路径到 `/sitemap.xml` 的 301，以保护任何遗留抓取请求或外部引用。

| 当前提交 sitemap | 状态 | 已发现 URL |
|---|---:|---:|
| `/sitemap.xml` | 成功 | 54 |

## GA4 接入状态

现有 Sunlit GA4 Web Data Stream 已确认持续接收数据。Astro 本次构建通过 `PUBLIC_GA_MEASUREMENT_ID` 注入现有 Measurement ID，并已发布到所有静态 HTML 页面。现有页面级事件代码会在用户点击 WhatsApp 链接时发送 `whatsapp_click`，在用户点击 PDF 时发送 `document_download`，并包含链接文本和当前页面路径等非个人身份参数。

浏览器已在正式 Download Center 触发一次 Lumina brochure 下载测试；但在短暂的实时报告观察窗口内，没有出现活跃用户或事件。页面中的标准 Google tag 与两个事件处理器已经分别在部署 HTML 与源代码中核验。这种情况可能由浏览器/扩展的跟踪拦截或数据延迟造成，因此不应在尚未接收到真实事件前将 `whatsapp_click` 标记为 GA4 Key Event。

> 后续动作是在无跟踪拦截的真实浏览器或实际访客点击后，进入 GA4 的 **管理 → 事件**，确认 `whatsapp_click` 出现，再将其标记为 Key Event。`document_download` 保留为辅助意向信号，不建议作为主要业务转化指标。

## 监测节奏

| 时间窗口 | Search Console | GA4 | 业务记录 |
|---|---|---|---|
| 上线后 48 小时 | 确认 sitemap 继续为“成功”，检查抓取异常 | 确认 page_view 与自定义事件开始进入报告 | 记录真实 WhatsApp 询盘的国家、产品线和买家角色 |
| 第 7 天 | 查看“网页”报告中的 404、重定向和已抓取未编入索引页面 | 对照落地页、渠道、PDF 下载和 WhatsApp 点击 | 标记有回复、进入报价和非目标询盘 |
| 第 30 天 | 比较查询词、展示、点击、已编入索引页面变化 | 比较 Organic Search 与 AI Assistant/Direct 的高意向页面 | 把有效询盘反推到产品页、文章主题与后续内容优先级 |

## 回滚与安全收尾

如果必须回滚，可先在 Cloudways 使用本次发布前的按需备份，或将完整 WordPress 回滚归档恢复到站点根目录；恢复前应同时清理 Cloudways 与 Cloudflare 缓存。临时 Cloudways 应用级 SFTP 凭据和本地凭据文件只应在确认不再需要本轮运维访问后撤销/删除。撤销动作尚待最终确认。

## 2026-08-24 安全清理更新

生产临时应用级 SFTP 凭据已在 Cloudways 中删除，控制台确认该生产应用的 Application Credentials 列表为空。staging 的同类临时凭据及本地临时凭据/发布脚本仍在本次清理流程中，完成后应一并从控制台和本地环境移除。

生产与 staging 两组临时应用级 SFTP 凭据均已在 Cloudways 控制台撤销，两个应用的 Application Credentials 列表均不再列出本轮临时用户。本地对应的凭据 JSON 文件和本轮仅用于上传、切换、验收的临时发布脚本也已删除；项目源代码、构建交接文档及无敏感信息的验收报告仍保留。

## GA4 实时验证更新

在停用浏览器中的跟踪拦截后，GA4 实时概览已收到正式网站的生产事件。报告显示首页与 Factory Pricing 页面浏览、`page_view`、`session_start`、`first_visit`、`user_engagement`、`click` 和 `whatsapp_click` 均已出现；本轮测试中 `whatsapp_click` 已记录 2 次，并显示在 GA4 的关键事件卡片中。由此确认 Astro 生产迁移后的 GA4 页面浏览和 WhatsApp 询盘测量链路可用，无需发布此前拟议的显式 `send_to` 修复。

## FormSubmit email form release update

The contact page now provides two qualified B2B inquiry paths: an email submission path handled by an activated FormSubmit alias and the existing pre-filled WhatsApp path. The email path was first tested in staging, then released as a single-file production increment (`public_html/contact/index.html`) after a production preflight, local rollback copy, atomic upload, file-hash verification, and Cloudways source-cache purge. Production delivery was confirmed by `info@sunlitsolarroof.com` with complete submitted fields.

The production application-level SFTP credential for this increment was deleted in Cloudways. The matching staging credential is in the final cleanup step. No password, email recipient address, or private credential appears in this document.

Cloudways confirmed deletion of both temporary application-level SFTP credentials used for the FormSubmit contact-form release: the production increment credential and the staging validation credential. Both application credential lists now show no data for this release scope. Local credential files and temporary deployment/test scripts remain queued for deletion after this audit update is committed.
