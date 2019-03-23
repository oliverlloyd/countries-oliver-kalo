import gql from 'graphql-tag';

export default gql`
  query FetchCountries {
    countries {
      code
      name
      continent {
        name
      }
      emoji
    }
  }
`;
