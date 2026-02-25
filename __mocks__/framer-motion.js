const React = require('react');

const actual = jest.requireActual('framer-motion');

const MotionComponent = React.forwardRef(({ children, ...props }, ref) => {
  // Filter out motion-specific props that might cause issues in DOM
  const { initial, animate, transition, variants, whileHover, whileTap, viewport, ...validProps } = props;
  return React.createElement('div', { ref, ...validProps }, children);
});

const motion = new Proxy({}, {
  get: (target, prop) => {
    return MotionComponent;
  }
});

module.exports = {
  ...actual,
  motion,
  AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
};
