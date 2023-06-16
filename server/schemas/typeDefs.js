const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type Users {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Categories {
    _id: ID!
    title: String!
    dateCreated: Date!
  }

  type Posts {
    _id: ID!
    title: String!
    description: String!
    category: Categories!
    user: Users!
  }

  type Followers {
    _id: ID!
    users: Users!
  }

  type Likes {
    _id: ID!
    users: Users!
    posts: Posts!
  }

  type Auth {
    token: ID!
    user: Users!
  }

  type Query {
    users: [Users]!
    categories: [Categories]!
    posts: [Posts]!
    followers: [Followers]!
    likes: [Likes]!
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;