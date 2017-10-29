import * as React from 'react';
import {hashHistory, Route, Router} from 'react-router';
import ProjectsContainer from './projects/projects.container';

export const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={ProjectsContainer}/>
    </Router>
);
