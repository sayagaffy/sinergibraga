import '@testing-library/jest-dom'
import React from 'react'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // Filter out Next.js specific props
    const { fill, priority, sizes, quality, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...imgProps} />
  },
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  },
}))

// Mock framer-motion
jest.mock('framer-motion', () => {
  const motionProxy = new Proxy({}, {
    get: (target, prop) => {
      return React.forwardRef(({ children, ...props }, ref) => {
        const {
          initial, animate, exit, transition, variants,
          whileHover, whileTap, whileInView, viewport,
          ...domProps
        } = props;
        const Component = prop;
        return React.createElement(Component, { ...domProps, ref }, children);
      });
    }
  });
  return {
    __esModule: true,
    motion: motionProxy,
    AnimatePresence: ({ children }) => children,
  };
})

// Mock lucide-react
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      if (prop === 'default') return target;
      if (prop === '__esModule') return true;
      return (props) => React.createElement('svg', { ...props, 'data-testid': `lucide-${prop}` });
    }
  });
})
