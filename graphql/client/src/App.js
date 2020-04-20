import React, {Component} from 'react';
// import AddBooks from './AddBooks'
import GetData from './components/GetData'
// import AddAuthor from './components/AddAuthor'
import Reuse from './components/reuse';
import UpdateBook from './components/UpdateBook'
import UpdateAuthors from './components/UpdateAuthor'
import { Route } from 'react-router-dom'



export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                <UpdateBook
                  page="add"
                  
                  /> )} />
                <Route path="/Update/:id" render={(props) => (
                <UpdateBook
                  page="update"
                  {...props}
                  /> )} />
                <Route path="/Author/:id" render={(props) => (
                <UpdateAuthors
                  page="update"
                  {...props}
                  /> )}
                   />
                <Route path="/GetData" component={GetData} />
                <Route path="/AddAuthor" render={() => (
                <UpdateAuthors
                  page="add" /> )} />
                <Route path="/Reuse" component={Reuse} />
            </div>
        )
    }
}

