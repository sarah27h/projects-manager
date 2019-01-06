import React, {Component} from 'react';
import Navbar from './layout/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';
import SignIn from './auth/SignIn';

class Main extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/project/:id" component={ProjectDetails} />
                        <Route path="/signin" component={SignIn} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
    
}

export default Main;