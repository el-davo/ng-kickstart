import * as actions from './project.actions-types';
import {ProjectState, projectState} from './project.state';

export const projectReducer = (state: ProjectState = projectState, action): ProjectState => {
    switch (action.type) {
        default:
            return state;
    }
};