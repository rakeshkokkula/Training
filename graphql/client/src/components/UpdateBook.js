import React, {useState} from 'react'
import {useQuery} from "@apollo/react-hooks";
import { getAuthorsQuery,getBooksQuery, updateBookMutation, } from './queries';
import "../App.css"
import { useMutation } from "@apollo/react-hooks";
import Header from '../Header';


 function DisplayAuthors(){
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if(loading){
      return( <option disabled>Loading authors</option> );
  }
  if(error) return `Error! ${error.message}`; 

  else {
    return data.authors.map(author => {
        return( <option key={ author.id } value={author.name}>{ author.name }</option> );
    });
}
}




function UpdateBooks() {

    const { loading, error, data } = useQuery(getBooksQuery);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorname, setAuthorname] = useState("");
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
    
    <div className="update">
            <Header />
        <div className='col-sm-12 author'>
        {data.books.map(book =>{ 
           
           let path = window.location.pathname
             let id = path.slice(8)
            if(id == book.id){
             
            return(    
           
                <form name = "myForm" onSubmit={event => {
          event.preventDefault();
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
          
        }} className="myForm">

          
                <h1 className='text'>Book Update</h1>
		            <label>Book Name</label>
		            <input className="formField" type="text" name="name" defaultValue={book.name}  onChange={e => setName(e.target.value)} placeholder='Enter a Book name' required /><br/>
                    
                    <label>Genre</label>
		            <input className="formField" type="text" name="genre" defaultValue={book.genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" required /><br/>
                    <label>Author</label>
		           
                <select name="authorname" className="formField" defaultValue={book.authorname}  onChange={ (e) => setAuthorname( e.target.value ) } >
                        <option>Select author</option>
                        <DisplayAuthors />
                    </select>   
               
                    <button type="submit" className='myButton' >Update</button>
                </form>
                
                )}
            }
                )}
       </div>
     
    </div>
    )
        }

export default UpdateBooks