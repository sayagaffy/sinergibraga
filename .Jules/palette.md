# Palette's Journal

## 2026-02-14 - Standardized Async Button State
**Learning:** Implemented a reusable `isLoading` prop on the core `Button` component that handles disabled state and spinner rendering. This enforces consistent feedback for async actions (like form submissions) without repetitive logic in parent components.
**Action:** Use `isLoading` prop on `Button` for all async operations to maintain UX consistency and accessibility.
