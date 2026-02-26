const React = require('react');

// The proxy must support both default import and named imports
// When importing * as Lucide, it accesses default export.
// When importing { ArrowRight }, it accesses properties on the module.exports object.

const LucideProxy = new Proxy({}, {
  get: (target, prop) => {
    // If accessing default, return the proxy itself so default imports work?
    // Actually, named imports are properties on the export.
    if (prop === '__esModule') return true;
    if (prop === 'default') return LucideProxy;

    // Return a dummy component for any icon import
    const IconMock = React.forwardRef((props, ref) =>
      React.createElement('svg', { ...props, ref, 'data-testid': String(prop) }, null)
    );
    IconMock.displayName = String(prop);
    return IconMock;
  }
});

module.exports = LucideProxy;
