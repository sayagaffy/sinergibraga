import '@testing-library/jest-dom'

// Mock for next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock for next/link
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

// Mock for framer-motion
jest.mock('framer-motion', () => ({
  __esModule: true,
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        const Component = ({ children, ...props }) => {
            // Remove framer-motion specific props
            const {
                initial, animate, exit, variants, transition,
                whileHover, whileTap, whileInView, viewport,
                ...validProps
            } = props;
            return <div {...validProps} data-testid={`motion-${String(prop)}`}>{children}</div>
        }
        Component.displayName = `motion.${String(prop)}`
        return Component
      },
    }
  ),
  AnimatePresence: ({ children }) => <>{children}</>,
}))

// Mock for lucide-react (icons)
jest.mock('lucide-react', () => {
  return new Proxy(
    {},
    {
      get: (_target, prop) => {
        // prop is the icon name, e.g. "ShieldCheck"
        const IconMock = (props) => <svg {...props} data-testid={`icon-${String(prop)}`} />
        IconMock.displayName = String(prop)
        return IconMock
      },
    }
  )
})
