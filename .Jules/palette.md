## 2025-02-18 - Framer Motion & Button Loading States
**Learning:** When adding `isLoading` to Framer Motion components, destructure the prop to prevent it from passing to the DOM (causing React warnings). Also, Framer Motion requires specific mocking strategies in Jest to avoid "Element type is invalid" errors, especially when using `motion.custom` or dot notation components.
**Action:** Always filter custom props before spreading to `motion` components. Use a robust Proxy-based mock for `framer-motion` in `jest.setup.js` to handle all motion components seamlessly in tests.
