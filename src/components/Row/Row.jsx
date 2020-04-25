// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Centered,
} from '../../styles/common';

import {
  Container,
} from './styled';


type Props = {
  country: CountryType,
}

const Row = ({country}: Props) => {
  const {
    name,
    code,
    emoji,
  } = country;

  return (
    <Centered>
      <Container>
        <Link to={`/countries/${code}`}>{name}</Link>, {code} {emoji ? emoji : ''}
      </Container>
    </Centered>
  );
}

export default Row;
