import React, { useState } from 'react';
import './App.css'
import {addBookMutation, getBooksQuery, getAuthorsQuery } from './components/queries';
import {useQuery} from "@apollo/react-hooks";
import { useMutation } from "@apollo/react-hooks";
import Header from './Header'



// function MyInput(props){
//   return(
//     <div>
//       <input type={props.type} name={props.name} value={props.value}  />
//     </div>
//   )
// }


// function Add(props) {
//   event.preventDefault();
//   createBook().catch(error => {
//     console.log(error);
//   });

//   setName(props.name);
//   setGenre(props.genre);
//   setAuthorname(props.authorname)
//   // console.log(name)
//   // console.log(genre)
//   // console.log(authorname)
  
// }

function AddBook(){
    const {loading, error, data } = useQuery(getAuthorsQuery);
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
      if (loading) 
    return <h3>Loading...</h3>
    if (error) return `Error! ${error.message}`;

    
    
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
          setAuthorname(authorname)
          console.log(name)
          console.log(genre)
          console.log(authorname)
          
        }} className="myForm">
                <h1 className='text'>Add Book</h1>
		            <label>Book Name</label>
		            <input className="formField" type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder='Enter a Book name' required /><br/>
                    
                    <label>Genre</label>
		            <input className="formField" type="text" name="genre" value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" required /><br/>
                    <label>Author</label>
                    
                    <select name="authorname" className="formField" onChange={ (e) => setAuthorname( e.target.value ) } >
                        <option>Select author</option>
                        { data.authors.map(author => {
           return ( 
                        <option  key={ author.id } value={author.name}>{ author.name }</option> 
                        )}
                        )}

                    </select>
              
                    <button type="submit" className='myButton' >Add</button>
                </form>
                
            </div>
            
        </div>
        )
}



class AddBooks extends React.Component {
  render() {
      return (
          <div>
              <Header />
              <AddBook />
          </div>
      )
  }
}

 export default AddBooks
 