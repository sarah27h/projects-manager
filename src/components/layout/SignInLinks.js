import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            
            {/* fire action creator (signOut) when user click on logout in navbar  */}
            <li><a onClick={props.signOut}>Log out</a></li>
            <li><NavLink to="/" className="btn btn-floating light-blue z-depth-0">SH</NavLink></li>
        </ul>
    )
}

// add signOut method to component props
// use it to dispatch action to authReducer
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);