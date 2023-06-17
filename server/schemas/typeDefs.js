const { gql } = require('apollo-server-express');

const typeDefs = gql`

scalar Date

  type User {
    _id: ID
    username: String
    email: String
  }

  type Categories {
    _id: ID
    title: String!

  }

  type Posts {
    _id: ID
    title: String!
    description: String!
    category: Categories!
    user: User!
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
    user: User
    categories: [Categories]!
    posts: [Posts]!
    followers: [Followers]!
    likes: [Likes]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    addCategory(title: String!): Categories
    addPost(title: String!, description: String!, dateCreated: Date, category: String, user: String): Posts
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;