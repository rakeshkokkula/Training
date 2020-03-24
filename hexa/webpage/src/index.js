import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Registration from "./Registration";
import Data from './getData'

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Registration" component={Registration} />
        <Route path="/getData" component={Data} />

      </Switch>
      </BrowserRouter>,
      rootElement
    );