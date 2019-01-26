import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux'; // connect to our redux state

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


const mapStatetoProps = (state) => {
    console.log(state);
    return {

    }
}

// pass mapStateToProps to connect
// so it know which data to get from store
export default connect(mapStatetoProps)(Navbar);