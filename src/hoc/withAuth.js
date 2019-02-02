import React from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

// use withAuth HOC to check user auth and add route guarding
// and if user is logging then prevent him from 
// access SignIn, SignUp
// and redirect them to "/"
const withAuth = (WrappedComponent) => {
    const HOC = (props) => {
        const { auth, url } = props;
        
        if (auth.uid) {
            return <Redirect to="/" />
        } else {
            return <WrappedComponent { ...props } />
        }
    }

    const mapStateToProps = (state, ownProps) => {
        return {
            url: ownProps.location.pathname,
            auth: state.firebase.auth
        }
    }

    return connect(mapStateToProps)(HOC);
}

export default withAuth;