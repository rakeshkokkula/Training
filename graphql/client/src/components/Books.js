import React from 'react'
// import Header from '../Header';
import {useQuery} from "@apollo/react-hooks";
import { getAuthorsQuery } from './queries';



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
  

function Books(props){
    return(
       <div >
            
            <div className='col-sm-12 author'>
        <form name = "myForm" onSubmit={props.onSubmit} className="myForm">          
        <h1 className='text'>{props.title}</h1>
            <label>Book Name</label>
            <input className="formField" type="text" name="name" defaultValue={props.name}  onChange={e => props.setName(e.target.value)} placeholder='Enter a Book name' required /><br/>
            
            <label>Genre</label>
            <input className="formField" type="text" name="genre" defaultValue={props.genre} onChange={e => props.setGenre(e.target.value)} placeholder="Genre" required /><br/>
            <label>Author</label>
           
        <select name="authorname" className="formField" defaultValue={props.authorname}  onChange={ (e) => props.setAuthorname( e.target.value ) } >
                <option>Select author</option>
                <DisplayAuthors />
            </select>   
       
            <button type="submit" className='myButton' >{props.button}</button>
        </form>
        </div>
       </div>
    )
}
export default Books