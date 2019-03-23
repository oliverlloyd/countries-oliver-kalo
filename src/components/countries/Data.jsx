import React from 'react';
import { Query } from "react-apollo";

import { FetchCountries } from '../../apollo/queries';

import List from './List';


const Data = () => {
  return (
    <Query query={FetchCountries}>
      {({ loading, error, data }) => {
        if (loading) return "Loading..";
        if (error) return `Error! ${error.message}`;

        return <List countries={data.countries}/>;
      }}
    </Query>
  )
}

export default Data;
