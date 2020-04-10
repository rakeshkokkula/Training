import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './head.css'

export default class logout extends Component {
    constructor(props){
        super()
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <Header />
                <div >
                <h3 className="logout">You have been successfully logged out!</h3>
                <Link to="/" ><button className='myButton btn'>Back to Login</button></Link>
                </div>
            </div>
        )
    }
}
