import * as actions from './project.actions-types';

export const lintStart = () => ({type: actions.LINT_START});

export const lintStop = () => ({type: actions.LINT_STOP});

export const lintError = () => ({type: actions.LINT_ERROR});
