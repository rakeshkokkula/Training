import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
class Clock extends React.Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { time : new Date() }; 
    } 
  
    // As soon as the Clock is mounted. 
    // Start the interval "timer". 
    // Call tick() every second. 
    componentDidMount() 
    { 
        this.timer = setInterval( 
            () => this.tick(), 
            1000); 
    } 
  
    // Before unmounting the Clock, 
    // Clear the interval "Timer" 
    // This step is a memory efficient step. 
    componentWillUnmount() 
    { 
        clearInterval(this.timer); 
    } 
  
    // This function updates the state, 
    // invokes re-render at each second. 
    tick() 
    { 
        this.setState({ 
            time : new Date() 
        }); 
    } 
  
    render() 
    { 
        return ( 
            <div><h1>Welcome to { this.props.title } !</h1> 
        <h2>{this.state.time.toLocaleTimeString()}</h2></div> 
    ); 
  } 
} 
  
ReactDOM.render( 
  <Clock title="GeeksforGeeks" />, 
            document.getElementById('root'));