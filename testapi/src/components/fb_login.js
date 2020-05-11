/* global FB*/
import React, { Component } from 'react';
import image from './assets/images/2.jpg'
import '../App.css'
// import {Link } from 'react-router-dom'

 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken : '',
      name : '',
      id: '',
      pageMessage:'',
      groupMessage:'',
      url:'',
      isLoggedIn:false,
      selectedFile:'',
      data:[],
      pages:false,
      groups:true,
      groupsId:[],
      pageId:[]
    }
    this.checkLoginState = this.checkLoginState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.testAPI = this.testAPI.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.postInGroups = this.postInGroups.bind(this);
    this.postInPages = this.postInPages.bind(this);
    
  }
  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
onFileChange(e){
  this.setState({
    selectedFile: e.target.file
});
}

  componentDidMount() {
    
   
   window.fbAsyncInit = function() {
      FB.init({
        appId      : '2872491892819866',
        cookie     : true,
        xfbml      : true,
        fileupload : true,
        version    : 'v6.0'
      });
      FB.AppEvents.logPageView();
      FB.Event.subscribe('auth.statusChange', function(response) {
        if (response.authResponse) {
          this.checkLoginState();
          // console.log(response.authResponse.accessToken)
        } else {
          console.log('---->User cancelled login or did not fully authorize.');
        }
      }.bind(this));
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
  }


  

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  testAPI(){
    console.log('Welcome! Fetching your information.... ');
    FB.api('/me', 'GET', function(response) {
      if(response){
        this.setState({name: response.name, id:response.id, isLoggedIn:true});
      }
      console.log(response)
      
    }.bind(this))
    FB.api(
      '/me/groups',
      'GET',
      {},
      function(response) {
        if(response){
          this.setState({groupsId:response.data});
        }
          console.log(this.state.groupsId)
          // alert(response.data[0].message)
      }.bind(this)
    );
    FB.api('/me/accounts','GET',{},function(response) {
        if(response){
          this.setState({pageId:response.data});
        }
          console.log(this.state.pageId)
          // alert(response.data[0].message)
      }.bind(this)
    );
    
    FB.api('/me/picture', 'GET',{redirect:false, width:150, height:150}, function(response) {
      if(response){
        this.setState({ url:response.data.url});
      }
      console.log(response)
      
      console.log('Successful login for: ' + response.name);
      // document.getElementById('status').innerHTML =
      //   'Thanks for logging in, ' + response.name + '!';
    }.bind(this))
  }

  // This is called with the results from from FB.getLoginStatus().
  statusChangeCallback(response) {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      // document.getElementById('status').innerHTML = 'Please log ' +
      //   'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      // document.getElementById('status').innerHTML = 'Please log ' +
      // 'into Facebook.';
    }
  }

  checkLoginState() {
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
      this.setState({accessToken:response.authResponse.accessToken, isLoggedIn:true})
      console.log(this.state.accessToken)
      console.log(response)
    }.bind(this));
  }

  handleClick() {
    FB.login(this.checkLoginState());
  }

postInGroups(){

  this.state.groupsId.map((item)=>{
    return (
      
        FB.api(`/${item.id}/feed`, 'post', {message:this.state.groupMessage}, function(response) {
          if (!response || response.error) {
            alert('Error occured');
            console.log(item.id)
          } else {
            alert('success\n Post ID: ' + response.id);
          }
      
        })
        
    )
    
  })
 
}

postInPages(){
  this.state.pageId.map((item)=>{
    return (
      
        FB.api(`/${item.id}/feed`, 'post', {message:this.state.pageMessage, access_token:item.access_token}, function(response) {
          if (!response || response.error) {
            alert('Error occured');
            // console.log(item)
          } else {
            alert('success\n Post ID: ' + response.id);
          }
      
        })
        
    )
    
  })
}
  render() {
    return (
      <main className='main'>
        <h1 className='logo'>
              facebook
            </h1>

            {!this.state.isLoggedIn &&
          <div className="fb-login-button" 
          // scope="public_profile, email, manage_pages, publish_pages" 
          onClick={this.handleClick}
          // onlogin={this.checkLoginState}
          data-size="medium" 
          data-button-type="login_with" 
          data-layout="default" 
          data-auto-logout-link="true" 
          data-use-continue-as="true" 
          data-width=""></div>}
        
        
        
        {this.state.isLoggedIn &&
        <div>
        <div className='cover'>
          <img alt='cover-img' className='cover-img' src={image}/>
        <div className='profile'>
          <img alt='profile-img' className='profile-img' src={this.state.url}/>
          </div>
          <div className='name'>
        <h1>{this.state.name}</h1>
          </div>
        </div>
        
        {this.state.groups &&
        <div>
        <div className='nav'>
        <div className='nav-group'>
        <p className='nav-link-p active' onClick={()=>this.setState({groups:true, pages:false})}> Groups</p>
        </div>
        <div className='nav-pages'>
        <p className='nav-link-p' onClick={()=>this.setState({pages:true, groups:false})}> Pages</p>
        </div>
      </div>
      <div className='post-view'>
          <div className='post'>
          <img alt='dp-thumbnail' className='thumbnail' src={this.state.url}/>
         <input type='text' className='input' onChange={this.handleChange} placeholder="What's on your mind" name='groupMessage' value={this.state.groupMessage}/>
          {/* <input type='file' name='selectedFile' onChange={this.onFileChange}  />  */}
          
         <button className='post-btn' onClick={this.postInGroups}>post</button>
       </div>
       </div>
       </div>
         }
       {this.state.pages &&
       <div>
         <div className='nav'>
          <div className='nav-group'>
          <p className='nav-link-p' onClick={()=>this.setState({groups:true, pages:false})}> Groups</p>
          </div>
          <div className='nav-pages'>
          <p className='nav-link-p active' onClick={()=>this.setState({pages:true, groups:false})}> Pages</p>
          </div>
        </div>
        <div className='post-view'>
          <div className='post'>
            <img alt='dp-thumbnail' className='thumbnail' src={this.state.url}/>
         <input type='text' className='input' onChange={this.handleChange} placeholder="What's on your mind" name='pageMessage' value={this.state.pageMessage}/>
          {/* <input type='file' name='selectedFile' onChange={this.onFileChange}  />  */}
          
         <button className='post-btn' onClick={this.postInPages}>post</button>
       </div> 
       </div>
       </div>
        }
       </div> 
      }
      </main>
    );
  }
}

export default Login