import '@testing-library/jest-dom'
import React from 'react'

// Global mock for framer-motion
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion')
  return {
    ...actual,
    AnimatePresence: ({ children }) => children,
    motion: new Proxy(
      {},
      {
        get: (_target, prop) => {
          return React.forwardRef(({ children, ...props }, ref) => {
            // Filter out motion-specific props to avoid React warnings
            const {
              initial, animate, exit, variants, transition,
              whileHover, whileTap, whileFocus, whileDrag,
              viewport, ...validProps
            } = props;
            return React.createElement(prop, { ...validProps, ref }, children)
          })
        },
      }
    ),
  }
})

// Global mock for lucide-react
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      const Component = (props) => {
        return React.createElement('div', {
          'data-testid': `icon-${String(prop).replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`,
          ...props
        });
      };
      Component.displayName = String(prop);
      return Component;
    }
  });
});
