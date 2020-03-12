import React from 'react'; 

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
export default ExampleClass