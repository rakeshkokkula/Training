import React from 'react'; 

import ReactDOM from 'react-dom'; 

  

// sample component to illustrate props 

class DemoComponent extends React.Component{ 

    render(){ 

        return( 

  

                <div> 

                    {/*accessing information from props */} 

                    <h2>Hello {this.props.user}</h2> 

                    <h3>Welcome to GeeksforGeeks</h3> 

                </div> 

            ); 

    } 

} 

  

ReactDOM.render( 

    // passing props 

    <DemoComponent user = "Harsh Agarwal" />,  

    document.getElementById("root") 

);