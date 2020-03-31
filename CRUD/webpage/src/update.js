import React from 'react'
import axios from 'axios';
import './head.css'
import {Link } from "react-router-dom";
import Header from './Header.js'


class Update extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        persons: [],
          users: []
          
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox"?
      this.setState({
        [name]:checked
      }):
        this.setState({
          [name]: value
        });
    }
        
    componentDidMount() {
      
      const id = this.props.location.pathname
      console.log(this.props.location.pathname);
        axios.get(`http://localhost:4000${id}`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      } 
 
    onSubmit(e) {
      e.preventDefault();
      const data = {
        name: this.state.name,
        course: this.state.course,
        email: this.state.email,
        mobile: this.state.mobile,
        joinImmediately: this.state.joinImmediately,
        joinLater: this.state.joinLater,
        subscribe: this.state.subscribe,
        notes: this.state.notes
      }
      console.log(data);
      axios.put('http://localhost:4000/put/${id}')
      .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })         
    
  }  

    render() {
      return (
          <div>
              <Header />
          
        <div className='row registration'>
        <div className='col-sm-12 forms'>
        { this.state.persons.map((person) => 
        <form name = "myForm" onSubmit={this.onSubmit}>
    <label>Id: </label><br/>
    <input type="text" 
          name="id" 
          readOnly 
          value={person.ID}
    /><br/>
    <label>Full Name: </label><br/>
    <input type="text" 
          name="name" 
          required 
          value={this.state.name}
          onChange={this.handleInputChange}
          onClick={this.state.name}
          placeholder="Enter your Name"
    /><br/>
    <label>Course: </label><br/>
    <select 
        name='course' 
        required 
        value={person.course}
        onChange={this.handleInputChange}>
        <option value="">Select Course</option>
        <option value="AWS">AWS</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React.js">React.js</option>
        <option value="Node.js">Node.js</option>
    </select><br/>
    <label>Email ID: </label><br/>
    <input 
          type="email" 
          name="email" 
          required 
          value={person.email}
          onChange={this.handleInputChange}
    /><br/>
    <label>Mobile No: </label><br/>
    <input 
          type="number" 
          name="mobile" 
          required
          value={person.mobile} 
          onChange={this.handleInputChange}
    /> <br />
    <input 
          type="checkbox" 
          name="joinImmediately" 
          onChange={this.handleInputChange}
          checked={person.joinImmediately}
    /> Join Immediately {" "}
    <input 
          type="checkbox" 
          name="joinLater" 
          onChange={this.handleInputChange}
          checked={person.joinLater}
    /> Join later <br/>
    <input 
          type="checkbox" 
          name="subscribe" 
          onChange={this.handleInputChange}
          checked={person.subscribe}
    /> Subscribe to our News<br/>
    <textarea 
          name="notes" 
          rows="5" 
          cols="30" 
          value={person.notes}
          required 
          onChange={this.handleInputChange}
    ></textarea><br/>
    <button 
          type="submit" 
          value="submit" 
          className='btn btn-success bt'>
          Submit</button>
</form>
        )}
<hr/>
      <h2>Name:{this.state.name}</h2>
      <Link to="/getData"><button className="btn btn-success" style={{margin:'15px',width:'100px'}}
  >GET</button></Link>
  <div>{this.users}</div>
</div>
</div>
</div>
      );
    }
  }
  
 export default Update 