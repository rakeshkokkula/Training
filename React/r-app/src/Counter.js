import React, {Component} from 'react';

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      Counter:0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment(){
    this.setState({Counter:this.state.Counter+1})
  }
  decrement(){
    this.setState({Counter:this.state.Counter-1})
  }
  reset(){
    this.setState({Counter:0})
  }
  render(){
    return(
      <div>
        <button onClick = {this.increment}>increment</button>
        <button onClick = {this.decrement}>decrement</button>
        <button onClick = {this.reset}>Reset</button>
    <p>{this.state.Counter}</p>
      </div>
    )
  }
}
export default Counter