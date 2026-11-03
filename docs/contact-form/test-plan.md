# Contact form test plan

This plan is for a future implementation. No form, provider account, real delivery, or production release has been tested as part of this documentation task. See the [implementation specification](implementation-spec.md) and [provider evaluation](provider-evaluation.md).

## Automated and local mock checks

- Test all modes and reject invalid configuration: production defaults to `off`, local/preview defaults to clearly marked `mock`, and live requires the correct explicit environment opt-in, provider and public identifier. An unknown value or missing prerequisite must fail closed; production must never silently serve mock as a live contact channel.
- Exercise both languages: labels, required/optional states, valid and invalid email, blank and whitespace-only inputs, 10-character message boundary, maxima and overlength handling, all allowed project types, and safe rendering of text. Verify equivalent English/Thai meaning and correct names/associations.
- Mock success, HTTP failure, `success: false`, invalid JSON, 403, 429, offline, rejected request, timeout/ambiguous delivery, and repeated clicks. Confirm no automatic retries, duplicate in-flight request, false success, loss of entered content on failure, untrusted provider message rendering, or logging of request bodies, tokens, or personal information. Distinguish mock success from delivery.
- Confirm `off` keeps the honest unavailable message. With JavaScript disabled or initialization failing, the form cannot submit and presents an appropriate unavailable state. Verify native form submission cannot bypass the adapter.
- Update `scripts/verify-build.mjs` for mode-aware checks rather than deleting its current no-form assertion without replacement. Keep existing route, URL, metadata and demo/production-isolation checks. Run `pnpm check`, preview build plus `pnpm verify`, and production build plus `pnpm verify` using the pinned project runtime and correct preview environment variables. Verify eight localized routes per build, preview noindex/nofollow/noarchive and no sitemap, production sitemap and no preview concept data or artwork. Inspect built assets for private keys, inbox addresses and accidental personal data.

## Browser and accessibility checks

Use a real browser against the local build at 1440×900, 768×1024, 390×844 and 320px width. Visit Home, Portfolio, About and Contact in English and Thai. Check natural Thai wrapping, no clipped text or horizontal overflow, mobile navigation, internal links, language switching that preserves page context, and no public GitHub profile/repository navigation. Confirm no unexpected external links, console errors or failed assets. Validate optional project destinations separately against the existing URL filter and owner approval.

On Contact use keyboard only, visible focus, meaningful labels and instructions, logical order, field-level error associations, error-summary focus, status announcements, screen-reader-compatible controls and CAPTCHA if enabled. Check zoom and narrow screens; ensure disabled and error states are understandable without color. Verify that a JavaScript-disabled page never submits to a third party. Test loading, offline, error, retry and mock states in both languages with no real personal data.

## Explicitly authorized live integration tests

Only after provider/privacy/spam review and separate owner authorization, use a separately configured preview form/identifier and a consenting, privately supplied Gmail destination. Use synthetic test values; never write the destination, access key, submitted content or CAPTCHA token into committed output. Hosted preview is public even with `noindex`.

1. From the actual GitHub Pages preview origin, confirm provider account/domain approval, TLS, CORS and the documented request/response behavior. No `no-cors` bypass.
2. Confirm the provider reports acceptance, then independently confirm message arrives in the authorized Gmail inbox or spam folder, fields are correct, and reply-to works. Record pass/fail without recording personal data. API success alone is not delivery.
3. Check rejection/rate limiting, quota behavior, server-side honeypot and configured CAPTCHA, including accessible and mobile use. Confirm failed/blocked requests do not produce success messages. Use provider-supported non-disruptive test methods; avoid abusive load.
4. Review retention/deletion, provider plan, exposed public identifiers, provider notification contents and published privacy notice. Confirm no unintended inbox address, credentials or personal data in built files, logs, screenshots or URLs.
5. After the preview passes, obtain separate production authorization and validate its independently configured environment and delivery path. Until then, production stays off and states that contact is unavailable.

Record environment, date, version, locale, viewport, mode and pass/fail for each result; distinguish simulated tests from real inbox delivery. Release requires successful build and browser checks, approved provider/privacy/retention/spam decisions, verified hosted origin and real delivery, and explicit owner approval. A mock test or `noindex` setting alone is never a release approval.
