import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        //use ES6 computed property to update key state
        // { [name]: value }
        this.setState({ [e.target.id] : e.target.value });
    }

    // handle user submit form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div className="container">
                <h5>Sign In</h5>
                <form onSubmit={this.handleSubmit} className="col s12 m6">
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            id="email" 
                            type="email" 
                            className="validate" 
                            value={this.state.email} 
                            onChange={this.handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            id="password" 
                            type="password" 
                            className="validate" 
                            value={this.state.password} 
                            onChange={this.handleChange}
                        />
                        <label htmlFor="password">Password</label>
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