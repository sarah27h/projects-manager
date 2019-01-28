import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux'; // connect to our redux state

const Navbar = (props) => {
    const { auth } = props;
    // conditionally show sign links components based on isEmpty property
    const links = auth.isEmpty ? <SignOutLinks /> :   <SignInLinks />; 
    return (
        <nav>
            <div className="nav-wrapper blue-grey darken-4">
                <div className="container">
                    <Link to="/" className="brand-logo">Project Manager</Link>
    
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
const mapStatetoProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

// pass mapStateToProps to connect
// so it know which data to get from store
export default connect(mapStatetoProps)(Navbar);