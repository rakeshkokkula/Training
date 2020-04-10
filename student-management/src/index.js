import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from './admin'
import App from './App';
import Student from './student'
import Logout from './logout'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/admin" component={Admin} />
        <Route path="/student" component={Student} />
        <Route path="/logout" component={Logout} />
      </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
