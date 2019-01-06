import React, { Component } from 'react';

class SignUp extends Component {
    
    render() {
        return(
            <div className="container">
                <h5>Sign Up</h5>
                <form className="col s12 m6">
                {/* start First Name  */}
                <div className="row">
                        <div className="input-field col s12">
                        <input 
                            id="firstName" 
                            type="text" 
                            className="validate"   
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
                        />
                        <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;