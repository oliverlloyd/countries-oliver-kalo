// @flow
import React from 'react';

import {
  Centered,
} from '../../styles/common';


type Props = {
  loading?: boolean,
  error?: string,
  country: CountryType,
}

const Country = ({country, loading, error}: Props) => {
  if (loading) return "Loading spinner with better css...";
  if (error) return `Error is: ${error}`;
  if (!country) return 'What we do for not country goes here';

  const {
    name,
    code,
    currency,
  } = country;

  return (
    <Centered>
      <div>{name}, {code}, {currency}</div>
    </Centered>
  );
}

export default Country;
