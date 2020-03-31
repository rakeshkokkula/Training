import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Registration from "./Registration";
import Data from './getData'
import Update from './update'

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Registration" component={Registration} />
        <Route path="/getData" component={Data} />
        <Route path="/update" component={Update} />

      </Switch>
      </BrowserRouter>,
      rootElement
    );