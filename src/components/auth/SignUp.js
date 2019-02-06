import React, { Component } from 'react';
import withAuth from '../../hoc/withAuth';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { compose } from 'redux';

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
        // call added signUp to component props to send user sign up info and dispatch a signUp action
        this.props.signUp(this.state);
    }
    
    render() {
        const { authError } = this.props;
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
                {/* message to improve UX inform user when an signUp error occurred */}
                <div className="red-text center">
                            { authError ? <p>{authError}</p> : null }
                </div>
            </div>
        )
    }
}

// add authError to component props
// to use it later to inform user when an error occurred
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

// add signUp method to component props
// use it to dispatch signUp action to authReducer
const mapDispatchToProps = (dispatch) =>{
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuth // use HOC to add route guarding, check if user is logging then prevent him from  access SignIn, SignUp
)(SignUp);
