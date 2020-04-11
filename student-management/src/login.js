import React from 'react';
import './head.css'
import loginData from './assets/data.json'
// import AdminData from './assets/admin.json'
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
            Admin:[],
            Student:[],
            EmailErr:"",
            passwordErr:""
              
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
            {loginData.map((item, index) => {
            const { email, password } = this.state
        if(email === item.email){
            
                if(email === item.email && password === item.password && "student" === item.role){
                localStorage.setItem("token", "fsdfsdfrg")
                this.setState({
                    SloggedIn:true,
                    Student:item.id
                })
                
                }
                else if(email === item.email && password === item.password && "admin" === item.role){
                localStorage.setItem("token", "fsdfsdfrg")
                this.setState({
                    AloggedIn:true,
                    Admin:item.id
                })
                
                }
                else{
                    this.setState({
                        EmailErr : "" ,
                        passwordErr:"Invalid password"
                    })
                   
                }
        }
        else if(email !== item.email && password === item.password){
            this.setState({
                EmailErr : "Invalid Email Id" ,
                passwordErr: ""
            })
           
        }
        else{
            this.setState({
                EmailErr : "Invalid Email Id" ,
                passwordErr:'Invalid Password'
            })
            
        }
        
    })
}
}


    render(){
        if(this.state.AloggedIn){
            return <Redirect to={`/admin/${this.state.Admin}`} />
            
        }
       else if(this.state.SloggedIn){
            return <Redirect to={`/student/${this.state.Student}`} />
        }
        return(
        <div className="Login">
            <div className='col-sm-12 forms'>
                
                <form name = "myForm" onSubmit = {this.submitForm} className="myForm">
                <h1 className='text'>Login</h1>
		            <label>Email: </label>
		            <input className="formField" type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder='e.g: user@gmail.com' required /><br/>
                    <div className="EmailErr">{this.state.EmailErr}</div>
                    <label>Password: </label>
		            <input className="formField" type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required /><br/>
                    <div className="EmailErr">{this.state.passwordErr}</div>
                    <button type="submit" className='myButton' >Login</button>
                </form>
            </div>
        </div>
        )
    }
}

export default Login