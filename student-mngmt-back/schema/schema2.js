const graphql = require('graphql');

const {ApolloServer, gql} = require('apollo-server')
const { GraphQLSchema } = graphql;

// const _ = require('lodash');
const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'mydb'
    }
  }
  const knex = require('knex')(options);

const typeDefs = gql`
  type Book {
    id: Int!
    name: String!
    author: Author
  }
  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }
  type Query {
    books: [Book]
    authors: [Author]
  }
  type Mutation {
    createUser(name: String!): Author
    createBook(name: String!, author: String!): Book
  }
`;

const resolvers = {
  Mutation: {
    createAuthor: async (_, { name }) => {
      const user = new Author({ name, age,  bookIds: [] });
      await user.save();
      return user;
    },
    createBook: async (_, { name, genre, authorId }) => {
      const [book] = await knex("books")
        .returning("*")
        .insert({ name, genre, authorId });

    //   await User.updateOne(
    //     { _id: new ObjectID(author) },
    //     {
    //       $push: { bookIds: book.id }
    //     }
    //   );

      return book;
    }
  },
  Query: {
    books: () => knex("books").select("*"),
    authors: () => Author.find()
  },
  Book: {
    author: root => {
      return Author.findOne({ bookIds: root.id });
    }
  },
  Author: {
    books: root => {
      return knex("books")
        .whereIn("id", root.bookIds)
        .select("*");
    }
  }
};




const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
