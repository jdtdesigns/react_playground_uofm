const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
  }

  type Todo {
    _id: String!
    todo_text: String!
  }

  type Auth {
    user: User
    token: ID
  }

  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addTodo(todo_text: String!): Todo
  }
`;

module.exports = typeDefs;