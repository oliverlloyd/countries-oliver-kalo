import gql from 'graphql-tag';

export default gql`
  query FetchContinents {
    continents {
      code
      name
      countries {
        code
        name
        continent {
          name
        }
        emoji
      }
    }
  }
`;
