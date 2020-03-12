import React from 'react'; 
 
  
// Component that will return an 
// unordered list 
function Navmenu(props) 
{ 
    const list = props.menuitems; 
  
    const updatedList = list.map((listItems)=>{ 
        return <li>{listItems}</li>; 
    }); 
  
    return( 
        <ul>{updatedList}</ul> 
    ); 
} 
  
const menuItems = [1,2,3,4,5]; 
  
function Nav(){
    return (
    <Navmenu menuitems = {menuItems} />
    )
}
export default Nav