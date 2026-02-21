import React from 'react'
import '@testing-library/jest-dom'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  __esModule: true,
  AnimatePresence: ({ children }) => <>{children}</>,
  motion: new Proxy({}, {
    get: (target, prop) => {
      return ({ children, ...props }) => {
        const {
          initial, animate, exit, variants, transition,
          whileHover, whileTap, viewport, ...validProps
        } = props
        const Component = prop
        return <Component {...validProps}>{children}</Component>
      }
    }
  })
}))

// Mock lucide-react
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      const Icon = (props) => <svg {...props} data-testid={`icon-${String(prop)}`} />
      Icon.displayName = String(prop)
      return Icon
    }
  })
})

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line no-unused-vars
    const { fill, priority, sizes, quality, ...rest } = props
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...rest} />
  },
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...rest }) => {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  },
}))
