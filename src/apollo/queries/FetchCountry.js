import gql from 'graphql-tag';

export default gql`
  query FetchCountry($code: String) {
    country(code: $code) {
      code
      name
      emoji
      currency
      native
    }
  }
`;
