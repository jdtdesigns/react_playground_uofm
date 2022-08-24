const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Database {
    _id: ID
    database_name: String
  }

  type User {
    _id: ID!
    email: String!
    password: String!
  }

  type Query {
    hi: String
    garf: String
    getAll: [Database]
    getOne(id: ID): Database
  }

  type Mutation {
    addDatabase(database_name: String!): Database
    addUser(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;