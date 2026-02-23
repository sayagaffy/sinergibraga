const React = require('react');

module.exports = new Proxy({}, {
  get: (target, prop) => {
    if (prop === '__esModule') return true;
    if (prop === 'default') return undefined;
    return (props) => React.createElement('svg', { 'data-testid': `icon-${String(prop)}`, ...props });
  }
});
