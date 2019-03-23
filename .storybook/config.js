import { configure } from '@storybook/react';

/**
 * https://github.com/storybooks/storybook/issues/5183
 * 
 * Used `yarn add --dev babel-loader` to workaround the above issue. Once this is
 * resolved that package should be removed from dev dependencies.
 */

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
