const React = require('react')
require('@testing-library/jest-dom')

// Global mock for framer-motion components
jest.mock('framer-motion', () => {
  const React = require('react')

  // Helper to create a dummy component for any motion element
  const createMockComponent = (type) => React.forwardRef(({ children, whileHover, whileTap, ...props }, ref) => {
    // Filter out props that shouldn't be passed to DOM
    return React.createElement(type, { ...props, ref }, children)
  })

  return {
    motion: {
      div: createMockComponent('div'),
      section: createMockComponent('section'),
      header: createMockComponent('header'),
      footer: createMockComponent('footer'),
      nav: createMockComponent('nav'),
      main: createMockComponent('main'),
      article: createMockComponent('article'),
      aside: createMockComponent('aside'),
      h1: createMockComponent('h1'),
      h2: createMockComponent('h2'),
      h3: createMockComponent('h3'),
      h4: createMockComponent('h4'),
      h5: createMockComponent('h5'),
      h6: createMockComponent('h6'),
      p: createMockComponent('p'),
      span: createMockComponent('span'),
      button: createMockComponent('button'),
      a: createMockComponent('a'),
      img: createMockComponent('img'),
      ul: createMockComponent('ul'),
      li: createMockComponent('li'),
      form: createMockComponent('form'),
      label: createMockComponent('label'),
      input: createMockComponent('input'),
      textarea: createMockComponent('textarea'),
    },
    AnimatePresence: ({ children }) => <>{children}</>,
  }
})

// Global mock for next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Global mock for next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>,
}))

// Global mock for lucide-react to prevent icon errors
jest.mock('lucide-react', () => {
  const React = require('react')
  return new Proxy({}, {
    get: (target, prop) => {
      // Return a dummy component for any icon
      const Icon = (props) => React.createElement('div', { ...props, 'data-testid': `icon-${String(prop).toLowerCase()}` })
      Icon.displayName = String(prop)
      return Icon
    }
  })
})
