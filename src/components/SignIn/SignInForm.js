import React, { Component } from 'react'

export default class SignInForm extends Component {
    render() {
        return (
            <div>
                <h2 className="text-white">Sign In</h2>
            <form>
                <input
                type="text"
                placeholder="Email"
                className="form-control form-control-lg
                my-2"
                />
                <input
                type="password"
                placeholder="Password"
                className="form-control form-control-lg
                my-2"
                />
                <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                >Sign In</button>
                </form>
            </div>
        )
    }
}
