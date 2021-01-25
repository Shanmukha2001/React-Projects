import React, { Component, useState } from 'react'
import GenerateBricks from './GenerateBricks'
import './Main.css'
export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            numbers: [1,2,3,4]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        const prev = [...this.state.numbers]
        prev.push(prev.length + 1)
        this.setState({
            numbers: prev
        })
    }
    render() {
        return (
            <div>
                <GenerateBricks values={this.state.numbers} />
                <div className="bottom-btn">
                    <button className="btn" onClick={this.handleClick}>
                        +
                    </button>
                </div>
            </div>
        )
    }
}
