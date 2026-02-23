const React = require('react');

const motion = new Proxy({}, {
  get: (_target, prop) => {
    return ({ children, ...props }) => {
      const validProps = Object.keys(props).reduce((acc, key) => {
        if (!['initial', 'animate', 'exit', 'transition', 'whileHover', 'whileTap', 'variants', 'viewport', 'whileInView'].includes(key)) {
          acc[key] = props[key];
        }
        return acc;
      }, {});
      return React.createElement(prop, validProps, children);
    }
  }
});

const AnimatePresence = ({ children }) => children;

module.exports = {
  __esModule: true,
  motion,
  AnimatePresence,
};
