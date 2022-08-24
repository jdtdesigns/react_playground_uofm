const Database = require('../models/Database');
const User = require('../models/User');

const resolvers = {
  Query: {
    hi() {
      return 'Hi there!';
    },
    garf() {
      return 'I hate Mondays and give me Lasagna!';
    },
    async getAll() {
      return await Database.find();
    },
    async getOne(_, args) {
      return await Database.findById(args.id);
    }
  },

  Mutation: {
    async addDatabase(_, args) {
      return await Database.create({
        database_name: args.database_name
      });
    },
    async addUser(_, { email, password }) {
      return await User.create({
        email,
        password
      });
    }
  }
};

module.exports = resolvers;