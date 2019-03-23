// @flow
import React from 'react';

import {
  Centered,
} from '../../styles/common';

import {
  Container,
} from './styled';


type Props = {
  continent: ContinentType,
}

const Continent = ({continent}: Props) => {
  const {
    name,
    code
  } = continent;

  return (
    <Centered>
      <Container>
        <div>{name}, {code}</div>
      </Container>
    </Centered>
  );
}

export default Continent;
