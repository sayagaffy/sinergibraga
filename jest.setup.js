import '@testing-library/jest-dom'
import React from 'react'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    const { fill, priority, sizes, quality, ...rest } = props
    return <img {...rest} />
  },
}))

// Mock framer-motion
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion')
  return {
    __esModule: true,
    ...actual,
    motion: new Proxy({}, {
      get: (target, prop) => {
        return ({ children, whileHover, whileTap, initial, animate, exit, variants, transition, ...props }) => {
          return React.createElement(prop, props, children)
        }
      }
    }),
    AnimatePresence: ({ children }) => <>{children}</>,
  }
})

// Mock lucide-react
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      const Icon = (props) => <div data-testid={`icon-${String(prop).toLowerCase()}`} {...props} />
      Icon.displayName = String(prop)
      return Icon
    }
  })
})
