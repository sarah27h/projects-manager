import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux'; // connect to our redux state

const Navbar = (props) => {
    const { auth, profile } = props;

    // conditionally show sign links components based on isEmpty property
    const links = auth.isEmpty ? <SignOutLinks /> :   <SignInLinks profile={profile} />; 
    return (
        <nav className="nav-extended">
            <div className="nav-wrapper blue-grey darken-4">
                <div className="container">
                    
                    <Link to="/" className="brand-logo left">Project Manager</Link>
                    
                </div>
                
            </div>
            <div class="nav-content blue-grey darken-4">
                <div className="section container">
                    {links}
                </div>
            </div>
            
        </nav>
    )
    
}

// use authentication status from state
// add auth to component props
// to use it conditionally show sign links components based on it
// state.firebase.auth.isEmpty: true >> logout
//state.firebase.auth.isEmpty: false >> login

// add profile to component props to pass it down to <SignInLinks />
// to display user intials, this only works for the users you created using the SignUp form
// access user profile info inside our component
const mapStatetoProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

// pass mapStateToProps to connect
// so it know which data to get from store
export default connect(mapStatetoProps)(Navbar);