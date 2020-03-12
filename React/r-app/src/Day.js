import React from 'react';

function Day(){
  
  let hours = 11
  let timeOfDay 
  if (hours < 12) {
    timeOfDay = "Morning"
  }
  else if (hours >=12 && hours <17) {
    timeOfDay = "Afternoon"
  }
  else {
    timeOfDay = "Evening"
  }
  return(
    <div>
    <h1>Good {timeOfDay}!</h1>
    <p>{hours}</p>
    </div>
  )
}
export default Day