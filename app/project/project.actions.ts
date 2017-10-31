import * as actions from './project.actions-types';

export const lintStart = (projectId: string) => ({type: actions.LINT_START, projectId});

export const lintStop = () => ({type: actions.LINT_STOP});

export const lintError = () => ({type: actions.LINT_ERROR});
