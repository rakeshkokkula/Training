import React from 'react'; 

class ExampleClass extends React.Component{ 

    render(){ 

        return( 

                <div> 

                    {/* iterating over array using map() */} 

                    <h1>{this.props.names.map( 

                        function namesIterator(item,i){ 

                            return ( 

                                    "Student "+ (i+1) +": " + 

                                     item+ 

                                     ((i!=2)?',  ':'\n') 

                                ) 

                        } 

  

                        )}</h1> 

                </div> 

            ); 

    } 

} 

  

// Passing an array as prop 

ExampleClass.defaultProps = { 

    names: ['Ram', 'Shyam', 'Raghav'] 

} 
export default ExampleClass