import React from 'react';

// simple rendering with fragments 
class Columns extends React.Component { 
    render() { 
      return ( 
        <React.Fragment>  
          <h2>Hello</h2> 
          <p>How you doin'?</p> 
        </React.Fragment> 
      ); 
    } 
  }
  export default Columns