import '@testing-library/jest-dom'

// Mock framer-motion to avoid issues with JSDOM
jest.mock('framer-motion', () => {
  const React = require('react')
  const motion = new Proxy(
    {},
    {
      get: (_target, key) => {
        return React.forwardRef(({ children, ...props }, ref) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { whileTap, whileHover, viewport, initial, animate, transition, variants, ...rest } = props
          return React.createElement(key, { ref, ...rest }, children)
        })
      },
    }
  )

  return {
    motion,
    AnimatePresence: ({ children }) => <>{children}</>,
  }
})
