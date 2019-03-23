import React from 'react';


const List = ({ countries }) => {
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
