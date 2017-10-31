import * as actions from './init.action-types';

export function initApp() {
    return {type: actions.INIT_APP};
}

export function initAppSuccess() {
    return {type: actions.INIT_APP_SUCCESS};
}

export function initAppFail() {
    return {type: actions.INIT_APP_FAIL};
}