import React, { useState } from "react";

import '../App.css'
import {getAuthorsQuery, addAuthorMutation } from './queries';

import { useMutation } from "@apollo/react-hooks";
import Header from "../Header";

function AddAuthor(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    const [createAuthor] = useMutation(addAuthorMutation, {
        variables: {
          name: name,
          age: parseInt(age),
          
        },
        refetchQueries: [{query: getAuthorsQuery}]
      });
    
    return(
        <div className="Auth">
          <Header />
            <div className='col-sm-12 author'>
                
                <form name = "myForm" onSubmit={event => {
          event.preventDefault();
          createAuthor().catch(error => {
            console.log(error);
          });

          setName(name);
          setAge(age);
          
        }} className="myForm">
                <h1 className='text'>Add Author</h1>
		            <label>Author Name</label>
		            <input className="formField" type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder='Enter a Author name' required /><br/>
                    
                    <label>Age</label>
		            <input className="formField" type="number" name="age" value={age} onChange={e => setAge(e.target.value)} placeholder="Age" required /><br/>
                
               
                    <button type="submit" className='myButton' >Add</button>
                </form>
            </div>
            
        </div>
        )
}

export default AddAuthor