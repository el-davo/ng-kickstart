import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {projectsReducer as projects} from './projects/projects.reducer';

export const rootReducer = combineReducers({
    routing,
    projects
});
