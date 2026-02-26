const React = require('react');

module.exports = new Proxy({}, {
  get: (target, prop) => {
    // Return a dummy component for any icon import
    const IconMock = (props) => React.createElement('svg', { ...props, 'data-testid': prop }, null);
    IconMock.displayName = String(prop);
    return IconMock;
  }
});
