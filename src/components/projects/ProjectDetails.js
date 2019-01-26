import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    // using destructuring
    const { project } = props;
    if(project) {
        return(
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action">
                    <p>posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p>1st October, 10am</p>
                </div>
            </div>
        )
    } else {
        {/* to improve user experience because take some time to sync that data */}
        return(
            <div className="container center">
                Loading projects...
            </div>
        )
    }
}

// add click project to props of this component to output it details
// by using project id from url
// ownProps component props before any modifications
const mapsStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id; // typeof(id) >> string
    // typeof(projects) >> object and each property of it contain objects
    // {    {cBodhoxTsoxnwrJBRnoL: {authorFirstName: "Sarah", ..},
    //      {coz9sITMVDPRkaZjAvcX: {authorFirstName: "Sarah", ..},
    //      dZO1LJ208ki1eDRMqvkT: {authorFirstName: "Kamal", ..},
    // }
    // to select any a project projects[id] or projects.id
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project : project
    }
}

// pass mapStateToProps to connect
// so it know which data to get from store
// projects collection is now sync with our store state via firestore object
export default compose(
    connect(mapsStateToProps),
    firestoreConnect([ { collection : 'projects' } ])   // take array of objects to connect db collection to our component
)(ProjectDetails);