import { gql } from '@apollo/client';

export const DATABASES_QUERY = gql`
  query Databases {
    getAll {
      _id
      database_name
    }
  }
`;
