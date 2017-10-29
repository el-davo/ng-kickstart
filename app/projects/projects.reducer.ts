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
        case actions.SHOW_ADD_PROJECT_MODAL:
            return {...state, showAddProjectModal: true};
        case actions.HIDE_ADD_PROJECT_MODAL:
            return {...state, showAddProjectModal: false};
        case actions.ADD_PROJECT:
            return {...state, isAddingProject: true};
        case actions.ADD_PROJECT_SUCCESS:
            return {
                ...state,
                isAddingProject: false,
                showAddProjectModal: false,
                projects: [...state.projects, action.project]
            };
        case actions.ADD_PROJECT_FAIL:
            return {...state, isAddingProject: false};
        case actions.HANDLE_UPDATE_FORM_LOCATION:
            return {...state, addProjectForm: {...state.addProjectForm, location: action.value}};
        default:
            return state;
    }
};
