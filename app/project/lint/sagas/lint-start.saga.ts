import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {LINT_START} from '../../project.actions-types';
import {lintError} from '../../project.actions';

function* lint() {
    try {

    } catch (err) {
        yield put(lintError());
    }
}

export function* lintStartSaga() {
    yield* takeEvery(LINT_START, lint);
}
