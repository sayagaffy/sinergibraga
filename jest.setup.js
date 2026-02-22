import '@testing-library/jest-dom'
import React from 'react'

// Mock framer-motion
jest.mock('framer-motion', () => {
  const React = require('react')
  const actual = jest.requireActual('framer-motion')
  return {
    __esModule: true,
    ...actual,
    motion: new Proxy({}, {
      get: (target, prop) => {
        return React.forwardRef(({ children, ...props }, ref) => {
          // Filter out motion-specific props
          const {
            initial, animate, exit, variants, transition,
            whileHover, whileTap, whileFocus, whileDrag,
            onAnimationStart, onAnimationComplete,
            layout, layoutId,
            ...validProps
          } = props
          return React.createElement(prop, { ...validProps, ref }, children)
        })
      }
    }),
    AnimatePresence: ({ children }) => {
      return React.createElement(React.Fragment, null, children)
    },
  }
})

// Mock lucide-react
jest.mock('lucide-react', () => {
  const React = require('react')
  return new Proxy({}, {
    get: (target, prop) => {
      // Return a simple component for any icon
      const Icon = React.forwardRef((props, ref) => React.createElement('svg', { ...props, ref, 'data-testid': `icon-${String(prop)}` }))
      Icon.displayName = String(prop)
      return Icon
    }
  })
})

// Mock next/image
jest.mock('next/image', () => {
  const React = require('react')
  return {
    __esModule: true,
    default: (props) => {
      // Filter out Next.js specific props
      const { fill, priority, sizes, quality, ...rest } = props
      return React.createElement('img', rest)
    },
  }
})

// Mock next/link
jest.mock('next/link', () => {
  const React = require('react')
  return {
    __esModule: true,
    default: ({ children, href, ...props }) => {
      return React.createElement('a', { href, ...props }, children)
    },
  }
})
