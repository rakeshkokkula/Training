import React from 'react'; 

   
class App extends React.Component { 
     
    state = { inputValue: '' }; 
   
    onFormSubmit = (event) => { 
        event.preventDefault(); 
        this.setState({ inputValue: 'Hello World!'}); 
    } 
     
    render() { 
     
        return ( 
        <div> 
            <form onSubmit={this.onFormSubmit}> 
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
export default App