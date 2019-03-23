// @flow
import React from 'react';

import { Continent } from '../Continent';

import {
  Centered,
} from '../../styles/common';


type Props = {
  continents: [ContinentType],
}

const List = ({ continents }: Props) => {
  return (
    <>
      <Centered><h3>All the continents</h3></Centered>
      {continents.map(continent => (
        <Continent key={continent.code} continent={continent} />
      ))}
    </>
  );
}

export default List;
