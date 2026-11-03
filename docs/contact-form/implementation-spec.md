# Contact form implementation specification

Status: proposal for review; no provider, account, inbox, key, or live submission has been configured. Source baseline: feature/portfolio-v2 at local commit `a55475c792a8f1b88ccfda43e61731c882b56658`, which follows remote baseline `551d138ad79d5a787cac33970cb792f4e081a4a8`. Provider documentation reviewed 2026-11-03. See [provider evaluation](provider-evaluation.md) and [test plan](test-plan.md).

## Objective and current state

Give visitors an accessible English/Thai way to request a project discussion without leaving the Portfolio. The current [Contact page](../../src/components/ContactPage.astro) explicitly says no contact channel is available; it has no form or delivery capability. It must continue to say so until a real destination and delivery path are approved and verified. Do not claim that a form is ready to receive inquiries merely because a provider accepted an API request.

TASK-021 has already removed public GitHub profile and repository navigation. Preserve internal Home → Portfolio/Contact, About → Contact, Contact → Portfolio/About, and footer navigation. The project model retains optional approved live URLs, filtered by [publicLiveUrl](../../src/utils/public-live-url.ts); this syntactic filter does not establish that a domain resolves publicly or is approved. Continue reviewing destinations before publication. GitHub Pages hosting, canonical URLs, and build infrastructure are distinct from visitor-facing GitHub profile/repository links. The existing [README](../../README.md) contains stale GitHub-contact and repository-link descriptions; update it in the later implementation, not by restoring those links.

## Scope and experience

Retain the established four-page layout, Prompt font, palette, responsive behavior and localized routes. Replace the unavailable-channel message only in an enabled form mode. Provide no file upload, marketing opt-in, fake alternative, invented email/phone/LINE account, custom backend, database, or collection of passwords, financial details, client secrets, or confidential project information. Do not include a third-party script without reviewing its privacy, accessibility and security implications. Offer users concise privacy information before submission; a reviewed public privacy notice and actual provider retention details are prerequisites to live use.

Proposed form, in order (English / Thai):

| Field | Label | Rule |
| --- | --- | --- |
| Name | Name / ชื่อ | Required; trim whitespace; 1–100 UTF-16 code units. |
| Email | Email / อีเมล | Required; `type=email`, trim, valid browser email syntax, maximum 254 UTF-16 code units. Use as reply-to; do not display the receiving inbox. |
| Project type | Project type (optional) / ประเภทโครงการ (ไม่บังคับ) | Optional select: Corporate website / เว็บไซต์องค์กร, CRM / ระบบ CRM, CMS / ระบบ CMS, ERP or business system / ระบบ ERP หรือระบบธุรกิจ, Other / อื่น ๆ. Send a stable allowlisted value, not translated text. |
| Message | Project details / รายละเอียดโครงการ | Required; trim; 10–3,000 UTF-16 code units. Ask visitors not to include confidential information. |

Do not silently collect extra fields. A locale value (`en` or `th`) may accompany the submission to support responses; document it in the privacy notice. Use fixed, non-user-derived notification subject text if the provider supports it. No visitor-provided HTML should be rendered as HTML; display text safely. Use visible labels, semantic controls, helpful autocomplete (`name`, `email`), required indicators conveyed to assistive technology, and localized instructions. Example privacy copy, subject to owner/legal approval: “Your name, email and message are sent to our form provider so we can reply. Please do not include confidential information.” / “ชื่อ อีเมล และข้อความของคุณจะถูกส่งผ่านผู้ให้บริการแบบฟอร์มเพื่อให้เราตอบกลับได้ โปรดอย่าส่งข้อมูลที่เป็นความลับ” Link to a reviewed privacy notice describing recipient, provider, purpose, retention, deletion/contact process and any international processing before enabling live mode. Do not describe mere submission as legal consent without review.

### Localized feedback

| State | English | Thai |
| --- | --- | --- |
| Required name | Enter your name. | กรุณากรอกชื่อ |
| Required/invalid email | Enter a valid email address. | กรุณากรอกอีเมลให้ถูกต้อง |
| Short message | Enter at least 10 characters. | กรุณากรอกข้อความอย่างน้อย 10 ตัวอักษร |
| Too long | This field is too long. | ข้อมูลในช่องนี้ยาวเกินกำหนด |
| Submit | Send inquiry | ส่งข้อความติดต่อ |
| Sending | Sending… | กำลังส่งข้อความ… |
| Accepted | Your inquiry was submitted. We will respond if we can. | ส่งข้อความติดต่อแล้ว เราจะตอบกลับเมื่อสามารถดำเนินการได้ |
| Failure | We could not confirm submission. Please try again later. | ไม่สามารถยืนยันการส่งข้อความได้ โปรดลองอีกครั้งภายหลัง |
| Ambiguous timeout | We could not confirm whether your message was received. Please wait before trying again. | ไม่สามารถยืนยันได้ว่าได้รับข้อความแล้วหรือไม่ โปรดรอสักครู่ก่อนลองอีกครั้ง |
| Offline | You appear to be offline. Reconnect and try again. | ดูเหมือนคุณไม่ได้เชื่อมต่ออินเทอร์เน็ต โปรดเชื่อมต่อแล้วลองอีกครั้ง |
| JavaScript unavailable | The contact form is unavailable without JavaScript. | แบบฟอร์มติดต่อไม่สามารถใช้งานได้เมื่อปิด JavaScript |
| Mock mode | Test form: messages are not delivered. | แบบฟอร์มทดสอบ: ข้อความจะไม่ถูกส่งจริง |
| Mock success | Test complete; no message was sent. | ทดสอบเสร็จแล้ว ไม่มีการส่งข้อความจริง |

