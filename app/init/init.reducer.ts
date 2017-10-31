import {InitState, initState} from './init.state';
import * as actions from './init.action-types';

export const initReducer = (state: InitState = initState, action): InitState => {
    switch (action.type) {
        case actions.INIT_APP:
            return {...state, isInitializingApp: true};
        case actions.INIT_APP_SUCCESS:
            return {...state, isInitializingApp: false, isAppReady: true};
        case actions.INIT_APP_FAIL:
            return {...state, isInitializingApp: false};
        default:
            return state;
    }
};
