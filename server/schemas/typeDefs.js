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
    
    title: String
    dateCreated: Date
  }
  type categories {

    title: String
    dateCreated: String
  }

  type Auth {
    token: ID!
    user: Users
  }

  type Query {
    users: [Users]!
    categories: [Categories]!
  }
  

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;