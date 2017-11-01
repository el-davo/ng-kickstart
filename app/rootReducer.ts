import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {initReducer as init} from './init/init.reducer';
import {projectsReducer as projects} from './projects/projects.reducer';
import {projectReducer as project} from './project/project.reducer';

export const rootReducer = combineReducers({
    routing,
    init,
    projects,
    project
});
