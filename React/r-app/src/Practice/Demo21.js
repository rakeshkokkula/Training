import React from 'react'; 

// sample component to illustrate props 

class Demo extends React.Component{ 

    render(){ 

        return( 

  

                <div> 

                    {/*accessing information from props */} 

                    <h2>Hello {this.props.user}</h2> 

                    <h3>Welcome to My World!!</h3> 

                </div> 

            ); 

    } 

} 
export default Demo