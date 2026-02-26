const React = require('react');

const dummy = React.forwardRef(({ children, ...props }, ref) => {
  // Filter out motion-specific props
  const { initial, animate, exit, transition, variants, whileHover, whileTap, ...validProps } = props;
  return React.createElement('div', { ...validProps, ref }, children);
});

module.exports = {
  motion: new Proxy({}, {
    get: (target, prop) => {
      return dummy;
    }
  }),
  AnimatePresence: ({ children }) => children,
};
