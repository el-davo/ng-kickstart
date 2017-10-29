import {takeEvery} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';
import {ADD_PROJECT} from '../projects.action-types';
import {addProjectFail, addProjectSuccess} from '../projects.actions';
import {addProject, ensureIsAngularCliProject, getPackageJson} from '../projects.service';
import {ProjectState} from '../projects.state';

function* add() {
    try {
        const {projects, addProjectForm: {location}}: ProjectState = yield select((state: any) => state.projects);

        yield call(ensureIsAngularCliProject, location);

        const packageJson = yield call(getPackageJson, location);

        yield call(addProject, [...projects, {location, name: packageJson.name}]);

        yield put(addProjectSuccess({location, name: packageJson.name}));
    } catch (err) {
        yield put(addProjectFail());
    }
}

export function* addProjectSaga() {
    yield* takeEvery(ADD_PROJECT, add);
}
