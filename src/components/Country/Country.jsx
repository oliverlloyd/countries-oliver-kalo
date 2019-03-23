// @flow
import React from 'react';


type Props = {
  country: CountryType,
}

const Country = ({country}: Props) => {
  const {
    name,
    code,
    emoji,
  } = country;

  return <div>{name}, {code} {emoji ? emoji : ''}</div>;
}

export default Country;
