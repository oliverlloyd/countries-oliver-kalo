// @flow
import React from 'react';


type Props = {
  continents: [Continent],
}

const List = ({ continents }: Props) => {
  return (
    <>
      <h3>All the continents</h3>
      {continents.map(continent => (
        <div key={continent.code}>
          {continent.name}
        </div>
      ))}
    </>
  );
}

export default List;
