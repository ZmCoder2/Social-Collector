const { AuthenticationError } = require('apollo-server-express');
// const { Profile } = require('../models');
const { signToken } = require('../utils/auth');
const Users = require('../models/Users.js');
const Categories = require('../models/Categories.js');

const resolvers = {
  Query: {
    users: async () => {
      return await Users.find();
    },
    
    categories: async () => {
      return Categories.find();
    },
    
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const newUser = await Users.create({ name, email, password });
      // const token = signToken(newUser);

      // return { token, user: newUser };
    },
    login: async (parent, { email, password }) => {
      const user = await Users.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

  },
};

module.exports = resolvers;