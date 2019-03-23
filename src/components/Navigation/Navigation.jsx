// @flow
import React from 'react';
import { Link } from "react-router-dom";

import {
  Centered,
} from '../../styles/common';


const Navigation = () => {
  return (
    <Centered>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/continents/">Continents</Link>
        </li>
        <li>
          <Link to="/countries/">Countries</Link>
        </li>
      </ul>
    </Centered>
  );
}

export default Navigation;
