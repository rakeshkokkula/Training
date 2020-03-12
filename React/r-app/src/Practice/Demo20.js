import React from 'react'; 

import ReactDOM from 'react-dom'; 

  

// functional component to illustrate props 

function DemoComponent(props){ 

    return( 

        <div> 

            {/*accessing information from props */} 

            <h2>Hello {props.user}</h2> 

            <h3>Welcome to GeeksforGeeks</h3> 

         </div> 

    ); 

} 

  

ReactDOM.render( 

    // passing props 

    <DemoComponent user = "Harsh Agarwal" />,  

    document.getElementById("root") 

);