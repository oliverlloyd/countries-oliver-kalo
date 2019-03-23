// @flow
import React from 'react';

import { Continent } from '../Continent';

type Props = {
  continents: [ContinentType],
}

const List = ({ continents }: Props) => {
  console.log(continents)
  return (
    <>
      <h3>All the continents</h3>
      {continents.map(continent => (
        <Continent key={continent.code} continent={continent} />
      ))}
    </>
  );
}

export default List;
