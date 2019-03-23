// @flow
import React from 'react';


type Props = {
  country: CountryType,
}

const Country = ({country}: Props) => {
  const {
    name,
    code,
  } = country;

  return <div>{name}, {code}</div>;
}

export default Country;
