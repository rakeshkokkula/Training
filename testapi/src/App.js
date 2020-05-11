import React from 'react';
import Login from './components/fb_login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Posts from "./components/Posts";
import Pages from "./components/Pages";
import Groups from "./components/Groups";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/pages" component={Pages}/>
        <Route path="/groups" component={Groups}/>
      </Switch>
      </BrowserRouter>
    // <Login />
  );
}

export default App;
