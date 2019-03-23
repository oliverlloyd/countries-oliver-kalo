// @flow
import React from 'react';


type Props = {
  country: CountryType,
}

const Country = ({country}: Props) => {
  console.log('cou', country)
  const {
    name,
    code,
  } = country;

  return <div>{name}, {code}</div>;
}

export default Country;
