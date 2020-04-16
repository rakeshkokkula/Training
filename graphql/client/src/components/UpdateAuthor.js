import React, {useState} from 'react'
import {useQuery} from "@apollo/react-hooks";
import { getAuthorsQuery, updateAuthorMutation, } from './queries';
import "../App.css"
import { useMutation } from "@apollo/react-hooks";
import Header from '../Header';


function UpdateAuthors() {
    
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    const [updateAuthor] = useMutation(updateAuthorMutation, {
        variables: {
          id: id,
          name: name,
          age: age
          
        },
        refetchQueries: [{query: getAuthorsQuery}]
      });
      
    
    if (loading) 
    return <h3>Loading...</h3>
    if (error) return `Error! ${error.message}`;
    
    return (
    
    <div className="update">
            <Header />
        <div className='col-sm-12 author'>
        {data.authors.map(author =>{ 
           
           let path = window.location.pathname
             let id = path.slice(8)
            if(id == author.id){
             
            return(    
           
                <form name = "myForm" onSubmit={event => {
          event.preventDefault();
          updateAuthor().catch(error => {
            console.log(error);
          });
          setId(author.id);
          if(name == ""){
            setName(author.name);
          }else{
            setName(name);
          }
          if(age == ""){
            setAge(author.age);
          }else{
            setAge(age);
          }
          
        }} className="myForm">
                <h1 className='text'>Author Update</h1>
                <label>Id</label>
		            <input className="formField" type="number" name="id" defaultValue={author.id} disabled required /><br/>
		            <label>Author Name</label>
		            <input className="formField" type="text" name="name" defaultValue={author.name}  onChange={e => setName(e.target.value)} placeholder='Enter a Author name' required /><br/>
                    
                    <label>Age</label>
		            <input className="formField" type="number" name="age" defaultValue={author.id} onChange={e => setAge(e.target.value)} placeholder="Age" required /><br/>
                   
               
                    <button type="submit" className='myButton' >Update</button>
                </form>
                
                )}
            }
                )}
       </div>
     
    </div>
    )
        }

export default UpdateAuthors