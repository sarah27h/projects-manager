import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return(
            <div className="container">
                <h5>Sign In</h5>
                <form className="col s12 m6">
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label for="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;