import {takeEvery} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';
import {LINT_START} from '../../project.actions-types';
import {lintError} from '../../project.actions';
import {getTslintFile, startLint} from '../lint.service';
import {Project} from '../../../projects/projects.state';

function* lint({projectId}) {
    try {
        const project: Project = yield select((state: any) => state.projects.projects[projectId]);

        console.log(projectId);
        console.log(project);
        const tslintConfig = yield call(getTslintFile, project);

        yield call(startLint, project, tslintConfig);
    } catch (err) {
        console.log(err);
        yield put(lintError());
    }
}

export function* lintStartSaga() {
    yield* takeEvery(LINT_START, lint);
}
