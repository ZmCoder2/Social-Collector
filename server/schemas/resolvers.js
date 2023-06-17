const { AuthenticationError } = require('apollo-server-express');
// const { Profile } = require('../models');
const { signToken } = require('../utils/auth');
const User = require('../models/User.js');
const Categories = require('../models/Categories.js');
const Posts = require('../models/Posts.js');
const Followers = require('../models/Followers');
const Likes = require('../models/Likes');


const resolvers = {
  Query: {
    user: async () => {
      return await User.find();
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

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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
    },

    addPost: async (parent, {title, description, dateCreated, category, user}) => {
      const newPost = await Posts.create({title, description, dateCreated, category, user});
    }

  },
};

module.exports = resolvers;