const { AuthenticationError } = require('apollo-server-express');
// const { Profile } = require('../models');
const { signToken } = require('../utils/auth');
const Users = require('../models/Users.js');
const Categories = require('../models/Categories.js');
const Posts = require('../models/Posts.js');
const Followers = require('../models/Followers');
const Likes = require('../models/Likes');


const resolvers = {
  Query: {
    users: async () => {
      return await Users.find();
    },
    
    categories: async () => {
      return Categories.find();
    },

    posts: async () => {
      return Posts.find();
    },

    followers: async () => {
      return Followers.find();
    },
    
    likes: async () => {
      return Likes.find();
    },
    
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const newUser = await Users.create({ name, email, password });
      const token = signToken(newUser);

      return { token, user: newUser };
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
    addCategory: async (parent, {title }) => {
      const newCategory = await Categories.create({title});
    }

  },
};

module.exports = resolvers;