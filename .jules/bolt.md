## 2024-05-24 - Hidden Priority Images Download
**Learning:** Images with `priority` and `fill` are downloaded by browsers even if their parent container is `display: none` (e.g. `hidden lg:block`), causing wasted bandwidth on mobile.
**Action:** Always add `sizes` attribute with a `0px` or `1px` slot for breakpoints where the image is hidden (e.g. `(max-width: 1023px) 1px, 50vw`) to force the browser to download a minimal placeholder.
