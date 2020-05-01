import React from 'react'

function MyButton(props){
    return(
      <div>
        <button className="myButton"onClick={props.onClick} >{props.title}</button>
      </div>
    )
  }

  export default MyButton