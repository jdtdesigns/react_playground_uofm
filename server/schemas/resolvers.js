const { User, Todo } = require('../models');

const resolvers = {
  Query: {
    async getTodos() {
      return await Todo.find();
    }
  },

  Mutation: {
    async addUser(_, { email, password }, context) {
      return await User.create({
        email,
        password
      });
    },
    async addTodo(_, args) {
      return await Todo.create(args);
    }
  }
};

module.exports = resolvers;