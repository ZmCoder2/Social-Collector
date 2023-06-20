const { AuthenticationError } = require('apollo-server-express');
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
    addCategory: async (parent, { name }) => {
      const newCategory = await Categories.create({ name });
      return newCategory;
    },
    addPost: async (_, { title, description, category, user,  }) => {
      try {
        if (!category) {
          throw new Error('Category is required');
        }

        const authUser = await User.findOne({ _id: user });

        const post = new Posts({
          title,
          description,
          categoryId: category,
          user: authUser._id,
          dateCreated: new Date(),
          // image: image ? image.path : null, // Store the image path
        });

        const savedPost = await post.save();

        return {
          _id: savedPost._id,
          title: savedPost.title,
          description: savedPost.description,
          category: savedPost.categoryId,
          user: savedPost.userId,
          // image: savedPost.image,
        };
      } catch (error) {
        throw new Error(`Error adding post: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;