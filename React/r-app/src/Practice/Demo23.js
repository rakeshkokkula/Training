import React from 'react'; 

import ReactDOM from 'react-dom'; 

  

// Component 

class ExampleClass extends React.Component{ 

    render(){ 

        return( 

                <div> 

                    {/* accessing array prop directly */} 

                    <h1>The names of students are: {this.props.names}</h1> 

                </div> 

            ); 

    } 

} 

  

// Passing an array as prop 

ExampleClass.defaultProps = { 

    names: ['Ram', 'Shyam', 'Raghav'] 

} 

  

ReactDOM.render( 

    <ExampleClass />,  

    document.getElementById("root") 

);