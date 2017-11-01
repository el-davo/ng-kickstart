import {takeEvery} from 'redux-saga';
import {call, put, select, take} from 'redux-saga/effects';
import {LINT_START} from '../../project.actions-types';
import {lintError} from '../../project.actions';
import {startLint} from '../lint.service';
import {Project} from '../../../projects/projects.state';

function* lint({projectId}) {
    try {
        const project: Project = yield select((state: any) => state.projects.projects[projectId]);

        const channel = yield call(startLint, project);

        while (true) {
            const action = yield take(channel);

            yield put(action);
        }
    } catch (err) {
        yield put(lintError());
    }
}

export function* lintStartSaga() {
    yield* takeEvery(LINT_START, lint);
}
