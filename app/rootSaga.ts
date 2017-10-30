import {fork} from 'redux-saga/effects';
import {fetchProjectsSaga} from './projects/sagas/fetch-projects.saga';
import {addProjectSaga} from './projects/sagas/add-project.saga';
import {lintStartSaga} from './project/lint/sagas/lint-start.saga';

export function* rootSaga() {
    yield [
        fork(fetchProjectsSaga),
        fork(addProjectSaga),
        fork(lintStartSaga)
    ];
}
