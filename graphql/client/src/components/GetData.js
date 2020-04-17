import React from 'react'
import {useQuery} from "@apollo/react-hooks";
import { getAuthorsQuery,getBooksQuery, deleteBook, deleteAuthorMutation } from './queries';
import "../App.css"
import { useMutation } from "@apollo/react-hooks";
import { Link } from 'react-router-dom'
import Header from '../Header';

function Books() {
    
    const [deleteABook] = useMutation(deleteBook)
    const { loading, error, data } = useQuery(getBooksQuery);
    
    if (loading) 
    return <h3>Loading...</h3>
    if (error) return `Error! ${error.message}`;
  
    return (
    
    <div className="Books">
         
        <h1 className="h">Books List</h1>
       
        <table class="table table-hover tbl">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Genre</th>
        <th>Author Name</th>
        
      </tr>
    </thead>
    {data.books.map(book => (
    <tbody>
      <tr key={book.id}>
      <td>{book.id}</td>
    <td>{book.name}</td>
    <td>{book.genre}</td>
    <td>{book.authorname}</td>
    
    <td><Link to={{pathname:`/Update/${book.id}`, id:book.id}}>  <button
            className="edit" 
            ><img alt="edit" src="https://img.icons8.com/cute-clipart/14/000000/edit.png"/></button></Link></td>
    <td><button 
            onClick={e => {
                e.preventDefault();
                
                    console.log(book.id)
                deleteABook({
                    
                    variables:{
                        id: book.id
                        
                    },
                    refetchQueries: [{query: getBooksQuery}]
                    
                }).catch(error => {
                    alert("Cannot delete this Student");
                  });
            }}
            className="del" >
                <img alt="del" src="https://img.icons8.com/flat_round/14/000000/delete-sign.png" />
                </button> </td>
                
      </tr>
    </tbody>
    ))}
  </table>
        
    </div>
    )
        }
        function Authors() {
            const [deleteAuthor] = useMutation(deleteAuthorMutation)
            const { loading, error, data } = useQuery(getAuthorsQuery);
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
          
            return (
            
            <div className="Authors">
                
                <h1 className="h">Authors List</h1>
                <table class="table table-hover tbl">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        
      </tr>
    </thead>
    {data.authors.map(author => (
    <tbody>
      <tr key={author.id}>
      <td>{author.id}</td>
    <td>{author.name}</td>
    <td>{author.age}</td>
    <td><Link to={{pathname:`/Author/${author.id}`, id:author.id}}>  <button
            className="edit" 
            ><img alt="edit" src="https://img.icons8.com/cute-clipart/20/000000/edit.png"/></button></Link></td>
    <td><button 
            onClick={e => {
                e.preventDefault();
                
                    console.log(author.id)
                    deleteAuthor({
                    
                    variables:{
                        id: author.id
                        
                    },
                    refetchQueries: [{query: getAuthorsQuery}]
                }).catch(error => {
                    alert("Cannot delete this Student");
                  });
            }}
            className="del" >
                <img alt="del" src="https://img.icons8.com/flat_round/20/000000/delete-sign.png" />
                </button> </td>
                
      </tr>
    </tbody>
    ))}
  </table>
               
            </div>
            )
                }
            

    function Details(){
        return(
            <div>
                <Header />
                <Books />
                <Authors />
            </div>
        )
    }


    export default Details