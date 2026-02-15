import '@testing-library/jest-dom'

// Global mock for framer-motion
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: new Proxy({}, {
      get: (_, prop) => {
        return React.forwardRef(({ children, ...props }, ref) => {
          // Filter out framer-motion specific props to avoid React warnings
          const {
            whileHover,
            whileTap,
            whileInView,
            initial,
            animate,
            exit,
            transition,
            variants,
            viewport,
            layoutId,
            ...validProps
          } = props

          // Render the actual HTML element (e.g., motion.button -> button)
          const Component = typeof prop === 'string' ? prop : 'div';

          return React.createElement(
            Component,
            {
              ...validProps,
              ref,
              'data-testid': `motion-${String(prop)}`
            },
            children
          )
        })
      }
    }),
    useAnimation: () => ({
      start: jest.fn(),
      set: jest.fn(),
    }),
    AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
  }
})

// Global mock for lucide-react
jest.mock('lucide-react', () => {
  const React = require('react');
  return new Proxy({}, {
    get: (_, iconName) => {
      const IconComponent = React.forwardRef(({ className, ...props }, ref) => (
        React.createElement('svg', {
          ref,
          'data-testid': `lucide-${String(iconName)}`,
          className,
          ...props
        })
      ))
      IconComponent.displayName = String(iconName)
      return IconComponent
    }
  })
})

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    const React = require('react');
    const { fill, priority, ...rest } = props
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement('img', { ...rest, alt: props.alt });
  },
}));

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => {
    const React = require('react');
    return React.createElement('a', { href }, children);
  },
}));
