import React from 'react';
import { Query } from "react-apollo";
import { withRouter } from 'react-router-dom';

import { FetchCountry } from '../../apollo/queries';

import Country from './Country';


type Props = {
  match: Object,
}

const Data = ({ match }: Props) => {
  const code = match && match.params && match.params.code || '';

  return (
    <Query
      query={FetchCountry}
      variables={{
        code,
      }}
    >
      {({ loading, error, data }) => {
        return <Country
          country={data && data.country}
          loading={loading}
          error={error && error.message}
        />;
      }}
    </Query>
  )
}

export default withRouter(Data);
