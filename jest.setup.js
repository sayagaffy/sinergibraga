import '@testing-library/jest-dom'
import React from 'react'

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, priority, sizes, quality, ...props }) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock Next.js Link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>,
}))

// Global mock for lucide-react
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      const Component = (props) => <div data-testid={`icon-${String(prop).toLowerCase()}`} {...props} />
      Component.displayName = `Lucide${String(prop)}`
      return Component
    }
  })
})

// Global mock for framer-motion
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion')
  return {
    ...actual,
    motion: new Proxy({}, {
        get: (target, prop) => {
            return React.forwardRef(({ children, whileHover, whileTap, initial, animate, transition, viewport, ...props }, ref) => {
                const Component = prop
                return <Component ref={ref} {...props}>{children}</Component>
            })
        }
    }),
    AnimatePresence: ({ children }) => <>{children}</>
  }
})
