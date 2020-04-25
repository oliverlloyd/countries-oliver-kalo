import React from 'react';

import { storiesOf } from '@storybook/react';

import Country from './Country';


const UK = {
  code: 'UK',
  name: "United Kingdom",
  emoji: "🇬🇧",
  currency: "GBP",
};

storiesOf('Country', module)
  .add('of UK', () => (
    <Country
      country={UK}
    />
  ))
  
  .add('when loading', () => (
    <Country
      loading={true}
    />
  ));
