import React, {Component} from 'react';
import Navbar from './layout/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

class Main extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
    
}

export default Main;