## 2026-02-24 - Visible Garbage Text in Production
**Learning:** Found `id="trust-icon-1"` rendering as visible text in the Hero section. This happens when attributes are placed outside the JSX tag but inside the parent element's content. It looks like a bug to users and undermines trust.
**Action:** Always verify JSX structure visually and ensure attributes are inside the opening tag.
