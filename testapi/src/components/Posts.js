/* global FB*/
import React, { Component } from 'react'
// import Login from './fb_login'



 class Posts extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            id: ''
        }
        this.getIdName = this.getIdName.bind(this);
        
    }

    componentDidMount() {
        // Init()
        
       
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
      getIdName(){
        FB.api('/me', 'GET', function(response) {
            if(response){
              this.setState({name: response.name, id:response.id});
            }
            console.log(response)
            
          }.bind(this))
      }
    
    
    render() {
        return (
            <div>
                <p> Id: {this.state.id} Name: {this.state.name} </p>
                <button onClick={this.getIdName}>get</button>

            </div>
        )
    }
}

export default Posts

