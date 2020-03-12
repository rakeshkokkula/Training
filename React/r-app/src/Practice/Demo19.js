import React from 'react'; 

// Parent Component 

class Parent extends React.Component{ 

    render(){ 

        return( 

                <div> 

                    <h2>You are inside Parent Component</h2> 

                    <Child name="Raki" userId = "1620"/> 

                </div> 

            ); 

    } 

} 

// Child Component 

class Child extends React.Component{ 

    render(){ 

        return( 

                <div> 

                    <h2>Hello, {this.props.name}</h2> 

                    <h3>You are inside Child Component</h3> 

                    <h3>Your user id is: {this.props.userId}</h3> 

                </div> 

            ); 

    } 

} 
export default Parent