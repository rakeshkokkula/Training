const { GraphQLServer } =  require('graphql-yoga')
const knex = require('knex')({
  client: 'mysql',
  connection:{
    host: 'localhost',
    user:'root',
    password: '',
    database: 'mydb'
  }
});

const typeDefs = ` 

type Book {
    id: ID!
    name: String!
    genre: String!
    authorId:ID!
    author: Author
  }
  type Author {
    id: Int!
    name: String!
    age:Int!
    books: [Book!]!
  }
  type Query {
    books: [Book]
    book(id: ID!) : Book
    authors: [Author]
    author(id: ID!) : Author
  }

  type Mutation {
    createAuthor(name: String!, age: Int!): Author
    deleteAuthor(id: ID!) : Boolean
    updateAuthor(id:ID!, name:String,
        age: Int) : Boolean
    createBook(name: String!, genre: String!, authorId: ID!): Book
    deleteBook(id: ID!) : Boolean
    updateBook(id:ID!, name:String,
        genre: String, authorId: ID) : Boolean
  }
  
`

const resolvers = {
    Query: {
        books: () => knex("books").select("*"),
        book : async(_,{id}) =>{ return await knex("books").where({id}).first().select("*")} ,
        
        authors: () => knex("authors").select("*"),
        author : async(_,{id}) =>{ return await knex("authors").where({id}).first().select("*")} ,
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
    },
    Mutation: {
        createAuthor: async (_, { name, age }) => {
            // console.log("name: ", name)
            const [author] = await knex("authors")
                // .returning("*")
                .insert({ name, age });
            return author.results
        },
        createBook: async(_,{name, genre, authorId }) =>{
            // console.log("name: ", name)
            const [book] = await knex("books")
                // .returning("*")
                .insert({ name, genre,authorId });
            return book.results;
          },
          deleteBook: async(_,{id}) => {
            const isDeleted = await knex("books")
              .where({id})
              .del();
            return isDeleted
          },
          updateBook: async(_, {id, name, genre, authorId}) =>{
            const isUpdated = await knex("books")
            .where({id})
            .update({name, genre, authorId});
            return isUpdated
          },
          deleteAuthor: async(_,{id}) => {
            const isDeleted = await knex("authors")
              .where({id})
              .del();
            return isDeleted;
          },
          updateAuthor: async(_, {id, name, age}) =>{
            const isUpdated = await knex("authors")
            .where({id})
            .update({name, age});
            return isUpdated
          },
        // createBook: async (_, { name, genre, authorId }) => {
        //   const [book] = await knex("books")
        //     .returning("*")
        //     .insert({ name, genre, authorId });
    
        //   await User.updateOne(
        //     { _id: new ObjectID(author) },
        //     {
        //       $push: { bookIds: book.id }
        //     }
        //   );
    
        //   return book;
        // }
      },
  
  
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))


