import React from 'react'; 
  
// Navbar Component 
function Navbar() 
{ 
    return <h1>This is Navbar.</h1> 
} 
  
// Sidebar Component 
function Sidebar()  { 
    return <h1>This is Sidebar.</h1> 
} 
  
// Article list Component 
function ArticleList() 
{ 
    return <h1>This is Articles List.</h1> 
} 
  
// App Component 
function App() 
{ 
    return( 
            <div> 
                <Navbar /> 
                <Sidebar /> 
                <ArticleList /> 
            </div> 
        ); 
} 
  
export default App