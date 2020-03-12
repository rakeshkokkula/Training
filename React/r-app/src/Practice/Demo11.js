import React from 'react'; 

  
// Input field component 
function Input() 
{ 
    return( 
        <div> 
            <input type="text" placeholder="Enter Text.." /> 
            <br /> 
            <br />     
        </div> 
    ); 
} 
  
// Button Component 
function Button() 
{ 
    return <button type = "submit">Submit</button>;     
} 
  
// Form component 
function Form() 
{ 
    return ( 
        <div> 
            <Input /> 
            <Input /> 
            <Button />             
        </div> 
    ); 
} 
  
export default Form