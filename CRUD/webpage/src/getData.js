import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import {Link } from "react-router-dom";

class Data extends React.Component {
 constructor(props) {
  super(props)
         this.state = {
          persons: []
         }
        }

  componentDidMount() {
    axios.get(`http://localhost:4000/data`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }  
  

  onClick(i,e){
    e.preventDefault();
    const id = this.state.persons[i].ID;
    console.log(id)
    axios.delete(`http://localhost:4000/del/${id}`)
    
      .then(res => {
          alert(res + 'Deleted');
        })
  }



  render() {
    return (
    <div className="App">
       <div className="left">
       <Table striped bordered hover>
         <thead>
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>Course</th>
          <th>Email</th>
          <th>Mobile No</th>
          <th>Join_Immediately</th>
          <th>Join_Later</th>
          <th>Subscribe</th>
          <th>Notes</th>
        </tr>
        </thead>
          
        { this.state.persons.map((person,i) => 
          <tr key={person.ID}>
            <td>{person.ID}</td>
            <td>{person.name}</td>
            <td>{person.course}</td>
            <td>{person.email}</td>
            <td>{person.mobile}</td>
            <td>{person.joinImmediately}</td>
            <td>{person.joinLater}</td>
            <td>{person.subscribe}</td>
            <td>{person.notes}</td>
            <td>
            
              <form onSubmit={this.handleEditSubmit}>
              <Link to={`/update/${person.ID}`}>    <button className="btn btn-primary" type="submit">Edit</button></Link>
              </form >
               <form onSubmit={this.handleEditSubmit}>
                  <button className="btn btn-danger" type="submit" value={person.ID} onClick={e => this.onClick(i,e)}>Delete</button>
              </form>
              
            </td>
            </tr>
            

          )}
        </Table>
      </div>    
      </div>
  );
  }
}
export default Data;