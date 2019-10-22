import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div className="text-center text-white">
                <h2>Day 1 - Sign Up</h2>
                <p className="small"> 100 days of React</p>
                <p>Made with 
                <i class="fas fa-heart text-danger mx-1"></i> 
                by
                <a className="text-white font-weight-bolder mx-1" 
                href="https://www.linkedin.com/in/gers-lynch/">
                Gers!
                </a>
                </p>
            </div>
        )
    }
}
