import React, { Component } from "react";

export default class LoginForm extends Component {
    render () {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <label htmlFor="username">Email address</label>
                    <input type="text" className="form-control" id="username" placeholder="Email Address" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button className="btn btn-default" onClick={this.handleLogin}>Log in</button>
            </div>)
    }
}

handleLogin(e) {
    var emailAddress = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    if (emailAddress && password) {
        localStorage.setItem("username", emailAddress);
        this.setState({ userName: emailAddress });
    } else {
        this.setState({ validationError: "There was a problem logging you in. Please check your credentials and try again." });
    }
}