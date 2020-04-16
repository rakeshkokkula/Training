import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App'
import UpdateBook from './components/UpdateBook'
import UpdateAuthors from './components/UpdateAuthor'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks"

import GetData from './components/GetData'
import AddAuthor from './components/AddAuthor'


const client = new ApolloClient({
  uri: 'http://localhost:4000',
});


ReactDOM.render(
  <ApolloProvider client = { client }>
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Update" component={UpdateBook} />
        <Route path="/Author" component={UpdateAuthors} />
        <Route path="/GetData" component={GetData} />
        <Route path="/AddAuthor" component={AddAuthor} />
        
      </Switch>
      </BrowserRouter>
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);