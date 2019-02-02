import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import withAuth from '../../hoc/withAuth'
import { compose } from 'redux';

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
        // call added signIn to component props to send user input to dispatch an action
        this.props.signIn(this.state);
    }

    render() {
        const {authError} = this.props
        console.log(this.props);
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="col s12 m6">
                    <h5>Sign In</h5>
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
                        <button className="btn light-blue z-depth-0" type="submit" name="action">
                            Sign In
                        </button>
                    </div>
                </form>
                {/* message to improve UX inform user when an error occurred */}
                <div className="red-text center">
                    { authError? <p> {authError} </p> : null}
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

// add signIn method to component props
// use it to dispatch action to authReducer
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (cerds) => { dispatch(signIn(cerds)) }
    }
}

// connect component to redux
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuth   // use HOC to add route guarding, check if user is logging then prevent him from  access SignIn, SignUp
)(SignIn)
