// @flow
import React from 'react';

import { Country } from '../Country';

import {
  Centered,
} from '../../styles/common';


type Props = {
  countries: [CountryType],
}

const List = ({ countries }: Props) => {
  return (
    <>
      <Centered><h3>All the countries</h3></Centered>
      {countries.map(country => (
        <Country key={country.code} country={country} />
      ))}
    </>
  );
}

export default List;
