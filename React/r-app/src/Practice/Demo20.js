import React from 'react'; 

// functional component to illustrate props 

function Demo(props){ 

    return( 

        <div> 

            {/*accessing information from props */} 

            <h2>Hello {props.user}</h2> 

            <h3>Welcome to My World</h3> 

         </div> 

    ); 

} 
export default Demo