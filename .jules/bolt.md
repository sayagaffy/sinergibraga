## 2024-05-23 - Jest Mocks & Image Optimization
**Learning:** Jest integration tests fail with "Element type is invalid" when libraries like `lucide-react` or `framer-motion` are not globally mocked, especially when mixed with `next/image` which also needs explicit mocking in `jest.setup.js` if `next/jest` doesn't fully cover it in custom environments.
**Action:** Always verify `jest.setup.js` includes mocks for `next/image` and create global Proxy mocks for icon libraries to ensure tests run smoothly.
