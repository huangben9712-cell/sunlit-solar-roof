# FormSubmit 邮件表单集成说明

**决策日期：**2026-08-24  
**适用页面：**`/contact/`

由于 Formspree 注册页在用户浏览器中持续加载，邮件表单改用 FormSubmit。该服务可让静态 HTML/Astro 表单通过其端点将提交内容投递到指定收件箱，无需部署 PHP、保存 SMTP 密钥或注册账户。首次提交会向收件邮箱发送确认邮件；确认后才接收后续投递。

实现采用 FormSubmit 官方 AJAX 端点 `https://formsubmit.co/ajax/{recipient}`，以 `POST` JSON 与 `Accept: application/json` 发送，保持访客留在 Sunlit 联系页并在页面上显示成功/失败状态。提交将包含 `_subject`、`_replyto`、`_template` 与隐藏的 `_honey` 字段；保留默认 reCAPTCHA，不设置 `_captcha=false`。首封生产测试邮件的主题将为 `TEST — Sunlit website form`，且只会在用户明确确认后触发。

FormSubmit 确认邮件后提供随机别名端点时，应将源代码中暂时使用的明文收件地址替换为该别名，减少公开 HTML 中可被爬取的邮箱地址。该别名不是密钥，但应仅用于该网站表单。

## Sources

[1] [FormSubmit — static HTML form endpoint and first-time email confirmation](https://formsubmit.co/)

[2] [FormSubmit AJAX documentation](https://formsubmit.co/ajax-documentation)

[3] [FormSubmit documentation — Reply-To, honeypot, reCAPTCHA, AJAX and templates](https://formsubmit.co/documentation)

[4] [Web3Forms — static form alternative](https://web3forms.com/)

[5] [Formspree — static form backend alternative](https://formspree.io/)
