import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
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
        <h2>{this.state.time}</h2></div> 
    ); 
  } 
} 
  
ReactDOM.render( 
  <Clock title="GeeksforGeeks" />, 
            document.getElementById('root'));