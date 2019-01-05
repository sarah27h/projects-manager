import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Link to="/" class="brand-logo">Project Manager</Link>
                </div>
            </div>
        </nav>
    )
    
}

export default Navbar;