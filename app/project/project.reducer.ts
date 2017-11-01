import * as actions from './project.actions-types';
import {ProjectState, projectState} from './project.state';

export const projectReducer = (state: ProjectState = projectState, action): ProjectState => {
    switch (action.type) {
        case actions.LINT_START:
            return {...state, isRunningLint: true};
        case actions.LINT_SUCCESS:
            return {...state, isRunningLint: false, isLintSuccess: true}
        case actions.LINT_FAIL:
            return {...state, isRunningLint: false, isLintSuccess: false};
        default:
            return state;
    }
};
