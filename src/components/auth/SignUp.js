import React, { Component } from 'react';

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    // handle input change
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
                <form onSubmit={this.handleSubmit} className="col s12 m6">
                    <h5>Sign Up</h5>
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            id="firstName" 
                            type="text" 
                            className="validate" 
                            value={this.state.firstName} 
                            onChange={this.handleChange}
                        />
                        <label htmlFor="firstName">First Name</label>
                        </div>
                    </div>
                    {/* start Last Name  */}
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            id="lastName" 
                            type="text" 
                            className="validate" 
                            value={this.state.lastName} 
                            onChange={this.handleChange}
                        />
                        <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    {/* start Emai  */}
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
                    {/* start Password  */}
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
                        <button className="btn light-blue z-depth-0" type="submit" name="action">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;