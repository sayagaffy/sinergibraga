const React = require('react');

// Mock for framer-motion components
const MotionMock = React.forwardRef(({ children, ...props }, ref) => {
  // Filter out motion-specific props
  const {
    initial, animate, exit, transition, variants, whileHover, whileTap,
    viewport, layout, layoutId, onAnimationComplete, onLayoutAnimationComplete,
    ...validProps
  } = props;
  return React.createElement('div', { ...validProps, ref }, children);
});

MotionMock.displayName = 'MotionMock';

// Jest mock export structure
// We export everything directly on module.exports for require() compatibility
// AND we simulate ES module exports for import statements.

module.exports = {
  __esModule: true,
  motion: new Proxy({}, {
    get: (target, prop) => {
      // Return a valid component for any accessed property on 'motion'
      // This covers motion.div, motion.button, motion.section, etc.
      return MotionMock;
    }
  }),
  AnimatePresence: ({ children }) => children,
};
