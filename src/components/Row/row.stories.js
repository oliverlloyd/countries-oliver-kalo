import React from 'react';

import { storiesOf } from '@storybook/react';

import Row from './Row';

var uk_without_emoji = {
  code: 'UK',
  name: "United Kingdom",
};

var uk_with_emoji = {
  code: 'UK',
  name: "United Kingdom",
  emoji: "🇬🇧",
};

storiesOf('Row', module)
  .add('with no emoji', () => (
    <Row
      country={uk_without_emoji}
    />
  ))

  .add('with emoji', () => (
    <Row
      country={uk_with_emoji}
    />
  ));