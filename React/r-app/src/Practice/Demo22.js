import React from 'react'; 

import ReactDOM from 'react-dom'; 

  

// Component 

class ExampleClass extends React.Component{ 

    render(){ 

        return( 

                <div> 

                    {/* using default prop - title */} 

                    <h1>This is {this.props.title}'s Website!</h1> 

                </div> 

            ); 

    } 

} 

  

// Creating default props for  

// ExampleClass Component 

ExampleClass.defaultProps = { 

    title: "GeeksforGeeks"

} 

  

ReactDOM.render( 

    <ExampleClass />,  

    document.getElementById("root") 

);