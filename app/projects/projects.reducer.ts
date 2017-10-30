import * as actions from './projects.action-types';
import {ProjectState, projectState} from './projects.state';

export const projectsReducer = (state: ProjectState = projectState, action): ProjectState => {
    switch (action.type) {
        case actions.FETCH_PROJECTS:
            return {...state, isFetchingProjects: true};
        case actions.FETCH_PROJECTS_SUCCESS:
            return {...state, isFetchingProjects: false, projects: action.projects};
        case actions.FETCH_PROJECTS_FAIL:
            return {...state, isFetchingProjects: false};
        case actions.ADD_PROJECT:
            return {...state, isAddingProject: true};
        case actions.ADD_PROJECT_SUCCESS:
            return {...state, isAddingProject: false, projects: {[action.project.id]: action.project}};
        case actions.ADD_PROJECT_FAIL:
            return {...state, isAddingProject: false};
        default:
            return state;
    }
};
