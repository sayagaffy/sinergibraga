## 2024-05-23 - Contact Form Loading State
**Learning:** Adding a visible loading state (spinner + disabled) to async actions like form submission significantly improves perceived performance and prevents duplicate submissions. The Lucide `Loader2` icon is a standard pattern in this repo.
**Action:** Always check async buttons for loading states and implement them using the `isLoading` prop pattern.
