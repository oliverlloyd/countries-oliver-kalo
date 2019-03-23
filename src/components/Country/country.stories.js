import React from 'react';

import { storiesOf } from '@storybook/react';

import Country from './Country';

var uk_without_emoji = {
  code: 'UK',
  name: "United Kingdom",
};

var uk_with_emoji = {
  code: 'UK',
  name: "United Kingdom",
  emoji: "🇬🇧",
};

storiesOf('Country', module)
  .add('with no emoji', () => (
    <Country
      country={uk_without_emoji}
    />
  ))

  .add('with emoji', () => (
    <Country
      country={uk_with_emoji}
    />
  ));