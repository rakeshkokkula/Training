import React from 'react'
import './head.css'
import {Link } from "react-router-dom";


class Header extends React.Component{
    
    render(){
        return(
            <div className="header">
            <div className="row top">
                <div className="col-sm-6 col-4">
                <Link to="/" className='log'><h1 className="logo">Dream Courses</h1></Link>
                </div>
                <div className="col-sm-6 col-8">
                    <a href="#" className="log"><p className="login">Login</p></a>
                    <form class="form">
                        <input type="text" placeholder="Search" name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                <Link to="/Registration.js"><button className="btn btn-primary">Registration</button></Link>
                </div>
                <div className="col-sm-3">
                <a href=""><button className="btn btn-primary">Button 2</button></a>
                </div>
                <div className="col-sm-3">
                <a href=""><button className="btn btn-primary">Button 3</button></a>
                </div>
                <div className="col-sm-3">
                <a href=""><button className="btn btn-primary">Button 4</button></a>
                </div>
            </div>
            </div>
        )
    }
}
export default Header