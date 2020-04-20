import React, {useState} from 'react'
import {useQuery} from "@apollo/react-hooks";
import { getAuthorsQuery, updateAuthorMutation, addAuthorMutation } from './queries';
import "../App.css"
import { useMutation } from "@apollo/react-hooks";
import Authors from './Authors'


function UpdateAuthors(props){

      const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
      
   

    const addForm = (e)=> {
      e.preventDefault();
      addAuthor().catch(error => {
        console.log(error);
      });
          setName(name);
          setAge(parseInt(age));
        
      
    }
      
        const [addAuthor] = useMutation(addAuthorMutation, {
          variables: {
            name: name,
            age: age
            
          },
          refetchQueries: [{query: getAuthorsQuery}]
        });

        const [updateAuthor] = useMutation(updateAuthorMutation, {
          variables: {
            id: id,
            name: name,
            age: age
            
          },
          refetchQueries: [{query: getAuthorsQuery}]
        });

    const { loading, error, data } = useQuery(getAuthorsQuery);

    if (loading) 
    return <h3>Loading...</h3>
    if (error) return `Error! ${error.message}`;    
        return(
          <div>
            {props.page == "add" &&
            <Authors
            setName = {setName}
            setAge = {setAge}
            onSubmit = {addForm}
            button = "Add"
            title = "Add Author"
            name = {name}
            age = {age}
            />
          }
          {props.page == "update" &&
          data.authors.map(author => {
           const id = props.match.params.id
            if(id == author.id){
              const updateForm = (e)=> {
                e.preventDefault();
                updateAuthor().catch(error => {
                  console.log(error);
                });
                  setId(author.id);
                  console.log(id)
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
                
              }
            return(
              <div>
                
            <Authors
            setName = {setName}
            setAge = {setAge}
            onSubmit = {updateForm}
            button = "Update"
            title = "Update Author"
            name = {author.name}
            age = {author.age}
            />
          
                </div>
            )}
          })}
          
          
            
          </div>
        )
      
    }

export default UpdateAuthors