// @flow
import React from 'react';

import { Country } from '../Country';


type Props = {
  countries: [CountryType],
}

const List = ({ countries }: Props) => {
  return (
    <>
      <h3>All the countries</h3>
      {countries.map(country => (
        <Country key={country.code} country={country} />
      ))}
    </>
  );
}

export default List;
