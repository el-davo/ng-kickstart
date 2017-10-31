import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {initReducer as init} from './init/init.reducer';
import {projectsReducer as projects} from './projects/projects.reducer';

export const rootReducer = combineReducers({
    routing,
    init,
    projects
});
