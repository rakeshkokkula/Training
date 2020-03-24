
import React, { Component } from "react";

class App extends Component{
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            age:'',
            gender:'',
            destination:'',
            isVegan:false,
            isKosher:false,
            isLactose:false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox"?
        this.setState({
            [name]:checked
        }):
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <main>
                <form>
                <label>FirstName:
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="Enter your First Name"
                    /></label><br />
                    <label>LastName:
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Enter your Last Name"
                    /></label><br/>
                    <label>Age:
                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Enter your age"
                    /></label><br/>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value='male'
                        checked={this.state.gender === 'male'}
                        onChange={this.handleChange}
                    />Male</label><br/>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value='female'
                        checked={this.state.gender === 'female'}
                        onChange={this.handleChange} 
                    />Female</label><br/>
                    <select
                        name="destination"
                        value={this.state.destination}
                        onChange={this.handleChange}
                    >
                    <option value="">--Please Choose a destination</option>
                    <option value="Germany">Germany</option>
                    <option value="Norway">Norway</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    </select>
                    <br/>
                    <label>
                        <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.isVegan}
                        />isVegan
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange}
                        checked={this.state.isKosher}
                        />isKosher
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                        name="isLactose"
                        onChange={this.handleChange}
                        checked={this.state.isLactose}
                        />isLactose
                    </label>
                    <br />
                    <button>Submit</button>
                    
                </form>
                <hr />
                <h2>Entered Info</h2>
        <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your Age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>isVegan:{this.state.isVegan? "Yes":"No"}</p>
        <p>isKosher:{this.state.isKosher? "Yes":"No"}</p>
        <p>isLactose:{this.state.isLactose? "Yes":"No"}</p>
            </main>
        )
    }
}

export default App