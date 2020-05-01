import React, {Component} from 'react';
import '../App.css'
import SliderPage from 'react-slider-page'
import MyInput from './MyInput'
import Add from './Add'
import Grid from './grid'





class Counter extends Component{
 constructor(props){
   super(props)
   this.state = {
    Counter:0,
    Rounds:0,
    Count:0
  }
  this.increment = this.increment.bind(this);
  this.submitForm = this.submitForm.bind(this);
  this.onChange = this.onChange.bind(this);
  
}
increment(){
  if(this.state.Rounds > this.state.Counter){ 
  this.setState({Counter:this.state.Counter+1})
}else{
  this.setState({Counter:0, Rounds:0, Count:0})
  alert("You have been completed your Rounds")
}

}


submitForm(e){
  e.preventDefault()
  this.setState({Count:this.state.Rounds})
  if(this.state.Rounds>0){
  alert("Start")
  console.log(this.state.Count)
}else{
  alert("Please enter your rounds")
}

}
onChange(e) { 
  this.setState({Rounds:e.target.value})
  this.setState({Counter:0})

}


 

  render(){
    return(
      <div className="main">
        <SliderPage 
        scrollingSpeed={ 20 }
        touchSensitivity={ 5 } 
        className="slider"
        >
        
       <div>
       <div className="first"> 
       <h2 className='start'>Lets start</h2>
       <MyInput 
        rounds={this.state.Rounds}
        onChange={this.onChange}
        submitForm={this.submitForm}
        />
        <Add 
        counter={this.state.Counter}
        increment={this.increment}
        />
       </div>
       </div>
      <div id="count">
      <Grid 
      rounds={this.state.Count} 
      counter={this.state.Counter} 
      increment={this.increment}/>
      </div>
      </SliderPage>
      </div>
    )
  }
}
export default Counter