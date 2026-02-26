const React = require('react');

const LucideProxy = new Proxy({}, {
  get: (target, prop) => {
    // If accessing "default", return the proxy itself so default imports also work
    if (prop === 'default') return LucideProxy;
    if (prop === '__esModule') return true;

    // Return a functional component for any icon name
    return (props) => React.createElement('svg', { ...props, 'data-testid': `lucide-${prop}` });
  }
});

module.exports = LucideProxy;
