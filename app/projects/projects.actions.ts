import * as actions from './projects.action-types';
import {Project} from './projects.state';

export const fetchProjects = () => ({type: actions.FETCH_PROJECTS});

export const fetchProjectsSuccess = (projects: Project[]) => ({type: actions.FETCH_PROJECTS_SUCCESS, projects});

export const fetchProjectsFail = () => ({type: actions.FETCH_PROJECTS_FAIL});

export const addProject = () => ({type: actions.ADD_PROJECT});

export const addProjectSuccess = (project: Project) => ({type: actions.ADD_PROJECT_SUCCESS, project});

export const addProjectFail = () => ({type: actions.ADD_PROJECT_FAIL});