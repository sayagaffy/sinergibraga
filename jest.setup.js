import '@testing-library/jest-dom'

jest.mock('framer-motion', () => ({
    motion: {
        div: require('react').forwardRef(({ children, ...props }, ref) => (
            <div ref={ref} {...props}>
                {children}
            </div>
        )),
        button: require('react').forwardRef(({ children, ...props }, ref) => (
            <button ref={ref} {...props}>
                {children}
            </button>
        )),
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}))
