import React from 'react'; 

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

    title: "TechStriker"

} 
export default ExampleClass