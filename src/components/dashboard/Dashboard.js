import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

// using a HOC connect to connect our Dashboard component with store
// so our component can access data
import { connect } from 'react-redux';

// firebaseConnect will use as a HOC 
// to connect <Dashboard/> with firestore collection
import { firestoreConnect } from 'react-redux-firebase';

// compose used to combine HOC (connect, firebaseConnect)
import { compose } from 'redux';

import withNoAuth from '../../hoc/withNoAuth'

class Dashboard extends Component {
    render() {
        /* use destructuring to grab projects off props*/
        const { projects, notifications } = this.props;
        console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

/* 
    map state from store to props for this component
    this method return an object which props are attached
    to props of that component
    so we can access them inside this component
*/
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // grab data from firestore property
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications
    }
}

/*
    pass mapStateToProps to connect
    so it know which data to get from store
*/
export default compose(
    connect(mapStateToProps),
    firestoreConnect([  // take array of objects to connect db collection to our component
        { collection: 'projects', orderBy: ['createAt', 'desc']},
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ]), 
    withNoAuth // use HOC to add route guarding, check if user is logout then prevent him from access Dashboard, CreateProject, ProjectDetails
)(Dashboard)