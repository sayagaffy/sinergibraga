const React = require('react');

const LucideIcon = React.forwardRef(({ ...props }, ref) => {
  return React.createElement('svg', { ref, ...props });
});

module.exports = new Proxy({}, {
  get: (target, prop) => {
    return LucideIcon;
  }
});
