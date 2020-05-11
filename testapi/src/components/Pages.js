import React, { Component } from 'react'
import '../App.css'
import {Link } from 'react-router-dom'

export default class Pages extends Component {
    render() {
        return (
            <div>
                <div className='nav'>
          <div className='nav-group'>
          <Link className='nav-link' to='groups' > <p className='nav-link-p'> Groups</p></Link>
          </div>
          <div className='nav-pages'>
          <Link className='nav-link' to='pages' > <p className='nav-link-p'> Pages</p></Link>
          </div>
        </div>
        {/* <div className='post'>
         <input type='text' className='input' onChange={this.handleChange} placeholder="What's on your mind" name='message' value={this.state.message}/>
          <input type='file' name='selectedFile' onChange={this.onFileChange}  /> 
          
         <button className='post-btn' onClick={this.post}>post</button>
       </div>   */}
       
            </div>
        )
    }
}
