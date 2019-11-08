import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
           <div className="">
             <ul className="nav nav-pills mb-2" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a 
                className="nav-link active text-white font-weight-bolder" 
                id="pills-home-tab" data-toggle="pill"  
                href="#signup" role="tab" 
                aria-controls="pills-home" aria-selected="true">
                Sign Up
                </a>
            </li>
            <li className="nav-item">
                <a 
                className="nav-link text-white font-weight-bolder" 
                id="pills-profile-tab" data-toggle="pill" 
                href="#signin" role="tab" 
                aria-controls="pills-profile" aria-selected="false">
                Sign In
                </a>
            </li>
            <li className="nav-item nav-item-right">
                <a 
                className="nav-link text-white font-weight-bolder" 
                id="pills-contact-tab" data-toggle="pill" 
                href="#forgot" role="tab" 
                aria-controls="pills-contact" aria-selected="false">
                Forgot?
                </a>
            </li>
            </ul>

           </div>
        )
        }
}


 
           
