import React, {Component} from 'react';
import Header from './Header'
import AddBook from './AddBooks'


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <AddBook />
            </div>
        )
    }
}

