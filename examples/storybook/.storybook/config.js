import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    storySort: (a, b) => {
      if (a[1].kind === 'Welcome') {
        return -1;
      }

      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true });
    },
  },
});

const req = require.context('../stories', true, /.stories.js$/);
configure(req, module);
