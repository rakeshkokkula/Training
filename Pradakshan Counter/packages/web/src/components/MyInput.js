import React from 'react'
import MyButton from './Button'

function MyInput(props){
    return(
      <div>
            <form className="form">
                <input 
                type="number"
                className="formField"
                value={props.rounds}
                onChange={props.onChange}
                placeholder="Enter Rounds"
                required
                />
                <MyButton onClick={props.submitForm} title="Submit"/>
            </form>
        </div>
    )
  }
  export default MyInput