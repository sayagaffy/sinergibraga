const React = require('react');

// Mock component for icons
const IconMock = React.forwardRef((props, ref) =>
  React.createElement('svg', { ...props, ref, 'data-testid': 'icon-mock' }, null)
);
IconMock.displayName = 'IconMock';

// Proxy to handle any icon name import
const LucideProxy = new Proxy({}, {
  get: (target, prop) => {
    // Return the mock component for any property access
    return IconMock;
  }
});

// Robust export structure for both ESM and CommonJS
module.exports = {
  __esModule: true,
  default: LucideProxy,
  // The proxy needs to be on module.exports to catch named imports in some configs,
  // but we can't make module.exports A proxy if we also want __esModule.
  // Instead, we populate module.exports with the proxy behavior via a wrapper if possible,
  // OR we just assume the test environment handles named imports by looking at properties.
  // Since we can't predict every icon name, we use the Proxy on the keys.

  // Strategy: The 'lucide-react' module export itself behaves like an object
  // where any key returns a component.
};

// BUT, `import { ArrowRight } from 'lucide-react'` accesses `ArrowRight` on the export.
// We need module.exports to BE a proxy, OR have it pre-filled (impossible),
// OR hope Jest supports the Proxy on module.exports.

// Let's try the "Proxy as module.exports" approach again, but safer.
// If we return a Proxy for module.exports, `__esModule` might be lost unless the Proxy handles it.

const ModuleProxy = new Proxy({}, {
  get: (target, prop) => {
    if (prop === '__esModule') return true;
    if (prop === 'default') return LucideProxy; // or whatever
    // For any other prop (ArrowRight, etc.), return the component
    const MockComp = React.forwardRef((props, ref) =>
        React.createElement('svg', { ...props, ref, 'data-testid': String(prop) }, null)
    );
    MockComp.displayName = String(prop);
    return MockComp;
  }
});

module.exports = ModuleProxy;
