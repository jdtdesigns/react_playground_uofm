const { User, Todo } = require('../models');
const { signToken } = require('../auth');
const { ApolloError } = require('apollo-server-express');

const resolvers = {
  Query: {
    async getTodos(a, b, c) {
      console.log(a, b, c);
      return await Todo.find();
    }
  },

  Mutation: {
    async addUser(_, { email, password }, context) {
      try {
        const user = await User.create({ email, password });

        const token = signToken(user);
        return { user, token };

      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async addTodo(_, args) {
      return await Todo.create(args);
    }
  }
};

module.exports = resolvers;