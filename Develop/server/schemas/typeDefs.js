const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID!
  username: String!
  email: String!
  password: String!

}

type Query {
  users: [User]
  user(username: String!): User
  thoughts(username: String): [Thought]
  thought(thoughtId: ID!): Thought
  me: User
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
`;


module.exports = typeDefs;