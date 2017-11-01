import {takeEvery} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';
import {fetchProjects} from '../projects/projects.service';
import {fetchProjectsSuccess} from '../projects/projects.actions';
import {initAppFail, initAppSuccess} from './init.actions';
import {INIT_APP} from './init.action-types';

function* init() {
    try {
        const projects = yield call(fetchProjects);

        yield put(fetchProjectsSuccess(projects));

        yield put(initAppSuccess());
    } catch (err) {
        yield put(initAppFail());
    }
}

export function* initEpic() {
    yield* takeEvery(INIT_APP, init);
}
