import '@testing-library/jest-dom'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: new Proxy({}, {
    get: (_target, prop) => {
      const Component = ({ children, ...props }) => {
        // Filter out framer-motion specific props that might cause warnings
        const {
          initial, animate, transition, variants, whileHover, whileTap, exit,
          ...validProps
        } = props

        // If prop is a string (e.g. 'div', 'button'), use it as the tag
        const Tag = typeof prop === 'string' ? prop : 'div'

        return <Tag {...validProps}>{children}</Tag>
      }
      Component.displayName = `MotionComponent(${String(prop)})`
      return Component
    }
  }),
  AnimatePresence: ({ children }) => <>{children}</>,
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    const { fill, priority, ...rest } = props
    return <img {...rest} />
  },
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

// Mock lucide-react
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      const IconComponent = ({ 'data-testid': testId, ...props }) => {
        return (
          <svg
            {...props}
            data-testid={testId || `icon-${String(prop)}`}
            className={`lucide lucide-${String(prop).toLowerCase()} ${props.className || ''}`}
          />
        );
      };
      IconComponent.displayName = `LucideIcon(${String(prop)})`;
      return IconComponent;
    },
  });
});
