import '@testing-library/jest-dom'

jest.mock('framer-motion', () => {
  const React = require('react')
  const dummy = new Proxy({}, {
    get: (target, prop) => {
      return React.forwardRef(({ children, ...props }, ref) => {
        const {
          initial, animate, exit, variants, transition, whileHover, whileTap,
          onAnimationStart, onAnimationComplete, viewport,
          ...validProps
        } = props
        return React.createElement(prop, { ...validProps, ref }, children)
      })
    }
  })
  return {
    __esModule: true,
    motion: dummy,
    AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
  }
})

jest.mock('next/image', () => {
    const React = require('react')
    return {
        __esModule: true,
        default: ({ fill, priority, sizes, quality, ...props }) => {
            return React.createElement('img', props)
        },
    }
})

jest.mock('lucide-react', () => {
    const React = require('react')
    return new Proxy({}, {
        get: (target, prop) => {
            return (props) => React.createElement('svg', { ...props, 'data-testid': prop })
        }
    })
})
