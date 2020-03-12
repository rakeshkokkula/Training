import React from 'react'; 
import ReactDOM from 'react-dom'; 
   
class App extends React.Component { 
     
    state = { inputValue: '' }; 
     
    render() { 
        return ( 
        <div> 
            <form> 
                <label> Enter text </label> 
                <input type="text"
                    value={this.state.inputValue} 
                    onChange={(e) => this.setState( 
                    { inputValue: e.target.value })}/> 
            </form> 
            <br/> 
            <div> 
                Entered Value: {this.state.inputValue} 
            </div> 
        </div> 
        ); 
    } 
} 
   
ReactDOM.render(<App />,  
            document.querySelector('root'));