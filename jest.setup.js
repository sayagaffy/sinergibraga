import '@testing-library/jest-dom'
import React from 'react'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // Filter out Next.js specific props that don't belong on img tag
    const { fill, priority, sizes, quality, ...rest } = props
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />
  },
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

// Mock framer-motion
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion')
  return {
    __esModule: true,
    ...actual,
    AnimatePresence: ({ children }) => <>{children}</>,
    motion: new Proxy(
      {},
      {
        get: (target, prop) => (props) => {
          // Filter out motion-specific props
          const {
            initial,
            animate,
            exit,
            variants,
            transition,
            whileHover,
            whileTap,
            viewport,
            ...rest
          } = props

          // If prop is a string (e.g. "div"), use it as component
          // If prop is "custom", it returns a function that returns the component factory,
          // but usually motion.div is enough.
          const Component = prop
          return <Component {...rest} />
        },
      }
    ),
  }
})

// Mock lucide-react
jest.mock('lucide-react', () => {
  return new Proxy(
    {},
    {
      get: (target, prop) => (props) => {
        return <svg {...props} data-testid={`icon-${String(prop)}`} />
      },
    }
  )
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() { return null }
  unobserve() { return null }
  disconnect() { return null }
}

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
