## 2024-05-23 - [Icon Library Mocks in Jest]
**Learning:** `lucide-react` components used in `jest` tests with a global Proxy mock can conflict with local mocks that return static objects. If a component uses an icon not defined in the local mock, it will be `undefined` and cause rendering errors.
**Action:** Always prefer global mocks for icon libraries or ensure local mocks cover ALL used icons.
