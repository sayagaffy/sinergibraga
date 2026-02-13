import '@testing-library/jest-dom'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (target, prop) => {
      const Component = ({ children, ...props }) => <div {...props}>{children}</div>
      Component.displayName = `motion.${String(prop)}`
      return Component
    }
  }),
  AnimatePresence: ({ children }) => <>{children}</>
}))

// Mock lucide-react with a Proxy to handle any icon import
jest.mock('lucide-react', () => new Proxy({}, {
  get: (target, prop) => {
    if (prop === '__esModule') return true;
    const Component = (props) => <div data-testid={`icon-${String(prop).toLowerCase()}`} {...props} />
    Component.displayName = String(prop)
    return Component
  }
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>,
}))
