import '@testing-library/jest-dom'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line no-unused-vars
    const { fill, priority, sizes, quality, ...rest } = props
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />
  },
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...rest }) => {
    const React = require('react')
    return React.createElement('a', { href, ...rest }, children)
  }
}))

// Mock framer-motion
jest.mock('framer-motion', () => {
  const React = require('react')
  const dummyComponent = ({ children, ...props }) => {
    // Filter out motion props
    // eslint-disable-next-line no-unused-vars
    const { whileHover, whileTap, initial, animate, variants, transition, viewport, whileInView, ...validProps } = props
    return React.createElement('div', validProps, children)
  }

  return {
    motion: new Proxy({}, {
      get: () => dummyComponent,
    }),
    AnimatePresence: ({ children }) => children,
  }
})

// Mock lucide-react
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      const React = require('react')
      const Icon = (props) => React.createElement('svg', { ...props, 'data-testid': `icon-${String(prop)}` })
      Icon.displayName = String(prop)
      return Icon
    },
  })
})
