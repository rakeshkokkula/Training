import React from 'react';

function LoginControl(props){
function UserGreeting(props){
  return <h1>Welcome Back !!!</h1>
}
function GuestGreeting(props){
  return <h1>Please Sign Up</h1>
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />
  }
  return <GuestGreeting />
}
function LoginButton(props){
  return (
    <button onClick = {props.onClick}>Login</button>
  )
}
function LogoutButton(props){
  return (
    <button onClick = {props.onClick}>Logout</button>
  )
}
}
export default LoginControl