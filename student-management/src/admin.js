import React from 'react';
import Header from './Header'
import './head.css'
import PostData from './assets/data.json'
import { Link, Redirect } from 'react-router-dom'


class Admin extends React.Component {
    constructor(props){
      super(props)
      const token = localStorage.getItem("token")
      let loggedIn = true
      if(token == null){
        loggedIn = false
      }
      this.state = {
        loggedIn
      }
    }
  render(){
    if(this.state.loggedIn === false){
      return <Redirect to="/" />
    }
  return (
    <div className="Admin">
      <Header />
  <h3 className='text'>Welcome Admin</h3>
      <Link to='/logout'><button className='myButton btn'>Logout</button></Link>
      <hr />
      <h1 className='text'>Student Details</h1>
      <table className='table'> 
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Comments</th>
          </tr>
      
      {PostData.map((item, index) => {
          return(
        <tr>
          <td>{item.id}</td>                        
          <td>{item.firstname} {item.lastname}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
          <td>{item.address}</td>
          <td>{item.comments}</td>
          <td><Link to={`/student/${item.id}`}><button className='myButton'>Get details</button></Link></td>
        </tr>
        )
        }
        )}
    </table>
      
    </div>
  );
    }
}

export default Admin;
