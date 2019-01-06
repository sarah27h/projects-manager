import React, {Component} from 'react';
import Navbar from './layout/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';

class Main extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Dashboard} />
                        <Route path="/project/:id" component={ProjectDetails} />                        
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
    
}

export default Main;