Apply the same length rules and messages in both locales. Avoid relying solely on browser-native English validation messages. Associate errors with fields using `aria-describedby` and `aria-invalid`, show an error summary and move focus to it after invalid submission, and use a persistent polite status region for asynchronous progress and success. Make errors and focus visible without relying on color. Keep focus order and keyboard operation intact, including any CAPTCHA. Retain entered data after failure or uncertain result; clear it only after confirmed provider acceptance. Prevent duplicate simultaneous requests, restore controls after failure, use a bounded timeout, and never auto-retry a potentially accepted request. Acceptance indicates provider receipt, not inbox delivery.

## Integration and safety design

Primary candidate: Web3Forms; Formspree is a fallback only if separately evaluated and approved. Neither is approved yet; see the [evaluation](provider-evaluation.md). A provider adapter must isolate field mapping, transport, response parsing and error handling so UI copy does not depend on provider response text. Use `fetch` with JSON or `FormData` to the provider's documented HTTPS endpoint; do not use `no-cors`, inject untrusted content, put form values in URLs, log request/response bodies or CAPTCHA tokens, or report an opaque response as success. Web3Forms acceptance requires both a successful HTTP response and a parsed JSON `success === true`; handle non-JSON, errors, 403, 429, network loss and timeout as unconfirmed. Its API may echo submitted data, so discard response content except the minimum status. An HTTP/API success is not evidence of inbox delivery.

Use a provider-supported hidden honeypot as defense in depth, without placing it in keyboard focus or accessibility tree, and verify the exact field mapping and provider-side behavior. Use a provider-supported, accessible CAPTCHA with server-side verification if required by the final spam policy; verify behavior and pricing on the selected plan. A client-side check alone is not spam protection. Rate limiting and domain restrictions, if available, supplement rather than replace validation and spam controls. Obtain owner approval of a spam/privacy plan before enabling live submissions. Provider public form identifiers and browser CAPTCHA site keys are visible by design and are not secrets; never include private API keys, CAPTCHA secrets, provider account credentials, or recipient email in browser code, build artifacts, Git, logs, or screenshots. Confirm provider dashboard configuration does not inadvertently disclose the recipient.

For progressive safety, static HTML must not submit to a third party without the script: render the form controls disabled until initialized, and provide an explicit localized `<noscript>` unavailable message. Ensure missing/failed JavaScript does not create a dead enabled button or leak fields. A JS-disabled form is intentionally unavailable rather than a fake submission.

### Proposed modes and configuration

Specify and test these as build-time behavior, with invalid combinations failing closed:

- `PUBLIC_CONTACT_MODE=off|mock|live`: default `off` for production and `mock` for local/preview builds. `off` keeps the truthful current unavailable state. Mock must visibly identify itself, make no network request, and never claim delivery; never publish mock as a working production form.
- `PUBLIC_CONTACT_PROVIDER=web3forms` and `PUBLIC_WEB3FORMS_ACCESS_KEY` apply only to live mode. The latter is a public identifier, not a secret. Choose a fixed, reviewed provider endpoint in the adapter rather than accepting an arbitrary endpoint from public environment variables. Public CAPTCHA site keys, if needed, are public too.
- Preview live integration requires a separate provider form/identifier, explicit owner authorization and a deliberate build-time preview-live opt-in. A public GitHub Pages preview remains public despite `noindex`; use synthetic data only, and do not enable live submissions by default.
- Production live requires explicit owner authorization, a reviewed public privacy notice, approved recipient and provider settings, passing real delivery and anti-spam tests, and an explicit production-live build opt-in. Build-time flags are safety controls, not authentication or a security boundary. Missing identifiers, wrong environment, unknown provider or missing explicit opt-in must stop the build or leave the form off, never silently fall back to live.

Do not create a provider account, set a recipient, provision credentials, or change environment configuration as part of this specification. Use an independently authorized real Gmail test destination only for later end-to-end tests; do not record its address in repository artifacts.

## Implementation sequence and acceptance

1. Obtain decisions on provider, recipient, privacy/retention, accessibility and spam controls; settle the open issues in the evaluation.
2. Implement mode validation and localized, accessible UI in the existing Astro application. Keep provider code isolated and preserve existing internal links and approved project URL behavior.
3. Add a mock transport and deterministic tests. Update [build verification](../../scripts/verify-build.mjs): its current blanket assertion that no forms exist must become mode-aware. Check no form in `off`, safe mock labeling/no external request in `mock`, and allowlisted endpoint plus required safeguards in authorized `live`; retain all unrelated link, localization, metadata and production data-isolation checks.
4. Validate all eight routes, both languages, responsive/keyboard/JS-disabled states, preview robots and production sitemap using the [test plan](test-plan.md). Build preview and production with their respective settings.
5. Only after separate approval, configure a separate preview provider identifier and execute controlled live delivery/spam tests with synthetic data; verify inbox receipt and reply-to privately. Then seek separate production approval and repeat appropriate release checks.

Release is blocked until real delivery, actual GitHub Pages origin/CORS, provider account/domain support, privacy and retention, CAPTCHA/spam behavior, and owner approval are verified. Live provider testing is not implied by mock success.
