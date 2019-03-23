import React from 'react';

import { storiesOf } from '@storybook/react';

import Country from './Country';

var country = {
  code: 'UK',
  name: "United Kingdom",
};

storiesOf('Country', module)
  .add('with no emoji', () => (
    <Country
      country={country}
    />
  ));