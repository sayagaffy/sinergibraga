const React = require('react');

const motion = new Proxy({}, {
  get: (target, prop) => {
    return React.forwardRef(({ children, ...props }, ref) => {
      // Filter out motion-specific props to avoid React warnings and errors
      const {
        initial,
        animate,
        exit,
        transition,
        variants,
        whileHover,
        whileTap,
        whileInView,
        viewport,
        ...domProps
      } = props;

      // If the prop is a standard HTML tag, render it
      // Otherwise render a div (fallback)
      const Component = prop;

      return React.createElement(Component, { ...domProps, ref }, children);
    });
  }
});

module.exports = {
  motion,
  AnimatePresence: ({ children }) => children,
};
