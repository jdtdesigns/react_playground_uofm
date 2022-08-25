import { gql } from '@apollo/client';

export const ADD_DATABASE = gql`
  mutation addDatabase($database_name: String!) {
    addDatabase(database_name: $database_name) {
      _id
      database_name
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      email
    }
  }
`;