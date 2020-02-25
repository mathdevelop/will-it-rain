import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Project from './pages/Project';
import About from './pages/About';
import Home from './pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/projeto">
                <Project />
            </Route>
            <Route path="/sobre">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}