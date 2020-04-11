import React from 'react';
import Header from './Header'
import './head.css'
import { Link, Redirect } from 'react-router-dom'
import StudentData from './assets/data.json'

class Student extends React.Component{
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
              {StudentData.map((item,index) => {
              let path = this.props.location.pathname
             let id = path.slice(9)
              if(id === item.id){
                  return(
                  <>
                 
          <Link to='/logout'><button className='myButton btn'>Logout</button></Link>
          <hr />
          <h1 className="text">Your details</h1>
          
          <table className='table'>
              <tr>
                  <th>Id</th>
                  <td>{item.id}</td>
              </tr>
              <tr>
                  <th>First Name</th>
                  <td>{item.firstname}</td>
              </tr>
              <tr>
                  <th>Last Name</th>
                  <td>{item.lastname}</td>
              </tr>
              <tr>
                  <th>Email</th>
                  <td>{item.email}</td>
              </tr>
              <tr>
                  <th>Contact</th>
                  <td>{item.contact}</td>
              </tr>
              <tr>
                  <th>Address</th>
                  <td>{item.address}</td>
              </tr>
              <tr>
                  <th>Comments</th>
                  <td>{item.comments}</td>
              </tr>
          </table>
                  </>
          )  
        }
        }) 
        }
        
            </div>

        
          );
    }
}

export default Student;
