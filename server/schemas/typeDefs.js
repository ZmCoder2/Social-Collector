const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date
  scalar Upload

  type File {
    url: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    posts: [Posts]
    followers: [User]
  }

  type Categories {
    _id: ID
    name: String!
    posts: [Posts]
  }

  type Posts {
    _id: ID
    title: String!
    description: String!
    category: Categories!
    user: User!
    comments: [Comment]
    image: String
  }

  type Comment {
    _id: ID
    commentBody: String
    username: String
    createdAt: String
  }

  type Followers {
    _id: ID
    user: User!
  }

  type Likes {
    _id: ID
    user: User
    posts: Posts
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User!
    categories: [Categories]!
    posts: [Posts]!
    followers: [Followers]!
    likes: [Likes]!
    viewUser: [User]
    viewPost: [Posts]
    hello: String!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    addCategory(name: String!): Categories
    addPost(
      title: String!
      description: String!
      category: String!
      user: String!
    ): Posts
    login(email: String!, password: String!): Auth
    uploadFile(file: Upload!): File!
  }
`;

module.exports = typeDefs;