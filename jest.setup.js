import '@testing-library/jest-dom'
import React from 'react'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    const { fill, priority, sizes, quality, ...rest } = props
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

// Mock lucide-react
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      // eslint-disable-next-line react/display-name
      const IconComponent = (props) => <svg {...props} data-testid={`icon-${String(prop)}`} />
      IconComponent.displayName = String(prop)
      return IconComponent
    }
  })
})

// Mock framer-motion
jest.mock('framer-motion', () => {
  return {
    __esModule: true,
    motion: new Proxy({}, {
      get: (target, prop) => {
        if (typeof prop !== 'string') {
          return target[prop]
        }
        // eslint-disable-next-line react/display-name
        const MotionComponent = ({ children, ...props }) => {
           // Filter motion props to avoid warnings
           // eslint-disable-next-line no-unused-vars
           const { initial, animate, exit, variants, transition, whileInView, whileHover, whileTap, viewport, layoutId, ...rest } = props
           const Component = prop
           return <Component {...rest}>{children}</Component>
        }
        return MotionComponent
      }
    }),
    AnimatePresence: ({ children }) => <>{children}</>,
  }
})
