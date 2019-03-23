// @flow
import React from 'react';


type Props = {
  countries: [Country],
}

const List = ({ countries }: Props) => {
  return (
    <>
      <h3>All the countries</h3>
      {countries.map(country => (
        <div key={country.code}>
          {country.name}
        </div>
      ))}
    </>
  );
}

export default List;
