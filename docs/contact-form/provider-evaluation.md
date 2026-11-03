# Contact form provider evaluation

Reviewed 2026-11-03 using provider documentation; no account was created and no submission or origin/CORS test was performed. Prices and limits can change. The decision below is a recommendation for investigation, not approval to transmit personal data or publish a form.

| Criterion | Web3Forms — primary candidate | Formspree — fallback candidate |
| --- | --- | --- |
| Static site | Documented browser API at `https://api.web3forms.com/submit`; actual GitHub Pages origin and account/domain acceptance remain untested. | Documented AJAX submissions to a form-specific HTTPS endpoint; actual GitHub Pages origin and chosen account remain untested. |
| Public identifier | Access key is sent from the browser and is therefore public; protect account and private secrets separately. | Form ID in the form endpoint is public; administrative API keys are secrets and must never be embedded. |
| Free tier at review | Pricing lists 250 submissions/month, subject to current terms and account eligibility; reaching the limit can stop submissions until reset. | Documentation lists 50 submissions/month on Free. Review the current terms, limits, and consequences in the selected account. |
| Spam | Published options include honeypot and hCaptcha; domain restrictions and some CAPTCHA alternatives are paid features. Confirm actual account/plan behavior and accessible completion. | Honeypot is documented; CAPTCHA and rate limits exist, but verify their actual plan, trigger behavior and accessible completion. |
| Retention | Published sources conflict: FAQ says submissions are not stored, whereas current pricing and terms describe dashboard history and retention. Obtain written clarification for the actual account, plan, deletion and subprocessors before approval. | Free plan documentation lists 30-day submission history; confirm current retention, deletion, privacy and processor terms for the selected account. |
| Delivery | Email notification and reply-to are documented; inbox delivery, deliverability, spam placement, sender identity and a real reply must be tested with an authorized recipient. | Same real delivery and reply-to checks required. |

Primary references: [Web3Forms API reference](https://docs.web3forms.com/getting-started/api-reference), [troubleshooting and CORS](https://docs.web3forms.com/getting-started/troubleshooting), [pricing](https://web3forms.com/pricing), [paid features](https://docs.web3forms.com/getting-started/pro-features), [FAQ](https://docs.web3forms.com/getting-started/faq), [terms](https://web3forms.com/terms); [Formspree AJAX](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax/), [account limits](https://help.formspree.io/articles/account-management/account-limits/), [system limits](https://help.formspree.io/articles/form-and-project-settings/system-limits), [honeypot](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering), [reCAPTCHA settings](https://help.formspree.io/articles/form-and-project-settings/recaptcha-settings/), [reply-to](https://help.formspree.io/articles/building-your-form/email-reply-to-address/), and [API keys](https://help.formspree.io/articles/the-forms-api/api-keys).

Web3Forms explicitly warns that some free subdomains may not be approved. GitHub Pages support must therefore be checked for the actual origin and account, not inferred from generic static-site support. Verify browser CORS using the real hosted origin, without bypassing CORS or treating an opaque response as success. Formspree's documented AJAX example references its helper library; do not add a dependency without review. Verify native `fetch` behavior, JSON/error handling and CAPTCHA requirements for the chosen fallback before adopting it.

## Risk register and release decisions

| Risk | Mitigation and unresolved decision |
| --- | --- |
| Inquiries never reach recipient despite API acceptance | Test a synthetic submission through the actual hosted origin into an independently authorized Gmail inbox; inspect spam and reply-to. Provider success alone is insufficient. |
| Public identifier abused or quota exhausted | Rate-limit where available; verify server-side honeypot/CAPTCHA and accessible fallback; evaluate domain restriction and plan costs. Public identifiers are not secrets, and restrictions are not authentication. |
| Provider retention or international processing conflicts with privacy commitments | Resolve contradictory Web3Forms statements in writing, inspect account settings/terms and subprocessors, determine deletion and approved notice. Block live mode until owner/legal review. |
| CAPTCHA blocks real users | Test keyboard, assistive technology, mobile and fallback in both languages. Approve an accessible alternative and support process before launch. |
| Preview used for real inquiries or public identifier spam | Default preview to mock; clearly label it. A separate, expressly authorized preview live integration uses separate provider configuration and synthetic data only. `noindex` does not make the preview private. |
| CORS/domain unsupported or plan changes | Test actual origin and provider account. Keep form off; assess Formspree separately rather than silently switching. |
| Exposed inbox or credentials | Never store recipient address or private credentials in source/browser output; inspect built assets and provider response/configuration before launch. Avoid logging personal data. |
| Ambiguous timeout and duplicate submissions | Preserve input, explain uncertainty, prevent concurrent sends, no automatic retry; provider acceptance does not guarantee delivery. |

Owners must approve provider, plan, authorized destination, privacy copy/retention, spam policy, preview live test, and production launch separately. No live integration should be enabled merely by selecting a candidate.
