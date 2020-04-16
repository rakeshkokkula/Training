import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            age
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            genre
            authorId
            id
        }
    }
`;

const addBookMutation = gql`
    mutation createBook($name: String!, $genre: String!, $authorId: ID!){
        createBook(name: $name, genre: $genre, authorId: $authorId){
            name
            genre
            authorId
            id
        }
    }
`;
const addAuthorMutation = gql`
    mutation createAuthor($name: String!, $age: Int!){
        createAuthor(name: $name, age: $age){
            name
            age
            id
        }
    }
`;

const deleteBook = gql`

  mutation deleteBook($id: ID!) {

    deleteBook(id: $id) 
  }

`;
const deleteAuthorMutation = gql`

  mutation deleteAuthor($id: ID!) {

    deleteAuthor(id: $id) 
  }

`;

const updateBookMutation = gql`

  mutation updateBook($id: ID!, $name: String, $genre: String, $authorId: ID) {

    updateBook(id: $id, name: $name, genre: $genre, authorId: $authorId) 
  }

`;



const getBookQuery = gql`
    query books($id: ID!){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery, deleteBook, addAuthorMutation, deleteAuthorMutation, updateBookMutation };