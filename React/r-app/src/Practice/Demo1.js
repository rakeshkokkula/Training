import React from 'react'; 
  
function List() {
    let numbers = [1,2,3,4,5]; 
  
let updatedNums = numbers.map((number)=>{ 
    return <li>{number}</li>; 
}); 
    return(
    
    <ul> 
        {updatedNums} 
    </ul>
    
    )
    }
export default List