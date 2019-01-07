import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue-grey darken-4">
                <div className="container">
                    <Link to="/" className="brand-logo">Project Manager</Link>
                    <SignInLinks />
                    <SignOutLinks />
                </div>
            </div>
        </nav>
    )
    
}

export default Navbar;