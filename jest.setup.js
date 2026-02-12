import '@testing-library/jest-dom'

// Mock IntersectionObserver
class IntersectionObserver {
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
}
window.IntersectionObserver = IntersectionObserver;

// Mock ResizeObserver
class ResizeObserver {
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
}
window.ResizeObserver = ResizeObserver;

// Mock window.scrollTo
window.scrollTo = jest.fn();

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ fill, priority, ...props }) => <img {...props} alt={props.alt || ''} />,
}));

// Mock framer-motion
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    __esModule: true,
    ...actual,
    AnimatePresence: ({ children }) => children,
    motion: new Proxy({}, {
      get: (target, prop) => {
        return ({ children, ...props }) => {
           // Remove props that are specific to framer-motion and might cause React warnings on div
           const { initial, animate, exit, variants, transition, whileHover, whileInView, viewport, layoutId, ...validProps } = props;
           return (
            <div data-testid={`motion-${prop}`} {...validProps}>
              {children}
            </div>
          );
        };
      },
    }),
  };
});

// Mock lucide-react
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      if (prop === '__esModule') return true;
      // Return a functional component for any icon
      const Icon = (props) => <svg data-testid={`icon-${String(prop)}`} {...props} />;
      Icon.displayName = String(prop);
      return Icon;
    }
  });
});
