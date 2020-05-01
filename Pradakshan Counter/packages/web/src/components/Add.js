import React from 'react'
import MyButton from './Button'

function Add(props){
    return(
      <div className="count">
        
            <h1 className='counter'>{props.counter}</h1>
         
         <MyButton onClick={props.increment} title="Next"/>
         
        </div >
    )
  }

  export default Add
  