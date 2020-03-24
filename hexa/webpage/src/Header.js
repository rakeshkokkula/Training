import React from 'react'
import './head.css'
import {Link } from "react-router-dom";


class Header extends React.Component{
    
    render(){
        return(
            <div className="header">
            <div className="row top">
                <div className="col-sm-6 col-4">
                <Link to="/"><h1 className="logo"><img src="https://img.icons8.com/color/58/000000/unicorn.png"/> Dream Courses</h1></Link>
                </div>
                <div className="col-sm-6 col-8">
                    <a href=""><p className="login">Login</p></a>
                    <form className="form">
                        <input type="text" placeholder="Search" name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                <Link to="/Registration.js"><button className="btn btn-success"><img src="https://img.icons8.com/windows/38/000000/edit-user-male--v1.png"/> Registration</button></Link>
                </div>
                <div className="col-sm-3">
                <a href=""><button className="btn btn-success"><img src="https://img.icons8.com/color/38/000000/e-learning.png"/> Tutorials</button></a>
                </div>
                <div className="col-sm-3">
                <a href=""><button className="btn btn-success"><img src="https://img.icons8.com/color/38/000000/courses.png"/> Courses offered</button></a>
                </div>
                <div className="col-sm-3">
                <a href=""><button className="btn btn-success"><img src="https://img.icons8.com/color/38/000000/business-contact.png"/> Contact Us</button></a>
                </div>
            </div>
            </div>
        )
    }
}
export default Header