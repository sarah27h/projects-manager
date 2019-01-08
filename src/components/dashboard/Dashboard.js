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

export default connect()(Dashboard);