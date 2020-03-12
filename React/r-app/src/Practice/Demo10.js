import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
function Form() 
{ 
    return ( 
        <div> 
            <input type = "text" placeholder = "Enter Text.." /> 
            <br /> 
            <br /> 
            <input type = "text" placeholder = "Enter Text.." /> 
            <br /> 
            <br /> 
            <button type = "submit">Submit</button> 
        </div> 
    ); 
} 
  
ReactDOM.render( 
    <Form />, 
    document.getElementById("root") 
);