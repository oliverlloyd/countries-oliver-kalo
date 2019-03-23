// @flow
import React from 'react';

import {
  Centered,
} from '../../styles/common';

import {
  Container,
} from './styled';


type Props = {
  country: CountryType,
}

const Country = ({country}: Props) => {
  const {
    name,
    code,
    emoji,
  } = country;

  return (
    <Centered>
      <Container>
        {name}, {code} {emoji ? emoji : ''}
      </Container>
    </Centered>
  );
}

export default Country;
