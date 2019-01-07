import React from 'react';
import {NavLink} from 'react-router-dom';

const SignInLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            <li><NavLink to="">Log out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating light-blue z-depth-0">SH</NavLink></li>
        </ul>
    )
}

export default SignInLinks;