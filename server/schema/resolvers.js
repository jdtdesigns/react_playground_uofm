const { User, Todo } = require('../models');
const { signToken } = require('../auth');
const { ApolloError } = require('apollo-server-express');

const resolvers = {
  Query: {
    async getTodos(_, args, context) {
      if (!context.user) throw new ApolloError('not authorized', 402);

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

    async loginUser(_, { email, password }, context) {
      const user = await User.findOne({ email });

      if (!user) throw new ApolloError('No user found with that email address');

      if (!user.validatePass(password)) throw new ApolloError('Your password is incorrect');

      try {
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