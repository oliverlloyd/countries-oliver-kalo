import { configure } from '@storybook/react';

/**
 * https://github.com/storybooks/storybook/issues/5183
 * 
 * Used `yarn add --dev babel-loader` to workaround the above issue. Once this is
 * resolved that package should be removed from dev dependencies.
 */

// Import all files ending in *.stories.js(x)
const req = require.context('../src', true, /.stories.jsx?$/);
configure(() => req.keys().forEach(req), module);
