import React from 'react';
import axios from 'axios';

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
  render() {
    return (
    <div className="App">
       <div className="left">
       <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Job</th>
          <th>Company</th>
          <th>Age</th>
          <th>City</th>
          <th>Action</th>
        </tr>
        { this.state.persons.map(person => 
          <tr>
            <td>{person.name}</td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
            <td>{person.job}</td>
            <td>{person.company}</td>
            <td>{person.age}</td>
            <td>{person.city}</td>
            <td>
              <form onSubmit={this.handleEditSubmit}>
                  <button type="submit" value={person.id} onClick={e => this.onEdit(e)}>Edit</button>
              </form>
               <form onSubmit={this.handleSubmit}>
                  <button type="submit" value={person.id} onClick={e => this.onClick(e)}>Delete</button>
              </form>
              
            </td>
            </tr>
          )}
        </table>
      </div>    </div>
  );
  }
}
export default Data;