import React, { Component } from 'react'

export default class ForgotPasswordForm extends Component {
    render() {
        return (
            <div>
                <h2 className="text-white">Forgot Password?</h2>
            <form>
                <input
                type="text"
                placeholder="Email"
                className="form-control form-control-lg
                my-3"
                />
                <p 
                className="lead">
                Please enter your email associated with your account
                </p>
                <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                >Reset Password</button>
                </form>
            </div>
        )
    }
}
