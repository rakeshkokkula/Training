import React, { Component } from 'react'


window.fbAsyncInit = () => {
    FB.init({
      appId      : '2872491892819866',
      cookie     : true,
      xfbml      : true,
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
    })
  }

   // Load the SDK asynchronously
   (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

   // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  const testAPI = ()=>{
    // console.log('Welcome! Fetching your information.... ');
    document.getElementById('successful').innerHTML =
    'Welcome! Fetching your information.... ' ;
    FB.api('/me', function(response) {
      if(response){
        this.setState({name: response.name, id:response.id});
      }
      console.log(response)
     
    })
  }

  // This is called with the results from from FB.getLoginStatus().
 const statusChangeCallback = (response) => {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
    }
  }

  const checkLoginState = () => {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      this.setState({accessToken:response.authResponse.accessToken})
      console.log(accessToken)
    }.bind(this));
  }

  const handleClick = () => {
    FB.login(checkLoginState(),{scope:'public_profile, email'});
  }

export default {checkLoginState, handleClick, statusChangeCallback, testAPI}