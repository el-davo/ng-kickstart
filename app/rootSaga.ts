import {fork} from 'redux-saga/effects';
import {fetchProjectsSaga} from './projects/sagas/fetch-projects.saga';
import {addProjectSaga} from './projects/sagas/add-project.saga';

export function* rootSaga() {
    yield [
        fork(fetchProjectsSaga),
        fork(addProjectSaga)
    ];
}
