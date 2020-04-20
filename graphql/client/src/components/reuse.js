import React, { Component } from 'react'
import Header from '../Header'
import '../App.css'
import {useQuery} from "@apollo/react-hooks";
import { getAuthorsQuery} from './queries';

function MyInput(props){
    return(
       <div className="AddBook">
            <form className="" onSubmit={props.onSubmit}>
            <h1>{props.heading}</h1>
             <label>Name</label><br />
            <input className="formField" type={props.texttype} name={props.name} defaultValue={props.namevalue}  ref={props.inputRefText} onChange={props.handleChange} placeholder="Enter Your Name"/><br />
            <label>Message</label><br />
            <input className="formField" type={props.messagetype} name={props.message} defaultValue={props.messagevalue}  ref={props.inputRefText} onChange={props.handleChange} placeholder="Message"/><br/>
            <label>Number</label><br />
            <input className="formField" type={props.numtype} name={props.num} defaultValue={props.numvalue}  ref={props.inputRefText} onChange={props.handleChange} placeholder="Number"/><br />
            <select name="authorname" className="formField" defaultValue={props.authorname}  onChange={ props.handleChange} >
                        <option>Select author</option>
                        <DisplayAuthors />
                    </select> 
            <button className='myButton'>{props.button}</button>
            </form>
       </div>
    )
}


function DisplayAuthors(){
    const { loading, error, data } = useQuery(getAuthorsQuery);
    if(loading){
        return( <option disabled>Loading authors</option> );
    }
    if(error) return `Error! ${error.message}`; 
  
    else {
      return data.authors.map(author => {
          return( <option key={ author.id } value={author.name}>{ author.name }</option> );
      });
  }
  }

function ReuseComponents(props){
    
        let id = window.location.pathname
        if(id.length >= 9){
           return (
           <div>
                <MyInput 
                heading="Adding" 
                texttype="text" 
                messagetype="text" 
                numtype='number' 
                name="name" 
                message="message" 
                num="num" 
                namevalue={props.name}
                messagevalue={props.message}
                numvalue={props.num} 
                button="Add" 
                handleChange={props.handleChange}
                onSubmit={props.onSubmit}
                authorname={props.authorname}
                />
           </div>
           )
        }
        else if(id.length <= 9){
           return(
            <div>
               
           
            <MyInput 
            heading="Update" 
            texttype="text" 
            messagetype="text" 
            numtype='number' 
            name="name" 
            message="message" 
            num="num" 
            namevalue={props.name}
            messagevalue={props.message}
            numvalue={props.num} 
            button="Update"
            handleChange={props.handleChange}
            onSubmit={props.onUpdate}
            authorname="rakesh"
            />
            
       </div>
           )
        }


       
    
}


export default class Reuse extends Component {
    constructor(props){
        super(props)
        this.state={
                name:"",
                message:"",
                num:"",
                genre:"",
                authorname:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateForm = this.updateForm.bind(this)
        this.submitForm = this.submitForm.bind(this)
        
    }

  
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    updateForm(e){
        e.preventDefault();
       alert(`You have Updated the form\n Your Updated Details\n name:${this.state.name} message:${this.state.message} number:${this.state.num} authorname:${this.state.authorname}`)
        // updateBook().catch(error => {
        //   console.log(error);
        // });
        // const {id, name, genre, authorname} = this.state
        // this.setState({id : book.id});
        // if(name == ""){
        //   this.setState({name : book.name});
        // }else{
        //   this.setState({name : name});
        // }
        // if(genre == ""){
        //   this.setState({genre : book.genre});
        // }else{
        //   this.setState({genre : genre});
        // }
        // if(authorname == ""){
        //   this.setState({authorname : book.authorname});
        // }else{
        //   this.setState({authorname : authorname});
        // }
        
      }


      submitForm(e){
        e.preventDefault()
        alert(`You have Submitted the form\n Your entered Details\n name:${this.state.name} message:${this.state.message} number:${this.state.num}` )
      }


    render() {
 // const [updateAuthor] = useMutation(updateAuthorMutation, {
        //   variables: {
        //     id: this.state.id,
        //     name: this.state.name,
        //     age: this.state.age
            
        //   },
        //   refetchQueries: [{query: getAuthorsQuery}]
        // });
        
        
        return (
            <div>
                <Header />
                <ReuseComponents 
                handleChange={this.handleChange}
                name={this.state.name}
                message={this.state.mesage}
                num={this.state.num}
                onSubmit={this.submitForm}
                onUpdate={this.updateForm}
                />
                
                
            </div>
        )
    }
}
