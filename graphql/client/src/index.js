import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks"



const client = new ApolloClient({
  uri: 'http://localhost:4000',
});


ReactDOM.render(
  <ApolloProvider client = { client }>
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
          <App />
      </Switch>
      </BrowserRouter>
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);