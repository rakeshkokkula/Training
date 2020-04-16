import React, { useState } from 'react';
import './App.css'
import {addBookMutation, getBooksQuery } from './components/queries';

// import { graphql } from 'react-apollo';
// import { compose } from 'recompose';
import { useMutation } from "@apollo/react-hooks";

function AddBook(){
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");
    const [createBook] = useMutation(addBookMutation, {
        variables: {
          name: name,
          genre:genre,
          authorId: authorId,
          
        },
        refetchQueries: [{query: getBooksQuery}]
      });
    
    return(
        <div className="AddBook">
            <div className='col-sm-12'>
                
                <form name = "myForm" onSubmit={event => {
          event.preventDefault();
          createBook().catch(error => {
            console.log(error);
          });

          setName(name);
          setGenre(genre);
          setAuthorId(authorId)
          
        }} className="myForm">
                <h1 className='text'>Add Book</h1>
		            <label>Book Name</label>
		            <input className="formField" type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder='Enter a Book name' required /><br/>
                    
                    <label>Genre</label>
		            <input className="formField" type="text" name="genre" value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" required /><br/>
                    <label>AuthorId</label>
		            <input className="formField" type="number" name="authorId" value={authorId} onChange={e => setAuthorId(e.target.value)} placeholder="authorId" required /><br/>
                    
               
                    <button type="submit" className='myButton' >Add</button>
                </form>
            </div>
            
        </div>
        )
}


class AddBooks extends React.Component{
    constructor(props){
        super(props)    
    }
    

    render(){
        
        return(
        <div className="Login">
            <AddBook />
        </div>
        )
    }
}

 export default AddBooks
 