import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {FETCH_PROJECTS} from '../projects.action-types';
import {fetchProjectsFail, fetchProjectsSuccess} from '../projects.actions';
import {ensureSettingsDirectoryExists, fetchProjects} from '../projects.service';

function* fetch() {
    try {
        yield call(ensureSettingsDirectoryExists);

        const todoList = yield call(fetchProjects);

        yield put(fetchProjectsSuccess(todoList));
    } catch (err) {
        yield put(fetchProjectsFail());
    }
}

export function* fetchProjectsSaga() {
    yield* takeEvery(FETCH_PROJECTS, fetch);
}
