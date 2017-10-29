import * as actions from './projects.action-types';
import {Project} from './projects.state';

export const fetchProjects = () => ({type: actions.FETCH_PROJECTS});

export const fetchProjectsSuccess = (projects: Project[]) => ({type: actions.FETCH_PROJECTS_SUCCESS, projects});

export const fetchProjectsFail = () => ({type: actions.FETCH_PROJECTS_FAIL});

export const showAddProjectModal = () => ({type: actions.SHOW_ADD_PROJECT_MODAL});

export const hideAddProjectModal = () => ({type: actions.HIDE_ADD_PROJECT_MODAL});

export const addProject = () => ({type: actions.ADD_PROJECT});

export const addProjectSuccess = (project: Project) => ({type: actions.ADD_PROJECT_SUCCESS, project});

export const addProjectFail = () => ({type: actions.ADD_PROJECT_FAIL});

export const handleUpdateFormLocation = (value: string) => ({type: actions.HANDLE_UPDATE_FORM_LOCATION, value});