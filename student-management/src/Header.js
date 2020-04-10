import React from 'react'
import './head.css'



class Header extends React.Component{
    
    render(){
        return(
            <div className="header">
            <div className="row top">
                <div className="col-sm-12 col-12">
                <a href=""><h1 className="logo"><img src="https://img.icons8.com/color/58/000000/unicorn.png"/>Courseque Student Management</h1></a>
                </div>
            </div>
           
            </div>
        )
    }
}
export default Header