// const mysql = require('mysql')
const {ApolloServer, gql} = require('apollo-server')
const knex = require('knex')


const typeDefs = gql`
type Author {
   id: ID!
   name: String!
   books: [Book!]!
 }
 `