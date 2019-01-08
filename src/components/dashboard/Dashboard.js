import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
/* 
    using a HOC connect to connect our Dashboard component with store
    so our component can access data 
*/ 
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
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
    return {
        projects: state.project.projects
    }
}

/*
    pass mapStateToProps to connect
    so it know which data to get from store
*/
export default connect(mapStateToProps)(Dashboard);