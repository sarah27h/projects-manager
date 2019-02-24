import React from 'react';
import {NavLink} from 'react-router-dom';

const SignOutLinks = () => {
    return (
        <ul id="nav-mobile" className="tabs tabs-transparent">
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul>
    )
}

export default SignOutLinks;