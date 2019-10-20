import React, { Component } from 'react'

export default class SignUpForm extends Component {
    render() {
        return (
            <div>
                <h2>Sign Up</h2>
            <form>
                <input
                type="text"
                placeholder="Email"
                className="form-control form-control-lg
                my-3"
                />
                <input
                type="password"
                placeholder="Password"
                className="form-control form-control-lg
                my-3"
                />
                <input 
                type="password" 
                placeholder="Repeat Password"
                className="form-control form-control-lg
                my-3"
                />
                <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                >Sign Up</button>
                </form>
            </div>
        )
    }
}
