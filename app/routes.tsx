import * as React from 'react';
import {hashHistory, Route, Router, IndexRoute} from 'react-router';
import InitContainer from './init/init.container';
import ProjectsContainer from './projects/projects.container';
import ProjectContainer from './project/project.container';

export const routes = (
    <Router history={hashHistory}>

        <Route path="/" component={InitContainer}>

            <IndexRoute component={ProjectsContainer}/>

            <Route path="/projects/:id">
                <IndexRoute component={ProjectContainer}/>
            </Route>
        </Route>
    </Router>
);
