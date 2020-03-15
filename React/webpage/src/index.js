import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home.js";
import Registration from "./Registration.js";

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Registration.js" component={Registration} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );