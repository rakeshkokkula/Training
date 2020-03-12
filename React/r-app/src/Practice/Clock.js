import React from 'react'; 

  
class Clock extends React.Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { time : new Date() }; 
    } 
  
    render() 
    { 
        return ( 
            <div><h1>Welcome to { this.props.title } !</h1> 
        <h2>{this.state.time}</h2>
        </div> 
    ); 
  } 
} 
  export default Clock