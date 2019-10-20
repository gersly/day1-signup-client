import React, { Component } from 'react'

export default class ForgotPasswordForm extends Component {
    render() {
        return (
            <div>
                <h2>Forgot Password</h2>
            <form>
                <p 
                className="lead">
                Please enter your email associated with your account
                </p>
                <input
                type="text"
                placeholder="Email"
                className="form-control form-control-lg
                my-3"
                />
                <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                >Reset Password</button>
                </form>
            </div>
        )
    }
}
