// @flow
import React from 'react';


type Props = {
  continent: ContinentType,
}

const Continent = ({continent}: Props) => {
  const {
    name,
    code
  } = continent;

  return <div>{name}, {code}</div>;
}

export default Continent;
