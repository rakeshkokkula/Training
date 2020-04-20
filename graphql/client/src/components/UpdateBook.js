import React, {useState} from 'react'
import {useQuery} from "@apollo/react-hooks";
import { getBooksQuery, updateBookMutation, addBookMutation } from './queries';
import "../App.css"
import { useMutation } from "@apollo/react-hooks";
import Books from './Books'



function UpdateBooks(props) {

    const { loading, error, data } = useQuery(getBooksQuery);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorname, setAuthorname] = useState("");
    

      const [createBook] = useMutation(addBookMutation, {
        variables: {
          name: name,
          genre:genre,
          authorname: authorname,
          
        },
        refetchQueries: [{query: getBooksQuery}]
      });

   const addForm = (e) => {
      e.preventDefault();
      createBook().catch(error => {
        console.log(error);
      });

      setName(name);
      setGenre(genre);
      setAuthorname(authorname)
      console.log(name)
      console.log(genre)
      console.log(authorname)
      
    }

    const [updateBook] = useMutation(updateBookMutation, {
      variables: {
        id: id,
        name: name,
        genre:genre,
        authorname: authorname,
        
      },
      refetchQueries: [{query: getBooksQuery}]
    });
      
    
    if (loading) 
    return <h3>Loading...</h3>
    if (error) return `Error! ${error.message}`;
    
    return (
    
    <div>
           
           {props.page == "add" &&
            <Books
            setName = {setName}
            setGenre = {setGenre}
            setAuthorname = {setAuthorname}
            onSubmit = {addForm}
            button = "Add"
            title = "Add Book"
            name = {name}
            genre = {genre}
            authorname = {authorname}
            />
          }
          {props.page == "update" &&
          data.books.map(book => {
           const id = props.match.params.id
            if(id == book.id){
             
              const updateForm = (e) => {
                e.preventDefault();
                updateBook().catch(error => {
                  console.log(error);
                });
                setId(book.id);
                if(name == ""){
                  setName(book.name);
                }else{
                  setName(name);
                }
                if(genre == ""){
                  setGenre(book.genre);
                }else{
                  setGenre(genre);
                }
                if(authorname == ""){
                  setAuthorname(book.authorname);
                }else{
                  setAuthorname(authorname);
                }
                
              }   
              
            return(
              <div>
                
            <Books
            setName = {setName}
            setGenre = {setGenre}
            setAuthorname = {setAuthorname}
            onSubmit = {updateForm}
            button = "Update"
            title = "Update Book"
            name = {book.name}
            genre = {book.genre}
            authorname = {book.authorname}
            />
          
                </div>
            )}
          })}
    </div>
    )
        }

export default UpdateBooks