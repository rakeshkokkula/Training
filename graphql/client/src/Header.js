import React from 'react'

import { Link } from 'react-router-dom'


class Header extends React.Component{
    
    render(){
        return(
            <div className="header">
            <div className="row top">
                <div className="col-sm-12 col-12">
                <nav class="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">CourseQue</a>
    </div>
    <ul className="nav navbar-nav">
      <li ><Link to="/">Home</Link></li>
      <li><Link to="/AddAuthor">AddAuthor</Link></li>
      <li><Link to="/GetData">GetData</Link></li>
      {/* <li><Link to="/Update">Update</Link></li> */}
    </ul>
    <form className="navbar-form navbar-left" action="#">
      <div className="form-group">
        <input type="text" class="form-control" placeholder="Search" name="search" />
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</nav>
                </div>
            </div>
           
            </div>
        )
    }
}
export default Header