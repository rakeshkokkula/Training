import React, { Component } from 'react'
import '../App.css'
import Boxes from './Boxes'

export default class Grid extends Component {
    constructor(props){
        super(props)
        
    }
    createBox = () => {
        let Box = []
      
        for (let i = 0; i < (this.props.rounds); i++) {
            // const id = i+1
          Box.push(
              
              <div className="float">
           <Boxes number={i} img={this.props.counter} increment={this.props.increment}/>
              </div>
            
           )
        }
        return Box
      }
    render() {

        return (
            <div className="grid-main">
                {
                    this.props.rounds > 0 &&
                    <div>
                    <h1 className="text">You are going to do {this.props.rounds} Rounds</h1>
                    <div className="grid"> {this.createBox()}</div>
                    </div>
                }

                
            </div>
        )
    }
}
