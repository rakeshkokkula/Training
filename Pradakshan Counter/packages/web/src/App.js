import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Counter from './components/Counter'
import Grid from './components/grid'
import Sliders from './components/slider'

export default class App extends Component {
 
  render() {
    return (
      <div>
        <Route path="/" exact component={Counter}/>
        <Route path="/count" exact component={Grid} />
        />
        <Route path='/slider' component={Sliders} />
      </div>
    )
  }
}
