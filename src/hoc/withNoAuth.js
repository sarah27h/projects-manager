import React from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

// use withNoAuth HOC to check user auth and add route guarding
// and if user is logout then prevent him from
// access Dashboard, CreateProject, ProjectDetails
// and redirect them to "/signin"
const withAuth = (WrappedComponent) => {
    const HOC = (props) => {
        const { auth, url } = props;

        if (!auth.uid) {
            return <Redirect to="/signin" />
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