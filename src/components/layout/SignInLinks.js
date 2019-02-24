import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) => {
    return (
        <ul id="nav-mobile" className="tabs tabs-transparent">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            
            {/* fire action creator (signOut) when user click on logout in navbar  */}
            <li><a onClick={props.signOut}>Log out</a></li>
            {/* to display user intials, this only works for the users you created using the SignUp form */}
            <li><NavLink to="/" className="btn btn-floating light-blue z-depth-0">{props.profile.initials}</NavLink></li>
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