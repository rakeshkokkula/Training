import React from 'react';
import './head.css'
import StudentData from './assets/data.json'
import AdminData from './assets/admin.json'
import { Redirect } from 'react-router-dom'


class Login extends React.Component{
    constructor(props){
        super(props)
        let AloggedIn = false
        let SloggedIn = false

        this.state = {
            email: "",
            password: "",
            AloggedIn ,
            SloggedIn ,
            Admin:[]
              
         }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    
    
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        {AdminData.map((item, index) => {
        const { email, password } = this.state
        if(email === item.email && password === item.password ){
            const data = [item.Id]
            data.push(data)
            localStorage.setItem("token", "fsdfsdfrg")
            this.setState({
                AloggedIn:true,
                
            })
        }
        
    })
}
    {StudentData.map((item, index) => {
    const { email, password } = this.state
    let data = []
        if(email === item.email && password === item.password){
            localStorage.setItem("token", "kjdchjdskjscds")
            data.push(item.id)
            this.setState({
                SloggedIn:true,
                Admin:item.id
            })
        }
        console.log(data)
        return data
        
    })
    }
        

}


    render(){
        if(this.state.AloggedIn){
            return <Redirect to={`/admin/${this.state.data}`} />
            
        }
       else if(this.state.SloggedIn){
            return <Redirect to={`/student/${this.state.Admin}`} />
        }
        return(
        <div className="Login">
            <div className='col-sm-12 forms'>
                
                <form name = "myForm" onSubmit = {this.submitForm} className="myForm">
                <h1 className='text'>Login</h1>
		            <label>Email: </label>
		            <input className="formField" type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder='e.g: user@gmail.com' required /><br/>
                    <label>Password: </label>
		            <input className="formField" type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required /><br/>
                    <button type="submit" className='myButton' >Login</button>
                </form>
            </div>
        </div>
        )
    }
}

export default Login